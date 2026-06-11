import request from "@/utils/request";
import type {
  PageResult,
  QueryCategoryListReq,
} from "@/api/types";

/** 分类 */
export const CategoryAPI = {
  /** 获取分类列表 */
  queryCategoryList(data?: QueryCategoryListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/category/query_category_list`,
      method: "POST",
      data: data,
    });
  },
};
