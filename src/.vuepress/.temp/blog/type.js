      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[12,0,13,14,15,7,6,17,18,8,9,10,11,16,19,1,2,5,3,4]}},"star":{"/":{"path":"/star/","indexes":[8,12,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[13,14,15,12,7,6,17,18,8,9,10,11,16,0]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      