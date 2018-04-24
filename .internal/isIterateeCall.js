import isArrayLike from '../isArrayLike.js';
import isIndex from '../isIndex.js';
import isObject from '../isObject.js';
import eq from '../eq.js';

/**
 * 
 * Checks if the given arguments are from an iteratee call.
 * 检查给定的参数是否来自于迭代器调用。
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
        return false;
    }
    var type = typeof index;
    if (type == 'number'
        // 数值型 且 object为数组 且 index为有效数组索引
        ? (isArrayLike(object) && isIndex(index, object.length))
        // 字符串 且 为object的key值
        : (type == 'string' && index in object)
    ) {
        // 数值相等
        return eq(object[index], value);
    }
    return false;
}


export default isIterateeCall;