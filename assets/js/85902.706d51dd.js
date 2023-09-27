"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85902],{85902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=t(7896),o=(t(2784),t(30876));const i={},r=void 0,u={unversionedId:"auto-generated/previews/vue/map-navigation-overlay",id:"auto-generated/previews/vue/map-navigation-overlay",title:"map-navigation-overlay",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/map-navigation-overlay.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/map-navigation-overlay",permalink:"/docs/auto-generated/previews/vue/map-navigation-overlay",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/map-navigation-overlay.md",tags:[],version:"current",frontMatter:{}},v={},s=[],m={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport {\n  IxButton,\n  IxMapNavigation,\n  IxMapNavigationOverlay,\n  IxMenu,\n  IxMenuItem,\n} from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst overlay = ref(false);\n<\/script>\n\n<template>\n  <IxMapNavigation>\n    <div className="placeholder-logo" slot="logo"></div>\n    <IxMenu>\n      <IxMenuItem>Item 1</IxMenuItem>\n      <IxMenuItem>Item 2</IxMenuItem>\n      <IxMenuItem>Item 3</IxMenuItem>\n    </IxMenu>\n    <IxButton @click="overlay = true"> Open overlay </IxButton>\n    <div>\n      <IxMapNavigationOverlay\n        name="Custom overlay title"\n        icon="bulb"\n        @close-click="overlay = false"\n      >\n        Lorem ipsum\n      </IxMapNavigationOverlay>\n    </div>\n  </IxMapNavigation>\n</template>\n')))}p.isMDXComponent=!0}}]);