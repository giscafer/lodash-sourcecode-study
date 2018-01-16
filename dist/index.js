/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _memoizeTest = __webpack_require__(1);
	
	var _memoizeTest2 = _interopRequireDefault(_memoizeTest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _memoize = __webpack_require__(2);
	
	var _memoize2 = _interopRequireDefault(_memoize);
	
	var _values2 = __webpack_require__(8);
	
	var _values3 = _interopRequireDefault(_values2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var object = { 'a': 1, 'b': 2 };
	var other = { 'c': 3, 'd': 4 };
	
	var values = (0, _memoize2.default)(_values3.default);
	
	console.log(values(object));
	// => [1, 2]
	
	console.log(values(other));
	// => [3, 4]
	
	object.a = 2;
	console.log(object.a);
	// => 2
	console.log(values(object));
	// => [1, 2]
	
	// Modify the result cache.
	// values.cache.set(object, ['a', 'b']);
	values.cache.delete(object);
	console.log(values(object));
	// => ['a', 'b']
	
	// Replace `_.memoize.Cache`.
	// _.memoize.Cache = WeakMap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MapCache = __webpack_require__(3);
	
	var _MapCache2 = _interopRequireDefault(_MapCache);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * const object = { 'a': 1, 'b': 2 }
	 * const other = { 'c': 3, 'd': 4 }
	 *
	 * const values = memoize(values)
	 * values(object)
	 * // => [1, 2]
	 *
	 * values(other)
	 * // => [3, 4]
	 *
	 * object.a = 2
	 * values(object)
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b'])
	 * values(object)
	 * // => ['a', 'b']
	 *
	 * // Replace `memoize.Cache`.
	 * memoize.Cache = WeakMap
	 */
	
	//memoize 方法用来缓存 `func`的结果，缓存后的结果只能通过暴露的`cache`属性去修改
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
	    throw new TypeError('Expected a function');
	  }
	  var memoized = function memoized() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    // 没有resolver则使用第一个参数作为key
	    var key = resolver ? resolver.apply(this, args) : args[0];
	    var cache = memoized.cache;
	
	    if (cache.has(key)) {
	      // 如果之前已缓存，直接获取值
	      return cache.get(key);
	    }
	    // 没有缓存过，则调用func方法获取结果缓存
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  // 创建一个MapCache实例用来缓存
	  memoized.cache = new (memoize.Cache || _MapCache2.default)();
	  return memoized;
	}
	// 基于MapCache
	memoize.Cache = _MapCache2.default;
	
	exports.default = memoize;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Hash = __webpack_require__(4);
	
	var _Hash2 = _interopRequireDefault(_Hash);
	
	var _ListCache = __webpack_require__(5);
	
	var _ListCache2 = _interopRequireDefault(_ListCache);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(_ref, key) {
	  var __data__ = _ref.__data__;
	
	  var data = __data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 * 检测`value`是否适合作为唯一的key值
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  // 字符串 & number & symbol & boolean 且不为__proto__适合作为key
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}
	
	var MapCache = function () {
	
	  /**
	   * Creates a map cache object to store key-value pairs.
	   * 创建一个缓存对象来存储键值对。
	   * @private
	   * @constructor
	   * @param {Array} [entries] The key-value pairs to cache.
	   */
	  function MapCache(entries) {
	    _classCallCheck(this, MapCache);
	
	    var index = -1;
	    var length = entries == null ? 0 : entries.length;
	
	    this.clear();
	    // 实例化时支持缓存entries
	    while (++index < length) {
	      var entry = entries[index];
	      this.set(entry[0], entry[1]);
	    }
	  }
	
	  /**
	   * Removes all key-value entries from the map.
	   * 清空缓存
	   * @memberOf MapCache
	   */
	
	
	  _createClass(MapCache, [{
	    key: 'clear',
	    value: function clear() {
	      this.size = 0;
	      // 字符串 | number、boolean、symbol 使用的是 new Hash 缓存
	      // 非以上类型使用(Map || ListCache)作为缓存
	      this.__data__ = {
	        'hash': new _Hash2.default(),
	        'map': new (Map || _ListCache2.default)(),
	        'string': new _Hash2.default()
	      };
	    }
	
	    /**
	     * Removes `key` and its value from the map.
	     * 从map中删除指定`key`的缓存值
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	
	  }, {
	    key: 'delete',
	    value: function _delete(key) {
	      // 获取delete方法删除key值
	      var result = getMapData(this, key)['delete'](key);
	      // 删除成功则刷新计数值
	      this.size -= result ? 1 : 0;
	      return result;
	    }
	
	    /**
	     * Gets the map value for `key`.
	     *
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	
	  }, {
	    key: 'get',
	    value: function get(key) {
	      // map.get(key);
	      return getMapData(this, key).get(key);
	    }
	
	    /**
	     * Checks if a map value for `key` exists.
	     *
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	
	  }, {
	    key: 'has',
	    value: function has(key) {
	      // map.has(key)
	      return getMapData(this, key).has(key);
	    }
	
	    /**
	     * Sets the map `key` to `value`.
	     * 缓存值，key如果未对象，是使用对象的引用作为key的
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */
	
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      var data = getMapData(this, key);
	      var size = data.size;
	      data.set(key, value);
	      this.size += data.size == size ? 0 : 1;
	      return this;
	    }
	  }]);
	
	  return MapCache;
	}();
	
	exports.default = MapCache;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Hash类，用来创建一个带有set\get\delete\clear等方法的hash对象
	 */
	
	var Hash = function () {
	
	  /**
	   * Creates a hash object.
	   *
	   * @private
	   * @constructor
	   * @param {Array} [entries] The key-value pairs to cache.
	   */
	  function Hash(entries) {
	    _classCallCheck(this, Hash);
	
	    var index = -1;
	    var length = entries == null ? 0 : entries.length;
	
	    this.clear();
	    while (++index < length) {
	      var entry = entries[index];
	      this.set(entry[0], entry[1]);
	    }
	  }
	
	  /**
	   * Removes all key-value entries from the hash.
	   *
	   * @memberOf Hash
	   */
	
	
	  _createClass(Hash, [{
	    key: 'clear',
	    value: function clear() {
	      this.__data__ = Object.create(null);
	      this.size = 0;
	    }
	
	    /**
	     * Removes `key` and its value from the hash.
	     *
	     * @memberOf Hash
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	
	  }, {
	    key: 'delete',
	    value: function _delete(key) {
	      var result = this.has(key) && delete this.__data__[key];
	      this.size -= result ? 1 : 0;
	      return result;
	    }
	
	    /**
	     * Gets the hash value for `key`.
	     *
	     * @memberOf Hash
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	
	  }, {
	    key: 'get',
	    value: function get(key) {
	      var data = this.__data__;
	      var result = data[key];
	      return result === HASH_UNDEFINED ? undefined : result;
	    }
	
	    /**
	     * Checks if a hash value for `key` exists.
	     *
	     * @memberOf Hash
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	
	  }, {
	    key: 'has',
	    value: function has(key) {
	      var data = this.__data__;
	      return data[key] !== undefined;
	    }
	
	    /**
	     * Sets the hash `key` to `value`.
	     *
	     * @memberOf Hash
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the hash instance.
	     */
	
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      var data = this.__data__;
	      this.size += this.has(key) ? 0 : 1;
	      data[key] = value === undefined ? HASH_UNDEFINED : value;
	      return this;
	    }
	  }]);
	
	  return Hash;
	}();
	
	exports.default = Hash;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _assocIndexOf = __webpack_require__(6);
	
	var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * ListCache 类，用来创建一个带有set\get\delete\clear等方法的list cache对象,
	 * 和 Hash区别是，__data__使用数组来存储
	 */
	var ListCache = function () {
	
	  /**
	   * Creates an list cache object.
	   *
	   * @private
	   * @constructor
	   * @param {Array} [entries] The key-value pairs to cache.
	   */
	  function ListCache(entries) {
	    _classCallCheck(this, ListCache);
	
	    var index = -1;
	    var length = entries == null ? 0 : entries.length;
	
	    this.clear();
	    while (++index < length) {
	      var entry = entries[index];
	      this.set(entry[0], entry[1]);
	    }
	  }
	
	  /**
	   * Removes all key-value entries from the list cache.
	   *
	   * @memberOf ListCache
	   */
	
	
	  _createClass(ListCache, [{
	    key: 'clear',
	    value: function clear() {
	      this.__data__ = [];
	      this.size = 0;
	    }
	
	    /**
	     * Removes `key` and its value from the list cache.
	     *
	     * @memberOf ListCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	
	  }, {
	    key: 'delete',
	    value: function _delete(key) {
	      var data = this.__data__;
	      var index = (0, _assocIndexOf2.default)(data, key);
	
	      if (index < 0) {
	        return false;
	      }
	      var lastIndex = data.length - 1;
	      if (index == lastIndex) {
	        data.pop();
	      } else {
	        data.splice(index, 1);
	      }
	      --this.size;
	      return true;
	    }
	
	    /**
	     * Gets the list cache value for `key`.
	     *
	     * @memberOf ListCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	
	  }, {
	    key: 'get',
	    value: function get(key) {
	      var data = this.__data__;
	      var index = (0, _assocIndexOf2.default)(data, key);
	      return index < 0 ? undefined : data[index][1];
	    }
	
	    /**
	     * Checks if a list cache value for `key` exists.
	     *
	     * @memberOf ListCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	
	  }, {
	    key: 'has',
	    value: function has(key) {
	      return (0, _assocIndexOf2.default)(this.__data__, key) > -1;
	    }
	
	    /**
	     * Sets the list cache `key` to `value`.
	     *
	     * @memberOf ListCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the list cache instance.
	     */
	
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      var data = this.__data__;
	      var index = (0, _assocIndexOf2.default)(data, key);
	
	      if (index < 0) {
	        ++this.size;
	        data.push([key, value]);
	      } else {
	        data[index][1] = value;
	      }
	      return this;
	    }
	  }]);
	
	  return ListCache;
	}();
	
	exports.default = ListCache;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _eq = __webpack_require__(7);
	
	var _eq2 = _interopRequireDefault(_eq);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	
	  while (length--) {
	    if ((0, _eq2.default)(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	exports.default = assocIndexOf;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * const object = { 'a': 1 }
	 * const other = { 'a': 1 }
	 *
	 * eq(object, object)
	 * // => true
	 *
	 * eq(object, other)
	 * // => false
	 *
	 * eq('a', 'a')
	 * // => true
	 *
	 * eq('a', Object('a'))
	 * // => false
	 *
	 * eq(NaN, NaN)
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}
	
	exports.default = eq;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseValues = __webpack_require__(9);
	
	var _baseValues2 = _interopRequireDefault(_baseValues);
	
	var _keys = __webpack_require__(10);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @since 0.1.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @see keys, valuesIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1
	 *   this.b = 2
	 * }
	 *
	 * Foo.prototype.c = 3
	 *
	 * values(new Foo)
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * values('hi')
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : (0, _baseValues2.default)(object, (0, _keys2.default)(object));
	}
	
	exports.default = values;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * The base implementation of `values` and `valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return props == null ? [] : props.map(function (key) {
	    return object[key];
	  });
	}
	
	exports.default = baseValues;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _arrayLikeKeys = __webpack_require__(11);
	
	var _arrayLikeKeys2 = _interopRequireDefault(_arrayLikeKeys);
	
	var _isArrayLike = __webpack_require__(22);
	
	var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @since 0.1.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @see values, valuesIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1
	 *   this.b = 2
	 * }
	 *
	 * Foo.prototype.c = 3
	 *
	 * keys(new Foo)
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * keys('hi')
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return (0, _isArrayLike2.default)(object) ? (0, _arrayLikeKeys2.default)(object) : Object.keys(Object(object));
	}
	
	exports.default = keys;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isArguments = __webpack_require__(12);
	
	var _isArguments2 = _interopRequireDefault(_isArguments);
	
	var _isBuffer = __webpack_require__(15);
	
	var _isBuffer2 = _interopRequireDefault(_isBuffer);
	
	var _isIndex = __webpack_require__(19);
	
	var _isIndex2 = _interopRequireDefault(_isIndex);
	
	var _isTypedArray = __webpack_require__(20);
	
	var _isTypedArray2 = _interopRequireDefault(_isTypedArray);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = Array.isArray(value);
	  var isArg = !isArr && (0, _isArguments2.default)(value);
	  var isBuff = !isArr && !isArg && (0, _isBuffer2.default)(value);
	  var isType = !isArr && !isArg && !isBuff && (0, _isTypedArray2.default)(value);
	  var skipIndexes = isArr || isArg || isBuff || isType;
	  var length = value.length;
	  var result = new Array(skipIndexes ? length : 0);
	  var index = skipIndexes ? -1 : length;
	  while (++index < length) {
	    result[index] = '' + index;
	  }
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
	    // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' ||
	    // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') ||
	    // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
	    (0, _isIndex2.default)(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	exports.default = arrayLikeKeys;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _getTag = __webpack_require__(13);
	
	var _getTag2 = _interopRequireDefault(_getTag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
	 * @example
	 *
	 * isArguments(function() { return arguments }())
	 * // => true
	 *
	 * isArguments([1, 2, 3])
	 * // => false
	 */
	function isArguments(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value !== null && (0, _getTag2.default)(value) == '[object Arguments]';
	}
	
	exports.default = isArguments;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseGetTag = __webpack_require__(14);
	
	var _baseGetTag2 = _interopRequireDefault(_baseGetTag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 定义的数据类型
	/** `Object#toString` 结果的参照. */
	var dataViewTag = '[object DataView]';
	var mapTag = '[object Map]';
	var objectTag = '[object Object]';
	var promiseTag = '[object Promise]';
	var setTag = '[object Set]';
	var weakMapTag = '[object WeakMap]';
	
	/**
	 * 用于检测参数对象是否为 maps, sets, 和 weakmaps 、Promise对象或接口的子类. 
	 */
	var dataViewCtorString = '' + DataView;
	var mapCtorString = '' + Map;
	var promiseCtorString = '' + Promise;
	var setCtorString = '' + Set;
	var weakMapCtorString = '' + WeakMap;
	
	/**
	 * Gets the `toStringTag` of `value`.
	 * 获取`value`参数的`toStringTag`
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag2.default;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	// 修补特殊环境下的表现不一致的问题，判断getTag()的数据类型是否等于定义的数据类型
	// 比如用户环境自己重写覆盖了这些对象或者接口造成不一致的情况
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || getTag(new Map()) != mapTag || getTag(Promise.resolve()) != promiseTag || getTag(new Set()) != setTag || getTag(new WeakMap()) != weakMapTag) {
	  // 如果表现不一致，兼容处理
	  getTag = function getTag(value) {
	    // 获取参数的类型检测
	    var result = (0, _baseGetTag2.default)(value);
	    // 如果为'[object, Object]' ，返回此对象的构造函数引用，反之undefined
	    var Ctor = result == objectTag ? value.constructor : undefined;
	    // 如果 Ctor 为 true 返回 `${Ctor}`字符串 反之为空
	    var ctorString = Ctor ? '' + Ctor : '';
	
	    if (ctorString) {
	      // 比较构造方法字符串是否匹配
	      switch (ctorString) {
	        case dataViewCtorString:
	          return dataViewTag;
	        case mapCtorString:
	          return mapTag;
	        case promiseCtorString:
	          return promiseTag;
	        case setCtorString:
	          return setTag;
	        case weakMapCtorString:
	          return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	exports.default = getTag;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var objectProto = Object.prototype;
	var hasOwnProperty = objectProto.hasOwnProperty;
	var toString = objectProto.toString;
	var symToStringTag = typeof Symbol != 'undefined' ? Symbol.toStringTag : undefined;
	
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
	    return value === undefined ? '[object Undefined]' : '[object Null]';
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
	  var isOwn = hasOwnProperty.call(value, symToStringTag);
	  /**
	   * tag值为三种情况：
	   * 1、value为Symbol类型，则tag==="Symbol"
	   * 2、value如上边obj情况时，tag===value[symToStringTag]
	   * 3、否则为undefined
	   */
	  var tag = value[symToStringTag];
	
	  // 标记位，并配合try…catch用来检测错误
	  var unmasked = false;
	  try {
	    /**
	     * 这里试了IE8+的各种浏览器，没能试出报错的情况
	     * 主要的作用是去掉obj中[Symbol.toStringTag]作为属性的情况，如注释代码28~30行；
	     * toString.call(obj) //"[object toStringTag]"
	     */
	    value[symToStringTag] = undefined;
	    unmasked = true;
	  } catch (e) {}
	  //toString.call(obj) //"[object Object]"
	  var result = toString.call(value);
	  if (unmasked) {
	    //value[symToStringTag] = undefined 没报错的时候
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      // 去掉强制添加的
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	exports.default = baseGetTag;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _root = __webpack_require__(17);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports !== null && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module !== null && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? _root2.default.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * isBuffer(new Buffer(2))
	 * // => true
	 *
	 * isBuffer(new Uint8Array(2))
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || function () {
	  return false;
	};
	
	exports.default = isBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _freeGlobal = __webpack_require__(18);
	
	var _freeGlobal2 = _interopRequireDefault(_freeGlobal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self !== null && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = _freeGlobal2.default || freeSelf || Function('return this')();
	
	exports.default = root;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global !== null && global.Object === Object && global;
	
	exports.default = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  length = length == null ? MAX_SAFE_INTEGER : length;
	
	  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	
	exports.default = isIndex;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _getTag = __webpack_require__(13);
	
	var _getTag2 = _interopRequireDefault(_getTag);
	
	var _nodeUtil = __webpack_require__(21);
	
	var _nodeUtil2 = _interopRequireDefault(_nodeUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Used to match `toStringTag` values of typed arrays. */
	var reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)\]$/;
	
	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil2.default && _nodeUtil2.default.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * isTypedArray(new Uint8Array)
	 * // => true
	 *
	 * isTypedArray([])
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? function (value) {
	  return nodeIsTypedArray(value);
	} : function (value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value !== null && reTypedTag.test((0, _getTag2.default)(value));
	};
	
	exports.default = isTypedArray;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _freeGlobal = __webpack_require__(18);
	
	var _freeGlobal2 = _interopRequireDefault(_freeGlobal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports !== null && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module !== null && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal2.default.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = function () {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}();
	
	exports.default = nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isLength = __webpack_require__(23);
	
	var _isLength2 = _interopRequireDefault(_isLength);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * isArrayLike([1, 2, 3])
	 * // => true
	 *
	 * isArrayLike(document.body.children)
	 * // => true
	 *
	 * isArrayLike('abc')
	 * // => true
	 *
	 * isArrayLike(Function)
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && typeof value != 'function' && (0, _isLength2.default)(value.length);
	}
	
	exports.default = isArrayLike;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * isLength(3)
	 * // => true
	 *
	 * isLength(Number.MIN_VALUE)
	 * // => false
	 *
	 * isLength(Infinity)
	 * // => false
	 *
	 * isLength('3')
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	exports.default = isLength;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map