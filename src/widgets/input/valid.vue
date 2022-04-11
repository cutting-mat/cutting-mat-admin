<template>
  <div class="input-valid">
    <el-input
      ref="input"
      v-bind="$attrs"
      v-model="inputValue"
      :showWordLimit="showWordLimit"
      @input="
        $nextTick(() => {
          textLength = $refs.input.textLength;
        })
      "
      @change="$emit('change', $event)"
    >
      <div
        slot="suffix"
        v-if="showWordCount && $attrs.type !== 'textarea'"
        class="input-valid-count"
      >
        <span :class="{ overWordCount }">{{ textLength }}</span>
        /{{ maxlength }}
      </div>
    </el-input>
    <div
      v-if="showWordCount && $attrs.type == 'textarea'"
      class="input-valid-count textarea-valid-count"
    >
      <span :class="{ overWordCount }">{{ textLength }}</span>
      /{{ maxlength }}
    </div>
  </div>
</template>

<script>
const packageInfo = require("./package.json");
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */

import { validMobile, validId } from "./assets/util";

// 获取值的长度
const getLength = function (value) {
  if (value === void 0 || value === null) {
    return 0;
  }
  return String(value).length;
};

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
      default: "count", // "count|mobile|idCard"
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    maxlength: {
      type: Number,
      required: false,
      default: Infinity,
    },
    showWordLimit: {
      type: Boolean,
      requierd: false,
      default: false,
    },
  },
  data() {
    return {
      textLength: getLength(this.value),
      inputValue: null,
    };
  },
  computed: {
    showWordCount() {
      return this.maxlength && this.showWordLimit;
    },
    overWordCount() {
      return this.textLength > this.maxlength;
    },
    rules() {
      return [
        {
          required: this.required,
          validator: () => this.valid(),
          trigger: "change",
        },
      ];
    },
  },
  watch: {
    value: {
      handler() {
        this.inputValue = this.value;
      },
      immediate: true,
    },
  },
  methods: {
    valid() {
      return new Promise((resolve, reject) => {
        if (this.required && !getLength(this.inputValue)) {
          return reject(`请输入${this.label}`);
        }
        switch (this.validType) {
          case "count":
            !this.overWordCount
              ? resolve()
              : reject(`超过字数上限，请删减文字`);
            break;
          case "mobile":
            validMobile(this.inputValue)
              ? resolve()
              : reject(`手机号格式有误，请重新输入`);
            break;
          case "idCard":
            validId(this.inputValue)
              ? resolve()
              : reject(`身份证号格式有误，请重新输入`);
            break;
          default:
            reject(`validType error: ${this.validType}`);
        }
      });
    },
    getValue() {
      return this.inputValue;
    },
  },
  created() {
    report.send(packageInfo);
  },
  mounted() {
    this.$emit("ready", this.rules);
  },
};
</script>

<style scoped>
.input-valid {
  position: relative;
  display: inline-block;
}
.input-valid >>> .overWordCount {
  color: #f56c6c;
}
.input-valid-count {
  position: absolute;
  white-space: nowrap;
  top: 2px;
  bottom: 2px;
  right: 2px;
  padding-left: 2px;
  display: flex;
  align-items: center;
  background: #fff;
}
.textarea-valid-count {
  top: auto;
  color: #c0c4cc;
  padding: 0 2px;
}
</style>
