!function(){var t=document.createElement("style");t.innerHTML=".logo[data-v-07cdbbdd]{width:200px;height:200px;margin:40px auto;background:rgba(9,113,241,.3);border-radius:8px;transition:background-color ease .3s}.c[data-v-07cdbbdd]{position:relative;width:100%;height:100%}.side[data-v-07cdbbdd]{position:absolute;top:0;width:40%;height:100%;box-sizing:border-box;padding-top:7%}.side_0[data-v-07cdbbdd]{left:7%}.side_1[data-v-07cdbbdd]{right:7%}.block[data-v-07cdbbdd]{background:rgba(9,113,241,.6);margin-bottom:14%;border-radius:4px}.logo2[data-v-07cdbbdd]{background:#dedede}.logo2 .block[data-v-07cdbbdd]{background:#fff}.wrap[data-v-7d3b6cea]{width:1200px;text-align:center}.maintitle[data-v-7d3b6cea]{color:#000;font-size:2.5em}.subtitle[data-v-7d3b6cea]{color:#476582;font-size:1.6em;font-weight:400;margin-bottom:20px}.channeltitle[data-v-7d3b6cea]{font-size:1.5em;color:#000;margin:40px 0 20px;font-weight:400}.links .el-link[data-v-7d3b6cea]{margin:0 10px}.myBtn[data-v-7d3b6cea]{display:inline-block;border-radius:6px;padding:0 24px;line-height:52px;font-size:1.2rem;font-weight:500;color:#f8f8f8;background-color:#4abf8a;border:2px solid #3eaf7c;transition:background-color .1s ease}.exampleList li[data-v-7d3b6cea]{margin-bottom:20px}.exampleList h4[data-v-7d3b6cea]{margin-bottom:.5em}.foot[data-v-7d3b6cea]{background:#333;padding:24px;overflow:hidden;color:#999;font-size:14px;text-align:center;margin-top:40px}.foot a[data-v-7d3b6cea]{color:#fff;margin:0 .5em}\n",document.head.appendChild(t),System.register(["./index-legacy.dc70cf32.js","./ui-legacy.77070732.js"],(function(t){"use strict";var a,e;return{setters:[function(t){a=t.n,e=t.a},function(){}],execute:function(){var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"logo",class:t.logoClass},[t.refreshMark?e("div",{staticClass:"c"},t._l(t.list,(function(a,i){return e("animated-group",{key:i,staticClass:"side flex-col",class:["side_"+i],attrs:{enterClass:t.enterClass+" "+t.enterClass+(i?"Right":"Left"),leaveClass:t.leaveClass+" "+t.leaveClass+(i?"Right":"Left"),duration:t.duration,delay:t.delay,groupDelay:t.groupDelay},model:{value:t.groupVisible,callback:function(a){t.groupVisible=a},expression:"groupVisible"}},t._l(a,(function(t,a){return e("animated",{key:a,staticClass:"flex-1 block",class:t.animateClass})})),1)})),1):t._e()])},s=[],n={},o=a({data:function(){return{groupVisible:!1,enterClass:"animate__zoomIn",leaveClass:"animate__zoomOut",duration:.5,delay:.3,groupDelay:.8,refreshMark:!0,logoClass:"",list:[[{sideClass:"left",animateClass:[]},{sideClass:"left",animateClass:[]},{sideClass:"left",animateClass:[]}],[{sideClass:"right",animateClass:[]},{sideClass:"right",animateClass:[]},{sideClass:"right",animateClass:[]}]]}},computed:{totalTime:function(){return parseInt(this.list[0].length*(this.duration+this.delay)*1e3)}},methods:{start:function(){var t=this;this.groupVisible=!this.groupVisible,setTimeout((function(){!1===t.groupVisible?("animate__zoomIn"===t.enterClass?(t.enterClass="animate__fadeIn",t.leaveClass="animate__fadeOut",t.logoClass="logo2"):(t.enterClass="animate__zoomIn",t.leaveClass="animate__zoomOut",t.logoClass=""),t.refreshMark=!1,t.$nextTick((function(){t.refreshMark=!0,t.$nextTick((function(){t.start()}))}))):t.$nextTick((function(){t.start()}))}),this.totalTime)}},created:function(){this.start()}},i,s,!1,r,"07cdbbdd",null,null);function r(t){for(var a in n)this[a]=n[a]}var l=function(){return o.exports}(),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"wrap"},[e("logo"),e("h1",{staticClass:"maintitle"},[t._v("Animater")]),e("h2",{staticClass:"subtitle"},[t._v("Vue 动画场景编排组件")]),t._m(0),e("h3",{staticClass:"channeltitle"},[t._v("示例")]),e("ul",{staticClass:"exampleList"},t._l(t.menu,(function(a,i){return e("li",{key:i},[e("h4",[t._v(" "+t._s(a.meta&&a.meta.title||a.name)+" ")]),e("div",[t._v(" "+t._s(a.meta&&a.meta.description)+" "),e("el-link",{attrs:{type:"primary"},on:{click:function(e){return t.$router.push(a)}}},[t._v(" [ 查看示例 ] ")])],1)])})),0)],1),t._m(1)])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"myBtn",attrs:{href:"https://github.com/cutting-mat/animater/blob/main/README_CN.md",target:"_blank"}},[e("i",{staticClass:"el-icon-reading"}),t._v(" 文档 ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"foot"},[e("p",[t._v(" © 2022 - 3022 Author "),e("a",{attrs:{href:"https://refined-x.com/",target:"_blank"}},[t._v("雅X共赏")]),t._v(" Github "),e("a",{attrs:{href:"https://github.com/cutting-mat/animater",target:"_blank"}},[t._v("Animater")])])])}],u={},m=a({components:{logo:l},data:function(){return{menu:e[0].children}}},d,c,!1,f,"7d3b6cea",null,null);function f(t){for(var a in u)this[a]=u[a]}t("default",function(){return m.exports}())}}}))}();
