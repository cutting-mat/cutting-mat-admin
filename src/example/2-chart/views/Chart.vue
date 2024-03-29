<template>
  <div class="example">
    <h2>简介</h2>
    <p>基于Echart封装的图表组件，支持线、柱两种类型</p>

    <h2>示例</h2>
    <div class="demo">
      <chart :data="data1" />
    </div>
    <pre class="code">
      <textarea readonly>
        <chart :data="data1" />
      </textarea>
    </pre>

    <h2>配置</h2>

    <h3>图表类型</h3>
    <p>chartType(String): 默认"bar"，可选："bar | line"</p>
    <div class="demo">
      <chart :data="data2" chartType="line" />
    </div>
    <pre class="code">
      <textarea readonly>
          <chart :data="data2" chartType="line" />
      </textarea>
    </pre>
    <div class="demo">
      <chart :data="data3" chartType="bar,line" />
    </div>
    <pre class="code">
      <textarea readonly rows="5">
        <chart
            :data="data3"
            chartType="bar,line"
        />
    </textarea>
    </pre>

    <h3>图例</h3>
    <p>legend(Array): 图例名称数组，默认不显示图例</p>

    <div class="demo">
      <chart :data="data1" :legend="['宣传教育']" />
    </div>
    <pre class="code">
      <textarea readonly rows="5">
          <chart
              :data="data1"
              :legend="['宣传教育']"
          />
      </textarea>
    </pre>

    <h3>颜色</h3>
    <p>colors(Array): 用于柱图背景/折线图线条和区域，默认使用全局色表。</p>
    <p>
      纯色模式格式：[色值]，例如
      <code>["#5B8FF9", "#61DDAA"]</code>
    </p>
    <p>
      渐变模式格式：[[渐变起始色值，渐变终止色值]]，例如
      <code>[ ["#286BF1", "#5CA4F8"], ["#FAD961", "#FAD961"], ]</code>
    </p>
    <p>
      阴影（仅适用于折线图）格式：[[线条色值，渐变起始色值，渐变终止色值]]，例如
      <code>
        [ ["rgba(43,95,212,0.65)", "rgba(58,156,235,0.1)", "rgba(43,95,212,1)"]
        ]
      </code>
    </p>

    <div class="demo">
      <chart :data="data3" :colors="colors" chartType="bar,line" />
    </div>
    <pre class="code">
      <textarea readonly rows="6">
          <chart
              :data="data3"
              :colors="colors"
              chartType="bar,line"
          />
      </textarea>
    </pre>

    <div class="demo">
      <chart :data="data2" :colors="colors2" chartType="line" />
    </div>
    <pre class="code">
      <textarea readonly rows="6">
          <chart
              :data="data2"
              :colors="colors2"
              chartType="line"
          />
      </textarea>
    </pre>

    <h3>坐标轴颜色</h3>
    <p>
      axisColor(String): 坐标轴，坐标轴刻度标签，坐标轴分割线相关颜色，默认 #000
    </p>

    <div class="demo">
      <chart :data="data1" :axisColor="'#2978ff'" />
    </div>
    <pre class="code">
      <textarea readonly rows="6">
          <chart
              :data="data1"
              :axisColor="'#2978ff'"
          />
      </textarea>
    </pre>

    <h3>柱状图堆叠</h3>
    <p>stack(Boolean): 多组柱图是否堆叠，默认false</p>

    <div class="demo">
      <chart :data="data3" :colors="colors" stack />
    </div>
    <pre class="code">
      <textarea readonly rows="6">
        <chart
            :data="data3"
            :colors="colors"
            stack
        />
        </textarea>
    </pre>

    <h3>柱状图圆角</h3>
    <p>radius(Number): 柱图圆角尺寸，默认2</p>

    <div class="demo">
      <chart :data="data3" :radius="10" />
    </div>
    <pre class="code">
      <textarea readonly rows="6">
      <chart
          :data="data3"
          :radius="10"
      />
      </textarea>
    </pre>
  </div>
</template>

<script>
import Chart from "@/core/components/Chart";
import { getChart } from "../api";

export default {
  components: {
    Chart,
  },
  data() {
    return {
      data1: [],
      data2: [],
      data3: [],
      colors: [
        ["#286BF1", "#5CA4F8"],
        ["#FAD961", "#FAD961"],
      ],
      colors2: [
        ["rgba(43,95,212,0.65)", "rgba(58,156,235,0.1)", "rgba(43,95,212,1)"],
        ["rgba(190,42,42,0.65)", "rgba(191,80,80,0.1)", "rgba(242,23,23,1)"],
      ],
    };
  },
  methods: {
    fetchData(params, opt) {
      return getChart(params, opt).then((res) => {
        return res.data;
      });
    },
    printit() {
      var element = document.getElementById("sfsfasdfsaf");
      var opt = {
        filename: "myfile.pdf",
        html2canvas: {
          scale: 2,
          width: element.offsetWidth,
          height: element.offsetHeight,
        },
      };
      html2pdf().set(opt).from(element).save();
    },
  },
  created() {
    this.fetchData(null, {
      cache: false,
    }).then((res) => {
      this.data1 = res;
    });
    this.fetchData(null, {
      cache: false,
    }).then((res) => {
      this.data2 = [res[0]];
    });
    this.fetchData(null, {
      cache: false,
    }).then((res) => {
      this.data3 = res;
    });
  },
};
</script>

<style scoped>
.demo {
  height: 300px;
}
</style>
