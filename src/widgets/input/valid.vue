<template>
  <el-input
    ref="input"
    class="input-valid"
    v-bind="$attrs"
    v-model="inputValue"
    :showWordLimit="showWordLimit"
    @input="$nextTick(() => { textLength = $refs.input.textLength })"
    @change="$emit('change', $event)"
  >
    <div slot="suffix" v-if="showWordCount">
      <span :class="{ overWordCount }">{{ textLength }}</span>
      /{{ maxlength }}
    </div>
  </el-input>
</template>

<script>
const packageInfo = require('./package.json');
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */

import { validMobile, validId } from "./assets/util";

// 获取值的长度
const getLength = function (value) {
  if (value === void (0) || value === null) {
    return 0
  }
  return String(value).length
}

export default {
  name: `${packageInfo.name}__${packageInfo.version}`,
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: null,
    validType: {
      type: String,
      required: false,
      default: "count"  // "count|mobile|idCard"
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    maxlength: {
      type: Number,
      required: false,
      default: Infinity
    },
    showWordLimit: {
      type: Boolean,
      requierd: false,
      default: false
    }
  },
  data() {
    return {
      textLength: getLength(this.value),
      inputValue: null
    };
  },
  computed: {
    showWordCount() {
      return this.maxlength && this.showWordLimit
    },
    overWordCount() {
      return this.textLength > this.maxlength
    },
    rules() {
      return [
        { required: this.required, validator: () => this.valid(), trigger: 'blur' }
      ]
    }
  },
  watch: {
    value: {
      handler() {
        this.inputValue = this.value;
      },
      immediate: true
    }
  },
  methods: {
    valid() {
      return new Promise((resolve, reject) => {
        if (this.required && !getLength(this.inputValue)) {
          return reject(`请输入${this.label}`)
        }
        switch (this.validType) {
          case "count":
            !this.overWordCount ? resolve() : reject(`超过字数上限，请删减文字`)
            break;
          case "mobile":
            validMobile(this.inputValue) ? resolve() : reject(`手机号格式有误，请重新输入`)
            break;
          case "idCard":
            validId(this.inputValue) ? resolve() : reject(`身份证号格式有误，请重新输入`)
            break;
          default:
            reject(`validType error: ${this.validType}`)
        }
      })
    }
  },
  created() {
    report.send(packageInfo);
  },
  mounted() {
    this.$emit('ready', this.rules)
  },
};
</script>

<style scoped>
.input-valid >>> .overWordCount {
  color: #f56c6c;
}
</style>
