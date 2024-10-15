import request from "@/utils/request";
import type { EmptyReq, EmptyResp, UpdateUserAvatarReq, UpdateUserInfoReq, UserInfoResp, UserLikeResp } from "./types";

/** "获取用户信息" */
export function getUserInfoApi(data?: EmptyReq): Promise<IApiResponse<UserInfoResp>> {
  return request({
    url: "/api/v1/user/get_user_info",
    method: "get",
    data: data,
  });
}

/** "获取用户点赞列表" */
export function getUserLikeApi(data?: EmptyReq): Promise<IApiResponse<UserLikeResp>> {
  return request({
    url: "/api/v1/user/get_user_like",
    method: "get",
    data: data,
  });
}

/** "修改用户头像" */
export function updateUserAvatarApi(data?: UpdateUserAvatarReq): Promise<IApiResponse<EmptyResp>> {
  return request({
    url: "/api/v1/user/update_user_avatar",
    method: "post",
    data: data,
  });
}

/** "修改用户信息" */
export function updateUserInfoApi(data?: UpdateUserInfoReq): Promise<IApiResponse<EmptyResp>> {
  return request({
    url: "/api/v1/user/update_user_info",
    method: "post",
    data: data,
  });
}
