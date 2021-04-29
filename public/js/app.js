/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nTypeError: plugins.forEach is not a function\n    at /home/localdisk/Code/phatima/node_modules/tailwindcss/lib/util/resolveConfig.js:150:13\n    at Array.forEach (<anonymous>)\n    at extractPluginConfigs (/home/localdisk/Code/phatima/node_modules/tailwindcss/lib/util/resolveConfig.js:142:11)\n    at resolveConfig (/home/localdisk/Code/phatima/node_modules/tailwindcss/lib/util/resolveConfig.js:259:26)\n    at /home/localdisk/Code/phatima/node_modules/tailwindcss/lib/index.js:79:37\n    at module.exports (/home/localdisk/Code/phatima/node_modules/tailwindcss/lib/index.js:88:36)\n    at Processor.normalize (/home/localdisk/Code/phatima/node_modules/postcss/lib/processor.js:40:13)\n    at new Processor (/home/localdisk/Code/phatima/node_modules/postcss/lib/processor.js:9:25)\n    at postcss (/home/localdisk/Code/phatima/node_modules/postcss/lib/postcss.js:25:10)\n    at Object.loader (/home/localdisk/Code/phatima/node_modules/postcss-loader/dist/index.js:87:20)\n    at processResult (/home/localdisk/Code/phatima/node_modules/webpack/lib/NormalModule.js:676:19)\n    at /home/localdisk/Code/phatima/node_modules/webpack/lib/NormalModule.js:778:5\n    at /home/localdisk/Code/phatima/node_modules/loader-runner/lib/LoaderRunner.js:399:11\n    at /home/localdisk/Code/phatima/node_modules/loader-runner/lib/LoaderRunner.js:251:18\n    at context.callback (/home/localdisk/Code/phatima/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at Object.loader (/home/localdisk/Code/phatima/node_modules/postcss-loader/dist/index.js:96:7)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/js/app.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/css/app.css");
/******/ 	
/******/ })()
;