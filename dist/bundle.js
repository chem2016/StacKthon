/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/*! exports provided: nextPage, nextPage2, symbolPass, symbolFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextPage\", function() { return nextPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextPage2\", function() { return nextPage2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"symbolPass\", function() { return symbolPass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"symbolFail\", function() { return symbolFail; });\nconst nextPage = document.createElement(\"div\")\nnextPage.innerHTML = `<a href=\"../dist/secondPage.html\">to a harder question</a>`\nconst nextPage2 = document.createElement(\"div\")\nnextPage2.innerHTML = `<a href=\"../dist/thirdPage.html\">to a harder question</a>`\nconst symbolPass = document.createElement(\"div\")\nsymbolPass.innerHTML = `<span>You Pass!!!</span>`\nconst symbolFail = document.createElement(\"div\")\nsymbolFail.innerHTML = `<span>You Failed!!!</span>`\n\n\n\n\n//# sourceURL=webpack:///./src/domElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {input1, answer1} = __webpack_require__(/*! ../test/stretch1 */ \"./test/stretch1.js\")\nconst {input2, input2Func, answer2} = __webpack_require__(/*! ../test/stretch2 */ \"./test/stretch2.js\")\nconst {input3, answer3} = __webpack_require__(/*! ../test/stretch3 */ \"./test/stretch3.js\")\nconst {input4Arg1, input4Arg2, answer4} = __webpack_require__(/*! ../test/stretch4 */ \"./test/stretch4.js\")\nconst {input16, answer16First} = __webpack_require__(/*! ../test/stretch16 */ \"./test/stretch16.js\")\nconst {symbolFail, symbolPass} = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\")\n// const runTests = require('run-jasmine-browser');\n\nvar editor = CodeMirror.fromTextArea(document.getElementById('editor'),{\n    mode: \"javascript\",\n    theme: \"dracula\",\n    lineNumbers: true,\n})\n\nvar state = {\n    nextPage : false\n}\n\nconst runButton = document.getElementById('run-button'); \nrunButton.onclick = () => {\n    const currentCode = editor.getValue();\n    try {\n        window.newGlobal = {\n            window: {},\n            module: {\n                exports: null,\n            },\n        };\n        eval(`with (newGlobal) { ${currentCode} }`);\n\n        const module = window.newGlobal.module;\n        if (typeof module.exports === 'function') {\n            if(module.exports.number === 1){\n                if(module.exports(input1) === answer1){\n                    console.log('You Passed the first question!')\n                    document.body.appendChild(symbolPass)\n                }\n                else{\n                    console.log('You failed the second question!')\n                    document.body.appendChild(symbolFail)\n                }\n            }\n            if(module.exports.number === 2){\n                const myAnswer = module.exports(input2, input2Func)\n                if(JSON.stringify(myAnswer) === JSON.stringify(answer2)){\n                    console.log('You Passed the second question!')\n                    document.body.appendChild(symbolPass)\n                }\n                else{\n                    console.log('You failed the second questoin!')\n                    document.body.appendChild(symbolFail)\n                }\n            }\n            if(module.exports.number === 3){\n                const myAnswer = module.exports(input3)\n                if(JSON.stringify(myAnswer) === JSON.stringify(answer3)){\n                    console.log('You Passed the third question!')\n                    document.body.appendChild(symbolPass)\n                }\n                else{\n                    console.log('You failed the third questoin!')\n                    document.body.appendChild(symbolFail)\n                }\n            }\n            if(module.exports.number === 4){\n                const myAnswer = module.exports(input4Arg1, input4Arg2)\n                if(JSON.stringify(myAnswer) === JSON.stringify(answer4)){\n                    console.log('You Passed the fourth question!')\n                    document.body.appendChild(symbolPass)\n                }\n                else{\n                    console.log('You failed the fourth questoin!')\n                    document.body.appendChild(symbolFail)\n                }\n            }\n            if(module.exports.number === 16){\n                const myAnswer = module.exports(input16)\n                if(JSON.stringify(myAnswer) === JSON.stringify(answer16First)){\n                    console.log('You Passed the sixteenth question!')\n                    document.body.appendChild(symbolPass)\n                }\n                else{\n                    console.log('You failed the sixteenth questoin!')\n                    document.body.appendChild(symbolFail)\n                }\n            }\n\n        };\n    } catch (e) {\n        console.error(e);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./test/stretch1.js":
/*!**************************!*\
  !*** ./test/stretch1.js ***!
  \**************************/
/*! exports provided: input1, answer1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input1\", function() { return input1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answer1\", function() { return answer1; });\n// function square\n\nconst input1 = 5;\nconst answer1 = 25;\n\n\n\n//# sourceURL=webpack:///./test/stretch1.js?");

/***/ }),

/***/ "./test/stretch16.js":
/*!***************************!*\
  !*** ./test/stretch16.js ***!
  \***************************/
/*! exports provided: input16, answer16First, answer16Second */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input16\", function() { return input16; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answer16First\", function() { return answer16First; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answer16Second\", function() { return answer16Second; });\n// function maxSumSubarray\n\nconst input16 = [3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4];\nconst answer16First = 19;\nconst answer16Second = [1,3,-2,3,4,7,2,-9,6,3,1];\n\n\n\n\n//# sourceURL=webpack:///./test/stretch16.js?");

/***/ }),

/***/ "./test/stretch2.js":
/*!**************************!*\
  !*** ./test/stretch2.js ***!
  \**************************/
/*! exports provided: input2, input2Func, answer2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input2\", function() { return input2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input2Func\", function() { return input2Func; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answer2\", function() { return answer2; });\nconst input2 = [1,2,3]\nconst input2Func = (a) => {\n    return a**2 \n}\nconst answer2 = [1,4,9]\n\n\n\n\n//# sourceURL=webpack:///./test/stretch2.js?");

/***/ }),

/***/ "./test/stretch3.js":
/*!**************************!*\
  !*** ./test/stretch3.js ***!
  \**************************/
/*! exports provided: input3, answer3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input3\", function() { return input3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answer3\", function() { return answer3; });\nconst input3 = [\n    {\n      amount: 8,\n      productId: 3\n    },\n    {\n      amount: 8,\n      productId: 3\n    },\n    {\n      amount: 8,\n      productId: 4\n    },\n    {\n      amount: 17,\n      productId: 5\n    },\n    {\n      amount: 10,\n      productId: 4\n    }\n  ];\n\n  const answer3 = { id: 4, total: 18}\n\n  \n\n//# sourceURL=webpack:///./test/stretch3.js?");

/***/ }),

/***/ "./test/stretch4.js":
/*!**************************!*\
  !*** ./test/stretch4.js ***!
  \**************************/
/*! exports provided: input4Arg1, input4Arg2, answer4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input4Arg1\", function() { return input4Arg1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input4Arg2\", function() { return input4Arg2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answer4\", function() { return answer4; });\nconst input4Arg1 = [1, 2, 3, 4, 5, 6, 7]\nconst input4Arg2 = 3\nconst answer4 = 6\n\n\n\n//# sourceURL=webpack:///./test/stretch4.js?");

/***/ })

/******/ });