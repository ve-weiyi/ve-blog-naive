import request from "@/utils/request";
import type {
  BindUserEmailReq,
  BindUserPhoneReq,
  BindUserThirdPartyReq,
  DeactivateAccountReq,
  DeactivateAccountResp,
  EmptyResp,
  GetUserLikeReq,
  GetUserLikeResp,
  GetUserProfileReq,
  GetUserProfileResp,
  ReactivateAccountReq,
  ReactivateAccountResp,
  UnbindUserThirdPartyReq,
  UpdateUserProfileReq,
  UpdateUserProfileResp,
} from "@/api/types";

/** 个人中心 */
export const MeAPI = {
  /** 绑定邮箱 */
  bindUserEmail(data?: BindUserEmailReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/user/me/bind_user_email`,
      method: "POST",
      data: data,
    });
  },

  /** 绑定手机号 */
  bindUserPhone(data?: BindUserPhoneReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/user/me/bind_user_phone`,
      method: "POST",
      data: data,
    });
  },

  /** 绑定第三方平台账号 */
  bindUserThirdParty(data?: BindUserThirdPartyReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/user/me/bind_user_third_party`,
      method: "POST",
      data: data,
    });
  },

  /** 停用账号（进入冷静期） */
  deactivateAccount(data?: DeactivateAccountReq): Promise<ApiResponse<DeactivateAccountResp>> {
    return request({
      url: `/api/v1/user/me/deactivate_account`,
      method: "POST",
      data: data,
    });
  },

  /** 获取用户点赞集合 */
  getUserLike(params?: GetUserLikeReq): Promise<ApiResponse<GetUserLikeResp>> {
    return request({
      url: `/api/v1/user/me/get_user_like`,
      method: "GET",
      params: params,
    });
  },

  /** 获取当前用户信息 */
  getUserProfile(params?: GetUserProfileReq): Promise<ApiResponse<GetUserProfileResp>> {
    return request({
      url: `/api/v1/user/me/get_user_profile`,
      method: "GET",
      params: params,
    });
  },

  /** 恢复账号（冷静期内） */
  reactivateAccount(data?: ReactivateAccountReq): Promise<ApiResponse<ReactivateAccountResp>> {
    return request({
      url: `/api/v1/user/me/reactivate_account`,
      method: "POST",
      data: data,
    });
  },

  /** 解绑第三方平台账号 */
  unbindUserThirdParty(data?: UnbindUserThirdPartyReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/user/me/unbind_user_third_party`,
      method: "POST",
      data: data,
    });
  },

  /** 更新当前用户信息 */
  updateUserProfile(data?: UpdateUserProfileReq): Promise<ApiResponse<UpdateUserProfileResp>> {
    return request({
      url: `/api/v1/user/me/update_user_profile`,
      method: "PUT",
      data: data,
    });
  },
};
