var reIsUint = /^(?:0|[1-9]\d*)$/;
var MAX_SAFE_INTEGER = 9007199254740991;
/**
  * Checks if `value` is a valid array-like index.
  * 检查“value”是否是一个有效的数组索引。
  * @private
  * @param {*} value The value to check.
  * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
  * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
  */
function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    // value是number类型 && 不是Symbol && 由数字组成 && 大于-1 && 是整数 && 有效数值范围
    return !!length &&
        (type == 'number' ||
            (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}


export default isIndex;