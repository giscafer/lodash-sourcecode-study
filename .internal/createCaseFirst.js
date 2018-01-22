import castSlice from './castSlice.js'
import hasUnicode from './hasUnicode.js'
import stringToArray from './stringToArray.js'

/**
 * 创建一个case 函数，并执行方法字符串的`methodName`，和lowerFirst类似
 * 如methodName为toUpperCase或toLowerCase
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  // 返回一个接受string参数的函数
  return (string) => {
    // hasUnicode：如果存在unicode字符串，则通过stringToArray函数将字符串string转为数组
    const strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined
    // 取出第一个字符
    const chr = strSymbols
      ? strSymbols[0]
      : string[0]
    // 剩余字符
    const trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1)
    // 第一个字符case转换后拼接剩余字符即为结果
    // 举例：'abcd'
    // "a".toUpperCase() + 'bcd'
    // 结果为`Abcd`
    return chr[methodName]() + trailing
  }
}

export default createCaseFirst
