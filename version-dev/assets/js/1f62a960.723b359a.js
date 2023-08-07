"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94402],{30876:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},g=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||s[d]||i;return n?o.createElement(m,u(u({ref:t},g),{},{components:n})):o.createElement(m,u({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7896),r=(n(2784),n(30876));const i={},u=void 0,l={unversionedId:"auto-generated/previews/vue/icon-toggle-button-secondary-outline",id:"auto-generated/previews/vue/icon-toggle-button-secondary-outline",title:"icon-toggle-button-secondary-outline",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/icon-toggle-button-secondary-outline.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/icon-toggle-button-secondary-outline",permalink:"/version-dev/docs/auto-generated/previews/vue/icon-toggle-button-secondary-outline",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/icon-toggle-button-secondary-outline.md",tags:[],version:"current",frontMatter:{}},a={},c=[],g={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxToggleButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxToggleButton outline></IxToggleButton>\n  <IxToggleButton outline></IxToggleButton>\n  <IxToggleButton outline disabled></IxToggleButton>\n  <IxToggleButton outline disabled loading></IxToggleButton>\n\n  <IxToggleButton outline size="16"></IxToggleButton>\n  <IxToggleButton outline size="16" pressed></IxToggleButton>\n  <IxToggleButton outline size="16" disabled loading></IxToggleButton>\n\n  <IxToggleButton outline size="12"></IxToggleButton>\n  <IxToggleButton outline size="12" pressed></IxToggleButton>\n  <IxToggleButton outline size="12" disabled loading></IxToggleButton>\n</template>\n')))}s.isMDXComponent=!0}}]);