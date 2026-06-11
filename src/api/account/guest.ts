import request from "@/utils/request";
import type {
  GetGuestReq,
  GetGuestResp,
} from "@/api/types";

/** 访客管理 */
export const GuestAPI = {
  /** 获取游客信息 */
  getGuest(params?: GetGuestReq): Promise<ApiResponse<GetGuestResp>> {
    return request({
      url: `/api/v1/guest/get_guest`,
      method: "GET",
      params: params,
    });
  },
};
