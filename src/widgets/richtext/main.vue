<template>
  <div class="myTextEditor" :class="{ readOnly: readOnly, imgZoom: imgZoom }">
    <div class="flex-1" :id="editorId"></div>

    <!-- 隐藏上传图片 -->
    <uploader
      :triggerId="uploaderId"
      style="display: none"
      :multiple="false"
      :on-success="getImageSuccess"
    />

    <!-- 异步存取提示信息 -->
    <!-- <el-alert
      v-show="loading"
      class="_alert"
      title="消息提示的文案"
      type="info"
      show-icon
      :closable="false">
    </el-alert>-->

    <!-- 大图预览 -->
    <el-dialog
      width="800px"
      title="查看大图"
      :visible.sync="showPreview"
      append-to-body
    >
      <img :src="previewImg" style="display: block; margin: auto" />
    </el-dialog>
  </div>
</template>

<script>
const packageInfo = require("./package.json");
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */
import { getJSON, saveJSON } from "@/main/api/common";
import { throttle, formatDate } from "@/core";
const Quill = require("./lib/quill.min.js");
// 生成UUID
function randomUUID() {
  const path = formatDate(new Date(), "year");
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString(); // blob:https://xxx.com/b250d159-e1b6-4a87-9002-885d90033be3
  URL.revokeObjectURL(temp_url);
  return `${path}/${uuid.substring(uuid.lastIndexOf("/") + 1)}`;
}
// 提取富文本内容
function getText(richDate) {
  if (Array.isArray(richDate)) {
    return richDate
      .map((e) => {
        if (e.insert) {
          if (e.insert.split) {
            return e.insert.replace(/\n/g, "").trim();
          } else if (typeof e.insert === "object") {
            if (e.insert.image) {
              return "[图片]";
            }
            return "[媒体]";
          }
        } else {
          return "";
        }
      })
      .join("");
  } else {
    return "-";
  }
}

