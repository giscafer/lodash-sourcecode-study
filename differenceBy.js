import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * This method is like `difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 * 
 * 此方法和`difference`相识，但支持每个元素执行`iteratee`，它会调用 `array` 和 `values`的每个元素，以生成它们被比较的标准。
 * 结果的元素顺序由第一个数组决定。iteratee参数为(value)
 *
 * **Note:** Unlike `pullAllBy`, this method returns a new array.
 * 返回一个新数组
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2]
 */
function differenceBy(array, ...values) {
  // iteratee赋值为为最后一个参数
  let iteratee = last(values)
  // 如果没有iteratee
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined
  }
  return isArrayLikeObject(array)
  // iteratee的作用见baseDifference里边
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee)
    : []
}

export default differenceBy
