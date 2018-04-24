import slice from '../slice.js'

/**
 * The base implementation of methods like `dropWhile` and `takeWhile`.
 * 
 * `dropWhile` 和 `takeWhile` 方法的基本实现
 *
 * @private
 * @param {Array} array 查询数组
 * @param {Function} predicate 每次循环执行的函数.
 * @param {boolean} [isDrop] 舍弃元素而不是替换他们
 * @param {boolean} [fromRight] 是否为从右向左遍历
 * @returns {Array} Returns the slice of `array`.
 */
function baseWhile(array, predicate, isDrop, fromRight) {
  const { length } = array
  let index = fromRight ? length : -1

  // 循环直到predicate返回false或循环结束
  // (fromRight ? index-- : ++index < length) 很精简，index--为0的时候或++index>=length的时候退出循环
  while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
  }
  return isDrop
    ? slice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : slice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index))
}

export default baseWhile
