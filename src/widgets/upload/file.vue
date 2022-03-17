<template>
  <div>
    <div class="flex-row align-center">
      <uploader
        ref="myuploader"
        :value="value"
        v-bind="$attrs"
        :show-file-list="false"
        :limit="limit"
        @change="$emit('change', $event)"
      >
        <el-button type="primary" size="small">
          <i class="el-icon-upload"></i>
          点击上传
        </el-button>
      </uploader>
      <div class="flex-1 upload_text">数量限制 {{ limit }} 个，支持 {{ acceptFinnal }}，单文件大小不超过 {{ fileSize }}</div>
    </div>
    <TheFileList :value="value" @change="$emit('change', $event)" />
  </div>
</template>

<script>
const packageInfo = require('./package.json');
import { report } from "../__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */

export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Array,
      required: false,
      default(){
        return []
      }
    },
    limit: {
      type: Number,
      required: false,
      default: 9
    }
  },
  components: {
    TheFileList: () => import("./assets/__fileList.vue"),
  },
  data() {
    return {
      acceptFinnal: "",
      fileSize: ""
    };
  },
  methods: {

  },
  created() {
    report.send(packageInfo);

  },
  mounted() {
    this.acceptFinnal = this.$refs.myuploader.acceptFinnal === "*" ? "任意 格式" : this.$refs.myuploader.acceptFinnal;
    this.fileSize = `${parseInt(this.$refs.myuploader.limitSize / 1024 / 1024)}M`;
  },
};
</script>

<style scoped>
.upload_text {
  padding: 0 1em;
}
</style>
