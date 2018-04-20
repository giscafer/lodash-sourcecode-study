# lodash-sourcecode-study

基于版本v5，源码学习，代码注释[@giscafer](https://github.com/giscafer)

由于lodash `v5`版本官方正在计划中，源码部分模块是缺失的，见[lodash/issues#3514](https://github.com/lodash/lodash/issues/3514)

The following modules are imported from `.internal` but don't exist:

* `createAssigner`
* `createFind`
* `createWrap`
* `customDefaultsAssignIn`
* `replaceHolders`

The above modules are imported in the following public modules:

* `ary` imports `createWrap`
* `assignWith` imports `createAssigner`
* `bindKey` imports `createWrap` and `replaceHolders`
* `curry` imports `createWrap`
* `curryRight` imports `createWrap`
* `findLast` imports `createFind`
* `merge` imports `createAssigner`
* `mergeWith` imports `createAssigner`
* `template` imports `customDefaultsAssignIn`

The following public modules are imported but don't exist:

* `assignInWith`
* `findIndex`

The above modules are imported in the following public modules:

* `find` imports `findIndex`
* `template` imports assignInWith`


针对没有的模块，计划会根据低版本`v4`的去学习了解（如果留到最后v5版本还没有发布的话）

## [lodash源码学习文章列表](https://github.com/giscafer/giscafer.github.io/labels/lodash%E6%BA%90%E7%A0%81%E5%AD%A6%E4%B9%A0)

### 章节目录：

 * [VS Code + webpack 调式 lodash 源码](https://github.com/giscafer/giscafer.github.io/issues/24)
 * [lodash源码学习之add方法](https://github.com/giscafer/giscafer.github.io/issues/23)
 * [lodash源码学习——after和before函数](https://github.com/giscafer/giscafer.github.io/issues/25)
 * [lodash源码学习——at、get、eq函数](https://github.com/giscafer/giscafer.github.io/issues/26)
 * [lodash源码学习——attempt、isError、isPlainObject、isObjectLike函数](https://github.com/giscafer/giscafer.github.io/issues/27)
 * [lodash源码学习——camelCase、capitalize、upperFirst、words、slice函数](https://github.com/giscafer/giscafer.github.io/issues/28)

#### Array

 * [lodash 源码学习——castArray、ceil、chunk、clamp 函数](https://github.com/giscafer/giscafer.github.io/issues/30)
 * [lodash 源码学习—— Array之 concat 、compact、isArguments、isFlattenable 函数](https://github.com/giscafer/giscafer.github.io/issues/31)
 * [lodash源码学习—— Array之 difference 、differenceBy、differenceWith函数](https://github.com/giscafer/giscafer.github.io/issues/32)



---

**源码注释+测试代码见**：[lodash-sourcecode-study](https://github.com/giscafer/lodash-sourcecode-study)

**前端学堂：[felearn.com](http://www.felearn.com/)**

 ## 相关

 - 前端学堂：[felearn.com](http://www.felearn.com)


 - 前端实战学习星球群：https://t.xiaomiquan.com/zvj2Zzf


 - 微信公众号：

![giscafer](http://blog.giscafer.com/static/images/qrcode_giscafer.jpg)