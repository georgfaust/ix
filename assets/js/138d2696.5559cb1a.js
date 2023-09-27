"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8675,2152],{30876:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2152:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(7896),a=(t(2784),t(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/angular/drawer.ts",id:"auto-generated/previews/angular/drawer.ts",title:"drawer.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/drawer.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/drawer.ts",permalink:"/docs/auto-generated/previews/angular/drawer.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/drawer.ts.md",tags:[],version:"current",frontMatter:{}},s={},u=[],p={toc:u};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-drawer [closeOnClickOutside]="true" [show]="show">\n      <span>Some content of drawer</span>\n    </ix-drawer>\n\n    <ix-button (click)="show = !show">Toggle drawer</ix-button>\n  `,\n})\nexport default class Drawer {\n  show = false;\n}\n')))}l.isMDXComponent=!0}}]);