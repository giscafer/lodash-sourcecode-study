

本篇学习的是`_.xx `、`_.xx`   、`_.xxx` 等函数

源码依赖大致关系

``` shell
_.difference 
   | isArrayLikeObject.js
   | isArrayLike.js
   | isObjectLike.js
   | isLength.js
   | last.js

   | .internal
               |--baseDifference.js
                       |--SetCache.js
                       |--arrayIncludes.js
                       |--arrayIncludesWith.js
   | map.js
                       |--cacheHas.js
               |--baseFlatten.js
_.differenceBy
_.differenceWith


```



## 源码学习


### difference.js

```js

```


## 总结

---

**源码注释+测试代码见**：[lodash-sourcecode-study](https://github.com/giscafer/lodash-sourcecode-study)
**前端学堂：[felearn.com](http://www.felearn.com/)**
