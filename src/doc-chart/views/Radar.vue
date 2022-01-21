<template>
    <div>
        <h2>引用方式</h2>
        <p>
            "widget-chart-radar": (resolve) => require([
            "@/__components/widget-chart-radar/index.vue", ], resolve)
        </p>
        <h2>基础样式</h2>
        <div class="flex-col">
            <div class="flex-1">
                <p>data(Array)：通用图表格式</p>
                <p>
                    colors(Array)：该对象为数组,代表雷达图内部颜色的渐变；示例：["#B8D3E4",
                    "#72ACD1"]
                </p>
                <p>name(Array)：数据名称，数组长度与'data'保持一致</p>
            </div>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <widget-chart-radar
                        :data="data"
                        :name="name"
                        :colors="colorList"
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
            name: ["预算分配"],
            data: [
                {
                    label: ["销售", "管理", "信息技术", "客服", "研发", "市场"],
                    value: [43000, 30000, 38000, 50000, 35000, 49000],
                },
            ],
            colorList: ["#B8D3E4", "#72ACD1"],
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
