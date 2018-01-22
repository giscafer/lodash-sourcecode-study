import asciiToArray from './asciiToArray.js'
import hasUnicode from './hasUnicode.js'
import unicodeToArray from './unicodeToArray.js'

/**
 * Converts `string` to an array.
 * 将字符串`string`转为数组
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  // 判断是否有Unicode字符，选择不同方法
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string)
}

export default stringToArray
