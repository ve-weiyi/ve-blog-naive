export function clearStorage() {
  localStorage.clear();
}

const TokenKey: string = "Token";

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token: string) {
  return localStorage.setItem(TokenKey, token);
}

const UidKey: string = "Uid";

export function getUid() {
  return localStorage.getItem(UidKey);
}

export function setUid(uid: string) {
  return localStorage.setItem(UidKey, uid);
}

const TerminalIdKey: string = "TerminalId";

export function getTerminalId() {
  return localStorage.getItem(TerminalIdKey);
}

export function setTerminalId(tid: string) {
  return localStorage.setItem(TerminalIdKey, tid);
}
