      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[12,0,13,14,15,16,7,6,18,19,8,9,10,11,17,20,1,2,5,3,4]}},"star":{"/":{"path":"/star/","indexes":[8,12,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[13,14,15,16,12,7,6,18,19,8,9,10,11,17,0]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      