import MapCache from './.internal/MapCache.js'

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 * const other = { 'c': 3, 'd': 4 }
 *
 * const values = memoize(values)
 * values(object)
 * // => [1, 2]
 *
 * values(other)
 * // => [3, 4]
 *
 * object.a = 2
 * values(object)
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b'])
 * values(object)
 * // => ['a', 'b']
 *
 * // Replace `memoize.Cache`.
 * memoize.Cache = WeakMap
 */

 //memoize 方法用来缓存 `func`的结果，缓存后的结果只能通过暴露的`cache`属性去修改
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError('Expected a function')
  }
  const memoized = function(...args) {
    // 没有resolver则使用第一个参数作为key
    const key = resolver ? resolver.apply(this, args) : args[0]
    const cache = memoized.cache

    if (cache.has(key)) {
      // 如果之前已缓存，直接获取值
      return cache.get(key)
    }
    // 没有缓存过，则调用func方法获取结果缓存
    const result = func.apply(this, args)
    memoized.cache = cache.set(key, result) || cache
    return result;
  }
  // 创建一个MapCache实例用来缓存
  memoized.cache = new (memoize.Cache || MapCache)
  return memoized
}
// 基于MapCache
memoize.Cache = MapCache

export default memoize
