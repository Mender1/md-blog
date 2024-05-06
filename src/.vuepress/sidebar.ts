import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "前 端",
      icon: "book",
      prefix: "front/",
      children: "structure",
    },
    {
      text: "运 维",
      icon: "book",
      prefix: "operations/",
      children: "structure",
    },
    "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
