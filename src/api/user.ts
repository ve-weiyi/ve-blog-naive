import request from "@/utils/request";
import type { EmptyReq, EmptyResp, UpdateUserAvatarReq, UpdateUserInfoReq, UserInfoResp, UserLikeResp } from "./types";

export const UserAPI = {
  /** 获取用户信息 */
  getUserInfoApi(data?: EmptyReq): Promise<IApiResponse<UserInfoResp>> {
    return request({
      url: "/api/v1/user/get_user_info",
      method: "GET",
      data: data,
    });
  },

  /** 获取用户点赞列表 */
  getUserLikeApi(data?: EmptyReq): Promise<IApiResponse<UserLikeResp>> {
    return request({
      url: "/api/v1/user/get_user_like",
      method: "GET",
      data: data,
    });
  },

  /** 修改用户头像 */
  updateUserAvatarApi(data?: UpdateUserAvatarReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/user/update_user_avatar",
      method: "POST",
      data: data,
    });
  },

  /** 修改用户信息 */
  updateUserInfoApi(data?: UpdateUserInfoReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/user/update_user_info",
      method: "POST",
      data: data,
    });
  },

};
