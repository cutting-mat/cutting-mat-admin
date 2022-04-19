<template>
  <div class="example">
    <h2>简介</h2>
    <p>基于Quill的富文本编辑器组件</p>
    <h2>示例</h2>
    <p>默认v-model传递的值为富文本数据[Array]：</p>
    <div class="demo">
      <richtext v-model="content" @textChange="pureText = $event" />
      <el-input placeholder="富文本数据" :value="JSON.stringify(content)" />
      <el-input placeholder="纯文本数据" :value="pureText" />
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
      <el-form
        ref="editForm"
        :model="editForm"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="标题" prop="title">
          <richtext
            ref="inputTitle"
            v-model="editForm.title"
            :content="[
              {
                insert: '标题123',
              },
            ]"
            async
            required
            @ready="(rule) => (rules.title = rule)"
            @textChange="$refs.editForm.validateField('title')"
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="handleSubmit">表单提交</el-button>
        </el-form-item>
      </el-form>
      <el-input
        type="textarea"
        :rows="6"
        :value="'富文本 ID：' + editForm.title"
      />
    </div>
    <pre class="code">
      <textarea readonly rows="17">
      <el-form
        ref="editForm"
        :model="editForm"
        :rules="rules"
        label-width="80px"
        >
        <el-form-item label="标题" prop="title">
          <richtext
            ref="inputTitle"
            v-model="editForm.title"
            async
            required
            @ready="(rule) => (rules.title = rule)"
            @textChange="$refs.editForm.validateField('title')"
          />
        </el-form-item>
        ...
      </textarea>
      
    </pre>

    <p>只读模式：</p>
    <div class="demo">
      <richtext :value="demoCont" imgZoom read-only />
    </div>
    <pre class="code">
        <textarea readonly>
        <richtext :value="demoCont" imgZoom read-only />
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
export default {
  data() {
    return {
      content: [],
      pureText: null,
      editForm: {
        title: "",
      },
      rules: {},
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
          name: "content",
          desc: "异步模式的初始富文本数据",
          type: "Array",
          options: "-",
          default: "-",
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
        {
          name: "required",
          desc: "内容必填（将生成校验对象）",
          type: "Boolean",
          options: "-",
          default: "false",
        },
        {
          name: "label",
          desc: "控件名称，用于校验提示",
          type: "String",
          options: "-",
          default: "富文本",
        },
      ],
      events: [
        {
          name: "change",
          desc: "内容变化事件",
          param: "(异步模式富文本id[String], 富文本内容[Array])",
        },
        {
          name: "textChange",
          desc: "纯文本变化事件",
          param: "提取纯文本[String]",
        },
        {
          name: "ready",
          desc: "组件就绪回调，参数接收根据validType生成的验证规则，可直接用于el-form验证",
          param: "rule[Array]",
        },
      ],
      methods: [
        {
          name: "asyncSave",
          desc: "异步模式模式下手动保存方法，返回 Promise，resolve(text[String], response[Any])",
          param: "-",
          example: `this.$refs.myInput.asyncSave().then(() => alert("保存成功"))`,
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$message.success("验证通过");
          this.$refs.inputTitle.asyncSave().then(() => {
            this.$message.success("富文本保存成功");
            // send request
            this.$message.success("表单提交...");
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.explain_box span {
  color: red;
}
</style>
