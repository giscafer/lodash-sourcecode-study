/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', before(5, addContactToList))
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  let result
  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }

  // 闭包，存储了n 和func
  return function(...args) {
    // 还有执行的次数都执行回调，总执行次数为 n-1次
    if (--n > 0) {
      result = func.apply(this, args)
    }
    // 最后一次时，清空func回调，垃圾回收
    if (n <= 1) {
      func = undefined
    }
    return result
  }
}

export default before
