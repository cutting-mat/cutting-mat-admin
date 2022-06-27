<template>
  <div class="flex-col">
    <div :id="mapId" class="bmap flex-1"></div>
    <div class="titleBar">
      <i class="el-icon-location _icon" />
      选择地点
    </div>
    <div class="flex-1 scrollbar list" v-loading="loading">
      <div
        v-for="(item, index) in searchResults"
        :key="index"
        class="_item flex-row align-center"
        :class="{ cur: currentItem && currentItem.uid === item.uid }"
        @click="handleClick(item)"
      >
        <div class="flex-1">
          <div class="_title el">
            {{ item.title }}
          </div>
          <div class="el">
            {{ item.address }}
          </div>
        </div>
        <div class="_check"></div>
      </div>
    </div>
  </div>
</template>

<script>
import packageInfo from "./package.json";
import * as bmapsdk from "./assets/bmap-sdk";
let BMap;

export default {
  props: {
    center: {
      type: Object,
      required: false,
      default() {
        return {
          lng: 121.491,
          lat: 31.233,
        };
      },
    },
    zoomLevel: {
      type: Number,
      required: false,
      default: 14,
    },
  },
  data() {
    return {
      mapId: `BMap_${parseInt(Math.random() * 1e8)}`,
      loading: false,
      map: null,
      marker: null,
      searchResults: [],
      currentItem: null,
    };
  },
  watch: {
    center: {
      handler() {
        if (this.center && this.center.lng && this.center.lat) {
          this.handleCenter(this.center, this.handleSearch);
        }
      },
      deep: true,
    },
  },
  methods: {
    handleClick(item) {
      this.currentItem = item;
      this.setMaker(item.point);
      this.$emit("change", item);
    },
    setMaker(point) {
      // 创建地图标点
      if (this.marker) {
        this.map.removeOverlay(this.marker);
        this.marker = null;
      }
      this.marker = new BMap.Marker(new BMap.Point(point.lng, point.lat));
      this.map.addOverlay(this.marker);
      this.map.panTo(point);
    },
    handleCenter(point, callback) {
      // 坐标转换并定位
      bmapsdk.convertCoord([point], (data) => {
        if (data.status === 0) {
          console.log("转换完成", data.points);
          // 定位地图中心
          this.map.centerAndZoom(
            new BMap.Point(data.points[0].lng, data.points[0].lat),
            this.zoomLevel
          );
          // 添加点坐标
          this.setMaker(data.points[0]);
          if (typeof callback === "function") {
            callback(data.points[0]);
          }
        }
      });
    },
    handleSearch(baiduPoint) {
      // 监听center执行搜索
      if (this.loading) {
        return null;
      }
      this.loading = true;
      bmapsdk.search(baiduPoint, ["景点"]).then((result) => {
        this.searchResults = result;
        this.loading = false;
      });
    },
  },
  mounted() {
    // 初始化百度地图
    bmapsdk.init(packageInfo.AK, (BMapObj) => {
      BMap = BMapObj;

      this.map = new BMap.Map(this.mapId);
      if (this.center && this.center.lng && this.center.lat) {
        this.handleCenter(this.center, this.handleSearch);
      }
    });
  },
};
</script>

<style scoped>
.bmap >>> img {
  max-width: none;
}
.titleBar {
  font-size: 16px;
  color: #333;
  padding: 12px 20px;
}
.titleBar ._icon {
  color: #fe664e;
}

.list {
  background: #fff;
  box-sizing: border-box;
  padding: 0 1em;
}
.list ._item {
  border-bottom: 1px solid #f5f5f5;
  padding: 10px;
  color: #999;
  cursor: pointer;
}
.list ._title {
  font-size: 14px;
  color: #333;
}
.list ._check {
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.list .cur ._check {
  background: url(./assets/check.png) center center no-repeat;
  border-color: transparent;
}
</style>
