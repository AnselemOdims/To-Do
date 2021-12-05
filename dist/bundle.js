/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color: #88e0ef;\n  --accent-color: #333;\n  --neutral-color-1: #f5f4f4;\n  --neutral-color-2: #989998;\n  --neutral-color-3: #f7f7f6;\n  --neutral-color-4: #adacac;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color);\n  position: relative;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Card Styles */\n.main-container {\n  background-color: var(--white);\n  margin: 10% auto;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n}\n\n.title > p {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.form-container,\n.list {\n  display: flex;\n  padding: 5px 20px 5px 15px;\n  align-items: center;\n}\n\nform {\n  width: 100%;\n}\n\nform > input {\n  width: 95%;\n  border: none;\n  height: 40px;\n  font-size: 17px;\n  font-family: var(--font);\n}\n\nform > input:focus:not(.list form > input) {\n  outline: none;\n  background: var(--white);\n  border: none;\n}\n\nform > input::placeholder {\n  font-family: var(--font);\n  font-style: italic;\n  font-weight: 100;\n}\n\n.enter {\n  transform: rotate(90deg);\n}\n\n.bottom {\n  border-bottom: solid 2px var(--neutral-color-1);\n}\n\n.clear {\n  padding: 15px;\n  background: var(--neutral-color-3);\n  text-align: center;\n}\n\n.clear > a {\n  color: var(--neutral-color-4);\n}\n\n.clear > a:hover {\n  color: var(--accent-color);\n  text-decoration: underline;\n}\n\n.fas {\n  color: var(--neutral-color-2);\n  font-size: 14px;\n}\n\n.fas:hover {\n  color: var(--accent-color);\n}\n\n.list {\n  width: 100%;\n  border-bottom: solid 2px var(--neutral-color-1);\n}\n\n.list > img {\n  width: 26px;\n}\n\n.list .fas {\n  font-size: 17px;\n}\n\n.list .fas.drag {\n  font-size: 17px;\n  cursor: move;\n}\n\n.list > form > input[type=\"text\"].input-value {\n  width: 90%;\n  margin: 0 10px;\n  border: none;\n  height: 40px;\n  font-size: 1rem;\n  font-family: var(--font);\n}\n\n.list > form > input[type=\"text\"]:focus {\n  outline: none;\n}\n\n.list > input[type=\"checkbox\"] {\n  height: 30px;\n  width: 20px;\n  cursor: pointer;\n  outline: none;\n}\n\n.d-none {\n  display: none;\n}\n\n.strike {\n  text-decoration: line-through;\n  color: green;\n}\n\n.focus {\n  background: #fcffa6;\n}\n\n.fa-trash-alt:hover {\n  color: red;\n}\n\n.error {\n  color: red;\n  font-size: 11px;\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.rotate {\n  -webkit-animation: rotate 1s;\n  -moz-animation: rotate 1s;\n  animation: rotate 1s;\n}\n\n@keyframes slide-top {\n  from {\n    top: -800px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.animate-top {\n  position: relative;\n  animation: slide-top ease-out 1.2s;\n  border: solid 2px green;\n}\n\n@media (max-width: 480px) {\n  .main-container {\n    width: 90%;\n  }\n}\n\n@media (max-width: 768px) and (min-width: 481px) {\n  .main-container {\n    width: 80%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,uBAAuB;;AAGvB,iBAAiB;AACjB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,wBAAwB;EACxB,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,aAAa;EACb,6BAA6B;AAC/B;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,+CAA+C;AACjD;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE;IACE,WAAW;IACX,UAAU;EACZ;;EAEA;IACE,MAAM;IACN,UAAU;EACZ;AACF;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF","sourcesContent":["/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color: #88e0ef;\n  --accent-color: #333;\n  --neutral-color-1: #f5f4f4;\n  --neutral-color-2: #989998;\n  --neutral-color-3: #f7f7f6;\n  --neutral-color-4: #adacac;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color);\n  position: relative;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Card Styles */\n.main-container {\n  background-color: var(--white);\n  margin: 10% auto;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n}\n\n.title > p {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.form-container,\n.list {\n  display: flex;\n  padding: 5px 20px 5px 15px;\n  align-items: center;\n}\n\nform {\n  width: 100%;\n}\n\nform > input {\n  width: 95%;\n  border: none;\n  height: 40px;\n  font-size: 17px;\n  font-family: var(--font);\n}\n\nform > input:focus:not(.list form > input) {\n  outline: none;\n  background: var(--white);\n  border: none;\n}\n\nform > input::placeholder {\n  font-family: var(--font);\n  font-style: italic;\n  font-weight: 100;\n}\n\n.enter {\n  transform: rotate(90deg);\n}\n\n.bottom {\n  border-bottom: solid 2px var(--neutral-color-1);\n}\n\n.clear {\n  padding: 15px;\n  background: var(--neutral-color-3);\n  text-align: center;\n}\n\n.clear > a {\n  color: var(--neutral-color-4);\n}\n\n.clear > a:hover {\n  color: var(--accent-color);\n  text-decoration: underline;\n}\n\n.fas {\n  color: var(--neutral-color-2);\n  font-size: 14px;\n}\n\n.fas:hover {\n  color: var(--accent-color);\n}\n\n.list {\n  width: 100%;\n  border-bottom: solid 2px var(--neutral-color-1);\n}\n\n.list > img {\n  width: 26px;\n}\n\n.list .fas {\n  font-size: 17px;\n}\n\n.list .fas.drag {\n  font-size: 17px;\n  cursor: move;\n}\n\n.list > form > input[type=\"text\"].input-value {\n  width: 90%;\n  margin: 0 10px;\n  border: none;\n  height: 40px;\n  font-size: 1rem;\n  font-family: var(--font);\n}\n\n.list > form > input[type=\"text\"]:focus {\n  outline: none;\n}\n\n.list > input[type=\"checkbox\"] {\n  height: 30px;\n  width: 20px;\n  cursor: pointer;\n  outline: none;\n}\n\n.d-none {\n  display: none;\n}\n\n.strike {\n  text-decoration: line-through;\n  color: green;\n}\n\n.focus {\n  background: #fcffa6;\n}\n\n.fa-trash-alt:hover {\n  color: red;\n}\n\n.error {\n  color: red;\n  font-size: 11px;\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.rotate {\n  -webkit-animation: rotate 1s;\n  -moz-animation: rotate 1s;\n  animation: rotate 1s;\n}\n\n@keyframes slide-top {\n  from {\n    top: -800px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.animate-top {\n  position: relative;\n  animation: slide-top ease-out 1.2s;\n  border: solid 2px green;\n}\n\n@media (max-width: 480px) {\n  .main-container {\n    width: 90%;\n  }\n}\n\n@media (max-width: 768px) and (min-width: 481px) {\n  .main-container {\n    width: 80%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons/check.svg */ "./src/images/icons/check.svg");
/* eslint-disable class-methods-use-this */


