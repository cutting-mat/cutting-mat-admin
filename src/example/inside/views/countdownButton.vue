<template>
  <div>
    <h2>简介</h2>
    <p>倒计时按钮，可实现发验证码的倒计时</p>
    <h2>示例</h2>
    <div class="demo">
      <el-form label-width="160px">
        <el-form-item label="两位小数自动补零">
          <InputNumber v-model="inputNumber1" zeroFill :precision="2" />
        </el-form-item>
        <el-form-item label="两位小数四舍五入">
          <InputNumber v-model="inputNumber4" round :precision="2" />
        </el-form-item>
      </el-form>
    </div>
    <pre class="code">
      <textarea readonly rows="9">
      <el-form label-width="160px">
        <el-form-item label="两位小数自动补零">
          <InputNumber v-model="inputNumber1" zeroFill :precision="2" />
        </el-form-item>
        <el-form-item label="两位小数四舍五入">
          <InputNumber v-model="inputNumber4" round :precision="2" />
        </el-form-item>
      </el-form>
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
  </div>
</template>

<script>
//import { util } from '@/core';

export default {
  components: {
    InputNumber: () => import("@/core/components/InputNumber.vue"),
  },
  data() {
    return {
      inputNumber1: null,
      inputNumber2: null,
      inputNumber3: null,
      inputNumber4: null,
      props: [{
        name: 'v-model/value',
        desc: '值',
        type: 'String',
        options: '-',
        default: '-'
      }, {
        name: 'min',
        desc: '设置计数器允许的最小值',
        type: 'Number',
        options: '-',
        default: '-Infinity'
      }, {
        name: 'max',
        desc: '设置计数器允许的最大值',
        type: 'Number',
        options: '-',
        default: 'Infinity'
      }, {
        name: 'precision',
        desc: '数值精度',
        type: 'Number',
        options: '-',
        default: '0'
      }, {
        name: 'round',
        desc: '四舍五入',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }, {
        name: 'zeroFill',
        desc: '补零至指定的数字精度',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }, {
        name: 'placeholder',
        desc: '输入框占位文字',
        type: 'String',
        options: '-',
        default: '请输入'
      }, {
        name: 'disabled',
        desc: '禁用',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }, {
        name: 'size',
        desc: '输入框尺寸',
        type: 'String',
        options: 'medium / small / mini',
        default: 'medium'
      }, {
        name: 'readonly',
        desc: '只读',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }],
      events: [
        {
          name: 'change',
          desc: '仅在输入框失去焦点或用户按下回车时触发',
          param: 'value[String]',
        }
      ]
    };
  },
  methods: {

  },
  created() { },
};
</script>

<style scoped></style>
