import request from "@/utils/request";
import { ChatQueryReq, PageResp } from "./types";

/** 查询聊天记录 */
export function getChatRecordsApi(data?: ChatQueryReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/chat/records",
    method: "POST",
    data: data,
  });
}
