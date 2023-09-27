"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61038],{61038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=t(7896),o=(t(2784),t(30876));const s={},i=void 0,c={unversionedId:"auto-generated/previews/angular/modal-by-instance-content.ts",id:"auto-generated/previews/angular/modal-by-instance-content.ts",title:"modal-by-instance-content.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/modal-by-instance-content.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/modal-by-instance-content.ts",permalink:"/docs/auto-generated/previews/angular/modal-by-instance-content.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/modal-by-instance-content.ts.md",tags:[],version:"current",frontMatter:{}},r={},l=[],d={toc:l};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\nimport { IxActiveModal } from '@siemens/ix-angular';\n\n@Component({\n  template: `\n    <ix-modal-header> Message headline </ix-modal-header>\n    <ix-modal-content>\n      Message text lorem ipsum: {{ activeModal.data }}\n    </ix-modal-content>\n    <ix-modal-footer>\n      <ix-button\n        outline\n        class=\"dismiss-modal\"\n        (click)=\"activeModal.dismiss('dismiss')\"\n      >\n        Cancel\n      </ix-button>\n      <ix-button class=\"close-modal\" (click)=\"activeModal.close('okay')\">\n        OK\n      </ix-button>\n    </ix-modal-footer>\n  `,\n})\nexport default class ModalByInstanceContent {\n  constructor(readonly activeModal: IxActiveModal) {}\n\n  close() {\n    this.activeModal.close('My close response');\n  }\n}\n")))}m.isMDXComponent=!0}}]);