import request from "@/utils/request";
import type {
  CreateCommentReq,
  EmptyResp,
  LikeCommentReq,
  PageResult,
  QueryCommentListReq,
  QueryCommentReplyListReq,
  UpdateCommentReq,
} from "@/api/types";

/** 评论 */
export const CommentAPI = {
  /** 获取评论列表 */
  queryCommentList(data?: QueryCommentListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/comment/query_comment_list`,
      method: "POST",
      data: data,
    });
  },

  /** 获取评论回复列表 */
  queryCommentReplyList(data?: QueryCommentReplyListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/comment/query_comment_reply_list`,
      method: "POST",
      data: data,
    });
  },

  /** 获取最新评论列表 */
  queryRecentCommentList(data?: QueryCommentListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/comment/query_recent_comment_list`,
      method: "POST",
      data: data,
    });
  },

  /** 创建评论 */
  createComment(data?: CreateCommentReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/comment/create_comment`,
      method: "POST",
      data: data,
    });
  },

  /** 点赞评论 */
  likeComment(data?: LikeCommentReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/comment/like_comment`,
      method: "POST",
      data: data,
    });
  },

  /** 更新评论 */
  updateComment(data?: UpdateCommentReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/comment/update_comment`,
      method: "PUT",
      data: data,
    });
  },
};
