/**
  * Appends the elements of `values` to `array`.
  * 将`values`追加到`array`数组
  * @private
  * @param {Array} array The array to modify.
  * @param {Array} values The values to append.
  * @returns {Array} Returns `array`.
  */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  // 追加元素实现，lodash源码里边很喜欢用while循环
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}


export default arrayPush;