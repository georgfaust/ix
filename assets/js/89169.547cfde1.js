"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89169],{89169:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=t(7896),a=(t(2784),t(30876));const i={},r=void 0,s={unversionedId:"auto-generated/previews/web-component/input-search",id:"auto-generated/previews/web-component/input-search",title:"input-search",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/input-search.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/input-search",permalink:"/docs/auto-generated/previews/web-component/input-search",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/input-search.md",tags:[],version:"current",frontMatter:{}},c={},p=[],u={toc:p};function l(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Input Search example</title>\n  </head>\n  <body class="theme-brand-dark">\n    <form class="needs-validation m-2">\n      <ix-input-group>\n        <span slot="input-start">\n          <ix-icon name="search" size="16"></ix-icon>\n        </span>\n        <input onInput="toggleClear()" id="input-string" type="string" />\n        <span slot="input-end">\n          <ix-icon-button\n            id="clear-button"\n            icon="clear"\n            ghost="{true}"\n            size="16"\n            onClick="{clearInput()}"\n          ></ix-icon-button>\n        </span>\n      </ix-input-group>\n    </form>\n    <script>\n      toggleClear();\n      function clearInput() {\n        document.getElementById(\'input-string\').value = \'\';\n        toggleClear();\n      }\n\n      function toggleClear() {\n        const hasContent = document.getElementById(\'input-string\').value !== \'\';\n        document.getElementById(\'clear-button\').style.display = hasContent\n          ? \'block\'\n          : \'none\';\n      }\n    <\/script>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n')))}l.isMDXComponent=!0}}]);