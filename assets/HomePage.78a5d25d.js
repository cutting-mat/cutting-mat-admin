import{n as l,a as c}from"./index.833c2dcf.js";import"./ui.9b8b7178.js";var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo",class:t.logoClass},[t.refreshMark?a("div",{staticClass:"c"},t._l(t.list,function(s,i){return a("animated-group",{key:i,staticClass:"side flex-col",class:["side_"+i],attrs:{enterClass:t.enterClass+" "+t.enterClass+(i?"Right":"Left"),leaveClass:t.leaveClass+" "+t.leaveClass+(i?"Right":"Left"),duration:t.duration,delay:t.delay,groupDelay:t.groupDelay},model:{value:t.groupVisible,callback:function(r){t.groupVisible=r},expression:"groupVisible"}},t._l(s,function(r,d){return a("animated",{key:d,staticClass:"flex-1 block",class:r.animateClass})}),1)}),1):t._e()])},u=[];const m={data(){return{groupVisible:!1,enterClass:"animate__zoomIn",leaveClass:"animate__zoomOut",duration:.5,delay:.3,groupDelay:.8,refreshMark:!0,logoClass:"",list:[[{sideClass:"left",animateClass:[]},{sideClass:"left",animateClass:[]},{sideClass:"left",animateClass:[]}],[{sideClass:"right",animateClass:[]},{sideClass:"right",animateClass:[]},{sideClass:"right",animateClass:[]}]]}},computed:{totalTime(){return parseInt(this.list[0].length*(this.duration+this.delay)*1e3)}},methods:{start(){this.groupVisible=!this.groupVisible,setTimeout(()=>{this.groupVisible===!1?(this.enterClass==="animate__zoomIn"?(this.enterClass="animate__fadeIn",this.leaveClass="animate__fadeOut",this.logoClass="logo2"):(this.enterClass="animate__zoomIn",this.leaveClass="animate__zoomOut",this.logoClass=""),this.refreshMark=!1,this.$nextTick(()=>{this.refreshMark=!0,this.$nextTick(()=>{this.start()})})):this.$nextTick(()=>{this.start()})},this.totalTime)}},created(){this.start()}},n={};var h=l(m,_,u,!1,v,"07cdbbdd",null,null);function v(t){for(let e in n)this[e]=n[e]}var b=function(){return h.exports}(),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"wrap"},[a("logo"),a("h1",{staticClass:"maintitle"},[t._v("Animater")]),a("h2",{staticClass:"subtitle"},[t._v("Vue \u52A8\u753B\u573A\u666F\u7F16\u6392\u7EC4\u4EF6")]),t._m(0),a("h3",{staticClass:"channeltitle"},[t._v("\u793A\u4F8B")]),a("ul",{staticClass:"exampleList"},t._l(t.menu,function(s,i){return a("li",{key:i},[a("h4",[t._v(" "+t._s(s.meta&&s.meta.title||s.name)+" ")]),a("div",[t._v(" "+t._s(s.meta&&s.meta.description)+" "),a("el-link",{attrs:{type:"primary"},on:{click:function(r){return t.$router.push(s)}}},[t._v(" [ \u67E5\u770B\u793A\u4F8B ] ")])],1)])}),0)],1),t._m(1)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"myBtn",attrs:{href:"https://github.com/cutting-mat/animater/blob/main/README_CN.md",target:"_blank"}},[a("i",{staticClass:"el-icon-reading"}),t._v(" \u6587\u6863 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"foot"},[a("p",[t._v(" \xA9 2022 - 3022 Author "),a("a",{attrs:{href:"https://refined-x.com/",target:"_blank"}},[t._v("\u96C5X\u5171\u8D4F")]),t._v(" Github "),a("a",{attrs:{href:"https://github.com/cutting-mat/animater",target:"_blank"}},[t._v("Animater")])])])}];const p={components:{logo:b},data(){return{menu:c[0].children}}},o={};var C=l(p,g,f,!1,x,"7d3b6cea",null,null);function x(t){for(let e in o)this[e]=o[e]}var $=function(){return C.exports}();export{$ as default};
