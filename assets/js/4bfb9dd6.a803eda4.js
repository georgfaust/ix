"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53820,2420],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=p(r),m=o,d=g["".concat(l,".").concat(m)]||g[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var n=r(7896),o=(r(2784),r(30876));const a={},i=void 0,u={unversionedId:"auto-generated/previews/vue/toggle-button-primary-outline",id:"auto-generated/previews/vue/toggle-button-primary-outline",title:"toggle-button-primary-outline",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/toggle-button-primary-outline.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/toggle-button-primary-outline",permalink:"/docs/auto-generated/previews/vue/toggle-button-primary-outline",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/toggle-button-primary-outline.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxToggleButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxToggleButton outline variant="primary">Normal</IxToggleButton>\n  <IxToggleButton outline variant="primary" pressed>Pressed</IxToggleButton>\n  <IxToggleButton outline variant="primary" disabled>Disabled</IxToggleButton>\n  <IxToggleButton outline variant="primary" disabled loading>Loading</IxToggleButton>\n</template>\n')))}s.isMDXComponent=!0}}]);