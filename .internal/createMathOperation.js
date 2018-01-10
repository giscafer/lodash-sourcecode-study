import baseToNumber from './baseToNumber.js'
import baseToString from './baseToString.js'

/**
 * Creates a function that performs a mathematical operation on two values.
 * 创建一个对两个值执行数学运算的函数
 * @private
 * @param {Function} operator 执行操作的函数
 * @param {number} [defaultValue] undefined 参数默认值
 * @returns {Function} 返回一个新的数学运算函数
 */
function createMathOperation(operator, defaultValue) {
  return (value, other) => {
    if (value === undefined && other === undefined) {
      return defaultValue
    }
    if (value !== undefined && other === undefined) {
      return value
    }
    if (other !== undefined && value === undefined) {
      return other
    }
    if (typeof value == 'string' || typeof other == 'string') {
      value = baseToString(value)
      other = baseToString(other)
    }
    else {
      value = baseToNumber(value)
      other = baseToNumber(other)
    }
    return operator(value, other)
  }
}

export default createMathOperation
