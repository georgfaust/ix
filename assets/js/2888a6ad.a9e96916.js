"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41955,79862],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(u,".").concat(d)]||m[d]||l[d]||p;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const p={},a=void 0,i={unversionedId:"auto-generated/previews/web-component/input-types",id:"auto-generated/previews/web-component/input-types",title:"input-types",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/input-types.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/input-types",permalink:"/docs/auto-generated/previews/web-component/input-types",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/input-types.md",tags:[],version:"current",frontMatter:{}},u={},s=[],c={toc:s};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form class="needs-validation m-2">\n  <ix-input-group style="margin-bottom: 0.5rem">\n    <span slot="input-start">Text:</span>\n    <input placeholder="Enter text" type="text" />\n  </ix-input-group>\n\n  <ix-input-group style="margin-bottom: 0.5rem">\n    <span slot="input-start">Number:</span>\n    <input type="number" />\n    <span slot="input-end">.00</span>\n    <span slot="input-end">$</span>\n  </ix-input-group>\n\n  <ix-input-group style="margin-bottom: 0.5rem">\n    <span slot="input-start">Password:</span>\n    <input placeholder="Enter password" type="password" />\n  </ix-input-group>\n\n  <ix-input-group style="margin-bottom: 0.5rem">\n    <span slot="input-start">Email:</span>\n    <input placeholder="example@domain.com" type="email" />\n  </ix-input-group>\n\n  <ix-input-group style="margin-bottom: 0.5rem">\n    <span slot="input-start">Telephone:</span>\n    <input placeholder="111-111-111" type="tel" />\n  </ix-input-group>\n</form>\n')))}l.isMDXComponent=!0}}]);