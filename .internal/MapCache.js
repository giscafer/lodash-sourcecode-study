
import Hash from './Hash.js'
import ListCache from './ListCache.js'

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData({ __data__ }, key) {
  const data = __data__
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map
}

/**
 * Checks if `value` is suitable for use as unique object key.
 * 检测`value`是否适合作为唯一的key值
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  const type = typeof value;
  // 字符串 & number & symbol & boolean 且不为__proto__适合作为key
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null)
}

class MapCache {

  /**
   * Creates a map cache object to store key-value pairs.
   * 创建一个缓存对象来存储键值对。
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length

    this.clear()
    // 实例化时支持缓存entries
    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  /**
   * Removes all key-value entries from the map.
   * 清空缓存
   * @memberOf MapCache
   */
  clear() {
    this.size = 0
    // 字符串 | number、boolean、symbol 使用的是 new Hash 缓存
    // 非以上类型使用(Map || ListCache)作为缓存
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    }
  }

  /**
   * Removes `key` and its value from the map.
   * 从map中删除指定`key`的缓存值
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  delete(key) {
    // 获取delete方法删除key值
    const result = getMapData(this, key)['delete'](key)
    // 删除成功则刷新计数值
    this.size -= result ? 1 : 0
    return result
  }

  /**
   * Gets the map value for `key`.
   *
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key) {
    // map.get(key);
    return getMapData(this, key).get(key)
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key) {
    // map.has(key)
    return getMapData(this, key).has(key)
  }

  /**
   * Sets the map `key` to `value`.
   * 缓存值，key如果未对象，是使用对象的引用作为key的
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  set(key, value) {
    const data = getMapData(this, key)
    const size = data.size
    data.set(key, value)
    this.size += data.size == size ? 0 : 1
    return this
  }
}

export default MapCache
