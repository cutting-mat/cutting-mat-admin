<template>
  <div>
    <h2>简介</h2>
    <p>密码输入框，整合密码强度提示</p>
    <h2>示例</h2>
    <div class="demo">
      <el-form ref="editForm" label-width="100px" :rules="rules" :model="editForm">
        <el-form-item prop="password" label="设置密码">
          <InputPassword v-model="editForm.password" @ready="rule => rules.password = rule" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <pre class="code">
      <textarea readonly rows="9">
      <el-form ref="editForm" label-width="100px" :rules="rules" :model="editForm">
        <el-form-item prop="password" label="设置密码">
          <InputPassword v-model="editForm.password" @ready="rule => rules.password = rule" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
      </textarea>
    </pre>
    <h2>配置</h2>
    <p>支持"el-input"的所有属性，额外支持以下配置或默认值</p>
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
  data() {

    return {
      editForm: {
        password: null,
      },
      rules: {},
      props: [{
        name: 'required',
        desc: '必填，参与校验',
        type: 'Boolean',
        options: '-',
        default: 'true'
      }, {
        name: 'placeholder',
        desc: '输入框占位文字',
        type: 'String',
        options: '-',
        default: '请输入密码'
      }, {
        name: 'minlength',
        desc: '最小输入长度，参与校验',
        type: 'Number',
        options: '-',
        default: '6'
      }, {
        name: 'maxlength',
        desc: '最大输入长度，参与校验',
        type: 'Number',
        options: '-',
        default: '16'
      }, {
        name: 'showPassword',
        desc: '是否显示切换密码图标',
        type: 'Boolean',
        options: '',
        default: 'true'
      }, {
        name: 'minScore',
        desc: '能通过验证的最低密码强度得分',
        type: 'Number',
        options: '-',
        default: '25'
      }, {
        name: 'format',
        desc: '根据密码强度得分，返回强度判定文字。参数：score[Number]；返回：强度判定[String]',
        type: 'Function',
        options: '-',
        default: `default(percentage) {
          if (percentage >= 0 && percentage < 25) {
            return "弱";
          } else if (percentage >= 25 && percentage < 50) {
            return "中";
          } else if (percentage >= 50 && percentage < 75) {
            return "强";
          } else {
            return "很强";
          }
        }`
      }, {
        name: 'color',
        desc: '根据密码强度得分，定制各得分区间的主题色',
        type: 'Array',
        options: '-',
        default: `[
          '#F56C6C',
          '#E6A23C',
          '#9fcc8a',
          '#67c23a'
        ]`
      }],
      events: [
        {
          name: 'change',
          desc: '仅在输入框失去焦点或用户按下回车时触发',
          param: 'value[String]'
        },
        {
          name: 'verify',
          desc: '仅在输入框失去焦点或用户按下回车时触发',
          param: 'score[Number]',
        },
        {
          name: 'ready',
          desc: '组件就绪回调，参数接收根据validType生成的验证规则，可直接用于el-form验证',
          param: 'rule[Array]',
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$message.success('验证通过')
        }
      })
    }
  },
  created() { },
};
</script>

<style scoped></style>
