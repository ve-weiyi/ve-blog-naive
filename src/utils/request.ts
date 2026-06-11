import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import qs from "qs";
import { ApiCodeEnum } from "@/enums/api";
import { APP_NAME, AuthStorage } from "./auth";
import { useUserStore } from "@/store/modules/user";

const HeaderAppName = "App-Name";
const HeaderTimestamp = "Timestamp";
const HeaderXDeviceId = "X-Device-Id";
const HeaderXDeviceToken = "X-Device-Token";

const HeaderUid = "Uid";
const HeaderToken = "Token";

// 已重试的请求，防止无限循环
const retriedConfigs = new WeakSet<InternalAxiosRequestConfig>();

// HTTP 请求实例
const http = axios.create({
  baseURL: "",
  timeout: 30000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

// 请求拦截器
http.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const uid = AuthStorage.getUid();
    const token = AuthStorage.getToken();
    const deviceId = AuthStorage.getDeviceId() || "";
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(deviceId + timestamp)
    );
    const deviceToken = Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    config.headers = Object.assign({}, config.headers, {
      [HeaderAppName]: APP_NAME,
      [HeaderTimestamp]: timestamp,
      [HeaderXDeviceId]: deviceId,
      [HeaderXDeviceToken]: deviceToken,
      [HeaderUid]: uid,
      [HeaderToken]: token,
    });
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// 响应拦截器
http.interceptors.response.use(
  async (response: AxiosResponse<ApiResponse>) => {
    // 二进制数据直接返回
    if (response.config.responseType === "blob" || response.config.responseType === "arraybuffer") {
      return response;
    }

    const { code, msg } = response.data;

    switch (code) {
      case ApiCodeEnum.SUCCESS:
        break;

      case ApiCodeEnum.ACCESS_TOKEN_INVALID: {
        // Token 过期：尝试刷新 token 后自动重试一次
        const { config } = response;
        if (retriedConfigs.has(config)) {
          const userStore = useUserStore();
          userStore.forceLogOut();
          window.$message?.error("登录已过期，请重新登录");
          return Promise.reject(new Error(msg || "Token Invalid"));
        }
        retriedConfigs.add(config);
        try {
          const userStore = useUserStore();
          await userStore.refreshTokenOnce();
          const token = AuthStorage.getToken();
          if (token) {
            config.headers.set(HeaderToken, token);
          }
          return http(config);
        } catch {
          const userStore = useUserStore();
          userStore.forceLogOut();
          window.$message?.error("登录已过期，请重新登录");
          return Promise.reject(new Error(msg || "Token refresh failed"));
        }
      }

      case ApiCodeEnum.UNAUTHORIZED:
        return Promise.reject(new Error(msg || "用户未登录"));

      case ApiCodeEnum.BAD_REQUEST:
        window.$message?.error(msg || "请求参数错误");
        return Promise.reject(new Error(msg || "请求参数错误"));

      case ApiCodeEnum.FORBIDDEN:
        window.$message?.error(msg || "无权限访问");
        return Promise.reject(new Error(msg || "无权限访问"));

      default:
        window.$message?.error(msg || "系统错误");
        return Promise.reject(new Error(msg || "系统错误"));
    }

    return response.data as any;
  },

  (error: AxiosError) => {
    console.error("request error", error); // for debug

    const { response } = error;
    if (!response) {
      window.$message?.error("网络连接失败");
      return Promise.reject(error);
    }

    let message = error.message;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substring(message.length - 3) + "异常";
    }
    window.$message?.error(message, { duration: 5000 });
    return Promise.reject(error);
  }
);

export default http;
