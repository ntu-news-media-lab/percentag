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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/index.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags */ "./src/tags.js");
/* harmony import */ var _recommend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recommend */ "./src/recommend.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/xavier/Programming/React/watchr2/src/App.js";








class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "tags"
    };
    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(value) {
    this.setState({
      tab: value
    });
    console.log(this.state.tab);
  }

  render() {
    const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
      overrides: {
        // Style sheet name ⚛️
        MuiButtonGroup: {
          // Name of the rule
          text: {
            color: 'blue'
          }
        }
      }
    });

    let tagsTab = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_tags__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }, this);

    let recommendTab = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_recommend__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 24
    }, this);

    let showtab;

    if (this.state.tab === "tags") {
      showtab = tagsTab;
    } else if (this.state.tab === "recommend") {
      showtab = recommendTab;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "App",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
          src: "/images/LogoFullB.png",
          className: "App-logo",
          alt: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
            value: this.state.tab,
            exclusive: true,
            "aria-label": "tabs",
            className: "tabsBar",
            size: "large",
            theme: theme,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: "tags",
              style: {
                width: "125px",
                height: "35px"
              },
              onClick: () => this.handleTab("tags"),
              children: "Tags"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: "recommend",
              style: {
                width: "125px",
                height: "35px"
              },
              onClick: () => this.handleTab("recommend"),
              children: "Recommend"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "showTab",
            children: showtab
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this);
  }

}

/***/ })

})
//# sourceMappingURL=app.d59cd482aa3dfc05460b.hot-update.js.map