import request from "@/utils/request";
import type {
  EmptyReq,
  EmptyResp,
  GetTouristInfoResp,
  UpdateUserAvatarReq,
  UpdateUserBindEmailReq,
  UpdateUserBindPhoneReq,
  UpdateUserInfoReq,
  UpdateUserPasswordReq,
  UserInfoResp,
  UserLikeResp,
} from "./types";

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

  /** 修改用户绑定邮箱 */
  updateUserBindEmailApi(data?: UpdateUserBindEmailReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/user/update_user_bind_email",
      method: "POST",
      data: data,
    });
  },

  /** 修改用户绑定手机号 */
  updateUserBindPhoneApi(data?: UpdateUserBindPhoneReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/user/update_user_bind_phone",
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

  /** 修改用户密码 */
  updateUserPasswordApi(data?: UpdateUserPasswordReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/user/update_user_password",
      method: "POST",
      data: data,
    });
  },

  /** 获取游客身份信息 */
  getTouristInfoApi(data?: EmptyReq): Promise<IApiResponse<GetTouristInfoResp>> {
    return request({
      url: "/api/v1/get_tourist_info",
      method: "GET",
      data: data,
    });
  },
};
