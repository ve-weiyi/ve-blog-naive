import request from "@/utils/request";
import type { PageResp, Remark, RemarkQueryReq } from "./types";

/** "分页获取留言列表" */
export function findRemarkListApi(data?: RemarkQueryReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/remark/find_remark_list",
    method: "post",
    data: data,
  });
}

/** "创建留言" */
export function addRemarkApi(data?: Remark): Promise<IApiResponse<Remark>> {
  return request({
    url: "/api/v1/remark/add_remark",
    method: "post",
    data: data,
  });
}
