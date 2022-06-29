<template>
  <div class="example">
    <h2>简介</h2>
    <p>基于Echart封装的饼状图组件</p>

    <h2>示例</h2>

    <div class="demo">
      <chart-pie :data="data" :radius="radius" />
    </div>
    <pre class="code">
            <textarea readonly>
            <chart-pie :data="data" :radius="radius" />
            </textarea>
        </pre>

    <h2>配置</h2>
    <h3>饼状图颜色</h3>
    <p>colors(Array):默认全局色表；</p>
    <p>
      colors示例：
      <code>["#5B8FF9", "#61DDAA"]</code>
    </p>
    <div class="demo">
      <chart-pie :data="data" :radius="radius" :colors="colors" />
    </div>
    <pre class="code">
            <textarea readonly rows="6">
            <chart-pie
                :data="data"
                :radius="radius"
                :colors="colors"
            />
            </textarea>
        </pre>

    <h3>图例颜色</h3>
    <p>legendColor(String): 图例字体颜色，默认 #000</p>
    <div class="demo">
      <chart-pie
        :data="data"
        :radius="radius"
        :colors="colors"
        :legendColor="'#2978ff'"
      />
    </div>
    <pre class="code">
            <textarea readonly rows="6">
            <chart-pie
                :data="data"
                :radius="radius"
                :colors="colors"
                :legendColor="'#2978ff'"
            />
            </textarea>
        </pre>

    <h3>两列图例</h3>
    <p>isMoreLegend(Boolean)：图列是否为两列，默认false</p>

    <div class="demo">
      <chart-pie
        :data="data"
        :radius="radius"
        :colors="colors"
        :isMoreLegend="isLegend"
      />
    </div>
    <pre class="code">
            <textarea readonly rows="6">
            <chart-pie
                :data="data"
                :radius="radius"
                :colors="colors"
                :isMoreLegend="isLegend"
            />
            </textarea>
        </pre>

    <h3>饼图圆心位置</h3>
    <p>center(Array)：设置饼图圆心位置，默认：[45%(水平),50%（垂直）]</p>

    <div class="demo">
      <chart-pie
        :data="data"
        :radius="radius"
        :colors="colors"
        :isMoreLegend="isLegend"
        :center="['32%', '50%']"
      />
    </div>
    <pre class="code">
            <textarea readonly rows="6">
            <chart-pie
                :data="data"
                :radius="radius"
                :colors="colors"
                :isMoreLegend="isLegend"
                :center="['32%', '50%']"
            />
            </textarea>
        </pre>

    <h3>大小 & 环形图</h3>
    <p>
      radius(Number/String)
      ：指定饼图外半径，支持百分数或数值，百分数表示相对容器高宽中较短一项的比例，数值单位'px'。默认"70%"。
    </p>
    <p>
      radius(Array)：传入长度为2的数组可以生成环形图，数组值分别指定环状内半径和外半径，数组元素同样支持Number/String两种格式。例如：
      <code>['50%', '70%']</code>
    </p>
    <div class="demo">
      <chart-pie :data="data" :radius="radiusArr" />
    </div>
    <pre class="code">
            <textarea readonly>
            <chart-pie :data="data" :radius="radiusArr" />
            </textarea>
        </pre>

    <h3>有引导的环形饼状图</h3>
    <p>isLableLine(Boolean)：是否有引导线，默认false</p>
    <div class="demo">
      <chart-pie :data="data" :radius="radiusArr" :isLableLine="isShowLine" />
    </div>
    <pre class="code">
            <textarea readonly>
            <chart-pie :data="data" :radius="radiusArr" :isLableLine="isShowLine" />
            </textarea>
        </pre>

    <h3>图例翻页的环形饼状图</h3>
    <p>isScroll(Boolean)：图例是否可以滚动，默认false</p>

    <div class="demo">
      <chart-pie
        :data="data1"
        :radius="radiusArr"
        :isLableLine="isShowLine"
        :isScroll="isScroll"
      />
    </div>
    <pre class="code">
            <textarea readonly>
            <chart-pie
                :data="data1"
                :radius="radiusArr"
                :isLableLine="isShowLine"
                :isScroll="isScroll"
            />
            </textarea>
        </pre>
  </div>
</template>

<script>
import ChartPie from "@/core/components/ChartPie";

//import * as util from "@/main/assets/util";

export default {
  components: {
    ChartPie,
  },
  data() {
    return {
      data: [
        {
          label: [
            "朝阳社区",
            "高碑店社区",
            "劲松党建",
            "龙山街道",
            "丰台小区",
            "金城小区",
          ],
          value: [335, 310, 310, 135, 135, 1548],
        },
      ],
      data1: [
        {
          label: [
            "朝阳社区",
            "高碑店社区",
            "劲松党建",
            "龙山街道",
            "丰台小区",
            "金城小区",
            "皇姑区",
            "铁西",
            "金普新区",
            "高新区",
            "沙河口区",
          ],
          value: [335, 310, 310, 135, 135, 1548, 400, 500, 600, 700, 800],
        },
      ],
      radius: [0, "70%"],
      radiusArr: ["50%", "70%"],
      radiuses: [100, 150],
      isLableLine: false,
      isMoreLegend: false, //图列显示多列
      isShowLine: true,
      isLegend: true,
      colors: [
        "#2A5D9D",
        "#198641",
        "#96BB2C",
        "#43135C",
        "#D51C8F",
        "#E55113",
      ], //饼状图颜色
      isScroll: true, //横向布局
    };
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.demo {
  height: 300px;
}
</style>
