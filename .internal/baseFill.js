
import toFinite from '../toFinite.js';
import toLength from '../toLength.js';
import toInteger from '../toInteger.js';
/**
 * 
 * The base implementation of `_.fill` without an iteratee call guard.
 * 
 * @private
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 */
function baseFill(array, value, start, end) {
    var length = array.length;
    // 转为整型，也避免超出数值范围
    start = toInteger(start);
    if (start < 0) {
        // 负数处理
        start = -start > length ? 0 : (length + start);
    }
    end = (end === undefined || end > length) ? length : toInteger(end);
    if (end < 0) {
        end += length;
    }
    // end负数情况
    end = start > end ? 0 : toLength(end);
    // 循环设置值
    while (start < end) {
        array[start++] = value;
    }
    return array;
}

export default baseFill;