import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 * 
 * 将第一个数组`array`和所给的数组的值相互对比，通过等值的方式比较，结果值的顺序和引用由第一个数组决定。
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 * 此方法和`pullAll`不一样，返回的是一个全新的数组
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 需要检查的数组.
 * @param {...Array} [values] 排除的值.
 * @returns {Array} 返回一个由过滤后的值组成的新数组.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array, ...values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : []
}

export default difference
