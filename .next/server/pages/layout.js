module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/layout.js":
/*!*************************!*\
  !*** ./pages/layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/qumailrafiq/Desktop/todo/pages/layout.js\";\n\n\n\nconst {\n  Title,\n  Text\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"];\nconst style = {\n  background: '#0000',\n  padding: '8px 0',\n  boxShadow: '0px 1px 6px',\n  paddingTop: '23px',\n  borderRadius: '6px'\n};\nconst styleB = {\n  background: '#0000',\n  padding: '8px 0',\n  boxShadow: '0px 1px 6px',\n  paddingTop: '23px',\n  borderRadius: '6px',\n  position: 'relative',\n  top: '22px'\n};\nconst btn = {\n  padding: '6px 22px',\n  borderRadius: '6px',\n  position: 'relative',\n  right: '-255px',\n  top: '-14px',\n  marginLeft: '6px'\n};\nconst letter = {\n  paddingLeft: '12px'\n};\nconst icon = {\n  fontSize: '18px',\n  paddingLeft: '9px'\n};\n\nconst grid = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n      orientation: \"left\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      gutter: [16, 24],\n      align: \"middle\",\n      justify: \"space-around\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        className: \"gutter-row\",\n        span: 9,\n        style: style,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n          level: 4,\n          style: letter,\n          children: \"SandalWood\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Text, {\n          style: letter,\n          children: \"Kitiuru Road\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"DeleteOutlined\"], {\n          style: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"PushpinTwoTone\"], {\n          style: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          type: \"primary\",\n          size: \"large\",\n          style: btn,\n          children: \"12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          style: btn,\n          size: \"large\",\n          children: \"3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 9\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        className: \"gutter-row\",\n        span: 9,\n        style: style,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n          level: 4,\n          style: letter,\n          children: \"Astoria\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Text, {\n          style: letter,\n          children: \"Kitiuru Road\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"DeleteOutlined\"], {\n          style: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"PushpinTwoTone\"], {\n          style: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          type: \"primary\",\n          style: btn,\n          size: \"large\",\n          children: \"12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          style: btn,\n          size: \"large\",\n          children: \"3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        className: \"gutter-row\",\n        span: 9,\n        style: styleB,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n          level: 4,\n          style: letter,\n          children: \"Pearl\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Text, {\n          style: letter,\n          children: \"Kitiuru Road\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"DeleteOutlined\"], {\n          style: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"PushpinTwoTone\"], {\n          style: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          type: \"primary\",\n          style: btn,\n          size: \"large\",\n          children: \"12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          style: btn,\n          size: \"large\",\n          children: \"3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        className: \"gutter-row\",\n        span: 9,\n        style: styleB,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n          level: 4,\n          style: letter,\n          children: \"SandalWood\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Text, {\n          style: letter,\n          children: \"Kitiuru Road\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"DeleteOutlined\"], {\n          style: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"PushpinTwoTone\"], {\n          style: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          type: \"primary\",\n          style: btn,\n          size: \"large\",\n          children: \"12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          style: btn,\n          size: \"large\",\n          children: \"3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (grid);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXlvdXQuanM/MWY3YSJdLCJuYW1lcyI6WyJUaXRsZSIsIlRleHQiLCJUeXBvZ3JhcGh5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJveFNoYWRvdyIsInBhZGRpbmdUb3AiLCJib3JkZXJSYWRpdXMiLCJzdHlsZUIiLCJwb3NpdGlvbiIsInRvcCIsImJ0biIsInJpZ2h0IiwibWFyZ2luTGVmdCIsImxldHRlciIsInBhZGRpbmdMZWZ0IiwiaWNvbiIsImZvbnRTaXplIiwiZ3JpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFQSxPQUFGO0FBQVNDO0FBQVQsSUFBa0JDLCtDQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUFFQyxZQUFVLEVBQUUsT0FBZDtBQUF1QkMsU0FBTyxFQUFFLE9BQWhDO0FBQXlDQyxXQUFTLEVBQUUsYUFBcEQ7QUFBbUVDLFlBQVUsRUFBRSxNQUEvRTtBQUF1RkMsY0FBWSxFQUFFO0FBQXJHLENBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUc7QUFBRUwsWUFBVSxFQUFFLE9BQWQ7QUFBdUJDLFNBQU8sRUFBRSxPQUFoQztBQUF5Q0MsV0FBUyxFQUFFLGFBQXBEO0FBQW1FQyxZQUFVLEVBQUUsTUFBL0U7QUFBdUZDLGNBQVksRUFBRSxLQUFyRztBQUE0R0UsVUFBUSxFQUFFLFVBQXRIO0FBQWtJQyxLQUFHLEVBQUU7QUFBdkksQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBRztBQUFDUCxTQUFPLEVBQUUsVUFBVjtBQUFzQkcsY0FBWSxFQUFFLEtBQXBDO0FBQTJDRSxVQUFRLEVBQUUsVUFBckQ7QUFBaUVHLE9BQUssRUFBRSxRQUF4RTtBQUFpRkYsS0FBRyxFQUFDLE9BQXJGO0FBQStGRyxZQUFVLEVBQUU7QUFBM0csQ0FBWjtBQUNBLE1BQU1DLE1BQU0sR0FBRztBQUFDQyxhQUFXLEVBQUU7QUFBZCxDQUFmO0FBQ0EsTUFBTUMs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Q0FBRDtBQUFRLGVBQUssRUFBRUEsR0FBZjtBQUFvQixjQUFJLEVBQUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkE7QUFBQSxrQkFEQTtBQXVDSCxDQXhDRDs7QUEwQ2VPLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIERpdmlkZXIsIEJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRGVsZXRlT3V0bGluZWQsIFB1c2hwaW5Ud29Ub25lIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuXG5jb25zdCB7IFRpdGxlLCBUZXh0IH0gPSBUeXBvZ3JhcGh5O1xuY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmQ6ICcjMDAwMCcsIHBhZGRpbmc6ICc4cHggMCcsIGJveFNoYWRvdzogJzBweCAxcHggNnB4JywgcGFkZGluZ1RvcDogJzIzcHgnLCBib3JkZXJSYWRpdXM6ICc2cHgnfTtcbmNvbnN0IHN0eWxlQiA9IHsgYmFja2dyb3VuZDogJyMwMDAwJywgcGFkZGluZzogJzhweCAwJywgYm94U2hhZG93OiAnMHB4IDFweCA2cHgnLCBwYWRkaW5nVG9wOiAnMjNweCcsIGJvcmRlclJhZGl1czogJzZweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcyMnB4J307XG5jb25zdCBidG4gPSB7cGFkZGluZzogJzZweCAyMnB4JywgYm9yZGVyUmFkaXVzOiAnNnB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIHJpZ2h0OiAnLTI1NXB4Jyx0b3A6Jy0xNHB4JywgIG1hcmdpbkxlZnQ6ICc2cHgnfTtcbmNvbnN0IGxldHRlciA9IHtwYWRkaW5nTGVmdDogJzEycHgnfVxuY29uc3QgaWNvbiA9IHtmb250U2l6ZTogJzE4cHgnLCBwYWRkaW5nTGVmdDogJzlweCd9XG5cbmNvbnN0IGdyaWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPjwvRGl2aWRlcj5cbiAgICA8Um93IGd1dHRlcj17WzE2LCAyNF19IGFsaWduPVwibWlkZGxlXCIganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiPlxuICAgICAgPENvbCBjbGFzc05hbWU9XCJndXR0ZXItcm93XCIgc3Bhbj17OX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPFRpdGxlIGxldmVsPXs0fSBzdHlsZT17bGV0dGVyfT5TYW5kYWxXb29kPC9UaXRsZT5cbiAgICAgICAgPFRleHQgc3R5bGU9e2xldHRlcn0+S2l0aXVydSBSb2FkPC9UZXh0PlxuICAgICAgICA8RGVsZXRlT3V0bGluZWQgc3R5bGU9e2ljb259IC8+XG4gICAgICAgIDxQdXNocGluVHdvVG9uZSBzdHlsZT17aWNvbn0vPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCIgc3R5bGU9e2J0bn0+MTI8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17YnRufSBzaXplPVwibGFyZ2VcIj4zPC9CdXR0b24+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49ezl9IHN0eWxlPXtzdHlsZX0+XG4gICAgICA8VGl0bGUgbGV2ZWw9ezR9IHN0eWxlPXtsZXR0ZXJ9PkFzdG9yaWE8L1RpdGxlPlxuICAgICAgPFRleHQgc3R5bGU9e2xldHRlcn0+S2l0aXVydSBSb2FkPC9UZXh0PlxuICAgICAgPERlbGV0ZU91dGxpbmVkIHN0eWxlPXtpY29ufS8+XG4gICAgICAgIDxQdXNocGluVHdvVG9uZSBzdHlsZT17aWNvbn0vPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e2J0bn0gc2l6ZT1cImxhcmdlXCI+MTI8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17YnRufSBzaXplPVwibGFyZ2VcIj4zPC9CdXR0b24+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49ezl9IHN0eWxlPXtzdHlsZUJ9PlxuICAgICAgPFRpdGxlIGxldmVsPXs0fSBzdHlsZT17bGV0dGVyfT5QZWFybDwvVGl0bGU+XG4gICAgICA8VGV4dCBzdHlsZT17bGV0dGVyfT5LaXRpdXJ1IFJvYWQ8L1RleHQ+XG4gICAgICA8RGVsZXRlT3V0bGluZWQgc3R5bGU9e2ljb259Lz5cbiAgICAgICAgPFB1c2hwaW5Ud29Ub25lIHN0eWxlPXtpY29ufS8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17YnRufSBzaXplPVwibGFyZ2VcIj4xMjwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXtidG59IHNpemU9XCJsYXJnZVwiPjM8L0J1dHRvbj5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBjbGFzc05hbWU9XCJndXR0ZXItcm93XCIgc3Bhbj17OX0gc3R5bGU9e3N0eWxlQn0+XG4gICAgICA8VGl0bGUgbGV2ZWw9ezR9IHN0eWxlPXtsZXR0ZXJ9PlNhbmRhbFdvb2Q8L1RpdGxlPlxuICAgICAgICA8VGV4dCBzdHlsZT17bGV0dGVyfT5LaXRpdXJ1IFJvYWQ8L1RleHQ+XG4gICAgICAgIDxEZWxldGVPdXRsaW5lZCBzdHlsZT17aWNvbn0vPlxuICAgICAgICA8UHVzaHBpblR3b1RvbmUgc3R5bGU9e2ljb259Lz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXtidG59IHNpemU9XCJsYXJnZVwiPjEyPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gc3R5bGU9e2J0bn0gc2l6ZT1cImxhcmdlXCI+MzwvQnV0dG9uPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBncmlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/layout.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiPzI0MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFudC1kZXNpZ24vaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });