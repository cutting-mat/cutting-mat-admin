<template>
  <div></div>
</template>

<script>
const packageInfo = require('./package.json');
import { report } from "../__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */


export default {
  name: `${packageInfo.name}__${packageInfo.version}`,
  data() {
    return {
    };
  },
  methods: {
    
  },
  created() {
    report.send(packageInfo);
  },
  mounted() {
    
  },
};
</script>

<style scoped>

</style>
