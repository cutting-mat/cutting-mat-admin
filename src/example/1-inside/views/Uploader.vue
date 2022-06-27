<template>
  <div>
    <h2>简介</h2>
    <p>上传组件。来自：https://github.com/cutting-mat/uploader</p>
    <h2>示例</h2>
    <div class="demo">
      <uploader>点击上传</uploader>
    </div>
    <pre class="code">
      <textarea readonly>
      <uploader>点击上传</uploader>
      </textarea>
    </pre>
    <h2>配置</h2>
    <p>支持 el-upload 除请求相关（action, headers, data, name, with-credentials, http-request）以外的所有Prop。</p>
    <p>
      额外支持以下属性，若在
      <code>plugin.uploader.config.js</code>中配置将作为全局配置：
    </p>
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
    <h2>方法</h2>
    <p>支持 el-upload 的所有 Method。</p>
  </div>
</template>

<script>
//import { util } from '@/core';

export default {
  data() {
    return {
      inputNumber1: null,
      inputNumber2: null,
      inputNumber3: null,
      inputNumber4: null,
      props: [{
        name: 'accept',
        desc: '允许上传的文件类型, 同el-upload, 额外支持自定义文件类型（见下方 quickType ）',
        type: 'String',
        options: '-',
        default: '*'
      }, {
        name: 'v-model / value',
        desc: '已上传文件数据, 同el-upload',
        type: 'Array',
        options: '-',
        default: '[]'
      }, {
        name: 'beforeUpload',
        desc: '上传文件之前的钩子，同el-upload',
        type: 'Function',
        options: '-',
        default: '-'
      }, {
        name: 'onExceed',
        desc: '文件超出个数限制时的钩子, 同el-upload',
        type: 'Function',
        options: '-',
        default: '-'
      }, {
        name: 'limitSize',
        desc: '允许上传的最大文件尺寸，单位字节',
        type: 'Number',
        options: '-',
        default: '100 * 1024 * 1024'
      }, {
        name: 'imgCompress',
        desc: '开启图片上传前压缩',
        type: 'Boolean',
        options: '-',
        default: 'true'
      }, {
        name: 'imgCompressOption',
        desc: '图片压缩尺寸配置',
        type: 'Object',
        options: '-',
        default: `{
            maxWidth: 1000,            // 最大宽度
            maxHeight: 1000,           // 最大高度
        }`
      }, {
        name: 'imgCrop',
        desc: '开启图片上传前剪裁',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }, {
        name: 'imgCropOption',
        desc: '图片剪裁配置, 选项同 [fengyuanchen/compressorjs]',
        type: 'Boolean',
        options: '-',
        default: `{
            ratio: 1,               // 剪裁框宽高比
            minWidth: 0,            // 最小输出宽度
            minHeight: 0,           // 最小输出高度
            maxWidth: 1000,         // 最大输出宽度
            maxHeight: 1000,        // 最大输出高度
        }`
      }, {
        name: 'uploadMethod',
        desc: '上传处理方法, 接收两个参数（file/blob, fileName）',
        type: 'Function',
        options: '-',
        default: '-'
      }, {
        name: 'responseTransfer',
        desc: '接口返回数据 与 fileList 数据格式转换函数',
        type: 'Function',
        options: '-',
        default: '(response) => return response;'
      }, {
        name: 'quickType',
        desc: '自定义文件类型',
        type: 'Object',
        options: '-',
        default: `{
            "t-image": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tif", ".webp"],
            "t-video": [".mp4", ".rmvb", ".avi", ".mov", ".3gp", ".webm"],
            "t-audio": [".wav", ".mp3", ".ogg", ".acc"],
            "t-word": [".docx", ".doc"],
            "t-excel": [".xlsx", ".xls"],
            "t-ppt": [".ppt", ".pptx"],
            "t-document": [".pdf", "t-word", "t-excel", "t-ppt"],
            "t-zip": [".zip", ".rar"],
        }`
      }],
      events: [
        {
          name: 'change',
          desc: '上传文件列表变化钩子',
          param: 'fileList[Array]',
        }
      ]
    };
  },
  methods: {

  },
  created() { },
};
</script>

<style scoped></style>
