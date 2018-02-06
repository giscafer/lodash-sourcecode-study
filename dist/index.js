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
	
	var _createRound = __webpack_require__(1);
	
	var _createRound2 = _interopRequireDefault(_createRound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createRound = __webpack_require__(2);
	
	var _createRound2 = _interopRequireDefault(_createRound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log((0, _createRound2.default)('ceil')(6040, -2));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Creates a function like `round`.
	 * 创建一个类似 `round` 的函数
	 * @private
	 * @param {string} methodName 四舍五入时使用的 `Match` 的方法名称。
	 * @returns {Function} 返回一个新的函数
	 */
	function createRound(methodName) {
	  // 取得 Math 中的函数
	  var func = Math[methodName];
	  // 返回一个匿名函数
	  return function (number, precision) {
	    // 默认为0 和控制最大值为292
	    precision = precision == null ? 0 : Math.min(precision, 292);
	    // precision!==0
	    if (precision) {
	      // 用指数符号变换以避免浮点问题
	      // See [MDN](https://mdn.io/round#Examples) for more details.
	      // 这里`${number}e`加入了e字符，为了下边能直接使用pair[1]取值而不需要判断是否存在
	      var pair = (number + 'e').split('e');
	      // 先算出e `precision` 科学计算结果
	      var value = func(pair[0] + 'e' + (+pair[1] + precision));
	      // 再恢复原来的位数
	      pair = (value + 'e').split('e');
	      return +(pair[0] + 'e' + (+pair[1] - precision));
	    }
	    return func(number);
	  };
	}
	
	exports.default = createRound;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map