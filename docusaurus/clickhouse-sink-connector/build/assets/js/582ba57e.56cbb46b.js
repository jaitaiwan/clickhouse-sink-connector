"use strict";(self.webpackChunkclickhouse_sink_connector=self.webpackChunkclickhouse_sink_connector||[]).push([[402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=l,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const i={},a=void 0,o={unversionedId:"doc/k8s_pipeline_tools",id:"doc/k8s_pipeline_tools",title:"k8s_pipeline_tools",description:"minikube",source:"@site/docs/doc/k8s_pipeline_tools.md",sourceDirName:"doc",slug:"/doc/k8s_pipeline_tools",permalink:"/doc/k8s_pipeline_tools",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"k8s_pipeline_setup",permalink:"/doc/k8s_pipeline_setup"},next:{title:"mutable_data",permalink:"/doc/mutable_data"}},s={},c=[{value:"minikube",id:"minikube",level:3},{value:"k9s",id:"k9s",level:3},{value:"kubectl",id:"kubectl",level:3},{value:"jq",id:"jq",level:3},{value:"helm",id:"helm",level:3},{value:"mysql",id:"mysql",level:3},{value:"clickhouse-client",id:"clickhouse-client",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"minikube"},"minikube"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64\ninstall minikube-linux-amd64 ~/bin/minikube\nrm minikube-linux-amd64 \nminikube version\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\nminikube status\n")),(0,l.kt)("h3",{id:"k9s"},"k9s"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'VERSION="v0.25.18"\nwget https://github.com/derailed/k9s/releases/download/$VERSION/k9s_Linux_x86_64.tar.gz\ninstall k9s ~/bin/k9s\n')),(0,l.kt)("h3",{id:"kubectl"},"kubectl"),(0,l.kt)("h3",{id:"jq"},"jq"),(0,l.kt)("p",null,"Ubuntu"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && sudo apt-get install jq\n")),(0,l.kt)("h3",{id:"helm"},"helm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | HELM_INSTALL_DIR=~/bin USE_SUDO=false bash\nhelm version\n")),(0,l.kt)("h3",{id:"mysql"},"mysql"),(0,l.kt)("h3",{id:"clickhouse-client"},"clickhouse-client"))}m.isMDXComponent=!0}}]);