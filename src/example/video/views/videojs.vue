<template>
    <div>
        <h2>简介</h2>
        <p>图片上传组件。</p>
        <h2>示例</h2>
        <div class="demo">
            <videojs style="height:400px;width:600px" :options="videoOptions" />
        </div>
        <pre class="code">
            <textarea readonly rows="5">
            <videojs
                style="height:400px;width:600px"
                :options="videoOptions"
            />
            </textarea>
        </pre>

        <h2>配置</h2>
        <el-table :data="props">
            <el-table-column prop="name" label="属性"></el-table-column>
            <el-table-column prop="desc" label="说明"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column prop="options" label="可选"></el-table-column>
            <el-table-column prop="default" label="默认"></el-table-column>
        </el-table>
        <h2>事件</h2>
        <el-table :data="events">
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="desc" label="说明"></el-table-column>
            <el-table-column prop="param" label="参数"></el-table-column>
        </el-table>
    </div>
</template>

<script>
//import * as util from "@/main/assets/util";

export default {
    data() {
        return {
            videoOptions: {
                autoplay: true,
                controls: true,
                sources: [
                    {
                        src:
                            "http://tracesr.refined-x.com/_nuxt/videos/caozuo.2d1b87a.mp4",
                        type: "video/mp4"
                    },
                ]
            },
            props: [{
                name: 'options',
                desc: 'videojs配置，官方文档：https://videojs.com/getting-started',
                type: 'Object',
                options: '-',
                default: '-'
            }, {
                name: 'heartbeatSecond',
                desc: '心跳间隔秒数',
                type: 'Number',
                options: '-',
                default: '5'
            }, {
                name: 'seekAble',
                desc: '是否可以拖拽快进',
                type: 'Boolean',
                options: '-',
                default: 'true'
            }],
            events: [
                {
                    name: 'onPlayerReady',
                    desc: 'videojs就绪事件',
                    param: 'player[videojs实例]',
                }, {
                    name: 'heartbeat',
                    desc: '心跳事件',
                    param: 'currentTime[Number]',
                }
            ]
        };
    },
    methods: {

    },
    created() {

    },
};
</script>

<style scoped>
.block {
    height: 380px;
    width: 800px;
    margin: auto;
    background: #fff;
    box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.1);
}
</style>
