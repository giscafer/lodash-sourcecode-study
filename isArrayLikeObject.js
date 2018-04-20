import isArrayLike from './isArrayLike.js'
import isObjectLike from './isObjectLike.js'

/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 * 
 * 此方法像`isArrayLike`方法一样，除了它还检查`value`是一个对象。也就是类数组对象，比如arguments就返回true
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */
function isArrayLikeObject(value) {
  // 是对象，并且也是数组，那就是类数组对象
  // isObjectLike(value) 为 typeof value == 'object'
  return isObjectLike(value) && isArrayLike(value)
}

export default isArrayLikeObject
