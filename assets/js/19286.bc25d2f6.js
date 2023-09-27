"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19286],{19286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>r,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var o=t(7896),a=(t(2784),t(30876));const d={},l=void 0,s={unversionedId:"auto-generated/previews/web-component/modal",id:"auto-generated/previews/web-component/modal",title:"modal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/modal.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/modal",permalink:"/docs/auto-generated/previews/web-component/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/modal.md",tags:[],version:"current",frontMatter:{}},c={},m=[],i={toc:m};function r(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-button>Show modal</ix-button>\n<template id=\"modal-example-template\">\n  <ix-modal-header>Message headline</ix-modal-header>\n  <ix-modal-content>Message text lorem ipsum</ix-modal-content>\n  <ix-modal-footer>\n    <ix-button outline data-cancel>Cancel</ix-button>\n    <ix-button data-okay>OK</ix-button>\n  </ix-modal-footer>\n</template>\n<script type=\"module\">\n  import { showModal, closeModal, dismissModal } from '@siemens/ix';\n\n  function createExampleModal() {\n    const name = 'modal-example';\n    window.customElements.define(\n      name,\n      class extends HTMLElement {\n        isInitalRender = false;\n\n        constructor() {\n          super();\n        }\n\n        connectedCallback() {\n          if (this.isInitalRender) {\n            return;\n          }\n\n          this.isInitalRender = true;\n          this.firstRender();\n        }\n\n        firstRender() {\n          const modalTemplate = document.getElementById(\n            'modal-example-template'\n          );\n          const template = modalTemplate.content.cloneNode(true);\n\n          const cancelButton = template.querySelector('[data-cancel]');\n          const okayButton = template.querySelector('[data-okay]');\n\n          cancelButton.addEventListener('click', () => {\n            dismissModal(this);\n          });\n          okayButton.addEventListener('click', () => {\n            closeModal(this);\n          });\n\n          this.append(template);\n        }\n      }\n    );\n\n    return name;\n  }\n\n  (async function () {\n    const exampleModalName = createExampleModal();\n\n    await window.customElements.whenDefined('ix-button');\n    const button = document.querySelector('ix-button');\n\n    button.addEventListener('click', async () => {\n      const customModal = document.createElement(exampleModalName);\n\n      const modal = await showModal({\n        content: customModal,\n      });\n    });\n  })();\n<\/script>\n")))}r.isMDXComponent=!0}}]);