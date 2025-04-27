import request from "@/utils/request";
import type {
  EmptyReq,
  GetAboutMeReq,
  GetAboutMeResp,
  GetBlogHomeInfoReq,
  GetBlogHomeInfoResp,
  GetTouristInfoResp,
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

  /** 获取游客身份信息 */
  getTouristInfoApi(data?: EmptyReq): Promise<IApiResponse<GetTouristInfoResp>> {
    return request({
      url: "/api/v1/tourist",
      method: "GET",
      data: data,
    });
  },

};
