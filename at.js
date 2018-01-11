import baseAt from './.internal/baseAt.js'

/**
 * 创建一个与对象`object`的`path`路径匹配的值数组
 * @since 1.0.0
 * @category Object
 * @param {Object} object 迭代对象
 * @param {...(string|string[])} [paths] 选择属性的路径.
 * @returns {Array} 返回选择的值数组.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
 *
 * at(object, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]
 */
function at(...paths) {
  return baseAt(paths)
}

export default at
