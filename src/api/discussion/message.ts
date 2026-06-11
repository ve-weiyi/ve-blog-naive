import request from "@/utils/request";
import type {
  CreateMessageReq,
  EmptyResp,
  PageResult,
  QueryMessageListReq,
} from "@/api/types";

/** 留言 */
export const MessageAPI = {
  /** 获取留言列表 */
  queryMessageList(data?: QueryMessageListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/message/query_message_list`,
      method: "POST",
      data: data,
    });
  },

  /** 创建留言 */
  createMessage(data?: CreateMessageReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/message/create_message`,
      method: "POST",
      data: data,
    });
  },
};
