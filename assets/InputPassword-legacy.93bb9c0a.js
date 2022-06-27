!function(){var e=document.createElement("style");e.innerHTML="",document.head.appendChild(e),System.register(["./index-legacy.dc70cf32.js","./ui-legacy.77070732.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.n},function(){}],execute:function(){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("简介")]),r("p",[e._v("密码输入框，整合密码强度提示")]),r("h2",[e._v("示例")]),r("div",{staticClass:"demo"},[r("el-form",{ref:"editForm",attrs:{"label-width":"100px",rules:e.rules,model:e.editForm}},[r("el-form-item",{attrs:{prop:"password",label:"设置密码"}},[r("InputPassword",{on:{ready:function(t){return e.rules.password=t}},model:{value:e.editForm.password,callback:function(t){e.$set(e.editForm,"password",t)},expression:"editForm.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)],1),e._m(0),r("h2",[e._v("配置")]),r("p",[e._v('支持"el-input"的所有属性，额外支持以下配置或默认值')]),r("el-table",{attrs:{data:e.props}},[r("el-table-column",{attrs:{prop:"name",label:"属性"}}),r("el-table-column",{attrs:{prop:"desc",label:"说明"}}),r("el-table-column",{attrs:{prop:"type",label:"类型"}}),r("el-table-column",{attrs:{prop:"options",label:"可选"}}),r("el-table-column",{attrs:{prop:"default",label:"默认"}})],1),r("h2",[e._v("事件")]),r("el-table",{attrs:{data:e.events}},[r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{prop:"desc",label:"说明"}}),r("el-table-column",{attrs:{prop:"param",label:"参数"}})],1)],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{staticClass:"code"},[e._v("    "),r("textarea",{attrs:{readonly:"",rows:"9"}},[e._v('    <el-form ref="editForm" label-width="100px" :rules="rules" :model="editForm">\n      <el-form-item prop="password" label="设置密码">\n        <InputPassword v-model="editForm.password" @ready="rule => rules.password = rule" />\n      </el-form-item>\n      <el-form-item>\n        <el-button type="primary" @click="handleSubmit">提交</el-button>\n      </el-form-item>\n    </el-form>\n    ')]),e._v("\n  ")])}],a={},l=t({data:function(){return{editForm:{password:null},rules:{},props:[{name:"required",desc:"必填，参与校验",type:"Boolean",options:"-",default:"true"},{name:"placeholder",desc:"输入框占位文字",type:"String",options:"-",default:"请输入密码"},{name:"minlength",desc:"最小输入长度，参与校验",type:"Number",options:"-",default:"6"},{name:"maxlength",desc:"最大输入长度，参与校验",type:"Number",options:"-",default:"16"},{name:"showPassword",desc:"是否显示切换密码图标",type:"Boolean",options:"",default:"true"},{name:"minScore",desc:"能通过验证的最低密码强度得分",type:"Number",options:"-",default:"25"},{name:"format",desc:"根据密码强度得分，返回强度判定文字。参数：score[Number]；返回：强度判定[String]",type:"Function",options:"-",default:'default(percentage) {\n          if (percentage >= 0 && percentage < 25) {\n            return "弱";\n          } else if (percentage >= 25 && percentage < 50) {\n            return "中";\n          } else if (percentage >= 50 && percentage < 75) {\n            return "强";\n          } else {\n            return "很强";\n          }\n        }'},{name:"color",desc:"根据密码强度得分，定制各得分区间的主题色",type:"Array",options:"-",default:"[\n          '#F56C6C',\n          '#E6A23C',\n          '#9fcc8a',\n          '#67c23a'\n        ]"}],events:[{name:"change",desc:"仅在输入框失去焦点或用户按下回车时触发",param:"value[String]"},{name:"verify",desc:"仅在输入框失去焦点或用户按下回车时触发",param:"score[Number]"},{name:"ready",desc:"组件就绪回调，参数接收根据validType生成的验证规则，可直接用于el-form验证",param:"rule[Array]"}]}},methods:{handleSubmit:function(){var e=this;this.$refs.editForm.validate((function(t){t&&e.$message.success("验证通过")}))}},created:function(){}},r,n,!1,o,"446ec41e",null,null);function o(e){for(var t in a)this[t]=a[t]}e("default",function(){return l.exports}())}}}))}();
