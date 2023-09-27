"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88185],{88185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(7896),a=(n(2784),n(30876));const o={},s=void 0,r={unversionedId:"auto-generated/previews/react/tile",id:"auto-generated/previews/react/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tile.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tile",permalink:"/docs/auto-generated/previews/react/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tile.md",tags:[],version:"current",frontMatter:{}},l={},c=[],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxButton, IxIcon, IxIconButton, IxTile } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <div className="example">\n      <IxTile size="small">92.8 \xb0C</IxTile>\n\n      <IxTile size="medium" className="mr-1">\n        <div slot="header">Tile header</div>\n        <div className="text-l">92.8 \xb0C</div>\n      </IxTile>\n\n      <IxTile size="big">\n        <div\n          className="d-flex flex-grow-1 align-items-center justify-content-between"\n          slot="header"\n        >\n          Tile header\n          <IxIconButton ghost icon="context-menu"></IxIconButton>\n        </div>\n        <div slot="subheader">Temperature</div>\n        <div\n          style={{\n            display: \'flex\',\n            flexDirection: \'column\',\n            height: \'100%\',\n            alignItems: \'flex-end\',\n            justifyContent: \'space-between\',\n          }}\n        >\n          <span>92.8 \xb0C</span>\n        </div>\n        <div\n          className="d-flex h-100 align-items-center justify-content-end"\n          slot="footer"\n        >\n          <IxButton ghost slot="footer">\n            <IxIcon name="chevron-right-small"></IxIcon>Details\n          </IxButton>\n        </div>\n      </IxTile>\n    </div>\n  );\n};\n')))}u.isMDXComponent=!0}}]);