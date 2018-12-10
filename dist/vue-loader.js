window["VueLoader"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const jQuery = __webpack_require__(/*! jquery */ \"jquery\")\nconst parseOption = __webpack_require__(/*! ./parse-option */ \"./lib/parse-option.js\")\n\nmodule.exports = (config) => {\n  var components = {}\n  \n  var a = function (e) {\n    console.log('e', e)\n  }([function (e, a) {\n    console.log('fn1', e)\n  }, function (e, b) {\n    console.log('fn2', e)\n  }])\n  \n\n\n  for (var compoName in config) {\n    components[compoName] = () => new Promise((resolve, reject) => {\n      jQuery.get(config[compoName]).then(function (response) {\n        try {\n          resolve(parseOption(response))\n        }\n        catch (err) {\n          reject(err)\n        }\n      })\n    })\n  }\n\n  return components\n}\n\n\n\n//# sourceURL=webpack://VueLoader/./lib/index.js?");

/***/ }),

/***/ "./lib/parse-option.js":
/*!*****************************!*\
  !*** ./lib/parse-option.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 解析组件\nfunction parseOption (compoText) {\n  var TEMPLATE = /<template>((.|\\n)*?)<\\/template>/\n  var SCRIPT = /<script>((.|\\n)*?)<\\/script>/\n  var option = {\n    template: 'Failed to parse the correct component.'\n  }\n\n  try {\n    // parse script\n    try {\n      var script = compoText.match(SCRIPT)[1]\n      option = eval(script)\n    } catch (e) {\n      console.error('[vue-loader] script parse error: ', e)\n      return option\n    }\n    // parse template\n    try {\n      option.template = compoText.match(TEMPLATE)[1]\n    } catch (e) {\n      console.error('[vue-loader] template parse error: ', e)\n      return option\n    }\n  } catch (e) {\n    return option\n  }\n\n  return option\n}\n\nmodule.exports = parseOption\n\n\n\n\n//# sourceURL=webpack://VueLoader/./lib/parse-option.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"jQuery\"]; }());\n\n//# sourceURL=webpack://VueLoader/external_%22jQuery%22?");

/***/ })

/******/ });