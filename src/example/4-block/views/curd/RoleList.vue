<template>
  <div class="scrollbar blockLayout" v-loading="loading">
    <div class="flex-row toolBar">
      <div class="flex-1">
        <!-- title -->
      </div>
      <el-button
        v-auth="apiObj.create"
        type="primary"
        size="small"
        icon="el-icon-plus"
        @click="$refs.theCURD.create()"
        >添加</el-button
      >
    </div>
    <!-- list -->
    <CURD
      ref="theCURD"
      :api="apiObj"
      :model="model"
      :columns="columns"
      :dialogAttribute="{
        title: '角色信息',
      }"
      @loading-state="loading = $event"
    >
      <template v-slot:action="scope">
        <el-button
          v-auth="apiObj.update"
          size="mini"
          type="info"
          @click="$refs.theCURD.update(scope.row)"
          >编辑</el-button
        >
        <el-button
          v-auth="apiObj.delete"
          size="mini"
          type="danger"
          @click="$refs.theCURD.delete(scope.row)"
          >删除</el-button
        >
      </template>
    </CURD>
  </div>
</template>

<script>
import CURD from "@/core/components/CURD";
//import { util } from "@/core";
import * as api from "@/user/api/role";

export default {
  components: {
    CURD,
  },
  data() {
    return {
      apiObj: {
        list: api.list,
        detail: api.detail,
        create: api.add,
        update: api.edit,
        delete: api.remove,
      },
      loading: false,
      model: {
        name: {
          label: "角色名称",
          required: true,
        },
        remark: {
          label: "备注",
          controlOption: {
            type: "textarea",
            maxlength: "1000",
          },
        },
        resources: {
          type: "array",
          label: "权限",
          control: "TheResourcePicker",
          controlOption: {
            picker: true,
          },
        },
      },
      columns: [
        {
          label: "角色名称",
          prop: "name",
        },
        {
          label: "备注",
          prop: "remark",
        },
        {
          label: "操作",
          slotName: "action",
          width: 300,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
