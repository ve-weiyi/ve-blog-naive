import { clearCookies, getToken, setToken, setUid } from "@/utils/token";
import { getUserInfoApi, getUserLikeApi } from "@/api/user";
import { logoutApi } from "@/api/auth";
import type { Token, UserInfoResp } from "@/api/types";

/**
 * 用户
 */
interface UserState {
  userInfo: UserInfoResp;
  userLike: any;
}

export const useUserStore = defineStore("useUserStore", {
  state: (): UserState => ({
    userInfo: {
      user_id: undefined,
      username: "",
      nickname: "",
      avatar: "",
      intro: "",
      website: "",
      email: "",
    },
    userLike: {
      article_like_set: [],
      comment_like_set: [],
      talk_like_set: [],
    },
  }),
  actions: {
    GetUserInfo() {
      if (!this.isLogin()) {
        return;
      }
      return new Promise((resolve, reject) => {
        getUserInfoApi()
          .then((res) => {
            this.userInfo = res.data;

            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    GetUserLike() {
      if (!this.isLogin()) {
        return;
      }
      return new Promise((resolve, reject) => {
        getUserLikeApi()
          .then((res) => {
            this.userLike = res.data;
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    LogOut() {
      return new Promise((resolve, reject) => {
        logoutApi()
          .then(() => {
            this.$reset();
            clearCookies();
            resolve(null);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    forceLogOut() {
      this.$reset();
      clearCookies();
    },
    setLogin(token: Token) {
      console.log("token", token);
      setUid(String(token.user_id));
      setToken(token.access_token);
      console.log("getToken", getToken());
    },
    updateUserInfo(user: UserInfoResp) {
      this.userInfo = user;
    },
    isLogin() {
      const tk = getToken();
      console.log("isLogin", tk != undefined);
      return tk != undefined;
    },
    articleLike(articleId: number) {
      const articleLikeSet = this.userLike.article_like_set;
      if (articleLikeSet.indexOf(articleId) != -1) {
        articleLikeSet.splice(articleLikeSet.indexOf(articleId), 1);
      } else {
        articleLikeSet.push(articleId);
      }
    },
    commentLike(commentId: number) {
      const commentLikeSet = this.userLike.comment_like_set;
      if (commentLikeSet.indexOf(commentId) != -1) {
        commentLikeSet.splice(commentLikeSet.indexOf(commentId), 1);
      } else {
        commentLikeSet.push(commentId);
      }
    },
    talkLike(talkId: number) {
      const talkLikeSet = this.userLike.talk_like_set;
      if (talkLikeSet.indexOf(talkId) != -1) {
        talkLikeSet.splice(talkLikeSet.indexOf(talkId), 1);
      } else {
        talkLikeSet.push(talkId);
      }
    },
    isArticleLike(articleId: number) {
      return this.userLike.article_like_set.indexOf(articleId) != -1;
    },
    isCommentLike(commentId: number) {
      return this.userLike.comment_like_set.indexOf(commentId) != -1;
    },
    isTalkLike(talkId: number) {
      return this.userLike.talk_like_set.indexOf(talkId) != -1;
    },
  },
  getters: {},
  persist: {
    key: "user",
    storage: sessionStorage,
  },
});
