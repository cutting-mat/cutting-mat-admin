<template>
  <div></div>
</template>

<script>
import packageInfo from "./package.json";
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */

export default {
  name: `${packageInfo.name}__${packageInfo.version}`,
  data() {
    return {};
  },
  methods: {},
  created() {
    report.send(packageInfo);
  },
  mounted() {},
};
</script>

<style scoped></style>
