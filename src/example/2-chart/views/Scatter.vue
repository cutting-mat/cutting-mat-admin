<template>
  <div class="example">
    <h2>简介</h2>
    <p>基于Echart封装的散点图组件</p>
    <h2>示例</h2>
    <p>data(Array)：通用图表格式</p>
    <p>colors(String)：用来描点的颜色；默认全局色表</p>
    <p>name(Array)：数据名称，数组长度与'data'保持一致</p>
    <div class="demo">
      <chart-scatter :data="data" />
    </div>
    <pre class="code">
        <textarea readonly>
        <chart-scatter :data="data" />
        </textarea>
    </pre>
  </div>
</template>

<script>
import ChartScatter from "@/core/components/ChartScatter";
import { getChart } from "../api";
//import * as util from "@/main/assets/util";

export default {
  components: {
    ChartScatter,
  },
  data() {
    return {
      data: [],
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
      this.data = res;
    });
  },
};
</script>

<style scoped>
.demo {
  height: 300px;
}
</style>
