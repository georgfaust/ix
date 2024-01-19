"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76470],{30876:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91870:(e,t,r)=>{r.d(t,{Z:()=>k,C:()=>_});var n=r(89817),i=r(37949),o=r(90077),a=r(58318),s=r(6277),l=r(2784);const c="Card__List_PIGW",d="Card_EPsO",p="Auto__Width_RXP2",u="Card_big__rLc",m="With__Icon__M6w",f="Splitter_xIp1",g="Label_uVaA",b="Full__Height_Aspr",y="Card__Primary_p1H3",v="Icon_ZZVP";function k(e){var t;const r=(0,o.Z)("/"),{preferredVersion:c}=(0,i.J)();let k=e.icon;return null!=(t=e.icon)&&t.startsWith("/")&&(k=r+e.icon.substring(1)),l.createElement(n.Z,{to:function(){var t;if(null!=(t=e.link)&&t.startsWith("http"))return e.link;if(!c)return(0,o.Z)(`/docs/${e.link}`);const r=c.path;return(0,o.Z)(`${r}/${e.link}`)}(),className:(0,s.Z)(d,{[y]:e.isPrimary,[m]:k,[p]:e.autoWidth},"big"===e.size?u:d),style:e.style},l.createElement("div",{className:(0,s.Z)(g,"text-h2",{[b]:!k})},e.label,e.children),k?l.createElement(l.Fragment,null,l.createElement("div",{className:f}),l.createElement("div",{className:v},l.createElement(a.RI,{name:k,size:"32"}))):null)}function _(e){return l.createElement("div",{className:(0,s.Z)(c)},e.children)}},48544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7896),i=(r(2784),r(30876)),o=r(91870);const a={sidebar_position:1,sidebar_title:"Getting started",title:"Getting started",hide_table_of_contents:!0},s=void 0,l={unversionedId:"getting-started-for-designers",id:"getting-started-for-designers",title:"Getting started",description:"",source:"@site/docs/getting-started-for-designers.md",sourceDirName:".",slug:"/getting-started-for-designers",permalink:"/version-dev/docs/getting-started-for-designers",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/getting-started-for-designers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_title:"Getting started",title:"Getting started",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Changelog",permalink:"/version-dev/docs/installation/CHANGELOG"},next:{title:"Design kit",permalink:"/version-dev/docs/design-kit/"}},c={},d=[],p={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.C,{mdxType:"CardList"},(0,i.kt)(o.Z,{label:"iX design kits",isPrimary:!0,size:"big",link:"design-kit",icon:"disk",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"iX for developers",link:"getting-started",icon:"rocket",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"Industrial icon system",link:"icon-library/icons",icon:"language",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"Color palette",link:"theming/colors",icon:"bulb",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"Font System",link:"theming/fonts",icon:"book",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"Components",link:"controls/application-frame/application",icon:"configuration",mdxType:"Card"})))}u.isMDXComponent=!0}}]);