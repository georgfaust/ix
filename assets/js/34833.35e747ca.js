"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34833],{34833:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var t=n(7896),l=(n(2784),n(30876));const a={},d=void 0,o={unversionedId:"auto-generated/previews/vue/flip-tile",id:"auto-generated/previews/vue/flip-tile",title:"flip-tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/flip-tile.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/flip-tile",permalink:"/docs/auto-generated/previews/vue/flip-tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/flip-tile.md",tags:[],version:"current",frontMatter:{}},p={},s=[],r={toc:s};function x(e){let{components:i,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},r,n,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { FlipTileState } from \'@siemens/ix\';\nimport { IxFlipTile, IxFlipTileContent, IxIcon } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <div className="example">\n    <IxFlipTile>\n      <div slot="header">Flip header</div>\n\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Primary">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Info">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Warning">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Alarm">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n  </div>\n</template>\n')))}x.isMDXComponent=!0}}]);