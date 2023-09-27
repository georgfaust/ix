"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72721,72048],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7896),a=(r(2784),r(30876));const o={},c=void 0,l={unversionedId:"auto-generated/previews/react/select-multiple",id:"auto-generated/previews/react/select-multiple",title:"select-multiple",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/select-multiple.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/select-multiple",permalink:"/docs/auto-generated/previews/react/select-multiple",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/select-multiple.md",tags:[],version:"current",frontMatter:{}},i={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxSelect, IxSelectItem } from \'@siemens/ix-react\';\nimport React, { useLayoutEffect, useState } from \'react\';\n\nexport default () => {\n  const [selection, setSelection] = useState<string[]>([]);\n\n  useLayoutEffect(() => {\n    setSelection([\'1\', \'3\']);\n  }, [setSelection]);\n\n  return (\n    <IxSelect mode="multiple" value={selection}>\n      <IxSelectItem label="Item 1" value="1"></IxSelectItem>\n      <IxSelectItem label="Item 2" value="2"></IxSelectItem>\n      <IxSelectItem label="Item 3" value="3"></IxSelectItem>\n      <IxSelectItem label="Item 4" value="4"></IxSelectItem>\n    </IxSelect>\n  );\n};\n')))}p.isMDXComponent=!0}}]);