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
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color: #88e0ef;\n  --accent-color: #333;\n  --neutral-color-1: #f5f4f4;\n  --neutral-color-2: #989998;\n  --neutral-color-3: #f7f7f6;\n  --neutral-color-4: #adacac;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color);\n  position: relative;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Card Styles */\n.main-container {\n  background-color: var(--white);\n  margin: 10% auto;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n}\n\n.title > p {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.form-container,\n.list {\n  display: flex;\n  padding: 5px 20px 5px 15px;\n  align-items: center;\n}\n\nform {\n  width: 100%;\n}\n\nform > input {\n  width: 95%;\n  border: none;\n  height: 40px;\n  font-size: 17px;\n  font-family: var(--font);\n}\n\nform > input:focus:not(.list form > input) {\n  outline: none;\n  background: var(--white);\n  border: none;\n}\n\nform > input::placeholder {\n  font-family: var(--font);\n  font-style: italic;\n  font-weight: 100;\n}\n\n.enter {\n  transform: rotate(90deg);\n}\n\n.bottom {\n  border-bottom: solid 2px var(--neutral-color-1);\n}\n\n.clear {\n  padding: 15px;\n  background: var(--neutral-color-3);\n  text-align: center;\n}\n\n.clear > a {\n  color: var(--neutral-color-4);\n}\n\n.clear > a:hover {\n  color: var(--accent-color);\n  text-decoration: underline;\n}\n\n.fas {\n  color: var(--neutral-color-2);\n  font-size: 14px;\n}\n\n.fas:hover {\n  color: var(--accent-color);\n}\n\n.list {\n  width: 100%;\n  border-bottom: solid 2px var(--neutral-color-1);\n  cursor: move;\n}\n\n.list > img {\n  width: 26px;\n}\n\n.list .fas {\n  font-size: 17px;\n}\n\n.list .fas.drag {\n  font-size: 17px;\n  cursor: move;\n}\n\n.list > form > input[type=\"text\"].input-value {\n  width: 90%;\n  margin: 0 10px;\n  border: none;\n  height: 40px;\n  font-size: 1rem;\n  font-family: var(--font);\n}\n\n.list > form > input[type=\"text\"]:focus {\n  outline: none;\n}\n\n.list > input[type=\"checkbox\"] {\n  height: 30px;\n  width: 20px;\n  cursor: pointer;\n  outline: none;\n}\n\n.d-none {\n  display: none;\n}\n\n.strike {\n  text-decoration: line-through;\n  color: green;\n}\n\n.focus {\n  background: #fcffa6;\n}\n\n.fa-trash-alt:hover {\n  color: red;\n}\n\n.error {\n  color: red;\n  font-size: 11px;\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.rotate {\n  -webkit-animation: rotate 1s;\n  -moz-animation: rotate 1s;\n  animation: rotate 1s;\n}\n\n@keyframes slide-top {\n  0% {\n    opacity: 0;\n  }\n\n  25% {\n    opacity: 0.25;\n  }\n\n  50% {\n    opacity: 0.5;\n  }\n\n  75% {\n    opacity: 0.75;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.animate-top {\n  position: relative;\n  animation: slide-top ease-out 1.5s;\n  border: solid 2px green;\n}\n\n@media (max-width: 480px) {\n  .main-container {\n    width: 90%;\n  }\n}\n\n@media (max-width: 768px) and (min-width: 481px) {\n  .main-container {\n    width: 80%;\n  }\n}\n\n.list.dragging {\n  border: solid 1px green;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,uBAAuB;;AAGvB,iBAAiB;AACjB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,wBAAwB;EACxB,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,aAAa;EACb,6BAA6B;AAC/B;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,+CAA+C;EAC/C,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color: #88e0ef;\n  --accent-color: #333;\n  --neutral-color-1: #f5f4f4;\n  --neutral-color-2: #989998;\n  --neutral-color-3: #f7f7f6;\n  --neutral-color-4: #adacac;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color);\n  position: relative;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Card Styles */\n.main-container {\n  background-color: var(--white);\n  margin: 10% auto;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n}\n\n.title > p {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.form-container,\n.list {\n  display: flex;\n  padding: 5px 20px 5px 15px;\n  align-items: center;\n}\n\nform {\n  width: 100%;\n}\n\nform > input {\n  width: 95%;\n  border: none;\n  height: 40px;\n  font-size: 17px;\n  font-family: var(--font);\n}\n\nform > input:focus:not(.list form > input) {\n  outline: none;\n  background: var(--white);\n  border: none;\n}\n\nform > input::placeholder {\n  font-family: var(--font);\n  font-style: italic;\n  font-weight: 100;\n}\n\n.enter {\n  transform: rotate(90deg);\n}\n\n.bottom {\n  border-bottom: solid 2px var(--neutral-color-1);\n}\n\n.clear {\n  padding: 15px;\n  background: var(--neutral-color-3);\n  text-align: center;\n}\n\n.clear > a {\n  color: var(--neutral-color-4);\n}\n\n.clear > a:hover {\n  color: var(--accent-color);\n  text-decoration: underline;\n}\n\n.fas {\n  color: var(--neutral-color-2);\n  font-size: 14px;\n}\n\n.fas:hover {\n  color: var(--accent-color);\n}\n\n.list {\n  width: 100%;\n  border-bottom: solid 2px var(--neutral-color-1);\n  cursor: move;\n}\n\n.list > img {\n  width: 26px;\n}\n\n.list .fas {\n  font-size: 17px;\n}\n\n.list .fas.drag {\n  font-size: 17px;\n  cursor: move;\n}\n\n.list > form > input[type=\"text\"].input-value {\n  width: 90%;\n  margin: 0 10px;\n  border: none;\n  height: 40px;\n  font-size: 1rem;\n  font-family: var(--font);\n}\n\n.list > form > input[type=\"text\"]:focus {\n  outline: none;\n}\n\n.list > input[type=\"checkbox\"] {\n  height: 30px;\n  width: 20px;\n  cursor: pointer;\n  outline: none;\n}\n\n.d-none {\n  display: none;\n}\n\n.strike {\n  text-decoration: line-through;\n  color: green;\n}\n\n.focus {\n  background: #fcffa6;\n}\n\n.fa-trash-alt:hover {\n  color: red;\n}\n\n.error {\n  color: red;\n  font-size: 11px;\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.rotate {\n  -webkit-animation: rotate 1s;\n  -moz-animation: rotate 1s;\n  animation: rotate 1s;\n}\n\n@keyframes slide-top {\n  0% {\n    opacity: 0;\n  }\n\n  25% {\n    opacity: 0.25;\n  }\n\n  50% {\n    opacity: 0.5;\n  }\n\n  75% {\n    opacity: 0.75;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.animate-top {\n  position: relative;\n  animation: slide-top ease-out 1.5s;\n  border: solid 2px green;\n}\n\n@media (max-width: 480px) {\n  .main-container {\n    width: 90%;\n  }\n}\n\n@media (max-width: 768px) and (min-width: 481px) {\n  .main-container {\n    width: 80%;\n  }\n}\n\n.list.dragging {\n  border: solid 1px green;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drag)
/* harmony export */ });
class Drag {
  /**
   * @static
   * @function dragStartEnd - handles the drag start and end
   * @memberof Drag
   */
  static dragStartEnd() {
    document.querySelectorAll('li.list').forEach((item) => {
      item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
      });
      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });
    });
  }

  /**
   * @static
   * @method getDragElem - helper method for the drag function
   * @param {HTML ELement} container
   * @param {Number} vertical - the y position of the client
   * @returns element
   * @memberof Drag
   */
  static getDragElem(container, vertical) {
    const dragElems = [...container.querySelectorAll('li.list:not(.dragging)')];
    return dragElems.reduce((closest, elemChild) => {
      const box = elemChild.getBoundingClientRect();
      const offset = vertical - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return {
          offset,
          element: elemChild,
        };
      }

      return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  /**
   * @static
   * @function dragFunc - handle the drag and drop operation
   * @memberof Drag
   */
  static dragFunc() {
    Drag.dragStartEnd();
    const container = document.querySelector('.todo-list ul');
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
      const afterElem = Drag.getDragElem(container, e.clientY);
      const draggable = document.querySelector('.dragging');
      if (afterElem === undefined || draggable === null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElem);
      }
    });
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
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");
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
    _drag_js__WEBPACK_IMPORTED_MODULE_1__["default"].dragFunc();
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
    _drag_js__WEBPACK_IMPORTED_MODULE_1__["default"].dragFunc();
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
    document.querySelector('.error').innerHTML = '';
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].help('add', item, child[1], child[2].firstElementChild);
    child[1].addEventListener('click', () => {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].help('rem', item, child[1], child[2].firstElementChild);
      item.checked = false;
    });
    _drag_js__WEBPACK_IMPORTED_MODULE_1__["default"].dragFunc();
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
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");
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
    _drag_js__WEBPACK_IMPORTED_MODULE_2__["default"].dragFunc();
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
      setTimeout(() => { item.classList.remove('animate-top'); }, 1400);
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
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");





