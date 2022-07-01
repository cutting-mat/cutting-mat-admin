import{n as o}from"./index.208c0d27.js";import"./ui.9b8b7178.js";var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h2",[e._v("\u7B80\u4ECB")]),t("p",[e._v("\u5BC6\u7801\u8F93\u5165\u6846\uFF0C\u6574\u5408\u5BC6\u7801\u5F3A\u5EA6\u63D0\u793A")]),t("h2",[e._v("\u793A\u4F8B")]),t("div",{staticClass:"demo"},[t("el-form",{ref:"editForm",attrs:{"label-width":"100px",rules:e.rules,model:e.editForm}},[t("el-form-item",{attrs:{prop:"password",label:"\u8BBE\u7F6E\u5BC6\u7801"}},[t("InputPassword",{on:{ready:function(a){return e.rules.password=a}},model:{value:e.editForm.password,callback:function(a){e.$set(e.editForm,"password",a)},expression:"editForm.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("\u63D0\u4EA4")])],1)],1)],1),e._m(0),t("h2",[e._v("\u914D\u7F6E")]),t("p",[e._v('\u652F\u6301"el-input"\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u989D\u5916\u652F\u6301\u4EE5\u4E0B\u914D\u7F6E\u6216\u9ED8\u8BA4\u503C')]),t("el-table",{attrs:{data:e.props}},[t("el-table-column",{attrs:{prop:"name",label:"\u5C5E\u6027"}}),t("el-table-column",{attrs:{prop:"desc",label:"\u8BF4\u660E"}}),t("el-table-column",{attrs:{prop:"type",label:"\u7C7B\u578B"}}),t("el-table-column",{attrs:{prop:"options",label:"\u53EF\u9009"}}),t("el-table-column",{attrs:{prop:"default",label:"\u9ED8\u8BA4"}})],1),t("h2",[e._v("\u4E8B\u4EF6")]),t("el-table",{attrs:{data:e.events}},[t("el-table-column",{attrs:{prop:"name",label:"\u540D\u79F0"}}),t("el-table-column",{attrs:{prop:"desc",label:"\u8BF4\u660E"}}),t("el-table-column",{attrs:{prop:"param",label:"\u53C2\u6570"}})],1)],1)},n=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("pre",{staticClass:"code"},[e._v("    "),t("textarea",{attrs:{readonly:"",rows:"9"}},[e._v(`    <el-form ref="editForm" label-width="100px" :rules="rules" :model="editForm">
      <el-form-item prop="password" label="\u8BBE\u7F6E\u5BC6\u7801">
        <InputPassword v-model="editForm.password" @ready="rule => rules.password = rule" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">\u63D0\u4EA4</el-button>
      </el-form-item>
    </el-form>
    `)]),e._v(`
  `)])}];const p={data(){return{editForm:{password:null},rules:{},props:[{name:"required",desc:"\u5FC5\u586B\uFF0C\u53C2\u4E0E\u6821\u9A8C",type:"Boolean",options:"-",default:"true"},{name:"placeholder",desc:"\u8F93\u5165\u6846\u5360\u4F4D\u6587\u5B57",type:"String",options:"-",default:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{name:"minlength",desc:"\u6700\u5C0F\u8F93\u5165\u957F\u5EA6\uFF0C\u53C2\u4E0E\u6821\u9A8C",type:"Number",options:"-",default:"6"},{name:"maxlength",desc:"\u6700\u5927\u8F93\u5165\u957F\u5EA6\uFF0C\u53C2\u4E0E\u6821\u9A8C",type:"Number",options:"-",default:"16"},{name:"showPassword",desc:"\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807",type:"Boolean",options:"",default:"true"},{name:"minScore",desc:"\u80FD\u901A\u8FC7\u9A8C\u8BC1\u7684\u6700\u4F4E\u5BC6\u7801\u5F3A\u5EA6\u5F97\u5206",type:"Number",options:"-",default:"25"},{name:"format",desc:"\u6839\u636E\u5BC6\u7801\u5F3A\u5EA6\u5F97\u5206\uFF0C\u8FD4\u56DE\u5F3A\u5EA6\u5224\u5B9A\u6587\u5B57\u3002\u53C2\u6570\uFF1Ascore[Number]\uFF1B\u8FD4\u56DE\uFF1A\u5F3A\u5EA6\u5224\u5B9A[String]",type:"Function",options:"-",default:`default(percentage) {
          if (percentage >= 0 && percentage < 25) {
            return "\u5F31";
          } else if (percentage >= 25 && percentage < 50) {
            return "\u4E2D";
          } else if (percentage >= 50 && percentage < 75) {
            return "\u5F3A";
          } else {
            return "\u5F88\u5F3A";
          }
        }`},{name:"color",desc:"\u6839\u636E\u5BC6\u7801\u5F3A\u5EA6\u5F97\u5206\uFF0C\u5B9A\u5236\u5404\u5F97\u5206\u533A\u95F4\u7684\u4E3B\u9898\u8272",type:"Array",options:"-",default:`[
          '#F56C6C',
          '#E6A23C',
          '#9fcc8a',
          '#67c23a'
        ]`}],events:[{name:"change",desc:"\u4EC5\u5728\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1",param:"value[String]"},{name:"verify",desc:"\u4EC5\u5728\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1",param:"score[Number]"},{name:"ready",desc:"\u7EC4\u4EF6\u5C31\u7EEA\u56DE\u8C03\uFF0C\u53C2\u6570\u63A5\u6536\u6839\u636EvalidType\u751F\u6210\u7684\u9A8C\u8BC1\u89C4\u5219\uFF0C\u53EF\u76F4\u63A5\u7528\u4E8Eel-form\u9A8C\u8BC1",param:"rule[Array]"}]}},methods:{handleSubmit(){this.$refs.editForm.validate(e=>{e&&this.$message.success("\u9A8C\u8BC1\u901A\u8FC7")})}},created(){}},l={};var m=o(p,s,n,!1,d,"446ec41e",null,null);function d(e){for(let r in l)this[r]=l[r]}var c=function(){return m.exports}();export{c as default};
