"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79829,518],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,v=y["".concat(u,".").concat(f)]||y[f]||p[f]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/vue/key-value-list-with-icon",id:"auto-generated/previews/vue/key-value-list-with-icon",title:"key-value-list-with-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/key-value-list-with-icon.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/key-value-list-with-icon",permalink:"/docs/auto-generated/previews/vue/key-value-list-with-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/key-value-list-with-icon.md",tags:[],version:"current",frontMatter:{}},u={},c=[],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxKeyValue, IxKeyValueList } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxKeyValueList>\n    <IxKeyValue\n      icon="location"\n      label="Label"\n      labelPosition="left"\n      value="Value"\n    ></IxKeyValue>\n    <IxKeyValue\n      icon="location"\n      label="Label"\n      labelPosition="left"\n      value="Value"\n    ></IxKeyValue>\n    <IxKeyValue\n      icon="location"\n      label="Label"\n      labelPosition="left"\n      value="Value"\n    ></IxKeyValue>\n  </IxKeyValueList>\n</template>\n')))}p.isMDXComponent=!0}}]);