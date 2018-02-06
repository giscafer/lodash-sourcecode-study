import slice from './slice.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * 将一个数组拆分为 `size` 长度的数组，如果`array`不能拆分，则最后一个 chunk 将是剩余元素组成。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  // 避免size为负数情况
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0;
  // 定义结果数组，长度为 Math.ceil(length / size)
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    // 依次 slice 数组
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
