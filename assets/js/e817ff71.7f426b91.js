"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10396],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7896),l=(n(2784),n(30876));const i={},a=void 0,o={unversionedId:"auto-generated/previews/vue/pill",id:"auto-generated/previews/vue/pill",title:"pill",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/pill.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/pill",permalink:"/docs/auto-generated/previews/vue/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/pill.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxPill } from \'@siemens/ix-vue\';\n\nconst styled = {\n  width: \'8rem\',\n};\n<\/script>\n\n<template>\n  <IxPill variant="custom" color="white" background="purple"> Label </IxPill>\n\n  <IxPill>Label</IxPill>\n  <IxPill outline>Label</IxPill>\n  <IxPill :style="styled">Label</IxPill>\n\n  <IxPill icon="star">Label</IxPill>\n  <IxPill icon="star" :style="styled"> Label </IxPill>\n  <IxPill outline alignLeft icon="star" :style="styled"> Label </IxPill>\n\n  <IxPill variant="alarm">Label</IxPill>\n  <IxPill variant="alarm" outline> Label </IxPill>\n  <IxPill variant="alarm" :style="styled"> Label </IxPill>\n\n  <IxPill variant="alarm" icon="star"> Label </IxPill>\n  <IxPill variant="alarm" icon="star" :style="styled"> Label </IxPill>\n  <IxPill variant="alarm" outline alignLeft icon="star" :style="styled">\n    Label\n  </IxPill>\n</template>\n')))}p.isMDXComponent=!0}}]);