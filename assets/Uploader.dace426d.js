import{n as o}from"./index.ec256302.js";import"./ui.c0058d49.js";const l={data(){return{inputNumber1:null,inputNumber2:null,inputNumber3:null,inputNumber4:null,props:[{name:"accept",desc:"\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u540Cel-upload, \u989D\u5916\u652F\u6301\u81EA\u5B9A\u4E49\u6587\u4EF6\u7C7B\u578B\uFF08\u89C1\u4E0B\u65B9 quickType \uFF09",type:"String",options:"-",default:"*"},{name:"v-model / value",desc:"\u5DF2\u4E0A\u4F20\u6587\u4EF6\u6570\u636E, \u540Cel-upload",type:"Array",options:"-",default:"[]"},{name:"beforeUpload",desc:"\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u540Cel-upload",type:"Function",options:"-",default:"-"},{name:"onExceed",desc:"\u6587\u4EF6\u8D85\u51FA\u4E2A\u6570\u9650\u5236\u65F6\u7684\u94A9\u5B50, \u540Cel-upload",type:"Function",options:"-",default:"-"},{name:"limitSize",desc:"\u5141\u8BB8\u4E0A\u4F20\u7684\u6700\u5927\u6587\u4EF6\u5C3A\u5BF8\uFF0C\u5355\u4F4D\u5B57\u8282",type:"Number",options:"-",default:"100 * 1024 * 1024"},{name:"imgCompress",desc:"\u5F00\u542F\u56FE\u7247\u4E0A\u4F20\u524D\u538B\u7F29",type:"Boolean",options:"-",default:"true"},{name:"imgCompressOption",desc:"\u56FE\u7247\u538B\u7F29\u5C3A\u5BF8\u914D\u7F6E",type:"Object",options:"-",default:`{
            maxWidth: 1000,            // \u6700\u5927\u5BBD\u5EA6
            maxHeight: 1000,           // \u6700\u5927\u9AD8\u5EA6
        }`},{name:"imgCrop",desc:"\u5F00\u542F\u56FE\u7247\u4E0A\u4F20\u524D\u526A\u88C1",type:"Boolean",options:"-",default:"false"},{name:"imgCropOption",desc:"\u56FE\u7247\u526A\u88C1\u914D\u7F6E, \u9009\u9879\u540C [fengyuanchen/compressorjs]",type:"Boolean",options:"-",default:`{
            ratio: 1,               // \u526A\u88C1\u6846\u5BBD\u9AD8\u6BD4
            minWidth: 0,            // \u6700\u5C0F\u8F93\u51FA\u5BBD\u5EA6
            minHeight: 0,           // \u6700\u5C0F\u8F93\u51FA\u9AD8\u5EA6
            maxWidth: 1000,         // \u6700\u5927\u8F93\u51FA\u5BBD\u5EA6
            maxHeight: 1000,        // \u6700\u5927\u8F93\u51FA\u9AD8\u5EA6
        }`},{name:"uploadMethod",desc:"\u4E0A\u4F20\u5904\u7406\u65B9\u6CD5, \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF08file/blob, fileName\uFF09",type:"Function",options:"-",default:"-"},{name:"responseTransfer",desc:"\u63A5\u53E3\u8FD4\u56DE\u6570\u636E \u4E0E fileList \u6570\u636E\u683C\u5F0F\u8F6C\u6362\u51FD\u6570",type:"Function",options:"-",default:"(response) => return response;"},{name:"quickType",desc:"\u81EA\u5B9A\u4E49\u6587\u4EF6\u7C7B\u578B",type:"Object",options:"-",default:`{
            "t-image": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tif", ".webp"],
            "t-video": [".mp4", ".rmvb", ".avi", ".mov", ".3gp", ".webm"],
            "t-audio": [".wav", ".mp3", ".ogg", ".acc"],
            "t-word": [".docx", ".doc"],
            "t-excel": [".xlsx", ".xls"],
            "t-ppt": [".ppt", ".pptx"],
            "t-document": [".pdf", "t-word", "t-excel", "t-ppt"],
            "t-zip": [".zip", ".rar"],
        }`}],events:[{name:"change",desc:"\u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u53D8\u5316\u94A9\u5B50",param:"fileList[Array]"}]}},methods:{},created(){}};var p=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("\u7B80\u4ECB")]),e("p",[t._v("\u4E0A\u4F20\u7EC4\u4EF6\u3002\u6765\u81EA\uFF1Ahttps://github.com/cutting-mat/uploader")]),e("h2",[t._v("\u793A\u4F8B")]),e("div",{staticClass:"demo"},[e("uploader",[t._v("\u70B9\u51FB\u4E0A\u4F20")])],1),t._m(0),e("h2",[t._v("\u914D\u7F6E")]),e("p",[t._v("\u652F\u6301 el-upload \u9664\u8BF7\u6C42\u76F8\u5173\uFF08action, headers, data, name, with-credentials, http-request\uFF09\u4EE5\u5916\u7684\u6240\u6709Prop\u3002")]),t._m(1),e("el-table",{attrs:{data:t.props}},[e("el-table-column",{attrs:{prop:"name",label:"\u5C5E\u6027"}}),e("el-table-column",{attrs:{prop:"desc",label:"\u8BF4\u660E"}}),e("el-table-column",{attrs:{prop:"type",label:"\u7C7B\u578B"}}),e("el-table-column",{attrs:{prop:"options",label:"\u53EF\u9009"}}),e("el-table-column",{attrs:{prop:"default",label:"\u9ED8\u8BA4"}})],1),e("h2",[t._v("\u4E8B\u4EF6")]),e("el-table",{attrs:{data:t.events}},[e("el-table-column",{attrs:{prop:"name",label:"\u540D\u79F0"}}),e("el-table-column",{attrs:{prop:"desc",label:"\u8BF4\u660E"}}),e("el-table-column",{attrs:{prop:"param",label:"\u53C2\u6570"}})],1),e("h2",[t._v("\u65B9\u6CD5")]),e("p",[t._v("\u652F\u6301 el-upload \u7684\u6240\u6709 Method\u3002")])],1)},n=[function(){var a=this,t=a._self._c;return t("pre",{staticClass:"code"},[a._v("    "),t("textarea",{attrs:{readonly:""}},[a._v(`    <uploader>\u70B9\u51FB\u4E0A\u4F20</uploader>
    `)]),a._v(`
  `)])},function(){var a=this,t=a._self._c;return t("p",[a._v(" \u989D\u5916\u652F\u6301\u4EE5\u4E0B\u5C5E\u6027\uFF0C\u82E5\u5728 "),t("code",[a._v("plugin.uploader.config.js")]),a._v("\u4E2D\u914D\u7F6E\u5C06\u4F5C\u4E3A\u5168\u5C40\u914D\u7F6E\uFF1A ")])}],r=o(l,p,n,!1,null,"13f82dc1",null,null);const i=r.exports;export{i as default};
