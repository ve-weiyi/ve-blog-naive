import Cookies from "js-cookie";

export function clearStorage() {
  localStorage.clear();
}

const TokenKey: string = "Token";

export function getToken() {
  return Cookies.get(TokenKey);
}

// 本地运行记得删除domain
export function setToken(token: string) {
  // 项目线上部署可以取消注释
  return Cookies.set(TokenKey, token);
}

const UidKey: string = "Uid";

export function getUid() {
  return Cookies.get(UidKey);
}

export function setUid(uid: string) {
  return Cookies.set(UidKey, uid);
}

const TerminalIdKey: string = "TerminalId";

export function getTerminalId() {
  return Cookies.get(TerminalIdKey);
}

export function setTerminalId(tid: string) {
  return Cookies.set(TerminalIdKey, tid);
}
