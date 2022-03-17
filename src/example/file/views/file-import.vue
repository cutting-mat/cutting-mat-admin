<template>
  <div>
    <import
      :name='name'
      :downloadUrl='downloadUrl'
      :actionUrl='actionUrl'
      :params='params'
      :cancelFunc='cancel'
      ref="import"
    />
    <div class="downloadUrl_box">
      此组件 <span> 依赖 @cutting-mat/el-upload 组件</span>；<span>name</span> 做为文件名称；<span>params</span>为导入接口携带的参数; <span>cancelFunc</span>取消方法，非必传，默认清空数据并且返回上一页 ；<span>downloadUrl</span> 参数为模板下载地址；<span>actionUrl（上传接口）</span> 点击下一步传输文件，且处理数据。
    </div>
  </div>
</template>
<script>
import { upload } from "@/main/api/common";

export default {
  data() {
    return {
      name: "文件名称",
      downloadUrl: "www.baidu.com", // 模板下载地址
      actionUrl: upload, // 上传接口地址;
      params: { type: 1 },
    };
  },
  methods: {
    cancel(){
      console.log('触发取消');
      // 清空数据方法
      this.$refs.import.again();
    },

  },
  created() {},
};
</script>

<style scoped>
.downloadUrl_box {
  padding-left: 80px;
}
.downloadUrl_box span {
  color: #ff0000;
}
</style>
