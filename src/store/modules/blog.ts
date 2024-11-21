import type { GetBlogHomeInfoResp, WebsiteConfigDTO } from "@/api/types";
import { getBlogHomeInfoApi } from "@/api/website.ts";

/**
 * 博客
 */
interface BlogState {
  /**
   * 博客信息
   */
  blogInfo: GetBlogHomeInfoResp;
}

export const useBlogStore = defineStore("useBlogStore", {
  state: (): BlogState => ({
    blogInfo: {
      website_config: {} as WebsiteConfigDTO,
      page_list: [],
    } as GetBlogHomeInfoResp,
  }),
  actions: {
    getBlogInfo(): Promise<IApiResponse<GetBlogHomeInfoResp>> {
      return new Promise((resolve, reject) => {
        getBlogHomeInfoApi()
          .then((res) => {
            this.blogInfo = res.data;
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getCover(page: string) {
      const cover = this.blogInfo.page_list.find(
        (item: any) => item.page_label === page
      )?.page_cover;
      return cover ? cover : "https://veport.oss-cn-beijing.aliyuncs.com/background/zhuqu.jpg";
    },
    getCarouselList() {
      return this.blogInfo.page_list.filter((item) => item.is_carousel === 1);
    },
  },
  getters: {},
  persist: {
    key: "blog",
    storage: sessionStorage,
  },
});
