<template>
  <div class="flex-col mainLayout">
    <!-- 头部 -->
    <Header />
    <div class="flex-1 flex-row">
      <!-- 菜单 -->
      <SubNav />
      <!-- 首页 -->
      <TheDashboard v-if="$route.path == '/'" class="flex-1" />
      <!-- 内页 -->
      <router-view v-else class="flex-1 main" />
        
    </div>
  </div>
</template>

<script>

export default {
  components: {
    TheDashboard: () => import("../components/TheDashboard.vue"),
  },
  data() {
    return {};
  },
  
};
</script>

<style scoped>
@import url(../assets/style.css);

/* 内容快 */
.mainLayout .main {
  padding: 0 20px;
}
</style>
