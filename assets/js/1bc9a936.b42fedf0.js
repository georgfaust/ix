"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14673,25730],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=d(t),s=o,w=l["".concat(c,".").concat(s)]||l[s]||m[s]||i;return t?r.createElement(w,a(a({ref:n},u),{},{components:t})):r.createElement(w,a({ref:n},u))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},25730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=t(7896),o=(t(2784),t(30876));const i={},a=void 0,p={unversionedId:"auto-generated/previews/web-component/dropdown-submenu",id:"auto-generated/previews/web-component/dropdown-submenu",title:"dropdown-submenu",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/dropdown-submenu.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/dropdown-submenu",permalink:"/docs/auto-generated/previews/web-component/dropdown-submenu",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/dropdown-submenu.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button id="iconTriggerId">Open</ix-button>\n<ix-dropdown trigger="iconTriggerId">\n  <ix-dropdown-item id="submenuTrigger" label="Submenu"></ix-dropdown-item>\n  <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n  <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n  <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>\n</ix-dropdown>\n<ix-dropdown trigger="submenuTrigger" placement="right-start">\n  <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n  <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n</ix-dropdown>\n')))}m.isMDXComponent=!0}}]);