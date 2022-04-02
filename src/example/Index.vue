<template>
  <router-view />
</template>

<script>
//import * as util from "@/main/assets/util";
import { routes } from "./index.js";
import "@/example/__assets/style.css"

export default {
  data() {
    return {
      routes
    };
  },
  methods: {},
  created() { },
};
</script>

<style>
</style>
