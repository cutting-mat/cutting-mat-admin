!function(){var e=document.createElement("style");e.innerHTML=".chartwarp[data-v-94dd2154],.widget-chart-line[data-v-94dd2154]{width:100%;height:100%}.demo[data-v-4fe1a37b]{height:300px}\n",document.head.appendChild(e),System.register(["./variate-legacy.6823138b.js","./index-legacy.19397424.js","./sausage-legacy.a25f3e32.js","./createSeriesDataSimply-legacy.208e4f32.js","./ui-legacy.77070732.js"],(function(e){"use strict";var t,r,a,i,n,o,l,s,c,g,d,h,u,p,f,y,v,m,A,w,S,x,C,M,b,I,E,_,k,F,L,B;return{setters:[function(e){t=e._,r=e.P,a=e.c9,i=e.a8,n=e.aL,o=e.r,l=e.Z,s=e.aN,c=e.j,g=e.bT,d=e.ca,h=e.A,u=e.bI,p=e.O,f=e.s,y=e.t,v=e.c,m=e.G,A=e.Q,w=e.cb,S=e.u,x=e.F,C=e.l,M=e.k,b=e.e,I=e.V,E=e.W,_=e.X,k=e.Y},function(e){F=e.n},function(e){L=e.S},function(e){B=e.c},function(){}],execute:function(){var T=function(){this.angle=0,this.width=10,this.r=10,this.x=0,this.y=0},j=function(e){function r(t){var r=e.call(this,t)||this;return r.type="pointer",r}return t(r,e),r.prototype.getDefaultShape=function(){return new T},r.prototype.buildPath=function(e,t){var r=Math.cos,a=Math.sin,i=t.r,n=t.width,o=t.angle,l=t.x-r(o)*n*(n>=i/3?1:2),s=t.y-a(o)*n*(n>=i/3?1:2);o=t.angle-Math.PI/2,e.moveTo(l,s),e.lineTo(t.x+r(o)*n,t.y+a(o)*n),e.lineTo(t.x+r(t.angle)*i,t.y+a(t.angle)*i),e.lineTo(t.x-r(o)*n,t.y-a(o)*n),e.lineTo(l,s)},r}(r);function N(e,t){var r=null==e?"":e+"";return t&&(x(t)?r=t.replace("{value}",r):C(t)&&(r=t(e))),r}var D=function(e){function r(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=r.type,t}return t(r,e),r.prototype.render=function(e,t,r){this.group.removeAll();var a=e.get(["axisLine","lineStyle","color"]),n=function(e,t){var r=e.get("center"),a=t.getWidth(),n=t.getHeight(),o=Math.min(a,n);return{cx:i(r[0],t.getWidth()),cy:i(r[1],t.getHeight()),r:i(e.get("radius"),o/2)}}(e,r);this._renderMain(e,t,r,a,n),this._data=e.getData()},r.prototype.dispose=function(){},r.prototype._renderMain=function(e,t,r,i,n){var o=this.group,l=e.get("clockwise"),s=-e.get("startAngle")/180*Math.PI,c=-e.get("endAngle")/180*Math.PI,g=e.getModel("axisLine"),d=g.get("roundCap")?L:M,h=g.get("show"),u=g.getModel("lineStyle"),p=u.get("width"),f=[s,c];a(f,!l);for(var y=(c=f[1])-(s=f[0]),v=s,m=0;h&&m<i.length;m++){var A=new d({shape:{startAngle:v,endAngle:c=s+y*Math.min(Math.max(i[m][0],0),1),cx:n.cx,cy:n.cy,clockwise:l,r0:n.r-p,r:n.r},silent:!0});A.setStyle({fill:i[m][1]}),A.setStyle(u.getLineStyle(["color","width"])),o.add(A),v=c}var w=function(e){if(e<=0)return i[0][1];var t;for(t=0;t<i.length;t++)if(i[t][0]>=e&&(0===t?0:i[t-1][0])<e)return i[t][1];return i[t-1][1]};this._renderTicks(e,t,r,w,n,s,c,l,p),this._renderTitleAndDetail(e,t,r,w,n),this._renderAnchor(e,n),this._renderPointer(e,t,r,w,n,s,c,l,p)},r.prototype._renderTicks=function(e,t,r,a,c,g,d,h,u){for(var p,f,y=this.group,v=c.cx,m=c.cy,A=c.r,w=+e.get("min"),S=+e.get("max"),x=e.getModel("splitLine"),C=e.getModel("axisTick"),M=e.getModel("axisLabel"),b=e.get("splitNumber"),I=C.get("splitNumber"),E=i(x.get("length"),A),_=i(C.get("length"),A),k=g,F=(d-g)/b,L=F/I,B=x.getModel("lineStyle").getLineStyle(),T=C.getModel("lineStyle").getLineStyle(),j=x.get("distance"),D=0;D<=b;D++){if(p=Math.cos(k),f=Math.sin(k),x.get("show")){var W=new n({shape:{x1:p*(A-(G=j?j+u:u))+v,y1:f*(A-G)+m,x2:p*(A-E-G)+v,y2:f*(A-E-G)+m},style:B,silent:!0});"auto"===B.stroke&&W.setStyle({stroke:a(D/b)}),y.add(W)}if(M.get("show")){var G=M.get("distance")+j,H=N(o(D/b*(S-w)+w),M.get("formatter")),O=a(D/b);y.add(new l({style:s(M,{text:H,x:p*(A-E-G)+v,y:f*(A-E-G)+m,verticalAlign:f<-.8?"top":f>.8?"bottom":"middle",align:p<-.4?"left":p>.4?"right":"center"},{inheritColor:O}),silent:!0}))}if(C.get("show")&&D!==b){G=(G=C.get("distance"))?G+u:u;for(var P=0;P<=I;P++){p=Math.cos(k),f=Math.sin(k);var V=new n({shape:{x1:p*(A-G)+v,y1:f*(A-G)+m,x2:p*(A-_-G)+v,y2:f*(A-_-G)+m},silent:!0,style:T});"auto"===T.stroke&&V.setStyle({stroke:a((D+P/I)/b)}),y.add(V),k+=L}k-=L}else k+=F}},r.prototype._renderPointer=function(e,t,r,a,n,o,l,s,m){var A=this.group,w=this._data,S=this._progressEls,x=[],C=e.get(["pointer","show"]),b=e.getModel("progress"),I=b.get("show"),E=e.getData(),_=E.mapDimension("value"),k=+e.get("min"),F=+e.get("max"),B=[k,F],T=[o,l];function N(t,r){var a,o=E.getItemModel(t).getModel("pointer"),l=i(o.get("width"),n.r),s=i(o.get("length"),n.r),c=e.get(["pointer","icon"]),g=o.get("offsetCenter"),d=i(g[0],n.r),h=i(g[1],n.r),u=o.get("keepAspect");return(a=c?v(c,d-l/2,h-s,l,s,null,u):new j({shape:{angle:-Math.PI/2,width:l,r:s,x:d,y:h}})).rotation=-(r+Math.PI/2),a.x=n.cx,a.y=n.cy,a}function D(e,t){var r=b.get("roundCap")?L:M,a=b.get("overlap"),i=a?b.get("width"):m/E.count(),l=a?n.r-i:n.r-(e+1)*i,c=a?n.r:n.r-e*i,g=new r({shape:{startAngle:o,endAngle:t,cx:n.cx,cy:n.cy,clockwise:s,r0:l,r:c}});return a&&(g.z2=F-E.get(_,e)%F),g}(I||C)&&(E.diff(w).add((function(t){var r=E.get(_,t);if(C){var a=N(t,o);c(a,{rotation:-((isNaN(+r)?T[0]:g(r,B,T,!0))+Math.PI/2)},e),A.add(a),E.setItemGraphicEl(t,a)}if(I){var i=D(t,o),n=b.get("clip");c(i,{shape:{endAngle:g(r,B,T,n)}},e),A.add(i),d(e.seriesIndex,E.dataType,t,i),x[t]=i}})).update((function(t,r){var a=E.get(_,t);if(C){var i=w.getItemGraphicEl(r),n=i?i.rotation:o,l=N(t,n);l.rotation=n,h(l,{rotation:-((isNaN(+a)?T[0]:g(a,B,T,!0))+Math.PI/2)},e),A.add(l),E.setItemGraphicEl(t,l)}if(I){var s=S[r],c=D(t,s?s.shape.endAngle:o),u=b.get("clip");h(c,{shape:{endAngle:g(a,B,T,u)}},e),A.add(c),d(e.seriesIndex,E.dataType,t,c),x[t]=c}})).execute(),E.each((function(e){var t=E.getItemModel(e),r=t.getModel("emphasis"),i=r.get("focus"),n=r.get("blurScope"),o=r.get("disabled");if(C){var l=E.getItemGraphicEl(e),s=E.getItemVisual(e,"style"),c=s.fill;if(l instanceof u){var d=l.style;l.useStyle(p({image:d.image,x:d.x,y:d.y,width:d.width,height:d.height},s))}else l.useStyle(s),"pointer"!==l.type&&l.setColor(c);l.setStyle(t.getModel(["pointer","itemStyle"]).getItemStyle()),"auto"===l.style.fill&&l.setStyle("fill",a(g(E.get(_,e),B,[0,1],!0))),l.z2EmphasisLift=0,f(l,t),y(l,i,n,o)}if(I){var h=x[e];h.useStyle(E.getItemVisual(e,"style")),h.setStyle(t.getModel(["progress","itemStyle"]).getItemStyle()),h.z2EmphasisLift=0,f(h,t),y(h,i,n,o)}})),this._progressEls=x)},r.prototype._renderAnchor=function(e,t){var r=e.getModel("anchor");if(r.get("show")){var a=r.get("size"),n=r.get("icon"),o=r.get("offsetCenter"),l=r.get("keepAspect"),s=v(n,t.cx-a/2+i(o[0],t.r),t.cy-a/2+i(o[1],t.r),a,a,null,l);s.z2=r.get("showAbove")?1:0,s.setStyle(r.getModel("itemStyle").getItemStyle()),this.group.add(s)}},r.prototype._renderTitleAndDetail=function(e,t,r,a,n){var o=this,c=e.getData(),d=c.mapDimension("value"),h=+e.get("min"),u=+e.get("max"),p=new m,f=[],y=[],v=e.isAnimationEnabled(),S=e.get(["pointer","showAbove"]);c.diff(this._data).add((function(e){f[e]=new l({silent:!0}),y[e]=new l({silent:!0})})).update((function(e,t){f[e]=o._titleEls[t],y[e]=o._detailEls[t]})).execute(),c.each((function(t){var r=c.getItemModel(t),o=c.get(d,t),l=new m,x=a(g(o,[h,u],[0,1],!0)),C=r.getModel("title");if(C.get("show")){var M=C.get("offsetCenter"),b=n.cx+i(M[0],n.r),I=n.cy+i(M[1],n.r);(j=f[t]).attr({z2:S?0:2,style:s(C,{x:b,y:I,text:c.getName(t),align:"center",verticalAlign:"middle"},{inheritColor:x})}),l.add(j)}var E=r.getModel("detail");if(E.get("show")){var _=E.get("offsetCenter"),k=n.cx+i(_[0],n.r),F=n.cy+i(_[1],n.r),L=i(E.get("width"),n.r),B=i(E.get("height"),n.r),T=e.get(["progress","show"])?c.getItemVisual(t,"style").fill:x,j=y[t],D=E.get("formatter");j.attr({z2:S?0:2,style:s(E,{x:k,y:F,text:N(o,D),width:isNaN(L)?null:L,height:isNaN(B)?null:B,align:"center",verticalAlign:"middle"},{inheritColor:T})}),A(j,{normal:E},o,(function(e){return N(e,D)})),v&&w(j,t,c,e,{getFormattedLabel:function(e,t,r,a,i,n){return N(n?n.interpolatedValue:o,D)}}),l.add(j)}p.add(l)})),this.group.add(p),this._titleEls=f,this._detailEls=y},r.type="gauge",r}(S),W=D,G=function(e){function r(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=r.type,t.visualStyleAccessPath="itemStyle",t}return t(r,e),r.prototype.getInitialData=function(e,t){return B(this,["value"])},r.type="series.gauge",r.defaultOption={z:2,colorBy:"data",center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,roundCap:!1,lineStyle:{color:[[1,"#E6EBF8"]],width:10}},progress:{show:!1,overlap:!0,width:10,roundCap:!1,clip:!0},splitLine:{show:!0,length:10,distance:10,lineStyle:{color:"#63677A",width:3,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:6,distance:10,lineStyle:{color:"#63677A",width:1,type:"solid"}},axisLabel:{show:!0,distance:15,color:"#464646",fontSize:12},pointer:{icon:null,offsetCenter:[0,0],show:!0,showAbove:!0,length:"60%",width:6,keepAspect:!1},anchor:{show:!1,showAbove:!1,size:6,icon:"circle",offsetCenter:[0,0],keepAspect:!1,itemStyle:{color:"#fff",borderWidth:0,borderColor:"#5470c6"}},title:{show:!0,offsetCenter:[0,"20%"],color:"#464646",fontSize:16,valueAnimation:!1},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"#464646",fontSize:30,fontWeight:"bold",lineHeight:30,valueAnimation:!1}},r}(b),H=G;var O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chartwarp",style:e.dialBackground?"background:url("+e.dialBackground+") no-repeat center;background-size:auto 100%":""},[r("div",{staticClass:"widget-chart-line",attrs:{id:e.domid}})])},P=[];I([function(e){e.registerChartView(W),e.registerSeriesModel(H)},E]);var V={},q=F({name:"ChartGauge",props:{value:{type:Number,require:!0,default:0},angle:{type:Array,require:!1,validator:function(e){return Array.isArray(e)&&2==e.length},default:function(){return[216,-36]}},range:{type:Array,require:!1,validator:function(e){return Array.isArray(e)&&2==e.length},default:function(){return[0,100]}},pointerStyle:{type:String,require:!1,default:function(){return _[0]}},pointerLength:{type:[String,Number],require:!1,default:"70%"},dialBackground:{type:String,require:!1,default:null},options:{type:Object,require:!1,default:function(){return{}}}},data:function(){return{colors:_,domid:"domid-".concat(parseInt(1e8*Math.random())),gaugeData:null,chartObj:null}},watch:{value:{handler:function(){this.render()}}},methods:{render:function(){var e={show:!this.dialBackground},t="",r="";/^image:\/\//.test(this.pointerStyle)?t=this.pointerStyle:r=this.pointerStyle;var a=Object.assign(this.options,{type:"gauge",startAngle:this.angle[0],endAngle:this.angle[1],min:this.range[0],max:this.range[1],pointer:{icon:t,length:this.pointerLength,itemStyle:{color:r}},axisLine:e,axisTick:e,splitLine:e,axisLabel:e,data:[{value:this.value,detail:{show:!1}}]});this.chartObj.setOption({series:[a]})}},mounted:function(){var e=this;this.chartObj&&this.chartObj.dispose(),this.$nextTick((function(){e.chartObj=k(document.getElementById(e.domid)),e.render()})),window.addEventListener("resize",(function(){e.chartObj&&e.chartObj.resize()}))}},O,P,!1,z,"94dd2154",null,null);function z(e){for(var t in V)this[t]=V[t]}var X=function(){return q.exports}(),Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"example"},[r("h2",[e._v("简介")]),r("p",[e._v("基于Echart封装的仪表盘组件")]),r("h2",[e._v("示例")]),r("p",[e._v("value(Number，必传)：仪表盘数值")]),r("p",[e._v("range(Array)：仪表盘数值范围，默认值：[ 0,100 ]")]),r("div",{staticClass:"demo"},[r("chart-gauge",{attrs:{value:30}})],1),e._m(0),r("h2",[e._v("配置")]),r("h3",[e._v("起止角度")]),r("p",[e._v(" angle(Array)：起止角度（ 默认值：[ 216 ,-36 ] ），示例：[ 180 ,0 ]，（ 注：以中心点左侧为180，右侧为0 ，上方为90° ） ")]),r("div",{staticClass:"demo"},[r("chart-gauge",{attrs:{value:30,angle:[180,0]}})],1),e._m(1),r("h3",[e._v("自定义指针")]),r("p",[e._v("pointerStyle(String)：指针样式。")]),e._m(2),r("p",[e._v("2、接收色值。例如：'#1ACCFF'、'rgba(0,0,0,1)'、'red'")]),r("p",[e._v(" pointerLength(String/Number)：指针长度，可以是绝对数值，也可以是相对于半径的半分比，默认值 '70%' ")]),r("div",{staticClass:"demo"},[r("chart-gauge",{attrs:{value:e.data,pointerStyle:"red",pointerLength:"50%"}})],1),e._m(3),r("h3",[e._v("自定义表盘")]),r("p",[e._v(" dialBackground(String)：自定义表盘背景（注：若使用自定义表盘，除指针外，表盘刻度、表盘轴线等将不显示，以自定义表盘为准） ")]),r("div",{staticClass:"demo"},[r("chart-gauge",{attrs:{dialBackground:e.dialBackground,value:e.data,pointerStyle:"red"}})],1),e._m(4)])},U=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{staticClass:"code"},[e._v("          "),r("textarea",{attrs:{readonly:""}},[e._v('              <chart-gauge :value="30" />\n          ')]),e._v("\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{staticClass:"code"},[e._v("          "),r("textarea",{attrs:{readonly:""}},[e._v('              <chart-gauge :value="30" :angle="[180, 0]" />\n          ')]),e._v("\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" 1、接收以'image://'开头的 url 或 dataUrl。例如：'image://http://baidu.png'。 "),r("a",{staticStyle:{color:"#257ff7"},attrs:{target:"_blank",href:"https://echarts.apache.org/zh/option.html#series-gauge.pointer.icon"}},[e._v("详情")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{staticClass:"code"},[e._v("          "),r("textarea",{attrs:{readonly:""}},[e._v('              <chart-gauge :value="data" pointerStyle="red" pointerLength="50%" />\n          ')]),e._v("\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{staticClass:"code"},[e._v("          "),r("textarea",{attrs:{readonly:""}},[e._v('              <chart-gauge :dialBackground="dialBackground" :value="data" pointerStyle="red" />\n          ')]),e._v("\n      ")])}],J={},R=F({components:{ChartGauge:X},data:function(){return{dialBackground:"/cutting-mat-admin/assets/pointer.52e31a15.png",pointer:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFfElEQVR4XuWbaYwURRiG37d3V5aooIREUURgejDERFAJuNs1XBo88Uq4IkSz8SASvFHiiVdEjGcUAwkSjURdNRoPjBcrTPciAWJQQ2SnGgERJcbbGMKy85mZnZmM6+52zw5TE2fqb3019T3PdHVXVVcTZSxRT8aK4EqteHO50mC5Ok71G3FlFoClvuKIcuVRVgFRT24QwdPSgWH+JH5XDgllFWB7shSCO2DhPN3ID6tRQDMEM0RwnR/jyuoT4MoWAGeSeDjh8O7qExCXX0EcA+BlrTivqgQMbZVB9Un8nIYmNmiHk6pKwEhXxlnA5gz0bq04vKoE2K7MBPBa5goQ7dCqLgFxWQzikSx0UnDyzhj3mJZQtnmA7clKCK7JAluCWFuMbvUIcOVTAFPzgOdqxTVVIyDiyrcE8m98d2rF3JAwJaI8Q2CJWPY56MiHFGCFrzjfFHi2n7IIiLSKzSQSXWA/0IoXVIUA25NpEHRd/GzXiqdWhYCoK/MFeL4L7F9a8ehqEbBMgEVdYWvrMPibCeycHhsq5bkHuPImgcv/w2jhDN3ILwyxZyahJnvL9GW7koIc27VrSeIyfyLfNplSWa4A25XfAQzoCkrixoTDZypawKgWGZysw0/dQgqe0DHeWtkCWmV8MolN3UISb2iHMypaQMST2RS80h0kgc0JxfGVLSAud5F4qIcrYL92eHxFC7A9WQVBU0+Qh9rRf9cUHjAlwfhTwHalBcDkngCTdThl5wS2VbKA3QCG9QRIYFpC8eOKFDC5RWr31qE9AO5qrbiqIgWM3CSjrHbs6A1OgAd9xXsrUkDElfMJrO0NjsCLCcWrKlKAHZcFIJ4NgPtMK06pVAGPg7glAG6nVoxUpgBP3oLg0gC4Dq1YW5ECoq5sE+C0IDjLwtC2Rn4fFHc46o1OhGxX/gRwVFDiYsHxG9kaFHc46o0JGPGJHFdTjx/DJC3EHN/hq2Fii40xJsD2pAGCcP+qYLGO8dFi4cK0NyfAlStSByHCJAViuXa4IFRskUHGBERduUeAB8LkK8D7vuJFYWKLjTEmIOLKagLhZnjEV9ph4NOiWPhUe2MCbE/WQzAxZNJ/aMWBIWOLCjMnwJW9AE4Mm+2hI3HsrtP5W9j4vsYZEWCvlX4YgIJ2eSzB2LYYt/UVLGw7IwKi62W01GB72KTScTW4WDfw3YLa9CHYjABPLhTBe4XkJ8BCXzFo5VjIT3Yba0RAxJOFFBT0xofAYwnF24smDPgBIwJsV54EcFOBMM1aMXWcvqTFjIC4vANieoEkn2vFhgLbFBxuRoArXwMo6PSHAD/4iicUTFRgA1MC/gbQP5cb8XpSsIzEno6DOFhTg8kgZpKYk5//wHocsXUcg3aRC0T+d3jJBYzeIEPaLezLdSu4X8e4pLusI67clrr5ZevEQtRvpC6KsNw3wcgGSZ0Czp4AfSroA6lIXK4lsSKVtxBn+w7X/a8F2J7Mg+Cl9NymFmN2nMUvg4CyO0ckmhIOVwfFF1Nf8iFgx2UJiPsA7Ncq3Jtf25XUGUIbvQyXYqDz25ZegCfXQ/AcgI1asTFM4rkXqMQC7XB5mDZ9jSm5gNyBCMFeHeNJQYkOb5H62jqkVoH9TOwNllxA/qlQWpieaGSvawI7LjNANKdFEedqhx8FSSumvuQCUsnZcXFBOAD2acUe9wRGb5Eh7Qcyj0yBp2NUxcCFaWtEQGS9zGIN0tvcIkg9BZr8GLfmJ5j5jjh3SFI6MNufxM5PakpYjAhIXwWupHaEUzvD2bKVQGsSqCMwBMAleXVrtOLcEnLnftqYgMxQaALTM71BPcD9AsEiHeMLJuA7bzOGy6i4jEkSU0E0IInO1Z6FjRBstATrTGyD5SP/A8lPxlDfBO0hAAAAAElFTkSuQmCC",data:0,colorList:["#FAD961","#F76B1C"]}},methods:{},created:function(){var e=this;setTimeout((function(){e.data=50}),3e3)}},Q,U,!1,K,"4fe1a37b",null,null);function K(e){for(var t in J)this[t]=J[t]}e("default",function(){return R.exports}())}}}))}();
