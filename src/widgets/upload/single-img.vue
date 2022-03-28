<template>
  <uploader
    class="upload-single-img"
    accept="t-image"
    :value="value.url ? [value] : []"
    imgCrop
    :show-file-list="false"
    :on-success="(res) => {$emit('change', res)}"
  >
    <img v-if="value.url" :src="value.url" alt class="_img" />
    <div v-else class="_cont">
      <div class="_inner">
        <div>
          <i class="el-icon-upload" style="font-size:2em"></i>
        </div>
        {{placeholder}}
      </div>
    </div>
  </uploader>
</template>

<script>
const packageInfo = require('./package.json');
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */

export default {
  props: {
    value: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: '上传'
    }
  },
  created() {
    report.send(packageInfo);

  }
};
</script>

<style scoped>
.upload-single-img {
    display: block;
    width: 200px;
    height: 200px;
    line-height: 200px;
    background: #dedede;
    text-align: center;
    cursor: pointer;
    border-radius: 6px;
    overflow: hidden;
}
.upload-single-img >>> .el-upload {
    display: block;
}
.upload-single-img ._img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}
.upload-single-img ._cont {
    width: 200px;
    height: 200px;
}
.upload-single-img ._inner {
    display: inline-block;
    vertical-align: middle;
    line-height: 2;
}
</style>
