import{V as r}from"./ui.9b8b7178.js";import{g as a}from"./util.be2483c8.js";import{n as i}from"./index.833c2dcf.js";var o=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("el-radio-group",e._b({on:{change:function(t){return e.$emit("change",t)}},model:{value:e.bindValue,callback:function(t){e.bindValue=t},expression:"bindValue"}},"el-radio-group",e.$attrs,!1),[e.nullAble?l("el-radio",{attrs:{label:null}},[e._v(e._s(e.$attrs.placeholder||"\u5168\u90E8"))]):e._e(),e._l(e.list,function(t){return l("el-radio",{key:t.value,attrs:{label:t[e.valueKey]}},[e._v(e._s(t[e.labelKey]))])})],2)},s=[];const c={model:{prop:"value",event:"change"},props:{value:{type:[String,Number],required:!1},valueKey:{type:String,required:!1,default(){return a("valueKey","value")}},labelKey:{type:String,required:!1,default(){return a("labelKey","label")}},nullAble:{type:Boolean,required:!1,default(){return a("nullAble",!0)}},request:{type:Function,required:!1},param:{type:String,required:!1,default(){return a("param",void 0)}},responseTransfer:{type:Function,required:!1,default(e){return r.$DictControl&&typeof r.$DictControl.responseTransfer=="function"?r.$DictControl.responseTransfer(e):e}}},data(){return{bindValue:null,list:[]}},watch:{value:{handler(){this.value&&(this.bindValue=this.value)},immediate:!0}},methods:{fetchData:async function(){if(!r.$DictControl&&!r.$DictControl.request&&!this.request)return console.warn("DictControl: The required configuration [request] is missing!");const e=this.request||r.$DictControl.request;if(typeof e!="function")return console.warn("DictControl: [request] must be a Function!");this.list=this.responseTransfer(await e(this.param))}},created(){this.fetchData()}},u={};var f=i(c,o,s,!1,d,"ba55d662",null,null);function d(e){for(let n in u)this[n]=u[n]}var h=function(){return f.exports}();export{h as default};
