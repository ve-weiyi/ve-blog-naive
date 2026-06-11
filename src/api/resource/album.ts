import request from "@/utils/request";
import type {
  Album,
  GetAlbumReq,
  PageResult,
  QueryAlbumListReq,
  QueryAlbumPhotoListReq,
} from "@/api/types";

/** 相册 */
export const AlbumAPI = {
  /** 获取相册详情 */
  getAlbum(params?: GetAlbumReq): Promise<ApiResponse<Album>> {
    return request({
      url: `/api/v1/album/get_album`,
      method: "GET",
      params: params,
    });
  },

  /** 获取相册列表 */
  queryAlbumList(data?: QueryAlbumListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/album/query_album_list`,
      method: "POST",
      data: data,
    });
  },

  /** 获取相册下的照片列表 */
  queryAlbumPhotoList(data?: QueryAlbumPhotoListReq): Promise<ApiResponse<PageResult>> {
    return request({
      url: `/api/v1/album/query_album_photo_list`,
      method: "POST",
      data: data,
    });
  },
};
