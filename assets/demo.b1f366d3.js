import{n as r}from"./index.ec256302.js";import"./ui.c0058d49.js";const n={data(){return{editForm:{album:""},props:[{name:"value",desc:"\u56FE\u7247\u6570\u636E\uFF0C\u5FC5\u987B\u542B\u6709url\u5B57\u6BB5",type:"Object",options:"-",default:"-"},{name:"placeholder",desc:"\u4E0A\u4F20\u5360\u4F4D\u6587\u5B57",type:"String",options:"-",default:"\u4E0A\u4F20"}],events:[{name:"change",desc:"\u4E0A\u4F20\u56FE\u7247\u6210\u529F\u4E8B\u4EF6",param:"file[Object]"}]}},methods:{},created(){}};var o=function(){var l=this,e=l._self._c;return e("div",[e("h2",[l._v("\u7B80\u4ECB")]),e("p",[l._v("\u5355\u56FE\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u4E0A\u4F20\u5934\u50CF\u6216\u5C01\u9762\u3002")]),e("h2",[l._v("\u793A\u4F8B")]),e("div",{staticClass:"demo"},[e("upload-single-img",{attrs:{value:{url:l.editForm.album},placeholder:"\u4E0A\u4F20\u5C01\u9762"},on:{change:t=>{l.editForm.album=t.url}}})],1),l._m(0),e("h2",[l._v("\u914D\u7F6E")]),e("el-table",{attrs:{data:l.props}},[e("el-table-column",{attrs:{prop:"name",label:"\u5C5E\u6027"}}),e("el-table-column",{attrs:{prop:"desc",label:"\u8BF4\u660E"}}),e("el-table-column",{attrs:{prop:"type",label:"\u7C7B\u578B"}}),e("el-table-column",{attrs:{prop:"options",label:"\u53EF\u9009"}}),e("el-table-column",{attrs:{prop:"default",label:"\u9ED8\u8BA4"}})],1),e("h2",[l._v("\u4E8B\u4EF6")]),e("el-table",{attrs:{data:l.events}},[e("el-table-column",{attrs:{prop:"name",label:"\u540D\u79F0"}}),e("el-table-column",{attrs:{prop:"desc",label:"\u8BF4\u660E"}}),e("el-table-column",{attrs:{prop:"param",label:"\u53C2\u6570"}})],1)],1)},s=[function(){var a=this,l=a._self._c;return l("pre",{staticClass:"code"},[a._v("        "),l("textarea",{attrs:{readonly:"",rows:"6"}},[a._v(`        <upload-single-img
            :value="{ url: editForm.album }"
            placeholder="\u4E0A\u4F20\u5C01\u9762"
            @change="(file) => { editForm.album = file.url }"
        />
        `)]),a._v(`
    `)])}],p=r(n,o,s,!1,null,"91d9c192",null,null);const d=p.exports;export{d as default};
