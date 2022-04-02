<template>
  <div class="myTextEditor" :class="{ readOnly: readOnly }">
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
  </div>
</template>

<script>
const packageInfo = require("./package.json");
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */
import { getJSON, saveJSON } from "@/main/api/common";
import { throttle } from "@/core";
const Quill = require("./lib/quill.min.js");

function randomUUID() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString(); // blob:https://xxx.com/b250d159-e1b6-4a87-9002-885d90033be3
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
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
  },
  data() {
    return {
      loading: false,
      content: [],
      quill: null,
      editorId: "editor" + parseInt(Math.random() * 1e8),
      uploaderId: "uploader" + parseInt(Math.random() * 1e8),
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
    };
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
    getImageSuccess(image) {
      if (image.url) {
        const index = this.quill.getSelection()
          ? this.quill.getSelection().index
          : this.quill.getLength();
        this.quill.insertEmbed(index, "image", image.url, "user");
      } else {
        console.warn(`richtext: 上传图片结果异常:`, image)
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
        const throttleSave = throttle(this.saveString, 500, 10000);

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
              throttleSave(this.quill.getContents().ops);
            } else {
              this.$emit("change", this.content);
            }
          });
        });
      }
    },
    saveString() {
      // 异步模式保存
      if (!this.async || !this.content) {
        return null;
      }
      this.loading = true;
      this.asyncSaveApi(this.value && this.value.split ? this.value.replace(/^text\//, '') : randomUUID(), {
        content: JSON.stringify(this.content)
      })
        .then((res) => {
          this.loading = false;

          if (res.data && res.data.split) {
            this.$nextTick(() => {
              this.$emit("change", res.data);
            });
          } else {
            console.warn(`richtext 保存失败`)
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
    // 链接解析
    urlDispose(path) {
      this.asyncGetApi(path.replace(/^text\//, '')).then((res) => {
        let result = JSON.parse(res.data && res.data.content);
        if (Array.isArray(result)) {
          this.content = result;
          this.$nextTick(() => {
            this.quill.setContents(this.content);
            this.$emit("change", result);
          });
        }

      });
    },
  },
  created() {
    report.send(packageInfo);

    // 监听value第一次变化
    let unwatch = this.$watch('value', function (value) {
      if (this.quill && this.value) {
        // 只读模式监听数据变化
        if (!this.async && Array.isArray(value)) {
          // 同步模式
          this.quill.setContents(value);
        } else if (this.async && value.split) {
          // 异步模式
          this.urlDispose(value);
        }

        unwatch()
      }
    })
  },
  mounted: function () {
    this.init();
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

.myTextEditor >>> .ql-editor img {
  margin: 1em auto;
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
</style>
