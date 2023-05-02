"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9511],{9511:(t,e,i)=>{i.r(e),i.d(e,{ix_pagination:()=>n});var a=i(37434);const n=class{constructor(t){(0,a.r)(this,t),this.pageSelected=(0,a.c)(this,"pageSelected",7),this.itemCountChanged=(0,a.c)(this,"itemCountChanged",7),this.maxCountPages=7,this.advanced=void 0,this.itemCount=15,this.showItemCount=!0,this.count=void 0,this.selectedPage=0,this.i18nPage="Page",this.i18nOf="of",this.i18nItems="Items"}get pageInput(){return this.hostElement.querySelector(".advanced-pagination input.form-control")}selectPage(t){t<0?this.selectedPage=0:t>this.count-1?this.selectedPage=this.count-1:this.selectedPage=t,this.pageSelected.emit(this.selectedPage)}increase(){this.selectedPage!==this.count-1&&this.selectPage(this.selectedPage+1)}decrease(){0!==this.selectedPage&&this.selectPage(this.selectedPage-1)}getPageButton(t){return(0,a.h)("ix-index-button",{variant:"Primary",onClick:()=>{this.selectPage(t)},selected:this.selectedPage===t},t+1)}renderPageButtons(){const t=Math.floor(this.maxCountPages/2),e=this.count>this.maxCountPages,i=e&&this.selectedPage>t,n=e&&this.selectedPage<this.count-t-1,s=[];let c=0,h=Math.min(this.count,this.maxCountPages),o=Math.floor((this.maxCountPages-4)/2);i&&(s.push(this.getPageButton(0)),s.push((0,a.h)("ix-index-button",{variant:"Secondary",onClick:()=>{n?this.selectPage(this.selectedPage-Math.max(0,2*o+1)):this.selectPage(this.count-this.maxCountPages)}},"...")),n?c=this.count-this.maxCountPages+2:(c=this.count-this.maxCountPages+2,h=this.count)),n&&(i?(c=this.selectedPage-o,h=this.selectedPage+o+1):h=this.maxCountPages-2);for(let a=c;a<h;a++)s.push(this.getPageButton(a));return n&&(s.push((0,a.h)("ix-index-button",{variant:"Secondary",onClick:()=>{i?this.selectPage(this.selectedPage+Math.max(0,2*o+1)):this.selectPage(this.maxCountPages-1)}},"...")),s.push(this.getPageButton(this.count-1))),(0,a.h)("span",{class:"page-buttons"},s)}render(){return(0,a.h)(a.H,null,(0,a.h)("ix-icon-button",{disabled:0===this.selectedPage,ghost:!0,icon:"chevron-left-small",onClick:()=>this.decrease()}),this.advanced?(0,a.h)("div",{class:"advanced-pagination"},this.i18nPage,(0,a.h)("input",{class:"form-control",type:"number",min:"1",max:this.count,value:this.selectedPage+1,onChange:t=>{const e=Number.parseInt(t.target.value);this.selectPage(e-1)}}),(0,a.h)("span",{class:"total-count"},this.i18nOf," ",this.count)):(0,a.h)("span",{class:"basic-pagination"},this.renderPageButtons()," "),(0,a.h)("ix-icon-button",{disabled:this.selectedPage===this.count-1,ghost:!0,icon:"chevron-right-small",onClick:()=>this.increase()}),this.advanced&&this.showItemCount?(0,a.h)("span",{class:"item-count"},this.i18nItems,(0,a.h)("ix-select",{hideListHeader:!0,i18nPlaceholder:"",i18nSelectListHeader:"","selected-indices":this.itemCount,onItemSelectionChange:t=>{const e=Number.parseInt(t.detail[0]);this.itemCountChanged.emit(e)}},(0,a.h)("ix-select-item",{label:"10",value:"10"}),(0,a.h)("ix-select-item",{label:"15",value:"15"}),(0,a.h)("ix-select-item",{label:"20",value:"20"}),(0,a.h)("ix-select-item",{label:"40",value:"40"}),(0,a.h)("ix-select-item",{label:"100",value:"100"}))):"")}get hostElement(){return(0,a.g)(this)}};n.style=".sc-ix-pagination-h,.sc-ix-pagination-h .advanced-pagination.sc-ix-pagination,.sc-ix-pagination-h .item-count.sc-ix-pagination{display:inline-flex;align-items:center}.sc-ix-pagination-h .basic-pagination.sc-ix-pagination{padding:0 0.125rem}.sc-ix-pagination-h .advanced-pagination.sc-ix-pagination{padding:0 0.75rem}.sc-ix-pagination-h input.sc-ix-pagination{width:4.125rem;text-align:center;margin:0 0.5rem}.sc-ix-pagination-h .page-buttons.sc-ix-pagination{white-space:nowrap}.sc-ix-pagination-h .total-count.sc-ix-pagination{white-space:nowrap}.sc-ix-pagination-h .item-count.sc-ix-pagination{flex-grow:1;justify-content:flex-end;-webkit-margin-start:1.5rem;margin-inline-start:1.5rem}.sc-ix-pagination-h .item-count.sc-ix-pagination ix-select.sc-ix-pagination{width:4.5rem;-webkit-margin-start:1.5rem;margin-inline-start:1.5rem}.sc-ix-pagination-h ix-index-button.sc-ix-pagination+ix-index-button.sc-ix-pagination{-webkit-margin-start:0.125rem;margin-inline-start:0.125rem}"}}]);