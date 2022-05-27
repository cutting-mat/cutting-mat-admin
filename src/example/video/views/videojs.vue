<template>
  <div>
    <h2>简介</h2>
    <p>videojs视频播放。</p>
    <h2>示例</h2>
    <div class="demo">
      <div style="max-width: 600px; margin: auto">
        <video-player :options="videoOptions" @ready="handleReady" />
      </div>
    </div>
    <pre class="code">
            <textarea readonly rows="9">
            <video-player
                :options="videoOptions"
                @ready="player => player.src({
                    src: "https://static.refined-x.com/static/1080p-watermark.mp4",
                    type: "video/mp4"
                })"
            />
            </textarea>
        </pre>

    <h2>配置</h2>
    <el-table :data="props">
      <el-table-column prop="name" label="属性"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="options" label="可选"></el-table-column>
      <el-table-column prop="default" label="默认"></el-table-column>
    </el-table>

    <h2>事件</h2>
    <el-table :data="events">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="param" label="参数"></el-table-column>
    </el-table>
    <h2>方法</h2>
    <el-table :data="methods">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="example" label="示例"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from "vue";
// import * as util from "@/main/assets/util";
import { BusinessVideo } from "@cutting-mat/widgets";
Vue.component("video-player", BusinessVideo);

export default {
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
      },
      props: [
        {
          name: "options",
          desc: "videojs配置，官方文档：https://videojs.com/getting-started",
          type: "Object",
          options: "-",
          default: "-",
        },
        {
          name: "heartbeatSecond",
          desc: "心跳间隔秒数",
          type: "Number",
          options: "-",
          default: "5",
        },
        {
          name: "seekAble",
          desc: "是否可以拖拽快进",
          type: "Boolean",
          options: "-",
          default: "true",
        },
      ],
      methods: [
        {
          name: "markerPlugin",
          desc: "为进度条添加打点信息。来自插件：https://github.com/tower1229/videojs-plugin-marker",
          param: "打点信息[Array]",
          example: `player.markerPlugin({
                        //  打点信息
                        markers: [
                            {
                                offset: 2
                            },
                            {
                                offset: 10,
                                data: {
                                  content: 'content2'
                                },
                                onClick(e) {
                                    e.stopPropagation()     // marker点击事件，可以屏蔽原进度条动作
                                    alert('marker click!')
                                }
                            },
                        ]
                    });`,
        },
      ],
      events: [
        {
          name: "ready",
          desc: "videojs就绪事件",
          param: "player[videojs实例]",
        },
        {
          name: "heartbeat",
          desc: "心跳事件",
          param: "currentTime[Number]",
        },
      ],
    };
  },
  methods: {
    handleReady(player) {
      player.src({
        src: "https://static.refined-x.com/static/1080p-watermark.mp4",
        type: "video/mp4",
        // src: "http://ogn0m4it0.bkt.clouddn.com/58IzAY_GglrObBBbbD98wrHIbLk%3D/llhpmYRGVWfZL8dyCPXwCwKovI9R.m3u8",
        // type: "application/x-mpegURL",
      });

      player.markerPlugin({
        //  打点信息
        markers: [
          {
            offset: 2,
          },
          {
            offset: 10,
          },
        ],
      });
    },
  },
  created() {},
};
</script>

<style scoped></style>
