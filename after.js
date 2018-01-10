/**
 * 创建一个触发执行`func` 的函数，一旦方法被触发>=n次后，就执行func。
 * @since 0.1.0
 * @category Function
 * @param {number} n 调用“func”之前调用的次数 n。.
 * @param {Function} func 要调用的回调方法
 * @returns {Function} 返回一个新的已约束的函数
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n, func) {
  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }
  // 返回闭包函数，n被存储起来，一直为第一次的数值n，之后一直--n运算，总有n<1的时候，就触发func回调的执行。
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
}

export default after
