import upperFirst from './upperFirst.js'

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 * 将字符串 `string`的第一个字符转换为大写字母，然后将其余字符转换为小写字母。
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
function capitalize(string) {
  // 先全部转未小写字母，再用upperFirst来大写第一个字母
  return upperFirst(string.toLowerCase())
}

export default capitalize
