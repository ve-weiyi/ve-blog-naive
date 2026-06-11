import request from "@/utils/request";
import type {
  EmptyResp,
  GetTalkReq,
  LikeTalkReq,
  PageResult,
  QueryTalkListReq,
  Talk,
} from "@/api/types";

/** 说说 */
export const TalkAPI = {
  /** 获取说说详情 */
  getTalk(params?: GetTalkReq): Promise<ApiResponse<Talk>> {
    return request({
      url: `/api/v1/talk/get_talk`,
      method: "GET",
      params: params,
    });
  },

  /** 获取说说列表 */
  queryTalkList(data?: QueryTalkListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/talk/query_talk_list`,
      method: "POST",
      data: data,
    });
  },

  /** 点赞说说 */
  likeTalk(data?: LikeTalkReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/talk/like_talk`,
      method: "POST",
      data: data,
    });
  },
};
