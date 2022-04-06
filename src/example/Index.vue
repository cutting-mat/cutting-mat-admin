<template>
  <div class="scrollbar">
    <div class="wrap" v-if="$route.path === '/example'">
      <el-table :data="routes" row-key="path" default-expand-all>
        <el-table-column label="组件名称">
          <template slot-scope="scope">
            <el-link @click="$router.push(scope.row)">
              <i class="el-icon-link"></i>
              {{ scope.row.name }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column label="path" prop="path"></el-table-column>
      </el-table>
    </div>

    <router-view v-else />
  </div>
</template>

<script>
//import * as util from "@/main/assets/util";
import { routes } from "./index.js";
// import "@/example/__assets/style.css"

export default {
  name: "example",
  data() {
    return {
      routes,
    };
  },

};
</script>

<style>
</style>
