System.register(["./index-legacy.3a0a0cf0.js","./ui-legacy.ce9474e5.js"],(function(t){"use strict";var e,n,a;return{setters:[function(t){e=t.n,n=t.p,a=t.q},function(){}],execute:function(){var i=function(){var t=this,e=t._self._c;return e("el-form",{ref:"form",staticClass:"auth_email",attrs:{model:t.formData,rules:t.rules,"label-position":"left","v-loading":t.loading},nativeOn:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t.anonymousEmail?e("el-form-item",[t._v("安全邮箱："+t._s(t.anonymousEmail))]):t._e(),e("el-form-item",{attrs:{prop:"inputEmail"}},[e("el-input",{attrs:{placeholder:"请输入安全邮箱","prefix-icon":"el-icon-message"},model:{value:t.formData.inputEmail,callback:function(e){t.$set(t.formData,"inputEmail",e)},expression:"formData.inputEmail"}})],1),e("el-form-item",{attrs:{prop:"userInput"}},[e("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:t.formData.userInput,callback:function(e){t.$set(t.formData,"userInput",e)},expression:"formData.userInput"}},[e("template",{slot:"append"},[e("el-button",{attrs:{disabled:t.buttonDisabled},on:{click:t.sendValidCode}},[e("CountDown",{ref:"countdownButton",attrs:{count:30},on:{start:function(e){t.buttonDisabled=!0},end:function(e){t.buttonDisabled=!1}}},[t._v(" 获取验证码 ")])],1)],1)],2)],1),e("el-form-item",[e("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"submit",type:"primary"}},[t._v(" 立即验证 ")])],1)],1)};t("default",e({data:function(){var t=this;return{loading:!1,formData:{id:null,userInput:null,inputEmail:null},rules:{inputEmail:[{validator:function(e,n,a){if(n){if(t.userEmail&&t.userEmail!==n)return a(new Error("邮箱不正确"));a()}else a(new Error("请输入安全邮箱"))},trigger:[]}],userInput:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:4,max:6,message:"请输入正确的验证码",trigger:"blur"}]},buttonDisabled:!1}},computed:{userEmail:function(){return this.$store.user.email||""},anonymousEmail:function(){if(this.userEmail){var t=this.userEmail.split("@")[0].split(""),e=t.map((function(e,n){return 0===n||n===t.length-1?e:"*"})).join("");return"".concat(e,"@").concat(this.userEmail.split("@")[1])}return""}},methods:{sendValidCode:function(){var t=this;this.$refs.form.validateField("inputEmail",(function(e){e||(t.loading=!0,n({email:t.formData.inputEmail}).then((function(e){t.loading=!1,200===e.status?(t.formData.id=e.data.id,t.$refs.countdownButton.start()):t.$message.warning("验证邮件发送失败，请稍后重试")})).catch((function(){t.loading=!1})))}))},handleSubmit:function(){var t=this;this.$refs.form.validateField("userInput",(function(e){e||(t.loading=!0,a(t.formData).then((function(e){t.loading=!1,200===e.status?t.$emit("success",e.data):(t.$refs.form.resetFields(),t.$message.warning("验证失败"))})).catch((function(){t.loading=!1})))}))}}},i,[],!1,null,"b3ba98bb",null,null).exports)}}}));
