"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6916],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,m=g["".concat(u,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},99521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7896),o=(n(2784),n(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/vue/icon-toggle-button-secondary",id:"auto-generated/previews/vue/icon-toggle-button-secondary",title:"icon-toggle-button-secondary",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/icon-toggle-button-secondary.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/icon-toggle-button-secondary",permalink:"/version-dev/docs/auto-generated/previews/vue/icon-toggle-button-secondary",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/icon-toggle-button-secondary.md",tags:[],version:"current",frontMatter:{}},u={},l=[],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script setup lang=\"ts\">\nimport { IxToggleButton } from '@siemens/ix-vue';\n<\/script>\n\n<template>\n  <IxToggleButton></IxToggleButton>\n  <IxToggleButton pressed></IxToggleButton>\n  <IxToggleButton disabled></IxToggleButton>\n  <IxToggleButton disabled loading></IxToggleButton>\n</template>\n")))}p.isMDXComponent=!0}}]);