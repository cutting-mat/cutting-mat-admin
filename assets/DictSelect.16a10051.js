import{V as l}from"./ui.c0058d49.js";import{g as n}from"./util.64e2e8f0.js";import{n as u}from"./index.ec256302.js";const s={model:{prop:"value",event:"change"},props:{value:{type:[String,Number],required:!1},valueKey:{type:String,required:!1,default(){return n("valueKey","value")}},labelKey:{type:String,required:!1,default(){return n("labelKey","label")}},nullAble:{type:Boolean,required:!1,default(){return n("nullAble",!0)}},request:{type:Function,required:!1},param:{type:String,required:!1,default(){return n("param",void 0)}},responseTransfer:{type:Function,required:!1,default(r){return l.$DictControl&&typeof l.$DictControl.responseTransfer=="function"?l.$DictControl.responseTransfer(r):r}}},data(){return{bindValue:null,list:[]}},watch:{value:{handler(){this.value&&(this.bindValue=this.value)},immediate:!0}},methods:{fetchData:async function(){if(!l.$DictControl&&!l.$DictControl.request&&!this.request)return console.warn("DictControl: The required configuration [request] is missing!");const r=this.request||l.$DictControl.request;if(typeof r!="function")return console.warn("DictControl: [request] must be a Function!");this.list=this.responseTransfer(await r(this.param))}},created(){this.fetchData()}};var i=function(){var e=this,a=e._self._c;return a("el-select",e._b({on:{change:function(t){return e.$emit("change",t)}},model:{value:e.bindValue,callback:function(t){e.bindValue=t},expression:"bindValue"}},"el-select",e.$attrs,!1),[e.nullAble?a("el-option",{attrs:{label:e.$attrs.placeholder||"\u5168\u90E8",value:null}}):e._e(),e._l(e.list,function(t){return a("el-option",{key:t.value,attrs:{label:t[e.labelKey],value:t[e.valueKey]}})})],2)},o=[],c=u(s,i,o,!1,null,"e75be341",null,null);const _=c.exports;export{_ as default};
