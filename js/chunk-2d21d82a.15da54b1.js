(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d82a"],{d239:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h2",[a._v("简介")]),e("p",[a._v("基于Echart封装的图表组件，支持线、柱两种类型")]),e("h2",[a._v("示例")]),e("div",{staticClass:"demo"},[e("chart",{attrs:{data:a.data1}})],1),a._m(0),e("h2",[a._v("配置")]),e("h3",[a._v("图表类型")]),e("p",[a._v('chartType(String): 默认"bar"，可选："bar | line"')]),e("div",{staticClass:"flex-row"},[e("div",{staticClass:"flex-1"},[e("div",{staticClass:"demo"},[e("chart",{attrs:{data:a.data2,chartType:"line"}})],1),a._m(1)]),e("div",{staticClass:"flex-1"},[e("div",{staticClass:"demo"},[e("chart",{attrs:{data:a.data3,colors:a.colors,chartType:"bar,line",legend:["宣传","教育"]}})],1),a._m(2)])]),e("h3",[a._v("图例")]),e("p",[a._v("legend(Array): 图例名称数组，默认不显示图例")]),e("div",{staticClass:"demo"},[e("chart",{attrs:{data:a.data1,legend:["宣传教育"]}})],1),a._m(3),e("h3",[a._v("颜色")]),e("p",[a._v("colors(Array): 用于柱图背景/折线图线条和区域，默认使用全局色表。")]),a._m(4),a._m(5),a._m(6),e("div",{staticClass:"demo"},[e("chart",{attrs:{data:a.data3,colors:a.colors,chartType:"bar,line"}})],1),a._m(7),e("div",{staticClass:"demo"},[e("chart",{attrs:{data:a.data2,colors:a.colors2,chartType:"line"}})],1),a._m(8),e("h3",[a._v("坐标轴颜色")]),e("p",[a._v("axisColor(String): 坐标轴，坐标轴刻度标签，坐标轴分割线相关颜色，默认 #000")]),e("div",{staticClass:"demo"},[e("chart",{attrs:{data:a.data1,axisColor:"#2978ff"}})],1),a._m(9),e("h3",[a._v("柱状图堆叠")]),e("p",[a._v("stack(Boolean): 多组柱图是否堆叠，默认false")]),e("div",{staticClass:"demo"},[e("chart",{attrs:{data:a.data3,colors:a.colors,stack:""}})],1),a._m(10),e("h3",[a._v("柱状图圆角")]),e("p",[a._v("radius(Number): 柱图圆角尺寸，默认2")]),e("div",{staticClass:"demo"},[e("chart",{attrs:{data:a.data3,radius:10}})],1),a._m(11)])},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("pre",{staticClass:"code"},[a._v("    "),e("textarea",{attrs:{readonly:""}},[a._v('      <chart :data="data1" />\n    ')]),a._v("\n  ")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("pre",{staticClass:"code"},[a._v("        "),e("textarea",{attrs:{readonly:""}},[a._v('            <chart :data="data2" chartType="line" />\n        ')]),a._v("\n      ")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("pre",{staticClass:"code"},[a._v("        "),e("textarea",{attrs:{readonly:""}},[a._v('          <chart\n              :data="data3"\n              :colors="colors"\n              chartType="bar,line"\n              :legend="[\'宣传\', \'教育\']"\n          />\n      ')]),a._v("\n      ")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("pre",{staticClass:"code"},[a._v("    "),e("textarea",{attrs:{readonly:""}},[a._v('        <chart\n            :data="data1"\n            :legend="[\'宣传教育\']"\n        />\n    ')]),a._v("\n  ")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[a._v(" 纯色模式格式：[色值]，例如 "),e("code",[a._v('["#5B8FF9", "#61DDAA"]')])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[a._v(" 渐变模式格式：[[渐变起始色值，渐变终止色值]]，例如 "),e("code",[a._v('[ ["#286BF1", "#5CA4F8"], ["#FAD961", "#FAD961"], ]')])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[a._v(" 阴影（仅适用于折线图）格式：[[线条色值，渐变起始色值，渐变终止色值]]，例如 "),e("code",[a._v(' [ ["rgba(43,95,212,0.65)", "rgba(58,156,235,0.1)", "rgba(43,95,212,1)"] ] ')])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("pre",{staticClass:"code"},[a._v("    "),e("textarea",{attrs:{readonly:"",rows:"6"}},[a._v('        <chart\n            :data="data3"\n            :colors="colors"\n            chartType="bar,line"\n        />\n    ')]),a._v("\n  ")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("pre",{staticClass:"code"},[a._v("    "),e("textarea",{attrs:{readonly:"",rows:"6"}},[a._v('        <chart\n            :data="data2"\n            :colors="colors2"\n            chartType="line"\n        />\n    ')]),a._v("\n  ")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("pre",{staticClass:"code"},[a._v("    "),e("textarea",{attrs:{readonly:"",rows:"6"}},[a._v('        <chart\n            :data="data1"\n            :axisColor="\'#2978ff\'"\n        />\n    ')]),a._v("\n  ")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("pre",{staticClass:"code"},[a._v("    "),e("textarea",{attrs:{readonly:"",rows:"6"}},[a._v('      <chart\n          :data="data3"\n          :colors="colors"\n          stack\n      />\n      ')]),a._v("\n  ")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("pre",{staticClass:"code"},[a._v("    "),e("textarea",{attrs:{readonly:"",rows:"6"}},[a._v('    <chart\n        :data="data3"\n        :radius="10"\n    />\n    ')]),a._v("\n  ")])}],n={data:function(){return{data1:[{label:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],value:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]}],data2:[{label:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],value:[12,14.9,17,23.2,55.6,76.7,135.6,162.2,135.6,162.7,135.2,162.6]}],data3:[{label:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],value:[2,4.9,7,23.2,25.6,76.7,135.6,82.2,32.6,20,6.4,3.3]},{label:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],value:[13,26.9,37,24.2,35.6,79.7,82.6,109.2,62.6,30,16.4,13.3]}],colors:[["#286BF1","#5CA4F8"],["#FAD961","#FAD961"]],colors2:[["rgba(43,95,212,0.65)","rgba(58,156,235,0.1)","rgba(43,95,212,1)"],["rgba(190,42,42,0.65)","rgba(191,80,80,0.1)","rgba(242,23,23,1)"]]}}},c=n,l=e("2877"),o=Object(l["a"])(c,r,s,!1,null,"e688af02",null);t["default"]=o.exports}}]);