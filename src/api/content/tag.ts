import request from "@/utils/request";
import type {
  PageResult,
  QueryTagListReq,
} from "@/api/types";

/** 标签 */
export const TagAPI = {
  /** 获取标签列表 */
  queryTagList(data?: QueryTagListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/tag/query_tag_list`,
      method: "POST",
      data: data,
    });
  },
};
