import request from "@/utils/request";
import { BannerQueryReq, PageResp } from "./types";

/** 分页获取页面列表 */
export function findBannerListApi(data?: BannerQueryReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/banner/find_banner_list",
    method: "POST",
    data: data,
  });
}