export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: [Array, String],
      required: false,
      default() {
        return this.async ? "" : [];
      },
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
    async: {
      type: Boolean,
      required: false,
      default: false,
    },
    imgZoom: {
      type: Boolean,
      required: false,
      default: false,
    },
    asyncGetApi: {
      type: Function,
      required: false,
      default: getJSON,
    },
    asyncSaveApi: {
      type: Function,
      required: false,
      default: saveJSON,
    },
    autoSave: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: "富文本",
    },
  },
  data() {
    return {
      loading: false,
      content: [],
      quill: null,
      editorId: "editor" + parseInt(Math.random() * 100000000),
      uploaderId: "uploader" + parseInt(Math.random() * 100000000),
      editorOption: {
        readOnly: false,
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["bold", "italic", "underline"],
            ["image"],
          ],
        },
        handlers: {
          image: (value) => {
            console.log(value);
          },
        },
      },
      showPreview: false, // 大图预览
      previewImg: null,
    };
  },
  computed: {
    textCont() {
      return getText(this.content);
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
    readOnly: {
      handler: function (readOnly) {
        this.$set(this.editorOption, "readOnly", !!readOnly);
      },
      immediate: true,
    },
  },
  methods: {
    valid() {
      return new Promise((resolve, reject) => {
        if (this.required && !this.textCont.length) {
          return reject(`请输入${this.label}`);
        }
        resolve();
      });
    },
    getImageSuccess(image) {
      if (image.url) {
        const index = this.quill.getSelection()
          ? this.quill.getSelection().index
          : this.quill.getLength();
        this.quill.insertEmbed(index, "image", image.url, "user");
      } else {
        console.warn(`richtext: 上传图片结果异常:`, image);
      }
    },
    getImage() {
      // ;
      const fileInput = document.getElementById(this.uploaderId);
      if (fileInput) {
        fileInput.click();
      } else {
        console.warn("没找到上传控件");
      }
    },
    init() {
      if (!this.quill) {
        this.quill = new Quill("#" + this.editorId, this.editorOption);
        // 上传图片扩展
        const toolbar = this.quill.getModule("toolbar");
        toolbar.addHandler("image", this.getImage);
        // 异步保存请求防抖
        const throttleSave = throttle(this.asyncSave, 500, 10000);
        // 初始内容
        if (this.async) {
          // 异步模式
          if (this.value && this.value.split) {
            this.urlDispose(this.value);
          }
        } else {
          // 同步模式
          if (Array.isArray(this.value)) {
            this.content = this.value;
            this.quill.setContents(this.content);
          }
        }
        // 内容编辑事件
        this.quill.on("text-change", () => {
          this.content = this.quill.getContents().ops;
          this.$nextTick(() => {
            if (this.async) {
              this.$emit("textChange", this.textCont);
              if (this.autoSave) {
                throttleSave(this.quill.getContents().ops);
              }
            } else {
              this.$emit("change", this.content);
              this.$emit("textChange", this.textCont);
            }
          });
        });
      }
    },
    asyncSave() {
      // 异步模式保存
      return new Promise((resolve, reject) => {
        if (!this.async || !this.content) {
          return reject(
            `this.async:${this.async};this.content:${this.content}`
          );
        }
        this.loading = true;
        this.asyncSaveApi(
          this.value && this.value.split
            ? this.value.replace(/^text\//, "")
            : randomUUID(),
          {
            content: JSON.stringify(this.content),
          }
        )
          .then((res) => {
            this.loading = false;
            if (res.data && res.data.split) {
              this.$nextTick(() => {
                this.$emit("change", res.data);
                resolve(this.textCont, res.data);
              });
            } else {
              reject(`保存失败: 接口数据异常`);
            }
          })
          .catch((err) => {
            this.loading = false;
            reject(`保存失败, err:`, err);
          });
      });
    },
    // 链接解析
    urlDispose(path) {
      this.asyncGetApi(path.replace(/^text\//, "")).then((res) => {
        try {
          let result = JSON.parse(res.data.content);
          this.content = result;
          this.$nextTick(() => {
            this.quill.setContents(this.content);

            this.$emit("textChange", this.textCont);
          });
        } catch (e) {
          console.warn("接口未正确返回 richtext/content");
        }
      });
    },
    ImgClick(e) {
      let el = e.target;
      const matchResult = el.matches(".myTextEditor.imgZoom img");
      while (el && !matchResult) {
        el = el.parentNode;
        if (this === el) {
          el = null;
        }
      }
      if (el) {
        this.showPreview = !!(this.previewImg = el.src);
      }
    },
  },
  created() {
    report.send(packageInfo);
    // 监听value第一次变化
    let unwatch = this.$watch("value", function (value) {
      if (this.quill && this.value) {
        // 只读模式监听数据变化
        if (!this.async && Array.isArray(value)) {
          // 同步模式
          this.quill.setContents(value);
        } else if (this.async && value.split) {
          // 异步模式
          this.urlDispose(value);
        }
        unwatch();
      }
    });
  },
  mounted: function () {
    this.init();
    // 图片点击放大
    if (this.imgZoom) {
      document.body.addEventListener("click", this.ImgClick);
    }
    // 校验规则
    this.$emit("ready", this.rules);
  },
  beforeDestroy() {
    if (this.imgZoom) {
      document.body.removeEventListener("click", this.ImgClick);
    }
  },
};
</script>

<style scoped>
@import url("./lib/quill.snow.css");

.myTextEditor {
  position: relative;
}
/* 工具栏 */
.myTextEditor >>> .ql-toolbar {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 9;
  line-height: 1.5;
  border-color: #dedede;
  border-radius: 4px;
}
.myTextEditor >>> .ql-container {
  min-height: 300px;
  border: 1px solid #dedede;
  border-radius: 4px;
  font-size: inherit;
}
/* 编辑区 */
.myTextEditor >>> .ql-editor {
  padding: 50px 10px 10px;
  line-height: 1.7;
}

/* 只读模式 */
.readOnly {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
}
.readOnly >>> .ql-toolbar {
  display: none;
}
.readOnly >>> .ql-container {
  border: 0;
}
.readOnly >>> .ql-editor {
  padding: 0;
}
/* 异步提示 */
.myTextEditor ._alert {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}
.readOnly.imgZoom >>> .ql-editor img {
  max-width: 70px;
  max-height: 70px;
  cursor: pointer;
}
</style>
