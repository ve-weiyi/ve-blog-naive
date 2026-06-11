/**
 * API 响应码枚举
 */
export const enum ApiCodeEnum {
  /** 成功 */
  SUCCESS = 200,

  /** 请求参数错误 */
  BAD_REQUEST = 400,

  /** 用户未登录 */
  UNAUTHORIZED = 401,

  /** 访问令牌无效或过期 */
  ACCESS_TOKEN_INVALID = 402,

  /** 无权限访问 */
  FORBIDDEN = 403,
}
