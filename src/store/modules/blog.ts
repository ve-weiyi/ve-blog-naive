import type { GetBlogHomeInfoResp, WebsiteConfigDTO } from "@/api/types";

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
      page_list: [
        {
          page_label: "home",
          page_cover: "https://veport.oss-cn-beijing.aliyuncs.com/background/zhuqu.jpg",
        },
      ],
    } as GetBlogHomeInfoResp,
  }),
  actions: {
    setBlogInfo(blogInfo: GetBlogHomeInfoResp) {
      this.blogInfo = blogInfo;
    },
    getCover(page: string) {
      const cover = this.blogInfo.page_list.find(
        (item: any) => item.page_label === page
      )?.page_cover;
      return cover ? cover : "https://veport.oss-cn-beijing.aliyuncs.com/background/zhuqu.jpg";
    },
  },
  getters: {},
  persist: {
    key: "blog",
    storage: sessionStorage,
  },
});
