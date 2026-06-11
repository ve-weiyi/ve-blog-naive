import request from "@/utils/request";
import type {
  PageResult,
  QueryFriendListReq,
} from "@/api/types";

/** 友链 */
export const FriendAPI = {
  /** 获取友链列表 */
  queryFriendList(data?: QueryFriendListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/friend/query_friend_list`,
      method: "POST",
      data: data,
    });
  },
};
