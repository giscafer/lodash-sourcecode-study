import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import map from '../map.js'
import cacheHas from './cacheHas.js'

/** Used as the size to enable large array optimizations. */
const LARGE_ARRAY_SIZE = 200

/**
 * The base implementation of methods like `difference` without support
 * for excluding multiple arrays.
 * 
 * 像 `difference`方法的基本实现，不支持排除多个数组
 *
 * @private
 * @param {Array} array The array to inspect. 需要检查的数组
 * @param {Array} values The values to exclude. 需要排除的值
 * @param {Function} [iteratee] The iteratee invoked per element. 遍历每个元素执行的函数
 * @param {Function} [comparator] The comparator invoked per element. 每个元素调用比较器
 * @returns {Array} Returns the new array of filtered values. 返回过滤值的新数组
 */
function baseDifference(array, values, iteratee, comparator) {
  let includes = arrayIncludes
  let isCommon = true
  const result = []
  const valuesLength = values.length

  if (!array.length) {
    return result
  }
  // iteratee改变values里边的每个值
  if (iteratee) {
    values = map(values, (value) => iteratee(value))
  }
  if (comparator) {
    // 有比较器时，改用支持比较器的arrayIncludesWith
    includes = arrayIncludesWith
    // 标识为不是普通比较
    isCommon = false
  }
  // 当比较的数值长度超过200个时，启用缓存
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas
    isCommon = false
    values = new SetCache(values)
  }
  outer:
  for (let value of array) {
    // iteratee迭代器最终值
    const computed = iteratee == null ? value : iteratee(value)
    value = (comparator || value !== 0) ? value : 0
    // 普通比较，并且非NaN
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          // 如果有相等的元素，不必要继续遍历，回到最外层循环outer
          continue outer
        }
      }
      result.push(value)
    }
    // isCommon=false时，非普通比较，比较values里边是否存在computed
    else if (!includes(values, computed, comparator)) {
      result.push(value)
    }
  }
  return result
}

export default baseDifference
