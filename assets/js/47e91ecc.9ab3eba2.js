"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49857,13689],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,b=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return n?o.createElement(b,i(i({ref:t},d),{},{components:n})):o.createElement(b,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7896),a=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/modal-sizes",id:"auto-generated/previews/web-component/modal-sizes",title:"modal-sizes",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/modal-sizes.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/modal-sizes",permalink:"/docs/auto-generated/previews/web-component/modal-sizes",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/modal-sizes.md",tags:[],version:"current",frontMatter:{}},l={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="modal-sizes-example">\n  <ix-button data-modal-size="360">Show modal size 360</ix-button>\n  <ix-button data-modal-size="480">Show modal size 480</ix-button>\n  <ix-button data-modal-size="600">Show modal size 600</ix-button>\n  <ix-button data-modal-size="720">Show modal size 720</ix-button>\n  <ix-button data-modal-size="840">Show modal size 840</ix-button>\n  <ix-button data-modal-size="full-width">Show full-width modal</ix-button>\n  <ix-button data-modal-size="full-screen"\n    >Show modal size full-screen</ix-button\n  >\n</div>\n\n<template id="modal-example-template">\n  <ix-button style="width: 100%"></ix-button>\n</template>\n<script type="module">\n  import { showModal, dismissModal } from \'@siemens/ix\';\n\n  function createExampleModal() {\n    const name = \'modal-example\';\n    window.customElements.define(\n      name,\n      class extends HTMLElement {\n        isInitalRender = false;\n\n        constructor() {\n          super();\n\n          this.size = \'360\';\n        }\n\n        connectedCallback() {\n          if (this.isInitalRender) {\n            return;\n          }\n\n          this.isInitalRender = true;\n          this.firstRender();\n        }\n\n        firstRender() {\n          const modalTemplate = document.getElementById(\n            \'modal-example-template\'\n          );\n          const template = modalTemplate.content.cloneNode(true);\n          const button = template.querySelector(\'ix-button\');\n          button.innerText = `Modal with size ${this.size}`;\n          button.addEventListener(\'click\', () => dismissModal(this));\n          this.append(template);\n        }\n      }\n    );\n\n    return name;\n  }\n\n  (async function () {\n    const exampleModalName = createExampleModal();\n\n    await window.customElements.whenDefined(\'ix-button\');\n    const buttons = document.querySelectorAll(\'ix-button\');\n\n    buttons.forEach((button) =>\n      button.addEventListener(\'click\', async () => {\n        const customModal = document.createElement(exampleModalName);\n        customModal.size = button.getAttribute(\'data-modal-size\');\n        const modal = await showModal({\n          content: customModal,\n          size: customModal.size,\n        });\n      })\n    );\n  })();\n<\/script>\n')))}m.isMDXComponent=!0}}]);