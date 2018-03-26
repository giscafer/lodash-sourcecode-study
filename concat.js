import arrayPush from './.internal/arrayPush.js';
import copyArray from './.internal/copyArray.js';
import baseFlatten from './.internal/baseFlatten.js';

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 * 
 * 创建了一个新的数组，它与任何附加的数组和/或值连接在一起。
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
    var length = arguments.length;
    if (!length) {
        // 兼容参数个数为0的情况
        return [];
    }
    // 定义一个和参数一样长度的数组
    var args = Array(length - 1),
        array = arguments[0],
        index = length;
    // 这里其实操作有点像将arguments参数转为数组 Array.apply(null,arguments);
    while (index--) {
        // 遍历取出每个参数存到数组args中
        args[index - 1] = arguments[index];
    }
    // copyArray(array) 是考虑到了类数组对象的情况的转换
    // baseFlatten(args, 1) 则为递归一次，不做扁平化
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}


export default concat;