<template>
    <div>
        <h2>简介</h2>
        <p>图片上传组件。</p>
        <h2>示例</h2>
        <div class="demo">
            <el-form label-width="90px">
                <el-form-item label="上传图片：">
                    <upload-img v-model="fileList" />
                </el-form-item>
            </el-form>
        </div>
        <pre class="code">
            <textarea readonly>
            <upload-img v-model="fileList" />
            </textarea>
        </pre>
        <h2>配置</h2>
        <p>
            支持
            <a
                href="https://github.com/cutting-mat/uploader"
                target="_blank"
            >@cutting-mat/uploader</a>的所有配置
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
