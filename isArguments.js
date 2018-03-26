import getTag from './.internal/getTag.js'

/**
 * Checks if `value` is likely an `arguments` object.
 * 判断 `value` 是否是个类`arguments`对象
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments(value) {
  // 这里感觉 getTag(value) == '[object Arguments]' 一句就够了。。。，因为getTag方法里边有队null的判断
  return typeof value == 'object' && value !== null && getTag(value) == '[object Arguments]'
}

export default isArguments
