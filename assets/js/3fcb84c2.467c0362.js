"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23014,4819],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/react/icon-toggle-button-secondary-ghost",id:"auto-generated/previews/react/icon-toggle-button-secondary-ghost",title:"icon-toggle-button-secondary-ghost",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/icon-toggle-button-secondary-ghost.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/icon-toggle-button-secondary-ghost",permalink:"/docs/auto-generated/previews/react/icon-toggle-button-secondary-ghost",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/icon-toggle-button-secondary-ghost.md",tags:[],version:"current",frontMatter:{}},s={},u=[],l={toc:u};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxIconToggleButton } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <>\n      <IxIconToggleButton ghost></IxIconToggleButton>\n      <IxIconToggleButton pressed ghost></IxIconToggleButton>\n      <IxIconToggleButton disabled ghost></IxIconToggleButton>\n      <IxIconToggleButton disabled loading ghost></IxIconToggleButton>\n    </>\n  );\n};\n")))}g.isMDXComponent=!0}}]);