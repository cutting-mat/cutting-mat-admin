<!--  -->
<template>
    <div>
        <h2>引用方式</h2>
        <p>
            "chart-wave": (resolve) => require([
            "@/__components/chart-wave/index.vue", ], resolve)
        </p>
        <h2>基础样式</h2>
        <div class="flex-col">
            <div class="flex-1">
                <p>liquidWidth：需要传的水球图直径，默认：300</p>
                <p>colors(Array)：水球波纹的颜色，不传是设有默认色值</p>
            </div>
        </div>
        <div class="demo">
            <div class="block">
                <div class="chartDemoWrap flex-row justify-center align-center">
                    <chart-wave :liquidWidth="liquidWidth" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            liquidWidth: 300,
            colors: ["rgba(31,108,222,0.6)", "rgba(46,206,250,0.6)"],
        };
    },
    created() {},
    mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.chartDemoWrap {
    height: 380px;
    width: 800px;
    margin: auto;
    background: #fff;
    box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.1);
}
._configTitle {
    font-weight: bold;
}
</style>