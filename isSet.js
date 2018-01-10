import getTag from './.internal/getTag.js'
import nodeUtil from './.internal/nodeUtil.js'

/* Node.js helper references. */
const nodeIsSet = nodeUtil && nodeUtil.isSet

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * isSet(new Set)
 * // => true
 *
 * isSet(new WeakSet)
 * // => false
 */
const isSet = nodeIsSet
  ? (value) => nodeIsSet(value)
  : (value) => typeof value == 'object' && value !== null && getTag(value) == '[object Set]'

export default isSet
