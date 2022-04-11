(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e82c16c"],{8855:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"example"},[a("h2",[e._v("简介")]),a("p",[e._v("基于Quill的富文本编辑器组件")]),a("h2",[e._v("示例")]),a("p",[e._v("默认v-model传递的值为富文本数据[Array]：")]),a("div",{staticClass:"demo"},[a("richtext",{model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),a("el-input",{attrs:{type:"textarea",rows:6,value:"富文本数据："+JSON.stringify(e.content)}})],1),e._m(0),a("p",[e._v(" 配合JSON存取接口可实现异步模式，此时v-model传递的值为JSON数据的存储ID[String]： ")]),a("div",{staticClass:"demo"},[a("richtext",{attrs:{async:"",autoSave:""},model:{value:e.contentUrl,callback:function(t){e.contentUrl=t},expression:"contentUrl"}}),a("el-input",{attrs:{type:"textarea",rows:6,value:"富文本 ID："+e.contentUrl}})],1),e._m(1),a("p",[e._v("只读模式：")]),a("div",{staticClass:"demo"},[a("richtext",{attrs:{value:e.demoCont,imgZoom:"","read-only":""}})],1),e._m(2),a("h2",[e._v("配置")]),a("el-table",{attrs:{data:e.props}},[a("el-table-column",{attrs:{prop:"name",label:"属性"}}),a("el-table-column",{attrs:{prop:"desc",label:"说明"}}),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),a("el-table-column",{attrs:{prop:"options",label:"可选"}}),a("el-table-column",{attrs:{prop:"default",label:"默认"}})],1),a("h2",[e._v("事件")]),a("el-table",{attrs:{data:e.events}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"desc",label:"说明"}}),a("el-table-column",{attrs:{prop:"param",label:"参数"}})],1),a("h2",[e._v("方法")]),a("el-table",{attrs:{data:e.methods}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"desc",label:"说明"}}),a("el-table-column",{attrs:{prop:"param",label:"参数"}}),a("el-table-column",{attrs:{prop:"example",label:"示例"}})],1)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",{staticClass:"code"},[e._v("      "),a("textarea",{attrs:{readonly:""}},[e._v('      <richtext v-model="content" />\n      ')]),e._v("\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",{staticClass:"code"},[e._v("      "),a("textarea",{attrs:{readonly:""}},[e._v('      <richtext v-model="contentUrl" async autoSave />\n      ')]),e._v("\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",{staticClass:"code"},[e._v("      "),a("textarea",{attrs:{readonly:""}},[e._v('      <richtext read-only :value="demoCont" />\n      ')]),e._v("\n  ")])}],r={data:function(){return{content:[],contentUrl:"",demoCont:[{insert:"标题一"},{attributes:{header:1},insert:"\n"},{insert:"标题二"},{attributes:{header:2},insert:"\n"},{insert:"段落文字，"},{attributes:{color:"#e60000"},insert:"段落文字，"},{attributes:{background:"#ffc266"},insert:"段落文字"},{insert:"\n右对齐"},{attributes:{align:"right"},insert:"\n"},{attributes:{bold:!0},insert:"加粗，"},{attributes:{italic:!0},insert:"斜体，"},{attributes:{underline:!0},insert:"下划线"},{insert:"\n"},{insert:{image:"http://oss.zjsz.sogdata.com/20210616170248/logo.png"}},{insert:"\n"}],props:[{name:"value",desc:"富文本数据，或富文本存储ID，取决于 `async` 配置",type:"Array/String",options:"-",default:'[]/""'},{name:"read-only",desc:"只读模式",type:"Boolean",options:"-",default:"false"},{name:"async",desc:"异步模式，如果设成异步模式value传递的是存储接口返回的fileID",type:"Boolean",options:"-",default:"false"},{name:"imgZoom",desc:"图片预览模式，图片默认缩小尺寸，点击放大",type:"Boolean",options:"-",default:"false"},{name:"asyncGetApi",desc:"异步模式的JSON存储方法，参数(fileID[String])",type:"Function",options:"-",default:'import {getJSON} from "@/main/api/common'},{name:"saveJSON",desc:"异步模式的JSON获取方法，参数(fileID[String], JSON[Object])",type:"Function",options:"-",default:'import {saveJSON} from "@/main/api/common'},{name:"autoSave",desc:"异步模式模式下自动保存",type:"Boolean",options:"-",default:"false"}],events:[{name:"change",desc:"内容变化事件",param:"富文本内容[Array]/富文本id[String]"},{name:"textChange",desc:"纯文本变化事件",param:"提取纯文本[String]"}],methods:[{name:"asyncSave",desc:"异步模式模式下手动保存方法，返回 Promise",param:"-",example:'this.$refs.myInput.asyncSave().then(() => alert("保存成功"))'}]}}},s=r,o=(a("eae7"),a("2877")),c=Object(o["a"])(s,n,l,!1,null,"27395c30",null);t["default"]=c.exports},b300:function(e,t,a){},eae7:function(e,t,a){"use strict";a("b300")}}]);