class Component {
  static list(val, id) {
    return `
    <li class="list" draggable="true" data-id=${id}>
    <input type="checkbox" id="check" data-id=${id}><img src=${_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__} alt="checked icon" class="d-none" data-id=${id}>
    <form>
    <input type="text" class="input-value" value='${val}' data-id=${id}>
    </form>
    <a><i class="fas fa-ellipsis-v drag"></i></a>
    <a class="d-none"  id="delete"><i class="far fa-trash-alt" data-id=${id}></i></a>
  </li>
  `;
  }
}

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* eslint-disable import/no-cycle */


class Helper {
  /**
   * @function formHandler - instance method for handling of form submission
   */
  static formHandler(e) {
    e.preventDefault();
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].add();
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clear();
    Helper.checkHandler();
    Helper.handleFocus();
  }

  /**
   * @function display - this helps to display the list on load
   */
  static display() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item) => {
      const { description, index } = item;
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(description, index);
      document.querySelector('#todo').focus();
      Helper.checkHandler();
      Helper.handleFocus();
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(tasks);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].edit();
  }

  /**
   * @function focusHandler - handles the focus on the inputs
   * @param {Event Object} e - The current event
   */
  static focusHandler(e) {
    const item = e.currentTarget;
    const child = item.children;
    const input = child[2].firstElementChild;
    if (document.querySelector('li.list.focus')) {
      const parent = document.querySelector('li.list.focus');
      parent.children[2].firstElementChild.classList.remove('focus');
      parent.children[3].classList.remove('d-none');
      parent.children[4].classList.add('d-none');
      parent.classList.remove('focus');
    }
    input.focus();
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].tog('add', 'focus', input);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].tog('add', 'd-none', child[3]);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].tog('rem', 'd-none', child[4]);
    item.classList.add('focus');
    item.querySelector('#delete .far').addEventListener('click', (e) => {
      e.preventDefault();
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].remove(e, e.currentTarget.dataset.id);
    });
  }

  /**
   *
   * @function changeHandler - handles the change on the checkbox
   * @param {Event Object} e - The current event
   */
  static changeHandler(e) {
    const item = e.target;
    const parent = item.parentElement;
    const child = parent.children;
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].help('add', item, child[1], child[2].firstElementChild);
    document.querySelector('.todo-list ul').innerHTML = '';
    Helper.display();
    child[1].addEventListener('click', () => {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].help('rem', item, child[1], child[2].firstElementChild);
      item.checked = false;
    });
  }

  /**
   * @function handleFocus - This handles the focus on inputs
   */
  static handleFocus() {
    document.querySelectorAll('li.list').forEach((item) => item.addEventListener('click', Helper.focusHandler));
  }

  /**
   * @function checkHandler - handles the checkbox change event
   */
  static checkHandler() {
    document.querySelectorAll('input[type="checkbox"]').forEach((item) => item.addEventListener('change', Helper.changeHandler));
  }
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ "./src/component.js");
/* eslint-disable import/no-cycle */



class Utils {
  /**
   * @function render - instance class method
   * @returns - a list element formed from the component
   */
  static render(val, id) {
    document.querySelector('.todo-list ul').insertAdjacentHTML('beforeend', _component_js__WEBPACK_IMPORTED_MODULE_1__["default"].list(val, id));
  }

  /**
   * @function add - instance method that adds new todo to list
   */
  static add() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const todo = document.querySelector('#todo').value;
    if (todo === '') {
      document.querySelector('.error').innerText = 'Todo can not be empty';
      return;
    }
    document.querySelector('.error').innerHTML = '';
    Utils.pushControl(tasks, todo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    Utils.render(todo, tasks.length);
    Utils.animate(tasks);
    Utils.edit();
  }

