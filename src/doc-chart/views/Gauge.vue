<template>
    <div>
        <h2>引用方式</h2>
        <p>
            "widget-chart-gauge": (resolve) => require([
            "@/__components/widget-chart-gauge/index.vue", ], resolve)
        </p>
        <h2>基础样式</h2>
        <div class="flex-col">
            <div class="flex-1">
                <p>value(Number，必传)：仪表盘数值</p>
                <p>range(Array)：仪表盘数值范围，默认值：[ 0,100 ]</p>
            </div>
        </div>
        <div class="demo">
            <div class="block">
                <widget-chart-gauge :value="30" />
            </div>
        </div>
        <h2>起止角度</h2>
        <div class="flex-col">
            <div class="flex-1">
                <p>
                    angle(Array)：起止角度（ 默认值：[ 216 ,-36 ] ），示例：[
                    180 ,0 ]，（ 注：以中心点左侧为180，右侧为0 ，上方为90° ）
                </p>
            </div>
        </div>
        <div class="demo">
            <div class="block">
                <widget-chart-gauge :value="30" :angle="[180, 0]" />
            </div>
        </div>
        <h2>自定义指针</h2>
        <div class="flex-col">
            <div class="flex-1">
                <p>pointerStyle(String)：指针样式。</p>
                <p style="margin-left: 130px">
                    1、接收以'image://'开头的 url 或
                    dataUrl。例如：'image://http://baidu.png'。<a
                        target="_blank"
                        style="color: #257ff7"
                        href="https://echarts.apache.org/zh/option.html#series-gauge.pointer.icon"
                        >详情</a
                    >
                </p>
                <p style="margin-left: 130px">
                    2、接收色值。例如：'#1ACCFF'、'rgba(0,0,0,1)'、'red'
                </p>
                <p>pointerLength(String/Number)：指针长度，可以是绝对数值，也可以是相对于半径的半分比，默认值 '70%'</p>
            </div>
        </div>
        <div class="demo">
            <div class="block">
                <widget-chart-gauge
                    :value="data"
                    pointerStyle="red"
                    pointerLength="50%"
                />
            </div>
        </div>
        <h2>自定义表盘</h2>
        <div class="flex-col">
            <div class="flex-1">
                <p>
                    dialBackground(String)：自定义表盘背景（注：若使用自定义表盘，除指针外，表盘刻度、表盘轴线等将不显示，以自定义表盘为准）
                </p>
            </div>
        </div>
        <div class="demo">
            <div class="block">
                <widget-chart-gauge
                    :dialBackground="dialBackground"
                    :value="data"
                    pointerStyle="red"
                />
            </div>
        </div>
    </div>
</template>

<script>
//import * as util from "@/main/assets/util";

export default {
    data() {
        return {
            dialBackground: require("../assets/img/pointer.png"),
            pointer: require("../assets/img/pointer1.png"),
            data: 0,
            colorList: ["#FAD961", "#F76B1C"],
        };
    },
    methods: {},
    created() {
        setTimeout(() => {
            this.data = 50;
        }, 3000);
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
._configTitle {
    font-weight: bold;
}
</style>
