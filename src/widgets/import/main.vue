<template>
  <div
    class="flex-1"
    v-loading="loading"
  >
    <div class="export-parent">
      <div class="export-order">
        <ul>
          <li>1</li><span>上传文件</span>
          <li :class="{'active':type }">2</li><span>导入结果</span>
        </ul>
      </div>
      <!-- 第一步 -->
      <template v-if="!type && !message">
        <div
          class="flex-row export-div"
          v-show="downloadUrl"
        >
          <span class="export-col-left">
            <img
              class="iconImport"
              src='./assets/download.png'
            />
          </span>
          <div class="flex-1 export-col-right flex-row">
            <div class="export-right-cont flex-1">
              <p class="explain_box">填写导入{{name}} </p>
              <p class="explain_box">
                请按照数据模板的格式准备导入数据，模板中的表头名称不可更改，表头行不能删除
              </p>
            </div>
            <div class="export-right-btn">
              <el-button
                type="primary"
                @click="download"
                plain
              >下载模板</el-button>
            </div>
          </div>
        </div>
        <div
          class="export-div flex-row"
          style="margin-top: 30px"
        >
          <span class="export-col-left">
            <img
              class=" iconImport"
              src='./assets/upload.png'
            />
          </span>
          <div class="flex-1 export-col-right flex-row">
            <div class="export-right-cont flex-1">
              <p class="explain_box">
                上传填好的{{name}}表
              </p>
              <p class="explain_box">
                文件后缀名必须为xls 或xlsx （即Excel格式），文件大小不得大于10M
              </p>
              <div
                class="file-list"
                v-if="Array.isArray(fileList) && fileList.length>0 "
              >
                <div
                  class="flex-row align-center"
                  v-for="(item,i) in fileList"
                  :key="i"
                >
                  <div
                    class="file-name flex-1 el"
                    :title="item.name"
                  >{{item.name}}</div>
                </div>
              </div>
            </div>
            <div class="export-right-btn">
              <el-upload-plugin
                class="upload-demo"
                ref='upload'
                @change="handleChange"
                @error='handleError'
                @success='handleSuccess'
                :uploadFunc='actionUrl'
                :fileList="fileList"
                :data='params'
                :limit='2'
                :showFileList='false'
                :accept='accept'
                :autoUpload="false"
              >
                <el-button
                  slot="button"
                  type="primary"
                  plain
                >上传文件</el-button>
              </el-upload-plugin>
            </div>
          </div>
        </div>
        <div class="export-btn">
          <el-button
            type="primary"
            @click="next"
          >下一步</el-button>
        </div>
      </template>
      <!-- 第二步 -->
      <template v-else>
        <div v-if='type=="success"'>
          <div class="export-success">
            <i class="el-icon-success"></i>
          </div>
          <p class="typeTitle">批量导入完成</p>
          <p class="typeMes">{{message}}</p>
        </div>
        <div v-if='type=="error"'>
          <div class="export-error">
            <i class="el-icon-warning"></i>
          </div>
          <p class="typeTitle">批量导入失败,请下载文档查看详情</p>
          <p
            class="typeMes"
            @click="errorDocument"
          >文档.xlsx</p>
        </div>
        <div class="export-btn">
          <el-button
            type="primary"
            @click="again"
          >重新上传</el-button>
          <el-button
            type="primary"
            plain
            @click="cancelFunc"
          >取消</el-button>
        </div>
      </template>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    name: {
      type: String,
      required: false,
      default: "模板名称",
    },
    params: {
      type: Object,
      required: false,
      default: ()=>{},
    },
    // 模板下载地址
    downloadUrl: {
      type: String,
      required: false,
      default: null,
    },
    // 上传地址
    actionUrl: {
      type: Function,
      required: false,
    },
    // 取消回调
    cancelFunc: {
      type: Function,
      required: false,
      default() {
        return this.cancel();
      },
    },
  },
  data() {
    return {
      accept: ".xlsx,.xls",
      loading: false,
      fileList: [],
      type: null,
      message: null,
    };
  },
  methods: {
    handleChange(file) {
      this.fileList = file && file.name ? [file] : [];
    },
    cancel() {
      this.again();
      this.$router.go(-1);
    },
    errorDocument() {
      window.open(this.message);
    },
    // 重新上传
    again() {
      this.fileList = [];
      this.type = null;
      this.message = null;
    },
    // 下一步
    next() {
      if (Array.isArray(this.fileList) && this.fileList.length <= 0) {
        this.$message.error("请选择文件再进行下一步操作!");
        return;
      }
      this.$message.success("上传中，请稍后...");
      this.loading = true;
      this.$refs.upload.submit();
    },
    handleError() {
      this.loading = false;
    },
    download() {
      window.open(this.downloadUrl);
    },
    handleSuccess(res) {
      this.loading = false;
      this.type = res.code === 200 ? "success" : "error";
      this.message = res.msg || res.message; // 模板出错 msg || message 返回错误模板 url
    },
  },
};
</script>
<style scoped>
p {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.export-order {
  text-align: center;
  display: block;
  height: 150px;
}
.export-right-btn {
  margin-top: 18px;
  margin-right: 50px;
}
.export-right-cont{
  min-width: 440px;
  max-width: 680px;
}
.explain_box {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
.export-btn {
  margin: 30px auto;
  text-align: center;
}
/* 序号样式 strat*/
.export-order ul {
  display: inline-block;
  width: 38 0px;
  margin: 50px 0;
}
.export-order li {
  margin: 0 auto;
  display: inline-block;
  height: 32px;
  width: 32px;
  line-height: 32px;
  text-align: center;
}
.export-order span {
  margin-left: 8px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
}
.export-order li.active:last-of-type {
  background: #3468f8;
  color: #fff;
}
.export-order li:first-of-type {
  position: relative;
  background: #3468f8;
  border-radius: 50%;
  color: #fff;
}
.export-order li:first-of-type::after {
  display: block;
  position: absolute;
  content: "";
  left: 116px;
  top: 50%;
  width: 160px;
  height: 1px;
  background: rgba(0, 0, 0, 0.15);
}
.export-order li:last-of-type {
  background: #d8d8d8;
  border-radius: 50%;
  margin-left: 200px;
  color: #4a4a4a;
}
/* 序号样式 end*/
.export-col-left,
.export-col-right {
  position: relative;
  text-align: center;
}

.export-col-right {
  padding: 29px 0 31px 39px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 0 7px 7px 0;
  position: relative;
}
.export-col-right p {
  text-align: left;
}
.export-col-right p:first-of-type {
  font-size: 16px;
  color: #4a4a4a;
}
.export-div {
  height: 136px;
}
.export-col-left {
  display: inline-block;
  width: 172px;
  opacity: 1;
  background: #3468f8;
  border-radius: 6px 0 0 6px;
}
.export-col-left img {
  display: inline-block;
  position: absolute;
  width: 24px;
  color: #fff;
  font-size: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.export-right-btn >>> .upload-demo {
  text-align: right;
}
.iconImport {
  z-index: 9999;
  width: 24px;
  height: 24px;
}
.iconUpload {
  width: 24px;
  height: 24px;
  background-color: red;
}
.export-parent {
  border-radius: 4px;
}

.typeTitle {
  text-align: center;
  font-size: 24px;
}
.typeMes {
  text-align: center;
  font-size: 14px;
  color: #3468f8;
  cursor: pointer;
}
.file-list {
  background-color: rgba(240, 240, 239, 0.4);
  min-width: 380px;
  max-width: 510px;
  border-radius: 4px;
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  text-align: left;
}
.file-list .close-btn {
  color: #999;
  cursor: pointer;
  font-size: 16px;
}
.file-name {
  width: 210px;
}
/* 失败/成功图标 */
.export-success,
.export-error {
  font-size: 60px;

  text-align: center;
  line-height: 1;
}
.export-success {
  color: #52c41a;
}
.export-error {
  color: #e02020;
}
.export-parent .typeTitle {
  margin-top: 20px;
}
</style>