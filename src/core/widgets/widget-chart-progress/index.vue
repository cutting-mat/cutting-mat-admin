<template>
    <div :id="domid" class="widget-chart-line"></div>
</template>

<script>
const packageInfo = require("./package.json");
import { report } from "../__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */
import * as echarts from "echarts/core";
import {
    TooltipComponent,
    GraphicComponent,
    LegendComponent,
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
    TooltipComponent,
    GraphicComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
]);
// 全局色表
import { colors } from "../__support/variate";

// 图表对象
export default {
    name: `${packageInfo.name}__${packageInfo.version}`,
    props: {
        progress: {
            type: Number,
            require: true,
            /**
             * 图标数据
             */
            default: () => 10,
        },
        colors: {
            type: Array,
            require: false,
            /**
             * 圆环进度颜色与默认颜色
             */
            default: () => [colors[0], "#ECEFF4"],
        },
        title: {
            type: String,
            require: false,
            /**
             * 圆环标题
             */
            default: () => "",
        },
    },
    data() {
        return {
            domid: `domid-${parseInt(Math.random() * 1e8)}`,
            chartObj: null,
            currentData: null,
        };
    },
    watch: {
        title: {
            handler() {
                if (this.title != void 0) {
                    this.render();
                }
            },
            deep: true,
        },
    },
    methods: {
        getProgress() {
            this.currentData = this.progress > 100 ? 100 : this.progress;
            let arr = [this.currentData, 100 - this.currentData];
            return arr.map((item, index) => {
                return {
                    value: item,
                    itemStyle: {
                        normal: { color: this.colors[index] },
                        emphasis: { color: this.colors[index] },
                    },
                };
            });
        },
        render() {
            //处理环状图的颜色
            let option = {
                color: this.colors,
                tooltip: {
                    show: false,
                },
                legend: {
                    show: false,
                },
                series: [
                    {
                        type: "pie",
                        radius: ["55%", "70%"],
                        center: ["50%", "50%"],
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        label: {
                            show: false,
                            formatter: "{c}",
                            position: "inner",
                        },
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: "30",
                                fontWeight: "bold",
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: this.getProgress(),
                    },
                ],
            };
            //处理title
            option.title = {
                // text: this.currentData + "%",
                left: "center",
                top: "45%",
                textStyle: {
                    color: this.colors[0],
                    fontSize: 30,
                    align: "center",
                },
            };
            if (this.title) {
                // option.title.top = "50%";
                option.graphic = {
                    type: "text",
                    left: "center",
                    top: "50%",
                    style: {
                        text: this.title,
                        textAlign: "center",
                        fill: this.colors[0],
                        fontSize: 20,
                        fontWeight: 700,
                    },
                };
            }
            this.chartObj.setOption(option);
        },
    },
    created() {
    report.send(packageInfo);
        
    },
    mounted() {
        if (this.chartObj) {
            this.chartObj.dispose();
        }
        this.chartObj = echarts.init(document.getElementById(this.domid));
        if (this.progress) {
            this.render();
        }
    },
};
</script>

<style scoped>
.widget-chart-line {
    width: 100%;
    height: 100%;
}
</style>
