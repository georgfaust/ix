"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[855,29888,22398,1973,51995,45843,132,45744,46769],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(37949),o=n(90077),a=n(37614),i=n(2784),d=n(90943);function l(e){const t=(0,a.Z)(),[n]=(0,i.useState)(!1),l=(0,o.Z)("/"),[p,s]=(0,i.useState)(""),[c,m]=(0,i.useState)((0,d.V)(t)),{preferredVersion:u}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==u?void 0:u.name;s(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==u?void 0:u.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,d.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==u?void 0:u.name):i.createElement("iframe",{src:`${p}?theme=${e.theme?e.theme:c}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>M});var r,o=n(7267),a=n(90077),i=n(55061),d=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const p=e=>{let{title:t,titleId:n,...o}=e;return d.createElement("svg",l({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},o),t?d.createElement("title",{id:n},t):null,r||(r=d.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...r}=e;return d.createElement("svg",c({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?d.createElement("title",{id:n},t):null,s||(s=d.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var u=n(77942);let g;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(g||(g={}));var w=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],f={clickToLoad:function(e){return k("ctl",e)},devToolsHeight:function(e){return h("devtoolsheight",e)},forceEmbedLayout:function(e){return k("embed",e)},hideDevTools:function(e){return k("hidedevtools",e)},hideExplorer:function(e){return k("hideExplorer",e)},hideNavigation:function(e){return k("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return h("terminalHeight",e)},theme:function(e){return b("theme",["light","dark"],e)},view:function(e){return b("view",["preview","editor"],e)}};function v(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&f.hasOwnProperty(t)?f[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function k(e,t){return!0===t?e+"=1":""}function h(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function b(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function N(e,t){return""+x(t)+e+v(t)}function x(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function y(e){return e&&!1===e.newWindow?"_self":"_blank"}function T(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function E(e){if(!w.includes(e.template)){var t=w.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(T("project[title]",e.title)),r.appendChild(T("project[description]",e.description)),r.appendChild(T("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(T("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(T("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(T("project[files]["+t+"]",e.files[t]))})),r}var I=function(e,t){!function(e,t){var n=E(e);n.action=N("/run",t),n.target=y(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const C="https://github.com/siemens/ix/tree/main/packages";function _(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===g.ANGULAR?`${C}/angular-test-app/src/preview-examples/${t}.ts`:n===g.JAVASCRIPT?`${C}/html-test-app/src/preview-examples/${t}.html`:n===g.REACT?`${C}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function D(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function A(e){let{name:t,framework:n,files:r,baseUrl:o}=e;const a=await async function(e,t,n){const r=[];return(await D(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(o,n,r);return n===g.REACT?async function(e,t){const[n,r,o,a,i]=await D([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[d]=t,l={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;l[`src/${t}`]=n})),I({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":r,"src/index.tsx":o,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${d.filename.substring(0,d.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":a,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${d.filename}`})}(o,a):n===g.ANGULAR?async function(e,t,n){const[r,o,a,i,d,l,p,s,c,m,u]=await D([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),g=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&g.push(t)}));const w=`\n    ${g.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${g.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,f={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;f[`src/app/${t}`]=n})),I({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":w,"src/app/app.component.css":r,"src/app/app.component.html":o,"src/app/app.component.ts":a,"src/app/app.module.ts":i,"src/index.html":d,"src/main.ts":l,"src/styles.css":p,"angular.json":s,"package.json":c,"tsconfig.app.json":m,"tsconfig.json":u,...f}},{openFile:`src/app/${t}.ts`})}(o,t,a):n===g.JAVASCRIPT?async function(e,t){const[n,r,o,a]=await D([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...d]=t,l={};d.forEach((e=>{l[`src/${e.filename}`]=e.sourceCode})),I({template:"node",title:"iX html app",description:"iX html playground",files:{...l,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":r,"package.json":o,"vite.config.ts":a}},{openFile:["src/index.html"]})}(o,a):void 0}function j(e){let{name:t,framework:n}=e;return d.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>_({name:t,framework:n})},d.createElement(p,null))}function O(e){let{name:t,files:n,framework:r,baseUrl:o}=e;return d.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>A({name:t,files:n,framework:r,baseUrl:o})},d.createElement(m,null))}function P(e){const[t,n]=(0,d.useState)(e.files[0].filename);return d.createElement(d.Fragment,null,d.createElement(i.Vp,null,e.files.map((e=>{e.node;return d.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?d.createElement(r,null):null}())}function M(e){let{name:t,height:n,noMargin:r,theme:l,frameworks:p,availableFrameworks:s}=e;const{pathname:c}=(0,o.TH)(),m=(0,a.Z)("/"),[w,f]=(0,d.useState)(!0),[v,k]=(0,d.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||g.PREVIEW}(s)),[h,b]=(0,d.useState)();(0,d.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(c+t)),[t,c]);(0,d.useEffect)((()=>{const e={};p&&(Object.keys(p).forEach((n=>{if("function"==typeof p[n]){let r=t;n===g.REACT&&(r=r.concat(".tsx")),n===g.JAVASCRIPT&&(r=r.concat(".html")),n===g.ANGULAR&&(r=r.concat(".ts")),e[n]=[{filename:r,node:p[n]({})}]}"object"==typeof p[n]&&(e[n]||(e[n]=[]),Object.keys(p[n]).forEach((t=>{e[n].push({filename:t,node:p[n][t]})})))})),b(e))}),[p,b]);const N=e=>{k(e)};function x(e){return e===g.PREVIEW||(!s||(0===s.length||s.includes(e)))}return d.createElement("div",{className:"Playground"},w?d.createElement(d.Fragment,null,d.createElement("div",{className:"Playground__Toolbar Location__Bottom"},d.createElement(i.Vp,null,d.createElement(i.t3,{selected:v===g.PREVIEW,onClick:()=>N(g.PREVIEW)},"Preview")),x(g.ANGULAR)?d.createElement(i.t3,{selected:v===g.ANGULAR,onClick:()=>N(g.ANGULAR)},"Angular"):null,x(g.REACT)?d.createElement(i.t3,{selected:v===g.REACT,onClick:()=>N(g.REACT)},"React"):null,x(g.JAVASCRIPT)?d.createElement(i.t3,{selected:v===g.JAVASCRIPT,onClick:()=>N(g.JAVASCRIPT)},"JavaScript"):null,d.createElement("div",{className:"Playground__Toolbar__Actions"},v!==g.PREVIEW?d.createElement(d.Fragment,null,d.createElement(j,{name:t,framework:v}),d.createElement(O,{name:t,framework:v,baseUrl:m,files:h?v===g.PREVIEW?[]:h[v].map((e=>e.filename)):[]})):null)),function(){if(v===g.PREVIEW)return d.createElement(u.Z,{name:t,height:n,noMargin:r,theme:l});if(!h||!h[v])return null;if(1===h[v].length){const[{node:e}]=h[v];return e}return d.createElement(P,{files:h[v]})}()):null)}},14222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/ix-dropdown/events",id:"auto-generated/ix-dropdown/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-dropdown/events.md",sourceDirName:"auto-generated/ix-dropdown",slug:"/auto-generated/ix-dropdown/events",permalink:"/docs/auto-generated/ix-dropdown/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown/events.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"showChanged"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"Fire event after visibility of dropdown has changed"),(0,o.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))))))}c.isMDXComponent=!0},3457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/ix-dropdown/props",id:"auto-generated/ix-dropdown/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-dropdown/props.md",sourceDirName:"auto-generated/ix-dropdown",slug:"/auto-generated/ix-dropdown/props",permalink:"/docs/auto-generated/ix-dropdown/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown/props.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"adjustDropdownWidthToReferenceWidth"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"Adjust dropdown width to the parent width"),(0,o.kt)("div",{className:"Api__Table Docs__Tags"},(0,o.kt)("span",{className:"Api__Table Docs__Tag Docs__Tag__Deprecated",title:"Will be removed. Not used anymore"},"Deprecated: Will be removed. Not used anymore")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"adjust-dropdown-width-to-reference-width")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"adjustDropdownWidthToReferenceWith"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"Adjust dropdown width to the parent width"),(0,o.kt)("div",{className:"Api__Table Docs__Tags"},(0,o.kt)("span",{className:"Api__Table Docs__Tag Docs__Tag__Deprecated",title:"Will be removed in 2.0.0. Property has a typo use `adjustDropdownWidthToReferenceWidth` instead."},"Deprecated: Will be removed in 2.0.0. Property has a typo use ",(0,o.kt)("inlineCode",{parentName:"td"},"adjustDropdownWidthToReferenceWidth")," instead.")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"adjust-dropdown-width-to-reference-with")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"anchor"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"Define an anchor element"),(0,o.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"anchor")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTMLElement \uff5c string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"closeBehavior"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"Close behavior"),(0,o.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"close-behavior")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"both" \uff5c "inside" \uff5c "outside" \uff5c boolean')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'both'"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"An optional header shown at the top of the dropdown"),(0,o.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"header")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"placement"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"Placement of the dropdown"),(0,o.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"placement")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"auto" \uff5c "auto-end" \uff5c "auto-start" \uff5c "bottom" \uff5c "bottom-end" \uff5c "bottom-start" \uff5c "left" \uff5c "left-end" \uff5c "left-start" \uff5c "right" \uff5c "right-end" \uff5c "right-start" \uff5c "top" \uff5c "top-end" \uff5c "top-start"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'bottom-start'"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"positioningStrategy"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"Position strategy"),(0,o.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"positioning-strategy")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"absolute" \uff5c "fixed"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'fixed'"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"show"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"Show dropdown"),(0,o.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"show")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"trigger"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"Api__Table"},(0,o.kt)("div",null,"Define an element that triggers the dropdown. A trigger can either be a string that will be interprated as id attribute or a DOM element."),(0,o.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"trigger")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTMLElement \uff5c string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))))}c.isMDXComponent=!0},41842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/angular/dropdown-icon.ts",id:"auto-generated/previews/angular/dropdown-icon.ts",title:"dropdown-icon.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown-icon.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-icon.ts",permalink:"/docs/auto-generated/previews/angular/dropdown-icon.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown-icon.ts.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-button id="iconTriggerId">Open</ix-button>\n    <ix-dropdown trigger="iconTriggerId">\n      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>\n    </ix-dropdown>\n  `,\n})\nexport default class DropdownIcon {}\n')))}c.isMDXComponent=!0},16145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/angular/dropdown.ts",id:"auto-generated/previews/angular/dropdown.ts",title:"dropdown.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown.ts",permalink:"/docs/auto-generated/previews/angular/dropdown.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown.ts.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-button #trigger>Open</ix-button>\n    <ix-dropdown [ixDropdownTrigger]="trigger">\n      <ix-dropdown-item label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 3"></ix-dropdown-item>\n    </ix-dropdown>\n  `,\n})\nexport default class Dropdown {}\n')))}c.isMDXComponent=!0},57449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/react/dropdown-icon",id:"auto-generated/previews/react/dropdown-icon",title:"dropdown-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/dropdown-icon.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown-icon",permalink:"/docs/auto-generated/previews/react/dropdown-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/dropdown-icon.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxButton, IxDropdown, IxDropdownItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxButton id="triggerId">Open</IxButton>\n      <IxDropdown trigger="triggerId">\n        <IxDropdownItem label="Item 1" icon="star"></IxDropdownItem>\n        <IxDropdownItem label="Item 2" icon="document"></IxDropdownItem>\n        <IxDropdownItem label="Item 3" icon="bulb"></IxDropdownItem>\n      </IxDropdown>\n    </>\n  );\n};\n')))}c.isMDXComponent=!0},3463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/react/dropdown",id:"auto-generated/previews/react/dropdown",title:"dropdown",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/dropdown.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown",permalink:"/docs/auto-generated/previews/react/dropdown",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/dropdown.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxButton, IxDropdown, IxDropdownItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxButton id="triggerId">Open</IxButton>\n      <IxDropdown trigger="triggerId">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n        <IxDropdownItem label="Item 3"></IxDropdownItem>\n      </IxDropdown>\n    </>\n  );\n};\n')))}c.isMDXComponent=!0},62523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/web-component/dropdown-icon",id:"auto-generated/previews/web-component/dropdown-icon",title:"dropdown-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/dropdown-icon.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/dropdown-icon",permalink:"/docs/auto-generated/previews/web-component/dropdown-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/dropdown-icon.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button id="iconTriggerId">Open</ix-button>\n<ix-dropdown trigger="iconTriggerId">\n  <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n  <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n  <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>\n</ix-dropdown>\n')))}c.isMDXComponent=!0},66749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/web-component/dropdown",id:"auto-generated/previews/web-component/dropdown",title:"dropdown",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/dropdown.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/dropdown",permalink:"/docs/auto-generated/previews/web-component/dropdown",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/dropdown.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button id="triggerId">Open</ix-button>\n<ix-dropdown trigger="triggerId">\n  <ix-dropdown-item label="Item 1"></ix-dropdown-item>\n  <ix-dropdown-item label="Item 2"></ix-dropdown-item>\n  <ix-dropdown-item label="Item 3"></ix-dropdown-item>\n</ix-dropdown>\n')))}c.isMDXComponent=!0},61409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>w,default:()=>b,frontMatter:()=>g,metadata:()=>f,toc:()=>k});var r=n(7896),o=(n(2784),n(30876)),a=n(30024),i=n(3457),d=n(14222),l=n(66749),p=n(62523),s=n(3463),c=n(57449),m=n(16145),u=n(41842);const g={},w="Dropdown",f={unversionedId:"controls/dropdown",id:"controls/dropdown",title:"Dropdown",description:"Usage",source:"@site/docs/controls/dropdown.md",sourceDirName:"controls",slug:"/controls/dropdown",permalink:"/docs/controls/dropdown",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/dropdown.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Dropdown button",permalink:"/docs/controls/dropdown-button"},next:{title:"Event list",permalink:"/docs/controls/event-list"}},v={},k=[{value:"Usage",id:"usage",level:2},{value:"Dropdown with icon",id:"dropdown-with-icon",level:3},{value:"Properties (ix-dropdown)",id:"properties-ix-dropdown",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties (ix-dropdown-item)",id:"properties-ix-dropdown-item",level:2},{value:"Props",id:"props-1",level:3},{value:"Events",id:"events-1",level:3}],h={toc:k};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dropdown"},"Dropdown"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(a.Z,{name:"dropdown",height:"16rem",frameworks:{react:s.default,angular:m.default,javascript:l.default},mdxType:"Playground"}),(0,o.kt)("h3",{id:"dropdown-with-icon"},"Dropdown with icon"),(0,o.kt)(a.Z,{name:"dropdown-icon",height:"16rem",hideInitalCodePreview:!0,frameworks:{react:c.default,angular:u.default,javascript:p.default},mdxType:"Playground"}),(0,o.kt)("h2",{id:"properties-ix-dropdown"},"Properties (ix-dropdown)"),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(i.default,{mdxType:"Props"}),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)(d.default,{mdxType:"Events"}),(0,o.kt)("h2",{id:"properties-ix-dropdown-item"},"Properties (ix-dropdown-item)"),(0,o.kt)("h3",{id:"props-1"},"Props"),(0,o.kt)(i.default,{mdxType:"ItemProps"}),(0,o.kt)("h3",{id:"events-1"},"Events"),(0,o.kt)(d.default,{mdxType:"ItemEvents"}))}b.isMDXComponent=!0}}]);