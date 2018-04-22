import slice from './slice.js'

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 * 
 * 从左到右，从第n个元素算起，截取数组`array`元素。
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] 截取元素的位置，默认1.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function drop(array, n=1) {
  // 数组判空
  const length = array == null ? 0 : array.length;
  // 使用slice截取数组
  return length
    ? slice(array, n < 0 ? 0 : n, length)
    : []
}

export default drop
