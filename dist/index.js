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
	
	var _wordsTest = __webpack_require__(1);
	
	var _wordsTest2 = _interopRequireDefault(_wordsTest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _words = __webpack_require__(2);
	
	var _words2 = _interopRequireDefault(_words);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var string = 'fred sssssss asssss';
	var string1 = 'fred, barney, & pebbles';
	
	console.log((0, _words2.default)(string, /[^ ]+/g));
	console.log((0, _words2.default)(string1));
	console.log((0, _words2.default)(string1, /[^, ]+/g));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _unicodeWords = __webpack_require__(3);
	
	var _unicodeWords2 = _interopRequireDefault(_unicodeWords);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// "-/:-@[-`{-"
	var asciiWords = RegExp.prototype.exec.bind(/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g);
	
	var hasUnicodeWord = RegExp.prototype.test.bind(/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/);
	
	/**
	 * Splits `string` into an array of its words.
	 *
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * words('fred, barney, & pebbles')
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * words('fred, barney, & pebbles', /[^, ]+/g)
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern) {
	  if (pattern === undefined) {
	    // 是否存在特殊字符hasUnicodeWord(string)
	    var result = hasUnicodeWord(string) ? (0, _unicodeWords2.default)(string) : asciiWords(string);
	    return result || [];
	  }
	  return string.match(pattern) || [];
	}
	
	exports.default = words;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff';
	var rsComboMarksRange = '\\u0300-\\u036f';
	var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
	var rsComboSymbolsRange = '\\u20d0-\\u20ff';
	var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
	var rsDingbatRange = '\\u2700-\\u27bf';
	var rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff';
	var rsMathOpRange = '\\xac\\xb1\\xd7\\xf7';
	var rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
	var rsPunctuationRange = '\\u2000-\\u206f';
	var rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
	var rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
	var rsVarRange = '\\ufe0e\\ufe0f';
	var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
	
	/** Used to compose unicode capture groups. */
	var rsApos = '[\'\u2019]';
	var rsBreak = '[' + rsBreakRange + ']';
	var rsCombo = '[' + rsComboRange + ']';
	var rsDigits = '\\d+';
	var rsDingbat = '[' + rsDingbatRange + ']';
	var rsLower = '[' + rsLowerRange + ']';
	var rsMisc = '[^' + rsAstralRange + (rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange) + ']';
	var rsFitz = '\\ud83c[\\udffb-\\udfff]';
	var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
	var rsNonAstral = '[^' + rsAstralRange + ']';
	var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
	var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
	var rsUpper = '[' + rsUpperRange + ']';
	var rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')';
	var rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')';
	var rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?';
	var rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?';
	var reOptMod = rsModifier + '?';
	var rsOptVar = '[' + rsVarRange + ']?';
	var rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + (rsOptVar + reOptMod) + ')*';
	var rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)';
	var rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)';
	var rsSeq = rsOptVar + reOptMod + rsOptJoin;
	var rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
	
	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	var unicodeWords = RegExp.prototype.exec.bind(RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g'));
	
	exports.default = unicodeWords;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map