import{c as o}from"./CURD.4e802c73.js";import{l as i,d as s,a as c,e as u,r as d}from"./role.b8ac466d.js";import{n as p}from"./index.833c2dcf.js";import"./ui.9b8b7178.js";var m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"scrollbar blockLayout"},[t("div",{staticClass:"flex-row toolBar"},[t("div",{staticClass:"flex-1"}),t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.apiObj.create,expression:"apiObj.create"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(a){return e.$refs.theCURD.create()}}},[e._v("\u6DFB\u52A0")])],1),t("CURD",{ref:"theCURD",attrs:{api:e.apiObj,model:e.model,columns:e.columns,dialogAttribute:{title:"\u89D2\u8272\u4FE1\u606F"}},on:{"selection-change":e.handleSelectionChange,"loading-state":function(a){e.loading=a}},scopedSlots:e._u([{key:"action",fn:function(a){return[t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.apiObj.update,expression:"apiObj.update"}],attrs:{size:"mini",type:"info"},on:{click:function(l){return e.$refs.theCURD.update(a.row)}}},[e._v("\u7F16\u8F91")]),t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.apiObj.delete,expression:"apiObj.delete"}],attrs:{size:"mini",type:"danger"},on:{click:function(l){return e.$refs.theCURD.delete(a.row)}}},[e._v("\u5220\u9664")])]}}])})],1)},v=[];const _={components:{CURD:o},data(){return{apiObj:{list:i,detail:s,create:c,update:u,delete:d},loading:!1,model:{name:{label:"\u89D2\u8272\u540D\u79F0",required:!0},remark:{label:"\u5907\u6CE8",controlOption:{type:"textarea",maxlength:"1000"}},resources:{type:"array",label:"\u6743\u9650",control:"TheResourcePicker",controlOption:{picker:!0}}},columns:[{type:"selection",align:"center"},{label:"\u57FA\u672C\u4FE1\u606F",children:[{label:"\u89D2\u8272\u540D\u79F0",prop:"name"},{label:"\u5907\u6CE8",prop:"remark"}]},{label:"\u64CD\u4F5C",slotName:"action",width:300}]}},methods:{handleSelectionChange(e){console.log("selection:",e)}}},r={};var f=p(_,m,v,!1,h,"7ee333b0",null,null);function h(e){for(let n in r)this[n]=r[n]}var C=function(){return f.exports}();export{C as default};
