import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'
import nodeUtil from './.internal/nodeUtil.js'

/* Node.js helper references. */
const nodeIsDate = nodeUtil && nodeUtil.isDate

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 */
const isDate = nodeIsDate
  ? (value) => nodeIsDate(value)
  : (value) => isObjectLike(value) && baseGetTag(value) == '[object Date]'

export default isDate
