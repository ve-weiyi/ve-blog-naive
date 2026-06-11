import request from "@/utils/request";
import type {
  PageResult,
  QueryPageListReq,
} from "@/api/types";

/** 页面 */
export const PageAPI = {
  /** 获取页面列表 */
  queryPageList(data?: QueryPageListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/page/query_page_list`,
      method: "POST",
      data: data,
    });
  },
};
