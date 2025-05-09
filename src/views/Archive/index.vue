<template>
  <div class="page-header">
    <h1 class="page-title">归档</h1>
    <img class="page-cover" :src="cover" alt="" />
    <!-- 波浪 -->
    <Waves></Waves>
  </div>
  <div class="bg">
    <div class="page-container">
      <div class="archive-title">文章总览 - {{ count }}</div>
      <div class="archive-list">
        <div v-for="archive in archivesList" :key="archive.id" class="archive-item">
          <router-link class="article-cover" :to="`/article/${archive.id}`">
            <img v-lazy="archive.article_cover" class="cover" />
          </router-link>
          <div class="article-info">
            <div class="article-time">
              <svg-icon icon-class="calendar" style="margin-right: 0.4rem"></svg-icon>
              <time>{{ formatDate(archive.created_at) }}</time>
            </div>
            <router-link class="article-title" :to="`/article/${archive.id}`">
              {{ archive.article_title }}
            </router-link>
          </div>
        </div>
      </div>
      <Pagination v-if="count > 0" v-model:current="queryParams.page" :total="Math.ceil(count / 5)">
      </Pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArticleAPI } from "@/api/article";
import type { ArticleArchivesQueryReq, ArticlePreview } from "@/api/types";
import Pagination from "@/components/Pagination/index.vue";

import { formatDate } from "@/utils/date";
import { useBlogStore } from "@/store";

const blogStore = useBlogStore();

const cover = blogStore.getCover("archive");
const data = reactive({
  count: 0,
  queryParams: {
    page: 1,
    page_size: 5,
  } as ArticleArchivesQueryReq,
  archivesList: [] as ArticlePreview[],
});
const { count, queryParams, archivesList } = toRefs(data);
watch(
  () => queryParams.value.page,
  () => {
    ArticleAPI.findArticleArchivesApi(queryParams.value).then((res) => {
      archivesList.value = res.data.list;
      count.value = res.data.total;
    });
  }
);
onMounted(() => {
  ArticleAPI.findArticleArchivesApi(queryParams.value).then((res) => {
    archivesList.value = res.data.list;
    count.value = res.data.total;
  });
});
</script>

<style lang="scss" scoped>
.archive-title {
  position: relative;
  margin-left: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  font-size: 1.5rem;

  &::before {
    position: absolute;
    top: 16px;
    left: -8px;
    z-index: 1;
    width: 18px;
    height: 18px;
    border: 5px solid var(--color-blue);
    border-radius: 10px;
    content: "";
    line-height: 10px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: 2px;
    height: 1.5em;
    background: #aadafa;
    content: "";
  }
}

.archive-title:hover:before {
  border-color: var(--color-orange);
}

.archive-list {
  margin-left: 10px;
  padding-left: 20px;
  border-left: 2px solid #aadafa;
}

.archive-item {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 20px 10px;
}

.archive-item:hover:before {
  border-color: var(--color-orange);
}

.archive-item::before {
  position: absolute;
  left: -36px;
  width: 10px;
  height: 10px;
  border: 3px solid var(--color-blue);
  border-radius: 6px;
  background: var(--grey-0);
  content: "";
}

.article-cover {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 12px;

  .cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition:
      filter 375ms ease-in 0.2s,
      transform 0.6s;
  }
}

.cover:hover {
  transform: scale(1.1);
}

.article-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 1rem;

  .article-time {
    font-size: 14px;
  }

  .article-title {
    font-size: 0.9rem;
    margin: 2px 0;
  }
}

.article-title:hover {
  color: var(--primary-color);
  transform: translateX(10px);
}
</style>
