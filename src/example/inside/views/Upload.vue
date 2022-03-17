<template>
  <div>
    <h2>文件上传</h2>
    <p>
      @cutting-mat/el-upload，基于Element-Upload二次封装。
    </p>
    <p>
      保留原组件参数：<code
        >multiple, data, name, showFileList, accept, listType, fileList,
        disabled, limit, beforeUpload</code
      >
    </p>
    <p>新增参数：<code>triggerId, imgCompress, imgCompressOption, uploadFunc, uploadBase64Func</code></p>
    <p>支持事件：<code>exceed, success, error</code></p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin @success="handleUploadFile" />
      </div>
    </div>

    <h2>限制格式</h2>
    <p>
      <code>accept[String]</code
      >：支持扩展名以及框架约定快捷类别，多个值用","隔开，例如<code>"t-document,.txt"</code>，默认"*"不限制格式。框架约定快捷类别描述见`@/main/assets/file-type.js`
    </p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin accept="t-document,.txt" @success="handleUploadFile" />
      </div>
    </div>

    <h2>附带数据</h2>
    <p><code>data[Object]</code>：上传时附带的额外参数</p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin :data="{ test: 123 }" />
      </div>
    </div>

    <h2>可以多选</h2>
    <p><code>multiple[Boolean]</code>：默认'false'不可多选</p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin multiple @success="handleUploadFile" />
      </div>
    </div>

    <h2>限制数量</h2>
    <p><code>limit[Number]</code>：设置最大上传文件数，默认9</p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin
          :limit="1"
          @exceed="handleExceed"
          @success="handleUploadFile"
        />
      </div>
    </div>

    <h2>禁用状态</h2>
    <p><code>disabled[Boolean]</code>：默认'false'不禁用</p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin disabled />
      </div>
    </div>

    <h2>自定义触发元素id</h2>
    <p><code>triggerId[String]</code>：默认自动生成随机字符串</p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin triggerId="myUploadTrigger" />
      </div>
    </div>

    <h2>是否开启图片上传前压缩</h2>
    <p>
      <code>imgCompress[Boolean]</code
      >：默认'true'，上传图片压缩，宽高不超过1000px，走base64上传接口：<code
        >"@/main/api/common.js" => uploadImg</code
      >
    </p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin accept="t-image" @success="handleUploadImage" />
      </div>
    </div>

    <h2>图片压缩配置</h2>
    <p>
      <code> imgCompressOption[Object] </code> 默认'{
          width: 1000,
          height: 1000
        }'，宽高均不超过1000px，等比缩放<code
        ></code
      >
    </p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin accept="t-image" :imgCompressOption="{width: 1000, height: 1000}" @success="handleUploadImage" />
      </div>
    </div>
    
    <h2>自定义文件上传函数</h2>
    <p>
      <code>uploadFunc(formData)</code> 默认<code
        >"@/main/api/common.js" => upload</code
      >
    </p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin :uploadFunc="uploadFunc" @success="handleUploadFile" />
      </div>
    </div>

    <h2>自定义压缩图片Base64上传函数</h2>
    <p>
      <code>uploadBase64Func({'base64': String, 'name': String})</code>：默认<code
        >"@/main/api/common.js" => uploadImg</code
      >
    </p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin @success="handleUploadFile" />
      </div>
    </div>

    <h2>自定义上传列表</h2>
    <p>
      <code>showFileList[Boolean]</code>默认 false，配合： TheFileList 组件<code
        >"@/main/components/TheFileList"</code
      >展示上传文件列表
    </p>
    <div class="demo">
      <div class="block">
        <TheFileList v-model="list" @click="handlePreview" />
        <el-upload-plugin @success="handleUploadFile2" />
      </div>
    </div>

    <h2>单个上传文件大小限制</h2>
    <p>
      <code>limitSize[Number]</code>：默认<code>100 * 1024 * 1024  // 100M</code>
    </p>
    <div class="demo">
      <div class="block">
        <el-upload-plugin :limitSize="150 * 1024 * 1024" @success="handleUploadFile" />
      </div>
    </div>

    
  </div>
</template>

<script>
//import { util } from "@/core";
import { upload as uploadFunc} from "@/main/api/common";

export default {
  components: {
    TheFileList: (resolve) =>
      require(["@/main/components/TheFileList"], resolve),
  },
  data() {
    return {
      images: [],
      files: [],
      list: [],
      uploadFunc,
    };
  },
  methods: {
    handlePreview(file) {
      console.log(file);
      if (file && file.url) {
        window.open(encodeURI(file.url));
      }
    },
    handleExceed() {
      this.$message("超出最大可上传文件数");
    },
    handleUploadImage(files) {
      this.images.push(files);
    },
    handleUploadFile(files) {
      this.files.push(files);
    },
    handleUploadFile2(files) {
      this.list.push(files);
    },
  },
};
</script>

<style scoped>
</style>
