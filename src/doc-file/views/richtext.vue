<template>
  <div class="lib-content">
    <h2>同步编辑模式</h2>
    <div class="demo">
      <widget-richtext
        v-model='content'
      />
      <el-input
        type="textarea"
        :rows="6"
        :value="'富文本数据：'+JSON.stringify(content)"
      />
    </div>
    <div class="explain_box">
      <p> 默认同步模式，v-model传递的值为富文本数据（数组格式）</p>
    </div>

    <h2>异步编辑模式</h2>
    <div class="demo">
      <widget-richtext
        v-model='contentUrl'
        async
      />
      <el-input
        type="textarea"
        :rows="6"
        :value="'富文本url：'+contentUrl"
      />
    </div>
    <div class="explain_box">
      <span> async参数为true </span>时，v-model传递的值为富文本数据保存后的url（字符串格式），当内容编辑时自动保存；
      <p>异步模式需要定义asyncGetApi（请求文本）和asyncSaveApi（保存文本）接口，默认会从common中取getText和saveText：<code>import {getText, saveText} from "@/main/api/common";</code>
      </p>
    </div>

    <h2>只读模式</h2>
    <div class="demo">
      <widget-richtext
        readOnly
        :value='demoCont'
      />
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      content: [] ,
      contentUrl: '',
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
    };
  },

};
</script>

<style scoped>
.explain_box span{
  color: red;
}
</style>
