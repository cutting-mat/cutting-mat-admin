<template>
    <div>
        <h2>简介</h2>
        <p>单图上传组件，用于上传头像或封面。</p>
        <h2>示例</h2>
        <div class="demo">
            <upload-single-img
                :value="{ url: editForm.album }"
                placeholder="上传封面"
                @change="(file) => { editForm.album = file.url; $refs.editForm.validateField('album') }"
            />
        </div>
        <div class="code">
            <textarea readonly>
            <upload-single-img
                :value="{ url: editForm.album }"
                placeholder="上传封面"
                @change="(file) => { editForm.album = file.url; $refs.editForm.validateField('album') }"
            />
            </textarea>
        </div>
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
    </div>
</template>

<script>
//import * as util from "@/main/assets/util";

export default {
    data() {
        return {
            editForm: {
                album: ''
            },
            props: [{
                name: 'value',
                desc: '图片数据，必须含有url字段',
                type: 'Object',
                options: '-',
                default: '-'
            }, {
                name: 'placeholder',
                desc: '上传占位文字',
                type: 'String',
                options: '-',
                default: '上传'
            }],
            events: [
                {
                    name: 'change',
                    desc: '上传图片成功事件',
                    param: 'file[Object]',
                }
            ]
        };
    },
    methods: {},
    created() {

    },
};
</script>

<style scoped>
</style>
