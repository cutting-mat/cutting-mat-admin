(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8a33"],{3011:function(a,e,r){"use strict";r.r(e);var t=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",[r("h2",[a._v("简介")]),r("p",[a._v("基于Echart封装的饼状图组件")]),r("h2",[a._v("示例")]),r("div",{staticClass:"demo"},[r("chart-pie",{attrs:{data:a.data,radius:a.radius}})],1),a._m(0),r("h2",[a._v("配置")]),r("h3",[a._v("饼状图颜色")]),r("p",[a._v("colors(Array):默认全局色表；")]),a._m(1),r("div",{staticClass:"demo"},[r("chart-pie",{attrs:{data:a.data,radius:a.radius,colors:a.colors}})],1),a._m(2),r("h3",[a._v("图例颜色")]),r("p",[a._v("legendColor(String): 图例字体颜色，默认 #000")]),r("div",{staticClass:"demo"},[r("chart-pie",{attrs:{data:a.data,radius:a.radius,colors:a.colors,legendColor:"#2978ff"}})],1),a._m(3),r("h3",[a._v("两列图例")]),r("p",[a._v("isMoreLegend(Boolean)：图列是否为两列，默认false")]),r("div",{staticClass:"demo"},[r("chart-pie",{attrs:{data:a.data,radius:a.radius,colors:a.colors,isMoreLegend:a.isLegend}})],1),a._m(4),r("h3",[a._v("饼图圆心位置")]),r("p",[a._v("center(Array)：设置饼图圆心位置，默认：[45%(水平),50%（垂直）]")]),r("div",{staticClass:"demo"},[r("chart-pie",{attrs:{data:a.data,radius:a.radius,colors:a.colors,isMoreLegend:a.isLegend,center:["32%","50%"]}})],1),a._m(5),r("h3",[a._v("大小 & 环形图")]),r("p",[a._v(" radius(Number/String) ：指定饼图外半径，支持百分数或数值，百分数表示相对容器高宽中较短一项的比例，数值单位'px'。默认\"70%\"。 ")]),a._m(6),r("div",{staticClass:"demo"},[r("chart-pie",{attrs:{data:a.data,radius:a.radiusArr}})],1),a._m(7),r("h3",[a._v("有引导的环形饼状图")]),r("p",[a._v("isLableLine(Boolean)：是否有引导线，默认false")]),r("div",{staticClass:"demo"},[r("chart-pie",{attrs:{data:a.data,radius:a.radiusArr,isLableLine:a.isShowLine}})],1),a._m(8),r("h3",[a._v("图例翻页的环形饼状图")]),r("p",[a._v("isScroll(Boolean)：图例是否可以滚动，默认false")]),r("div",{staticClass:"demo"},[r("chart-pie",{attrs:{data:a.data1,radius:a.radiusArr,isLableLine:a.isShowLine,isScroll:a.isScroll}})],1),a._m(9)])},s=[function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("pre",{staticClass:"code"},[a._v("        "),r("textarea",{attrs:{readonly:""}},[a._v('        <chart-pie :data="data" :radius="radius" />\n        ')]),a._v("\n    ")])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("p",[a._v(" colors示例： "),r("code",[a._v('["#5B8FF9", "#61DDAA"]')])])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("pre",{staticClass:"code"},[a._v("        "),r("textarea",{attrs:{readonly:"",rows:"6"}},[a._v('        <chart-pie\n            :data="data"\n            :radius="radius"\n            :colors="colors"\n        />\n        ')]),a._v("\n    ")])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("pre",{staticClass:"code"},[a._v("        "),r("textarea",{attrs:{readonly:"",rows:"6"}},[a._v('        <chart-pie\n            :data="data"\n            :radius="radius"\n            :colors="colors"\n            :legendColor="\'#2978ff\'"\n        />\n        ')]),a._v("\n    ")])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("pre",{staticClass:"code"},[a._v("        "),r("textarea",{attrs:{readonly:"",rows:"6"}},[a._v('        <chart-pie\n            :data="data"\n            :radius="radius"\n            :colors="colors"\n            :isMoreLegend="isLegend"\n        />\n        ')]),a._v("\n    ")])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("pre",{staticClass:"code"},[a._v("        "),r("textarea",{attrs:{readonly:"",rows:"6"}},[a._v('        <chart-pie\n            :data="data"\n            :radius="radius"\n            :colors="colors"\n            :isMoreLegend="isLegend"\n            :center="[\'32%\', \'50%\']"\n        />\n        ')]),a._v("\n    ")])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("p",[a._v(" radius(Array)：传入长度为2的数组可以生成环形图，数组值分别指定环状内半径和外半径，数组元素同样支持Number/String两种格式。例如： "),r("code",[a._v("['50%', '70%']")])])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("pre",{staticClass:"code"},[a._v("        "),r("textarea",{attrs:{readonly:""}},[a._v('        <chart-pie :data="data" :radius="radiusArr" />\n        ')]),a._v("\n    ")])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("pre",{staticClass:"code"},[a._v("        "),r("textarea",{attrs:{readonly:""}},[a._v('        <chart-pie :data="data" :radius="radiusArr" :isLableLine="isShowLine" />\n        ')]),a._v("\n    ")])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("pre",{staticClass:"code"},[a._v("        "),r("textarea",{attrs:{readonly:""}},[a._v('        <chart-pie\n            :data="data1"\n            :radius="radiusArr"\n            :isLableLine="isShowLine"\n            :isScroll="isScroll"\n        />\n        ')]),a._v("\n    ")])}],i={data:function(){return{data:[{label:["朝阳社区","高碑店社区","劲松党建","龙山街道","丰台小区","金城小区"],value:[335,310,310,135,135,1548]}],data1:[{label:["朝阳社区","高碑店社区","劲松党建","龙山街道","丰台小区","金城小区","皇姑区","铁西","金普新区","高新区","沙河口区"],value:[335,310,310,135,135,1548,400,500,600,700,800]}],radius:[0,"70%"],radiusArr:["50%","70%"],radiuses:[100,150],isLableLine:!1,isMoreLegend:!1,isShowLine:!0,isLegend:!0,colors:["#2A5D9D","#198641","#96BB2C","#43135C","#D51C8F","#E55113"],isScroll:!0}},methods:{},created:function(){}},n=i,d=r("2877"),o=Object(d["a"])(n,t,s,!1,null,"1d66cac3",null);e["default"]=o.exports}}]);