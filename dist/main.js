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

eval("const element = document.createElement(\"div\");\r\nelement.innerHTML = __webpack_require__(/*! ./someText.txt */ \"./src/someText.txt\");\r\ndocument.body.appendChild(element);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/someText.txt":
/*!**************************!*\
  !*** ./src/someText.txt ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a velit id nulla ullamcorper pellentesque. Donec tempus mauris ut rutrum faucibus. Mauris nec elit tincidunt, gravida ex porttitor, porttitor justo. Nulla faucibus, nisi a commodo scelerisque, orci libero vulputate enim, id auctor erat sem eget elit. Integer tempus ornare iaculis. Cras pulvinar urna ac urna mollis porttitor. Praesent porttitor mattis nulla, in tempus sapien ultrices sit amet. Donec in blandit leo. Nulla ullamcorper nunc mi, quis fringilla arcu tempor vitae. Nunc feugiat porta lacus eu vehicula.</p><p>Pellentesque dignissim nibh ligula, non mollis augue maximus vitae. Donec pellentesque orci non semper placerat. Sed neque quam, rutrum non pellentesque in, congue ac ligula. In scelerisque libero aliquet sapien tincidunt dignissim. Nunc commodo augue eu luctus cursus. Aenean id erat vitae urna pretium sodales sit amet sed ante. Maecenas congue tempor massa, id cursus ipsum malesuada non. Morbi et porta eros. Morbi feugiat elementum diam, aliquam facilisis lectus mollis quis. Etiam et mauris sem. Etiam placerat metus nec magna fringilla porta in id metus. Praesent mollis massa libero, eu elementum enim porta vel. Praesent condimentum, orci vel dignissim elementum, arcu dui eleifend ex, cursus mollis quam sapien a odio. Aenean porttitor vestibulum lacus. Fusce ut tristique ipsum. Nam vel placerat lorem.</p><p>Mauris aliquam congue sagittis. Proin cursus congue ante, eget eleifend lectus pulvinar ac. Suspendisse potenti. Duis suscipit ligula dui, vel molestie lacus egestas in. Pellentesque suscipit molestie velit id aliquet. Vivamus id nisl vitae velit blandit sollicitudin vitae at mi. In eget nunc ligula. Mauris eu lorem convallis, fringilla nibh nec, accumsan sem. Mauris eleifend, risus eget sollicitudin aliquam, ligula augue vulputate diam, quis fringilla ante quam vitae sapien. Pellentesque nunc nibh, pretium eget lorem ac, aliquet pellentesque ex. Fusce pretium orci rutrum turpis accumsan, eu vestibulum lacus feugiat. Donec ut ex efficitur, sodales leo sed, blandit magna. Cras nunc augue, gravida non fringilla ultricies, tincidunt non velit. Aenean vel magna quam.</p><p>Integer mollis accumsan metus. Quisque vitae lobortis purus. Aliquam sit amet dui ac turpis feugiat ultrices a at neque. Suspendisse potenti. Praesent sapien orci, consequat sit amet diam id, malesuada vestibulum massa. Phasellus vehicula lacus vel ante ornare, eu ultricies tellus efficitur. Pellentesque lacinia viverra gravida.</p><p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius massa sed augue iaculis ullamcorper. Donec vitae quam nec est pulvinar convallis et vel erat. Integer vitae rhoncus felis, a ultricies est. Donec ante nisi, eleifend malesuada purus a, malesuada placerat sapien. Donec dolor enim, convallis vitae nibh maximus, laoreet varius arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus pretium accumsan euismod. Etiam vehicula, lectus eget feugiat lobortis, nunc enim aliquam turpis, in gravida nibh urna non orci. Nullam a velit vel ipsum accumsan mollis. Suspendisse potenti. Aliquam erat volutpat. Proin sed tellus tempus, porttitor augue eu, venenatis justo. Morbi lorem orci, feugiat in sapien vitae, fringilla maximus tortor.</p><p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>- Vivamus at diam at turpis faucibus varius ac ac ante.</p><p>- Sed lobortis lacus at lorem pellentesque maximus.</p><p>- Pellentesque ut libero et ipsum condimentum iaculis ac vitae diam.</p><p>- Nullam vel dui at orci vehicula mattis non eu augue.</p><p>- Proin euismod nibh eu sapien porttitor aliquam.</p>'\n\n//# sourceURL=webpack:///./src/someText.txt?");

/***/ })

/******/ });