!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}r.wrap=s;var d={};function p(){}function h(){}function m(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==n&&o.call(g,i)&&(v=g);var b=m.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(a,i,c,l){var u=f(e[a],e,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):r.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,l)}))}l(u.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=m,u(b,"constructor",m),u(m,"constructor",h),h.displayName=u(m,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,c,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new x(s(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),u(b,l,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;D(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}var n=document.createElement("style");n.innerHTML=".registerPage[data-v-e86ee190]{background:url(/cutting-mat-admin/assets/b.af6c9463.jpg) center no-repeat;background-size:cover}.register-box[data-v-e86ee190]{width:600px;background:#ffffff;box-shadow:0 1px 4px #a3a3a3;border-radius:6px;padding:50px 100px;box-sizing:border-box}.title[data-v-e86ee190]{font-size:24px;font-weight:600;color:#94070a;line-height:24px;letter-spacing:1px;margin-bottom:20px;text-align:center}.submit-button[data-v-e86ee190]{width:100%;font-size:18px}\n",document.head.appendChild(n),System.register(["./index-legacy.dc70cf32.js","./ui-legacy.77070732.js"],(function(t){"use strict";var n,o;return{setters:[function(t){n=t.n,o=t.r},function(){}],execute:function(){var a=function(t){return/^(?:(?:\+|00)86)?1\d{10}$/.test(String(t))},i=function(t){return/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(String(t))},c=function(t){return/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(String(t))},l=function(t){return/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(String(t))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.value;return"function"==typeof e&&(e=e()),t.label||(t.label={mobile:"手机号",idCard:"身份证号",tel:"电话",email:"邮箱"}[t.validType]||""),new Promise((function(r,n){if(null==e||!e.length)return t.required?n("请输入".concat(t.label)):r();switch(t.validType){case"mobile":a(e)?r():n("".concat(t.label,"格式有误，请重新输入"));break;case"idCard":i(e)?r():n("".concat(t.label,"格式有误，请重新输入"));break;case"tel":c(e)?r():n("".concat(t.label,"格式有误，请重新输入"));break;case"email":l(e)?r():n("".concat(t.label,"格式有误，请重新输入"));break;default:n("不支持的validType: ".concat(t.validType))}}))},s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-row align-center justify-center registerPage"},[r("div",{staticClass:"register-box"},[r("div",{staticClass:"title"},[t._v("注册账号")]),r("el-form",{ref:"validForm",attrs:{model:t.formData,rules:t.rules,"label-width":"100px","hide-required-asterisk":"",size:"medium"},nativeOn:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[r("el-form-item",{attrs:{prop:"mobile",required:"",label:"手机号："}},[r("el-input",{model:{value:t.formData.mobile,callback:function(e){t.$set(t.formData,"mobile",e)},expression:"formData.mobile"}})],1),r("el-form-item",{attrs:{prop:"userInput",label:"验证码："}},[r("InputSMS",{ref:"InputSMS",attrs:{type:"register",mobile:t.formData.mobile},on:{click:t.sendValidCode}})],1),r("el-form-item",{attrs:{prop:"name",label:"姓名："}},[r("el-input",{model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name","string"==typeof e?e.trim():e)},expression:"formData.name"}})],1),r("el-form-item",{attrs:{prop:"company",label:"工作单位："}},[r("el-input",{model:{value:t.formData.company,callback:function(e){t.$set(t.formData,"company","string"==typeof e?e.trim():e)},expression:"formData.company"}})],1),r("el-form-item",{attrs:{prop:"password",label:"设置密码："}},[r("InputPassword",{attrs:{autocomplete:"off"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),r("el-form-item",{attrs:{prop:"checkPass",label:"重复密码："}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.formData.checkPass,callback:function(e){t.$set(t.formData,"checkPass",e)},expression:"formData.checkPass"}})],1),r("el-form-item",{staticClass:"submit-item"},[r("el-button",{staticClass:"submit-button",attrs:{"native-type":"submit",type:"primary",loading:t.loading}},[t._v("确 认")])],1)],1),r("div",{staticClass:"flex-row"},[r("div",{staticClass:"flex-1"}),t._v(" 已有账号？"),r("el-link",{staticClass:"first",attrs:{type:"danger"},on:{click:function(e){return t.$router.push({name:"登录"})}}},[t._v(" 点击登录 ")])],1)],1),r("auth",{ref:"auth",attrs:{types:["captcha"]}})],1)},f=[],d={data:function(){var t=this;return{loading:!1,formData:{mobile:null,token:null,name:null,company:null,password:null,checkPass:null,userInput:null},rules:{mobile:[{validator:function(){return u({required:!0,validType:"mobile",value:function(){var e;return null===(e=t.formData)||void 0===e?void 0:e.mobile}})},trigger:[]}],userInput:[{validator:function(){return new Promise((function(e,r){t.$refs.InputSMS.valid().then((function(r){t.resData=r,e()})).catch((function(t){r(t)}))}))},trigger:[]}],name:[{required:!0,message:"请输入姓名",trigger:"change"}],company:[{required:!0,message:"请输入工作单位",trigger:"change"}],password:[{validator:function(e,r,n){""===r?n(new Error("请输入密码")):(""!==t.formData.checkPass&&t.$refs.validForm.validateField("checkPass"),n())},trigger:"blur"},{min:6,max:30,message:"长度在 6 到 30 个字符",trigger:"blur"}],checkPass:[{validator:function(e,r,n){""===r?n(new Error("请再次输入密码")):r!==t.formData.password?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}]},resData:null}},methods:{sendValidCode:function(){var t=this;this.$refs.validForm.validateField("mobile",(function(e){e||t.$refs.InputSMS.send()}))},register:function(){var t=this;if(this.loading)return null;this.loading=!0,this.$refs.validForm.validate(function(){var n,a=(n=e().mark((function r(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n?(t.formData.token=t.resData,o(t.formData).then((function(e){t.loading=!1,200===e.status?t.$alert("注册成功,请登录","注册成功",{confirmButtonText:"确定",callback:function(){t.$router.replace({name:"登录"})}}):t.$message.error(e.data.message)})).catch((function(){t.loading=!1}))):t.loading=!1;case 1:case"end":return e.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(o,a){var i=n.apply(t,e);function c(t){r(i,o,a,c,l,"next",t)}function l(t){r(i,o,a,c,l,"throw",t)}c(void 0)}))});return function(t){return a.apply(this,arguments)}}())}},created:function(){}},p={},h=n(d,s,f,!1,m,"e86ee190",null,null);function m(t){for(var e in p)this[e]=p[e]}t("default",function(){return h.exports}())}}}))}();
