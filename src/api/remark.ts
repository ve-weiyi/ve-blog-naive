import request from "@/utils/request";
import type { NewRemarkReq, PageResp, QueryRemarkReq, Remark } from "./types";

export const RemarkAPI = {
  /** 分页获取留言列表 */
  findRemarkListApi(data?: QueryRemarkReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/blog-api/v1/remark/find_remark_list",
      method: "POST",
      data: data,
    });
  },

  /** 创建留言 */
  addRemarkApi(data?: NewRemarkReq): Promise<IApiResponse<Remark>> {
    return request({
      url: "/blog-api/v1/remark/add_remark",
      method: "POST",
      data: data,
    });
  },
};
