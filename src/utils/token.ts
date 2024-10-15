import Cookies from "js-cookie";

const TokenKey: string = "Token";

// 我网站的域名是www.ttkwsd.top，去前面的www，改成自己的域名
const domain: string = ".ttkwsd.top";

// token前缀
export let token_prefix = "Bearer ";

export function getToken() {
  return Cookies.get(TokenKey);
}

// 本地运行记得删除domain
export function setToken(token: string) {
  // 项目线上部署可以取消注释
  return Cookies.set(TokenKey, token);
  // return Cookies.set(TokenKey, token);
}

export function clearCookies() {
  // 项目线上部署可以取消注释
  const keys = Object.keys(Cookies.get());
  keys.forEach((key) => {
    Cookies.remove(key);
  });
}

const UidKey: string = "Uid";

export function getUid() {
  return Cookies.get(UidKey);
}

export function setUid(uid: string) {
  return Cookies.set(UidKey, uid);
}
