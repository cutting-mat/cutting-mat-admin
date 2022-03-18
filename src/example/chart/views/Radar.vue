<template>
    <div>
        <h2>简介</h2>
        <p>基于Echart封装的雷达图组件</p>
        <h2>示例</h2>
        <p>data(Array)：通用图表格式</p>
        <p>
            colors(Array)：该对象为数组,代表雷达图内部颜色的渐变；示例：["#B8D3E4",
            "#72ACD1"]
        </p>
        <p>name(Array)：数据名称，数组长度与'data'保持一致</p>
        <div class="demo">
            <chart-radar :data="data" :name="name" :colors="colorList" />
        </div>
        <div class="code">
            <textarea readonly>
            <chart-radar :data="data" :name="name" :colors="colorList" />
            </textarea>
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
    created() { },
};
</script>

<style scoped>

</style>
