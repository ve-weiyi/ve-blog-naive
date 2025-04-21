import request from "@/utils/request";
import type {
  EmptyReq,
  GetAboutMeReq,
  GetAboutMeResp,
  GetBlogHomeInfoReq,
  GetBlogHomeInfoResp,
  ReportResp,
} from "./types";

export const WebsiteAPI = {
  /** 获取博客前台首页信息 */
  getBlogHomeInfoApi(data?: GetBlogHomeInfoReq): Promise<IApiResponse<GetBlogHomeInfoResp>> {
    return request({
      url: "/api/v1/blog",
      method: "GET",
      data: data,
    });
  },

  /** 获取关于我的信息 */
  getAboutMeApi(data?: GetAboutMeReq): Promise<IApiResponse<GetAboutMeResp>> {
    return request({
      url: "/api/v1/blog/about_me",
      method: "GET",
      data: data,
    });
  },


  /** 访客上报 */
  reportApi(data?: EmptyReq): Promise<IApiResponse<ReportResp>> {
    return request({
      url: "/api/v1/report",
      method: "GET",
      data: data,
    });
  },

};
