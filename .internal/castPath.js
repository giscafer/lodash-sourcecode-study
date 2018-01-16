import isKey from './isKey.js'
import stringToPath from './stringToPath.js'

/**
 * Casts `value` to a path array if it's not one.
 * 所有路径转为数组形式
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (Array.isArray(value)) {
    return value
  }
  // 转为key 数组
  return isKey(value, object) ? [value] : stringToPath(value)
}

export default castPath
