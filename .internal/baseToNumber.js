import isSymbol from '../isSymbol.js'

/** 用作各种“Number”常量的参考。 */
const NAN = 0 / 0

/**
 * The base implementation of `toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 * “toNumber”的基本实现，用来保证二进制、十六进制或八进制字符串值的正确转换。
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */
function baseToNumber(value) {
  if (typeof value == 'number') {
    return value
  }
  if (isSymbol(value)) {
    return NAN
  }
  return +value
}

export default baseToNumber
