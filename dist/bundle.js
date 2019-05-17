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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {testTree, target} = __webpack_require__(/*! ../test/test1 */ \"./test/test1.js\")\nconst {input, answer} = __webpack_require__(/*! ../test/test0 */ \"./test/test0.js\")\nconst {input1, input1Func, answer1} = __webpack_require__(/*! ../test/test0 */ \"./test/test0.js\")\nconst nextPage = document.createElement(\"div\")\nnextPage.innerHTML = `<a href=\"../dist/secondPage.html\">to a harder question</a>`\nconst nextPage2 = document.createElement(\"div\")\nnextPage2.innerHTML = `<a href=\"../dist/thirdPage.html\">to a harder question</a>`\nconst symbolPass = document.createElement(\"div\")\nsymbolPass.innerHTML = `<span>You Pass!!!</span>`\nconst symbolFail = document.createElement(\"div\")\nsymbolFail.innerHTML = `<span>You Failed!!!</span>`\nconst root = document.createElement(\"div\")\nroot.innerHTML = `<p>Code Ninja.</p>`\nconst questioin = document.createElement(\"div\")\nquestioin.innerHTML = `<p>\n    please export you function at the end:\n    module.exports = yourFunction\n</p>`\ndocument.body.appendChild(questioin)\ndocument.body.appendChild(root)\n\nvar editor = CodeMirror.fromTextArea(document.getElementById('editor'),{\n    mode: \"javascript\",\n    theme: \"dracula\",\n    lineNumbers: true,\n})\n\nvar userFunction = null;\nconst runButton = document.getElementById('run-button'); \nrunButton.onclick = () => {\n    const currentCode = editor.getValue();\n    try {\n        window.newGlobal = {\n            window: {},\n            module: {\n                exports: null,\n            },\n        };\n        eval(`with (newGlobal) { ${currentCode} }`);\n\n        const module = window.newGlobal.module;\n        const userFunction = module.exports\n        console.log('the function you entered is: ', userFunction);\n        if (typeof module.exports === 'function') {\n            console.log('The number is: ', module.exports.number)\n            if(module.exports.number === 1){\n                console.log('This is the first function: ', module.exports)\n                if(module.exports(input) === answer){\n                    console.log('You Passed the first question!')\n                    document.body.appendChild(symbolPass)\n                    document.body.appendChild(nextPage)\n                }\n                else{\n                    console.log('You failed the second question!')\n                    document.body.appendChild(symbolFail)\n                }\n            }\n            if(module.exports.number === 2){\n                console.log('This is the second function: ', module.exports)\n                const myAnswer = module.exports(input1, input1Func)\n                console.log('myAnswer: ', myAnswer)\n                if(JSON.stringify(myAnswer) === JSON.stringify(answer1)){\n                    console.log('You Passed the second question!')\n                    document.body.appendChild(symbolPass)\n                    document.body.appendChild(nextPage2)\n                }\n                else{\n                    console.log('You failed the second questoin!')\n                    document.body.appendChild(symbolFail)\n                }\n            }\n            if(module.exports.number === 3){\n                console.log('This is the third function: ', module.exports)\n                const myAnswer = module.exports(testTree, target)\n                if(myAnswer === target){\n                    console.log('You Passed the third question!')\n                    document.body.appendChild(symbolPass)\n                }\n            }\n\n\n\n\n\n        };\n    } catch (e) {\n        console.error(e);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./test/test0.js":
/*!***********************!*\
  !*** ./test/test0.js ***!
  \***********************/
/*! exports provided: input, answer, input1, input1Func, answer1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answer\", function() { return answer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input1\", function() { return input1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input1Func\", function() { return input1Func; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answer1\", function() { return answer1; });\n\nconst input = 5;\nconst answer = 25;\nconst input1 = [1,2,3]\nconst input1Func = (a) => {\n    return a**2 \n}\nconst answer1 = [1,4,9]\n\n\n\n\n//# sourceURL=webpack:///./test/test0.js?");

/***/ }),

/***/ "./test/test1.js":
/*!***********************!*\
  !*** ./test/test1.js ***!
  \***********************/
/*! exports provided: testTree, target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testTree\", function() { return testTree; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"target\", function() { return target; });\n// const expect = require(\"chai\").expect;\n// const assert = require(\"chai\").assert;\n// const findClosetValueInBst = require('../findClosetValueInBst');\n\nclass BST{\n    constructor(value){\n        this.value = value;\n        this.left = null;\n        this.right = null;\n    }\n    insert(value) {\n        if(value < this.value){\n            if(this.left === null){\n                this.left = new BST(value)\n            }else{\n                this.left.insert(value)\n            }\n        }else{\n            if(this.right === null){\n                this.right = new BST(value)\n            }else{\n                this.right.insert(value)\n            }\n        }\n        return this\n    }\n}\nconst testTree = new BST(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)\n                        .insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000)\n                        .insert(204).insert(205).insert(207).insert(206).insert(208).insert(203)\n                        .insert(-51).insert(-403).insert(1001).insert(57).insert(60).insert(4500)\n\nconst target = 22\n// describe(\"findClosetValueInBst is a function\", () => {\n//     it(\"exist\", () =>{\n//         expect(findClosetValueInBst).to.be.ok\n//     });\n//     it(\"return a value\", ()=>{\n//         expect(findClosetValueInBst(test, 100)).to.deep.equal(100)\n//     });\n//     it(\"testing case #1\", ()=>{\n//         expect(findClosetValueInBst(test, 5)).to.deep.equal(5)\n//     });\n//     it(\"testing case #2\", ()=>{\n//         expect(findClosetValueInBst(test, 206)).to.deep.equal(206)\n//     });\n//     it(\"testing case #3\", ()=>{\n//         expect(findClosetValueInBst(test, 208)).to.deep.equal(208)\n//     });\n//     it(\"testing case #4\", ()=>{\n//         expect(findClosetValueInBst(test, 4501)).to.deep.equal(4500)\n//     });\n//     it(\"testing case #5\", ()=>{\n//         assert.equal(findClosetValueInBst(test, 4502), 4500)\n//     })\n//   });\n\n\n\n//# sourceURL=webpack:///./test/test1.js?");

/***/ })

/******/ });