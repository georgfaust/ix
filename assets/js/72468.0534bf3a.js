"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72468],{72468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(7896),a=(t(2784),t(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/loading",id:"auto-generated/previews/web-component/loading",title:"loading",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/loading.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/loading",permalink:"/docs/auto-generated/previews/web-component/loading",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/loading.md",tags:[],version:"current",frontMatter:{}},d={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-button>Start loading</ix-button>\n<script type=\"module\">\n  import { showModalLoading } from '@siemens/ix';\n\n  const btn = document.querySelector('ix-button');\n  btn.addEventListener('click', () => {\n    let count = 0;\n    const progress = showModalLoading('Loading 0/2');\n    const interval = setInterval(() => {\n      count++;\n      progress.update(`Loading ${count}/2`);\n\n      if (count === 2) {\n        progress.finish('Done');\n        clearInterval(interval);\n      }\n    }, 1000);\n  });\n<\/script>\n")))}u.isMDXComponent=!0}}]);