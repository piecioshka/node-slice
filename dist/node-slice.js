(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Slice"] = factory();
	else
		root["Slice"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @author Piotr Kowalski <piecioshka@gmail.com> (http://piecioshka.pl/)
	 * @name node-slice
	 * @description Short version of your strings!
	 * @version 1.1.1
	 * @license MIT
	 * @example
	 * var slice = require('node-slices');
	 * slice('the best cookie in the world', 9); // => "the best..."
	 */
	
	'use strict';
	
	/**
	 * Verify condition, and throw an error on failure.
	 *
	 * @param {boolean} condition
	 * @param {string} message
	 */
	function assert(condition, message) {
	    if (!condition) {
	        throw new Error(message);
	    }
	}
	
	/**
	 * Remove white spaces on the beginning & at the end.
	 *
	 * @param {string} source
	 * @returns {XML|string|void}
	 */
	function trim(source) {
	    return source.replace(/^\s+|\s+$/g, '');
	}
	
	/**
	 * Cut passed string and put 3 dots (...) instead of replace chars.
	 *
	 * @param {string} source
	 * @param {number} length
	 * @param {boolean} [isForce]
	 * @returns {string}
	 */
	function slice(source, length, isForce) {
	    assert(typeof source === 'string', 'source is not a string');
	    assert(typeof length === 'number', 'length is not a number');
	
	    var lastSpaceIndex;
	
	    // When source is longer than limit, return it
	    if (source.length < length) {
	        return source;
	    }
	
	    // Slice source text using second param
	    var text = source.slice(0, length);
	
	    // If we don't cut in the middle of word, add ellipsis
	    if (source[length] === ' ' || text[length - 1] === ' ') {
	        return trim(text) + '...';
	    }
	
	    if (!isForce) {
	        lastSpaceIndex = text.lastIndexOf(' ');
	
	        if (lastSpaceIndex !== -1) {
	            return text.slice(0, lastSpaceIndex) + '...';
	        }
	    }
	
	    return text + '...';
	}
	
	module.exports = slice;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=node-slice.js.map