  /**
   * @function remove - The remove function to remove a list item
   * @param {Event Object} e - The event object
   * @param {*} id - The id of the item
   */
  static remove(e, id) {
    Utils.delete(id);
    e.currentTarget.closest('ul > li').remove();
    document.querySelector('.todo-list ul').innerHTML = '';
    _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].display();
  }

  /**
 * @function clearAll - This handles removing all completed items from the list
 */
  static clearAll() {
    Utils.delete(false);
    document.querySelectorAll('li.list input[type="checkbox"]').forEach((item) => {
      if (item.classList.contains('d-none')) {
        item.remove();
      }
    });
    document.querySelector('.todo-list ul').innerHTML = '';
    _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].display();
  }

  /**
   * @function add - instance method that clears input on add
   */
  static clear() {
    document.querySelector('#todo').value = '';
  }

  /**
   * @function pushControl - helper method that pushes items into the tasks array
   * @param {Array} tasks - The array collection of objects
   * @param {String} todo - The todo description string
   */
  static pushControl(tasks, todo, completed = false) {
    tasks.push({
      description: `${todo}`,
      completed,
      index: tasks.length + 1,
    });
  }

  /**
   * @function change - Handles change in completed when checkbox is toggled
   * @param {String} id - The data id of the task
   * @param {Boolean} val - The value of completed
   */
  static change(id, val) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const filtered = tasks.filter((item) => item.index !== parseInt(id, 10));
    const task = tasks.find((item) => item.index === parseInt(id, 10));
    if (typeof val === 'boolean') {
      task.completed = val;
    } else {
      task.description = val;
    }
    filtered.splice(task.index - 1, 0, task);
    localStorage.setItem('tasks', JSON.stringify(filtered));
  }

  /**
   * @function tog - instance method that toggles CSS class
   * @param  {...any} args - List of arguments
   * @returns the toggling
   */
  static tog(...args) {
    if (args[0] === 'add') return args[2].classList.add(args[1]);
    return args[2].classList.remove(args[1]);
  }

  /**
   * @function help - Add and remove classes
   * @param {String} type - checks if add or remove
   * @param {HTML Element} val1 - the html element to add to or remove from
   * @param {HTML Element} val2 - the html element to add to or remove from
   * @param {HTML Element} val3 - the html element to add to or remove from
   */
  static help(type, val1, val2, val3) {
    if (type === 'add') {
      Utils.tog('add', 'd-none', val1);
      Utils.tog('rem', 'd-none', val2);
      Utils.tog('add', 'strike', val3);
      Utils.change(val1.dataset.id, true);
    }
    if (type === 'rem') {
      Utils.tog('rem', 'd-none', val1);
      Utils.tog('add', 'd-none', val2);
      Utils.tog('rem', 'strike', val3);
      Utils.change(val1.dataset.id, false);
    }
  }

  /**
   * @function load - the load function
   * @param {Array} tasks - The tasks array
   */
  static load(tasks) {
    document.querySelectorAll('li.list').forEach((elem) => {
      const task = tasks.find((item) => item.index === parseInt(elem.children[0].dataset.id, 10));
      if (task.completed) {
        const child = elem.children;
        Utils.help('add', child[0], child[1], child[2].firstElementChild);
        child[1].addEventListener('click', () => Utils.help('rem', child[0], child[1], child[2].firstElementChild));
      }
    });
  }

  /**
   * @function edit - Edits the todo and push changes to localStorage
   */
  static edit() {
    document.querySelectorAll('.list form input').forEach((input) => {
      const inputValue = input.value;
      input.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.value === '') {
          e.target.value = inputValue;
          return;
        }
        Utils.change(e.target.dataset.id, e.target.value);
        document.querySelector('.todo-list ul').innerHTML = '';
        _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].display();
      });
    });
    document.querySelectorAll('.list form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      });
    });
  }

  /**
   * @function delete - Deletes an item(s) from the list
   * @param {any} val - A boolean or string
   */
  static delete(val) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    let remTasks;
    if (typeof val === 'string') {
      remTasks = tasks.filter((item) => item.index !== parseInt(val, 10));
    } else {
      remTasks = tasks.filter((item) => item.completed === val);
    }
    localStorage.removeItem('tasks');
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];
    remTasks.forEach((item) => {
      const { description, completed } = item;
      if (completed) {
        Utils.pushControl(todos, description, true);
      } else {
        Utils.pushControl(todos, description);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(todos));
  }

  /**
 * @function animate - animate each list item
 * @param {Array} tasks - The array of tasks
 */
  static animate(tasks) {
    document.querySelectorAll('li.list').forEach((item) => {
      if (parseInt(item.dataset.id, 10) === tasks.length) item.classList.add('animate-top');
      setTimeout(() => { item.classList.remove('animate-top'); }, 1100);
    });
  }
}

/***/ }),

