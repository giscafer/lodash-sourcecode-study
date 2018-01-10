import isSymbol from '../isSymbol.js'

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0

/** 用来将symbol转为原始类型（primitives）和字符串 */
const symbolProto = Symbol ? Symbol.prototype : undefined
const symbolToString = symbolProto ? symbolProto.toString : undefined

/**
 * The base implementation of `toString` which doesn't convert nullish
 * values to empty strings.
 * 
 * `toString`方法的基本实现，保证将空值转换为空字符串。
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // 字符串类型，尽早退出以避免某些环境中的性能下降。
  if (typeof value == 'string') {
    return value
  }
  if (Array.isArray(value)) {
    // 递归转换值（易受调用堆栈限制）
    return `${value.map(baseToString)}`
  }
  // 将Symbol类型转为字符串
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : ''
  }
  const result = `${value}`;
  // 因为存在将-0转字符串成'0'的可能，所以这里判断保证正确的'-0'
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}

export default baseToString
