<template>
  <div :id="domid" class="widget-chart-line"></div>
</template>

<script>
import * as echarts from "echarts/core";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);
// 全局色表
import { colors } from "@/core/components/Chart/assets/variate";

export default {
  name: "ChartPie",
  props: {
    data: {
      type: Array,
      /**
       * 统一图表格式
       * [{
       *   label: [],
       *   value: []
       * }]
       *
       * **/
      required: true,
      default: () => [],
    },
    center: {
      type: [Array],
      /**
       * Array：圆心
       */
      required: false,
      validator(value) {
        return value.length == 2;
      },
      default: () => {
        return ["45%", "50%"];
      },
    },
    radius: {
      type: [String, Number, Array],
      /**
       * String：实心饼状图
       * Array：环形饼状图
       */
      required: false,
      default: () => "70%",
    },
    isLableLine: {
      type: Boolean,
      required: false,
      /**
       * 引导线
       */
      default: () => false,
    },
    isMoreLegend: {
      type: Boolean,
      required: false,
      /**
       * 图列是否分两列
       */
      default: () => false,
    },
    colors: {
      type: Array,
      required: false,
      default: () => colors,
    },
    isScroll: {
      type: Boolean,
      required: false,
      /**
       * 图列位于底部且能翻页
       */
      default: () => false,
    },
    legendColor: {
      /**
       * 图例字体颜色
       */
      type: String,
      require: false,
      default: () => "#000",
    },
  },
  data() {
    return {
      domid: `domid-${parseInt(Math.random() * 1e8)}`,
      legendArr: [], //图列
      chartObj: null,
      pieData: null,
    };
  },
  methods: {
    legendInfo(i, len) {
      let disLen = i == 0 ? (i + 1) * 5 + "%" : (i + 1) * 10 + "%";
      return {
        show: !this.isLableLine,
        orient: "vertical",
        right: disLen,
        top: "middle",
        icon: "circle",
        selectedMode: false,
        textStyle: {
          color: this.legendColor,
        },
        pageTextStyle: {
          color: this.legendColor,
        },
        pageIconColor: this.legendColor,
        pageIconInactiveColor: this.legendColor,
        data: this.pieData.slice(i * len, (i + 1) * len),
      };
    },

    getPieData() {
      let arr = [];
      return this.data.map((item) => {
        item.label.forEach((e, k) => {
          let obj = {
            name: e,
            value: item.value[k],
          };
          arr.push(obj);
        });
        return arr;
      });
    },
    handleLegend(arr) {
      arr.forEach((item) => {
        item.show = "true";
        item.orient = "horizontal";
        item.top = "92%";
        item.type = "scroll";
        item.padding = [0, 15];
        delete item.right;
      });
    },
    render() {
      this.pieData = this.getPieData()[0];
      //处理多列图列
      let len = null;
      if (this.isMoreLegend) {
        len = Math.ceil(this.pieData.length / 2);
        for (let i = 0; i < 2; i++) {
          let obj = this.legendInfo(i, len);
          this.legendArr.push(obj);
        }
      } else {
        len = this.pieData.length;
        let obj = this.legendInfo(0, len);
        this.legendArr.push(obj);
        this.isScroll && this.handleLegend(this.legendArr);
      }
      let option = {
        color: this.colors,
        tooltip: {
          trigger: "item",
          formatter: "{b}:<br/> {c} ({d}%)",
        },
        legend: this.legendArr,
        series: [
          {
            type: "pie",
            radius: this.radius,
            center: this.center,
            avoidLabelOverlap: true,
            hoverAnimation: false,
            label: {
              show: true,
              formatter: this.isLableLine
                ? this.isScroll
                  ? "{c|{c}}"
                  : "{a|{b}} {c|{c}}"
                : "{c}",
              position: this.isLableLine ? "outside" : "inner",
              rich: {
                a: {
                  color: "#000",
                  fontSize: 12,
                  lineHeight: 20,
                  align: "center",
                },
              },
            },
            labelLine: {
              show: this.isLableLine,
            },
            data: this.pieData,
          },
        ],
      };
      this.chartObj.setOption(option);
    },
  },
  mounted() {
    if (this.chartObj) {
      this.chartObj.dispose();
    }
    this.chartObj = echarts.init(document.getElementById(this.domid));
    this.$watch(
      () => this.data,
      () => {
        if (Array.isArray(this.data) && this.data.length > 0) {
          this.render(this.data);
        }
      },
      {
        immediate: true,
        deep: true,
      }
    );
  },
};
</script>

<style scoped>
.widget-chart-line {
  width: 100%;
  height: 100%;
}
</style>