window.addEventListener('DOMContentLoaded', () => {
  _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].display();
  _drag_js__WEBPACK_IMPORTED_MODULE_3__["default"].dragFunc();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIO0FBQ0Y7O0FBRTdCO0FBQ0EsRUFBRSwyREFBYztBQUNoQixFQUFFLHlEQUFhO0FBQ2YsbUVBQW1FLCtEQUFrQjtBQUNyRixvRUFBb0UsK0RBQWtCO0FBQ3RGLHFFQUFxRSwwREFBYztBQUNuRjtBQUNBO0FBQ0EsdUJBQXVCLHNDQUFzQztBQUM3RCxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kcmFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw4MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR29vZ2xlIGZvbnQgaW1wb3J0ICovXFxuXFxuLyogUmVzZXQgU3R5bGVzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjODhlMGVmO1xcbiAgLS1hY2NlbnQtY29sb3I6ICMzMzM7XFxuICAtLW5ldXRyYWwtY29sb3ItMTogI2Y1ZjRmNDtcXG4gIC0tbmV1dHJhbC1jb2xvci0yOiAjOTg5OTk4O1xcbiAgLS1uZXV0cmFsLWNvbG9yLTM6ICNmN2Y3ZjY7XFxuICAtLW5ldXRyYWwtY29sb3ItNDogI2FkYWNhYztcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG51bCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIENhcmQgU3R5bGVzICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIG1hcmdpbjogMTAlIGF1dG87XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDAgM3B4IDhweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4udGl0bGUgPiBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lcixcXG4ubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNXB4IDIwcHggNXB4IDE1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG59XFxuXFxuZm9ybSA+IGlucHV0OmZvY3VzOm5vdCgubGlzdCBmb3JtID4gaW5wdXQpIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmZvcm0gPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLmVudGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLmNsZWFyIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTMpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2xlYXIgPiBhIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTQpO1xcbn1cXG5cXG4uY2xlYXIgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5mYXMge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItMik7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5mYXM6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5saXN0ID4gaW1nIHtcXG4gIHdpZHRoOiAyNnB4O1xcbn1cXG5cXG4ubGlzdCAuZmFzIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLmxpc3QgLmZhcy5kcmFnIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLmxpc3QgPiBmb3JtID4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLmlucHV0LXZhbHVlIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG59XFxuXFxuLmxpc3QgPiBmb3JtID4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5saXN0ID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN0cmlrZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNmY2ZmYTY7XFxufVxcblxcbi5mYS10cmFzaC1hbHQ6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5yb3RhdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAxcztcXG4gIC1tb3otYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxuICBhbmltYXRpb246IHJvdGF0ZSAxcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS10b3Age1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGUtdG9wIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdG9wIGVhc2Utb3V0IDEuNXM7XFxuICBib3JkZXI6IHNvbGlkIDJweCBncmVlbjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAubWFpbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XFxuXFxuLmxpc3QuZHJhZ2dpbmcge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdUJBQXVCOztBQUd2QixpQkFBaUI7QUFDakI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLCtDQUErQztFQUMvQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsODAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzg4ZTBlZjtcXG4gIC0tYWNjZW50LWNvbG9yOiAjMzMzO1xcbiAgLS1uZXV0cmFsLWNvbG9yLTE6ICNmNWY0ZjQ7XFxuICAtLW5ldXRyYWwtY29sb3ItMjogIzk4OTk5ODtcXG4gIC0tbmV1dHJhbC1jb2xvci0zOiAjZjdmN2Y2O1xcbiAgLS1uZXV0cmFsLWNvbG9yLTQ6ICNhZGFjYWM7XFxuICAtLXdoaXRlOiAjZmZmO1xcbiAgLS1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxudWwgPiBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBDYXJkIFN0eWxlcyAqL1xcbi5tYWluLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwIDNweCA4cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRpdGxlID4gcCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIsXFxuLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9ybSA+IGlucHV0IHtcXG4gIHdpZHRoOiA5NSU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxufVxcblxcbmZvcm0gPiBpbnB1dDpmb2N1czpub3QoLmxpc3QgZm9ybSA+IGlucHV0KSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5lbnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxufVxcblxcbi5jbGVhciB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0zKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsZWFyID4gYSB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci00KTtcXG59XFxuXFxuLmNsZWFyID4gYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uZmFzIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTIpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZmFzOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ubGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4ubGlzdCA+IGltZyB7XFxuICB3aWR0aDogMjZweDtcXG59XFxuXFxuLmxpc3QgLmZhcyB7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5saXN0IC5mYXMuZHJhZyB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXS5pbnB1dC12YWx1ZSB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxufVxcblxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGlzdCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5mb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmZmE2O1xcbn1cXG5cXG4uZmEtdHJhc2gtYWx0OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5lcnJvciB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxuICAtbW96LWFuaW1hdGlvbjogcm90YXRlIDFzO1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLXRvcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbmltYXRpb246IHNsaWRlLXRvcCBlYXNlLW91dCAxLjVzO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggZ3JlZW47XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxufVxcblxcbi5saXN0LmRyYWdnaW5nIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBjaGVjayBmcm9tICcuL2ltYWdlcy9pY29ucy9jaGVjay5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbGlzdCh2YWwsIGlkKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8bGkgY2xhc3M9XCJsaXN0XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIGRhdGEtaWQ9JHtpZH0+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tcIiBkYXRhLWlkPSR7aWR9PjxpbWcgc3JjPSR7Y2hlY2t9IGFsdD1cImNoZWNrZWQgaWNvblwiIGNsYXNzPVwiZC1ub25lXCIgZGF0YS1pZD0ke2lkfT5cbiAgICA8Zm9ybT5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXZhbHVlXCIgdmFsdWU9JyR7dmFsfScgZGF0YS1pZD0ke2lkfT5cbiAgICA8L2Zvcm0+XG4gICAgPGE+PGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtdiBkcmFnXCI+PC9pPjwvYT5cbiAgICA8YSBjbGFzcz1cImQtbm9uZVwiICBpZD1cImRlbGV0ZVwiPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdFwiIGRhdGEtaWQ9JHtpZH0+PC9pPjwvYT5cbiAgPC9saT5cbiAgYDtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWcge1xuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAZnVuY3Rpb24gZHJhZ1N0YXJ0RW5kIC0gaGFuZGxlcyB0aGUgZHJhZyBzdGFydCBhbmQgZW5kXG4gICAqIEBtZW1iZXJvZiBEcmFnXG4gICAqL1xuICBzdGF0aWMgZHJhZ1N0YXJ0RW5kKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmxpc3QnKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgfSk7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1ldGhvZCBnZXREcmFnRWxlbSAtIGhlbHBlciBtZXRob2QgZm9yIHRoZSBkcmFnIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7SFRNTCBFTGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZlcnRpY2FsIC0gdGhlIHkgcG9zaXRpb24gb2YgdGhlIGNsaWVudFxuICAgKiBAcmV0dXJucyBlbGVtZW50XG4gICAqIEBtZW1iZXJvZiBEcmFnXG4gICAqL1xuICBzdGF0aWMgZ2V0RHJhZ0VsZW0oY29udGFpbmVyLCB2ZXJ0aWNhbCkge1xuICAgIGNvbnN0IGRyYWdFbGVtcyA9IFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdDpub3QoLmRyYWdnaW5nKScpXTtcbiAgICByZXR1cm4gZHJhZ0VsZW1zLnJlZHVjZSgoY2xvc2VzdCwgZWxlbUNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBib3ggPSBlbGVtQ2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXQgPSB2ZXJ0aWNhbCAtIGJveC50b3AgLSBib3guaGVpZ2h0IC8gMjtcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIGVsZW1lbnQ6IGVsZW1DaGlsZCxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQGZ1bmN0aW9uIGRyYWdGdW5jIC0gaGFuZGxlIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvblxuICAgKiBAbWVtYmVyb2YgRHJhZ1xuICAgKi9cbiAgc3RhdGljIGRyYWdGdW5jKCkge1xuICAgIERyYWcuZHJhZ1N0YXJ0RW5kKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCB1bCcpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBhZnRlckVsZW0gPSBEcmFnLmdldERyYWdFbGVtKGNvbnRhaW5lciwgZS5jbGllbnRZKTtcbiAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgaWYgKGFmdGVyRWxlbSA9PT0gdW5kZWZpbmVkIHx8IGRyYWdnYWJsZSA9PT0gbnVsbCkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLCBhZnRlckVsZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgRHJhZyBmcm9tICcuL2RyYWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xuICAvKipcbiAgICogQGZ1bmN0aW9uIGZvcm1IYW5kbGVyIC0gaW5zdGFuY2UgbWV0aG9kIGZvciBoYW5kbGluZyBvZiBmb3JtIHN1Ym1pc3Npb25cbiAgICovXG4gIHN0YXRpYyBmb3JtSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFV0aWxzLmFkZCgpO1xuICAgIFV0aWxzLmNsZWFyKCk7XG4gICAgSGVscGVyLmNoZWNrSGFuZGxlcigpO1xuICAgIEhlbHBlci5oYW5kbGVGb2N1cygpO1xuICAgIERyYWcuZHJhZ0Z1bmMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZGlzcGxheSAtIHRoaXMgaGVscHMgdG8gZGlzcGxheSB0aGUgbGlzdCBvbiBsb2FkXG4gICAqL1xuICBzdGF0aWMgZGlzcGxheSgpIHtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuICAgIHRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGluZGV4IH0gPSBpdGVtO1xuICAgICAgVXRpbHMucmVuZGVyKGRlc2NyaXB0aW9uLCBpbmRleCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpLmZvY3VzKCk7XG4gICAgICBIZWxwZXIuY2hlY2tIYW5kbGVyKCk7XG4gICAgICBIZWxwZXIuaGFuZGxlRm9jdXMoKTtcbiAgICB9KTtcbiAgICBVdGlscy5sb2FkKHRhc2tzKTtcbiAgICBVdGlscy5lZGl0KCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGZvY3VzSGFuZGxlciAtIGhhbmRsZXMgdGhlIGZvY3VzIG9uIHRoZSBpbnB1dHNcbiAgICogQHBhcmFtIHtFdmVudCBPYmplY3R9IGUgLSBUaGUgY3VycmVudCBldmVudFxuICAgKi9cbiAgc3RhdGljIGZvY3VzSGFuZGxlcihlKSB7XG4gICAgY29uc3QgaXRlbSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBjaGlsZCA9IGl0ZW0uY2hpbGRyZW47XG4gICAgY29uc3QgaW5wdXQgPSBjaGlsZFsyXS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkubGlzdC5mb2N1cycpKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaS5saXN0LmZvY3VzJyk7XG4gICAgICBwYXJlbnQuY2hpbGRyZW5bMl0uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgIHBhcmVudC5jaGlsZHJlblszXS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgIHBhcmVudC5jaGlsZHJlbls0XS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgIH1cbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIFV0aWxzLnRvZygnYWRkJywgJ2ZvY3VzJywgaW5wdXQpO1xuICAgIFV0aWxzLnRvZygnYWRkJywgJ2Qtbm9uZScsIGNoaWxkWzNdKTtcbiAgICBVdGlscy50b2coJ3JlbScsICdkLW5vbmUnLCBjaGlsZFs0XSk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignI2RlbGV0ZSAuZmFyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgVXRpbHMucmVtb3ZlKGUsIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICB9KTtcbiAgICBEcmFnLmRyYWdGdW5jKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQGZ1bmN0aW9uIGNoYW5nZUhhbmRsZXIgLSBoYW5kbGVzIHRoZSBjaGFuZ2Ugb24gdGhlIGNoZWNrYm94XG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gVGhlIGN1cnJlbnQgZXZlbnRcbiAgICovXG4gIHN0YXRpYyBjaGFuZ2VIYW5kbGVyKGUpIHtcbiAgICBjb25zdCBpdGVtID0gZS50YXJnZXQ7XG4gICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGNoaWxkID0gcGFyZW50LmNoaWxkcmVuO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpLmlubmVySFRNTCA9ICcnO1xuICAgIFV0aWxzLmhlbHAoJ2FkZCcsIGl0ZW0sIGNoaWxkWzFdLCBjaGlsZFsyXS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgY2hpbGRbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBVdGlscy5oZWxwKCdyZW0nLCBpdGVtLCBjaGlsZFsxXSwgY2hpbGRbMl0uZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgRHJhZy5kcmFnRnVuYygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBoYW5kbGVGb2N1cyAtIFRoaXMgaGFuZGxlcyB0aGUgZm9jdXMgb24gaW5wdXRzXG4gICAqL1xuICBzdGF0aWMgaGFuZGxlRm9jdXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCcpLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBIZWxwZXIuZm9jdXNIYW5kbGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNoZWNrSGFuZGxlciAtIGhhbmRsZXMgdGhlIGNoZWNrYm94IGNoYW5nZSBldmVudFxuICAgKi9cbiAgc3RhdGljIGNoZWNrSGFuZGxlcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIEhlbHBlci5jaGFuZ2VIYW5kbGVyKSk7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IERyYWcgZnJvbSAnLi9kcmFnLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAvKipcbiAgICogQGZ1bmN0aW9uIHJlbmRlciAtIGluc3RhbmNlIGNsYXNzIG1ldGhvZFxuICAgKiBAcmV0dXJucyAtIGEgbGlzdCBlbGVtZW50IGZvcm1lZCBmcm9tIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyByZW5kZXIodmFsLCBpZCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QgdWwnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIENvbXBvbmVudC5saXN0KHZhbCwgaWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gYWRkIC0gaW5zdGFuY2UgbWV0aG9kIHRoYXQgYWRkcyBuZXcgdG9kbyB0byBsaXN0XG4gICAqL1xuICBzdGF0aWMgYWRkKCkge1xuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJykudmFsdWU7XG4gICAgaWYgKHRvZG8gPT09ICcnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5pbm5lclRleHQgPSAnVG9kbyBjYW4gbm90IGJlIGVtcHR5JztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykuaW5uZXJIVE1MID0gJyc7XG4gICAgVXRpbHMucHVzaENvbnRyb2wodGFza3MsIHRvZG8pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgVXRpbHMucmVuZGVyKHRvZG8sIHRhc2tzLmxlbmd0aCk7XG4gICAgVXRpbHMuYW5pbWF0ZSh0YXNrcyk7XG4gICAgVXRpbHMuZWRpdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiByZW1vdmUgLSBUaGUgcmVtb3ZlIGZ1bmN0aW9uIHRvIHJlbW92ZSBhIGxpc3QgaXRlbVxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIFRoZSBldmVudCBvYmplY3RcbiAgICogQHBhcmFtIHsqfSBpZCAtIFRoZSBpZCBvZiB0aGUgaXRlbVxuICAgKi9cbiAgc3RhdGljIHJlbW92ZShlLCBpZCkge1xuICAgIFV0aWxzLmRlbGV0ZShpZCk7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJ3VsID4gbGknKS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0IHVsJykuaW5uZXJIVE1MID0gJyc7XG4gICAgSGVscGVyLmRpc3BsYXkoKTtcbiAgfVxuXG4gIC8qKlxuICogQGZ1bmN0aW9uIGNsZWFyQWxsIC0gVGhpcyBoYW5kbGVzIHJlbW92aW5nIGFsbCBjb21wbGV0ZWQgaXRlbXMgZnJvbSB0aGUgbGlzdFxuICovXG4gIHN0YXRpYyBjbGVhckFsbCgpIHtcbiAgICBVdGlscy5kZWxldGUoZmFsc2UpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmxpc3QgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSkge1xuICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QgdWwnKS5pbm5lckhUTUwgPSAnJztcbiAgICBIZWxwZXIuZGlzcGxheSgpO1xuICAgIERyYWcuZHJhZ0Z1bmMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gYWRkIC0gaW5zdGFuY2UgbWV0aG9kIHRoYXQgY2xlYXJzIGlucHV0IG9uIGFkZFxuICAgKi9cbiAgc3RhdGljIGNsZWFyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJykudmFsdWUgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcHVzaENvbnRyb2wgLSBoZWxwZXIgbWV0aG9kIHRoYXQgcHVzaGVzIGl0ZW1zIGludG8gdGhlIHRhc2tzIGFycmF5XG4gICAqIEBwYXJhbSB7QXJyYXl9IHRhc2tzIC0gVGhlIGFycmF5IGNvbGxlY3Rpb24gb2Ygb2JqZWN0c1xuICAgKiBAcGFyYW0ge1N0cmluZ30gdG9kbyAtIFRoZSB0b2RvIGRlc2NyaXB0aW9uIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIHB1c2hDb250cm9sKHRhc2tzLCB0b2RvLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRhc2tzLnB1c2goe1xuICAgICAgZGVzY3JpcHRpb246IGAke3RvZG99YCxcbiAgICAgIGNvbXBsZXRlZCxcbiAgICAgIGluZGV4OiB0YXNrcy5sZW5ndGggKyAxLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjaGFuZ2UgLSBIYW5kbGVzIGNoYW5nZSBpbiBjb21wbGV0ZWQgd2hlbiBjaGVja2JveCBpcyB0b2dnbGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIFRoZSBkYXRhIGlkIG9mIHRoZSB0YXNrXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsIC0gVGhlIHZhbHVlIG9mIGNvbXBsZXRlZFxuICAgKi9cbiAgc3RhdGljIGNoYW5nZShpZCwgdmFsKSB7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHRhc2tzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCAhPT0gcGFyc2VJbnQoaWQsIDEwKSk7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaW5kZXggPT09IHBhcnNlSW50KGlkLCAxMCkpO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRhc2suY29tcGxldGVkID0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gdmFsO1xuICAgIH1cbiAgICBmaWx0ZXJlZC5zcGxpY2UodGFzay5pbmRleCAtIDEsIDAsIHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkKSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHRvZyAtIGluc3RhbmNlIG1ldGhvZCB0aGF0IHRvZ2dsZXMgQ1NTIGNsYXNzXG4gICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyAtIExpc3Qgb2YgYXJndW1lbnRzXG4gICAqIEByZXR1cm5zIHRoZSB0b2dnbGluZ1xuICAgKi9cbiAgc3RhdGljIHRvZyguLi5hcmdzKSB7XG4gICAgaWYgKGFyZ3NbMF0gPT09ICdhZGQnKSByZXR1cm4gYXJnc1syXS5jbGFzc0xpc3QuYWRkKGFyZ3NbMV0pO1xuICAgIHJldHVybiBhcmdzWzJdLmNsYXNzTGlzdC5yZW1vdmUoYXJnc1sxXSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGhlbHAgLSBBZGQgYW5kIHJlbW92ZSBjbGFzc2VzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gY2hlY2tzIGlmIGFkZCBvciByZW1vdmVcbiAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IHZhbDEgLSB0aGUgaHRtbCBlbGVtZW50IHRvIGFkZCB0byBvciByZW1vdmUgZnJvbVxuICAgKiBAcGFyYW0ge0hUTUwgRWxlbWVudH0gdmFsMiAtIHRoZSBodG1sIGVsZW1lbnQgdG8gYWRkIHRvIG9yIHJlbW92ZSBmcm9tXG4gICAqIEBwYXJhbSB7SFRNTCBFbGVtZW50fSB2YWwzIC0gdGhlIGh0bWwgZWxlbWVudCB0byBhZGQgdG8gb3IgcmVtb3ZlIGZyb21cbiAgICovXG4gIHN0YXRpYyBoZWxwKHR5cGUsIHZhbDEsIHZhbDIsIHZhbDMpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2FkZCcpIHtcbiAgICAgIFV0aWxzLnRvZygnYWRkJywgJ2Qtbm9uZScsIHZhbDEpO1xuICAgICAgVXRpbHMudG9nKCdyZW0nLCAnZC1ub25lJywgdmFsMik7XG4gICAgICBVdGlscy50b2coJ2FkZCcsICdzdHJpa2UnLCB2YWwzKTtcbiAgICAgIFV0aWxzLmNoYW5nZSh2YWwxLmRhdGFzZXQuaWQsIHRydWUpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlbScpIHtcbiAgICAgIFV0aWxzLnRvZygncmVtJywgJ2Qtbm9uZScsIHZhbDEpO1xuICAgICAgVXRpbHMudG9nKCdhZGQnLCAnZC1ub25lJywgdmFsMik7XG4gICAgICBVdGlscy50b2coJ3JlbScsICdzdHJpa2UnLCB2YWwzKTtcbiAgICAgIFV0aWxzLmNoYW5nZSh2YWwxLmRhdGFzZXQuaWQsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGxvYWQgLSB0aGUgbG9hZCBmdW5jdGlvblxuICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrcyAtIFRoZSB0YXNrcyBhcnJheVxuICAgKi9cbiAgc3RhdGljIGxvYWQodGFza3MpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5saXN0JykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaW5kZXggPT09IHBhcnNlSW50KGVsZW0uY2hpbGRyZW5bMF0uZGF0YXNldC5pZCwgMTApKTtcbiAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGVsZW0uY2hpbGRyZW47XG4gICAgICAgIFV0aWxzLmhlbHAoJ2FkZCcsIGNoaWxkWzBdLCBjaGlsZFsxXSwgY2hpbGRbMl0uZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBjaGlsZFsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFV0aWxzLmhlbHAoJ3JlbScsIGNoaWxkWzBdLCBjaGlsZFsxXSwgY2hpbGRbMl0uZmlyc3RFbGVtZW50Q2hpbGQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZWRpdCAtIEVkaXRzIHRoZSB0b2RvIGFuZCBwdXNoIGNoYW5nZXMgdG8gbG9jYWxTdG9yYWdlXG4gICAqL1xuICBzdGF0aWMgZWRpdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCBmb3JtIGlucHV0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgVXRpbHMuY2hhbmdlKGUudGFyZ2V0LmRhdGFzZXQuaWQsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCB1bCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBIZWxwZXIuZGlzcGxheSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QgZm9ybScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGRlbGV0ZSAtIERlbGV0ZXMgYW4gaXRlbShzKSBmcm9tIHRoZSBsaXN0XG4gICAqIEBwYXJhbSB7YW55fSB2YWwgLSBBIGJvb2xlYW4gb3Igc3RyaW5nXG4gICAqL1xuICBzdGF0aWMgZGVsZXRlKHZhbCkge1xuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgbGV0IHJlbVRhc2tzO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgcmVtVGFza3MgPSB0YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5kZXggIT09IHBhcnNlSW50KHZhbCwgMTApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtVGFza3MgPSB0YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSB2YWwpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGFza3MnKTtcbiAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuICAgIHJlbVRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCB9ID0gaXRlbTtcbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgVXRpbHMucHVzaENvbnRyb2wodG9kb3MsIGRlc2NyaXB0aW9uLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFV0aWxzLnB1c2hDb250cm9sKHRvZG9zLCBkZXNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfVxuXG4gIC8qKlxuICogQGZ1bmN0aW9uIGFuaW1hdGUgLSBhbmltYXRlIGVhY2ggbGlzdCBpdGVtXG4gKiBAcGFyYW0ge0FycmF5fSB0YXNrcyAtIFRoZSBhcnJheSBvZiB0YXNrc1xuICovXG4gIHN0YXRpYyBhbmltYXRlKHRhc2tzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCcpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChwYXJzZUludChpdGVtLmRhdGFzZXQuaWQsIDEwKSA9PT0gdGFza3MubGVuZ3RoKSBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtdG9wJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXRvcCcpOyB9LCAxNDAwKTtcbiAgICB9KTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgRHJhZyBmcm9tICcuL2RyYWcuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgSGVscGVyLmRpc3BsYXkoKTtcbiAgRHJhZy5kcmFnRnVuYygpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IEhlbHBlci5mb3JtSGFuZGxlcihlKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IEhlbHBlci5mb3JtSGFuZGxlcihlKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhciBhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVdGlscy5jbGVhckFsbCgpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2ggLmZhcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7IH0sIDEwMDApO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9