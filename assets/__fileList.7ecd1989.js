import{w as u,n as p}from"./index.833c2dcf.js";import"./ui.9b8b7178.js";const r={img:{type:["png","jpg","jpeg"],album:"./img/img.png"},word:{type:["doc","docx"],album:"./img/word.png"},excel:{type:["xls","xlsx"],album:"./img/excel.png"},ppt:{type:["ppt","pptx"],album:"./img/ppt.png"},pdf:{type:["pdf"],album:"./img/pdf.png"},video:{type:["mp4","wmv","mov"],album:"./img/video.png"},txt:{type:["txt"],album:"./img/txt.png"},rar:{type:["rar","zip"],album:"./img/rar.png"},default:{type:[],album:"./img/other.png"}},f=(e,i)=>{let t=r.default.album;if(!e)return console.warn("dynamicAlbum()\u53C2\u6570\u5F02\u5E38\uFF1A",e,i),t;let l=u(e);const a=Object.keys(r).findIndex(n=>r[n].type.findIndex(o=>o===l)!==-1);if(a!==-1){let n=Object.keys(r)[a];n==="img"&&i?t=e:t=r[n].album}return t};var c=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ul",{staticClass:"fileList"},e._l(e.list,function(l,a){return t("li",{key:a,staticClass:"_item"},[t("div",{staticClass:"flex-row align-center"},[t("div",{staticClass:"_avatar",on:{click:function(n){return e.onClick(l)}}},[t("img",{attrs:{src:e._f("dynamicAlbum")(l.url,e.previewImgOnThumb)}})]),t("el-link",{staticClass:"flex-1 _title el",attrs:{underline:!1},on:{click:function(n){return e.onClick(l)}}},[e._v(" "+e._s(l.name)+" ")]),e.readonly?e._e():t("i",{staticClass:"_btn el-icon-delete-solid",attrs:{title:"\u5220\u9664"},on:{click:function(n){return e.handleRemove(l,a)}}})],1)])}),0)},d=[];const m={model:{prop:"value",event:"change"},props:{value:{type:Array,required:!1,default:()=>[]},readonly:{type:Boolean,required:!1,default:!1},previewImgOnThumb:{type:Boolean,required:!1,default:!1},onClick:{type:Function,required:!1,default(e){e&&e.url&&window.open(e.url)}},beforeDelete:{type:Function,required:!1,default(e,i){return console.log(`delete item: ${e}, index: ${i}`),!0}}},filters:{dynamicAlbum:f},data(){return{list:[]}},watch:{value:{deep:!0,immediate:!0,handler(){this.list=this.value}}},methods:{handleRemove(e,i){new Promise(l=>{l(this.beforeDelete(e,i))}).then(l=>{l?(this.list.splice(i,1),this.$emit("change",this.list)):console.warn("\u6587\u4EF6\u5217\u8868\u5220\u9664\u9A8C\u8BC1\u5931\u8D25\uFF1A",l)})}}},s={};var v=p(m,c,d,!1,_,"267b1722",null,null);function _(e){for(let i in s)this[i]=s[i]}var y=function(){return v.exports}();export{y as default};
