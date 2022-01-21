<template>
    <div>
        <h2>引用方式</h2>
        <p>
            "widget-chart-progress": (resolve) => require([
            "@/__components/widget-chart-progress/index.vue", ], resolve)
        </p>
        <h2>基础样式</h2>
        <div class="flex-col">
            <div class="flex-1">
                <p>progress(Number)：代表进度条数据；取值范围0~100</p>
            </div>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <widget-chart-progress :progress="progress" />
                </div>
            </div>
        </div>
        <h2>进度条颜色</h2>
        <div class="flex-1">
            <p>
                colors(Array): 默认全局色表；
                示例：['#F0C313','#ECEFF4']，第一项为进度颜色，第二项为未完成颜色
            </p>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <widget-chart-progress
                        :colors="colors"
                        :progress="progress"
                    />
                </div>
            </div>
        </div>
        <h2>有标题的进度条</h2>
        <div class="flex-1">
            <p>title(String)：代表中心所展示的内容；示例：title:'朝阳区70%'</p>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <widget-chart-progress
                        :colors="colors"
                        :title="title"
                        :progress="progress"
                    />
                </div>
            </div>
        </div>
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
    created() {},
};
</script>

<style scoped>
.chartDemoWrap {
    height: 380px;
    width: 800px;
    margin: auto;
    background: #fff;
    box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.1);
}
._configTitle {
    font-weight: bold;
}
</style>
