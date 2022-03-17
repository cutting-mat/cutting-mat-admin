<template>
    <div>
        <docpreviewer :imgs='list' />
    </div>
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
                let content = res.data.data;
                if(Array.isArray(content)){
                    this.list = content;
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
</style>
