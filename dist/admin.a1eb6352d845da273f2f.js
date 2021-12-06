/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin.js":
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
/***/ (() => {

eval("const adminAnalytics = () => {\r\n    let counter = 0\r\n    let reset = false\r\n\r\n    const listener = () => likeAdd++\r\n    document.addEventListener('click', listener)\r\n\r\n    return {\r\n        delete() {\r\n            document.removeEventListener('click', listener)\r\n            reset = true\r\n        },\r\n        getClick() {\r\n            if(reset){\r\n                return 'reset count'\r\n            }\r\n            return counter\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://lernwebpack/./src/admin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/admin.js"]();
/******/ 	
/******/ })()
;