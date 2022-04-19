<template>
  <div>
    <h2>引用方式</h2>
    <p>
      "chart-gauge": (resolve) => import.meta.glob([
      "@/__components/chart-gauge/index.vue", ], resolve)
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
        <chart-gauge :value="30" />
      </div>
    </div>
  </div>
</template>

<script>
//import * as util from "@/main/assets/util";

export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
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
</style>
