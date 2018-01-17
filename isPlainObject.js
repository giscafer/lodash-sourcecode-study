import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * 检查`value` 是否为普通对象，即由`Object`构造函数创建的对象，或具有`[[Prototype]]` 值为`null`的对象。
 *
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1
 * }
 *
 * isPlainObject(new Foo)
 * // => false
 *
 * isPlainObject([1, 2, 3])
 * // => false
 *
 * isPlainObject({ 'x': 0, 'y': 0 })
 * // => true
 *
 * isPlainObject(Object.create(null))
 * // => true
 */
function isPlainObject(value) {
  // 非object类型
  if (!isObjectLike(value) || baseGetTag(value) != '[object Object]') {
    return false
  }
  // 空对象，如Object.create(null)
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value;
  // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值
  while (Object.getPrototypeOf(proto) !== null) {
    // 给定对象的原型。如果没有继承属性，则返回 null 
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}

export default isPlainObject
