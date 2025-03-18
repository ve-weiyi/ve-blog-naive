import request from "@/utils/request";
import type {
  BindUserEmailReq,
  EmptyReq,
  EmptyResp,
  LoginReq,
  LoginResp,
  OauthLoginReq,
  OauthLoginUrlResp,
  RegisterReq,
  ResetPasswordReq,
  UserEmailReq,
} from "./types";

export const AuthAPI = {
  /** 登录 */
  loginApi(data?: LoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: "/api/v1/login",
      method: "POST",
      data: data,
    });
  },

  /** 第三方登录授权地址 */
  oauthAuthorizeUrlApi(data?: OauthLoginReq): Promise<IApiResponse<OauthLoginUrlResp>> {
    return request({
      url: "/api/v1/oauth_authorize_url",
      method: "POST",
      data: data,
    });
  },

  /** 第三方登录 */
  oauthLoginApi(data?: OauthLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: "/api/v1/oauth_login",
      method: "POST",
      data: data,
    });
  },

  /** 注册 */
  registerApi(data?: RegisterReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/register",
      method: "POST",
      data: data,
    });
  },

  /** 发送注册账号邮件 */
  sendRegisterEmailApi(data?: UserEmailReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/send_register_email",
      method: "POST",
      data: data,
    });
  },

  /** 重置密码 */
  resetPasswordApi(data?: ResetPasswordReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/user/reset_password",
      method: "POST",
      data: data,
    });
  },

  /** 发送重置密码邮件 */
  sendResetEmailApi(data?: UserEmailReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/user/send_reset_email",
      method: "POST",
      data: data,
    });
  },


  /** 绑定邮箱 */
  bindUserEmailApi(data?: BindUserEmailReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/bind_user_email",
      method: "POST",
      data: data,
    });
  },

  /** 注销 */
  logoffApi(data?: EmptyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/logoff",
      method: "POST",
      data: data,
    });
  },

  /** 登出 */
  logoutApi(data?: EmptyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/logout",
      method: "POST",
      data: data,
    });
  },

  /** 发送绑定邮箱验证码 */
  sendBindEmailApi(data?: UserEmailReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/send_bind_email",
      method: "POST",
      data: data,
    });
  },

};
