import{n as s}from"./index.833c2dcf.js";import"./ui.9b8b7178.js";var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"flex-col"},[a("div",{staticClass:"flex-1 flex-row"},[a("div",{staticClass:"left"},[a("animated-group",{staticClass:"group flex-col",attrs:{enterClass:"animate__fadeInLeft",leaveClass:"animate__fadeOutLeft"},model:{value:t.groupVisible,callback:function(e){t.groupVisible=e},expression:"groupVisible"}},[a("animated",{staticClass:"flex-1 visual-block"},[t._v(" left 1 ")]),a("animated",{staticClass:"flex-1 visual-block"},[t._v(" left 2 ")]),a("animated",{staticClass:"flex-1 visual-block"},[t._v(" left 3 ")])],1)],1),a("div",{staticClass:"flex-1 center"},[a("el-button",{on:{click:function(e){t.groupVisible=!t.groupVisible}}},[t._v(" \u8FDB\u573A/\u9000\u573A ")]),a("el-button",{on:{click:function(e){t.windowVisible=!t.windowVisible}}},[t._v(" \u5F39\u7A97\u6253\u5F00/\u5173\u95ED ")]),a("animated",{staticClass:"zoom-box",attrs:{enterClass:"animate__zoomIn",leaveClass:"animate__zoomOut"},model:{value:t.windowVisible,callback:function(e){t.windowVisible=e},expression:"windowVisible"}},[t._v(" window ")])],1),a("div",{staticClass:"right"},[a("animated-group",{staticClass:"group flex-col",attrs:{enterClass:"animate__fadeInRight",leaveClass:"animate__fadeOutRight"},model:{value:t.groupVisible,callback:function(e){t.groupVisible=e},expression:"groupVisible"}},[a("animated",{staticClass:"flex-1 visual-block"},[t._v(" right 1 ")]),a("animated",{staticClass:"flex-1 visual-block"},[t._v(" right 2 ")]),a("animated",{staticClass:"flex-1 visual-block"},[t._v(" right 3 ")])],1)],1)])])},n=[];const r={data(){return{groupVisible:!0,windowVisible:!1}},methods:{callEnter(){this.$AnimatedGroup.enter("group1").then(t=>{console.log("callEnter then:",t)}).catch(t=>{console.warn(t)})}},created(){}},l={};var c=s(r,o,n,!1,f,"26f367af",null,null);function f(t){for(let i in l)this[i]=l[i]}var v=function(){return c.exports}();export{v as default};
