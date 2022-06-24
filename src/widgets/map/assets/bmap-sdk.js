// 调试开关
const DEBUG = process.env.NODE_ENV === "development";

// BMap 对象
let BMap;

/**
 * 初始化sdk
 * @param AK 百度AK
 * @param callback 初始化回调，参数 BMap 对象
 * */
export const init = (AK, callback) => {
  if (!(AK && AK.split)) {
    return console.warn("缺少参数：ak");
  }

  const scriptTagId = "bdmap-sdk-by-widget-bmap";
  if (document.getElementById(scriptTagId) || BMap || window.BMap) {
    // 如果已初始化，直接执行回调
    BMap = window.BMap;
    callback(BMap);
  } else {
    const initializeFun = `initialize_${parseInt(Math.random() * 1e8)}`;
    window[initializeFun] = () => {
      if (typeof callback === "function") {
        BMap = window.BMap;
        callback(BMap);
      }
    };
    const script = document.createElement("script");
    script.id = scriptTagId;
    script.src = `//api.map.baidu.com/api?v=3.0&ak=${AK}&callback=${initializeFun}`;
    document.body.appendChild(script);
  }
};

/**
 * 坐标转换(amap、tencent和mapabc地图)
 * @param pointArray 坐标数组：[{lng:'经度', lat: '纬度'}]
 * @param from 1：GPS标准坐标（wgs84）；2：搜狗地图坐标；3：火星坐标（gcj02），即高德地图、腾讯地图和MapABC等地图使用的坐标；
 * @param callback 回调函数，参数data:{status: 0, points: [{lng:'经度', lat: '纬度'}]}
 */
export const convertCoord = (pointArray, from, callback) => {
  if (!BMap) {
    return null;
  }
  if (typeof from === "function") {
    callback = from;
    from = 1;
  }
  if (Array.isArray(pointArray)) {
    const pointArr = pointArray.map((point) => {
      return new BMap.Point(point.lng, point.lat);
    });
    const convertor = new BMap.Convertor();
    convertor.translate(pointArr, from, 5, callback);
  }
};

let Geocoder; // 解析器实例

/**
 * 坐标解析
 * @param point 百度坐标
 * @param callback 回调函数，参数 解析结果
 * */

export const getLocation = (point, callback) => {
  if (!BMap || !point) {
    return null;
  }
  if (!Geocoder) {
    Geocoder = new BMap.Geocoder();
  }

  Geocoder.getLocation(point, callback);
};

/**
 * 本地搜索
 * @param location 地图实例 | centerPoint | 城市名称
 * @param keywords String | [String]
 * @param radius 搜索半径
 * */
export const search = function (location, keywords, radius) {
  const mapDotsData = {};

  return new Promise((resolve, reject) => {
    if (!location || !keywords) {
      return reject("mapSearch(): 缺少参数");
    }
    const instance = new BMap.LocalSearch(location, {
      pageCapacity: 50,
      onSearchComplete: function (results) {
        const keywordsArray = Array.isArray(keywords) ? keywords : [keywords];
        const resultsArray = Array.isArray(results) ? results : [results];

        DEBUG && console.log(keywordsArray, resultsArray);
        const promiseQueue = keywordsArray.map((e, i) => {
          return new Promise((resolve) => {
            const result = resultsArray[i];

            const totalPages = result.getNumPages();
            const currentPage = result.getPageIndex();

            for (let i = 0; i < result.getCurrentNumPois(); i++) {
              const addrInfo = result.getPoi(i);
              // 结果去重
              if (addrInfo.uid && !mapDotsData[addrInfo.uid]) {
                mapDotsData[addrInfo.uid] = addrInfo;
              }
            }
            DEBUG && console.log(currentPage, totalPages);
            if (currentPage < totalPages - 1) {
              // 自动翻页
              instance.gotoPage(currentPage + 1);
            } else {
              resolve(mapDotsData, instance);
            }
          });
        });

        Promise.all(promiseQueue).then(() => {
          resolve(Object.keys(mapDotsData).map((e) => mapDotsData[e]));
        });
      },
    });
    if (radius) {
      instance.searchNearby(keywords, location, radius);
    } else {
      instance.search(keywords);
    }
  });
};
