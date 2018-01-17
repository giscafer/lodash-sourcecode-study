import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'
import isPlainObject from './isPlainObject.js'

/**
 * 检测`value`是否为`Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` 对象.
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false
  }
  const tag = baseGetTag(value);
  // 如果是Error异常对象或DOMException异常对象，或其他
  return tag == '[object Error]' || tag == '[object DOMException]' ||
    // 拥有message、name属性值得非纯对象
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value))
}

export default isError
