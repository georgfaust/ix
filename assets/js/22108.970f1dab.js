"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22108],{22108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>r,toc:()=>s});var a=t(7896),i=(t(2784),t(30876));const d={},o=void 0,r={unversionedId:"auto-generated/previews/web-component/tree-custom",id:"auto-generated/previews/web-component/tree-custom",title:"tree-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tree-custom.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tree-custom",permalink:"/docs/auto-generated/previews/web-component/tree-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tree-custom.md",tags:[],version:"current",frontMatter:{}},c={},s=[],m={toc:s};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\n<div style=\"height: 8rem; width: 100%\">\n  <ix-button id=\"expand\" ghost style=\"margin-bottom: 2rem\"\n    >Expand Tree</ix-button\n  >\n  <ix-tree root=\"root\" id=\"tree\"></ix-tree>\n</div>\n\n<script type=\"text/javascript\">\n  (async function () {\n    await window.customElements.whenDefined('ix-tree');\n    const tree = document.getElementById('tree');\n\n    const expandButton = document.getElementById('expand');\n    expandButton.addEventListener('click', () => {\n      tree.context = {\n        sample: {\n          isExpanded: true,\n          isSelected: false,\n        },\n        'sample-child-2': {\n          isSelected: true,\n          isExpanded: false,\n        },\n      };\n    });\n\n    tree.renderItem = (index, item, dataList, context, update) => {\n      const el = document.createElement('ix-tree-item');\n      el.hasChildren = item.hasChildren;\n      el.context = context[item.id];\n\n      const div = document.createElement('div');\n      div.style.display = 'flex';\n\n      const name = document.createElement('span');\n      const icon = document.createElement('ix-icon');\n      icon.name = item.data.icon;\n      icon.style.marginRight = '0.5rem';\n\n      div.appendChild(icon);\n      div.appendChild(name);\n\n      name.innerText = item.data.name;\n\n      el.appendChild(div);\n\n      update((updateTreeItem) => {\n        name.innerText = updateTreeItem.data.name;\n      });\n\n      return el;\n    };\n\n    tree.model = {\n      root: {\n        id: 'root',\n        data: null,\n        hasChildren: true,\n        children: ['sample'],\n      },\n      sample: {\n        id: 'sample',\n        data: {\n          name: 'Sample',\n          icon: 'star',\n        },\n        hasChildren: true,\n        children: ['sample-child-1', 'sample-child-2'],\n      },\n      'sample-child-1': {\n        id: 'sample-child-1',\n        data: {\n          name: 'Sample Child 1',\n          icon: 'cut',\n        },\n        hasChildren: false,\n        children: [],\n      },\n      'sample-child-2': {\n        id: 'sample-child-2',\n        data: {\n          name: 'Sample Child 2',\n          icon: 'print',\n        },\n        hasChildren: false,\n        children: [],\n      },\n    };\n  })();\n<\/script>\n")))}l.isMDXComponent=!0}}]);