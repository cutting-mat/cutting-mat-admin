(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-038e02c0"],{6490:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("el-button",{attrs:{globalWatermark:"primary"},on:{click:t.globalWatermark}},[t._v("全局水印")]),a("el-button",{attrs:{type:"primary"},on:{click:t.partWatermark}},[t._v("局部水印")]),a("el-button",{attrs:{type:"danger"},on:{click:t.del}},[t._v("删除水印")]),a("br"),t._v(" "),a("br"),a("watermark",{attrs:{text:"水印文本",state:t.stateFlag,width:180,height:100,switch:t.switchFlag,colors:[{value:0,color:"orange"},{value:.3,color:"pink"},{value:.4,color:"blue"},{value:.6,color:"red"}]}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 填充内容填充内容填充内容填充内容填充内容填充内容 填充内容填充内容填充内容填充内容 ")])]),a("br"),t._m(0),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list}},[a("el-table-column",{attrs:{prop:"name",label:"参数",width:"180"}}),a("el-table-column",{attrs:{prop:"describe",label:"说明",width:"180"}}),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),a("el-table-column",{attrs:{prop:"select",label:"可选值"}}),a("el-table-column",{attrs:{prop:"default",label:"默认值"}})],1),a("div",{staticClass:"param_box"})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"param_box"},[a("span",[t._v("（注意演示时，全局、局部来回切换时；需先点击删除水印）")])])}],r={data:function(){return{switchFlag:!1,stateFlag:"global",list:[{name:"text",describe:"水印文字描述",type:"String",select:"必填",default:"--"},{name:"switch",describe:"开关状态",type:"Boolean",select:"必填",default:"false"},{name:"state",describe:"全局或局部水印",type:"String",select:"非必填， global为全局水印，part为局部水印",default:"global"},{name:"colors",describe:"文字颜色",type:"Array",select:"非必填， 单色号格式['#2c3e50']，渐变色格式，[{value:0,color:'orange'},{value:0.3,color:'pink'}]",default:'["rgba(100,100,100,0.15)"]'},{name:"width",describe:"宽度",type:"Number",select:"非必填",default:120},{name:"height",describe:"高度",type:"Number",select:"非必填",default:120},{name:"rotate",describe:"倾斜角度",type:"Number",select:"非必填",default:-15},{name:"textAlign",describe:"对齐方式",type:"String",select:"非必填",default:"left"},{name:"font",describe:"文字大小，字体",type:"String",select:"非必填",default:"22px Vedana"}]}},mounted:function(){},methods:{globalWatermark:function(){this.switchFlag?this.$message.success("已经创建水印了,如需重新创建，请先删除原水印"):(this.switchFlag=!0,this.stateFlag="global")},partWatermark:function(){this.switchFlag?this.$message.success("已经创建水印了,如需重新创建，请先删除原水印"):(this.switchFlag=!0,this.stateFlag="part")},del:function(){this.switchFlag=!1}}},c=r,i=(a("e79c"),a("2877")),n=Object(i["a"])(c,l,s,!1,null,"33541756",null);e["default"]=n.exports},"9c75":function(t,e,a){},e79c:function(t,e,a){"use strict";a("9c75")}}]);