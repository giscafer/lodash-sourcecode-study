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
	
	var _afterTest = __webpack_require__(1);
	
	var _afterTest2 = _interopRequireDefault(_afterTest);
	
	var _assignWith = __webpack_require__(3);
	
	var _assignWith2 = _interopRequireDefault(_assignWith);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import a from './isSymbol.test.js';
	// import a from './add.test.js';
	function customizer(objValue, srcValue) {
	  return isUndefined(objValue) ? srcValue : objValue;
	}
	// import ary from './ary.test.js'; //源码少./.internal/createWrap.js
	
	
	var defaults = partialRight(_assignWith2.default, customizer);
	
	defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	// => { 'a': 1, 'b': 2 }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _after = __webpack_require__(2);
	
	var _after2 = _interopRequireDefault(_after);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var saves = ['profile', 'settings'];
	
	var done = (0, _after2.default)(saves.length, function () {
	    console.log('done saving!');
	});
	
	saves.forEach(function (item) {
	    console.log(item);
	    done();
	});
	// => 函数执行>=2次后打印 'done saving!'

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 创建一个触发执行`func` 的函数，一旦方法被触发>=n次后，就执行func。
	 * @since 0.1.0
	 * @category Function
	 * @param {number} n 调用“func”之前调用的次数 n。.
	 * @param {Function} func 要调用的回调方法
	 * @returns {Function} 返回一个新的已约束的函数
	 * @example
	 *
	 * const saves = ['profile', 'settings']
	 * const done = after(saves.length, () => console.log('done saving!'))
	 *
	 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
	 * // => Logs 'done saving!' after the two async saves have completed.
	 */
	function after(n, func) {
	  if (typeof func != 'function') {
	    throw new TypeError('Expected a function');
	  }
	  // 返回闭包函数，n被存储起来，一直为第一次的数值n，之后一直--n运算，总有n<1的时候，就触发func回调的执行。
	  return function () {
	    if (--n < 1) {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return func.apply(this, args);
	    }
	  };
	}
	
	exports.default = after;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _copyObject = __webpack_require__(4);
	
	var _copyObject2 = _interopRequireDefault(_copyObject);
	
	var _createAssigner = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./.internal/createAssigner.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _createAssigner2 = _interopRequireDefault(_createAssigner);
	
	var _keys = __webpack_require__(8);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * This method is like `assign` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see assignInWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return isUndefined(objValue) ? srcValue : objValue
	 * }
	 *
	 * const defaults = partialRight(assignWith, customizer)
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignWith = (0, _createAssigner2.default)(function (object, source, srcIndex, customizer) {
	  (0, _copyObject2.default)(source, (0, _keys2.default)(source), object, customizer);
	});
	
	exports.default = assignWith;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assignValue = __webpack_require__(5);
	
	var _assignValue2 = _interopRequireDefault(_assignValue);
	
	var _baseAssignValue = __webpack_require__(6);
	
	var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;
	
	      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
	
	      if (newValue === undefined) {
	        newValue = source[key];
	      }
	      if (isNew) {
	        (0, _baseAssignValue2.default)(object, key, newValue);
	      } else {
	        (0, _assignValue2.default)(object, key, newValue);
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return object;
	}
	
	exports.default = copyObject;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseAssignValue = __webpack_require__(6);
	
	var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);
	
	var _eq = __webpack_require__(7);
	
	var _eq2 = _interopRequireDefault(_eq);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && (0, _eq2.default)(objValue, value)) || value === undefined && !(key in object)) {
	    (0, _baseAssignValue2.default)(object, key, value);
	  }
	}
	
	exports.default = assignValue;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__') {
	    Object.defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	exports.default = baseAssignValue;

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
	
	var _arrayLikeKeys = __webpack_require__(9);
	
	var _arrayLikeKeys2 = _interopRequireDefault(_arrayLikeKeys);
	
	var _isArrayLike = __webpack_require__(20);
	
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isArguments = __webpack_require__(10);
	
	var _isArguments2 = _interopRequireDefault(_isArguments);
	
	var _isBuffer = __webpack_require__(13);
	
	var _isBuffer2 = _interopRequireDefault(_isBuffer);
	
	var _isIndex = __webpack_require__(17);
	
	var _isIndex2 = _interopRequireDefault(_isIndex);
	
	var _isTypedArray = __webpack_require__(18);
	
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _getTag = __webpack_require__(11);
	
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseGetTag = __webpack_require__(12);
	
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _root = __webpack_require__(15);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _freeGlobal = __webpack_require__(16);
	
	var _freeGlobal2 = _interopRequireDefault(_freeGlobal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self !== null && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = _freeGlobal2.default || freeSelf || Function('return this')();
	
	exports.default = root;

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _getTag = __webpack_require__(11);
	
	var _getTag2 = _interopRequireDefault(_getTag);
	
	var _nodeUtil = __webpack_require__(19);
	
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _freeGlobal = __webpack_require__(16);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isLength = __webpack_require__(21);
	
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
/* 21 */
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