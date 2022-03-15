<template>
  <div class="preview-box" style="text-align: center">
    <div
      v-for="(item, index) in imgs"
      :key="index"
      style="display: inline-block"
    >
      <img
        class="my-photo"
        alt="loading"
        :data-src="item.url"
        src="./img/loading.gif"
      />
    </div>
  </div>
</template>
<script>
const packageInfo = require('./package.json');
import { report } from "../__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */

import { throttle, checkImgs } from "./js/lazyload.js";

export default {
  name: `${packageInfo.name}__${packageInfo.version}`,
  props: {
    imgs: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  watch: {
    imgs: {
      handler: function () {
        setTimeout(function () {
          checkImgs();
        }, 500);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    
  },
  created() {
    report.send(packageInfo);
  },
  mounted() {
    let appMain = document.getElementsByClassName("scrollbar")[0];
    appMain.onscroll = throttle(checkImgs);
  },
};
</script>

<style scoped>
</style>
