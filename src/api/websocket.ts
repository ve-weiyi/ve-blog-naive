import request from "@/utils/request";

/** WebSocket消息 */
export function webSocketApi(data?: any): Promise<IApiResponse<any>> {
  return request({
    url: "/api/v1/websocket",
    method: "GET",
    data: data,
  });
}
