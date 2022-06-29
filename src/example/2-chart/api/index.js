import { axiosInstance as instance } from "@/core";

// 大屏模拟数据
export const getChart = (params, opt) => {
  return instance.get(`/data/chart`, { params }, opt);
};
