<template>
  <div>
    <h2>密码强度提示</h2>
    <p>至少包含大写字母、小写字母、数字、符号中的两种或以上，其中字符包括<code>!@#$%^&*(),./</code></p>
    <p>引用组件：<code>@/core/components/InputPassword.vue</code></p>
    <h3>组件属性</h3>
    
    <p>`attribute[Object]`: 原element组件支持的属性，如下</p>
    <p>`placeholder[String]`: 输入框占位提示</p>
    <p>`size[String]`: 组件大小</p>
    <p>`minlength[String|Number]`: 密码最小位数，默认 6</p>
    <p>`maxlength[String|Number]`: 密码最小位数， 默认 16</p>
    <p>`suffix-icon[String]`: 前缀图标</p>
    <p>`prefix-icon[String]`: 后缀图标</p>
    <p>`autocomplete[String]`: 自动补全</p>
    <p>`showPassword[Boolean]`: 显示切换密码图标，默认 true</p>
    <p>`disabled[Boolean]`: 禁用</p>
    <p>`readonly[Boolean]`: 只读</p>
    <p>`clearable[Boolean]`: 清空</p>
    <p>`autofocus[Boolean]`: 自动获取焦点</p>
    <h4>强度指示相关属性</h4>
    <p>`format[Function(percentage)]`: 强度提示文字内容</p>
    <h4>业务相关校验</h4>
    <p>针对不同业务需求，提供密码强度分数，根据分数制定校验规则，使用<code>@verify</code></p>
    <p>结合<code>rules中{ required: true, validator: validatePass, trigger: "blur" },</code>validator进行校验。</p>
    
    <div class="demo">
      <el-form 
        :rules="rules" 
        :model="passwordForm" 
        ref="passwordForm" 
        class="demo-dynamic"
        @submit.native.prevent="submitForm('passwordForm')"
        label-width="100px"
      >
        <el-form-item prop="password" label="设置密码">
          <InputPassword 
            v-model="passwordForm.password" 
            :minlength="6"
            :maxlength="16"
            @verify="verify"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//import { util } from '@/core';

export default {
  components: {
    InputPassword: () => import("@/core/components/InputPassword.vue"),
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("请设置密码"));
      } else {
        if(this.score < 20) {
          callback(new Error("密码太弱，请重新设置"));
        }
        callback();
      }
    };
    return {
      passwordForm: {
        password: null,
      },
      score: "",
      rules: {
        password: [
          { required: true, validator: validatePass, trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    verify(val) {
      this.score = val;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.passwordForm.resetFields();
    },
  },
  created() {},
};
</script>

<style scoped></style>
