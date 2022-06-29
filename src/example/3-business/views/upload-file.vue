<template>
  <div class="example">
    <h2>简介</h2>
    <p>文件上传组件。</p>
    <h2>示例</h2>
    <div class="demo">
      <el-form label-width="90px">
        <el-form-item label="上传附件：">
          <upload-file v-model="fileList" />
        </el-form-item>
      </el-form>
    </div>
    <pre class="code">
            <textarea readonly>
            <upload-file v-model="fileList" />
            </textarea>
        </pre>
    <h2>配置</h2>
    <p>
      支持
      <a href="https://github.com/cutting-mat/uploader" target="_blank"
        >@cutting-mat/uploader</a
      >的所有配置
    </p>
  </div>
</template>

<script>
import UploadFile from "@/core/components/UploadFile";
//import * as util from "@/main/assets/util";

export default {
  components: {
    UploadFile,
  },
  data() {
    return {
      fileList: [],
    };
  },
  methods: {},
  created() {},
};
</script>

<style scoped></style>
