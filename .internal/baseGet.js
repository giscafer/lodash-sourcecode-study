import castPath from './castPath.js'
import toKey from './toKey.js'

/**
 * The base implementation of `get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  // 所有路径转为数组形式
  path = castPath(path, object)

  let index = 0
  const length = path.length

  while (object != null && index < length) {
    // toKey将path转为string或symbol类型，保证可以作为对象的key取值
    object = object[toKey(path[index++])]
  }
  // 如果能正常按路径深度取到值，则返回值object，否则为对象不存在该key路径，返回undefined
  return (index && index == length) ? object : undefined
}

export default baseGet
