"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1661,76288],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(n),d=r,b=g["".concat(u,".").concat(d)]||g[d]||s[d]||a;return n?o.createElement(b,i(i({ref:t},p),{},{components:n})):o.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},76288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/toggle-button-secondary-outline",id:"auto-generated/previews/web-component/toggle-button-secondary-outline",title:"toggle-button-secondary-outline",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/toggle-button-secondary-outline.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/toggle-button-secondary-outline",permalink:"/docs/auto-generated/previews/web-component/toggle-button-secondary-outline",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/toggle-button-secondary-outline.md",tags:[],version:"current",frontMatter:{}},u={},l=[],p={toc:l};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <ix-toggle-button outline>Normal</ix-toggle-button>\n  <ix-toggle-button outline pressed>Pressed</ix-toggle-button>\n  <ix-toggle-button outline disabled>Disabled</ix-toggle-button>\n  <ix-toggle-button outline disabled loading> Loading </ix-toggle-button>\n</div>\n")))}s.isMDXComponent=!0}}]);