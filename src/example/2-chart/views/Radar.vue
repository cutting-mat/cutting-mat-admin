<template>
  <div class="example">
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
    <pre class="code">
            <textarea readonly>
            <chart-radar :data="data" :name="name" :colors="colorList" />
            </textarea>
        </pre>
  </div>
</template>

<script>
import ChartRadar from "@/core/components/ChartRadar";
import { getChart } from "../api";
//import * as util from "@/main/assets/util";

export default {
  components: {
    ChartRadar,
  },
  data() {
    return {
      name: ["预算分配"],
      data: [],
      colorList: ["#B8D3E4", "#72ACD1"],
    };
  },
  methods: {
    fetchData(params, opt) {
      return getChart(params, opt).then((res) => {
        return res.data;
      });
    },
  },
  created() {
    this.fetchData(null, {
      cache: false,
    }).then((res) => {
      this.data = [res[0]];
    });
  },
};
</script>

<style scoped>
.demo {
  height: 300px;
}
</style>
