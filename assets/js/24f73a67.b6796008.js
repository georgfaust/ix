"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85927,11780,57643,7767,32298,29164,12848],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(37949),a=n(90077),o=n(37614),c=n(2784),i=n(90943);function s(e){const t=(0,o.Z)(),[n]=(0,c.useState)(!1),s=(0,a.Z)("/"),[l,u]=(0,c.useState)(""),[p,m]=(0,c.useState)((0,i.V)(t)),{preferredVersion:d}=(0,r.J)();return(0,c.useEffect)((()=>{const t=null==d?void 0:d.name;u(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==d?void 0:d.name,e.name]),(0,c.useLayoutEffect)((()=>{const e=()=>{let e=(0,i.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),c.createElement(c.Fragment,null,n?c.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==d?void 0:d.name):c.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>R});var r,a=n(7267),o=n(90077),c=n(55061),i=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...a}=e;return i.createElement("svg",s({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var u;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",p({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,u||(u=i.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var d=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(f||(f={}));var h=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],b={clickToLoad:function(e){return v("ctl",e)},devToolsHeight:function(e){return k("devtoolsheight",e)},forceEmbedLayout:function(e){return v("embed",e)},hideDevTools:function(e){return v("hidedevtools",e)},hideExplorer:function(e){return v("hideExplorer",e)},hideNavigation:function(e){return v("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return k("terminalHeight",e)},theme:function(e){return x("theme",["light","dark"],e)},view:function(e){return x("view",["preview","editor"],e)}};function g(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&b.hasOwnProperty(t)?b[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function v(e,t){return!0===t?e+"=1":""}function k(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function x(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function w(e,t){return""+y(t)+e+g(t)}function y(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}function C(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function j(e){if(!h.includes(e.template)){var t=h.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(C("project[title]",e.title)),r.appendChild(C("project[description]",e.description)),r.appendChild(C("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(C("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(C("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(C("project[files]["+t+"]",e.files[t]))})),r}var O=function(e,t){!function(e,t){var n=j(e);n.action=w("/run",t),n.target=E(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const T="https://github.com/siemens/ix/tree/main/packages";function N(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${T}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${T}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${T}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function A(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function $(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const o=await async function(e,t,n){const r=[];return(await A(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===f.REACT?async function(e,t){const[n,r,a,o,c]=await A([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[i]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),O({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${i.filename.substring(0,i.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":c,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${i.filename}`})}(a,o):n===f.ANGULAR?async function(e,t,n){const[r,a,o,c,i,s,l,u,p,m,d]=await A([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const h=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,b={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;b[`src/app/${t}`]=n})),O({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":h,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":o,"src/app/app.module.ts":c,"src/index.html":i,"src/main.ts":s,"src/styles.css":l,"angular.json":u,"package.json":p,"tsconfig.app.json":m,"tsconfig.json":d,...b}},{openFile:`src/app/${t}.ts`})}(a,t,o):n===f.JAVASCRIPT?async function(e,t){const[n,r,a,o]=await A([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[c,...i]=t,s={};i.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),O({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",c.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":o}},{openFile:["src/index.html"]})}(a,o):void 0}function P(e){let{name:t,framework:n}=e;return i.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>N({name:t,framework:n})},i.createElement(l,null))}function M(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return i.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>$({name:t,files:n,framework:r,baseUrl:a})},i.createElement(m,null))}function _(e){const[t,n]=(0,i.useState)(e.files[0].filename);return i.createElement(i.Fragment,null,i.createElement(c.Vp,null,e.files.map((e=>{e.node;return i.createElement(c.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?i.createElement(r,null):null}())}function R(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:l,availableFrameworks:u}=e;const{pathname:p}=(0,a.TH)(),m=(0,o.Z)("/"),[h,b]=(0,i.useState)(!0),[g,v]=(0,i.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.PREVIEW}(u)),[k,x]=(0,i.useState)();(0,i.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(p+t)),[t,p]);(0,i.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let r=t;n===f.REACT&&(r=r.concat(".tsx")),n===f.JAVASCRIPT&&(r=r.concat(".html")),n===f.ANGULAR&&(r=r.concat(".ts")),e[n]=[{filename:r,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),x(e))}),[l,x]);const w=e=>{v(e)};function y(e){return e===f.PREVIEW||(!u||(0===u.length||u.includes(e)))}return i.createElement("div",{className:"Playground"},h?i.createElement(i.Fragment,null,i.createElement("div",{className:"Playground__Toolbar Location__Bottom"},i.createElement(c.Vp,null,i.createElement(c.t3,{selected:g===f.PREVIEW,onClick:()=>w(f.PREVIEW)},"Preview")),y(f.ANGULAR)?i.createElement(c.t3,{selected:g===f.ANGULAR,onClick:()=>w(f.ANGULAR)},"Angular"):null,y(f.REACT)?i.createElement(c.t3,{selected:g===f.REACT,onClick:()=>w(f.REACT)},"React"):null,y(f.JAVASCRIPT)?i.createElement(c.t3,{selected:g===f.JAVASCRIPT,onClick:()=>w(f.JAVASCRIPT)},"JavaScript"):null,i.createElement("div",{className:"Playground__Toolbar__Actions"},g!==f.PREVIEW?i.createElement(i.Fragment,null,i.createElement(P,{name:t,framework:g}),i.createElement(M,{name:t,framework:g,baseUrl:m,files:k?g===f.PREVIEW?[]:k[g].map((e=>e.filename)):[]})):null)),function(){if(g===f.PREVIEW)return i.createElement(d.Z,{name:t,height:n,noMargin:r,theme:s});if(!k||!k[g])return null;if(1===k[g].length){const[{node:e}]=k[g];return e}return i.createElement(_,{files:k[g]})}()):null)}},66379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/angular/checkbox-indeterminate.ts",id:"auto-generated/previews/angular/checkbox-indeterminate.ts",title:"checkbox-indeterminate.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/checkbox-indeterminate.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/checkbox-indeterminate.ts",permalink:"/docs/auto-generated/previews/angular/checkbox-indeterminate.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/checkbox-indeterminate.ts.md",tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <div>\n      <input type="checkbox" id="checkbox_01" [indeterminate]="true" />\n      <label for="checkbox_01">Simple checkbox</label>\n    </div>\n  `,\n})\nexport default class CheckboxIndeterminate {}\n')))}p.isMDXComponent=!0},82568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/angular/checkbox.ts",id:"auto-generated/previews/angular/checkbox.ts",title:"checkbox.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/checkbox.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/checkbox.ts",permalink:"/docs/auto-generated/previews/angular/checkbox.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/checkbox.ts.md",tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <div style="margin-bottom: 1rem">\n      <input type="checkbox" id="checkbox_01" />\n      <label for="checkbox_01">Simple checkbox</label>\n    </div>\n\n    <div>\n      <input type="checkbox" id="checkbox_02" disabled />\n      <label for="checkbox_02">Disabled checkbox</label>\n    </div>\n  `,\n})\nexport default class Checkbox {}\n')))}p.isMDXComponent=!0},8960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/react/checkbox-indeterminate",id:"auto-generated/previews/react/checkbox-indeterminate",title:"checkbox-indeterminate",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/checkbox-indeterminate.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/checkbox-indeterminate",permalink:"/docs/auto-generated/previews/react/checkbox-indeterminate",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/checkbox-indeterminate.md",tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useLayoutEffect, useRef } from \'react\';\n\nexport default () => {\n  const ref = useRef<HTMLInputElement>(null);\n\n  useLayoutEffect(() => {\n    const element = ref.current;\n\n    if (element) {\n      element.indeterminate = true;\n    }\n  }, []);\n\n  return (\n    <>\n      <input type="checkbox" id="checkbox_01" ref={ref} />\n      <label htmlFor="checkbox_01">Simple checkbox</label>\n    </>\n  );\n};\n')))}p.isMDXComponent=!0},21468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/react/checkbox",id:"auto-generated/previews/react/checkbox",title:"checkbox",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/checkbox.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/checkbox",permalink:"/docs/auto-generated/previews/react/checkbox",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/checkbox.md",tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <div style={{ marginBottom: \'1rem\' }}>\n        <input type="checkbox" id="checkbox_01" />\n        <label htmlFor="checkbox_01">Simple checkbox</label>\n      </div>\n\n      <div>\n        <input type="checkbox" id="checkbox_02" disabled />\n        <label htmlFor="checkbox_02">Disabled checkbox</label>\n      </div>\n    </>\n  );\n};\n')))}p.isMDXComponent=!0},11602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/web-component/checkbox-indeterminate",id:"auto-generated/previews/web-component/checkbox-indeterminate",title:"checkbox-indeterminate",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/checkbox-indeterminate.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/checkbox-indeterminate",permalink:"/docs/auto-generated/previews/web-component/checkbox-indeterminate",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/checkbox-indeterminate.md",tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <input type="checkbox" id="checkbox_01" />\n  <label for="checkbox_01">Simple checkbox</label>\n</div>\n<script>\n  (function () {\n    const checkbox = document.querySelector(\'#checkbox_01\');\n    checkbox.indeterminate = true;\n  })();\n<\/script>\n')))}p.isMDXComponent=!0},80274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/web-component/checkbox",id:"auto-generated/previews/web-component/checkbox",title:"checkbox",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/checkbox.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/checkbox",permalink:"/docs/auto-generated/previews/web-component/checkbox",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/checkbox.md",tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div style="margin-bottom: 1rem">\n  <input type="checkbox" id="checkbox_01" />\n  <label for="checkbox_01">Simple checkbox</label>\n</div>\n\n<div>\n  <input type="checkbox" id="checkbox_02" disabled />\n  <label for="checkbox_02">Disabled checkbox</label>\n</div>\n')))}p.isMDXComponent=!0},56527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var r=n(7896),a=(n(2784),n(30876)),o=n(30024),c=n(80274),i=n(11602),s=n(21468),l=n(8960),u=n(82568),p=n(66379);const m={},d="Checkbox",f={unversionedId:"controls/checkbox",id:"controls/checkbox",title:"Checkbox",description:"Usage",source:"@site/docs/controls/checkbox.md",sourceDirName:"controls",slug:"/controls/checkbox",permalink:"/docs/controls/checkbox",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/checkbox.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"ECharts",permalink:"/docs/controls/charts/"},next:{title:"Chip",permalink:"/docs/controls/chip"}},h={},b=[{value:"Usage",id:"usage",level:2},{value:"Indeterminate",id:"indeterminate",level:3}],g={toc:b};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checkbox"},"Checkbox"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{name:"checkbox",height:"8rem",frameworks:{react:s.default,angular:u.default,javascript:c.default},mdxType:"Playground"}),(0,a.kt)("h3",{id:"indeterminate"},"Indeterminate"),(0,a.kt)(o.Z,{name:"checkbox-indeterminate",height:"8rem",hideInitalCodePreview:!0,frameworks:{react:l.default,angular:p.default,javascript:i.default},mdxType:"Playground"}))}v.isMDXComponent=!0}}]);