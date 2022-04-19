<template>
  <div id="id_box" class="watermark_box">
    <slot name="content" style="position: absolute"></slot>
  </div>
</template>
<script>
import packageInfo from "./package.json";
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */
export default {
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
    switch: {
      type: Boolean,
      default: false,
      required: true,
    },
    state: {
      type: String,
      default: "global",
      required: false,
    },
    width: {
      type: Number,
      default: 120,
    },
    height: {
      type: Number,
      default: 120,
    },
    rotate: {
      type: Number,
      default: -15,
      required: false,
    },
    font: {
      type: String,
      default: "22px Vedana",
    },
    colors: {
      type: Array,
      required: false,
      default: () => {
        return ["rgba(100,100,100,0.15)"];
      },
    },
    textAlign: {
      type: String,
      default: "left",
      required: false,
    },
  },
  data() {
    return {
      id: null,
      watermark: {},
      DOM: document.body,
    };
  },
  created() {
    report.send(packageInfo);
  },
  mounted() {},
  methods: {
    setWatermark(str) {
      this.id = 0.12456489789441561;
      if (document.getElementById(this.id) !== null) {
        document.body.removeChild(document.getElementById(this.id));
      }

      //创建画布
      let can = document.createElement("canvas");

      can.width = this.width;
      can.height = this.height;
      let cans = can.getContext("2d");
      let color = this.colorDispose(cans, can);
      //旋转角度
      cans.rotate((this.rotate * Math.PI) / 180);
      cans.font = this.font;
      //设置字体的颜色
      cans.fillStyle = color;
      cans.textAlign = this.textAlign;
      //设置绘制文本的基线
      cans.textBaseline = "Middle";
      //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
      cans.fillText(str, can.width / 8, can.height / 2);

      let div = document.createElement("div");
      div.id = this.id;
      div.style.pointerEvents = "none";
      div.style.top = "0px";
      div.style.left = "0px";
      div.style.zIndex = "100000";

      div.style.background =
        "url(" + can.toDataURL("image/png") + ") left top repeat";
      div.style.position = this.state === "part" ? "absolute" : "fixed";
      div.style.height = this.DOM.offsetHeight + "px";
      div.style.width = this.DOM.offsetWidth + "px";
      this.DOM.appendChild(div);
    },
    // 该方法只允许调用一次
    initWatermark(str) {
      let id = this.id;
      setTimeout(() => {
        if (document.getElementById(id) === null) {
          id = this.setWatermark(str);
        }
      }, 500);
      window.onresize = () => {
        this.setWatermark(str);
      };
    },
    colorDispose(cans, can) {
      var gradient;

      if (this.colors.length > 1) {
        gradient = cans.createLinearGradient(0, 0, can.width, 0);
        // 遍历色号
        this.colors.map((e) => {
          gradient.addColorStop(e.value, e.color);
        });
      } else {
        gradient = this.colors[0];
      }
      return gradient;
    },
    removeWatermark() {
      if (document.getElementById(this.id) !== null) {
        this.DOM.removeChild(document.getElementById(this.id));
      }
    },
    switchDispose() {
      let val = this.switch;

      if (val) {
        this.initWatermark(this.text);
      } else {
        this.removeWatermark();
      }
    },
  },
  watch: {
    switch() {
      this.switchDispose();
    },
    state(newval) {
      this.DOM =
        newval === "part" ? document.getElementById("id_box") : document.body;
    },
  },
};
</script>
<style scoped>
.watermark_box {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: bisque;
}
</style>
