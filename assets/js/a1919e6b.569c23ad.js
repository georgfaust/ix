"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6130],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7896),o=(t(2784),t(30876));const a={sidebar_position:1,sidebar_title:"Angular",title:"Angular"},i=void 0,l={unversionedId:"installation/angular",id:"installation/angular",title:"Angular",description:"Install dependencies",source:"@site/docs/installation/angular.md",sourceDirName:"installation",slug:"/installation/angular",permalink:"/docs/installation/angular",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/installation/angular.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_title:"Angular",title:"Angular"},sidebar:"mySidebar",previous:{title:"Installation",permalink:"/docs/installation/"},next:{title:"React",permalink:"/docs/installation/react"}},s={},p=[{value:"Install dependencies",id:"install-dependencies",level:3},{value:"npm",id:"npm",level:4},{value:"yarn",id:"yarn",level:4},{value:"Import styles",id:"import-styles",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,o.kt)("p",null,"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-angular")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-icons")," using a package manager:"),(0,o.kt)("h4",{id:"npm"},"npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i -S @siemens/ix-angular @siemens/ix-icons\n")),(0,o.kt)("h4",{id:"yarn"},"yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @siemens/ix-angular @siemens/ix-icons\n")),(0,o.kt)("h3",{id:"import-styles"},"Import styles"),(0,o.kt)("p",null,"Import the iX styling in your global stylesheet (e.g.: ",(0,o.kt)("inlineCode",{parentName:"p"},"src/styles.scss"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@import '@siemens/ix/dist/siemens-ix/siemens-ix.css';\n")),(0,o.kt)("p",null,"Import ",(0,o.kt)("inlineCode",{parentName:"p"},"IxModule")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserAnimationsModule")," (in some cases also the ",(0,o.kt)("inlineCode",{parentName:"p"},"RouterModule.forRoot([/** your routes **/])"),") in your application module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { IxModule } from '@siemens/ix-angular';\nimport { AppRoutingModule } from './app-routing.module';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [\n    BrowserModule,\n    AppRoutingModule,\n    IxModule.forRoot(),\n    BrowserAnimationsModule,\n  ],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n")))}c.isMDXComponent=!0}}]);