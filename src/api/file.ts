import request from "@/utils/request";

export function uploadFileApi(
  data?: any,
): Promise<IApiResponse<any>> {
  const formData = new FormData();
  formData.append("label", data.label);
  formData.append("file", data.file);
  formData.append("file_size", data.file_size.toString());
  formData.append("file_md5", data.file_md5);

  return request({
    url: `/api/v1/upload/upload_file`,
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

/** 上传语言 */
export function uploadVoiceApi(label: string, formData: FormData): Promise<IApiResponse<any>> {
  return request({
    url: `/api/v1/voice`,
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
