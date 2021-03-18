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
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags */ "./src/tags.js");
/* harmony import */ var _recommend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recommend */ "./src/recommend.js");
/* harmony import */ var _Backend_apiCall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Backend/apiCall */ "./src/Backend/apiCall.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/xavier/Programming/React/watchr2/src/App.js";








class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "tags",
      tags: []
    };
    this.handleTab = this.handleTab.bind(this);
    this.getTags = this.getTags.bind(this);
  }

  handleTab(value) {
    this.setState({
      tab: value
    });
  }

  componentDidMount() {}

  getTags(val) {// do not forget to bind getData in constructor
  }

  render() {
    let tags = this.getTags;
    console.log(tags);

    let tagsTab = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_tags__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }, this);

    let recommendTab = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_recommend__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
          lineNumber: 48,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
            value: this.state.tab,
            exclusive: true,
            "aria-label": "tabs",
            className: "tabsBar",
            size: "large",
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
              lineNumber: 59,
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
              lineNumber: 62,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "showTab",
            children: showtab
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Backend_apiCall__WEBPACK_IMPORTED_MODULE_6__["default"], {
          getTags: this.getTags
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this);
  }

}

/***/ })

})
//# sourceMappingURL=app.ecc1997825f1b58574fb.hot-update.js.map