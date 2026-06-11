import request from "@/utils/request";
import type {
  ArticleDetails,
  EmptyResp,
  GetArticleReq,
  LikeArticleReq,
  PageResult,
  QueryArchivedArticleListReq,
  QueryArticleListReq,
  QueryRecommendArticleListReq,
} from "@/api/types";

/** 文章 */
export const ArticleAPI = {
  /** 获取文章详情 */
  getArticle(params?: GetArticleReq): Promise<ApiResponse<ArticleDetails>> {
    return request({
      url: `/api/v1/article/get_article`,
      method: "GET",
      params: params,
    });
  },

  /** 获取归档文章列表 */
  queryArchivedArticleList(data?: QueryArchivedArticleListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/article/query_archived_article_list`,
      method: "POST",
      data: data,
    });
  },

  /** 获取文章列表 */
  queryArticleList(data?: QueryArticleListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/article/query_article_list`,
      method: "POST",
      data: data,
    });
  },

  /** 获取推荐文章列表 */
  queryRecommendArticleList(data?: QueryRecommendArticleListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/article/query_recommend_article_list`,
      method: "POST",
      data: data,
    });
  },

  /** 点赞文章 */
  likeArticle(data?: LikeArticleReq): Promise<ApiResponse<EmptyResp>> {
    return request({
      url: `/api/v1/article/like_article`,
      method: "POST",
      data: data,
    });
  },
};
