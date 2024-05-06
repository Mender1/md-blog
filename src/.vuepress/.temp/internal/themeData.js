export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$KgnQIEp4GqDpXuQ7yDz4MODiq49XHXETbALJY5hP3OQ78/5PKOJ6S\"]}},\"author\":{\"name\":\"Mr.闷豆\",\"url\":\"https://mender1.github.io/md-blog/\"},\"logo\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"src\",\"footer\":\"默认页脚\",\"displayFooter\":true,\"blog\":{\"description\":\"一个前端开发者\",\"intro\":\"/intro.html\",\"medias\":{\"BiliBili\":\"https://space.bilibili.com/32248454?spm_id_from=333.1007.0.0\",\"Email\":\"mailto:1149772382@qq.com\",\"Gitee\":\"https://gitee.com/m-yuan-zz\",\"GitHub\":\"https://github.com/Mender1\",\"Gmail\":\"mailto:mend303211@gmail.com\"}},\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"星标\",\"empty\":\"$text 为空\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",\"/front/\",\"/operations/\",{\"text\":\"V2 文档\",\"icon\":\"book\",\"link\":\"https://theme-hope.vuejs.press/zh/\"}],\"sidebar\":{\"/\":[\"\",{\"text\":\"文章\",\"icon\":\"book\",\"prefix\":\"posts/\",\"children\":\"structure\"},{\"text\":\"前 端\",\"icon\":\"book\",\"prefix\":\"front/\",\"children\":\"structure\"},{\"text\":\"运 维\",\"icon\":\"book\",\"prefix\":\"operations/\",\"children\":\"structure\"},\"intro\"]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
