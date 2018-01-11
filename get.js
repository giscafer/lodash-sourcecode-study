import baseGet from './.internal/baseGet.js'

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 * 取得`path`路径下的`object`的值，`undefined` 时支持默认值`defaultValue`替换
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object 需要查询的对象
 * @param {Array|string} path 需要获取的属性路径，支持 Array|string 两种类型参数，比较方便.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @see has, hasIn, set, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */
function get(object, path, defaultValue) {
  // 过程比较简单，对undefined值判断取默认值defaultValue，所有取值逻辑都在`baseGet`模块内。
  const result = object == null ? undefined : baseGet(object, path)
  return result === undefined ? defaultValue : result
}

export default get
