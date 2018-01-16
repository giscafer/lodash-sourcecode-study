import memoizeCapped from './memoizeCapped.js'

const charCodeOfDot = '.'.charCodeAt(0)
const reEscapeChar = /\\(\\)?/g;

// 正则全局匹配所有字符类型情况
// 完整正则字符串为："[^.[\]]+|\[(?:([^"'].*)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))"
const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  '[^.[\\]]+' + '|' +
  // Or match property names within brackets.
  '\\[(?:' +
    // Match a non-string expression.
    '([^"\'].*)' + '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
  ')\\]'+ '|' +
  // Or match "" as the space between consecutive dots or empty brackets.
  '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
, 'g')

/**
 * Converts `string` to a property path array.
 * 将字符串路径转为数组形式
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
const stringToPath = memoizeCapped((string) => {
  const result = [];
  // 是否为.号开头
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('')
  }
  /**
   * match：匹配的字符串
   * expression、quote、subString ：分别为rePropName第n个括号匹配的字符串
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   */
  string.replace(rePropName, (match, expression, quote, subString) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    }
    else if (expression) {
      key = expression.trim()
    }
    result.push(key)
  })
  return result
})

export default stringToPath
