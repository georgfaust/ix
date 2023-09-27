"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61848,49717],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,f=m["".concat(l,".").concat(g)]||m[g]||p[g]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/settings.ts",id:"auto-generated/previews/angular/settings.ts",title:"settings.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/settings.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/settings.ts",permalink:"/docs/auto-generated/previews/angular/settings.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/settings.ts.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { AfterViewInit, Component, ElementRef, ViewChild } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-basic-navigation>\n      <div class="placeholder-logo" slot="logo"></div>\n      <ix-menu #menu>\n        <ix-menu-settings>\n          <ix-menu-settings-item\n            label="Example Setting 1"\n          ></ix-menu-settings-item>\n          <ix-menu-settings-item\n            label="Example Setting 2"\n          ></ix-menu-settings-item>\n        </ix-menu-settings>\n      </ix-menu>\n    </ix-basic-navigation>\n  `,\n})\nexport default class Settings implements AfterViewInit {\n  @ViewChild(\'menu\', { read: ElementRef })\n  menuRef!: ElementRef<HTMLIxMenuElement>;\n\n  ngAfterViewInit() {\n    const { nativeElement } = this.menuRef;\n    nativeElement.toggleSettings(true);\n  }\n}\n')))}p.isMDXComponent=!0}}]);