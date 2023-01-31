"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25957,62013,27578,83248,42135,69248],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),r=n(90077),o=n(37614),i=n(2784),l=n(90943);function s(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),s=(0,r.Z)("/"),[p,c]=(0,i.useState)(""),[u,m]=(0,i.useState)((0,l.V)(t)),{preferredVersion:d}=(0,a.J)();return(0,i.useEffect)((()=>{const t=null==d?void 0:d.name;c(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==d?void 0:d.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==d?void 0:d.name):i.createElement("iframe",{src:`${p}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>$});var a,r=n(7267),o=n(90077),i=n(55061),l=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const p=e=>{let{title:t,titleId:n,...r}=e;return l.createElement("svg",s({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},r),t?l.createElement("title",{id:n},t):null,a||(a=l.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var c;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",u({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,c||(c=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var d=n(77942);let g;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(g||(g={}));var f=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],v={clickToLoad:function(e){return w("ctl",e)},devToolsHeight:function(e){return k("devtoolsheight",e)},forceEmbedLayout:function(e){return w("embed",e)},hideDevTools:function(e){return w("hidedevtools",e)},hideExplorer:function(e){return w("hideExplorer",e)},hideNavigation:function(e){return w("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return k("terminalHeight",e)},theme:function(e){return h("theme",["light","dark"],e)},view:function(e){return h("view",["preview","editor"],e)}};function b(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&v.hasOwnProperty(t)?v[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function w(e,t){return!0===t?e+"=1":""}function k(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function h(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function N(e,t){return""+x(t)+e+b(t)}function x(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function y(e){return e&&!1===e.newWindow?"_self":"_blank"}function E(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function T(e){if(!f.includes(e.template)){var t=f.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(E("project[title]",e.title)),a.appendChild(E("project[description]",e.description)),a.appendChild(E("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(E("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(E("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(E("project[files]["+t+"]",e.files[t]))})),a}var C=function(e,t){!function(e,t){var n=T(e);n.action=N("/run",t),n.target=y(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const A="https://github.com/siemens/ix/tree/main/packages";function _(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===g.ANGULAR?`${A}/angular-test-app/src/preview-examples/${t}.ts`:n===g.JAVASCRIPT?`${A}/html-test-app/src/preview-examples/${t}.html`:n===g.REACT?`${A}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function j(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function O(e){let{name:t,framework:n,files:a,baseUrl:r}=e;const o=await async function(e,t,n){const a=[];return(await j(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(r,n,a);return n===g.REACT?async function(e,t){const[n,a,r,o,i]=await j([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[l]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),C({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":a,"src/index.tsx":r,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename.substring(0,l.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${l.filename}`})}(r,o):n===g.ANGULAR?async function(e,t,n){const[a,r,o,i,l,s,p,c,u,m,d]=await j([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),g=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&g.push(t)}));const f=`\n    ${g.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${g.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,v={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;v[`src/app/${t}`]=n})),C({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":f,"src/app/app.component.css":a,"src/app/app.component.html":r,"src/app/app.component.ts":o,"src/app/app.module.ts":i,"src/index.html":l,"src/main.ts":s,"src/styles.css":p,"angular.json":c,"package.json":u,"tsconfig.app.json":m,"tsconfig.json":d,...v}},{openFile:`src/app/${t}.ts`})}(r,t,o):n===g.JAVASCRIPT?async function(e,t){const[n,a,r,o]=await j([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...l]=t,s={};l.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),C({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":a,"package.json":r,"vite.config.ts":o}},{openFile:["src/index.html"]})}(r,o):void 0}function M(e){let{name:t,framework:n}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>_({name:t,framework:n})},l.createElement(p,null))}function P(e){let{name:t,files:n,framework:a,baseUrl:r}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>O({name:t,files:n,framework:a,baseUrl:r})},l.createElement(m,null))}function I(e){const[t,n]=(0,l.useState)(e.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(i.Vp,null,e.files.map((e=>{e.node;return l.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?l.createElement(a,null):null}())}function $(e){let{name:t,height:n,noMargin:a,theme:s,frameworks:p,availableFrameworks:c}=e;const{pathname:u}=(0,r.TH)(),m=(0,o.Z)("/"),[f,v]=(0,l.useState)(!0),[b,w]=(0,l.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||g.PREVIEW}(c)),[k,h]=(0,l.useState)();(0,l.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(u+t)),[t,u]);(0,l.useEffect)((()=>{const e={};p&&(Object.keys(p).forEach((n=>{if("function"==typeof p[n]){let a=t;n===g.REACT&&(a=a.concat(".tsx")),n===g.JAVASCRIPT&&(a=a.concat(".html")),n===g.ANGULAR&&(a=a.concat(".ts")),e[n]=[{filename:a,node:p[n]({})}]}"object"==typeof p[n]&&(e[n]||(e[n]=[]),Object.keys(p[n]).forEach((t=>{e[n].push({filename:t,node:p[n][t]})})))})),h(e))}),[p,h]);const N=e=>{w(e)};function x(e){return e===g.PREVIEW||(!c||(0===c.length||c.includes(e)))}return l.createElement("div",{className:"Playground"},f?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},l.createElement(i.Vp,null,l.createElement(i.t3,{selected:b===g.PREVIEW,onClick:()=>N(g.PREVIEW)},"Preview")),x(g.ANGULAR)?l.createElement(i.t3,{selected:b===g.ANGULAR,onClick:()=>N(g.ANGULAR)},"Angular"):null,x(g.REACT)?l.createElement(i.t3,{selected:b===g.REACT,onClick:()=>N(g.REACT)},"React"):null,x(g.JAVASCRIPT)?l.createElement(i.t3,{selected:b===g.JAVASCRIPT,onClick:()=>N(g.JAVASCRIPT)},"JavaScript"):null,l.createElement("div",{className:"Playground__Toolbar__Actions"},b!==g.PREVIEW?l.createElement(l.Fragment,null,l.createElement(M,{name:t,framework:b}),l.createElement(P,{name:t,framework:b,baseUrl:m,files:k?b===g.PREVIEW?[]:k[b].map((e=>e.filename)):[]})):null)),function(){if(b===g.PREVIEW)return l.createElement(d.Z,{name:t,height:n,noMargin:a,theme:s});if(!k||!k[b])return null;if(1===k[b].length){const[{node:e}]=k[b];return e}return l.createElement(I,{files:k[b]})}()):null)}},59278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-menu-about-news/events",id:"auto-generated/ix-menu-about-news/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-menu-about-news/events.md",sourceDirName:"auto-generated/ix-menu-about-news",slug:"/auto-generated/ix-menu-about-news/events",permalink:"/docs/auto-generated/ix-menu-about-news/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-about-news/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closePopover"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Popover closed"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showMore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Show More button is pressed"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MouseEvent"))))))}u.isMDXComponent=!0},55291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-menu-about-news/props",id:"auto-generated/ix-menu-about-news/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-menu-about-news/props.md",sourceDirName:"auto-generated/ix-menu-about-news",slug:"/auto-generated/ix-menu-about-news/props",permalink:"/docs/auto-generated/ix-menu-about-news/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-about-news/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aboutItemLabel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Subtitle of the about news"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"about-item-label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expanded"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Internal"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expanded")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i18nShowMore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i-1-8n-show-more")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Show more'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Title of the about news"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offsetBottom"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Bottom offset"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offset-bottom")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Show about news"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}u.isMDXComponent=!0},79147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/popover-news.ts",id:"auto-generated/previews/angular/popover-news.ts",title:"popover-news.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/popover-news.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/popover-news.ts",permalink:"/docs/auto-generated/previews/angular/popover-news.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/popover-news.ts.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-basic-navigation>\n      <div class="placeholder-logo" slot="logo"></div>\n      <ix-menu>\n        <ix-menu-about>\n          <ix-menu-about-item label="Example"> </ix-menu-about-item>\n        </ix-menu-about>\n        <ix-menu-about-news label="Test" show about-item-label="Example">\n          Test\n        </ix-menu-about-news>\n      </ix-menu>\n    </ix-basic-navigation>\n  `,\n})\nexport default class PopoverNews {}\n')))}u.isMDXComponent=!0},79553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/react/popover-news",id:"auto-generated/previews/react/popover-news",title:"popover-news",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/popover-news.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/popover-news",permalink:"/docs/auto-generated/previews/react/popover-news",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/popover-news.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  IxBasicNavigation,\n  IxMenu,\n  IxMenuAbout,\n  IxMenuAboutItem,\n  IxMenuAboutNews,\n} from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <IxBasicNavigation>\n      <div className="placeholder-logo" slot="logo"></div>\n      <IxMenu>\n        <IxMenuAbout>\n          <IxMenuAboutItem label="Example"> </IxMenuAboutItem>\n        </IxMenuAbout>\n        <IxMenuAboutNews label="Test" show about-item-label="Example">\n          Test\n        </IxMenuAboutNews>\n      </IxMenu>\n    </IxBasicNavigation>\n  );\n};\n')))}u.isMDXComponent=!0},57357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/web-component/popover-news",id:"auto-generated/previews/web-component/popover-news",title:"popover-news",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/popover-news.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/popover-news",permalink:"/docs/auto-generated/previews/web-component/popover-news",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/popover-news.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-basic-navigation>\n  <div class="placeholder-logo" slot="logo"></div>\n  <ix-menu>\n    <ix-menu-about>\n      <ix-menu-about-item label="Example"> </ix-menu-about-item>\n    </ix-menu-about>\n    <ix-menu-about-news label="Test" show about-item-label="Example">\n      Test\n    </ix-menu-about-news>\n  </ix-menu>\n</ix-basic-navigation>\n')))}u.isMDXComponent=!0},31436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var a=n(7896),r=(n(2784),n(30876)),o=n(30024),i=n(55291),l=n(59278),s=n(57357),p=n(79553),c=n(79147);const u={},m="Popover news",d={unversionedId:"controls/navigation/popover-news",id:"controls/navigation/popover-news",title:"Popover news",description:"Usage",source:"@site/docs/controls/navigation/popover-news.md",sourceDirName:"controls/navigation",slug:"/controls/navigation/popover-news",permalink:"/docs/controls/navigation/popover-news",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/navigation/popover-news.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Map Navigation",permalink:"/docs/controls/navigation/map-navigation"},next:{title:"Blind",permalink:"/docs/controls/blind"}},g={},f=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],v={toc:f};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"popover-news"},"Popover news"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{name:"popover-news",height:"30rem",noMargin:!0,frameworks:{react:p.default,angular:c.default,javascript:s.default},mdxType:"Playground"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(i.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(l.default,{mdxType:"Events"}))}b.isMDXComponent=!0}}]);