/***/ "./src/images/icons/check.svg":
/*!************************************!*\
  !*** ./src/images/icons/check.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3375ca6678e54224d89.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");




window.addEventListener('DOMContentLoaded', () => {
  _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].display();
  document.querySelector('form').addEventListener('submit', (e) => _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].formHandler(e));
  document.querySelector('.enter').addEventListener('click', (e) => _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].formHandler(e));
  document.querySelector('.clear a').addEventListener('click', () => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].clearAll());
  document.querySelector('#refresh .fas').addEventListener('click', (e) => {
    e.target.classList.add('rotate');
    setTimeout(() => { e.target.classList.remove('rotate'); }, 1000);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUhBQXVILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNqTTtBQUNBLDZGQUE2RixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsNEJBQTRCLDZCQUE2Qix5QkFBeUIsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLGtCQUFrQixrQ0FBa0MsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsVUFBVSxvQkFBb0IsNkJBQTZCLHFDQUFxQyx1QkFBdUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLE9BQU8sMEJBQTBCLCtCQUErQixvQkFBb0IsR0FBRyx3Q0FBd0MsbUNBQW1DLHFCQUFxQixlQUFlLGtCQUFrQiwyQkFBMkIsOENBQThDLEdBQUcsWUFBWSxrQkFBa0IsbUNBQW1DLGtCQUFrQixHQUFHLGdCQUFnQixxQkFBcUIsb0JBQW9CLEdBQUcsNkJBQTZCLGtCQUFrQiwrQkFBK0Isd0JBQXdCLEdBQUcsVUFBVSxnQkFBZ0IsR0FBRyxrQkFBa0IsZUFBZSxpQkFBaUIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsR0FBRyxnREFBZ0Qsa0JBQWtCLDZCQUE2QixpQkFBaUIsR0FBRywrQkFBK0IsNkJBQTZCLHVCQUF1QixxQkFBcUIsR0FBRyxZQUFZLDZCQUE2QixHQUFHLGFBQWEsb0RBQW9ELEdBQUcsWUFBWSxrQkFBa0IsdUNBQXVDLHVCQUF1QixHQUFHLGdCQUFnQixrQ0FBa0MsR0FBRyxzQkFBc0IsK0JBQStCLCtCQUErQixHQUFHLFVBQVUsa0NBQWtDLG9CQUFvQixHQUFHLGdCQUFnQiwrQkFBK0IsR0FBRyxXQUFXLGdCQUFnQixvREFBb0QsR0FBRyxpQkFBaUIsZ0JBQWdCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0IsaUJBQWlCLEdBQUcscURBQXFELGVBQWUsbUJBQW1CLGlCQUFpQixpQkFBaUIsb0JBQW9CLDZCQUE2QixHQUFHLCtDQUErQyxrQkFBa0IsR0FBRyxzQ0FBc0MsaUJBQWlCLGdCQUFnQixvQkFBb0Isa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxhQUFhLGtDQUFrQyxpQkFBaUIsR0FBRyxZQUFZLHdCQUF3QixHQUFHLHlCQUF5QixlQUFlLEdBQUcsWUFBWSxlQUFlLG9CQUFvQixHQUFHLHVCQUF1QixVQUFVLHdDQUF3QyxnQ0FBZ0MsS0FBSyxHQUFHLGFBQWEsaUNBQWlDLDhCQUE4Qix5QkFBeUIsR0FBRywwQkFBMEIsVUFBVSxrQkFBa0IsaUJBQWlCLEtBQUssVUFBVSxhQUFhLGlCQUFpQixLQUFLLEdBQUcsa0JBQWtCLHVCQUF1Qix1Q0FBdUMsNEJBQTRCLEdBQUcsK0JBQStCLHFCQUFxQixpQkFBaUIsS0FBSyxHQUFHLHNEQUFzRCxxQkFBcUIsaUJBQWlCLEtBQUssR0FBRyxTQUFTLHdGQUF3RixhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxpSUFBaUksTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLDJCQUEyQixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsNEJBQTRCLDZCQUE2Qix5QkFBeUIsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLGtCQUFrQixrQ0FBa0MsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsVUFBVSxvQkFBb0IsNkJBQTZCLHFDQUFxQyx1QkFBdUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLE9BQU8sMEJBQTBCLCtCQUErQixvQkFBb0IsR0FBRyx3Q0FBd0MsbUNBQW1DLHFCQUFxQixlQUFlLGtCQUFrQiwyQkFBMkIsOENBQThDLEdBQUcsWUFBWSxrQkFBa0IsbUNBQW1DLGtCQUFrQixHQUFHLGdCQUFnQixxQkFBcUIsb0JBQW9CLEdBQUcsNkJBQTZCLGtCQUFrQiwrQkFBK0Isd0JBQXdCLEdBQUcsVUFBVSxnQkFBZ0IsR0FBRyxrQkFBa0IsZUFBZSxpQkFBaUIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsR0FBRyxnREFBZ0Qsa0JBQWtCLDZCQUE2QixpQkFBaUIsR0FBRywrQkFBK0IsNkJBQTZCLHVCQUF1QixxQkFBcUIsR0FBRyxZQUFZLDZCQUE2QixHQUFHLGFBQWEsb0RBQW9ELEdBQUcsWUFBWSxrQkFBa0IsdUNBQXVDLHVCQUF1QixHQUFHLGdCQUFnQixrQ0FBa0MsR0FBRyxzQkFBc0IsK0JBQStCLCtCQUErQixHQUFHLFVBQVUsa0NBQWtDLG9CQUFvQixHQUFHLGdCQUFnQiwrQkFBK0IsR0FBRyxXQUFXLGdCQUFnQixvREFBb0QsR0FBRyxpQkFBaUIsZ0JBQWdCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0IsaUJBQWlCLEdBQUcscURBQXFELGVBQWUsbUJBQW1CLGlCQUFpQixpQkFBaUIsb0JBQW9CLDZCQUE2QixHQUFHLCtDQUErQyxrQkFBa0IsR0FBRyxzQ0FBc0MsaUJBQWlCLGdCQUFnQixvQkFBb0Isa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxhQUFhLGtDQUFrQyxpQkFBaUIsR0FBRyxZQUFZLHdCQUF3QixHQUFHLHlCQUF5QixlQUFlLEdBQUcsWUFBWSxlQUFlLG9CQUFvQixHQUFHLHVCQUF1QixVQUFVLHdDQUF3QyxnQ0FBZ0MsS0FBSyxHQUFHLGFBQWEsaUNBQWlDLDhCQUE4Qix5QkFBeUIsR0FBRywwQkFBMEIsVUFBVSxrQkFBa0IsaUJBQWlCLEtBQUssVUFBVSxhQUFhLGlCQUFpQixLQUFLLEdBQUcsa0JBQWtCLHVCQUF1Qix1Q0FBdUMsNEJBQTRCLEdBQUcsK0JBQStCLHFCQUFxQixpQkFBaUIsS0FBSyxHQUFHLHNEQUFzRCxxQkFBcUIsaUJBQWlCLEtBQUssR0FBRyxxQkFBcUI7QUFDempSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzZDOztBQUU5QjtBQUNmO0FBQ0E7QUFDQSxnREFBZ0QsR0FBRztBQUNuRCxnREFBZ0QsR0FBRyxZQUFZLG9EQUFLLEVBQUUsNENBQTRDLEdBQUc7QUFDckg7QUFDQSxvREFBb0QsSUFBSSxZQUFZLEdBQUc7QUFDdkU7QUFDQTtBQUNBLHlFQUF5RSxHQUFHO0FBQzVFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDK0I7O0FBRWhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVM7QUFDYixJQUFJLHVEQUFXO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUJBQXFCO0FBQ25DLE1BQU0sd0RBQVk7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVM7QUFDYixJQUFJLHFEQUFTO0FBQ2IsSUFBSSxxREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVk7QUFDbEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQVU7QUFDaEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ2tDO0FBQ0s7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSwwREFBYztBQUMxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFjO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksMkRBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixLQUFLO0FBQzNCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsY0FBYztBQUMzQixhQUFhLGNBQWM7QUFDM0IsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBYztBQUN0QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUJBQXlCO0FBQ3ZDO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUNBQXVDO0FBQ2hFLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDek1BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNhO0FBQ0g7O0FBRS9CO0FBQ0EsRUFBRSwyREFBYztBQUNoQixtRUFBbUUsK0RBQWtCO0FBQ3JGLG9FQUFvRSwrREFBa0I7QUFDdEYscUVBQXFFLDBEQUFjO0FBQ25GO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQXNDO0FBQzdELEdBQUc7QUFDSCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDgwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHb29nbGUgZm9udCBpbXBvcnQgKi9cXG5cXG4vKiBSZXNldCBTdHlsZXMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICM4OGUwZWY7XFxuICAtLWFjY2VudC1jb2xvcjogIzMzMztcXG4gIC0tbmV1dHJhbC1jb2xvci0xOiAjZjVmNGY0O1xcbiAgLS1uZXV0cmFsLWNvbG9yLTI6ICM5ODk5OTg7XFxuICAtLW5ldXRyYWwtY29sb3ItMzogI2Y3ZjdmNjtcXG4gIC0tbmV1dHJhbC1jb2xvci00OiAjYWRhY2FjO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBHbG9iYWwgc3R5bGVzICovXFxuaHRtbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnVsID4gbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQ2FyZCBTdHlsZXMgKi9cXG4ubWFpbi1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgbWFyZ2luOiAxMCUgYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMCAzcHggOHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50aXRsZSA+IHAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLFxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1cHggMjBweCA1cHggMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvcm0gPiBpbnB1dCB7XFxuICB3aWR0aDogOTUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6Zm9jdXM6bm90KC5saXN0IGZvcm0gPiBpbnB1dCkge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4uZW50ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jbGVhciA+IGEge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItNCk7XFxufVxcblxcbi5jbGVhciA+IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmZhcyB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0yKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZhczpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLmxpc3QgPiBpbWcge1xcbiAgd2lkdGg6IDI2cHg7XFxufVxcblxcbi5saXN0IC5mYXMge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4ubGlzdCAuZmFzLmRyYWcge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4ubGlzdCA+IGZvcm0gPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0uaW5wdXQtdmFsdWUge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG4ubGlzdCA+IGZvcm0gPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxpc3QgPiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2ZjZmZhNjtcXG59XFxuXFxuLmZhLXRyYXNoLWFsdDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlIDFzO1xcbiAgLW1vei1hbmltYXRpb246IHJvdGF0ZSAxcztcXG4gIGFuaW1hdGlvbjogcm90YXRlIDFzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtODAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGUtdG9wIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdG9wIGVhc2Utb3V0IDEuMnM7XFxuICBib3JkZXI6IHNvbGlkIDJweCBncmVlbjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAubWFpbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1QkFBdUI7O0FBR3ZCLGlCQUFpQjtBQUNqQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLGNBQWM7QUFDZDtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxNQUFNO0lBQ04sVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsODAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzg4ZTBlZjtcXG4gIC0tYWNjZW50LWNvbG9yOiAjMzMzO1xcbiAgLS1uZXV0cmFsLWNvbG9yLTE6ICNmNWY0ZjQ7XFxuICAtLW5ldXRyYWwtY29sb3ItMjogIzk4OTk5ODtcXG4gIC0tbmV1dHJhbC1jb2xvci0zOiAjZjdmN2Y2O1xcbiAgLS1uZXV0cmFsLWNvbG9yLTQ6ICNhZGFjYWM7XFxuICAtLXdoaXRlOiAjZmZmO1xcbiAgLS1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxudWwgPiBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBDYXJkIFN0eWxlcyAqL1xcbi5tYWluLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwIDNweCA4cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRpdGxlID4gcCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIsXFxuLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9ybSA+IGlucHV0IHtcXG4gIHdpZHRoOiA5NSU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxufVxcblxcbmZvcm0gPiBpbnB1dDpmb2N1czpub3QoLmxpc3QgZm9ybSA+IGlucHV0KSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5lbnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxufVxcblxcbi5jbGVhciB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0zKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsZWFyID4gYSB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci00KTtcXG59XFxuXFxuLmNsZWFyID4gYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uZmFzIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTIpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZmFzOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ubGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4ubGlzdCA+IGltZyB7XFxuICB3aWR0aDogMjZweDtcXG59XFxuXFxuLmxpc3QgLmZhcyB7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5saXN0IC5mYXMuZHJhZyB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXS5pbnB1dC12YWx1ZSB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxufVxcblxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGlzdCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5mb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmZmE2O1xcbn1cXG5cXG4uZmEtdHJhc2gtYWx0OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5lcnJvciB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxuICAtbW96LWFuaW1hdGlvbjogcm90YXRlIDFzO1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC04MDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uYW5pbWF0ZS10b3Age1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS10b3AgZWFzZS1vdXQgMS4ycztcXG4gIGJvcmRlcjogc29saWQgMnB4IGdyZWVuO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XFxuICAubWFpbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBjaGVjayBmcm9tICcuL2ltYWdlcy9pY29ucy9jaGVjay5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbGlzdCh2YWwsIGlkKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8bGkgY2xhc3M9XCJsaXN0XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIGRhdGEtaWQ9JHtpZH0+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tcIiBkYXRhLWlkPSR7aWR9PjxpbWcgc3JjPSR7Y2hlY2t9IGFsdD1cImNoZWNrZWQgaWNvblwiIGNsYXNzPVwiZC1ub25lXCIgZGF0YS1pZD0ke2lkfT5cbiAgICA8Zm9ybT5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXZhbHVlXCIgdmFsdWU9JyR7dmFsfScgZGF0YS1pZD0ke2lkfT5cbiAgICA8L2Zvcm0+XG4gICAgPGE+PGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtdiBkcmFnXCI+PC9pPjwvYT5cbiAgICA8YSBjbGFzcz1cImQtbm9uZVwiICBpZD1cImRlbGV0ZVwiPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdFwiIGRhdGEtaWQ9JHtpZH0+PC9pPjwvYT5cbiAgPC9saT5cbiAgYDtcbiAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xuICAvKipcbiAgICogQGZ1bmN0aW9uIGZvcm1IYW5kbGVyIC0gaW5zdGFuY2UgbWV0aG9kIGZvciBoYW5kbGluZyBvZiBmb3JtIHN1Ym1pc3Npb25cbiAgICovXG4gIHN0YXRpYyBmb3JtSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFV0aWxzLmFkZCgpO1xuICAgIFV0aWxzLmNsZWFyKCk7XG4gICAgSGVscGVyLmNoZWNrSGFuZGxlcigpO1xuICAgIEhlbHBlci5oYW5kbGVGb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBkaXNwbGF5IC0gdGhpcyBoZWxwcyB0byBkaXNwbGF5IHRoZSBsaXN0IG9uIGxvYWRcbiAgICovXG4gIHN0YXRpYyBkaXNwbGF5KCkge1xuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG4gICAgdGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgaW5kZXggfSA9IGl0ZW07XG4gICAgICBVdGlscy5yZW5kZXIoZGVzY3JpcHRpb24sIGluZGV4KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJykuZm9jdXMoKTtcbiAgICAgIEhlbHBlci5jaGVja0hhbmRsZXIoKTtcbiAgICAgIEhlbHBlci5oYW5kbGVGb2N1cygpO1xuICAgIH0pO1xuICAgIFV0aWxzLmxvYWQodGFza3MpO1xuICAgIFV0aWxzLmVkaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZm9jdXNIYW5kbGVyIC0gaGFuZGxlcyB0aGUgZm9jdXMgb24gdGhlIGlucHV0c1xuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIFRoZSBjdXJyZW50IGV2ZW50XG4gICAqL1xuICBzdGF0aWMgZm9jdXNIYW5kbGVyKGUpIHtcbiAgICBjb25zdCBpdGVtID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGNoaWxkID0gaXRlbS5jaGlsZHJlbjtcbiAgICBjb25zdCBpbnB1dCA9IGNoaWxkWzJdLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaS5saXN0LmZvY3VzJykpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLmxpc3QuZm9jdXMnKTtcbiAgICAgIHBhcmVudC5jaGlsZHJlblsyXS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgICAgcGFyZW50LmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgcGFyZW50LmNoaWxkcmVuWzRdLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XG4gICAgfVxuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgVXRpbHMudG9nKCdhZGQnLCAnZm9jdXMnLCBpbnB1dCk7XG4gICAgVXRpbHMudG9nKCdhZGQnLCAnZC1ub25lJywgY2hpbGRbM10pO1xuICAgIFV0aWxzLnRvZygncmVtJywgJ2Qtbm9uZScsIGNoaWxkWzRdKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlIC5mYXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBVdGlscy5yZW1vdmUoZSwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBmdW5jdGlvbiBjaGFuZ2VIYW5kbGVyIC0gaGFuZGxlcyB0aGUgY2hhbmdlIG9uIHRoZSBjaGVja2JveFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIFRoZSBjdXJyZW50IGV2ZW50XG4gICAqL1xuICBzdGF0aWMgY2hhbmdlSGFuZGxlcihlKSB7XG4gICAgY29uc3QgaXRlbSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBjaGlsZCA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICBVdGlscy5oZWxwKCdhZGQnLCBpdGVtLCBjaGlsZFsxXSwgY2hpbGRbMl0uZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QgdWwnKS5pbm5lckhUTUwgPSAnJztcbiAgICBIZWxwZXIuZGlzcGxheSgpO1xuICAgIGNoaWxkWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgVXRpbHMuaGVscCgncmVtJywgaXRlbSwgY2hpbGRbMV0sIGNoaWxkWzJdLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBoYW5kbGVGb2N1cyAtIFRoaXMgaGFuZGxlcyB0aGUgZm9jdXMgb24gaW5wdXRzXG4gICAqL1xuICBzdGF0aWMgaGFuZGxlRm9jdXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCcpLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBIZWxwZXIuZm9jdXNIYW5kbGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNoZWNrSGFuZGxlciAtIGhhbmRsZXMgdGhlIGNoZWNrYm94IGNoYW5nZSBldmVudFxuICAgKi9cbiAgc3RhdGljIGNoZWNrSGFuZGxlcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIEhlbHBlci5jaGFuZ2VIYW5kbGVyKSk7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcmVuZGVyIC0gaW5zdGFuY2UgY2xhc3MgbWV0aG9kXG4gICAqIEByZXR1cm5zIC0gYSBsaXN0IGVsZW1lbnQgZm9ybWVkIGZyb20gdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIHJlbmRlcih2YWwsIGlkKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCB1bCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgQ29tcG9uZW50Lmxpc3QodmFsLCBpZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBhZGQgLSBpbnN0YW5jZSBtZXRob2QgdGhhdCBhZGRzIG5ldyB0b2RvIHRvIGxpc3RcbiAgICovXG4gIHN0YXRpYyBhZGQoKSB7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKS52YWx1ZTtcbiAgICBpZiAodG9kbyA9PT0gJycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpLmlubmVyVGV4dCA9ICdUb2RvIGNhbiBub3QgYmUgZW1wdHknO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5pbm5lckhUTUwgPSAnJztcbiAgICBVdGlscy5wdXNoQ29udHJvbCh0YXNrcywgdG9kbyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICBVdGlscy5yZW5kZXIodG9kbywgdGFza3MubGVuZ3RoKTtcbiAgICBVdGlscy5hbmltYXRlKHRhc2tzKTtcbiAgICBVdGlscy5lZGl0KCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHJlbW92ZSAtIFRoZSByZW1vdmUgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgbGlzdCBpdGVtXG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gVGhlIGV2ZW50IG9iamVjdFxuICAgKiBAcGFyYW0geyp9IGlkIC0gVGhlIGlkIG9mIHRoZSBpdGVtXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlKGUsIGlkKSB7XG4gICAgVXRpbHMuZGVsZXRlKGlkKTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgndWwgPiBsaScpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QgdWwnKS5pbm5lckhUTUwgPSAnJztcbiAgICBIZWxwZXIuZGlzcGxheSgpO1xuICB9XG5cbiAgLyoqXG4gKiBAZnVuY3Rpb24gY2xlYXJBbGwgLSBUaGlzIGhhbmRsZXMgcmVtb3ZpbmcgYWxsIGNvbXBsZXRlZCBpdGVtcyBmcm9tIHRoZSBsaXN0XG4gKi9cbiAgc3RhdGljIGNsZWFyQWxsKCkge1xuICAgIFV0aWxzLmRlbGV0ZShmYWxzZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtbm9uZScpKSB7XG4gICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCB1bCcpLmlubmVySFRNTCA9ICcnO1xuICAgIEhlbHBlci5kaXNwbGF5KCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGFkZCAtIGluc3RhbmNlIG1ldGhvZCB0aGF0IGNsZWFycyBpbnB1dCBvbiBhZGRcbiAgICovXG4gIHN0YXRpYyBjbGVhcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpLnZhbHVlID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHB1c2hDb250cm9sIC0gaGVscGVyIG1ldGhvZCB0aGF0IHB1c2hlcyBpdGVtcyBpbnRvIHRoZSB0YXNrcyBhcnJheVxuICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrcyAtIFRoZSBhcnJheSBjb2xsZWN0aW9uIG9mIG9iamVjdHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRvZG8gLSBUaGUgdG9kbyBkZXNjcmlwdGlvbiBzdHJpbmdcbiAgICovXG4gIHN0YXRpYyBwdXNoQ29udHJvbCh0YXNrcywgdG9kbywgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICB0YXNrcy5wdXNoKHtcbiAgICAgIGRlc2NyaXB0aW9uOiBgJHt0b2RvfWAsXG4gICAgICBjb21wbGV0ZWQsXG4gICAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gY2hhbmdlIC0gSGFuZGxlcyBjaGFuZ2UgaW4gY29tcGxldGVkIHdoZW4gY2hlY2tib3ggaXMgdG9nZ2xlZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBUaGUgZGF0YSBpZCBvZiB0aGUgdGFza1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbCAtIFRoZSB2YWx1ZSBvZiBjb21wbGV0ZWRcbiAgICovXG4gIHN0YXRpYyBjaGFuZ2UoaWQsIHZhbCkge1xuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgY29uc3QgZmlsdGVyZWQgPSB0YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5kZXggIT09IHBhcnNlSW50KGlkLCAxMCkpO1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKChpdGVtKSA9PiBpdGVtLmluZGV4ID09PSBwYXJzZUludChpZCwgMTApKTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0YXNrLmNvbXBsZXRlZCA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IHZhbDtcbiAgICB9XG4gICAgZmlsdGVyZWQuc3BsaWNlKHRhc2suaW5kZXggLSAxLCAwLCB0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiB0b2cgLSBpbnN0YW5jZSBtZXRob2QgdGhhdCB0b2dnbGVzIENTUyBjbGFzc1xuICAgKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3MgLSBMaXN0IG9mIGFyZ3VtZW50c1xuICAgKiBAcmV0dXJucyB0aGUgdG9nZ2xpbmdcbiAgICovXG4gIHN0YXRpYyB0b2coLi4uYXJncykge1xuICAgIGlmIChhcmdzWzBdID09PSAnYWRkJykgcmV0dXJuIGFyZ3NbMl0uY2xhc3NMaXN0LmFkZChhcmdzWzFdKTtcbiAgICByZXR1cm4gYXJnc1syXS5jbGFzc0xpc3QucmVtb3ZlKGFyZ3NbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBoZWxwIC0gQWRkIGFuZCByZW1vdmUgY2xhc3Nlc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIGNoZWNrcyBpZiBhZGQgb3IgcmVtb3ZlXG4gICAqIEBwYXJhbSB7SFRNTCBFbGVtZW50fSB2YWwxIC0gdGhlIGh0bWwgZWxlbWVudCB0byBhZGQgdG8gb3IgcmVtb3ZlIGZyb21cbiAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IHZhbDIgLSB0aGUgaHRtbCBlbGVtZW50IHRvIGFkZCB0byBvciByZW1vdmUgZnJvbVxuICAgKiBAcGFyYW0ge0hUTUwgRWxlbWVudH0gdmFsMyAtIHRoZSBodG1sIGVsZW1lbnQgdG8gYWRkIHRvIG9yIHJlbW92ZSBmcm9tXG4gICAqL1xuICBzdGF0aWMgaGVscCh0eXBlLCB2YWwxLCB2YWwyLCB2YWwzKSB7XG4gICAgaWYgKHR5cGUgPT09ICdhZGQnKSB7XG4gICAgICBVdGlscy50b2coJ2FkZCcsICdkLW5vbmUnLCB2YWwxKTtcbiAgICAgIFV0aWxzLnRvZygncmVtJywgJ2Qtbm9uZScsIHZhbDIpO1xuICAgICAgVXRpbHMudG9nKCdhZGQnLCAnc3RyaWtlJywgdmFsMyk7XG4gICAgICBVdGlscy5jaGFuZ2UodmFsMS5kYXRhc2V0LmlkLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdyZW0nKSB7XG4gICAgICBVdGlscy50b2coJ3JlbScsICdkLW5vbmUnLCB2YWwxKTtcbiAgICAgIFV0aWxzLnRvZygnYWRkJywgJ2Qtbm9uZScsIHZhbDIpO1xuICAgICAgVXRpbHMudG9nKCdyZW0nLCAnc3RyaWtlJywgdmFsMyk7XG4gICAgICBVdGlscy5jaGFuZ2UodmFsMS5kYXRhc2V0LmlkLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBsb2FkIC0gdGhlIGxvYWQgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtBcnJheX0gdGFza3MgLSBUaGUgdGFza3MgYXJyYXlcbiAgICovXG4gIHN0YXRpYyBsb2FkKHRhc2tzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCcpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKChpdGVtKSA9PiBpdGVtLmluZGV4ID09PSBwYXJzZUludChlbGVtLmNoaWxkcmVuWzBdLmRhdGFzZXQuaWQsIDEwKSk7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBlbGVtLmNoaWxkcmVuO1xuICAgICAgICBVdGlscy5oZWxwKCdhZGQnLCBjaGlsZFswXSwgY2hpbGRbMV0sIGNoaWxkWzJdLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgY2hpbGRbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVdGlscy5oZWxwKCdyZW0nLCBjaGlsZFswXSwgY2hpbGRbMV0sIGNoaWxkWzJdLmZpcnN0RWxlbWVudENoaWxkKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGVkaXQgLSBFZGl0cyB0aGUgdG9kbyBhbmQgcHVzaCBjaGFuZ2VzIHRvIGxvY2FsU3RvcmFnZVxuICAgKi9cbiAgc3RhdGljIGVkaXQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QgZm9ybSBpbnB1dCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFV0aWxzLmNoYW5nZShlLnRhcmdldC5kYXRhc2V0LmlkLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QgdWwnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgSGVscGVyLmRpc3BsYXkoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0IGZvcm0nKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBkZWxldGUgLSBEZWxldGVzIGFuIGl0ZW0ocykgZnJvbSB0aGUgbGlzdFxuICAgKiBAcGFyYW0ge2FueX0gdmFsIC0gQSBib29sZWFuIG9yIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIGRlbGV0ZSh2YWwpIHtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgIGxldCByZW1UYXNrcztcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlbVRhc2tzID0gdGFza3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ICE9PSBwYXJzZUludCh2YWwsIDEwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbVRhc2tzID0gdGFza3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCA9PT0gdmFsKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rhc2tzJyk7XG4gICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgICByZW1UYXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgfSA9IGl0ZW07XG4gICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIFV0aWxzLnB1c2hDb250cm9sKHRvZG9zLCBkZXNjcmlwdGlvbiwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBVdGlscy5wdXNoQ29udHJvbCh0b2RvcywgZGVzY3JpcHRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gIH1cblxuICAvKipcbiAqIEBmdW5jdGlvbiBhbmltYXRlIC0gYW5pbWF0ZSBlYWNoIGxpc3QgaXRlbVxuICogQHBhcmFtIHtBcnJheX0gdGFza3MgLSBUaGUgYXJyYXkgb2YgdGFza3NcbiAqL1xuICBzdGF0aWMgYW5pbWF0ZSh0YXNrcykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmxpc3QnKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAocGFyc2VJbnQoaXRlbS5kYXRhc2V0LmlkLCAxMCkgPT09IHRhc2tzLmxlbmd0aCkgaXRlbS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXRvcCcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS10b3AnKTsgfSwgMTEwMCk7XG4gICAgfSk7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgSGVscGVyLmRpc3BsYXkoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBIZWxwZXIuZm9ybUhhbmRsZXIoZSkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBIZWxwZXIuZm9ybUhhbmRsZXIoZSkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXIgYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbHMuY2xlYXJBbGwoKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoIC5mYXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpOyB9LCAxMDAwKTtcbiAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=