import{n as m,M as d,d as f}from"./index.833c2dcf.js";import"./ui.9b8b7178.js";var h=function(){var e=this,s=e.$createElement,n=e._self._c||s;return e.showMenu?n("div",{staticClass:"custom-menu scrollbar"},[n("el-menu",{attrs:{"default-active":e.activeIndex,router:"","unique-opened":""}},[e._l(e.list,function(t,a){return[t.children&&t.children.length?n("el-submenu",{key:"nav"+a,attrs:{route:t,index:t.name}},[n("div",{staticClass:"first flex-row align-center",attrs:{slot:"title"},slot:"title"},[n("i",{class:["ico",t.meta&&t.meta.icon||"el-icon-s-order"]}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.meta&&t.meta.title||t.name)+" ")])]),e._l(t.children,function(i,l){return[i.children&&i.children.length?[n("el-menu-item",{key:"child"+l,staticClass:"second",attrs:{route:i,index:i.name}},[n("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(i.meta&&i.meta.title||i.name)+" ")])]),e._l(i.children,function(r,u){return n("el-menu-item",{key:"grandson"+u,staticClass:"third",attrs:{route:r,index:r.name}},[n("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(r.meta&&r.meta.title||r.name)+" ")])])})]:n("el-menu-item",{key:"child2"+l,staticClass:"second",attrs:{route:i,index:i.name}},[n("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(i.meta&&i.meta.title||i.name)+" ")])])]})],2):n("el-menu-item",{key:"nav"+a,staticClass:"flex-row align-center one",attrs:{route:t,index:t.name}},[n("i",{class:["ico",t.meta&&t.meta.icon||"el-icon-s-order"]}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.meta&&t.meta.title||t.name)+" ")])])]})],2)],1):e._e()},p=[];let o=function(e,s){return e.filter(t=>!t.meta||!t.meta.hide).map(t=>{const a=f(t);let i=a.path.indexOf("/")===0?a.path:[s,a.path].join(s==="/"?"":"/");return a.fullPath=i,a.meta||(a.meta={}),Array.isArray(a.children)&&(a.children=o(a.children,i)),a})};const v={props:{subMenu:{type:Boolean,required:!1,default:!1}},data(){return{state:this.$store.state,list:[],showMenu:!0}},computed:{menu:function(){return[{name:"\u6570\u636E\u53EF\u89C6\u5316",meta:{icon:"el-icon-s-platform"}},...this.$AccessControl?this.state.DynamicRoute[0].children:o(d[0].children)]},activeIndex(){return this.$route.meta&&this.$route.meta.belong?this.$route.meta.belong:this.$route.name}},watch:{$route:{handler(e){if(!this.subMenu)return null;let s=-1;if(Array.isArray(this.list)&&(s=this.list.findIndex(n=>e.path.indexOf(n.fullPath)===0)),s===-1){let n=this.menu.slice(),t;for(let a=0;a<n.length;a++)if(this.$route.path.indexOf(n[a].path)===0&&n[a].children){t=n[a].children;break}this.list=t,this.showMenu=!1,this.$nextTick(()=>{this.showMenu=!0})}},immediate:!0}},created(){this.subMenu||(this.list=this.menu)}},c={};var _=m(v,h,p,!1,x,"520c9fdc",null,null);function x(e){for(let s in c)this[s]=c[s]}var y=function(){return _.exports}();export{y as default};
