<template>
  <Provider>
    <div class="app-wrapper">
      <Header></Header>
      <main class="main-wrapper">
        <router-view v-slot="{ Component, route }">
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </router-view>
      </main>
      <Footer></Footer>
      <Tool></Tool>
      <Search></Search>
      <Login></Login>
      <Register></Register>
      <Forget></Forget>
      <Email></Email>
      <Drawer></Drawer>
      <MusicPlayer></MusicPlayer>
      <ChatRoom></ChatRoom>
    </div>
  </Provider>
</template>

<script setup lang="ts">
import Header from "@/components/Layout/Header/index.vue";
import Footer from "@/components/Layout/Footer/index.vue";
import Drawer from "@/components/Layout/Drawer/index.vue";
import Search from "@/components/Dialog/Search.vue";
import Login from "@/components/Dialog/Login.vue";
import Register from "@/components/Dialog/Register.vue";
import Forget from "@/components/Dialog/Forget.vue";
import Email from "@/components/Dialog/Email.vue";
import Tool from "@/components/Tool/index.vue";
import MusicPlayer from "@/components/MusicPlayer/index.vue";
import ChatRoom from "@/components/ChatRoom/index.vue";
import { useBlogStore, useUserStore } from "@/store";
import { getBlogHomeInfoApi } from "@/api/website";
import { pingApi } from "@/api/blog";

const blogStore = useBlogStore();
const userStore = useUserStore();

onBeforeMount(() => {
  pingApi();
  getBlogHomeInfoApi().then((res) => {
    blogStore.setBlogInfo(res.data);
  });
});
onMounted(() => {
  console.log(
    "%c Hello World %c By 阿冬 %c",
    "background:#e9546b ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff; padding:5px 0;",
    "background:#ec8c69 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #000; padding:5px 0;",
    "background:transparent"
  );
});
</script>

<style scoped>
.app-wrapper {
  position: relative;
  min-height: 100vh;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 8rem;
}
</style>
