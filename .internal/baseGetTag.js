const objectProto = Object.prototype
const hasOwnProperty = objectProto.hasOwnProperty
const toString = objectProto.toString
const symToStringTag = typeof Symbol != 'undefined' ? Symbol.toStringTag : undefined

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 * `getTag`方法的基本实现，提供弱环境下的兼容
 * 主要思路：用自带的toString去判断参数value的类型，兼容Symbol类型和自定义类型的情况
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  // null 和 undefined 判断
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  // Object(value)：将value转为对象，判断value是否为 Symbol 类型属性
  if (!(symToStringTag && symToStringTag in Object(value))) {
    // 如果不是Symbol类型，则 toString.call(value) 返回数据原始类型;
    return toString.call(value);
  }
  // 是否有Symbol.toStringTag属性？
  //  (这里多数情况是false，Symbol.toStringTag类型属性只能是getOwnPropertySymbols来判断或者用Reflect.ownKeys)
  /**
   * 如果value为下列对象情况 isOwn===true;
   * let obj={
        [Symbol.toStringTag]:'toStringTag'
      }
   */
  const isOwn = hasOwnProperty.call(value, symToStringTag);
  /**
   * tag值为三种情况：
   * 1、value为Symbol类型，则tag==="Symbol"
   * 2、value如上边obj情况时，tag===value[symToStringTag]
   * 3、否则为undefined
   */
  const tag = value[symToStringTag]

  // 标记位，并配合try…catch用来检测错误
  let unmasked = false
  try {
    /**
     * 这里试了IE8+的各种浏览器，没能试出报错的情况
     * 主要的作用是去掉obj中[Symbol.toStringTag]作为属性的情况，如注释代码28~30行；
     * toString.call(obj) //"[object toStringTag]"
     */
    value[symToStringTag] = undefined
    unmasked = true
  } catch (e) { }
  //toString.call(obj) //"[object Object]"
  const result = toString.call(value)
  if (unmasked) {//value[symToStringTag] = undefined 没报错的时候
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      // 去掉强制添加的
      delete value[symToStringTag]
    }
  }
  return result
}

export default baseGetTag
