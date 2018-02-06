/**
 * Creates a function like `round`.
 * 创建一个类似 `round` 的函数
 * @private
 * @param {string} methodName 四舍五入时使用的 `Match` 的方法名称。
 * @returns {Function} 返回一个新的函数
 */
function createRound(methodName) {
  // 取得 Math 中的函数
  const func = Math[methodName];
  // 返回一个匿名函数
  return (number, precision) => {
    // 默认为0 和控制最大值为292
    precision = precision == null ? 0 : Math.min(precision, 292);
    // precision!==0
    if (precision) {
      // 用指数符号变换以避免浮点问题
      // See [MDN](https://mdn.io/round#Examples) for more details.
      // 这里`${number}e`加入了e字符，为了下边能直接使用pair[1]取值而不需要判断是否存在
      let pair = `${number}e`.split('e');
      // 先算出e `precision` 科学计算结果
      const value = func(`${pair[0]}e${+pair[1] + precision}`)
      // 再恢复原来的位数
      pair = `${value}e`.split('e')
      return +`${pair[0]}e${+pair[1] - precision}`
    }
    // 没有参数直接Math[methodName](number)
    return func(number)
  }
}

export default createRound
