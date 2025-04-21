import request from "@/utils/request";
import type { FileBackDTO, MultiUploadFileReq, UploadFileReq } from "./types";

export const UploadAPI = {
  /** 上传文件 */
  uploadFileApi(data?: UploadFileReq): Promise<IApiResponse<FileBackDTO>> {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("file_path", data.file_path);

    return request({
      url: `/admin_api/v1/file/upload_file`,
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  /** 上传文件列表 */
  multiUploadFileApi(data?: MultiUploadFileReq): Promise<IApiResponse<FileBackDTO[]>> {
    const formData = new FormData();
    for (let i = 0; i < data.files.length; i++) {
      formData.append("files", data.files[i]);
    }
    formData.append("file_path", data.file_path);

    return request({
      url: `/admin_api/v1/file/multi_upload_file`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
