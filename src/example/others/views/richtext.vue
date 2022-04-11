<template>
  <div class="example">
    <h2>简介</h2>
    <p>基于Quill的富文本编辑器组件</p>
    <h2>示例</h2>
    <p>默认v-model传递的值为富文本数据[Array]：</p>
    <div class="demo">
      <richtext v-model="content" />
      <el-input
        type="textarea"
        :rows="6"
        :value="'富文本数据：' + JSON.stringify(content)"
      />
    </div>
    <pre class="code">
        <textarea readonly>
        <richtext v-model="content" />
        </textarea>
    </pre>

    <p>
      配合JSON存取接口可实现异步模式，此时v-model传递的值为JSON数据的存储ID[String]：
    </p>

    <div class="demo">
      <richtext v-model="contentUrl" async autoSave />
      <el-input type="textarea" :rows="6" :value="'富文本 ID：' + contentUrl" />
    </div>
    <pre class="code">
        <textarea readonly>
        <richtext v-model="contentUrl" async autoSave />
        </textarea>
    </pre>

    <p>只读模式：</p>
    <div class="demo">
      <richtext :value="demoCont" imgZoom read-only />
    </div>
    <pre class="code">
        <textarea readonly>
        <richtext read-only :value="demoCont" />
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
    <h2>方法</h2>
    <el-table :data="methods">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="example" label="示例"></el-table-column>
    </el-table>
  </div>
</template>
<script>
/**
 * 
 * <p>
      异步模式需要定义asyncGetApi（请求文本）和asyncSaveApi（保存文本）接口，默认会从common中取getText和saveText：
      <code>import {getJSON, saveJSON} from "@/main/api/common";</code>
    </p>
 * */
export default {
  data() {
    return {
      content: [],
      contentUrl: "",
      demoCont: [
        { insert: "标题一" },
        { attributes: { header: 1 }, insert: "\n" },
        { insert: "标题二" },
        { attributes: { header: 2 }, insert: "\n" },
        { insert: "段落文字，" },
        { attributes: { color: "#e60000" }, insert: "段落文字，" },
        { attributes: { background: "#ffc266" }, insert: "段落文字" },
        { insert: "\n右对齐" },
        { attributes: { align: "right" }, insert: "\n" },
        { attributes: { bold: true }, insert: "加粗，" },
        { attributes: { italic: true }, insert: "斜体，" },
        { attributes: { underline: true }, insert: "下划线" },
        { insert: "\n" },
        {
          insert: {
            image: "http://oss.zjsz.sogdata.com/20210616170248/logo.png",
          },
        },
        { insert: "\n" },
      ],
      props: [
        {
          name: "value",
          desc: "富文本数据，或富文本存储ID，取决于 `async` 配置",
          type: "Array/String",
          options: "-",
          default: '[]/""',
        },
        {
          name: "read-only",
          desc: "只读模式",
          type: "Boolean",
          options: "-",
          default: "false",
        },
        {
          name: "async",
          desc: "异步模式，如果设成异步模式value传递的是存储接口返回的fileID",
          type: "Boolean",
          options: "-",
          default: "false",
        },
        {
          name: "imgZoom",
          desc: "图片预览模式，图片默认缩小尺寸，点击放大",
          type: "Boolean",
          options: "-",
          default: "false",
        },
        {
          name: "asyncGetApi",
          desc: "异步模式的JSON存储方法，参数(fileID[String])",
          type: "Function",
          options: "-",
          default: 'import {getJSON} from "@/main/api/common',
        },
        {
          name: "saveJSON",
          desc: "异步模式的JSON获取方法，参数(fileID[String], JSON[Object])",
          type: "Function",
          options: "-",
          default: 'import {saveJSON} from "@/main/api/common',
        },
        {
          name: "autoSave",
          desc: "异步模式模式下自动保存",
          type: "Boolean",
          options: "-",
          default: "false",
        },
      ],
      events: [
        {
          name: "change",
          desc: "内容变化事件",
          param: "富文本内容[Array]/富文本id[String]",
        },
        {
          name: "textChange",
          desc: "纯文本变化事件",
          param: "提取纯文本[String]",
        },
      ],
      methods: [
        {
          name: "asyncSave",
          desc: "异步模式模式下手动保存方法，返回 Promise",
          param: "-",
          example: `this.$refs.myInput.asyncSave().then(() => alert("保存成功"))`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.explain_box span {
  color: red;
}
</style>
