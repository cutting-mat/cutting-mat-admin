<template>
    <div>
        <h2>简介</h2>
        <p>基于Echart封装的进度图组件</p>
        <h2>示例</h2>
        <p>progress(Number)：代表进度条数据；取值范围0~100</p>
        <div class="demo">
            <chart-progress :progress="68" />
        </div>
        <pre class="code">
            <textarea readonly>
            <chart-progress :progress="68" />
            </textarea>
        </pre>

        <h2>配置</h2>
        <h3>进度条颜色</h3>
        <p>
            colors(Array): 默认全局色表；
            示例：['#F0C313','#ECEFF4']，第一项为进度颜色，第二项为未完成颜色
        </p>
        <div class="demo">
            <chart-progress :colors="colors" :progress="68" />
        </div>
        <pre class="code">
            <textarea readonly>
            <chart-progress :colors="colors" :progress="68" />
            </textarea>
        </pre>

        <h3>有标题的进度条</h3>
        <p>title(String)：代表中心所展示的内容；示例：title:'朝阳区70%'</p>
        <div class="demo">
            <chart-progress :colors="colors" :title="title" :progress="68" />
        </div>
        <pre class="code">
            <textarea readonly>
            <chart-progress :colors="colors" :progress="68" />
            </textarea>
        </pre>
    </div>
</template>

<script>
//import * as util from "@/main/assets/util";

export default {
    data() {
        return {
            progress: 20,
            colors: ["#F0C313", "#ECEFF4"],
            title: "朝阳区70%",
        };
    },
    methods: {},
    created() { },
};
</script>

<style scoped>

</style>
