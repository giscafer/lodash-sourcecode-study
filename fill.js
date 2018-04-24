
import baseFill from './.internal/baseFill.js';
import isIterateeCall from './.internal/isIterateeCall.js';
/**
  * Fills elements of `array` with `value` from `start` up to, but not
  * including, `end`.
  * 使用`value`值填充数组`array`，从下标`start`开始（包含），到`end`结束(不包含)
  * **Note:** This method mutates `array`.
  * 此方法改变数组 `array`。
  * @static
  * @memberOf _
  * @since 3.2.0
  * @category Array
  * @param {Array} array 数组对象
  * @param {*} value 填充的值
  * @param {number} [start=0] 开始下标位置，默认为0
  * @param {number} [end=array.length] 结束下标位置，默认为数组长度
  * @returns {Array} Returns `array`. 返回替换后的数组
  * @example
  *
  * var array = [1, 2, 3];
  *
  * _.fill(array, 'a');
  * console.log(array);
  * // => ['a', 'a', 'a']
  *
  * _.fill(Array(3), 2);
  * // => [2, 2, 2]
  *
  * _.fill([4, 6, 8, 10], '*', 1, 3);
  * // => [4, '*', '*', 10]
  */
function fill(array, value, start, end) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    // 如果参数start传的参不符合要求，则设置默认值
    // isIterateeCall 有效的值
    if (start && typeof start != 'number' && isIterateeCall( value, start,array)) {
        start = 0;
        end = length;
    }
    return baseFill(array, value, start, end);
}


export default fill;