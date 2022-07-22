import{n as a}from"./index.ec256302.js";import"./ui.c0058d49.js";const r={data(){return{inputNumber1:null,inputNumber2:null,inputNumber3:null,inputNumber4:null,props:[{name:"v-model/value",desc:"\u503C",type:"String",options:"-",default:"-"},{name:"min",desc:"\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C",type:"Number",options:"-",default:"-Infinity"},{name:"max",desc:"\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C",type:"Number",options:"-",default:"Infinity"},{name:"precision",desc:"\u6570\u503C\u7CBE\u5EA6",type:"Number",options:"-",default:"0"},{name:"round",desc:"\u56DB\u820D\u4E94\u5165",type:"Boolean",options:"-",default:"false"},{name:"zeroFill",desc:"\u8865\u96F6\u81F3\u6307\u5B9A\u7684\u6570\u5B57\u7CBE\u5EA6",type:"Boolean",options:"-",default:"false"},{name:"placeholder",desc:"\u8F93\u5165\u6846\u5360\u4F4D\u6587\u5B57",type:"String",options:"-",default:"\u8BF7\u8F93\u5165"},{name:"disabled",desc:"\u7981\u7528",type:"Boolean",options:"-",default:"false"},{name:"size",desc:"\u8F93\u5165\u6846\u5C3A\u5BF8",type:"String",options:"medium / small / mini",default:"medium"},{name:"readonly",desc:"\u53EA\u8BFB",type:"Boolean",options:"-",default:"false"}],events:[{name:"change",desc:"\u4EC5\u5728\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1",param:"value[String]"}]}},methods:{},created(){}};var o=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("\u7B80\u4ECB")]),e("p",[t._v("\u6570\u5B57\u8F93\u5165\u6846")]),e("h2",[t._v("\u793A\u4F8B")]),e("div",{staticClass:"demo"},[e("el-form",{attrs:{"label-width":"160px"}},[e("el-form-item",{attrs:{label:"\u4E24\u4F4D\u5C0F\u6570\u81EA\u52A8\u8865\u96F6"}},[e("InputNumber",{attrs:{zeroFill:"",precision:2},model:{value:t.inputNumber1,callback:function(n){t.inputNumber1=n},expression:"inputNumber1"}})],1),e("el-form-item",{attrs:{label:"\u4E24\u4F4D\u5C0F\u6570\u56DB\u820D\u4E94\u5165"}},[e("InputNumber",{attrs:{round:"",precision:2},model:{value:t.inputNumber4,callback:function(n){t.inputNumber4=n},expression:"inputNumber4"}})],1)],1)],1),t._m(0),e("h2",[t._v("\u914D\u7F6E")]),e("el-table",{attrs:{data:t.props}},[e("el-table-column",{attrs:{prop:"name",label:"\u5C5E\u6027"}}),e("el-table-column",{attrs:{prop:"desc",label:"\u8BF4\u660E"}}),e("el-table-column",{attrs:{prop:"type",label:"\u7C7B\u578B"}}),e("el-table-column",{attrs:{prop:"options",label:"\u53EF\u9009"}}),e("el-table-column",{attrs:{prop:"default",label:"\u9ED8\u8BA4"}})],1),e("h2",[t._v("\u4E8B\u4EF6")]),e("el-table",{attrs:{data:t.events}},[e("el-table-column",{attrs:{prop:"name",label:"\u540D\u79F0"}}),e("el-table-column",{attrs:{prop:"desc",label:"\u8BF4\u660E"}}),e("el-table-column",{attrs:{prop:"param",label:"\u53C2\u6570"}})],1)],1)},s=[function(){var l=this,t=l._self._c;return t("pre",{staticClass:"code"},[l._v("    "),t("textarea",{attrs:{readonly:"",rows:"9"}},[l._v(`    <el-form label-width="160px">
      <el-form-item label="\u4E24\u4F4D\u5C0F\u6570\u81EA\u52A8\u8865\u96F6">
        <InputNumber v-model="inputNumber1" zeroFill :precision="2" />
      </el-form-item>
      <el-form-item label="\u4E24\u4F4D\u5C0F\u6570\u56DB\u820D\u4E94\u5165">
        <InputNumber v-model="inputNumber4" round :precision="2" />
      </el-form-item>
    </el-form>
    `)]),l._v(`
  `)])}],m=a(r,o,s,!1,null,"1531791e",null,null);const i=m.exports;export{i as default};
