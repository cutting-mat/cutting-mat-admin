(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29644098"],{a268:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"orgPick-box"},[i("el-input",{attrs:{size:t.size,readonly:"",value:t.showTitle,placeholder:"请选择"},on:{focus:function(e){t.dialogVisible=!0}}}),i("el-dialog",{staticClass:"custom-dialog",attrs:{"append-to-body":"","close-on-click-modal":!1,title:"选择组织",visible:t.dialogVisible,width:"1000px"},on:{"update:visible":function(e){t.dialogVisible=e},open:t.dialogOpen}},[i("div",{staticClass:"orgPicker"},[t.dialogVisible?i("OrgTree",{attrs:{value:t.list,picker:""},on:{pick:function(e){t.checkedNode=e}}}):t._e()],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.submit}},[t._v("确 定")]),i("el-button",{attrs:{size:"medium"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)])],1)},o=[],c=i("c7b2"),a=i("eee4"),r={model:{prop:"value",event:"change"},props:{value:{type:[Number,String],required:!1},adapter:{type:Function,required:!1,default:function(t,e){return e.name||t}},size:{type:String,required:!1,default:"small"}},components:{OrgTree:function(t){return i.e("chunk-2d215c43").then(function(){var e=[i("c033")];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{loading:!1,dialogVisible:!1,list:[],checkedNode:{},submitNode:{}}},computed:{showTitle:function(){return this.adapter(this.value,this.submitNode)}},methods:{dialogOpen:function(){this.checkedNode={},this.submitNode={}},fetchData:function(){var t=this;this.loading=!0,Object(a["list"])().then((function(e){t.loading=!1,e.data&&(t.list=Object(c["b"])(e.data))})).catch((function(){t.loading=!1}))},submit:function(){this.checkedNode&&this.checkedNode[0]&&(this.submitNode=Object(c["c"])(this.checkedNode[0]),this.$emit("change",this.checkedNode[0].id)),this.dialogVisible=!1}},created:function(){this.fetchData()}},s=r,u=(i("b44d"),i("2877")),d=Object(u["a"])(s,n,o,!1,null,"44166004",null);e["default"]=d.exports},b44d:function(t,e,i){"use strict";i("d43c")},d43c:function(t,e,i){},eee4:function(t,e,i){"use strict";i.r(e),i.d(e,"list",(function(){return o})),i.d(e,"get",(function(){return c})),i.d(e,"add",(function(){return a})),i.d(e,"edit",(function(){return r})),i.d(e,"remove",(function(){return s}));var n=i("c7b2"),o=function(t){return n["a"].get("/orgs",{params:t})},c=function(t){return n["a"].get("/org",{params:t})},a=function(t){return n["a"].post("/org",t)},r=function(t){return n["a"].put("/org",t)},s=function(t){return n["a"].delete("/org",{params:t})}}}]);