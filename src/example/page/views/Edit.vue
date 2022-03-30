<template>
    <div>
        <ToolBar>
            <el-button type="primary" size="small" :loading="loading" @click="save">
                <i class="iconfont">&#xe7a8;</i>
                保存
            </el-button>
        </ToolBar>
        <!-- main -->
        <el-form
            class="wrap"
            ref="editForm"
            :model="editForm"
            :rules="rules"
            label-width="80px"
            status-icon
        >
            <el-form-item label="标题：" prop="title">
                <el-input v-model="editForm.title"></el-input>
            </el-form-item>
            <el-form-item label="简介：" prop="descriptin">
                <el-input v-model="editForm.descriptin" type="textarea" :autosize="{ minRows: 4 }"></el-input>
            </el-form-item>
            <el-form-item label="封面图：" prop="album">
                <upload-single-img
                    :value="{ url: editForm.album }"
                    placeholder="上传封面"
                    @change="(res) => { editForm.album = res.url; $refs.editForm.validateField('album') }"
                />
            </el-form-item>
            <el-form-item label="内容：" prop="content">
                <richtext
                    v-model="editForm.content"
                    async
                    @change="$refs.editForm.validateField('content')"
                />
            </el-form-item>
            <el-form-item label="排序号：">
                <el-input-number v-model="editForm.index" controls-position="right" :min="0"></el-input-number>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            loading: false,
            editForm: {
                title: null,
                descriptin: null,
                album: null,
                content: '',
                index: null
            },
            rules: {
                title: [
                    { required: true, message: '请输入标题', trigger: 'blur' },
                    { max: 100, message: '超过字数上限100，请删减文字', trigger: 'blur' }
                ],
                descriptin: [
                    { required: true, message: '请输入简介', trigger: 'blur' },
                    { max: 1000, message: '超过字数上限1000，请删减文字', trigger: 'blur' }
                ],
                album: [
                    { required: true, message: '请上传封面', trigger: 'blur' },
                ],
                content: [
                    { required: true, message: '请输入内容', trigger: 'blur' },
                ]
            }
        };
    },
    methods: {
        save() {
            this.$refs.editForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.$message.success(`保存成功`)
                    }, 1000)
                }
            })
        }
    },
    created() {

    },
};
</script>

<style scoped>
</style>
