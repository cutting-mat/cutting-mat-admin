<template>
  <video :id="playerId"></video>
</template>

<script>
import packageInfo from "./package.json";
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default {
  name: `${packageInfo.name}__${packageInfo.version}`,
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    heartbeatSecond: {
      type: Number,
      default: 5, // s
    },
    seekAble: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      player: null,
      playerId: `player_${parseInt(Math.random() * 1e5)}`,
    };
  },
  methods: {},
  created() {
    report.send(packageInfo);
  },
  mounted() {
    const options = Object.assign({}, this.options);
    const player = new Plyr(`#${this.playerId}`, options);
    this.player = player;
    this.$nextTick(() => {
      this.$emit("ready", player);
    });
  },
};
</script>

<style scoped></style>
