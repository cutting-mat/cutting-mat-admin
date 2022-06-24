<template>
  <div id="sfsfasdfsaf">
    <h2>简介</h2>
    <p>基于Echart封装的图表组件，支持线、柱两种类型</p>
    <el-button @click="printit">打印</el-button>

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
    <div class="flex-row">
      <div class="flex-1">
        <div class="demo">
          <chart :data="data2" chartType="line" />
        </div>
        <pre class="code">
          <textarea readonly>
              <chart :data="data2" chartType="line" />
          </textarea>
        </pre>
      </div>
      <div class="flex-1">
        <div class="demo">
          <chart
            :data="data3"
            :colors="colors"
            chartType="bar,line"
            :legend="['宣传', '教育']"
          />
        </div>
        <pre class="code">
          <textarea readonly>
            <chart
                :data="data3"
                :colors="colors"
                chartType="bar,line"
                :legend="['宣传', '教育']"
            />
        </textarea>
        </pre>
      </div>
    </div>

    <h3>图例</h3>
    <p>legend(Array): 图例名称数组，默认不显示图例</p>

    <div class="demo">
      <chart :data="data1" :legend="['宣传教育']" />
    </div>
    <pre class="code">
      <textarea readonly>
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
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      data1: [
        {
          label: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          value: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
          ],
        },
      ],
      data2: [
        {
          label: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          value: [
            12.0, 14.9, 17.0, 23.2, 55.6, 76.7, 135.6, 162.2, 135.6, 162.7,
            135.2, 162.6,
          ],
        },
      ],
      data3: [
        {
          label: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          value: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 82.2, 32.6, 20.0, 6.4, 3.3,
          ],
        },
        {
          label: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          value: [
            13.0, 26.9, 37.0, 24.2, 35.6, 79.7, 82.6, 109.2, 62.6, 30.0, 16.4,
            13.3,
          ],
        },
      ],
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
};
</script>

<style scoped></style>
