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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Open Sans', sans-serif;\\n  font-size: 15px;\\n  line-height: 20px;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nbody {\\n  padding-top: 200px;\\n  background-color: #f4f5f7;\\n}\\n\\n.container {\\n  width: 50%;\\n  margin: auto;\\n  background-color: #f1f2f5;\\n  border-radius: 3px;\\n  box-sizing: border-box;\\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\\n}\\n\\n.title {\\n  display: flex;\\n  justify-content: space-between;\\n  border-bottom: 1px solid #f0f0f0;\\n  padding: 1rem;\\n}\\n\\n.title h1 {\\n  margin: 0;\\n  top: 10px;\\n  line-height: 20px;\\n  font-weight: 400;\\n  color: #333;\\n}\\n\\n.add-todo {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 16px 4px;\\n  border-bottom: 1px solid #f0f0f0;\\n  font-size: 16px;\\n}\\n\\n.add-todo input {\\n  font-style: italic;\\n  outline: none;\\n  border: none;\\n  padding: 4px;\\n  width: 500px;\\n  background-color: #f1f2f5;\\n}\\n\\n.todo-item {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 16px 4px;\\n  border-bottom: 1px solid #f0f0f0;\\n  padding-left: 8px;\\n}\\n\\n.clear p {\\n  background-color: #f6f6f6;\\n  margin: 0;\\n  padding: 16px;\\n  text-align: center;\\n  color: gray;\\n}\\n\\n.buttons {\\n  opacity: 0.2;\\n  font-size: 18px;\\n  color: #333;\\n  padding: 3px;\\n  padding-top: 0;\\n}\\n\\n.check {\\n  opacity: 0.5;\\n  font-size: 18px;\\n  color: #333;\\n  padding-top: 0;\\n}\\n\\n.move-button:hover {\\n  cursor: move;\\n}\\n\\n.remove-btn:hover {\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add_remove.js":
/*!***************************!*\
  !*** ./src/add_remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHandlers\": () => (/* binding */ addHandlers),\n/* harmony export */   \"editHandlers\": () => (/* binding */ editHandlers)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var _dragdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragdrop */ \"./src/dragdrop.js\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status */ \"./src/status.js\");\n\n// eslint-disable-next-line import/no-cycle\n\n\n\nconst editHandlers = () => {\n  const todoList = document.getElementsByClassName('todo-item');\n  for (let i = 0; i < todoList.length; i += 1) {\n    const labelElem = todoList[i].children[0].children[1];\n\n    labelElem.addEventListener('keypress', (e) => {\n      if (e.keyCode === 13) {\n        e.preventDefault();\n      }\n    });\n\n    labelElem.addEventListener('input', () => {\n      (0,_status__WEBPACK_IMPORTED_MODULE_2__.refreshStore)();\n    });\n  }\n};\n\nconst addHandlers = () => {\n  const buttons = document.getElementsByClassName('remove-btn');\n  for (let i = 0; i < buttons.length; i += 1) {\n    buttons[i].addEventListener('click', () => {\n      const index = `item-${i}`;\n      const inputItem = document.getElementsByName(index)[0];\n      inputItem.parentElement.parentElement.remove();\n      (0,_status__WEBPACK_IMPORTED_MODULE_2__.refreshStore)();\n    });\n  }\n};\n\nconst appendToDOM = (todo) => {\n  document.getElementById('list-items').insertAdjacentHTML('beforeend', `\n    <div class=\"todo-item\" draggable=\"true\">\n      <div>\n        <input type=\"checkbox\" name=\"item-${todo.index}\" readonly=\"true\">\n        <span contenteditable=true>${todo.description}</span>\n      </div>\n      <div class=\"dots-button\">\n        <span class=\"material-icons-outlined buttons remove-btn\" id=\"item-${todo.index}\">delete_outline</span>\n        <span class=\"material-icons-outlined buttons\">more_vert</span>\n      </div> \n    </div>\n  `);\n};\n\nconst addTodo = (description) => {\n  const newTodo = {\n    description,\n    completed: false,\n  };\n\n  const currentTodoList = (0,_store__WEBPACK_IMPORTED_MODULE_0__.fromStorage)();\n  const todoLength = currentTodoList.length;\n  if (todoLength === 0) {\n    newTodo.index = 0;\n  } else {\n    newTodo.index = todoLength;\n  }\n\n  currentTodoList.push(newTodo);\n  (0,_store__WEBPACK_IMPORTED_MODULE_0__.toStorage)(currentTodoList);\n  appendToDOM(newTodo);\n  (0,_dragdrop__WEBPACK_IMPORTED_MODULE_1__.dragHover)();\n  (0,_store__WEBPACK_IMPORTED_MODULE_0__.reloadStore)();\n  editHandlers();\n  addHandlers();\n};\n\ndocument.querySelector('.add-todo > input').addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    addTodo(e.target.value);\n    e.target.value = '';\n  }\n});\n\ndocument.getElementById('clear-all').addEventListener('click', () => {\n  const todoList = document.getElementsByClassName('todo-item');\n  [...todoList].filter((todoItem) => todoItem.children[0].children[0].checked)\n    .forEach((item) => item.remove());\n  (0,_status__WEBPACK_IMPORTED_MODULE_2__.refreshStore)();\n});\n\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/add_remove.js?");

