<!--  -->
<template>
    <div>
        <h2>简介</h2>
        <p>基于Echart封装的水球图组件</p>
        <h2>示例</h2>
        <p>liquidWidth：需要传的水球图直径，默认：300</p>
        <p>colors(Array)：水球波纹的颜色</p>
        <div class="demo">
            <chart-wave :liquidWidth="300" />
        </div>
        <div class="code">
            <textarea readonly>
            <chart-wave :liquidWidth="300" />
            </textarea>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    created() { },
    mounted() { },
};
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>