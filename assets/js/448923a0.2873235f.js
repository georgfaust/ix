"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20400,74956],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7896),o=(r(2784),r(30876));const a={},i=void 0,p={unversionedId:"auto-generated/previews/angular/group-context-menu.ts",id:"auto-generated/previews/angular/group-context-menu.ts",title:"group-context-menu.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/group-context-menu.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/group-context-menu.ts",permalink:"/docs/auto-generated/previews/angular/group-context-menu.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/group-context-menu.ts.md",tags:[],version:"current",frontMatter:{}},u={},c=[],l={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-group header="Header text" sub-header="Subheader text">\n      <ix-dropdown slot="dropdown">\n        <ix-dropdown-item label="Item 1"></ix-dropdown-item>\n        <ix-dropdown-item label="Item 2"></ix-dropdown-item>\n      </ix-dropdown>\n      <ix-group-item text="Example text 1"></ix-group-item>\n      <ix-group-item text="Example text 2"></ix-group-item>\n      <ix-group-item text="Example text 3"></ix-group-item>\n    </ix-group>\n  `,\n})\nexport default class GroupContextMenu {}\n')))}s.isMDXComponent=!0}}]);