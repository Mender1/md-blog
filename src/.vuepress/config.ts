import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/md-blog/",

  lang: "zh-CN",
  title: "闷豆的笔记",
  description: "随手记录下的各类笔记",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
