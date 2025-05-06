import request from "@/utils/request";
import type { FileBackVO, MultiUploadFileReq, UploadFileReq } from "./types";

export const FileAPI = {
  /** 上传文件列表 */
  multiUploadFileApi(data?: MultiUploadFileReq): Promise<IApiResponse<FileBackVO[]>> {
    return request({
      url: "/blog-api/v1/file/multi_upload_file",
      method: "POST",
      data: data,
    });
  },

  /** 上传文件 */
  uploadFileApi(data?: UploadFileReq): Promise<IApiResponse<FileBackVO>> {
    return request({
      url: "/blog-api/v1/file/upload_file",
      method: "POST",
      data: data,
    });
  },
};
