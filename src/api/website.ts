import request from "@/utils/request";
import { GetAboutMeReq, GetAboutMeResp, GetBlogHomeInfoReq, GetBlogHomeInfoResp, ReportReq, ReportResp } from "./types";

/** 获取博客前台首页信息 */
export function getBlogHomeInfoApi(data?: GetBlogHomeInfoReq): Promise<IApiResponse<GetBlogHomeInfoResp>> {
  return request({
    url: "/api/v1/blog",
    method: "GET",
    data: data,
  });
}

/** 获取关于我的信息 */
export function getAboutMeApi(data?: GetAboutMeReq): Promise<IApiResponse<GetAboutMeResp>> {
  return request({
    url: "/api/v1/blog/about_me",
    method: "GET",
    data: data,
  });
}

/** 访客上报 */
export function reportApi(data?: ReportReq): Promise<IApiResponse<ReportResp>> {
  return request({
    url: "/api/v1/report",
    method: "GET",
    data: data,
  });
}
