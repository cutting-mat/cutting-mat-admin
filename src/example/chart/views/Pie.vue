<template>
    <div>
        <h2>引用方式</h2>
        <p>
            "chart-pie": (resolve) => require([
            "@/__components/chart-pie/index.vue", ], resolve)
        </p>
        <h2>基础样式</h2>
        <div class="flex-col">
            <div class="flex-1">
                <p>data(Array)：饼状图数据 ，通用图表格式</p>
            </div>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <chart-pie :data="data" :radius="radius" />
                </div>
            </div>
        </div>
        <h2>饼状图颜色</h2>
        <div class="flex-1">
            <p>colors(Array):默认全局色表；</p>
            <p>colors示例：<code>["#5B8FF9", "#61DDAA"]</code></p>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <chart-pie
                        :data="data"
                        :radius="radius"
                        :colors="colors"
                    />
                </div>
            </div>
        </div>
        <h2>图例颜色</h2>
        <div class="flex-1">
            <p>legendColor(String): 图例字体颜色，默认 #000</p>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <chart-pie
                        :data="data"
                        :radius="radius"
                        :colors="colors"
                        :legendColor="'#2978ff'"
                    />
                </div>
            </div>
        </div>
        <h2>两列图例</h2>
        <div class="flex-1">
            <p>isMoreLegend(Boolean)：图列是否为两列，默认false</p>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <chart-pie
                        :data="data"
                        :radius="radius"
                        :colors="colors"
                        :isMoreLegend="isLegend"
                    />
                </div>
            </div>
        </div>
        <h2>饼图圆心位置</h2>
        <div class="flex-1">
            <p>
                center(Array)：设置饼图圆心位置，默认：[45%(水平),50%（垂直）]
            </p>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <chart-pie
                        :data="data"
                        :radius="radius"
                        :colors="colors"
                        :isMoreLegend="isLegend"
                        :center="['32%', '50%']"
                    />
                </div>
            </div>
        </div>
        <h2>大小&环形图</h2>
        <div class="flex-1">
            <p>
                radius(Number/String)
                ：指定饼图外半径，支持百分数或数值，百分数表示相对容器高宽中较短一项的比例，数值单位'px'。默认"70%"。
            </p>
            <p>
                radius(Array)：传入长度为2的数组可以生成环形图，数组值分别指定环状内半径和外半径，数组元素同样支持Number/String两种格式。例如：<code
                    >['50%', '70%']</code
                >
            </p>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <chart-pie :data="data" :radius="radiusArr" />
                </div>
            </div>
        </div>
        <h2>有引导的环形饼状图</h2>
        <div class="flex-1">
            <p>isLableLine(Boolean)：是否有引导线，默认false</p>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <chart-pie
                        :data="data"
                        :radius="radiusArr"
                        :isLableLine="isShowLine"
                    />
                </div>
            </div>
        </div>
        <h2>图例翻页的环形饼状图</h2>
        <div class="flex-1">
            <p>isScroll(Boolean)：图例是否可以滚动，默认false</p>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap">
                    <chart-pie
                        :data="data1"
                        :radius="radiusArr"
                        :isLableLine="isShowLine"
                        :isScroll="isScroll"
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
            data: [
                {
                    label: [
                        "朝阳社区",
                        "高碑店社区",
                        "劲松党建",
                        "龙山街道",
                        "丰台小区",
                        "金城小区",
                    ],
                    value: [335, 310, 310, 135, 135, 1548],
                },
            ],
            data1: [
                {
                    label: [
                        "朝阳社区",
                        "高碑店社区",
                        "劲松党建",
                        "龙山街道",
                        "丰台小区",
                        "金城小区",
                        "皇姑区",
                        "铁西",
                        "金普新区",
                        "高新区",
                        "沙河口区",
                    ],
                    value: [
                        335,
                        310,
                        310,
                        135,
                        135,
                        1548,
                        400,
                        500,
                        600,
                        700,
                        800,
                    ],
                },
            ],
            radius: [0, "70%"],
            radiusArr: ["50%", "70%"],
            radiuses: [100, 150],
            isLableLine: false,
            isMoreLegend: false, //图列显示多列
            isShowLine: true,
            isLegend: true,
            colors: [
                "#2A5D9D",
                "#198641",
                "#96BB2C",
                "#43135C",
                "#D51C8F",
                "#E55113",
            ], //饼状图颜色
            isScroll: true, //横向布局
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
