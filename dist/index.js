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
/***/ (function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import isSymbol from './isSymbol.test.js';
	// import add from './add.test.js';
	// import after from './after.test.js';
	// import ary from './ary.test.js'; //源码少./.internal/createWrap.js
	// import get from './get.test.js';
	// import memoize from './memoize.test.js';
	// import words from './words.test.js';
	// import stringToArray from './stringToArray.test';
	
	
	var call = function call(key) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	
	    return function (context) {
	        console.log('222', context);
	        return context[key].apply(context, args);
	    };
	};
	
	var map = call.bind(null, 'map');
	Promise.resolve([1, 2, 3]).then(map(function (x) {
	    return 2 * x;
	})).then(console.log);
	
	var Father = function () {
	    function Father() {
	        _classCallCheck(this, Father);
	
	        this.hairColor = 'black';
	    }
	
	    _createClass(Father, [{
	        key: 'walker',
	        value: function walker() {
	            console.log('walker');
	        }
	    }]);
	
	    return Father;
	}();
	
	var Son = function (_Father) {
	    _inherits(Son, _Father);
	
	    function Son() {
	        _classCallCheck(this, Son);
	
	        return _possibleConstructorReturn(this, (Son.__proto__ || Object.getPrototypeOf(Son)).call(this));
	    }
	
	    return Son;
	}(Father);
	
	var tom = new Son();
	
	console.log(tom.hairColor);
	console.log(tom.walker());

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map