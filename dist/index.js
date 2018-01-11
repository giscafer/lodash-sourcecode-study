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
	
	var _getTest = __webpack_require__(1);
	
	var _getTest2 = _interopRequireDefault(_getTest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(2);
	
	var _get2 = _interopRequireDefault(_get);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var object = { 'a': [{ 'b': { 'c': 3 } }] };
	
	console.log((0, _get2.default)(object, 'a[0].b.c'));
	// => 3
	// console.log(get(object, ['a', '0', 'b', 'c']));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseGet = __webpack_require__(3);
	
	var _baseGet2 = _interopRequireDefault(_baseGet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 * 取得`path`路径下的`object`的值，`undefined` 时支持默认值`defaultValue`替换
	 *
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object 需要查询的对象
	 * @param {Array|string} path 需要获取的属性路径，支持 Array|string 两种类型参数，比较方便.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @see has, hasIn, set, unset
	 * @example
	 *
	 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
	 *
	 * get(object, 'a[0].b.c')
	 * // => 3
	 *
	 * get(object, ['a', '0', 'b', 'c'])
	 * // => 3
	 *
	 * get(object, 'a.b.c', 'default')
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  // 过程比较简单，对undefined值判断取默认值defaultValue，所有取值逻辑都在`baseGet`模块内。
	  var result = object == null ? undefined : (0, _baseGet2.default)(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	exports.default = get;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _castPath = __webpack_require__(4);
	
	var _castPath2 = _interopRequireDefault(_castPath);
	
	var _toKey = __webpack_require__(17);
	
	var _toKey2 = _interopRequireDefault(_toKey);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The base implementation of `get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = (0, _castPath2.default)(path, object);
	
	  var index = 0;
	  var length = path.length;
	
	  while (object != null && index < length) {
	    object = object[(0, _toKey2.default)(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}
	
	exports.default = baseGet;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isKey = __webpack_require__(5);
	
	var _isKey2 = _interopRequireDefault(_isKey);
	
	var _stringToPath = __webpack_require__(9);
	
	var _stringToPath2 = _interopRequireDefault(_stringToPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (Array.isArray(value)) {
	    return value;
	  }
	  return (0, _isKey2.default)(value, object) ? [value] : (0, _stringToPath2.default)(value);
	}
	
	exports.default = castPath;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _isSymbol = __webpack_require__(6);
	
	var _isSymbol2 = _interopRequireDefault(_isSymbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
	var reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (Array.isArray(value)) {
	    return false;
	  }
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type == 'number' || type == 'boolean' || value == null || (0, _isSymbol2.default)(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}
	
	exports.default = isKey;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _getTag = __webpack_require__(7);
	
	var _getTag2 = _interopRequireDefault(_getTag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 * 检测`value`值是否为symbol或被定义的
	 *
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * isSymbol(Symbol.iterator)
	 * // => true
	 *
	 * isSymbol('abc')
	 * // => false
	 */
	function isSymbol(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'symbol' || type == 'object' && value != null && (0, _getTag2.default)(value) == '[object Symbol]';
	}
	
	exports.default = isSymbol;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseGetTag = __webpack_require__(8);
	
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _memoizeCapped = __webpack_require__(10);
	
	var _memoizeCapped2 = _interopRequireDefault(_memoizeCapped);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var charCodeOfDot = '.'.charCodeAt(0);
	var reEscapeChar = /\\(\\)?/g;
	var rePropName = RegExp(
	// Match anything that isn't a dot or bracket.
	'[^.[\\]]+' + '|' +
	// Or match property names within brackets.
	'\\[(?:' +
	// Match a non-string expression.
	'([^"\'].*)' + '|' +
	// Or match strings (supports escaping characters).
	'(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' + ')\\]' + '|' +
	// Or match "" as the space between consecutive dots or empty brackets.
	'(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', 'g');
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = (0, _memoizeCapped2.default)(function (string) {
	  var result = [];
	  if (string.charCodeAt(0) === charCodeOfDot) {
	    result.push('');
	  }
	  string.replace(rePropName, function (match, expression, quote, subString) {
	    var key = match;
	    if (quote) {
	      key = subString.replace(reEscapeChar, '$1');
	    } else if (expression) {
	      key = expression.trim();
	    }
	    result.push(key);
	  });
	  return result;
	});
	
	exports.default = stringToPath;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _memoize = __webpack_require__(11);
	
	var _memoize2 = _interopRequireDefault(_memoize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = (0, _memoize2.default)(func, function (key) {
	    var cache = result.cache;
	
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  return result;
	}
	
	exports.default = memoizeCapped;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MapCache = __webpack_require__(12);
	
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
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
	    throw new TypeError('Expected a function');
	  }
	  var memoized = function memoized() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var key = resolver ? resolver.apply(this, args) : args[0];
	    var cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || _MapCache2.default)();
	  return memoized;
	}
	
	memoize.Cache = _MapCache2.default;
	
	exports.default = memoize;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Hash = __webpack_require__(13);
	
	var _Hash2 = _interopRequireDefault(_Hash);
	
	var _ListCache = __webpack_require__(14);
	
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
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}
	
	var MapCache = function () {
	
	  /**
	   * Creates a map cache object to store key-value pairs.
	   *
	   * @private
	   * @constructor
	   * @param {Array} [entries] The key-value pairs to cache.
	   */
	  function MapCache(entries) {
	    _classCallCheck(this, MapCache);
	
	    var index = -1;
	    var length = entries == null ? 0 : entries.length;
	
	    this.clear();
	    while (++index < length) {
	      var entry = entries[index];
	      this.set(entry[0], entry[1]);
	    }
	  }
	
	  /**
	   * Removes all key-value entries from the map.
	   *
	   * @memberOf MapCache
	   */
	
	
	  _createClass(MapCache, [{
	    key: 'clear',
	    value: function clear() {
	      this.size = 0;
	      this.__data__ = {
	        'hash': new _Hash2.default(),
	        'map': new (Map || _ListCache2.default)(),
	        'string': new _Hash2.default()
	      };
	    }
	
	    /**
	     * Removes `key` and its value from the map.
	     *
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	
	  }, {
	    key: 'delete',
	    value: function _delete(key) {
	      var result = getMapData(this, key)['delete'](key);
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
	      return getMapData(this, key).has(key);
	    }
	
	    /**
	     * Sets the map `key` to `value`.
	     *
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
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _assocIndexOf = __webpack_require__(15);
	
	var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _eq = __webpack_require__(16);
	
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isSymbol = __webpack_require__(6);
	
	var _isSymbol2 = _interopRequireDefault(_isSymbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || (0, _isSymbol2.default)(value)) {
	    return value;
	  }
	  var result = '' + value;
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}
	
	exports.default = toKey;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map