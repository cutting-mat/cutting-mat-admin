(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64bf209e"],{1470:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[i("ToolBar",[i("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.role.add,expression:"role.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v(" 添加 ")])],1),i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[i("el-table-column",{attrs:{prop:"name",label:"角色名称",align:"center"}}),i("el-table-column",{attrs:{prop:"remark",label:"备注"}}),i("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.role.edit,expression:"role.edit"}],attrs:{size:"mini",type:"info",plain:""},on:{click:function(i){return e.edit(t.row)}}},[e._v("编辑")]),i("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.role.remove,expression:"role.remove"}],attrs:{size:"mini",type:"danger",plain:""},on:{click:function(i){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1),i("el-dialog",{staticClass:"comDialog",attrs:{"close-on-click-modal":!1,title:"权限信息",visible:e.dialogVisible,width:"600px"},on:{close:e.handleCloseDialog}},[i("el-form",{ref:"editForm",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[i("el-input",{attrs:{maxlength:100},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name","string"===typeof t?t.trim():t)},expression:"editForm.name"}})],1),i("el-form-item",{attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea",maxlength:1e3},model:{value:e.editForm.remark,callback:function(t){e.$set(e.editForm,"remark","string"===typeof t?t.trim():t)},expression:"editForm.remark"}})],1),i("el-form-item",{attrs:{label:"权限"}},[i("TheResourcePicker",{attrs:{picker:"",checked:e.editForm.resources},on:{check:function(t){e.editForm.resources=t.map((function(e){return e.id}))}}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")]),i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)},n=[],a=i("c7b2"),o=i("2127"),l={components:{TheResourcePicker:function(e){return i.e("chunk-103c787a").then(function(){var t=[i("68fa")];e.apply(null,t)}.bind(this)).catch(i.oe)}},data:function(){return{role:o,dialogVisible:!1,loading:!1,list:[],editForm:{name:"",remark:"",resources:[]},rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:1,max:100,message:"长度 1 到 100 个字符",trigger:"blur"}],remark:[{min:0,max:255,message:"长度 0 到 255 个字符",trigger:"blur"}]}}},methods:{edit:function(e){this.editForm=Object(a["c"])(e),this.$set(this.editForm,"resources",e.resources),this.dialogVisible=!0},save:function(){var e=this;this.$refs["editForm"].validate((function(t){if(t){e.loading=!0;var i=Object(a["c"])(e.editForm);e.handleCloseDialog();var r=i.id?o["edit"]:o["add"];r(i).then((function(){e.fetchData(),e.$message({message:"添加成功",type:"success"})})).catch((function(){e.loading=!1}))}}))},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm={name:"",remark:"",resources:[]},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove:function(e){var t=this;if(!e||!e.id)return null;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,o["remove"]({id:e.id}).then((function(){t.fetchData(),t.$message({message:"删除成功",type:"success"})})).catch((function(){t.loading=!1}))}))},fetchData:function(){var e=this;this.loading=!0,o["list"]().then((function(t){e.loading=!1,e.list=t.data})).catch((function(){e.loading=!1}))}},created:function(){this.fetchData()}},s=l,c=i("2877"),u=Object(c["a"])(s,r,n,!1,null,"068f6c7d",null);t["default"]=u.exports},2127:function(e,t,i){"use strict";i.r(t),i.d(t,"list",(function(){return n})),i.d(t,"detail",(function(){return a})),i.d(t,"add",(function(){return o})),i.d(t,"edit",(function(){return l})),i.d(t,"remove",(function(){return s}));var r=i("c7b2"),n=function(e){return r["a"].get("/role/s",{params:e})},a=function(e){return r["a"].get("/role",{params:e})},o=function(e){return r["a"].post("/role",e)},l=function(e){return r["a"].put("/role",e)},s=function(e){return r["a"].delete("/role",{params:e})}}}]);