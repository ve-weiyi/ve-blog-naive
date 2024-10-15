import request from "@/utils/request";
import type { GetAboutMeReq, GetAboutMeResp, GetBlogHomeInfoReq, GetBlogHomeInfoResp } from "./types";

/** "获取博客前台首页信息" */
export function getBlogHomeInfoApi(data?: GetBlogHomeInfoReq): Promise<IApiResponse<GetBlogHomeInfoResp>> {
  return request({
    url: "/api/v1/blog",
    method: "get",
    data: data,
  });
}

/** "获取关于我的信息" */
export function getAboutMeApi(data?: GetAboutMeReq): Promise<IApiResponse<GetAboutMeResp>> {
  return request({
    url: "/api/v1/blog/about_me",
    method: "get",
    data: data,
  });
}
