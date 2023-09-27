"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2491],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},63483:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(2784),n=r(731);function i(e){var t,r,i,l,o,c,s,u;return a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(r=e.attribute)||null==(i=r.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var r;return a.createElement(n.h,{message:t.message,key:`Tag_Since_${null==e||null==(r=e.attribute)?void 0:r.name}`})})),null==e||null==(l=e.attribute)||null==(o=l.tags)?void 0:o.filter((e=>"deprecated"===e.type)).map((t=>{var r;return a.createElement(n.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(r=e.attribute)?void 0:r.name}`})})))),a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Content"},a.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),a.createElement("div",{className:"container-fluid"},null==e||null==(s=e.attribute)||null==(u=s.definition)?void 0:u.filter((e=>void 0!==e.value)).map((e=>a.createElement("div",{className:"row Attribute",key:e.name},a.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),a.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const l=function(e){var t;return a.createElement("div",{className:"container-fluid ApiTable"},a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>a.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,r)=>{r.d(t,{Q:()=>n,h:()=>i});var a=r(2784);function n(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),a.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag"},"Since ",e.message))}},95960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=r(7896),n=(r(2784),r(30876)),i=r(63483);const l={},o=void 0,c={unversionedId:"auto-generated/ix-tile/props",id:"auto-generated/ix-tile/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-tile/props.md",sourceDirName:"auto-generated/ix-tile",slug:"/auto-generated/ix-tile/props",permalink:"/docs/auto-generated/ix-tile/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tile/props.md",tags:[],version:"current",frontMatter:{}},s={},u=[],m={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{attributes:[{name:"size",description:"Size of the tile - one of 'small', 'medium' or 'large'",definition:[{name:"Attribute",value:"size"},{name:"Type",value:'"big" \uff5c "medium" \uff5c "small"'},{name:"Default",value:"'medium'"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0}}]);