/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 * 在  `lower` 和 `upper` 两个数值范围界限下，取得合适的  `number`  
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */
function clamp(number, lower, upper) {
  // 都转为数值型
  number = +number
  lower = +lower
  upper = +upper
  // 排除lower、upper 为 NaN
  lower = lower === lower ? lower : 0
  upper = upper === upper ? upper : 0
  // 排除number 为 NaN
  if (number === number) {
    // 取出三个数值中中间值
    number = number <= upper ? number : upper
    number = number >= lower ? number : lower
  }
  return number
}

export default clamp
