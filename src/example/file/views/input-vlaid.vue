<template>
  <div class="example">
    <h2>简介</h2>
    <p>集成验证方法的输入框。</p>
    <h2>示例</h2>
    <div class="demo">
      <el-form ref="editForm" :model="editForm" :rules="rules" label-width="80px">
        <el-form-item label="标题" prop="title">
          <input-valid
            v-model="editForm.title"
            :maxlength="10"
            show-word-limit
            required
            label="标题"
            @ready="rule => rules.title = rule"
          />
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <input-valid
            v-model="editForm.mobile"
            validType="mobile"
            required
            label="手机号"
            @ready="rule => rules.mobile = rule"
          />
        </el-form-item>
        <el-form-item label="身份证" prop="idCard">
          <input-valid
            v-model="editForm.idCard"
            validType="idCard"
            required
            label="身份证"
            @ready="rule => rules.idCard = rule"
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <pre class="code">
      <textarea readonly rows="13">
      <el-form ref="editForm" :model="editForm" :rules="rules" label-width="80px">
          <el-form-item label="标题" prop="title">
            <input-valid
              v-model="editForm.title"
              :maxlength="10"
              show-word-limit
              required
              label="标题"
              @ready="rule => rules.title = rule"
            />
          </el-form-item>
          ...
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
//import * as util from "@/main/assets/util";

export default {
  data() {


    return {
      editForm: {
        title: '',
        mobile: null,
        idCard: null
      },
      rules: {
        title: [],
        mobile: [],
        idCard: []
      },
      props: [{
        name: 'validType',
        desc: '验证类型',
        type: 'String',
        options: '字数限制: count;验证手机号: mobile; 验证身份证: idCard',
        default: 'count'
      }, {
        name: 'required',
        desc: '是否必填校验',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }, {
        name: 'label',
        desc: '控件名称，用于拼接必填校验的提示语',
        type: 'String',
        options: '-',
        default: ''
      }, {
        name: 'maxlength',
        desc: '最大输入长度，用于count类型验证，允许输入超长',
        type: 'Number',
        options: '-',
        default: 'Infinity'
      }, {
        name: 'showWordLimit',
        desc: '显示输入字数统计，配合maxlength实现超长字数标红',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }],
      events: [
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
  created() {

  },
};
</script>

<style scoped>
</style>
