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
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color: #88e0ef;\n  --accent-color: #333;\n  --neutral-color-1: #f5f4f4;\n  --neutral-color-2: #989998;\n  --neutral-color-3: #f7f7f6;\n  --neutral-color-4: #adacac;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color);\n  position: relative;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Card Styles */\n.main-container {\n  background-color: var(--white);\n  margin: 10% auto;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n}\n\n.title > p {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.form-container,\n.list {\n  display: flex;\n  padding: 5px 20px 5px 15px;\n  align-items: center;\n}\n\nform {\n  width: 100%;\n}\n\nform > input {\n  width: 95%;\n  border: none;\n  height: 40px;\n  font-size: 17px;\n  font-family: var(--font);\n}\n\nform > input:focus:not(.list form > input) {\n  outline: none;\n  background: var(--white);\n  border: none;\n}\n\nform > input::placeholder {\n  font-family: var(--font);\n  font-style: italic;\n  font-weight: 100;\n}\n\n.enter {\n  transform: rotate(90deg);\n}\n\n.bottom {\n  border-bottom: solid 2px var(--neutral-color-1);\n}\n\n.clear {\n  padding: 15px;\n  background: var(--neutral-color-3);\n  text-align: center;\n}\n\n.clear > a {\n  color: var(--neutral-color-4);\n}\n\n.clear > a:hover {\n  color: var(--accent-color);\n  text-decoration: underline;\n}\n\n.fas {\n  color: var(--neutral-color-2);\n  font-size: 14px;\n}\n\n.fas:hover {\n  color: var(--accent-color);\n}\n\n.list {\n  width: 100%;\n}\n\n.list > img {\n  width: 26px;\n}\n\n.list .fas {\n  font-size: 17px;\n}\n\n.list .fas.drag {\n  font-size: 17px;\n  cursor: move;\n}\n\n.list > form > input[type=\"text\"].input-value {\n  width: 100%;\n  margin: 0 10px;\n  border: none;\n  height: 40px;\n  font-size: 1rem;\n  font-family: var(--font);\n}\n\n.list > form > input[type=\"text\"]:focus {\n  outline: none;\n}\n\n.list > input[type=\"checkbox\"] {\n  height: 30px;\n  width: 20px;\n  cursor: pointer;\n  outline: none;\n}\n\n.d-none {\n  display: none;\n}\n\n.strike {\n  text-decoration: line-through;\n  color: green;\n}\n\n.focus {\n  background: #fcffa6;\n}\n\n.fa-trash-alt:hover {\n  color: red;\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.rotate {\n  -webkit-animation: rotate 1s;\n  -moz-animation: rotate 1s;\n  animation: rotate 1s;\n}\n\n@keyframes slide-top {\n  from {\n    top: -800px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.animate-top {\n  position: relative;\n  animation: slide-top ease-out 1.2s;\n  border: solid 2px green;\n}\n\n@media (max-width: 480px) {\n  .main-container {\n    width: 90%;\n  }\n}\n\n@media (max-width: 768px) and (min-width: 481px) {\n  .main-container {\n    width: 80%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,uBAAuB;;AAGvB,iBAAiB;AACjB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,wBAAwB;EACxB,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,aAAa;EACb,6BAA6B;AAC/B;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE;IACE,WAAW;IACX,UAAU;EACZ;;EAEA;IACE,MAAM;IACN,UAAU;EACZ;AACF;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF","sourcesContent":["/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color: #88e0ef;\n  --accent-color: #333;\n  --neutral-color-1: #f5f4f4;\n  --neutral-color-2: #989998;\n  --neutral-color-3: #f7f7f6;\n  --neutral-color-4: #adacac;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color);\n  position: relative;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Card Styles */\n.main-container {\n  background-color: var(--white);\n  margin: 10% auto;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n}\n\n.title > p {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.form-container,\n.list {\n  display: flex;\n  padding: 5px 20px 5px 15px;\n  align-items: center;\n}\n\nform {\n  width: 100%;\n}\n\nform > input {\n  width: 95%;\n  border: none;\n  height: 40px;\n  font-size: 17px;\n  font-family: var(--font);\n}\n\nform > input:focus:not(.list form > input) {\n  outline: none;\n  background: var(--white);\n  border: none;\n}\n\nform > input::placeholder {\n  font-family: var(--font);\n  font-style: italic;\n  font-weight: 100;\n}\n\n.enter {\n  transform: rotate(90deg);\n}\n\n.bottom {\n  border-bottom: solid 2px var(--neutral-color-1);\n}\n\n.clear {\n  padding: 15px;\n  background: var(--neutral-color-3);\n  text-align: center;\n}\n\n.clear > a {\n  color: var(--neutral-color-4);\n}\n\n.clear > a:hover {\n  color: var(--accent-color);\n  text-decoration: underline;\n}\n\n.fas {\n  color: var(--neutral-color-2);\n  font-size: 14px;\n}\n\n.fas:hover {\n  color: var(--accent-color);\n}\n\n.list {\n  width: 100%;\n}\n\n.list > img {\n  width: 26px;\n}\n\n.list .fas {\n  font-size: 17px;\n}\n\n.list .fas.drag {\n  font-size: 17px;\n  cursor: move;\n}\n\n.list > form > input[type=\"text\"].input-value {\n  width: 100%;\n  margin: 0 10px;\n  border: none;\n  height: 40px;\n  font-size: 1rem;\n  font-family: var(--font);\n}\n\n.list > form > input[type=\"text\"]:focus {\n  outline: none;\n}\n\n.list > input[type=\"checkbox\"] {\n  height: 30px;\n  width: 20px;\n  cursor: pointer;\n  outline: none;\n}\n\n.d-none {\n  display: none;\n}\n\n.strike {\n  text-decoration: line-through;\n  color: green;\n}\n\n.focus {\n  background: #fcffa6;\n}\n\n.fa-trash-alt:hover {\n  color: red;\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.rotate {\n  -webkit-animation: rotate 1s;\n  -moz-animation: rotate 1s;\n  animation: rotate 1s;\n}\n\n@keyframes slide-top {\n  from {\n    top: -800px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.animate-top {\n  position: relative;\n  animation: slide-top ease-out 1.2s;\n  border: solid 2px green;\n}\n\n@media (max-width: 480px) {\n  .main-container {\n    width: 90%;\n  }\n}\n\n@media (max-width: 768px) and (min-width: 481px) {\n  .main-container {\n    width: 80%;\n  }\n}\n"],"sourceRoot":""}]);
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
      input.addEventListener('change', (e) => {
        e.preventDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNhO0FBQ0g7O0FBRS9CO0FBQ0EsRUFBRSwyREFBYztBQUNoQixtRUFBbUUsK0RBQWtCO0FBQ3JGLG9FQUFvRSwrREFBa0I7QUFDdEYscUVBQXFFLDBEQUFjO0FBQ25GO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQXNDO0FBQzdELEdBQUc7QUFDSCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDgwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHb29nbGUgZm9udCBpbXBvcnQgKi9cXG5cXG4vKiBSZXNldCBTdHlsZXMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICM4OGUwZWY7XFxuICAtLWFjY2VudC1jb2xvcjogIzMzMztcXG4gIC0tbmV1dHJhbC1jb2xvci0xOiAjZjVmNGY0O1xcbiAgLS1uZXV0cmFsLWNvbG9yLTI6ICM5ODk5OTg7XFxuICAtLW5ldXRyYWwtY29sb3ItMzogI2Y3ZjdmNjtcXG4gIC0tbmV1dHJhbC1jb2xvci00OiAjYWRhY2FjO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBHbG9iYWwgc3R5bGVzICovXFxuaHRtbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnVsID4gbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQ2FyZCBTdHlsZXMgKi9cXG4ubWFpbi1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgbWFyZ2luOiAxMCUgYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMCAzcHggOHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50aXRsZSA+IHAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLFxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1cHggMjBweCA1cHggMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvcm0gPiBpbnB1dCB7XFxuICB3aWR0aDogOTUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6Zm9jdXM6bm90KC5saXN0IGZvcm0gPiBpbnB1dCkge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4uZW50ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jbGVhciA+IGEge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItNCk7XFxufVxcblxcbi5jbGVhciA+IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmZhcyB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0yKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZhczpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0ID4gaW1nIHtcXG4gIHdpZHRoOiAyNnB4O1xcbn1cXG5cXG4ubGlzdCAuZmFzIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLmxpc3QgLmZhcy5kcmFnIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLmxpc3QgPiBmb3JtID4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLmlucHV0LXZhbHVlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxufVxcblxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGlzdCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5mb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmZmE2O1xcbn1cXG5cXG4uZmEtdHJhc2gtYWx0OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5yb3RhdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAxcztcXG4gIC1tb3otYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxuICBhbmltYXRpb246IHJvdGF0ZSAxcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS10b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTgwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLXRvcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbmltYXRpb246IHNsaWRlLXRvcCBlYXNlLW91dCAxLjJzO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggZ3JlZW47XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdUJBQXVCOztBQUd2QixpQkFBaUI7QUFDakI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0UsTUFBTTtJQUNOLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHb29nbGUgZm9udCBpbXBvcnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDgwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBSZXNldCBTdHlsZXMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICM4OGUwZWY7XFxuICAtLWFjY2VudC1jb2xvcjogIzMzMztcXG4gIC0tbmV1dHJhbC1jb2xvci0xOiAjZjVmNGY0O1xcbiAgLS1uZXV0cmFsLWNvbG9yLTI6ICM5ODk5OTg7XFxuICAtLW5ldXRyYWwtY29sb3ItMzogI2Y3ZjdmNjtcXG4gIC0tbmV1dHJhbC1jb2xvci00OiAjYWRhY2FjO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBHbG9iYWwgc3R5bGVzICovXFxuaHRtbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnVsID4gbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQ2FyZCBTdHlsZXMgKi9cXG4ubWFpbi1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgbWFyZ2luOiAxMCUgYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMCAzcHggOHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50aXRsZSA+IHAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLFxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1cHggMjBweCA1cHggMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvcm0gPiBpbnB1dCB7XFxuICB3aWR0aDogOTUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6Zm9jdXM6bm90KC5saXN0IGZvcm0gPiBpbnB1dCkge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4uZW50ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jbGVhciA+IGEge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItNCk7XFxufVxcblxcbi5jbGVhciA+IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmZhcyB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0yKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZhczpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0ID4gaW1nIHtcXG4gIHdpZHRoOiAyNnB4O1xcbn1cXG5cXG4ubGlzdCAuZmFzIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLmxpc3QgLmZhcy5kcmFnIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLmxpc3QgPiBmb3JtID4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLmlucHV0LXZhbHVlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxufVxcblxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGlzdCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5mb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmZmE2O1xcbn1cXG5cXG4uZmEtdHJhc2gtYWx0OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5yb3RhdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAxcztcXG4gIC1tb3otYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxuICBhbmltYXRpb246IHJvdGF0ZSAxcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS10b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTgwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLXRvcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbmltYXRpb246IHNsaWRlLXRvcCBlYXNlLW91dCAxLjJzO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggZ3JlZW47XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IGNoZWNrIGZyb20gJy4vaW1hZ2VzL2ljb25zL2NoZWNrLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBsaXN0KHZhbCwgaWQpIHtcbiAgICByZXR1cm4gYFxuICAgIDxsaSBjbGFzcz1cImxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1pZD0ke2lkfT5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja1wiIGRhdGEtaWQ9JHtpZH0+PGltZyBzcmM9JHtjaGVja30gYWx0PVwiY2hlY2tlZCBpY29uXCIgY2xhc3M9XCJkLW5vbmVcIiBkYXRhLWlkPSR7aWR9PlxuICAgIDxmb3JtPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQtdmFsdWVcIiB2YWx1ZT0nJHt2YWx9JyBkYXRhLWlkPSR7aWR9PlxuICAgIDwvZm9ybT5cbiAgICA8YT48aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy12IGRyYWdcIj48L2k+PC9hPlxuICAgIDxhIGNsYXNzPVwiZC1ub25lXCIgIGlkPVwiZGVsZXRlXCI+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0XCIgZGF0YS1pZD0ke2lkfT48L2k+PC9hPlxuICA8L2xpPlxuICBgO1xuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZm9ybUhhbmRsZXIgLSBpbnN0YW5jZSBtZXRob2QgZm9yIGhhbmRsaW5nIG9mIGZvcm0gc3VibWlzc2lvblxuICAgKi9cbiAgc3RhdGljIGZvcm1IYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgVXRpbHMuYWRkKCk7XG4gICAgVXRpbHMuY2xlYXIoKTtcbiAgICBIZWxwZXIuY2hlY2tIYW5kbGVyKCk7XG4gICAgSGVscGVyLmhhbmRsZUZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGRpc3BsYXkgLSB0aGlzIGhlbHBzIHRvIGRpc3BsYXkgdGhlIGxpc3Qgb24gbG9hZFxuICAgKi9cbiAgc3RhdGljIGRpc3BsYXkoKSB7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgICB0YXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBpbmRleCB9ID0gaXRlbTtcbiAgICAgIFV0aWxzLnJlbmRlcihkZXNjcmlwdGlvbiwgaW5kZXgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKS5mb2N1cygpO1xuICAgICAgSGVscGVyLmNoZWNrSGFuZGxlcigpO1xuICAgICAgSGVscGVyLmhhbmRsZUZvY3VzKCk7XG4gICAgfSk7XG4gICAgVXRpbHMubG9hZCh0YXNrcyk7XG4gICAgVXRpbHMuZWRpdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBmb2N1c0hhbmRsZXIgLSBoYW5kbGVzIHRoZSBmb2N1cyBvbiB0aGUgaW5wdXRzXG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gVGhlIGN1cnJlbnQgZXZlbnRcbiAgICovXG4gIHN0YXRpYyBmb2N1c0hhbmRsZXIoZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgY2hpbGQgPSBpdGVtLmNoaWxkcmVuO1xuICAgIGNvbnN0IGlucHV0ID0gY2hpbGRbMl0uZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLmxpc3QuZm9jdXMnKSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkubGlzdC5mb2N1cycpO1xuICAgICAgcGFyZW50LmNoaWxkcmVuWzJdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XG4gICAgICBwYXJlbnQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBwYXJlbnQuY2hpbGRyZW5bNF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICB9XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBVdGlscy50b2coJ2FkZCcsICdmb2N1cycsIGlucHV0KTtcbiAgICBVdGlscy50b2coJ2FkZCcsICdkLW5vbmUnLCBjaGlsZFszXSk7XG4gICAgVXRpbHMudG9nKCdyZW0nLCAnZC1ub25lJywgY2hpbGRbNF0pO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUgLmZhcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFV0aWxzLnJlbW92ZShlLCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQGZ1bmN0aW9uIGNoYW5nZUhhbmRsZXIgLSBoYW5kbGVzIHRoZSBjaGFuZ2Ugb24gdGhlIGNoZWNrYm94XG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gVGhlIGN1cnJlbnQgZXZlbnRcbiAgICovXG4gIHN0YXRpYyBjaGFuZ2VIYW5kbGVyKGUpIHtcbiAgICBjb25zdCBpdGVtID0gZS50YXJnZXQ7XG4gICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGNoaWxkID0gcGFyZW50LmNoaWxkcmVuO1xuICAgIFV0aWxzLmhlbHAoJ2FkZCcsIGl0ZW0sIGNoaWxkWzFdLCBjaGlsZFsyXS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCB1bCcpLmlubmVySFRNTCA9ICcnO1xuICAgIEhlbHBlci5kaXNwbGF5KCk7XG4gICAgY2hpbGRbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBVdGlscy5oZWxwKCdyZW0nLCBpdGVtLCBjaGlsZFsxXSwgY2hpbGRbMl0uZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGhhbmRsZUZvY3VzIC0gVGhpcyBoYW5kbGVzIHRoZSBmb2N1cyBvbiBpbnB1dHNcbiAgICovXG4gIHN0YXRpYyBoYW5kbGVGb2N1cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5saXN0JykuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEhlbHBlci5mb2N1c0hhbmRsZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gY2hlY2tIYW5kbGVyIC0gaGFuZGxlcyB0aGUgY2hlY2tib3ggY2hhbmdlIGV2ZW50XG4gICAqL1xuICBzdGF0aWMgY2hlY2tIYW5kbGVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgSGVscGVyLmNoYW5nZUhhbmRsZXIpKTtcbiAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbiAgLyoqXG4gICAqIEBmdW5jdGlvbiByZW5kZXIgLSBpbnN0YW5jZSBjbGFzcyBtZXRob2RcbiAgICogQHJldHVybnMgLSBhIGxpc3QgZWxlbWVudCBmb3JtZWQgZnJvbSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgcmVuZGVyKHZhbCwgaWQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0IHVsJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBDb21wb25lbnQubGlzdCh2YWwsIGlkKSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGFkZCAtIGluc3RhbmNlIG1ldGhvZCB0aGF0IGFkZHMgbmV3IHRvZG8gdG8gbGlzdFxuICAgKi9cbiAgc3RhdGljIGFkZCgpIHtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpLnZhbHVlO1xuICAgIFV0aWxzLnB1c2hDb250cm9sKHRhc2tzLCB0b2RvKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgIFV0aWxzLnJlbmRlcih0b2RvLCB0YXNrcy5sZW5ndGgpO1xuICAgIFV0aWxzLmFuaW1hdGUodGFza3MpO1xuICAgIFV0aWxzLmVkaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcmVtb3ZlIC0gVGhlIHJlbW92ZSBmdW5jdGlvbiB0byByZW1vdmUgYSBsaXN0IGl0ZW1cbiAgICogQHBhcmFtIHtFdmVudCBPYmplY3R9IGUgLSBUaGUgZXZlbnQgb2JqZWN0XG4gICAqIEBwYXJhbSB7Kn0gaWQgLSBUaGUgaWQgb2YgdGhlIGl0ZW1cbiAgICovXG4gIHN0YXRpYyByZW1vdmUoZSwgaWQpIHtcbiAgICBVdGlscy5kZWxldGUoaWQpO1xuICAgIGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCd1bCA+IGxpJykucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCB1bCcpLmlubmVySFRNTCA9ICcnO1xuICAgIEhlbHBlci5kaXNwbGF5KCk7XG4gIH1cblxuICAvKipcbiAqIEBmdW5jdGlvbiBjbGVhckFsbCAtIFRoaXMgaGFuZGxlcyByZW1vdmluZyBhbGwgY29tcGxldGVkIGl0ZW1zIGZyb20gdGhlIGxpc3RcbiAqL1xuICBzdGF0aWMgY2xlYXJBbGwoKSB7XG4gICAgVXRpbHMuZGVsZXRlKGZhbHNlKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5saXN0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpIHtcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0IHVsJykuaW5uZXJIVE1MID0gJyc7XG4gICAgSGVscGVyLmRpc3BsYXkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gYWRkIC0gaW5zdGFuY2UgbWV0aG9kIHRoYXQgY2xlYXJzIGlucHV0IG9uIGFkZFxuICAgKi9cbiAgc3RhdGljIGNsZWFyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJykudmFsdWUgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcHVzaENvbnRyb2wgLSBoZWxwZXIgbWV0aG9kIHRoYXQgcHVzaGVzIGl0ZW1zIGludG8gdGhlIHRhc2tzIGFycmF5XG4gICAqIEBwYXJhbSB7QXJyYXl9IHRhc2tzIC0gVGhlIGFycmF5IGNvbGxlY3Rpb24gb2Ygb2JqZWN0c1xuICAgKiBAcGFyYW0ge1N0cmluZ30gdG9kbyAtIFRoZSB0b2RvIGRlc2NyaXB0aW9uIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIHB1c2hDb250cm9sKHRhc2tzLCB0b2RvLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRhc2tzLnB1c2goe1xuICAgICAgZGVzY3JpcHRpb246IGAke3RvZG99YCxcbiAgICAgIGNvbXBsZXRlZCxcbiAgICAgIGluZGV4OiB0YXNrcy5sZW5ndGggKyAxLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjaGFuZ2UgLSBIYW5kbGVzIGNoYW5nZSBpbiBjb21wbGV0ZWQgd2hlbiBjaGVja2JveCBpcyB0b2dnbGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIFRoZSBkYXRhIGlkIG9mIHRoZSB0YXNrXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsIC0gVGhlIHZhbHVlIG9mIGNvbXBsZXRlZFxuICAgKi9cbiAgc3RhdGljIGNoYW5nZShpZCwgdmFsKSB7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHRhc2tzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCAhPT0gcGFyc2VJbnQoaWQsIDEwKSk7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaW5kZXggPT09IHBhcnNlSW50KGlkLCAxMCkpO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRhc2suY29tcGxldGVkID0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gdmFsO1xuICAgIH1cbiAgICBmaWx0ZXJlZC5zcGxpY2UodGFzay5pbmRleCAtIDEsIDAsIHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkKSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHRvZyAtIGluc3RhbmNlIG1ldGhvZCB0aGF0IHRvZ2dsZXMgQ1NTIGNsYXNzXG4gICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyAtIExpc3Qgb2YgYXJndW1lbnRzXG4gICAqIEByZXR1cm5zIHRoZSB0b2dnbGluZ1xuICAgKi9cbiAgc3RhdGljIHRvZyguLi5hcmdzKSB7XG4gICAgaWYgKGFyZ3NbMF0gPT09ICdhZGQnKSByZXR1cm4gYXJnc1syXS5jbGFzc0xpc3QuYWRkKGFyZ3NbMV0pO1xuICAgIHJldHVybiBhcmdzWzJdLmNsYXNzTGlzdC5yZW1vdmUoYXJnc1sxXSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGhlbHAgLSBBZGQgYW5kIHJlbW92ZSBjbGFzc2VzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gY2hlY2tzIGlmIGFkZCBvciByZW1vdmVcbiAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IHZhbDEgLSB0aGUgaHRtbCBlbGVtZW50IHRvIGFkZCB0byBvciByZW1vdmUgZnJvbVxuICAgKiBAcGFyYW0ge0hUTUwgRWxlbWVudH0gdmFsMiAtIHRoZSBodG1sIGVsZW1lbnQgdG8gYWRkIHRvIG9yIHJlbW92ZSBmcm9tXG4gICAqIEBwYXJhbSB7SFRNTCBFbGVtZW50fSB2YWwzIC0gdGhlIGh0bWwgZWxlbWVudCB0byBhZGQgdG8gb3IgcmVtb3ZlIGZyb21cbiAgICovXG4gIHN0YXRpYyBoZWxwKHR5cGUsIHZhbDEsIHZhbDIsIHZhbDMpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2FkZCcpIHtcbiAgICAgIFV0aWxzLnRvZygnYWRkJywgJ2Qtbm9uZScsIHZhbDEpO1xuICAgICAgVXRpbHMudG9nKCdyZW0nLCAnZC1ub25lJywgdmFsMik7XG4gICAgICBVdGlscy50b2coJ2FkZCcsICdzdHJpa2UnLCB2YWwzKTtcbiAgICAgIFV0aWxzLmNoYW5nZSh2YWwxLmRhdGFzZXQuaWQsIHRydWUpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlbScpIHtcbiAgICAgIFV0aWxzLnRvZygncmVtJywgJ2Qtbm9uZScsIHZhbDEpO1xuICAgICAgVXRpbHMudG9nKCdhZGQnLCAnZC1ub25lJywgdmFsMik7XG4gICAgICBVdGlscy50b2coJ3JlbScsICdzdHJpa2UnLCB2YWwzKTtcbiAgICAgIFV0aWxzLmNoYW5nZSh2YWwxLmRhdGFzZXQuaWQsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGxvYWQgLSB0aGUgbG9hZCBmdW5jdGlvblxuICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrcyAtIFRoZSB0YXNrcyBhcnJheVxuICAgKi9cbiAgc3RhdGljIGxvYWQodGFza3MpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5saXN0JykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaW5kZXggPT09IHBhcnNlSW50KGVsZW0uY2hpbGRyZW5bMF0uZGF0YXNldC5pZCwgMTApKTtcbiAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGVsZW0uY2hpbGRyZW47XG4gICAgICAgIFV0aWxzLmhlbHAoJ2FkZCcsIGNoaWxkWzBdLCBjaGlsZFsxXSwgY2hpbGRbMl0uZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBjaGlsZFsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFV0aWxzLmhlbHAoJ3JlbScsIGNoaWxkWzBdLCBjaGlsZFsxXSwgY2hpbGRbMl0uZmlyc3RFbGVtZW50Q2hpbGQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZWRpdCAtIEVkaXRzIHRoZSB0b2RvIGFuZCBwdXNoIGNoYW5nZXMgdG8gbG9jYWxTdG9yYWdlXG4gICAqL1xuICBzdGF0aWMgZWRpdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCBmb3JtIGlucHV0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgVXRpbHMuY2hhbmdlKGUudGFyZ2V0LmRhdGFzZXQuaWQsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCB1bCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBIZWxwZXIuZGlzcGxheSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QgZm9ybScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGRlbGV0ZSAtIERlbGV0ZXMgYW4gaXRlbShzKSBmcm9tIHRoZSBsaXN0XG4gICAqIEBwYXJhbSB7YW55fSB2YWwgLSBBIGJvb2xlYW4gb3Igc3RyaW5nXG4gICAqL1xuICBzdGF0aWMgZGVsZXRlKHZhbCkge1xuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgbGV0IHJlbVRhc2tzO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgcmVtVGFza3MgPSB0YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5kZXggIT09IHBhcnNlSW50KHZhbCwgMTApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtVGFza3MgPSB0YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSB2YWwpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGFza3MnKTtcbiAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuICAgIHJlbVRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCB9ID0gaXRlbTtcbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgVXRpbHMucHVzaENvbnRyb2wodG9kb3MsIGRlc2NyaXB0aW9uLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFV0aWxzLnB1c2hDb250cm9sKHRvZG9zLCBkZXNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfVxuXG4gIC8qKlxuICogQGZ1bmN0aW9uIGFuaW1hdGUgLSBhbmltYXRlIGVhY2ggbGlzdCBpdGVtXG4gKiBAcGFyYW0ge0FycmF5fSB0YXNrcyAtIFRoZSBhcnJheSBvZiB0YXNrc1xuICovXG4gIHN0YXRpYyBhbmltYXRlKHRhc2tzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCcpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChwYXJzZUludChpdGVtLmRhdGFzZXQuaWQsIDEwKSA9PT0gdGFza3MubGVuZ3RoKSBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtdG9wJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXRvcCcpOyB9LCAxMTAwKTtcbiAgICB9KTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBIZWxwZXIuZGlzcGxheSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IEhlbHBlci5mb3JtSGFuZGxlcihlKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IEhlbHBlci5mb3JtSGFuZGxlcihlKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhciBhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVdGlscy5jbGVhckFsbCgpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2ggLmZhcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7IH0sIDEwMDApO1xuICB9KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==