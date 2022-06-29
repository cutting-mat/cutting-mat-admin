!function(){var e=document.createElement("style");e.innerHTML="",document.head.appendChild(e),System.register(["./index-legacy.19397424.js","./ui-legacy.77070732.js"],(function(e){"use strict";var t,l,a;return{setters:[function(e){t=e.n,l=e.b,a=e.c},function(){}],execute:function(){var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h2",[e._v("说明")]),l("p",[e._v("字典控件是可以自动请求指定数据字典做为选项的表单控件，请求字典接口约定为：`@/system/api/dict => itemList()`")]),l("h3",[e._v("公共参数")]),l("p",[e._v(" `load[String|Function]`: 必传。String类型代表字典code，Function类型代表自定义请求方法，必须返回一个Promise，见示例:级联选择器。")]),l("p",[e._v(" `valueKey[String]`: 字典数据中用做控件值的字段，默认'id'")]),l("p",[e._v(" `labelKey[String]`: 用做名称的字段，默认'value'")]),l("p",[e._v(" `nullAble[Boolean]`: 是否需要添加空值选项，空值为null；DictRadio组件默认false，其他字典组件均默认true")]),l("p",[e._v(" `placeholder[String]`: 空值展示，默认'请选择'")]),l("p",[e._v(" `attribute[Object]`: 原element组件支持的属性")]),l("h2",[e._v("单选框")]),l("h3",[e._v("通过attribute支持element组件参数")]),l("p",[e._v("参考 "),l("el-link",{attrs:{type:"primary",href:"https://element.eleme.cn/#/zh-CN/component/radio",target:"_blank"}},[e._v("原组件")])],1),l("div",{staticClass:"demo"},[l("el-form",{attrs:{size:"small"}},[l("el-form-item",{attrs:{label:"单选框"}},[l("DictRadio",{attrs:{load:"nation"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)],1)],1),l("h2",[e._v("多选框")]),l("h3",[e._v("通过attribute支持element组件参数")]),l("p",[e._v("参考 "),l("el-link",{attrs:{type:"primary",href:"https://element.eleme.cn/#/zh-CN/component/radio",target:"_blank"}},[e._v("原组件")])],1),l("div",{staticClass:"demo"},[l("el-form",{attrs:{size:"small"}},[l("el-form-item",{attrs:{label:"多选框"}},[l("DictCheckbox",{attrs:{load:"nation"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1)],1),l("h2",[e._v("选择器")]),l("h3",[e._v("通过attribute支持element组件参数")]),l("p",[e._v(" 参考 "),l("el-link",{attrs:{type:"primary",href:"https://element.eleme.cn/#/zh-CN/component/select",target:"_blank"}},[e._v("原组件")])],1),l("div",{staticClass:"demo"},[l("el-form",{attrs:{size:"small"}},[l("el-form-item",{attrs:{label:"选择器"}},[l("DictSelect",{attrs:{load:"nation"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)],1)],1),l("h2",[e._v("级联选择器")]),l("h3",[e._v("通过attribute支持element组件参数")]),l("p",[e._v(" 参考 "),l("el-link",{attrs:{type:"primary",href:"https://element.eleme.cn/#/zh-CN/component/cascader",target:"_blank"}},[e._v("原组件")])],1),l("div",{staticClass:"demo"},[l("el-form",{attrs:{size:"small"}},[l("el-form-item",{attrs:{label:"级联选择器"}},[l("DictCascader",{attrs:{load:e.fetchDict},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)],1)],1)])},r=[],i={},c=t({data:function(){return{value1:null,value2:[498],value3:null,value4:[]}},methods:{fetchDict:function(){return l({dictCode:"xzgh"},{cache:!0}).then((function(e){return a(e.data.data)}))}},created:function(){}},n,r,!1,o,"2bccc6e2",null,null);function o(e){for(var t in i)this[t]=i[t]}e("default",function(){return c.exports}())}}}))}();
