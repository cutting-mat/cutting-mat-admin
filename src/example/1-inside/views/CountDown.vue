<template>
  <div>
    <h2>简介</h2>
    <p>倒计时按钮，可实现发验证码的倒计时</p>
    <h2>示例</h2>
    <div class="demo">
      <el-button :disabled="btnDisabled" @click="$refs.countdownButton.start()">
        <CountDown
          ref="countdownButton"
          :count="10"
          @start="btnDisabled = true"
          @end="btnDisabled = false"
        >
          获取验证码
        </CountDown>
      </el-button>
    </div>
    <pre class="code">
      <textarea readonly rows="10">
      <el-button :disabled="btnDisabled" @click="$refs.countdownButton.start()">
        <CountDown
          ref="countdownButton"
          :count="10"
          @start="btnDisabled = true"
          @end="btnDisabled = false"
        >
          获取验证码
        </CountDown>
      </el-button>
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
      btnDisabled: false,
      inputNumber1: null,
      inputNumber2: null,
      inputNumber3: null,
      inputNumber4: null,
      props: [
        {
          name: "count",
          desc: "倒计时秒数",
          type: "Number",
          options: "-",
          default: "-",
        },
      ],
      events: [],
      methods: [
        {
          name: "start",
          desc: "开始倒计时，返回Promise，倒计时结束时resolve()",
          param: "-",
          example: `-`,
        },
        {
          name: "reset",
          desc: "重置按钮状态",
          param: "-",
          example: `-`,
        },
      ],
    };
  },
  methods: {},
  created() {},
};
</script>

<style scoped></style>
