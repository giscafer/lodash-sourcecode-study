import baseGetTag from './baseGetTag.js'
// 定义的数据类型
/** `Object#toString` 结果的参照. */
const dataViewTag = '[object DataView]'
const mapTag = '[object Map]'
const objectTag = '[object Object]'
const promiseTag = '[object Promise]'
const setTag = '[object Set]'
const weakMapTag = '[object WeakMap]'

/**
 * 用于检测参数对象是否为 maps, sets, 和 weakmaps 、Promise对象或接口的子类. 
 */
const dataViewCtorString = `${DataView}`
const mapCtorString = `${Map}`
const promiseCtorString = `${Promise}`
const setCtorString = `${Set}`
const weakMapCtorString = `${WeakMap}`

/**
 * Gets the `toStringTag` of `value`.
 * 获取`value`参数的`toStringTag`
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
let getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
// 修补特殊环境下的表现不一致的问题，判断getTag()的数据类型是否等于定义的数据类型
// 比如用户环境自己重写覆盖了这些对象或者接口造成不一致的情况
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
  (getTag(new Map) != mapTag) ||
  (getTag(Promise.resolve()) != promiseTag) ||
  (getTag(new Set) != setTag) ||
  (getTag(new WeakMap) != weakMapTag)) {
  // 如果表现不一致，兼容处理
  getTag = (value) => {
    // 获取参数的类型检测
    const result = baseGetTag(value)
    // 如果为'[object, Object]' ，返回此对象的构造函数引用，反之undefined
    const Ctor = result == objectTag ? value.constructor : undefined
    // 如果 Ctor 为 true 返回 `${Ctor}`字符串 反之为空
    const ctorString = Ctor ? `${Ctor}` : ''

    if (ctorString) {
      // 比较构造方法字符串是否匹配
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag
        case mapCtorString: return mapTag
        case promiseCtorString: return promiseTag
        case setCtorString: return setTag
        case weakMapCtorString: return weakMapTag
      }
    }
    return result
  }
}

export default getTag
