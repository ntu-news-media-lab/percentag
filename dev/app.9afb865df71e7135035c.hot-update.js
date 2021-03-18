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
/* harmony import */ var _tagCards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tagCards */ "./src/tagCards.js");
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/test-utils */ "./node_modules/react-dom/test-utils.js");
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_test_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
    this.callApi = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.makeTagsCard = this.makeTagsCard.bind(this);
  }

  handleTab(value) {
    this.setState({
      tab: value
    });
  }

  componentDidMount() {
    this.callApi.current.getTagApi();
  }

  makeTagsCard(element) {
    let card = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_tagCards__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tagName: element
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 16
    }, this);

    return card;
  }

  getTags(val) {
    // do not forget to bind getData in constructor
    // {
    //   val.map((e) => {
    //     let tempTags = [...this.state.tags];
    //     tempTags.push(e);
    //     this.setState(() => { return ({ tags: [...tempTags] }) })
    //   }
    //   )
    // }
    console.log(val);
    val.map(e => {
      this.makeTagsCard(e);
    });
  }

  render() {
    let tagsTab = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_tags__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }, this);

    let recommendTab = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_recommend__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 24
    }, this);

    let showtab;

    if (this.state.tab === "tags") {
      showtab = tagsTab;
    } else if (this.state.tab === "recommend") {
      showtab = recommendTab;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "App",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "/images/LogoFullB.png",
          className: "App-logo",
          alt: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
            value: this.state.tab,
            exclusive: true,
            "aria-label": "tabs",
            className: "tabsBar",
            size: "large",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: "tags",
              style: {
                width: "125px",
                height: "35px"
              },
              onClick: () => this.handleTab("tags"),
              children: "Tags"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: "recommend",
              style: {
                width: "125px",
                height: "35px"
              },
              onClick: () => this.handleTab("recommend"),
              children: "Recommend"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "showTab",
            children: showtab
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Backend_apiCall__WEBPACK_IMPORTED_MODULE_6__["default"], {
          getTags: this.getTags,
          ref: this.callApi
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), this.getTags]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this);
  }

}

/***/ })

})
//# sourceMappingURL=app.9afb865df71e7135035c.hot-update.js.map