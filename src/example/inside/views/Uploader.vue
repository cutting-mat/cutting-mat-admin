<template>
  <div>
    <h2>简介</h2>
    <p>上传组件。来自：https://github.com/cutting-mat/uploader</p>
    <h2>示例</h2>
    <div class="demo">
      <countdownButton
        ref="countdownButton"
        :count="10"
        @click="$refs.countdownButton.start()"
      >获取验证码</countdownButton>
    </div>
    <pre class="code">
      <textarea readonly rows="6">
      <countdownButton
          ref="countdownButton"
          :count="10"
          @click="$refs.countdownButton.start()"
      >获取验证码</countdownButton>
      </textarea>
    </pre>
    <h2>配置</h2>
    <el-table :data="props">
      <el-table-column prop="name" label="属性"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="options" label="可选"></el-table-column>
      <el-table-column prop="default" label="默认"></el-table-column>
    </el-table>
    <h2>事件</h2>
    <el-table :data="events">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="param" label="参数"></el-table-column>
    </el-table>
    <h2>方法</h2>
    <el-table :data="methods">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="param" label="参数"></el-table-column>
    </el-table>
  </div>
</template>

<script>
//import { util } from '@/core';

export default {
  data() {
    return {
      inputNumber1: null,
      inputNumber2: null,
      inputNumber3: null,
      inputNumber4: null,
      props: [{
        name: 'count',
        desc: '倒计时秒数',
        type: 'Number',
        options: '-',
        default: '-'
      }],
      events: [
        {
          name: 'click',
          desc: '点击事件',
          param: '-',
        }
      ],
      methods: [
        {
          name: 'start',
          desc: '开始倒计时，返回Promise，倒计时结束时resolve()',
          param: '-',
          example: `-`
        }, {
          name: 'reset',
          desc: '重置按钮状态',
          param: '-',
          example: `-`
        }
      ],
    };
  },
  methods: {

  },
  created() { },
};
</script>

<style scoped></style>
