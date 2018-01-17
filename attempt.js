import isError from './isError.js'

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 * 根据提供参数调用函数`func`，返回函数执行结果或者异常错误对象
 * 
 * @since 3.0.0
 * @category Util
 * @param {Function} func 尝试调用的函数
 * @param {...*} [args] 调用`func`时传的参数.
 * @returns {*} 返回函数执行结果或者异常错误对象
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * const elements = attempt(selector =>
 *   document.querySelectorAll(selector), '>_>')
 *
 * if (isError(elements)) {
 *   elements = []
 * }
 */
function attempt(func, ...args) {
  try {
    // thisArg 为null或undefined表示window或global
    return func.apply(undefined, args)
  } catch (e) {
    // 返回异常Error对象，所以attempt函数总是配合isError方法使用
    return isError(e) ? e : new Error(e)
  }
}

export default attempt
