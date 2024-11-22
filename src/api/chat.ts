import request from "@/utils/request";
import { ChatMessageQueryReq, PageResp } from "./types";

/** 查询聊天记录 */
export function getChatMessagesApi(data?: ChatMessageQueryReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/chat/messages",
    method: "POST",
    data: data,
  });
}
