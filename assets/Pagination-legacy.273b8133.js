!function(){var e=document.createElement("style");e.innerHTML=".pagination[data-v-c5c1b40c]{text-align:center;margin:20px 0}\n",document.head.appendChild(e),System.register(["./index-legacy.dc70cf32.js","./ui-legacy.77070732.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.n},function(){}],execute:function(){var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-pagination",{staticClass:"pagination",attrs:{background:"","page-sizes":[10,20,30,50],layout:"prev, pager, next, sizes","page-size":e.pageSize,"current-page":e.currentPage,total:e.totalCount},on:{"current-change":function(t){return e.$emit("current-change",t)},"size-change":function(t){return e.$emit("size-change",t)}}})},r=[],a={},i=t({props:{pageSize:{type:Number,required:!0,default:10},currentPage:{type:Number,required:!0,default:1},totalCount:{type:Number,required:!0},totalPage:{type:Number,required:!1}},data:function(){return{}},watch:{totalPage:function(){this.totalPage<this.currentPage&&this.$emit("current-change",1)}}},n,r,!1,u,"c5c1b40c",null,null);function u(e){for(var t in a)this[t]=a[t]}e("default",function(){return i.exports}())}}}))}();
