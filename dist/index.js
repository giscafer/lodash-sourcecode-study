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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map