/***/ }),

/***/ "./src/dragdrop.js":
/*!*************************!*\
  !*** ./src/dragdrop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragHover\": () => (/* binding */ dragHover),\n/* harmony export */   \"refreshStore\": () => (/* binding */ refreshStore)\n/* harmony export */ });\n/* harmony import */ var _add_remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_remove */ \"./src/add_remove.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\nlet dragElemStart = null;\n\nconst sortIndex = (list) => {\n  for (let i = 0; i < list.length; i += 1) {\n    list[i].index = i;\n  }\n  return list;\n};\n\nconst generateListFromDOM = () => {\n  const list = document.getElementsByClassName('todo-item');\n  const resultList = [];\n  for (let i = 0; i < list.length; i += 1) {\n    const description = list[i].children[0].children[1].innerText;\n    const completed = list[i].children[0].children[0].checked;\n    const index = list[i].children[0].children[0].name.split('-')[1];\n\n    resultList.push({\n      description,\n      completed,\n      index,\n    });\n  }\n  return resultList;\n};\n\nconst refreshStore = () => {\n  const resultList = generateListFromDOM();\n  const sortedList = sortIndex(resultList);\n\n  (0,_store__WEBPACK_IMPORTED_MODULE_1__.toStorage)(sortedList);\n};\n\nconst dragStart = (e) => {\n  e.target.style.opacity = '0.4';\n  dragElemStart = e.currentTarget;\n  e.dataTransfer.effectAllowed = 'move';\n  e.dataTransfer.setData('text/html', dragElemStart.innerHTML);\n};\n\nconst dragEnd = (e) => {\n  e.target.style.opacity = '1';\n  return e;\n};\n\nconst dragOver = (e) => {\n  e.preventDefault();\n};\n\nconst drop = (e) => {\n  e.stopPropagation();\n  const dropElemEnd = e.currentTarget;\n\n  if (dragElemStart !== dropElemEnd) {\n    dragElemStart.innerHTML = dropElemEnd.innerHTML;\n    dropElemEnd.innerHTML = e.dataTransfer.getData('text/html');\n  }\n  (0,_add_remove__WEBPACK_IMPORTED_MODULE_0__.addHandlers)();\n  (0,_add_remove__WEBPACK_IMPORTED_MODULE_0__.editHandlers)();\n  (0,_store__WEBPACK_IMPORTED_MODULE_1__.reloadStore)();\n  refreshStore();\n  return false;\n};\n\nconst dragHover = () => {\n  const todoItems = document.getElementsByClassName('todo-item');\n  [...todoItems].forEach((todoItem) => {\n    todoItem.addEventListener('dragstart', dragStart, false);\n    todoItem.addEventListener('dragend', dragEnd, false);\n    todoItem.addEventListener('drop', drop, false);\n    todoItem.addEventListener('dragover', dragOver, false);\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/dragdrop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dragdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragdrop */ \"./src/dragdrop.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status */ \"./src/status.js\");\n/* harmony import */ var _add_remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add_remove */ \"./src/add_remove.js\");\n\n\n\n\n\n\nconst todoItems = [];\n\nconst populateItems = (todoItems, sort) => {\n  let sortedTodo = [];\n  if (sort) {\n    sortedTodo = todoItems.sort((a, b) => a.index - b.index);\n  } else {\n    sortedTodo = todoItems;\n  }\n\n  for (let i = 0; i < sortedTodo.length; i += 1) {\n    let style = '';\n    let checkbox = '';\n    if (sortedTodo[i].completed) {\n      style = 'text-decoration: line-through;';\n      checkbox = 'checked';\n    } else {\n      style = 'text-decoration: none;';\n      checkbox = '';\n    }\n\n    document.getElementById('list-items').insertAdjacentHTML('beforeend', `\n    <div class=\"todo-item\" draggable=\"true\">\n      <div>\n        <input type=\"checkbox\" name=\"item-${sortedTodo[i].index}\" ${checkbox}>\n        <label for=\"item-${sortedTodo[i].index}\" style=\"${style}\" contenteditable=true> \n          ${sortedTodo[i].description}\n        </label>\n      </div>\n      <div>\n        <span class=\"material-icons-outlined remove-btn buttons\" id=\"item-${sortedTodo[i].index}\">delete_outline</span>\n        <span class=\"material-icons-outlined buttons move-button\">more_vert</span>\n      </div>\n  </div>\n    `);\n  }\n};\n\nwindow.addEventListener('load', () => {\n  const localStore = (0,_store__WEBPACK_IMPORTED_MODULE_2__.fromStorage)();\n  if (localStore == null) {\n    (0,_store__WEBPACK_IMPORTED_MODULE_2__.toStorage)(todoItems, true);\n    populateItems(todoItems);\n  } else {\n    const sortedItems = (0,_status__WEBPACK_IMPORTED_MODULE_3__.sortIndex)(localStore);\n    populateItems(sortedItems, false);\n  }\n  (0,_dragdrop__WEBPACK_IMPORTED_MODULE_1__.dragHover)();\n  (0,_store__WEBPACK_IMPORTED_MODULE_2__.reloadStore)();\n  (0,_add_remove__WEBPACK_IMPORTED_MODULE_4__.addHandlers)();\n  (0,_add_remove__WEBPACK_IMPORTED_MODULE_4__.editHandlers)();\n});\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortIndex\": () => (/* binding */ sortIndex),\n/* harmony export */   \"generateListFromDOM\": () => (/* binding */ generateListFromDOM),\n/* harmony export */   \"refreshStore\": () => (/* binding */ refreshStore)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n\n\nconst sortIndex = (list) => {\n  for (let i = 0; i < list.length; i += 1) {\n    list[i].index = i;\n  }\n  return list;\n};\n\nconst generateListFromDOM = () => {\n  const list = document.getElementsByClassName('todo-item');\n  const resultList = [];\n  for (let i = 0; i < list.length; i += 1) {\n    const description = list[i].children[0].children[1].innerText;\n    const completed = list[i].children[0].children[0].checked;\n    const index = list[i].children[0].children[0].name.split('-')[1];\n\n    resultList.push({\n      description,\n      completed,\n      index,\n    });\n  }\n  return resultList;\n};\n\nconst refreshStore = () => {\n  const resultList = generateListFromDOM();\n  const sortedList = sortIndex(resultList);\n\n  (0,_store__WEBPACK_IMPORTED_MODULE_0__.toStorage)(sortedList);\n};\n\n\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/status.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("const toStorage = (data) => {\n  localStorage.setItem('todo', JSON.stringify(data));\n};\n\nconst fromStorage = () => {\n  const todoList = localStorage.getItem('todo');\n  return JSON.parse(todoList);\n};\n\nconst markTodoItem = (index, value) => {\n  const list = fromStorage();\n\n  list.forEach((item) => {\n    if (item.index === Number(index) || item.index === index.toString()) {\n      item.completed = value;\n    }\n  });\n\n  toStorage(list);\n};\n\nconst updateTodo = (todoItem) => {\n  const checkbox = todoItem.children[0].children[0];\n  const checkboxIndex = checkbox.getAttribute('name').split('-')[1];\n\n  if (checkbox.checked) {\n    markTodoItem(checkboxIndex, true);\n    checkbox.nextElementSibling.style.textDecoration = 'line-through';\n  } else {\n    markTodoItem(checkboxIndex, false);\n    checkbox.nextElementSibling.style.textDecoration = 'none';\n  }\n};\n\nconst reloadStore = () => {\n  const todoItems = document.getElementsByClassName('todo-item');\n\n  [...todoItems].forEach((todoItem) => {\n    todoItem.children[0].children[0].addEventListener('change', () => {\n      updateTodo(todoItem);\n    });\n  });\n};\nexports.reloadStore = reloadStore;\nexports.toStorage = toStorage;\nexports.fromStorage = fromStorage;\n\n//# sourceURL=webpack://webpack-setup/./src/store.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;