import { axiosInstance as instance } from "@/core";

// 文件预览
export const getPreviewPics = params => {
    return instance.get(`/file/images`, { params })
}