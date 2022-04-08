<template>
    <image-lazyload :imgs='list' class="filePreview" />
</template>
<script>
import * as api from "../api/file";

export default {
    data() {
        return {
            list: []
        };
    },
    methods: {
        getData() {
            api.getPreviewPics({
                id:2516
            }).then((res) => {
                if(Array.isArray(res.data)){
                    this.list = res.data;
                }
                
            });
        },
    },
    created() {
        this.getData()
    },
};
</script>

<style scoped>
.filePreview{
    max-height: 500px;
}
</style>
