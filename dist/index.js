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
	
	var _dropWhile = __webpack_require__(1);
	
	var _dropWhile2 = _interopRequireDefault(_dropWhile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dropWhile = __webpack_require__(2);
	
	var _dropWhile2 = _interopRequireDefault(_dropWhile);
	
	var _dropRightWhile = __webpack_require__(5);
	
	var _dropRightWhile2 = _interopRequireDefault(_dropRightWhile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var users = [{ 'user': 'barney', 'active': true }, { 'user': 'pebbles', 'active': false }, { 'user': 'fred', 'active': true }, { 'user': 'test', 'active': false }, { 'user': 'test2', 'active': true }];
	
	var res = (0, _dropWhile2.default)(users, function (_ref) {
	  var active = _ref.active;
	  return active;
	});
	var res2 = (0, _dropRightWhile2.default)(users, function (_ref2) {
	  var active = _ref2.active;
	  return active;
	});
	
	console.log(JSON.stringify(res));
	console.log(JSON.stringify(res2));
	
	//[{"user":"pebbles","active":false},{"user":"test","active":false},{"user":"test2","active":true}]

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseWhile = __webpack_require__(3);
	
	var _baseWhile2 = _interopRequireDefault(_baseWhile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a slice of `array` excluding elements dropped from the beginning.
	 * Elements are dropped until `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index, array).
	 *
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the slice of `array`.
	 * @example
	 *
	 * const users = [
	 *   { 'user': 'barney',  'active': true },
	 *   { 'user': 'fred',    'active': true },
	 *   { 'user': 'pebbles', 'active': false }
	 * ]
	 *
	 * dropWhile(users, ({ active }) => active)
	 * // => objects for ['pebbles']
	 */
	function dropWhile(array, predicate) {
	  return array != null && array.length ? (0, _baseWhile2.default)(array, predicate, true) : [];
	}
	
	exports.default = dropWhile;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slice = __webpack_require__(4);
	
	var _slice2 = _interopRequireDefault(_slice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The base implementation of methods like `dropWhile` and `takeWhile`.
	 * 
	 * `dropWhile` 和 `takeWhile` 方法的基本实现
	 *
	 * @private
	 * @param {Array} array 查询数组
	 * @param {Function} predicate 每次循环执行的函数.
	 * @param {boolean} [isDrop] 舍弃元素而不是替换他们
	 * @param {boolean} [fromRight] 是否为从右向左遍历
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseWhile(array, predicate, isDrop, fromRight) {
	  var length = array.length;
	
	  var index = fromRight ? length : -1;
	
	  while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
	    console.log(index);
	  }
	  console.log('===');
	  console.log(index);
	  return isDrop ? (0, _slice2.default)(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : (0, _slice2.default)(array, fromRight ? index + 1 : 0, fromRight ? length : index);
	}
	
	exports.default = baseWhile;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Creates a slice of `array` from `start` up to, but not including, `end`.
	 *
	 * **Note:** This method is used instead of
	 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	 * returned.
	 * 
	 * 功能和Array.slice一样，为了兼容一些参数情况，保证密集数据正确返回
	 * 相关概念sparse arrays、dense arrays参考：
	 * http://2ality.com/2012/06/dense-arrays.html
	 *
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function slice(array, start, end) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return [];
	  }
	  start = start == null ? 0 : start;
	  end = end === undefined ? length : end;
	  // 负数表示从右侧计数
	  if (start < 0) {
	    start = -start > length ? 0 : length + start;
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  // 移位运算
	  // 不明白可以参考：https://github.com/seajs/seajs/issues/150
	  // https://www.zhihu.com/question/20693429
	  length = start > end ? 0 : end - start >>> 0;
	  start >>>= 0;
	
	  var index = -1;
	  var result = new Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	exports.default = slice;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseWhile = __webpack_require__(3);
	
	var _baseWhile2 = _interopRequireDefault(_baseWhile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a slice of `array` excluding elements dropped from the end.
	 * Elements are dropped until `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index, array).
	 * 
	 * 从右向左，从第n个元素算起，截取数组`array`元素。回调函数`predicate`返回值为falsey才截取。predicate函数参数为(value, index, array)
	 * 
	 *
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the slice of `array`.
	 * @example
	 *
	 * const users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': true },
	 *   { 'user': 'pebbles', 'active': true }
	 * ]
	 *
	 * dropRightWhile(users, ({ active }) => active)
	 * // => objects for ['barney']
	 */
	function dropRightWhile(array, predicate) {
	  return array != null && array.length ? (0, _baseWhile2.default)(array, predicate, true, true) : [];
	}
	
	exports.default = dropRightWhile;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map