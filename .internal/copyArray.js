/**
 * Copies the values of `source` to `array`.
 * 拷贝`source`元素到`array`，类数组对象转数组，如let source = {length: 2, 0: 'c', 1: 'd'};
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  let index = -1
  const length = source.length

  array || (array = new Array(length))
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

export default copyArray
