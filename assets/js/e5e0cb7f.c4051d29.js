"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13823,22160],{30876:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22160:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7896),a=(t(2784),t(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/vue/slider-marker",id:"auto-generated/previews/vue/slider-marker",title:"slider-marker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/slider-marker.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/slider-marker",permalink:"/docs/auto-generated/previews/vue/slider-marker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/slider-marker.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\n  import { IxSlider } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxSlider :marker="[0, 25, 50, 75, 100]">\n    <span slot="label-start">0</span>\n    <span slot="label-end">100</span>\n  </IxSlider>\n\n  <IxSlider :min="0" :max="50" :step="10" :marker="[0, 10, 20, 30, 40, 50]">\n    <span slot="label-start">0</span>\n    <span slot="label-end">100</span>\n  </IxSlider>\n</template>\n')))}u.isMDXComponent=!0}}]);