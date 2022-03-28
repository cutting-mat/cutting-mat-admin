<template>
  <div class="content page"
       id='waterRegion'>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
const packageInfo = require('./package.json')
import { report } from "@/widgets/__support/report";
/* ↑↑↑ 组件上报，勿删 ↑↑↑ */
import Wave from './assets/wave'
import Retina from './assets/retina'

export default {
  name: `${packageInfo.name}__${packageInfo.version}`,
  props: {
      /**
       * 水球的直径
       */
      liquidWidth:{
          type:Number,
          default:()=>300
      },
      /**
       * 
       * 水球图默认的色值
       */
      colors:{
          type:Array,
          default:()=>['rgba(31,108,222,0.6)', 'rgba(46,206,250,0.6)']
      },
      /**
       * 
       * 水球图默认的色值
       */
      rangeValue:{
          type:Number,
          default:()=>50
      },
  },
  data() {
    return {
      state: {},
      isDrawContainer: false,
       domid: `domid-${parseInt(Math.random() * 1e8)}`,
    }
  },
  methods: {
    draw() {
      const ctx = this.canvas.getContext('2d')
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      if (!this.isDrawContainer) {
        this.drawContainer(ctx)
      }
      this.drawBackground(ctx)
      if (this.nowRange <= this.rangeValue) {
        this.nowRange += 1
      }
      if (this.nowRange > this.rangeValue) {
        this.nowRange -= 1
      }
      this.wave2.update({
        nowRange: this.nowRange,
      })
      this.wave2.draw(ctx)
      this.wave1.update({
        nowRange: this.nowRange,
      })
      this.wave1.draw(ctx)
      window.requestAnimationFrame(this.draw)
    },

    drawContainer(ctx) {
      const type = 'circle'
      if (type === 'circle') {
        this.drawCircle(ctx)
      }
    },

    drawBackground(ctx) {
      const r = this.radius
      const cR = r
      ctx.beginPath()
      ctx.arc(r, r, cR, 0, 2 * Math.PI)
      const grd = ctx.createRadialGradient(r, r, r / 2, r, r, r)
      // grd.addColorStop(0, 'rgba(127, 57, 242, 0');
      // grd.addColorStop(1, 'rgba(255, 195, 103, 0.11)');
      ctx.fillStyle = grd
      ctx.fill()
    },

    drawCircle(ctx) {
      const r = this.canvasWidth / 2
      const lineWidth = 12
      const cR = r - lineWidth
      ctx.lineWidth = lineWidth
      ctx.beginPath()
      ctx.arc(r, r, cR, 0, 2 * Math.PI)
      ctx.strokeStyle = this.wave1.colors[0]
      ctx.stroke()
      ctx.clip()
      this.isDrawContainer = true
    },
  },
  created() {
    report.send(packageInfo);
  },
  mounted() {
    setTimeout(() => {
      const canvas = this.$refs.canvas
      canvas.height = this.liquidWidth     //waterRegion.clientHeight || waterRegion.clientHeight //300;
      canvas.width =  this.liquidWidth   //waterRegion.clientWidth || waterRegion.offsetWidth
      this.canvas = canvas
      this.canvasWidth = canvas.width
      this.canvasHeight = canvas.height
      this.radius = this.canvasWidth / 2
      // 高清适配
      Retina.run(canvas)
      this.nowRange = 0
      // this.rangeValue = 60
      this.wave1 = new Wave({
        canvasWidth: this.canvasWidth, // 轴长
        canvasHeight: this.canvasHeight, // 轴高
        waveWidth: 0.015, // 波浪宽度,数越小越宽
        waveHeight: 15, // 波浪高度,数越大越高
        colors: this.colors, // 波浪颜色
        xOffset: 0, // 初始偏移
        speed: 0.03, // 速度
      })
      this.wave2 = new Wave({
        canvasWidth: this.canvasWidth, // 轴长
        canvasHeight: this.canvasHeight, // 轴高
        waveWidth: 0.015, // 波浪宽度,数越小越宽
        waveHeight: 15, // 波浪高度,数越大越高
        colors: this.colors, // 波浪颜色
        xOffset: 2, // 初始偏移
        speed: 0.03, // 速度
      })
      this.draw()
    }, 500)
  },
}
</script>

<style scoped>
.page {
  width: 300px;
  height: 300px;
}
/* .widget-chart-line {
  width: 100%;
  height: 100%;
} */
</style>
