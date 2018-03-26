import isArguments from '../isArguments.js'

/** Built-in value reference. */
// 这个属性控制着数组/对象属性在concat的时候是否展开
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable

const spreadableSymbol = Symbol.isConcatSpreadable

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 * 检测参数 `value` 是否为一个可展开的对象或数组
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {

  return Array.isArray(value) ||
    // arguments对象的情况
    isArguments(value) ||
    // spreadableSymbol是否存在，value是否存在，value[spreadableSymbol]是true还是false
    !!(spreadableSymbol && value && value[spreadableSymbol])
}

export default isFlattenable
