<template>
  <div :id="domid" class="widget-chart-line"></div>
</template>

<script>
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { TooltipComponent } from "echarts/components";
import { ScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, TooltipComponent, ScatterChart, CanvasRenderer]);
// 全局色表
import { colors } from "@/core/components/Chart/assets/variate";
// TODO

export default {
  name: `ChartScatter`,
  props: {
    data: {
      type: Array,
      require: true,
      /**
       * 图标数据
       */
      default: () => [],
    },
    colors: {
      type: String,
      require: false,
      /**
       * 实心点颜色
       */
      default: () => colors[0],
    },
    name: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
  data() {
    return {
      domid: `domid-${parseInt(Math.random() * 1e8)}`,
      chartObj: null,
    };
  },
  methods: {
    handleArray(i) {
      let newData = [];
      let _arr = [];
      newData = this.data.slice(i * 2, (i + 1) * 2);
      newData.forEach((item, index) => {
        let _index = index + 1;
        if (_index < newData.length) {
          item.value.forEach((v, k) => {
            let newValueArr = [];
            let total = Math.floor(Math.random() * 10 + 1) * 1e8;
            newValueArr.push(
              v,
              newData[_index].value[k],
              total,
              item.label[k],
              this.name[i]
            );
            _arr.push(newValueArr);
          });
        }
      });
      return _arr;
    },
    hanleData() {
      let len = parseInt(this.data.length / 2);
      let scatterArr = [];
      for (let i = 0; i < len; i++) {
        let value = [];
        let newArr = this.handleArray(i);
        value.push(newArr);
        let obj = {
          value,
          name: this.name[i],
        };
        scatterArr.push(obj);
      }
      return scatterArr;
    },
    render() {
      let name = null;
      let scatterData = null;
      let newArr = [];
      newArr = this.hanleData();
      newArr.forEach((item) => {
        name = item.name;
        scatterData = item.value;
      });

      let option = {
        grid: {
          top: "15%",
          left: "7%",
          bottom: "15%",
          right: "5%",
          containLabel: true,
        },
        xAxis: {
          boundaryGap: false,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(0,0,0,0.45)",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "rgba(0,0,0,0.45)",
            fontSize: 12,
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "rgba(0,0,0,0.45)",
            interval: "2",
            fontSize: 12,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: "rgba(0,0,0,0.15)",
            },
          },
          scale: true,
        },
        /**
         * TODO 此项未处理，因为告知只做一个气泡
         */
        series: [
          {
            name: name,
            data: scatterData[0],
            type: "scatter",
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function (param) {
                  let name = param.data[1] + ":" + param.data[0];
                  return name;
                },
                position: "top",
              },
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(120, 36, 50, 0.5)",
              shadowOffsetY: 5,
              color: this.colors,
            },
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
