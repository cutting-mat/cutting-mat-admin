(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c7b446a"],{1660:function(t,n,a){"use strict";a("c1a5")},9865:function(t,n,a){"use strict";a.d(n,"e",(function(){return i})),a.d(n,"a",(function(){return r})),a.d(n,"f",(function(){return u})),a.d(n,"c",(function(){return o})),a.d(n,"g",(function(){return s})),a.d(n,"b",(function(){return l})),a.d(n,"d",(function(){return c}));var e=a("c7b2"),i=function(t){return e["a"].get("/password/valid",{params:t})},r=function(t){return e["a"].get("/captcha/image",{params:t})},u=function(t){return e["a"].get("/captcha/image/validate",{params:t})},o=function(t){return e["a"].get("/captcha/sms",{params:t})},s=function(t){return e["a"].get("/captcha/sms/validate",{params:t})},l=function(t){return e["a"].get("/emailValidCode",{params:t})},c=function(t){return e["a"].get("/emailValidCode/valid",{params:t})}},c1a5:function(t,n,a){},dfc0:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("el-form",{ref:"form",staticClass:"auth_email",attrs:{model:t.formData,rules:t.rules,"label-position":"left","v-loading":t.loading}},[a("el-form-item",[t._v("安全邮箱："+t._s(t.anonymousEmail))]),a("el-form-item",{attrs:{prop:"inputEmail"}},[a("el-input",{attrs:{placeholder:"请输入安全邮箱","prefix-icon":"el-icon-message"},model:{value:t.formData.inputEmail,callback:function(n){t.$set(t.formData,"inputEmail",n)},expression:"formData.inputEmail"}})],1),a("el-form-item",{attrs:{prop:"userInput"}},[a("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:t.formData.userInput,callback:function(n){t.$set(t.formData,"userInput",n)},expression:"formData.userInput"}},[a("countdownButton",{ref:"countdownButton",attrs:{slot:"append",number:30},on:{click:t.sendValidCode},slot:"append"},[t._v("获取验证码")])],1)],1),a("el-form-item",[a("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"button",type:"primary"},on:{click:t.handleSubmit}},[t._v("立即验证")])],1)],1)},i=[],r=a("9865"),u={data:function(){var t=this,n=function(n,a,e){a?(t.userEmail!==a&&e(new Error("邮箱不正确")),e()):e(new Error("请输入安全邮箱"))};return{loading:!1,formData:{id:null,userInput:null,inputEmail:null},rules:{inputEmail:[{validator:n}],userInput:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:4,max:6,message:"请输入正确的验证码",trigger:"blur"}]}}},computed:{userEmail:function(){return this.$store.state.user.email},anonymousEmail:function(){if(this.userEmail){var t=this.userEmail.split("@")[0].split(""),n=t.map((function(n,a){return 0===a||a===t.length-1?n:"*"})).join("");return"".concat(n,"@").concat(this.userEmail.split("@")[1])}return""}},methods:{sendValidCode:function(){var t=this;this.$refs.form.validateField("inputEmail",(function(n){n||(t.loading=!0,Object(r["b"])({email:t.formData.inputEmail}).then((function(n){t.loading=!1,n.data.id?(t.formData.id=n.data.id,t.$refs.countdownButton.count()):t.$message.warning("验证邮件发送失败，请稍后重试")})).catch((function(){t.loading=!1})))}))},handleSubmit:function(){var t=this;this.$refs.form.validateField("userInput",(function(n){n||(t.loading=!0,Object(r["d"])(t.formData).then((function(n){t.loading=!1,n.data?t.$emit("success",n.data):(t.$refs.form.resetFields(),t.$message.warning("验证失败"))})).catch((function(){t.loading=!1})))}))}}},o=u,s=(a("1660"),a("2877")),l=Object(s["a"])(o,e,i,!1,null,"45a802f6",null);n["default"]=l.exports}}]);