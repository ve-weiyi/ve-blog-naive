import request from "@/utils/request";
import type {
  GetAboutMeReq,
  GetAboutMeResp,
  GetBlogHomeInfoReq,
  GetBlogHomeInfoResp,
} from "@/api/types";

/** 网站 */
export const ConfigAPI = {
  /** 获取博客前台首页信息 */
  getBlogHomeInfo(params?: GetBlogHomeInfoReq): Promise<ApiResponse<GetBlogHomeInfoResp>> {
    return request({
      url: `/api/v1/blog`,
      method: "GET",
      params: params,
    });
  },

  /** 获取关于我的信息 */
  getAboutMe(params?: GetAboutMeReq): Promise<ApiResponse<GetAboutMeResp>> {
    return request({
      url: `/api/v1/blog/get_about_me`,
      method: "GET",
      params: params,
    });
  },
};
