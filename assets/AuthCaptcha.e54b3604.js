import{n as s}from"./index.833c2dcf.js";import"./ui.9b8b7178.js";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-form",{ref:"form",staticClass:"auth_image",attrs:{model:t.formData,rules:t.rules,"label-position":"left","v-loading":t.loading},nativeOn:{submit:function(r){return r.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("el-form-item",{attrs:{prop:"captcha"}},[e("InputCaptchaImage",{ref:"validCode"})],1),e("el-form-item",[e("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"submit",type:"primary"}},[t._v(" \u7ACB\u5373\u9A8C\u8BC1 ")])],1)],1)},l=[];const o={data(){return{formData:{},rules:{captcha:[{validator:()=>new Promise((a,e)=>{this.$refs.InputSMS.valid().then(r=>{this.resData=r,a()}).catch(r=>{e(r)})}),trigger:[]}]},resData:null}},methods:{handleSubmit(){this.$refs.form.validate(t=>{t&&this.$emit("success",this.resData)})}}},n={};var u=s(o,i,l,!1,c,"59240013",null,null);function c(t){for(let a in n)this[a]=n[a]}var p=function(){return u.exports}();export{p as default};
