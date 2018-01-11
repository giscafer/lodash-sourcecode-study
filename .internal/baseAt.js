import get from '../get.js'

/**
 * The base implementation of `at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */
function baseAt(object, paths) {
  let index = -1
  const length = paths.length
  // 根据路径长度创建一个同样长度的数组用来存储结果
  const result = new Array(length)
  // 如果object为null或者undefined，所有路径将是undefined
  const skip = object == null

  while (++index < length) {
    // 通过get方法取出对于path的值
    result[index] = skip ? undefined : get(object, paths[index])
  }
  return result
}

export default baseAt
