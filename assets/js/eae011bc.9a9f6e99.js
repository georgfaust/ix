"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68515,64384,8675,20029,79389,19936,24317,52504,85982,72912,8783],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>T});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a={clickToLoad:function(e){return i("ctl",e)},devToolsHeight:function(e){return s("devtoolsheight",e)},forceEmbedLayout:function(e){return i("embed",e)},hideDevTools:function(e){return i("hidedevtools",e)},hideExplorer:function(e){return i("hideExplorer",e)},hideNavigation:function(e){return i("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return s("terminalHeight",e)},theme:function(e){return c("theme",["light","dark"],e)},view:function(e){return c("view",["preview","editor"],e)}};function o(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&a.hasOwnProperty(t)?a[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function i(e,t){return!0===t?e+"=1":""}function s(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function c(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function l(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function u(e,t){return""+p(t)+e+o(t)}function d(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+p(n)+e+o(n)}function p(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function m(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function f(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function w(e){return e&&!1===e.newWindow?"_self":"_blank"}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var h=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,a=l();return new Promise((function(e,o){t.pending[a]={resolve:e,reject:o},t.port.postMessage({type:n,payload:g({},r,{__reqid:a})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,a=n.payload,o=a.__reqid,i=a.__error;this.pending[o]&&(a.__success?this.pending[o].resolve(function(e){var t=g({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(a)):this.pending[o].reject(i?r+": "+i:r),delete this.pending[o])}},e}(),v=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new h(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),b=[],y=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=l(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new v(n.ports[0],r.payload),e(t.vm),o())},a=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),a();var i=0,s=window.setInterval((function(){if(t.vm)o();else{if(i>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach((function(e,n){e.id===t.id&&b.splice(n,1)}));i++,a()}}),500)})),b.push(this)};function E(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function x(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(E("project[title]",e.title)),a.appendChild(E("project[description]",e.description)),a.appendChild(E("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(E("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(E("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(E("project[files]["+t+"]",e.files[t]))})),a}function k(e){var t,n,r,a;return null!=e&&e.contentWindow?(null!=(a=(n=e)instanceof Element?"element":"id",t=null!=(r=b.find((function(e){return e[a]===n})))?r:null)?t:new y(e)).pending:Promise.reject("Provided element is not an iframe.")}var T={connect:k,embedGithubProject:function(e,t,n){var r=f(e),a=document.createElement("iframe");return a.src=d("/github/"+t,n),m(r,a,n),k(a)},embedProject:function(e,t,n){var r,a=f(e),o=function(e,t){var n=x(e);return n.action=d("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),i=document.createElement("iframe");return m(a,i,n),null==(r=i.contentDocument)||r.write(o),k(i)},embedProjectId:function(e,t,n){var r=f(e),a=document.createElement("iframe");return a.src=d("/edit/"+t,n),m(r,a,n),k(a)},openGithubProject:function(e,t){var n=u("/github/"+e,t),r=w(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=x(e);n.action=u("/run",t),n.target=w(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=u("/edit/"+e,t),r=w(t);window.open(n,r)}}},2176:(e,t,n)=>{n.d(t,{Z:()=>i});var r,a=n(2784);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return a.createElement("svg",o({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},i),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},63483:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2784),a=n(731);function o(e){var t,n,o,i,s,c,l,u;return r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(o=n.tags)?void 0:o.filter((e=>"since"===e.type)).map((t=>{var n;return r.createElement(a.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(i=e.attribute)||null==(s=i.tags)?void 0:s.filter((e=>"deprecated"===e.type)).map((t=>{var n;return r.createElement(a.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Content"},r.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),r.createElement("div",{className:"container-fluid"},null==e||null==(l=e.attribute)||null==(u=l.definition)?void 0:u.map((e=>r.createElement("div",{className:"row Attribute",key:e.name},r.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),r.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const i=function(e){var t;return r.createElement("div",{className:"container-fluid ApiTable"},r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>r.createElement(o,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>a,h:()=>o});var r=n(2784);function a(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function o(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(37949),a=n(90077),o=n(37614),i=n(2784),s=n(90943);function c(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),c=(0,a.Z)("/"),[l,u]=(0,i.useState)(""),[d,p]=(0,i.useState)((0,s.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;u(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>E});var r,a=n(7267),o=n(90077),i=n(53849),s=n(2176),c=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return c.createElement("svg",l({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?c.createElement("title",{id:n},t):null,r||(r=c.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var d=n(77942);let p;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(p||(p={}));var m=n(14091);const f="https://github.com/siemens/ix/tree/main/packages";function w(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===p.ANGULAR?`${f}/angular-test-app/src/preview-examples/${t}.ts`:n===p.JAVASCRIPT?`${f}/html-test-app/src/preview-examples/${t}.html`:n===p.REACT?`${f}/react-test-app/src/preview-examples/${t}.tsx`:n===p.VUE?`${f}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function h(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const o=await async function(e,t,n){const r=[];return(await g(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===p.REACT?async function(e,t){const[n,r,a,o,i]=await g([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(a,o):n===p.ANGULAR?async function(e,t,n){const[r,a,o,i,s,c,l,u,d,p,f]=await g([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),w=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&w.push(t)}));const h=`\n    ${w.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${w.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,v={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;v[`src/app/${t}`]=n})),m.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":h,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":o,"src/app/app.module.ts":i,"src/index.html":s,"src/main.ts":c,"src/styles.css":l,"angular.json":u,"package.json":d,"tsconfig.app.json":p,"tsconfig.json":f,...v}},{openFile:`src/app/${t}.ts`})}(a,t,o):n===p.JAVASCRIPT?async function(e,t){const[n,r,a,o]=await g([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...s]=t,c={};s.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),m.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":o}},{openFile:["src/index.html"]})}(a,o):n===p.VUE?async function(e,t){const[n,r,a,o,i,s,c]=await g([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[l]=t,u={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;u[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...u,"index.html":r,"src/main.ts":a,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":c,"package.json":o,"tsconfig.json":i,"vite.config.ts":s,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${l.filename}`})}(a,o):void 0}function v(e){let{name:t,framework:n}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>w({name:t,framework:n})},c.createElement(s.Z,null))}function b(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>h({name:t,files:n,framework:r,baseUrl:a})},c.createElement(u,null))}function y(e){const[t,n]=(0,c.useState)(e.files[0].filename);return c.createElement(c.Fragment,null,c.createElement(i.Vp,null,e.files.map((e=>{e.node;return c.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?c.createElement(r,null):null}())}function E(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:l,availableFrameworks:u}=e;const{pathname:m}=(0,a.TH)(),f=(0,o.Z)("/"),[w,g]=(0,c.useState)(!0),[h,E]=(0,c.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||p.PREVIEW}(u)),[x,k]=(0,c.useState)();(0,c.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m+t)),[t,m]);(0,c.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let r=t;n===p.REACT&&(r=r.concat(".tsx")),n===p.JAVASCRIPT&&(r=r.concat(".html")),n===p.ANGULAR&&(r=r.concat(".ts")),n===p.VUE&&(r=r.concat(".vue")),e[n]=[{filename:r,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),k(e))}),[l,k]);const T=e=>{E(e)};function _(e){return u?0===u.length||u.includes(e):Object.keys(l).some((t=>t===e))}return c.createElement("div",{className:"Playground"},w?c.createElement(c.Fragment,null,c.createElement("div",{className:"Playground__Toolbar Location__Bottom"},c.createElement(i.Vp,null,c.createElement(i.t3,{selected:h===p.PREVIEW,onClick:()=>T(p.PREVIEW)},"Preview"),_(p.ANGULAR)?c.createElement(i.t3,{selected:h===p.ANGULAR,onClick:()=>T(p.ANGULAR)},"Angular"):null,_(p.REACT)?c.createElement(i.t3,{selected:h===p.REACT,onClick:()=>T(p.REACT)},"React"):null,_(p.JAVASCRIPT)?c.createElement(i.t3,{selected:h===p.JAVASCRIPT,onClick:()=>T(p.JAVASCRIPT)},"JavaScript"):null,_(p.VUE)?c.createElement(i.t3,{selected:h===p.VUE,onClick:()=>T(p.VUE)},"Vue"):null),c.createElement("div",{className:"Playground__Toolbar__Actions"},h!==p.PREVIEW?c.createElement(c.Fragment,null,c.createElement(v,{name:t,framework:h}),c.createElement(b,{name:t,framework:h,baseUrl:f,files:x?h===p.PREVIEW?[]:x[h].map((e=>e.filename)):[]})):null)),function(){if(h===p.PREVIEW)return c.createElement(d.Z,{name:t,height:n,noMargin:r,theme:s});if(!x||!x[h])return null;if(1===x[h].length){const[{node:e}]=x[h];return e}return c.createElement(y,{files:x[h]})}()):null)}},3125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),o=n(63483);const i={},s=void 0,c={unversionedId:"auto-generated/ix-drawer/events",id:"auto-generated/ix-drawer/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-drawer/events.md",sourceDirName:"auto-generated/ix-drawer",slug:"/auto-generated/ix-drawer/events",permalink:"/docs/auto-generated/ix-drawer/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-drawer/events.md",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{attributes:[{name:"drawerClose",description:"Fire event after drawer is close",definition:[{name:"Detail",value:"any"}],tags:[]},{name:"open",description:"Fire event after drawer is open",definition:[{name:"Detail",value:"any"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0},123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),o=n(63483);const i={},s=void 0,c={unversionedId:"auto-generated/ix-drawer/props",id:"auto-generated/ix-drawer/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-drawer/props.md",sourceDirName:"auto-generated/ix-drawer",slug:"/auto-generated/ix-drawer/props",permalink:"/docs/auto-generated/ix-drawer/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-drawer/props.md",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{attributes:[{name:"closeOnClickOutside",description:"Fired in case of an outside click during drawer showed state",definition:[{name:"Attribute",value:"close-on-click-outside"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"fullHeight",description:"Render the drawer with maximum height",definition:[{name:"Attribute",value:"full-height"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"maxWidth",description:"Max width interpreted as REM",definition:[{name:"Attribute",value:"max-width"},{name:"Type",value:"number"},{name:"Default",value:"28"}],tags:[]},{name:"minWidth",description:"Min width interpreted as REM",definition:[{name:"Attribute",value:"min-width"},{name:"Type",value:"number"},{name:"Default",value:"16"}],tags:[]},{name:"show",description:"Show or hide the drawer",definition:[{name:"Attribute",value:"show"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"width",description:"Width interpreted as REM if not set to 'auto'",definition:[{name:"Attribute",value:"width"},{name:"Type",value:'"auto" \uff5c number'},{name:"Default",value:"this.minWidth"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0},41915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/drawer-full-height.ts",id:"auto-generated/previews/angular/drawer-full-height.ts",title:"drawer-full-height.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/drawer-full-height.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/drawer-full-height.ts",permalink:"/docs/auto-generated/previews/angular/drawer-full-height.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/drawer-full-height.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-drawer [fullHeight]="true" [closeOnClickOutside]="true" [show]="show">\n      <span>Some content of drawer</span>\n    </ix-drawer>\n\n    <ix-button (click)="show = !show">Toggle drawer</ix-button>\n  `,\n})\nexport default class DrawerFullHeight {\n  show = false;\n}\n')))}d.isMDXComponent=!0},2152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/drawer.ts",id:"auto-generated/previews/angular/drawer.ts",title:"drawer.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/drawer.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/drawer.ts",permalink:"/docs/auto-generated/previews/angular/drawer.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/drawer.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-drawer [closeOnClickOutside]="true" [show]="show">\n      <span>Some content of drawer</span>\n    </ix-drawer>\n\n    <ix-button (click)="show = !show">Toggle drawer</ix-button>\n  `,\n})\nexport default class Drawer {\n  show = false;\n}\n')))}d.isMDXComponent=!0},90169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/drawer-full-height",id:"auto-generated/previews/react/drawer-full-height",title:"drawer-full-height",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/drawer-full-height.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/drawer-full-height",permalink:"/docs/auto-generated/previews/react/drawer-full-height",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/drawer-full-height.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxButton, IxDrawer } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <IxDrawer\n        closeOnClickOutside={true}\n        fullHeight={true}\n        show={show}\n        onDrawerClose={() => setShow(false)}\n      >\n        <span>Some content of drawer</span>\n      </IxDrawer>\n      <IxButton onClick={() => setShow(!show)}>Toggle drawer</IxButton>\n    </>\n  );\n};\n")))}d.isMDXComponent=!0},90499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/drawer",id:"auto-generated/previews/react/drawer",title:"drawer",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/drawer.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/drawer",permalink:"/docs/auto-generated/previews/react/drawer",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/drawer.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxButton, IxDrawer } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <IxDrawer\n        closeOnClickOutside={true}\n        show={show}\n        onDrawerClose={() => setShow(false)}\n      >\n        <span>Some content of drawer</span>\n      </IxDrawer>\n      <IxButton onClick={() => setShow(!show)}>Toggle drawer</IxButton>\n    </>\n  );\n};\n")))}d.isMDXComponent=!0},62852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/vue/drawer-full-height",id:"auto-generated/previews/vue/drawer-full-height",title:"drawer-full-height",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/drawer-full-height.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/drawer-full-height",permalink:"/docs/auto-generated/previews/vue/drawer-full-height",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/drawer-full-height.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxButton, IxDrawer } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst show = ref(false);\n<\/script>\n\n<template>\n  <IxDrawer\n    closeOnClickOutside\n    fullHeight\n    :show="show"\n    @drawerClose="show = false"\n  >\n    <span>Some content of drawer</span>\n  </IxDrawer>\n  <IxButton @click="show = !show">Toggle drawer</IxButton>\n</template>\n')))}d.isMDXComponent=!0},88818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/vue/drawer",id:"auto-generated/previews/vue/drawer",title:"drawer",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/drawer.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/drawer",permalink:"/docs/auto-generated/previews/vue/drawer",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/drawer.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxButton, IxDrawer } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst show = ref(false);\n<\/script>\n\n<template>\n  <IxDrawer closeOnClickOutside :show="show" @drawerClose="show = false">\n    <span>Some content of drawer</span>\n  </IxDrawer>\n  <IxButton @click="show = !show">Toggle drawer</IxButton>\n</template>\n')))}d.isMDXComponent=!0},74850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/drawer-full-height",id:"auto-generated/previews/web-component/drawer-full-height",title:"drawer-full-height",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/drawer-full-height.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/drawer-full-height",permalink:"/docs/auto-generated/previews/web-component/drawer-full-height",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/drawer-full-height.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\n<ix-drawer>\n  <span>Some content of drawer</span>\n</ix-drawer>\n\n<ix-button>Toggle drawer</ix-button>\n\n<script>\n  (async function () {\n    await window.customElements.whenDefined('ix-drawer');\n    const drawer = document.querySelector('ix-drawer');\n    drawer.fullHeight = true;\n    drawer.closeOnClickOutside = true;\n\n    const button = document.querySelector('ix-button');\n    button.addEventListener('click', () => {\n      drawer.show = !drawer.show;\n    });\n  })();\n<\/script>\n")))}d.isMDXComponent=!0},20258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/drawer",id:"auto-generated/previews/web-component/drawer",title:"drawer",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/drawer.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/drawer",permalink:"/docs/auto-generated/previews/web-component/drawer",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/drawer.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\n<ix-drawer>\n  <span>Some content of drawer</span>\n</ix-drawer>\n\n<ix-button>Toggle drawer</ix-button>\n\n<script>\n  (async function () {\n    await window.customElements.whenDefined('ix-drawer');\n\n    const drawer = document.querySelector('ix-drawer');\n    drawer.fullHeight = false;\n    drawer.closeOnClickOutside = true;\n\n    const button = document.querySelector('ix-button');\n    button.addEventListener('click', () => {\n      drawer.show = !drawer.show;\n    });\n  })();\n<\/script>\n")))}d.isMDXComponent=!0},21319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>x,frontMatter:()=>g,metadata:()=>v,toc:()=>y});var r=n(7896),a=(n(2784),n(30876)),o=n(6404),i=n(123),s=n(3125),c=n(20258),l=n(74850),u=n(90499),d=n(90169),p=n(2152),m=n(41915),f=n(88818),w=n(62852);const g={},h="Drawer",v={unversionedId:"controls/drawer",id:"controls/drawer",title:"Drawer",description:"Usage",source:"@site/docs/controls/drawer.md",sourceDirName:"controls",slug:"/controls/drawer",permalink:"/docs/controls/drawer",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/drawer.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Date time picker",permalink:"/docs/controls/date-time-picker"},next:{title:"Dropdown button",permalink:"/docs/controls/dropdown-button"}},b={},y=[{value:"Usage",id:"usage",level:2},{value:"Auto height",id:"auto-height",level:3},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],E={toc:y};function x(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drawer"},"Drawer"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{name:"drawer-full-height",height:"24rem",frameworks:{react:u.default,angular:p.default,javascript:c.default,vue:f.default},mdxType:"Playground"}),(0,a.kt)("h3",{id:"auto-height"},"Auto height"),(0,a.kt)(o.Z,{name:"drawer",height:"24rem",hideInitalCodePreview:!0,frameworks:{react:d.default,angular:m.default,javascript:l.default,vue:w.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(i.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(s.default,{mdxType:"Events"}))}x.isMDXComponent=!0}}]);