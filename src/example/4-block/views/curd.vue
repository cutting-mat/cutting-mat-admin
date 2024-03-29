<template>
  <div>
    <h2>简介</h2>
    <p>
      增删改查组件用于快速实现数据模型的CURD功能。只需要定义请求函数、列表配置、数据模型配置，就可以获得完整的CURD功能，省掉低级重复工作。
    </p>
    <h2>示例</h2>
    <div>
      <el-button @click="$router.push({ name: '增删改查-基本应用' })"
        >基本应用</el-button
      >
      <el-button @click="$router.push({ name: '增删改查-Table高级配置' })"
        >Table高级配置</el-button
      >
      <el-button @click="$router.push({ name: '增删改查-From高级配置' })"
        >From高级配置</el-button
      >
      <el-button @click="$router.push({ name: '增删改查-多级表头' })"
        >多级表头</el-button
      >
    </div>
    <h3>基础扩展能力</h3>
    <p>
      列表基于`el-table`实现，支持el-table的所有属性和方法，支持el-table-colums的所有属性，支持通过slot自定义单元格。
    </p>
    <p>
      表单基于`el-form`实现，支持el-form的所有属性和方法，支持el-form的校验和自定义校验功能。
    </p>
    <p>弹窗基于`el-dialog`实现，支持el-dialog的所有属性。</p>
    <h3>高级扩展能力</h3>
    <p>支持表单嵌入自定义组件（组件要实现`v-model`指令）</p>
    <p>TODO: 支持表单组件联动</p>
    <p>TODO: 支持多级表头</p>

    <h2>配置</h2>
    <el-table :data="props">
      <el-table-column prop="name" label="属性"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="options" label="可选"></el-table-column>
      <el-table-column prop="default" label="默认"></el-table-column>
    </el-table>

    <h2>事件</h2>
    <p>
      支持el-table的所有事件，详见<el-link
        type="primary"
        href="https://element.eleme.cn/#/zh-CN/component/table#table-events"
        target="_blank"
        >Element文档</el-link
      >
    </p>
    <el-table :data="events">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="param" label="参数"></el-table-column>
    </el-table>
    <h2>方法</h2>
    <p>
      通过'table'命名空间支持el-table的所有方法，例如`this.$refs.curd.table.clearSelection()`。详见<el-link
        type="primary"
        href="https://element.eleme.cn/#/zh-CN/component/table#table-methods"
        target="_blank"
        >Element文档</el-link
      >
    </p>
    <p>
      通过'form'命名空间支持el-form的所有方法，例如`this.$refs.curd.form.validate()`。详见<el-link
        type="primary"
        href="https://element.eleme.cn/#/zh-CN/component/form#form-methods"
        target="_blank"
        >Element文档</el-link
      >
    </p>
    <el-table :data="methods">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="example" label="示例"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import CURD from "@/core/components/CURD";
//import * as util from "@/main/assets/util";

export default {
  components: {
    CURD,
  },
  data() {
    return {
      editForm: {
        album: "",
      },
      props: [
        {
          name: "api",
          desc: "必传。增删改查axios请求函数。list: 列表请求函数；detail：详情请求函数，当`getItemFromDetaiApi:true`时必须；create：新增请求函数；update：更新请求函数；delete：删除请求函数；",
          type: "Object",
          options: "-",
          default: "-",
        },
        {
          name: "model",
          desc: "必传。数据模型配置，控制动态表单生成、表单校验、自定义控件交互。对象的key对应数据的key，key的值为该数据的具体描述，详见【model props】",
          type: "Object",
          options: "-",
          default: "-",
        },
        {
          name: "columns",
          desc: "必传。列表配置，详见【columns props】",
          type: "Array",
          options: "-",
          default: "-",
        },
        {
          name: "dataKey",
          desc: "数据主键，默认'id'。影响`api.detail()`和`api.delete()`方法的传参。",
          type: "String",
          options: "-",
          default: "-",
        },
        {
          name: "immediate",
          desc: "是否创建组件后立即请求列表",
          type: "Boolean",
          options: "-",
          default: "true",
        },
        {
          name: "queryParam",
          desc: "初始加载及调用`search()`方法时将做为api.list()的请求参数。",
          type: "Object",
          options: "-",
          default: "-",
        },
        {
          name: "getItemFromDetaiApi",
          desc: "调用`update()`方法时是否通过`api.detail()`请求详情数据",
          type: "Boolean",
          options: "-",
          default: "false",
        },
        {
          name: "tableAttribute",
          desc: "el-table组件属性，用于实现列表，详见[Element文档](https://element.eleme.cn/#/zh-CN/component/table#table-attributes)",
          type: "Object",
          options: "-",
          default: "-",
        },
        {
          name: "dialogAttribute",
          desc: "el-dialog组件属性，用于实现弹出编辑，详见[Element文档](https://element.eleme.cn/#/zh-CN/component/dialog#attributes)",
          type: "Object",
          options: "-",
          default: "-",
        },
        {
          name: "formAttribute",
          desc: "el-form组件属性，用于实现编辑表单，详见[Element文档](https://element.eleme.cn/#/zh-CN/component/form#form-attributes)",
          type: "Object",
          options: "-",
          default: "-",
        },
      ],
      events: [
        {
          name: "loading-state",
          desc: "当请求状态发生变化时触发事件",
          param: "state[Boolean]",
        },
      ],
      methods: [
        {
          name: "create",
          desc: "弹出创建数据表单弹窗",
          param: "-",
          example: `this.$refs.curd.create()`,
        },
        {
          name: "update",
          desc: "弹出数据编辑表单",
          param: "item[Object]",
          example: `this.$refs.curd.update(data)`,
        },
        {
          name: "delete",
          desc: "删除数据",
          param: "item[Object]",
          example: `this.$refs.curd.delete(data)`,
        },
        {
          name: "search",
          desc: "配合`queryParam`属性实现列表筛选",
          param: "-",
          example: `this.$refs.curd.search()`,
        },
      ],
    };
  },
  methods: {},
  created() {},
};
</script>

<style scoped></style>
