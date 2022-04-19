<template>
  <div class="image-lazyload-wrap" :id="scrollLoadDom">
    <div v-for="(item, index) in imgs" :key="index">
      <img
        class="__scroll-load-image"
        alt="loading"
        :data-src="item.url"
        src="./img/loading.gif"
      />
    </div>
  </div>
</template>
<script>
import packageInfo from "./package.json";
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */

import { throttle, checkImgs } from "./js/lazyload.js";
let scrollLoadDom;

export default {
  name: `${packageInfo.name}__${packageInfo.version}`,
  props: {
    imgs: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      scrollLoadDom: `scrollLoadDom_${parseInt(Math.random() * 1e5)}`,
    };
  },
  watch: {
    imgs: {
      handler() {
        if (this.imgs.length) {
          this.$nextTick(() => {
            checkImgs();
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {},
  created() {
    report.send(packageInfo);
  },
  mounted() {
    scrollLoadDom = document.getElementById(this.scrollLoadDom);
    scrollLoadDom.onscroll = throttle(checkImgs);
  },
};
</script>

<style scoped>
.image-lazyload-wrap {
  overflow-x: hidden;
  overflow-y: auto;
}
.image-lazyload-wrap .__scroll-load-image {
  display: block;
  margin: auto;
}
.image-lazyload-wrap .__scroll-load-image[data-src] {
  height: 500px;
  width: 64px;
  object-fit: contain;
}
</style>
