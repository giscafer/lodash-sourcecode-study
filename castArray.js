
/**
 * 将 `value`转为数组（如果`value`不是数组的话）
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 */
function castArray(...args) {
  if (!args.length) {
    return []
  }
  // 取出第一个参数，判断如果不是数组则转为数组形式
  const value = args[0];
  return Array.isArray(value) ? value : [value]
}

export default castArray
