import getTag from './.internal/getTag.js'

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 * 检测`value`值是否为symbol或被定义的
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value) {
  const type = typeof value
  return type == 'symbol' || (type == 'object' && value != null && getTag(value) == '[object Symbol]')
}

export default isSymbol
