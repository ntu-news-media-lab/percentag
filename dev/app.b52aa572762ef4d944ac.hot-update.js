webpackHotUpdate("app",{

/***/ "./src/tags.js":
/*!*********************!*\
  !*** ./src/tags.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tagsPaper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagsPaper */ "./src/tagsPaper.js");
/* harmony import */ var _currentTagPaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentTagPaper */ "./src/currentTagPaper.js");
/* harmony import */ var _Backend_apiCall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Backend/apiCall */ "./src/Backend/apiCall.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/xavier/Programming/React/watchr2/src/tags.js";

/*global chrome*/





class Tags extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["apple"],
      savedTags: []
    };
    this.getTags = this.getTags.bind(this);
    this.getChromeStoragefunction = this.getChromeStoragefunction.bind(this);
  }

  componentDidMount() {
    this.getChromeStoragefunction();
  }

  getChromeStoragefunction() {
    chrome.storage.sync.get({
      tags: []
    }, function (result) {
      var tags = result.tag;

      if (typeof tags === "undefined") {
        this.setState({
          savedTags: [""]
        });
      } else {
        let tempArr = [...result.tags];
        tempArr.tags.map(e => {
          console.log(e);
        });
        this.setState({
          savedTags: tempArr
        });
      }
    });
    chrome.storage.onChanged.addListener(function (changes, namespace) {
      for (var key in changes) {
        var storageChange = changes[key]; // storageChange.newValue.map(e => { console.log("new values " + e) })
        // console.log('Storage key "%s" in namespace "%s" changed. ' +
        //             'Old value was "%s", new value is "%s".',
        //             key,
        //             namespace,
        //             storageChange.oldValue,
        //             storageChange.newValue);
      }

      let tempArr = [...storageChange.newValue];
      this.setState({
        savedTags: tempArr
      });
    });
    console.log("In tags.js, savedTags:" + this.state.savedTags);
  }

  getTags(e) {
    this.setState({
      tags: e
    });
    console.log(e);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: "Get recommendations for articles that matches your interests when you follow more tags:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("b", {
        children: "You are following"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_tagsPaper__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("b", {
        children: "From this article"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_currentTagPaper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        tagArray: this.state.tags
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Backend_apiCall__WEBPACK_IMPORTED_MODULE_3__["default"], {
        getTags: this.getTags,
        tags: this.state.tags
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this);
  }

}

/***/ })

})
//# sourceMappingURL=app.b52aa572762ef4d944ac.hot-update.js.map