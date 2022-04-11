<template>
  <Guard :appId="appId" class="loginPage" />
</template>

<script>
import { Guard } from "@authing/vue-ui-components";
import "@authing/vue-ui-components/lib/index.min.css";
// 控制面板
// https://console.authing.cn/console/6252d526e6b08aea8bf410c8/

export default {
  components: {
    Guard,
  },
  data() {
    return {
      appId: "6252d527586a4cec0b8064a4",
    };
  },
};
</script>
<style>
#authing_guard_container {
  height: 100%;
}
#custom-css {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
#custom-css .g2-view-container {
  margin: auto;
  border: 1px solid #dedede;
}
</style>
