(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39a1b6f8"],{"0a72":function(e,t,a){},5528:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("简介")]),a("p",[e._v("图片上传组件。")]),a("h2",[e._v("示例")]),a("div",{staticClass:"demo"},[a("videojs",{staticStyle:{height:"400px",width:"600px"},attrs:{options:e.videoOptions},on:{ready:e.handleReady}})],1),e._m(0),a("h2",[e._v("配置")]),a("el-table",{attrs:{data:e.props}},[a("el-table-column",{attrs:{prop:"name",label:"属性"}}),a("el-table-column",{attrs:{prop:"desc",label:"说明"}}),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),a("el-table-column",{attrs:{prop:"options",label:"可选"}}),a("el-table-column",{attrs:{prop:"default",label:"默认"}})],1),a("h2",[e._v("事件")]),a("el-table",{attrs:{data:e.events}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"desc",label:"说明"}}),a("el-table-column",{attrs:{prop:"param",label:"参数"}})],1),a("h2",[e._v("方法")]),a("el-table",{attrs:{data:e.methods}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"desc",label:"说明"}}),a("el-table-column",{attrs:{prop:"param",label:"参数"}}),a("el-table-column",{attrs:{prop:"example",label:"示例"}})],1)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",{staticClass:"code"},[e._v("        "),a("textarea",{attrs:{readonly:"",rows:"9"}},[e._v('        <videojs\n            style="height:400px;width:600px"\n            :options="videoOptions"\n            @ready="player => player.src({\n                src: "http://tracesr.refined-x.com/_nuxt/videos/caozuo.2d1b87a.mp4",\n                type: "video/mp4"\n            })"\n        />\n        ')]),e._v("\n    ")])}],o={data:function(){return{videoOptions:{autoplay:!0,controls:!0},props:[{name:"options",desc:"videojs配置，官方文档：https://videojs.com/getting-started",type:"Object",options:"-",default:"-"},{name:"heartbeatSecond",desc:"心跳间隔秒数",type:"Number",options:"-",default:"5"},{name:"seekAble",desc:"是否可以拖拽快进",type:"Boolean",options:"-",default:"true"}],methods:[{name:"markerPlugin",desc:"为进度条添加打点信息。来自插件：https://github.com/tower1229/videojs-plugin-marker",param:"打点信息[Array]",example:"player.markerPlugin({\n                        //  打点信息\n                        markers: [\n                            {\n                                offset: 2,\n                                type: 'text',\n                                data: {\n                                    content: 'content1'\n                                }\n                            },\n                            {\n                                offset: 10,\n                                type: 'text',\n                                data: {\n                                    content: 'content2'\n                                }\n                            },\n                        ]\n                    });"}],events:[{name:"ready",desc:"videojs就绪事件",param:"player[videojs实例]"},{name:"heartbeat",desc:"心跳事件",param:"currentTime[Number]"}]}},methods:{handleReady:function(e){e.src({src:"https://static.refined-x.com/trans4K720.m3u8",type:"application/x-mpegURL"})}},created:function(){}},r=o,s=(a("768d"),a("2877")),p=Object(s["a"])(r,n,l,!1,null,"54ad23fc",null);t["default"]=p.exports},"768d":function(e,t,a){"use strict";a("0a72")}}]);