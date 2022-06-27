import { getSuffix } from "@/core";

const fileTypes = {
    img: {
        type: ["png", "jpg", "jpeg"],
        album: `./img/img.png`,// 
    },
    word: {
        type: ["doc", "docx"],
        album: `./img/word.png`,// 
    },
    excel: {
        type: ["xls", "xlsx"],
        album: `./img/excel.png`,// require("./img/excel.png"),
    },
    ppt: {
        type: ["ppt", "pptx"],
        album: `./img/ppt.png`,// require("./img/ppt.png"),
    },
    pdf: {
        type: ["pdf"],
        album: `./img/pdf.png`,// require("./img/pdf.png"),
    },
    video: {
        type: ["mp4", "wmv", "mov"],
        album: `./img/video.png`,// require("./img/video.png"),
    },
    txt: {
        type: ["txt"],
        album: `./img/txt.png`,// require("./img/txt.png"),
    },
    rar: {
        type: ["rar", "zip"],
        album: `./img/rar.png`,// require("./img/rar.png"),
    },
    default: {
        type: [],
        album: `./img/other.png`,// require("./img/other.png")
    }
};

/**
 * 根据文件url获得封面图
 * @param url[String] 文件url
 * @param previewImg[Boolean] 图片文件是否直接预览
 * @return fileAlbum[src] 封面图地址
*/
export const dynamicAlbum = (url, previewImg) => {
    let fileAlbum = fileTypes.default.album;

    if (!url) {
        console.warn('dynamicAlbum()参数异常：', url, previewImg)
        return fileAlbum
    }

    let fileExt = getSuffix(url);
    const typeIndex = Object.keys(fileTypes).findIndex(type => {
        return fileTypes[type].type.findIndex(ext => ext === fileExt) !== -1
    })

    if (typeIndex !== -1) {
        let fileType = Object.keys(fileTypes)[typeIndex];
        if (fileType === 'img' && previewImg) {
            fileAlbum = url
        } else {
            fileAlbum = (fileTypes[fileType].album)
        }

    }
    return fileAlbum;
}

