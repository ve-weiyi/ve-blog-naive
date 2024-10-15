import type { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocss from "@unocss/vite";
import compress from "./compress";
import vitePlugin from "./viteplugin";
import unPlugin from "./unplugin";

/**
 * vite插件
 * @param env - 环境变量配置
 */
export function setupVitePlugins(env: Env.ImportMeta): (PluginOption | PluginOption[])[] {
  const plugins = [
    /**
     * 支持 `.vue` 文件的解析
     */
    vue(),
    /**
     * 如果需要支持 `.tsx` 组件，请安装 `@vitejs/plugin-vue-jsx` 这个包
     * 并在这里添加一个插件导入 `import vueJsx from '@vitejs/plugin-vue-jsx'`
     */
    vueJsx(),
    ...vitePlugin(env),
    ...unPlugin(env),
    unocss(),
  ];

  if (env.VITE_COMPRESS === "Y") {
    plugins.push(compress(env));
  }

  return plugins;
}
