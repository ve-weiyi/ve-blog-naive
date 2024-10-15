import request from "@/utils/request";
import type { FriendQueryReq, PageResp } from "./types";

/** "分页获取友链列表" */
export function findFriendListApi(data?: FriendQueryReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/friend_link/find_friend_list",
    method: "post",
    data: data,
  });
}
