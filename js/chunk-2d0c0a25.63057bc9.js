(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0a25"],{"432b":function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("h2",[e._v("简介")]),t("p",[e._v("单图上传组件，用于上传头像或封面。")]),t("h2",[e._v("示例")]),t("div",{staticClass:"demo"},[t("upload-single-img",{attrs:{value:{url:e.editForm.album},placeholder:"上传封面"},on:{change:function(l){e.editForm.album=l.url}}})],1),e._m(0),t("h2",[e._v("配置")]),t("el-table",{attrs:{data:e.props}},[t("el-table-column",{attrs:{prop:"name",label:"属性"}}),t("el-table-column",{attrs:{prop:"desc",label:"说明"}}),t("el-table-column",{attrs:{prop:"type",label:"类型"}}),t("el-table-column",{attrs:{prop:"options",label:"可选"}}),t("el-table-column",{attrs:{prop:"default",label:"默认"}})],1),t("h2",[e._v("事件")]),t("el-table",{attrs:{data:e.events}},[t("el-table-column",{attrs:{prop:"name",label:"名称"}}),t("el-table-column",{attrs:{prop:"desc",label:"说明"}}),t("el-table-column",{attrs:{prop:"param",label:"参数"}})],1)],1)},r=[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("pre",{staticClass:"code"},[e._v("        "),t("textarea",{attrs:{readonly:"",rows:"6"}},[e._v('        <upload-single-img\n            :value="{ url: editForm.album }"\n            placeholder="上传封面"\n            @change="(file) => { editForm.album = file.url }"\n        />\n        ')]),e._v("\n    ")])}],n={data:function(){return{editForm:{album:""},props:[{name:"value",desc:"图片数据，必须含有url字段",type:"Object",options:"-",default:"-"},{name:"placeholder",desc:"上传占位文字",type:"String",options:"-",default:"上传"}],events:[{name:"change",desc:"上传图片成功事件",param:"file[Object]"}]}},methods:{},created:function(){}},o=n,s=t("2877"),c=Object(s["a"])(o,a,r,!1,null,"7749afdc",null);l["default"]=c.exports}}]);