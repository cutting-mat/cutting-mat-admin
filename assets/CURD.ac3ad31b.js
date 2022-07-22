import{n as d,_ as n,d as o,c}from"./index.ec256302.js";const u={props:{api:{type:Object,required:!0},model:{type:Object,required:!0,default(){return{name:{type:"string",default:null,label:"\u7528\u6237\u540D",control:"el-input",controlOption:{},scope:["create","update"],required:!1,validator:null,message:null,asynValid:!1}}}},columns:{type:Array,required:!0,default(){return[{hidden:!1,slotName:""}]}},dataKey:{type:String,required:!1,default:"id"},immediate:{type:Boolean,required:!1,default:!0},queryParam:{type:Object,required:!1,default(){return{}}},getItemFromDetaiApi:{type:Boolean,required:!1,default:!1},tableAttribute:{type:Object,required:!1,default(){return{}}},dialogAttribute:{type:Object,required:!1,default(){return{}}},formAttribute:{type:Object,required:!1,default(){return{}}}},filters:{formatterFilter(t,e,l,i,a){return typeof a=="function"?a(e,l,t,i):t}},components:{CURDForm:()=>n(()=>import("./CURDForm.ce687a47.js"),["assets/CURDForm.ce687a47.js","assets/index.ec256302.js","assets/index.4ea686e9.css","assets/ui.c0058d49.js"]),CURDColumn:()=>n(()=>import("./CURDColumn.9ff7f039.js"),["assets/CURDColumn.9ff7f039.js","assets/index.ec256302.js","assets/index.4ea686e9.css","assets/ui.c0058d49.js"])},data(){return{dialogVisible:!1,loading:!1,list:[],editForm:{},editScope:"",queryParamFinnal:{p:1,pageSize:10},totalCount:0,totalPage:0,selectionNode:null,table:{clearSelection:()=>this.$refs.table.clearSelection(),toggleRowSelection:(t,e)=>this.$refs.table.toggleRowSelection(t,e),toggleAllSelection:()=>this.$refs.table.toggleAllSelection(),toggleRowExpansion:(t,e)=>this.$refs.table.toggleRowExpansion(t,e),setCurrentRow:t=>this.$refs.table.setCurrentRow(t),clearSort:()=>this.$refs.table.clearSort(),clearFilter:t=>this.$refs.table.clearFilter(t),doLayout:()=>this.$refs.table.doLayout(),sort:(t,e)=>this.$refs.table.clearFilter(t,e)},form:{validate:t=>this.$refs.editForm.validate(t),validateField:(t,e)=>this.$refs.editForm.validateField(t,e),resetFields:()=>this.$refs.editForm.resetFields(),clearValidate:()=>this.$refs.editForm.clearValidate()}}},computed:{showPagination(){return this.list.length&&this.totalCount&&this.totalPage},modelKey(){return Object.keys(this.model)},modelData(){let t=Object.assign({},this.model);return this.modelKey.forEach(e=>{let l=Object.assign({},t[e]);t[e]=Object.assign({type:"string",default:{array:[],object:{}}[l.type]||null,control:{boolean:"el-switch",array:"DictCheckbox"}[l.type]||"el-input",scope:["create","update"],required:!!l.required},l),l.control==="el-input"&&(l.controlOption=Object.assign({maxlength:100},l.controlOption))}),t},modelValue(){let t={};return this.modelKey.map(e=>{t[e]=this.modelData[e].default}),t},columnsData(){return this.columns.filter(t=>t.type==="selection"?(this.selectionNode=Object.assign({},t),!1):!t.hidden).map(t=>{let e=Object.assign({align:"center"},t);return(e.type==="selection"||e.type==="expand")&&console.warn('BaseCURD\u7EC4\u4EF6\uFF1Acolumns=>type\u5C5E\u6027\u53EA\u652F\u6301"default"\u548C"index"'),e})}},watch:{loading(){this.$emit("loading-state",this.loading)}},methods:{handleCurrentChange:function(t){this.queryParamFinnal.p=t,this.fetchList()},create(){this.editForm=Object.assign({},this.modelValue),this.editScope="create",this.dialogVisible=!0},update:async function(t){this.editForm=this.getItemFromDetaiApi?await this.fetchDetail(t[this.dataKey]):o(t),this.editScope="update",this.dialogVisible=!0},save(){this.$refs.editForm.validate(t=>{if(t){let e=o(this.editForm);this.handleCloseDialog();let l=this.api[this.editScope];if(typeof l!="function")return console.warn(`api.${this.editScope}()\u672A\u5B9A\u4E49`);this.loading=!0,l(e).then(i=>{i.status===200?(this.$message({message:"\u64CD\u4F5C\u6210\u529F",type:"success"}),this.fetchList()):this.$message({message:"\u64CD\u4F5C\u5931\u8D25",type:"warning"})}).catch(()=>{this.loading=!1})}})},delete(t){if(!t||!t[this.dataKey])return console.warn(`api.delete(): \u53C2\u6570${this.dataKey}\u65E0\u6548`);this.$confirm("\u662F\u5426\u5220\u9664?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{this.loading=!0,this.api.delete({[this.dataKey]:t[this.dataKey]}).then(e=>{e.status===200?(this.fetchList(),this.$message({message:"\u5220\u9664\u6210\u529F",type:"success"})):this.$message({message:"\u5220\u9664\u5931\u8D25",type:"warning"})}).catch(()=>{this.loading=!1})}).catch(()=>{})},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm=Object.assign({},this.modelValue)},fetchDetail:function(t){return t?(this.loading=!0,this.api.detail({[this.dataKey]:t}).then(e=>(this.loading=!1,e.data)).catch(()=>{this.loading=!1})):console.warn(`api.detail(): \u53C2\u6570${this.dataKey}\u65E0\u6548`)},fetchList:function(t){t&&(this.queryParamFinnal.p=1),this.loading=!0,this.api.list(this.queryParamFinnal).then(e=>{this.loading=!1;const l=e.data;Array.isArray(l)?this.list=c(l):Array.isArray(l.list)&&(this.list=c(l.list),this.totalCount=l.totalCount,this.totalPage=l.totalPage)}).catch(()=>{this.loading=!1})},search(){Object.assign(this.queryParamFinnal,this.queryParam,{p:this.queryParamFinnal.p,pageSize:this.queryParamFinnal.pageSize}),this.fetchList(!0)}},created(){let t=["list","detail","create","update","delete"].filter(e=>typeof this.api[e]!="function");t.length&&console.warn(`${t.map(e=>"api."+e+"()").join("\u3001")}\u672A\u5B9A\u4E49`),this.immediate&&this.search()}};var h=function(){var e=this,l=e._self._c;return l("div",[l("el-table",e._b({ref:"table",attrs:{data:e.list},on:{select:(i,a)=>e.$emit("select",i,a),"select-all":i=>e.$emit("select-all",i),"selection-change":i=>e.$emit("selection-change",i),"cell-mouse-enter":(i,a,r,s)=>e.$emit("cell-mouse-enter",i,a,r,s),"cell-mouse-leave":(i,a,r,s)=>e.$emit("cell-mouse-leave",i,a,r,s),"cell-click":(i,a,r,s)=>e.$emit("cell-click",i,a,r,s),"cell-dblclick":(i,a,r,s)=>e.$emit("cell-dblclick",i,a,r,s),"row-click":(i,a,r)=>e.$emit("row-click",i,a,r),"row-contextmenu":(i,a,r)=>e.$emit("row-click",i,a,r),"row-dblclick":(i,a,r)=>e.$emit("row-dblclick",i,a,r),"header-click":(i,a)=>e.$emit("header-click",i,a),"header-contextmenu":(i,a)=>e.$emit("header-contextmenu",i,a),"sort-change":(i,a,r)=>e.$emit("sort-change",i,a,r),"filter-change":i=>e.$emit("filter-change",i),"current-change":(i,a)=>e.$emit("current-change",i,a),"header-dragend":(i,a,r,s)=>e.$emit("header-dragend",i,a,r,s),"expand-change":(i,a)=>e.$emit("expand-change",i,a)}},"el-table",Object.assign({border:!0,"default-expand-all":!0,"row-key":"id"},e.tableAttribute),!1),[l("template",{slot:"append"},[e._t("append")],2),e.selectionNode&&e.selectionNode.type==="selection"?l("el-table-column",e._b({},"el-table-column",e.selectionNode,!1)):e._e(),e._l(e.columnsData,function(i,a){return l("CURDColumn",{key:"col"+a,attrs:{column:i},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),function(r){return{key:r,fn:function(s){return[e._t(r,null,{column:s.column,row:s.row,prop:s.prop})]}}})],null,!0)})})],2),e.showPagination?l("Pagination",{attrs:{"page-size":e.queryParamFinnal.pageSize,"current-page":e.queryParamFinnal.p,"total-count":e.totalCount,"total-page":e.totalPage},on:{"current-change":e.handleCurrentChange}}):e._e(),l("el-dialog",e._b({attrs:{visible:e.dialogVisible},on:{close:e.handleCloseDialog}},"el-dialog",Object.assign({title:"\u8BE6\u60C5",width:"800px","close-on-click-modal":!1,"append-to-body":!0},e.dialogAttribute),!1),[e.dialogVisible?l("CURDForm",{ref:"editForm",attrs:{model:e.modelData,default:e.editForm,action:e.editScope,formAttribute:e.formAttribute}}):e._e(),l("div",{attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("\u786E \u5B9A")]),l("el-button",{on:{click:function(i){e.dialogVisible=!1}}},[e._v("\u53D6 \u6D88")])],1)],1)],1)},f=[],m=d(u,h,f,!1,null,"23b88c8c",null,null);const g=m.exports;export{g as c};
