<template>
  <div
    class="chartwarp"
    :style="
      dialBackground
        ? `background:url(${dialBackground}) no-repeat center;background-size:auto 100%`
        : ''
    "
  >
    <div :id="domid" class="widget-chart-line"></div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GaugeChart, CanvasRenderer]);
// 全局色表
import { colors } from "@/core/components/Chart/assets/variate";

export default {
  name: `ChartGauge`,
  props: {
    value: {
      type: Number,
      require: true,
      /**
       * 仪表盘数值
       */
      default: 0,
    },
    angle: {
      //角度 以中心点左侧为180，右侧为0 ，上方为90°
      type: Array,
      require: false,
      validator: (val) => {
        return Array.isArray(val) && val.length == 2;
      },
      default: () => [216, -36],
    },
    range: {
      //表盘区间值
      type: Array,
      require: false,
      validator: (val) => {
        return Array.isArray(val) && val.length == 2;
      },
      default: () => [0, 100],
    },
    pointerStyle: {
      /*
            1、可接收以'image://'开头的url，自定义指针样式。例如：'image://http://baidu.png'，可参考（https://echarts.apache.org/zh/option.html#series-gauge.pointer.icon）
            2、接收色值。例如：'#1ACCFF'、'rgba(0,0,0,1)'、'red'
            */
      type: String,
      require: false,
      default: () => colors[0],
    },
    pointerLength: {
      /*
            指针长度。相对于半径的半分比，默认值'70%'
            */
      type: [String, Number],
      require: false,
      default: "70%",
    },
    dialBackground: {
      //表盘背景。若传入表盘背景，除指针外，表盘刻度、表盘轴线等不显示
      type: String,
      require: false,
      default: null,
    },
    options: {
      //自定义表盘
      type: Object,
      require: false,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      colors: colors,
      domid: `domid-${parseInt(Math.random() * 1e8)}`,
      gaugeData: null,
      chartObj: null,
    };
  },
  methods: {
    render() {
      let isDialElementShow = {
        show: this.dialBackground ? false : true,
      };
      let pointerIcon = "";
      let itemStyle = "";
      if (/^image:\/\//.test(this.pointerStyle)) {
        pointerIcon = this.pointerStyle;
      } else {
        itemStyle = this.pointerStyle;
      }
      let option = Object.assign(this.options, {
        type: "gauge",
        startAngle: this.angle[0],
        endAngle: this.angle[1],
        min: this.range[0],
        max: this.range[1],
        pointer: {
          icon: pointerIcon,
          length: this.pointerLength,
          itemStyle: {
            color: itemStyle,
          },
        },
        axisLine: isDialElementShow,
        axisTick: isDialElementShow,
        splitLine: isDialElementShow,
        axisLabel: isDialElementShow,
        data: [
          {
            value: this.value,
            detail: { show: false },
          },
        ],
      });
      this.chartObj.setOption({ series: [option] });
    },
  },
  mounted() {
    if (this.chartObj) {
      this.chartObj.dispose();
    }
    this.chartObj = echarts.init(document.getElementById(this.domid));
    this.$watch(
      () => this.value,
      () => {
        this.render();
      },
      {
        immediate: true,
        deep: true,
      }
    );
    window.addEventListener("resize", () => {
      if (this.chartObj) {
        this.chartObj.resize();
      }
    });
  },
};
</script>

<style scoped>
.chartwarp,
.widget-chart-line {
  width: 100%;
  height: 100%;
}
</style>
