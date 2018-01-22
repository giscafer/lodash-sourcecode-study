import slice from '../slice.js'

/**
 * Casts `array` to a slice if it's needed.
 * 将“数组”转换为一个片
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  // 根据start,end参数slice 数据，依赖于_.slice.
  const { length } = array
  end = end === undefined ? length : end
  return (!start && end >= length) ? array : slice(array, start, end)
}

export default castSlice
