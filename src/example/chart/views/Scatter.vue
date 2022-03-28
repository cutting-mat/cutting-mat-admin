<template>
    <div>
        <h2>简介</h2>
        <p>基于Echart封装的散点图组件</p>
        <h2>示例</h2>
        <p>data(Array)：通用图表格式</p>
        <p>colors(String)：用来描点的颜色；默认全局色表</p>
        <p>name(Array)：数据名称，数组长度与'data'保持一致</p>
        <div class="demo">
            <chart-scatter :data="data" colors="rgba(91,143,249,0.5)" />
        </div>
        <pre class="code">
            <textarea readonly>
            <chart-scatter :data="data" colors="rgba(91,143,249,0.5)" />
            </textarea>
        </pre>
    </div>
</template>

<script>
//import * as util from "@/main/assets/util";

export default {
    data() {
        return {
            data: [
                {
                    label: [
                        "Australia",
                        "Canada",
                        "China",
                        "Cuba",
                        "Finland",
                        "France",
                        "Germany",
                        "Iceland",
                        "India",
                        "Japan",
                        "North Korea",
                        "South Korea",
                        "New Zealand",
                        "Norway",
                        "Poland",
                        "Russia",
                        "Turkey",
                        "United Kingdom",
                        "United States",
                    ],
                    value: [
                        28604, 31163, 1516, 13670, 28599, 29476, 31476, 28666,
                        1777, 29550, 2076, 12087, 24021, 43296, 10088, 19349,
                        10670, 26424, 37062,
                    ],
                },
                {
                    label: [
                        "Australia",
                        "Canada",
                        "China",
                        "Cuba",
                        "Finland",
                        "France",
                        "Germany",
                        "Iceland",
                        "India",
                        "Japan",
                        "North Korea",
                        "South Korea",
                        "New Zealand",
                        "Norway",
                        "Poland",
                        "Russia",
                        "Turkey",
                        "United Kingdom",
                        "United States",
                    ],
                    value: [
                        77, 77.4, 68, 74.7, 75, 77.1, 75.4, 78.1, 57.7, 79.1,
                        67.9, 72, 72, 75.4, 76.8, 70.8, 69.6, 67.3, 75.7,
                    ],
                },
            ],
        };
    },
    methods: {},
    created() { },
};
</script>

<style scoped>

</style>
