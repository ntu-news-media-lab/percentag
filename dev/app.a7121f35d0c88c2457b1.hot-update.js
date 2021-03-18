webpackHotUpdate("app",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/index.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/xavier/Programming/React/watchr2/src/App.js";





class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "tags"
    };
  }

  handleToggleClick(event) {
    this.setState({
      tab: true
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "App",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        src: "/images/LogoFullB.png",
        className: "App-logo",
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
        exclusive: true,
        onChange: this.handleTab,
        "aria-label": "tabs",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: "tags",
          "aria-label": "left aligned",
          children: "Tags"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: "recommend",
          "aria-label": "right aligned",
          children: "Recommend"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }

}

/***/ })

})
//# sourceMappingURL=app.a7121f35d0c88c2457b1.hot-update.js.map