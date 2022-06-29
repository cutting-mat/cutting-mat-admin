<template>
  <div>
    <h2>通用图表格式</h2>
    <p>图表组件涵盖的图表类型、形式，都适用该格式。</p>
    <div class="demo">
      <el-input type="textarea" v-model="example" :rows="10" readonly />
    </div>
    <h2>全局色表</h2>
    <p>
      图表组件默认颜色配置，定义位置<code
        >@/core/components/Chart/assets/variate.js</code
      >
    </p>
  </div>
</template>

<script>
//import * as util from '@/main/assets/util';

export default {
  data() {
    return {
      example: `
        [
          {
            "label": ["1月","2月","3月","4月","5月"],
            "value": [11, 23, 58, 13, 21]
          }      
        ]
      `,
    };
  },
  methods: {},
  created() {},
};
</script>

<style scoped></style>
