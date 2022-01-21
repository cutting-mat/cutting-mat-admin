import { instance } from '@/core';


//上传图片base64
export const uploadImg = params => {
    return instance.post(`/file/upload/base64`, params)
}

//文件上传地址
export const upload = params => {
    return instance.post(`/file/upload`, params, {
        headers: { "Content-Type": "multipart/form-data" }
    })
}

// JSON保存/编辑
export const saveText = params => {
    return instance.post(`${params.id ? '/oss/' + params.id : '/oss/text'}`, params)
}

// JSON获取
export const getText = params => {
    return instance.get(`/oss/${params}`)
}
