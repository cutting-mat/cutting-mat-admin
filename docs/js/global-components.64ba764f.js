(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["global-components"],{"0a4a":function(e,t,n){},1738:function(e,t,n){"use strict";n("9dd3")},4639:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"breadcrumb flex-row align-center"},[n("i",{staticClass:"el-icon-s-home _home"}),n("el-breadcrumb",{staticClass:"flex-1",attrs:{separator:"/"}},[e._l(e.$route.matched,(function(t){return[t.meta.hide?e._e():n("el-breadcrumb-item",{key:t.path,attrs:{to:t}},[e._v(e._s(t.meta.title||t.name))])]}))],2),e._t("default",(function(){return[n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$router.go(-1)}}},[n("i",{staticClass:"ion"},[e._v("")]),e._v(" 返回上一页 ")])]}))],2)},a=[],r={},l=r,u=(n("1738"),n("2877")),o=Object(u["a"])(l,i,a,!1,null,"cb1ec65e",null);t["default"]=o.exports},"4dbe":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._b({on:{change:function(t){return e.$emit("change",t)}},model:{value:e.bindValue,callback:function(t){e.bindValue=t},expression:"bindValue"}},"el-select",e.attribute,!1),[e.nullAble?n("el-option",{attrs:{label:e.placeholder,value:null}}):e._e(),e._l(e.list,(function(t){return n("el-option",{key:t.value,attrs:{label:t[e.labelKey],value:t[e.valueKey]}})}))],2)},a=[],r=n("a34a"),l=n.n(r),u=n("c7b2"),o=n("5ac4");function c(e,t,n,i,a,r,l){try{var u=e[r](l),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(i,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function l(e){c(r,i,a,l,u,"next",e)}function u(e){c(r,i,a,l,u,"throw",e)}l(void 0)}))}}var d={model:{prop:"value",event:"change"},props:{load:{type:[String,Function],required:!0},value:{type:[String,Number],required:!1},valueKey:{type:String,required:!1,default:"id"},labelKey:{type:String,required:!1,default:"value"},nullAble:{type:Boolean,required:!1,default:!0},placeholder:{type:String,required:!1,default:"请选择"},attribute:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{bindValue:null,list:[]}},watch:{value:{handler:function(){this.value&&(this.bindValue=this.value)},immediate:!0}},methods:{fetchDict:function(){var e=this;Object(o["itemList"])({dictCode:this.load},{cache:!0}).then((function(t){e.list=u["e"].buildTree(t.data.data)}))},fetchRemoteData:function(){var e=s(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:this.list=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.load&&this.load.split?this.fetchDict():"function"===typeof this.load&&this.fetchRemoteData()}},f=d,h=n("2877"),p=Object(h["a"])(f,i,a,!1,null,"5a5aaa01",null);t["default"]=p.exports},"5ac4":function(e,t,n){"use strict";n.r(t),n.d(t,"list",(function(){return a})),n.d(t,"add",(function(){return r})),n.d(t,"edit",(function(){return l})),n.d(t,"remove",(function(){return u})),n.d(t,"itemList",(function(){return o})),n.d(t,"itemAdd",(function(){return c})),n.d(t,"itemEdit",(function(){return s})),n.d(t,"itemRemove",(function(){return d}));var i=n("c7b2"),a=function(e){return i["c"].get("/dict/s",{params:e})},r=function(e){return i["c"].post("/dict",e)},l=function(e){return i["c"].put("/dict",e)},u=function(e){return i["c"].delete("/dict",{params:e})},o=function(e,t){return i["c"].get("/dict/item/s",{params:e},t)},c=function(e){return i["c"].post("/dict/item",e)},s=function(e){return i["c"].put("/dict/item",e)},d=function(e){return i["c"].delete("/dict/item",{params:e})}},"70ef":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",e._b({ref:"table",attrs:{data:e.list},on:{select:function(t,n){return e.$emit("select",t,n)},"select-all":function(t){return e.$emit("select-all",t)},"selection-change":function(t){return e.$emit("selection-change",t)},"cell-mouse-enter":function(t,n,i,a){return e.$emit("cell-mouse-enter",t,n,i,a)},"cell-mouse-leave":function(t,n,i,a){return e.$emit("cell-mouse-leave",t,n,i,a)},"cell-click":function(t,n,i,a){return e.$emit("cell-click",t,n,i,a)},"cell-dblclick":function(t,n,i,a){return e.$emit("cell-dblclick",t,n,i,a)},"row-click":function(t,n,i){return e.$emit("row-click",t,n,i)},"row-contextmenu":function(t,n,i){return e.$emit("row-click",t,n,i)},"row-dblclick":function(t,n,i){return e.$emit("row-dblclick",t,n,i)},"header-click":function(t,n){return e.$emit("header-click",t,n)},"header-contextmenu":function(t,n){return e.$emit("header-contextmenu",t,n)},"sort-change":function(t,n,i){return e.$emit("sort-change",t,n,i)},"filter-change":function(t){return e.$emit("filter-change",t)},"current-change":function(t,n){return e.$emit("current-change",t,n)},"header-dragend":function(t,n,i,a){return e.$emit("header-dragend",t,n,i,a)},"expand-change":function(t,n){return e.$emit("expand-change",t,n)}}},"el-table",Object.assign({border:!0,"default-expand-all":!0,"row-key":"id"},e.tableAttribute),!1),[n("template",{slot:"append"},[e._t("append")],2),e.selectionNode&&"selection"===e.selectionNode.type?n("el-table-column",e._b({},"el-table-column",e.selectionNode,!1)):e._e(),e._l(e.columnsData,(function(t,i){return n("BaseCURDColumn",{key:"col"+i,attrs:{column:t},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(n){return[e._t(t,null,{column:n.column,row:n.row,prop:n.prop})]}}}))],null,!0)})}))],2),e.showPagination?n("Pagination",{attrs:{"page-size":e.queryParamFinnal.pageSize,"current-page":e.queryParamFinnal.p,"total-count":e.totalCount,"total-page":e.totalPage},on:{"current-change":e.handleCurrentChange}}):e._e(),n("el-dialog",e._b({attrs:{visible:e.dialogVisible},on:{close:e.handleCloseDialog}},"el-dialog",Object.assign({title:"详情",width:"800px","close-on-click-modal":!1,"append-to-body":!0},e.dialogAttribute),!1),[e.dialogVisible?n("BaseCURDForm",{ref:"editForm",attrs:{model:e.modelData,default:e.editForm,action:e.editScope,formAttribute:e.formAttribute}}):e._e(),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")]),n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)},a=[],r=n("a34a"),l=n.n(r),u=n("c7b2");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t,n,i,a,r,l){try{var u=e[r](l),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(i,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function l(e){c(r,i,a,l,u,"next",e)}function u(e){c(r,i,a,l,u,"throw",e)}l(void 0)}))}}var d={props:{api:{type:Object,required:!0},model:{type:Object,required:!0,default:function(){return{accountName:{type:"string",default:null,label:"用户名",control:"el-input",controlOption:{},scope:["create","update"],required:!1,validator:null,message:null,asynValid:!1}}}},columns:{type:Array,required:!0,default:function(){return[{hidden:!1,slotName:""}]}},dataKey:{type:String,required:!1,default:"id"},immediate:{type:Boolean,required:!1,default:!0},queryParam:{type:Object,required:!1,default:function(){return{}}},getItemFromDetaiApi:{type:Boolean,required:!1,default:!1},tableAttribute:{type:Object,required:!1,default:function(){return{}}},dialogAttribute:{type:Object,required:!1,default:function(){return{}}},formAttribute:{type:Object,required:!1,default:function(){return{}}}},filters:{formatterFilter:function(e,t,n,i,a){return"function"===typeof a?a(t,n,e,i):e}},components:{BaseCURDForm:function(e){return n.e("chunk-2d0a4bde").then(function(){var t=[n("0877")];e.apply(null,t)}.bind(this)).catch(n.oe)},BaseCURDColumn:function(e){return n.e("chunk-2d0daa66").then(function(){var t=[n("6d02")];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){var e=this;return{dialogVisible:!1,loading:!1,list:[],editForm:{},editScope:"",queryParamFinnal:{p:1,pageSize:10},totalCount:0,totalPage:0,selectionNode:null,table:{clearSelection:function(){return e.$refs.table.clearSelection()},toggleRowSelection:function(t,n){return e.$refs.table.toggleRowSelection(t,n)},toggleAllSelection:function(){return e.$refs.table.toggleAllSelection()},toggleRowExpansion:function(t,n){return e.$refs.table.toggleRowExpansion(t,n)},setCurrentRow:function(t){return e.$refs.table.setCurrentRow(t)},clearSort:function(){return e.$refs.table.clearSort()},clearFilter:function(t){return e.$refs.table.clearFilter(t)},doLayout:function(){return e.$refs.table.doLayout()},sort:function(t,n){return e.$refs.table.clearFilter(t,n)}},form:{validate:function(t){return e.$refs.editForm.validate(t)},validateField:function(t,n){return e.$refs.editForm.validateField(t,n)},resetFields:function(){return e.$refs.editForm.resetFields()},clearValidate:function(){return e.$refs.editForm.clearValidate()}}}},computed:{showPagination:function(){return this.list.length&&this.totalCount&&this.totalPage},modelKey:function(){return Object.keys(this.model)},modelData:function(){var e=Object.assign({},this.model);return this.modelKey.forEach((function(t){var n=Object.assign({},e[t]);e[t]=Object.assign({type:"string",default:{array:[],object:{}}[n.type]||null,control:{boolean:"el-switch",array:"DictCheckbox"}[n.type]||"el-input",scope:["create","update"],required:!!n.required},n),"el-input"===n.control&&(n.controlOption=Object.assign({maxlength:100},n.controlOption))})),e},modelValue:function(){var e=this,t={};return this.modelKey.map((function(n){t[n]=e.modelData[n].default})),t},columnsData:function(){var e=this;return this.columns.filter((function(t){return"selection"===t.type?(e.selectionNode=Object.assign({},t),!1):!t.hidden})).map((function(e){var t=Object.assign({align:"center"},e);return"selection"!==t.type&&"expand"!==t.type||console.warn('BaseCURD组件：columns=>type属性只支持"default"和"index"'),t}))}},watch:{loading:function(){this.$emit("loading-state",this.loading)}},methods:{handleCurrentChange:function(e){this.queryParamFinnal.p=e,this.fetchList()},create:function(){this.editForm=Object.assign({},this.modelValue),this.editScope="create",this.dialogVisible=!0},update:function(){var e=s(l.a.mark((function e(t){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.getItemFromDetaiApi){e.next=4;break}e.t0=u["e"].deepcopy(t),e.next=7;break;case 4:return e.next=6,this.fetchDetail(t[this.dataKey]);case 6:e.t0=e.sent;case 7:this.editForm=e.t0,this.editScope="update",this.dialogVisible=!0;case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),save:function(){var e=this;this.$refs["editForm"].validate((function(t){if(t){var n=u["e"].deepcopy(e.editForm);e.handleCloseDialog();var i=e.api[e.editScope];if("function"!==typeof i)return console.warn("api.".concat(e.editScope,"()未定义"));e.loading=!0,i(n).then((function(){e.$message({message:"操作成功",type:"success"}),e.fetchList()})).catch((function(){e.loading=!1}))}}))},delete:function(e){var t=this;if(!e||!e[this.dataKey])return console.warn("api.delete(): 参数".concat(this.dataKey,"无效"));this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,t.api.delete(o({},t.dataKey,e[t.dataKey])).then((function(){t.fetchList(),t.$message({message:"删除成功",type:"success"})})).catch((function(){t.loading=!1}))})).catch((function(){}))},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm=Object.assign({},this.modelValue)},fetchDetail:function(e){var t=this;return e?(this.loading=!0,this.api.detail(o({},this.dataKey,e)).then((function(e){return t.loading=!1,e.data.data})).catch((function(){t.loading=!1}))):console.warn("api.detail(): 参数".concat(this.dataKey,"无效"))},fetchList:function(e){var t=this;e&&(this.queryParamFinnal.p=1),this.loading=!0,this.api.list(this.queryParamFinnal).then((function(e){t.loading=!1;var n=e.data.data;Array.isArray(n)?t.list=u["e"].buildTree(n):Array.isArray(n.list)&&(t.list=u["e"].buildTree(n.list),t.totalCount=n.totalCount,t.totalPage=n.totalPage)})).catch((function(){t.loading=!1}))},search:function(){Object.assign(this.queryParamFinnal,this.queryParam,{p:this.queryParamFinnal.p,pageSize:this.queryParamFinnal.pageSize}),this.fetchList(!0)}},created:function(){var e=this,t=["list","detail","create","update","delete"].filter((function(t){return"function"!==typeof e.api[t]}));t.length&&console.warn("".concat(t.map((function(e){return"api."+e+"()"})).join("、"),"未定义")),this.immediate&&this.search()}},f=d,h=n("2877"),p=Object(h["a"])(f,i,a,!1,null,"5f540850",null);t["default"]=p.exports},7907:function(e,t,n){"use strict";n("0a4a")},"7e2a":function(e,t,n){},"7e3b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox-group",e._b({on:{change:function(t){return e.$emit("change",t)}},model:{value:e.bindValue,callback:function(t){e.bindValue=t},expression:"bindValue"}},"el-checkbox-group",e.attribute,!1),[e.nullAble?n("el-checkbox",{attrs:{label:null}},[e._v(" "+e._s(e.placeholder)+" ")]):e._e(),e._l(e.list,(function(t){return n("el-checkbox",{key:t.value,attrs:{label:t[e.valueKey]}},[e._v(" "+e._s(t[e.labelKey])+" ")])}))],2)},a=[],r=n("a34a"),l=n.n(r),u=n("c7b2"),o=n("5ac4");function c(e,t,n,i,a,r,l){try{var u=e[r](l),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(i,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function l(e){c(r,i,a,l,u,"next",e)}function u(e){c(r,i,a,l,u,"throw",e)}l(void 0)}))}}var d={model:{prop:"value",event:"change"},props:{load:{type:[String,Function],required:!0},value:{type:Array,required:!1},valueKey:{type:String,required:!1,default:"id"},labelKey:{type:String,required:!1,default:"value"},nullAble:{type:Boolean,required:!1,default:!1},placeholder:{type:String,required:!1,default:"请选择"},attribute:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{bindValue:[],list:[]}},watch:{value:{handler:function(){this.value&&(this.bindValue=this.value)},immediate:!0}},methods:{fetchDict:function(){var e=this;Object(o["itemList"])({dictCode:this.load},{cache:!0}).then((function(t){e.list=u["e"].buildTree(t.data.data)}))},fetchRemoteData:function(){var e=s(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:this.list=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.load&&this.load.split?this.fetchDict():"function"===typeof this.load&&this.fetchRemoteData()}},f=d,h=n("2877"),p=Object(h["a"])(f,i,a,!1,null,"1577958d",null);t["default"]=p.exports},"9dd3":function(e,t,n){},a34a:function(e,t,n){e.exports=n("96cf")},c08e:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":e.pageSize,"current-page":e.currentPage,total:e.totalCount},on:{"current-change":function(t){return e.$emit("current-change",t)}}})},a=[],r={props:{pageSize:{type:Number,required:!0,default:10},currentPage:{type:Number,required:!0,default:1},totalCount:{type:Number,required:!0},totalPage:{type:Number,required:!1}},data:function(){return{}},watch:{totalPage:function(){this.totalPage<this.currentPage&&this.$emit("current-change",1)}}},l=r,u=(n("f627"),n("2877")),o=Object(u["a"])(l,i,a,!1,null,"8809781c",null);t["default"]=o.exports},c415:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-radio-group",e._b({on:{change:function(t){return e.$emit("change",t)}},model:{value:e.bindValue,callback:function(t){e.bindValue=t},expression:"bindValue"}},"el-radio-group",e.attribute,!1),[e.nullAble?n("el-radio",{attrs:{label:null}},[e._v(" "+e._s(e.placeholder)+" ")]):e._e(),e._l(e.list,(function(t){return n("el-radio",{key:t.value,attrs:{label:t[e.valueKey]}},[e._v(" "+e._s(t[e.labelKey])+" ")])}))],2)},a=[],r=n("a34a"),l=n.n(r),u=n("c7b2"),o=n("5ac4");function c(e,t,n,i,a,r,l){try{var u=e[r](l),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(i,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function l(e){c(r,i,a,l,u,"next",e)}function u(e){c(r,i,a,l,u,"throw",e)}l(void 0)}))}}var d={model:{prop:"value",event:"change"},props:{load:{type:[String,Function],required:!0},value:{type:[String,Number],required:!1},valueKey:{type:String,required:!1,default:"id"},labelKey:{type:String,required:!1,default:"value"},nullAble:{type:Boolean,required:!1,default:!1},placeholder:{type:String,required:!1,default:"请选择"},attribute:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{bindValue:null,list:[]}},watch:{value:{handler:function(){this.value&&(this.bindValue=this.value)},immediate:!0}},methods:{fetchDict:function(){var e=this;Object(o["itemList"])({dictCode:this.load},{cache:!0}).then((function(t){e.list=u["e"].buildTree(t.data.data)}))},fetchRemoteData:function(){var e=s(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:this.list=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.load&&this.load.split?this.fetchDict():"function"===typeof this.load&&this.fetchRemoteData()}},f=d,h=n("2877"),p=Object(h["a"])(f,i,a,!1,null,"42e915e5",null);t["default"]=p.exports},f242:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-cascader",e._b({attrs:{options:e.list,props:{value:this.valueKey,label:this.labelKey}},on:{change:function(t){return e.$emit("change",t)}},model:{value:e.bindValue,callback:function(t){e.bindValue=t},expression:"bindValue"}},"el-cascader",e.attribute,!1))},a=[],r=n("a34a"),l=n.n(r),u=n("c7b2"),o=n("5ac4");function c(e,t,n,i,a,r,l){try{var u=e[r](l),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(i,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function l(e){c(r,i,a,l,u,"next",e)}function u(e){c(r,i,a,l,u,"throw",e)}l(void 0)}))}}var d={model:{prop:"value",event:"change"},props:{load:{type:[String,Function],required:!0},value:{type:Array,required:!1},valueKey:{type:String,required:!1,default:"id"},labelKey:{type:String,required:!1,default:"value"},nullAble:{type:Boolean,required:!1,default:!0},placeholder:{type:String,required:!1,default:"请选择"},attribute:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{bindValue:null,list:[]}},computed:{useProps:function(){return Object.assign({value:this.valueKey,label:this.labelKey},this.props)}},watch:{value:{handler:function(){this.value&&(this.bindValue=this.value)},immediate:!0}},methods:{fetchDict:function(){var e=this;Object(o["itemList"])({dictCode:this.load},{cache:!0}).then((function(t){e.list=u["e"].buildTree(t.data.data)}))},fetchRemoteData:function(){var e=s(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:this.list=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.load&&this.load.split?this.fetchDict():"function"===typeof this.load&&this.fetchRemoteData()}},f=d,h=n("2877"),p=Object(h["a"])(f,i,a,!1,null,"14a54794",null);t["default"]=p.exports},f627:function(e,t,n){"use strict";n("7e2a")},fd5c:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showMenu?n("div",{staticClass:"custom-menu scrollbar"},[n("el-menu",{attrs:{"default-active":e.activeIndex,router:"","unique-opened":""}},[e._l(e.list,(function(t,i){return[t.children&&t.children.length?n("el-submenu",{key:"nav"+i,attrs:{route:t,index:t.name}},[n("div",{staticClass:"first flex-row align-center",attrs:{slot:"title"},slot:"title"},[n("i",{staticClass:"ion",domProps:{innerHTML:e._s(t.meta&&t.meta.icon||"&#xe731;")}}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.meta&&t.meta.title||t.name)+" ")])]),e._l(t.children,(function(t,i){return[t.children&&t.children.length?n("el-menu-item-group",{key:"child"+i,attrs:{route:t,index:t.name}},[n("template",{slot:"title"},[n("span",[e._v(" "+e._s(t.meta&&t.meta.title||t.name)+" ")])]),e._l(t.children,(function(t,i){return n("el-menu-item",{key:"grandson"+i,staticClass:"third",attrs:{route:t,index:t.name}},[n("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[n("i",{staticClass:"point"}),e._v(" "+e._s(t.meta&&t.meta.title||t.name)+" ")])])}))],2):n("el-menu-item",{key:"child"+i,staticClass:"second",attrs:{route:t,index:t.name}},[n("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[n("i",{staticClass:"point"}),e._v(" "+e._s(t.meta&&t.meta.title||t.name)+" ")])])]}))],2):n("el-menu-item",{key:"nav"+i,staticClass:"flex-row align-center one",attrs:{route:t,index:t.name}},[n("i",{staticClass:"ion",domProps:{innerHTML:e._s(t.meta&&t.meta.icon||"&#xe731;")}}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.meta&&t.meta.title||t.name)+" ")])])]}))],2)],1):e._e()},a=[],r=n("c7b2"),l=n("9f67"),u=function e(t){var n=t.filter((function(e){return!e.meta||!e.meta.hide}));return n=n.map((function(t){var n=Object.assign({},t);return n.children&&(n.children=e(n.children)),n})),n},o={data:function(){return{state:r["d"].state,list:[],showMenu:!0}},computed:{menu:function(){return this.$AccessControl?this.state.menu:l["a"]},activeIndex:function(){return this.$route.meta&&this.$route.meta.belong?this.$route.meta.belong:this.$route.name}},watch:{$route:{handler:function(e){var t=this,n=-1;if(Array.isArray(this.list)&&(n=this.list.findIndex((function(t){return t.name===e.name}))),-1===n){console.log("切换主栏目");for(var i,a=this.menu.slice(),r=0;r<a.length;r++)if(0===this.$route.path.indexOf(a[r].path)&&a[r].children){i=u(a[r].children);break}this.list=i,this.showMenu=!1,this.$nextTick((function(){t.showMenu=!0}))}},immediate:!0}}},c=o,s=(n("7907"),n("2877")),d=Object(s["a"])(c,i,a,!1,null,"16cc84a7",null);t["default"]=d.exports}}]);