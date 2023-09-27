"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29572],{29572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(7896),s=(n(2784),n(30876));const a={},o=void 0,l={unversionedId:"auto-generated/previews/vue/tile",id:"auto-generated/previews/vue/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/tile.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/tile",permalink:"/docs/auto-generated/previews/vue/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/tile.md",tags:[],version:"current",frontMatter:{}},r={},d=[],c={toc:d};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxButton, IxIcon, IxIconButton, IxTile } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <div className="example">\n    <IxTile size="small">92.8 \xb0C</IxTile>\n\n    <IxTile size="medium" className="mr-1">\n      <div slot="header">Tile header</div>\n      <div className="text-l">92.8 \xb0C</div>\n    </IxTile>\n\n    <IxTile size="big">\n      <div\n        className="d-flex flex-grow-1 align-items-center justify-content-between"\n        slot="header"\n      >\n        Tile header\n        <IxIconButton ghost icon="context-menu"></IxIconButton>\n      </div>\n      <div slot="subheader">Temperature</div>\n      <div\n        style="\n          display: flex;\n          flex-direction: column;\n          height: 100%;\n          align-items: flex-end;\n          justify-content: space-between;\n        "\n      >\n        <span>92.8 \xb0C</span>\n      </div>\n      <div\n        className="d-flex h-100 align-items-center justify-content-end"\n        slot="footer"\n      >\n        <IxButton ghost slot="footer">\n          <IxIcon name="chevron-right-small"></IxIcon>Details\n        </IxButton>\n      </div>\n    </IxTile>\n  </div>\n</template>\n')))}u.isMDXComponent=!0}}]);