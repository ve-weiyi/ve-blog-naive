import request from "@/utils/request";
import type {
  EmptyReq,
  EmptyResp,
  LoginReq,
  LoginResp,
  OauthLoginReq,
  OauthLoginUrlResp,
  RegisterReq,
  ResetPasswordReq,
  SendEmailVerifyCodeReq,
  SendPhoneVerifyCodeReq,
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

  /** 发送邮件验证码 */
  sendEmailVerifyCodeApi(data?: SendEmailVerifyCodeReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/send_email_verify_code",
      method: "POST",
      data: data,
    });
  },

  /** 发送手机验证码 */
  sendPhoneVerifyCodeApi(data?: SendPhoneVerifyCodeReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/api/v1/send_phone_verify_code",
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
};
