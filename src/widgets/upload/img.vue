<template>
  <div class="upload-img">
    <div class="flex-1 upload_text">
      数量限制 {{ limit }} 个，支持 {{ acceptFinnal }}，单文件大小不超过
      {{ fileSize }}
    </div>
    <uploader
      ref="myuploader"
      :value="value"
      accept="t-image"
      v-bind="$attrs"
      list-type="picture-card"
      :limitSize="10 * 1024 * 1024"
      :on-preview="handlePictureCardPreview"
      :limit="limit"
      @change="$emit('change', $event)"
    >
      <div
        slot="default"
        style="display: inline-block; vertical-align: middle; line-height: 2"
      >
        <i class="el-icon-upload"></i>
        <div>点击上传</div>
      </div>
    </uploader>
    <el-dialog :visible.sync="dialogVisible" title="预览">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
import packageInfo from "./package.json";
import { report } from "@/widgets/__support/report";
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
      default() {
        return [];
      },
    },
    limit: {
      type: Number,
      required: false,
      default: 9,
    },
  },
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
      acceptFinnal: "",
      fileSize: "",
    };
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
  created() {
    report.send(packageInfo);
  },
  mounted() {
    this.acceptFinnal =
      this.$refs.myuploader.acceptFinnal === "*"
        ? "任意 格式"
        : this.$refs.myuploader.acceptFinnal;
    this.fileSize = `${parseInt(
      this.$refs.myuploader.limitSize / 1024 / 1024
    )}M`;
  },
};
</script>

<style scoped>
.upload_text {
  margin-bottom: 8px;
}

.upload-img >>> .el-upload-list--picture-card .el-upload-list__item,
.upload-img >>> .el-upload--picture-card {
  width: 128px;
  height: 128px;
}

.upload-img >>> .el-upload-list--picture-card .el-upload-list__item-thumbnail {
  object-fit: cover;
}

.upload-img
  >>> .el-upload-list--picture-card
  .el-upload-list__item-status-label {
  display: none;
}

.upload-img >>> .el-upload-list--picture-card .el-upload-list__item-actions {
  opacity: 1;
  background: none;
}

.upload-img >>> .el-upload-list__item-delete {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  color: #df593b;
  background: #dedede;
  padding: 0 6px;
  border-radius: 0 0 0 6px;
}

.upload-img >>> .el-upload-list__item-delete:hover {
  color: red;
}
</style>
