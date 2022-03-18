<template>
    <div>
        <h2>简介</h2>
        <p>
            基于<a href="https://github.com/cutting-mat/uploader" target="_blank">@cutting-mat/uploader</a>实现的文件上传组件。
        </p>
        <h2>示例</h2>
        <div class="demo">
            <upload-file v-model="fileList" />
        </div>
        <div class="code">
            <textarea readonly>
            <upload-file v-model="fileList" />
            </textarea>
        </div>
        <h2>配置</h2>
        <p>
            支持
            <a href="https://github.com/cutting-mat/uploader" target="_blank">@cutting-mat/uploader</a>的所有配置
        </p>
        
    </div>
</template>

<script>
//import * as util from "@/main/assets/util";

export default {
    data() {
        return {
            fileList: []
        };
    },
    methods: {},
    created() {

    },
};
</script>

<style scoped>

</style>
