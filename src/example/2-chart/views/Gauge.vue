<template>
  <div class="example">
    <h2>简介</h2>
    <p>基于Echart封装的仪表盘组件</p>

    <h2>示例</h2>

    <p>value(Number，必传)：仪表盘数值</p>
    <p>range(Array)：仪表盘数值范围，默认值：[ 0,100 ]</p>
    <div class="demo">
      <chart-gauge :value="data" />
    </div>
    <pre class="code">
        <textarea readonly>
            <chart-gauge :value="data" />
        </textarea>
    </pre>

    <h2>配置</h2>
    <h3>起止角度</h3>
    <p>
      angle(Array)：起止角度（ 默认值：[ 216 ,-36 ] ），示例：[ 180 ,0 ]，（
      注：以中心点左侧为180，右侧为0 ，上方为90° ）
    </p>
    <div class="demo">
      <chart-gauge :value="data" :angle="[180, 0]" />
    </div>
    <pre class="code">
        <textarea readonly>
            <chart-gauge :value="data" :angle="[180, 0]" />
        </textarea>
    </pre>

    <h3>自定义指针</h3>
    <p>pointerStyle(String)：指针样式。</p>
    <p>
      1、接收以'image://'开头的 url 或
      dataUrl。例如：'image://http://baidu.png'。
      <a
        target="_blank"
        style="color: #257ff7"
        href="https://echarts.apache.org/zh/option.html#series-gauge.pointer.icon"
        >详情</a
      >
    </p>
    <p>2、接收色值。例如：'#1ACCFF'、'rgba(0,0,0,1)'、'red'</p>
    <p>
      pointerLength(String/Number)：指针长度，可以是绝对数值，也可以是相对于半径的半分比，默认值
      '70%'
    </p>
    <div class="demo">
      <chart-gauge :value="data" pointerStyle="red" pointerLength="50%" />
    </div>
    <pre class="code">
        <textarea readonly>
            <chart-gauge :value="data" pointerStyle="red" pointerLength="50%" />
        </textarea>
    </pre>

    <h3>自定义表盘</h3>
    <p>
      dialBackground(String)：自定义表盘背景（注：若使用自定义表盘，除指针外，表盘刻度、表盘轴线等将不显示，以自定义表盘为准）
    </p>

    <div class="demo">
      <chart-gauge
        :dialBackground="dialBackground"
        :value="data"
        pointerStyle="red"
      />
    </div>
    <pre class="code">
          <textarea readonly>
              <chart-gauge :dialBackground="dialBackground" :value="data" pointerStyle="red" />
          </textarea>
      </pre>
  </div>
</template>

<script>
import ChartGauge from "@/core/components/ChartGauge";
//import * as util from "@/main/assets/util";
import dialBackground from "../assets/img/pointer.png?url";
import pointer from "../assets/img/pointer1.png?url";

export default {
  components: {
    ChartGauge,
  },
  data() {
    return {
      dialBackground,
      pointer,
      data: 0,
      colorList: ["#FAD961", "#F76B1C"],
    };
  },
  methods: {},
  created() {
    setInterval(() => {
      this.data = parseInt(Math.random() * 100);
    }, 3000);
  },
};
</script>

<style scoped>
.demo {
  height: 300px;
}
</style>
