from integration.tests.steps.sql import *
from integration.tests.steps.statements import *
from integration.tests.steps.service_settings_steps import *


@TestFeature
def insert_update_delete(self):
    """Check that after parallel `INSERT`, `UPDATE` and `DELETE` queries MySQL and Clickhouse has the same data."""
    table_name = f"table_{getuid()}"

    with Given("I create MySQL to ClickHouse replicated table"):
        for clickhouse_table_engine in self.context.clickhouse_table_engines:
            create_mysql_to_clickhouse_replicated_table(
                name=table_name,
                mysql_columns="x INT",
                clickhouse_columns="x Int32",
                clickhouse_table_engine=clickhouse_table_engine,
            )

    with When(
        "I perform insert, update and delete in MySQL to make parallel inserts, updates and deletes"
        " in replicated ClickHouse table"
    ):
        By(f"insert 10000 rows", test=complex_insert, parallel=True)(
            node=self.context.cluster.node("mysql-master"),
            table_name=table_name,
            values=["({x},{y})", "({x},{y})"],
            partitions=1,
            parts_per_partition=1,
            block_size=10000,
        )

        By(
            f"delete rows with `x` column value less then 10",
            test=delete,
            parallel=True,
        )(row_delete=True, table_name=table_name, condition="x < 10")

        By(
            f"update rows with `x` column value more then 20",
            test=update,
            parallel=True,
        )(row_update=True, table_name=table_name, condition="x > 20")

        By(
            f"delete rows with `x` column value less then 100",
            test=delete,
            parallel=True,
        )(row_delete=True, table_name=table_name, condition="x < 100")

        By(
            f"update rows with `x` column value more then 20",
            test=update,
            parallel=True,
        )(row_update=True, table_name=table_name, condition="x > 30")

        join()

    with Then(
        "I check that MySQL tables and Clickhouse replication tables have the same data"
    ):
        complex_check_creation_and_select(
            table_name=table_name,
            statement="count(*)",
            with_final=True,
        )


@TestModule
@Name("parallel")
def module(self):
    """Check for MySql to ClickHouse replication of parallel inserts, updates and deletes."""
    with Pool(1) as executor:
        try:
            for feature in loads(current_module(), Feature):
                Feature(test=feature, parallel=True, executor=executor)()
        finally:
            join()