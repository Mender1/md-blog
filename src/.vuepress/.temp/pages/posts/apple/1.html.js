import comp from "E:/md-blog/src/.vuepress/.temp/pages/posts/apple/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/apple/1.html\",\"title\":\"苹果 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"苹果\"],\"tag\":[\"红\",\"大\",\"圆\"],\"description\":\"苹果 1 标题 2 这里是内容。 标题 3 这里是内容。\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mender1.github.io/md-blog/md-blog/posts/apple/1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"闷豆的笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"苹果 1\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"苹果 1 标题 2 这里是内容。 标题 3 这里是内容。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.闷豆\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"红\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"大\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"圆\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-01T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"苹果 1\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.闷豆\\\",\\\"url\\\":\\\"https://mender1.github.io/md-blog/\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":34},\"filePathRelative\":\"posts/apple/1.md\",\"localizedDate\":\"2022年1月1日\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
