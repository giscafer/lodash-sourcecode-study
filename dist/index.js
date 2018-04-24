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
	
	var _fill = __webpack_require__(1);
	
	var _fill2 = _interopRequireDefault(_fill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _fill = __webpack_require__(2);
	
	var _fill2 = _interopRequireDefault(_fill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var array = [1, 2, 3];
	
	(0, _fill2.default)(array, 'a', '3');
	
	console.log(array);
	console.log((0, _fill2.default)([4, 6, 8, 10], '*', 1, 3));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _baseFill = __webpack_require__(3);
	
	var _baseFill2 = _interopRequireDefault(_baseFill);
	
	var _isIterateeCall = __webpack_require__(12);
	
	var _isIterateeCall2 = _interopRequireDefault(_isIterateeCall);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	  * Fills elements of `array` with `value` from `start` up to, but not
	  * including, `end`.
	  * 使用`value`值填充数组`array`，从下标`start`开始（包含），到`end`结束(不包含)
	  * **Note:** This method mutates `array`.
	  * 此方法改变数组 `array`。
	  * @static
	  * @memberOf _
	  * @since 3.2.0
	  * @category Array
	  * @param {Array} array 数组对象
	  * @param {*} value 填充的值
	  * @param {number} [start=0] 开始下标位置，默认为0
	  * @param {number} [end=array.length] 结束下标位置，默认为数组长度
	  * @returns {Array} Returns `array`. 返回替换后的数组
	  * @example
	  *
	  * var array = [1, 2, 3];
	  *
	  * _.fill(array, 'a');
	  * console.log(array);
	  * // => ['a', 'a', 'a']
	  *
	  * _.fill(Array(3), 2);
	  * // => [2, 2, 2]
	  *
	  * _.fill([4, 6, 8, 10], '*', 1, 3);
	  * // => [4, '*', '*', 10]
	  */
	function fill(array, value, start, end) {
	    var length = array == null ? 0 : array.length;
	    if (!length) {
	        return [];
	    }
	    // 如果参数start传的参不符合要求，则设置默认值
	    // isIterateeCall 有效的值
	    if (start && typeof start != 'number' && (0, _isIterateeCall2.default)(value, start, array)) {
	        start = 0;
	        end = length;
	    }
	    return (0, _baseFill2.default)(array, value, start, end);
	}
	
	exports.default = fill;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _toFinite = __webpack_require__(4);
	
	var _toFinite2 = _interopRequireDefault(_toFinite);
	
	var _toLength = __webpack_require__(10);
	
	var _toLength2 = _interopRequireDefault(_toLength);
	
	var _toInteger = __webpack_require__(11);
	
	var _toInteger2 = _interopRequireDefault(_toInteger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    start = (0, _toInteger2.default)(start);
	    if (start < 0) {
	        // 负数处理
	        start = -start > length ? 0 : length + start;
	    }
	    end = end === undefined || end > length ? length : (0, _toInteger2.default)(end);
	    if (end < 0) {
	        end += length;
	    }
	    // end负数情况
	    end = start > end ? 0 : (0, _toLength2.default)(end);
	    // 循环设置值
	    while (start < end) {
	        array[start++] = value;
	    }
	    return array;
	}
	
	exports.default = baseFill;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toNumber = __webpack_require__(5);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	var MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * toFinite(3.2)
	 * // => 3.2
	 *
	 * toFinite(Number.MIN_VALUE)
	 * // => 5e-324
	 *
	 * toFinite(Infinity)
	 * // => 1.7976931348623157e+308
	 *
	 * toFinite('3.2')
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = (0, _toNumber2.default)(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = value < 0 ? -1 : 1;
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	exports.default = toFinite;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isObject = __webpack_require__(6);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _isSymbol = __webpack_require__(7);
	
	var _isSymbol2 = _interopRequireDefault(_isSymbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @see isInteger, toInteger, isNumber
	 * @example
	 *
	 * toNumber(3.2)
	 * // => 3.2
	 *
	 * toNumber(Number.MIN_VALUE)
	 * // => 5e-324
	 *
	 * toNumber(Infinity)
	 * // => Infinity
	 *
	 * toNumber('3.2')
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if ((0, _isSymbol2.default)(value)) {
	    return NAN;
	  }
	  if ((0, _isObject2.default)(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = (0, _isObject2.default)(other) ? '' + other : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}
	
	exports.default = toNumber;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * isObject({})
	 * // => true
	 *
	 * isObject([1, 2, 3])
	 * // => true
	 *
	 * isObject(Function)
	 * // => true
	 *
	 * isObject(null)
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return value != null && (type == 'object' || type == 'function');
	}
	
	exports.default = isObject;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _getTag = __webpack_require__(8);
	
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseGetTag = __webpack_require__(9);
	
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toInteger = __webpack_require__(11);
	
	var _toInteger2 = _interopRequireDefault(_toInteger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;
	
	/**
	 * Converts `value` to an integer suitable for use as the length of an
	 * array-like object.
	 *
	 * **Note:** This method is based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * toLength(3.2)
	 * // => 3
	 *
	 * toLength(Number.MIN_VALUE)
	 * // => 0
	 *
	 * toLength(Infinity)
	 * // => 4294967295
	 *
	 * toLength('3.2')
	 * // => 3
	 */
	function toLength(value) {
	  if (!value) {
	    return 0;
	  }
	  value = (0, _toInteger2.default)(value);
	  if (value < 0) {
	    return 0;
	  }
	  if (value > MAX_ARRAY_LENGTH) {
	    return MAX_ARRAY_LENGTH;
	  }
	  return value;
	}
	
	exports.default = toLength;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toFinite = __webpack_require__(4);
	
	var _toFinite2 = _interopRequireDefault(_toFinite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @see isInteger, isNumber, toNumber
	 * @example
	 *
	 * toInteger(3.2)
	 * // => 3
	 *
	 * toInteger(Number.MIN_VALUE)
	 * // => 0
	 *
	 * toInteger(Infinity)
	 * // => 1.7976931348623157e+308
	 *
	 * toInteger('3.2')
	 * // => 3
	 */
	function toInteger(value) {
	  var result = (0, _toFinite2.default)(value);
	  var remainder = result % 1;
	
	  return remainder ? result - remainder : result;
	}
	
	exports.default = toInteger;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _isArrayLike = __webpack_require__(13);
	
	var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
	
	var _isIndex = __webpack_require__(15);
	
	var _isIndex2 = _interopRequireDefault(_isIndex);
	
	var _isObject = __webpack_require__(6);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _eq = __webpack_require__(16);
	
	var _eq2 = _interopRequireDefault(_eq);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    if (!(0, _isObject2.default)(object)) {
	        return false;
	    }
	    var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
	    if (type == 'number'
	    // 数值型 且 object为数组 且 index为有效数组索引
	    ? (0, _isArrayLike2.default)(object) && (0, _isIndex2.default)(index, object.length) :
	    // 字符串 且 为object的key值
	    type == 'string' && index in object) {
	        // 数值相等
	        return (0, _eq2.default)(object[index], value);
	    }
	    return false;
	}
	
	exports.default = isIterateeCall;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isLength = __webpack_require__(14);
	
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
	  // 不为空，不是函数，有length属性
	  return value != null && typeof value != 'function' && (0, _isLength2.default)(value.length);
	}
	
	exports.default = isArrayLike;

/***/ }),
/* 14 */
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
	  // 符合自然数内的正整数&包含0
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	exports.default = isLength;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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
	    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	    length = length == null ? MAX_SAFE_INTEGER : length;
	    // value是number类型 && 不是Symbol && 由数字组成 && 大于-1 && 是整数 && 有效数值范围
	    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	
	exports.default = isIndex;

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
	  // 我们指定NaN==NaN是不等的，(value !== value && other !== other)这里兼容的这样的情况
	  return value === other || value !== value && other !== other;
	}
	
	exports.default = eq;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map