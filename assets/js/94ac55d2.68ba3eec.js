"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1947,59076],{30876:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,p(p({ref:t},i),{},{components:r})):n.createElement(m,p({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7896),a=(r(2784),r(30876));const o={},p=void 0,c={unversionedId:"auto-generated/previews/angular/upload.ts",id:"auto-generated/previews/angular/upload.ts",title:"upload.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/upload.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/upload.ts",permalink:"/docs/auto-generated/previews/angular/upload.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/upload.ts.md",tags:[],version:"current",frontMatter:{}},u={},l=[],i={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: ` <ix-upload></ix-upload> `,\n})\nexport default class Upload {}\n")))}s.isMDXComponent=!0}}]);