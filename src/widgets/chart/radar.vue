<template>
  <div :id="domid" class="widget-chart-line"></div>
</template>

<script>
import packageInfo from "./package.json";
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */
import * as echarts from "echarts/core";
import { TooltipComponent } from "echarts/components";
import { RadarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TooltipComponent, RadarChart, CanvasRenderer]);
// 全局色表
import { colors } from "../__support/variate";
// 图表对象
export default {
  name: `${packageInfo.name}__${packageInfo.version}`,
  props: {
    data: {
      type: Array,
      require: true,
      /**
       * 图标数据
       */
      default: () => [],
    },
    name: {
      type: Array,
      require: true,
      /**
       * 图标数据
       */
      default: () => [],
    },
    colors: {
      type: Array,
      require: false,
      /**
       * 雷达图中心色
       */
      default: () => colors,
    },
  },
  data() {
    return {
      domid: `domid-${parseInt(Math.random() * 1e8)}`,
      indicatorArr: [],
      indicatorData: [],
      chartObj: null,
      dataArr: [],
    };
  },
  watch: {
    data: {
      handler() {
        if (Array.isArray(this.data) && this.data.length > 0) {
          this.render();
        }
      },
      deep: true,
    },
  },
  methods: {
    //处理data中的数据
    handleRadarData(arr) {
      let maxValue = Math.max.apply(
        Math,
        arr.map((item) => {
          return item.value;
        })
      );
      let newArr = [];
      arr.forEach((e) => {
        let obj = {
          name: e.name,
          max: maxValue,
        };
        newArr.push(e.value);
        this.indicatorArr.push(obj);
      });
      return newArr;
    },
    getSeriesData() {
      let arr = [];
      return this.data.map((item) => {
        if (item.label.length !== item.value.length)
          return this.$message.error("数据有误，请联系后台！");

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
    render() {
      this.dataArr = this.getSeriesData();
      this.dataArr.forEach((item, index) => {
        let obj = {
          name: this.name[index] || null,
          lineStyle: {
            color: this.colors[0],
          },
          itemStyle: {
            normal: {
              color: this.colors[0],
            },
          },
          value: this.handleRadarData(item),
        };
        this.indicatorData.push(obj);
      });

      let option = {
        tooltip: {
          trigger: "axis",
        },
        colors: this.colors,
        radar: {
          name: {
            textStyle: {
              color: "#999",
              // backgroundColor: "#999",
              // borderRadius: 3,
              // padding: [3, 5],
            },
          },
          indicator: this.indicatorArr,
        },
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            areaStyle: {
              opacity: 0.9,
              color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                {
                  color: this.colors[0],
                  offset: 0,
                },
                {
                  color: this.colors[1],
                  offset: 1,
                },
              ]),
            },
            data: this.indicatorData,
          },
        ],
      };
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
    if (Array.isArray(this.data) && this.data.length > 0) {
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
