<template>
  <div class="lib-content">
    <el-button
      @click="globalWatermark"
      globalWatermark="primary"
    >全局水印</el-button>
    <el-button
      @click="partWatermark"
      type="primary"
    >局部水印</el-button>
    <el-button
      @click="del"
      type="danger"
    >删除水印</el-button>
    <br /> <br />
    <!-- global 全局水印 part 局部水印 -->
    <watermark
      text='水印文本'
      :state='stateFlag'
      :width='180'
      :height='100'
      :switch='switchFlag'
      :colors="[{value:0,color:'orange'},{value:0.3,color:'pink'},{value:0.4,color:'blue'},{value:0.6,color:'red'}]"
    >

      <div slot='content'>
        填充内容填充内容填充内容填充内容填充内容填充内容
        填充内容填充内容填充内容填充内容
      </div>
    </watermark>
    <br>
    <div class="param_box">
        <span>（注意演示时，全局、局部来回切换时；需先点击删除水印）</span>
    </div>
      <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="参数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="describe"
        label="说明"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="select"
        label="可选值">
      </el-table-column>
      <el-table-column
        prop="default"
        label="默认值">
      </el-table-column>

    </el-table>
    <div class="param_box">

      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switchFlag: false,
      stateFlag: "global",
      list:[
        {
          name:'text',
          describe:'水印文字描述',
          type:'String',
          select:'必填',
          default:'--'
        },
        {
          name:'switch',
          describe:'开关状态',
          type:'Boolean',
          select:'必填',
          default:'false'
        },
        {
          name:'state',
          describe:'全局或局部水印',
          type:'String',
          select:'非必填， global为全局水印，part为局部水印',
          default:'global'
        },
        {
          name:'colors',
          describe:'文字颜色',
          type:'Array',
          select:"非必填， 单色号格式['#2c3e50']，渐变色格式，[{value:0,color:'orange'},{value:0.3,color:'pink'}]",
          default:'["rgba(100,100,100,0.15)"]'
        },
        {
          name:'width',
          describe:'宽度',
          type:'Number',
          select:'非必填',
          default:120
        },
        {
          name:'height',
          describe:'高度',
          type:'Number',
          select:'非必填',
          default:120
        },
        {
          name:'rotate',
          describe:'倾斜角度',
          type:'Number',
          select:'非必填',
          default:-15
        },
        {
          name:'textAlign',
          describe:'对齐方式',
          type:'String',
          select:'非必填',
          default:'left'
        },
        {
          name:'font',
          describe:'文字大小，字体',
          type:'String',
          select:'非必填',
          default:'22px Vedana'
        },
      ]
    };
  },
  mounted() {},
  methods: {
    // 全局水印
    globalWatermark() {
      if (this.switchFlag) {
        this.$message.success("已经创建水印了,如需重新创建，请先删除原水印");
        return;
      }
      this.switchFlag = true;
      this.stateFlag = "global";
    },
    // 局部水印
    partWatermark() {
      if (this.switchFlag) {
        this.$message.success("已经创建水印了,如需重新创建，请先删除原水印");
        return;
      }
      this.switchFlag = true;
      this.stateFlag = "part";
    },
    del() {
      this.switchFlag = false;
    },
  },
};
</script>
<style scoped>
#div_Box {
  width: 400px;
  height: 400px;
  border: 1px solid red;
}
.param_box span {
  color: red;
}
.lib-content{
  padding-bottom: 80px;
}
</style>
