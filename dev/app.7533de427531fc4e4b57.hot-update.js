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

    this.saveArrayToState = array => {
      this.setState({
        savedTags: array
      });
    };

    this.state = {
      tags: [""],
      savedTags: [""]
    };
    this.getTags = this.getTags.bind(this);
    this.getChromeStoragefunction = this.getChromeStoragefunction.bind(this);
    this.saveArrayToState = this.saveArrayToState.bind(this);
  }

  componentDidMount() {
    let newThis = this;
    chrome.storage.local.get(['tags'], function (result) {
      // console.log("retrieved tags is" + result.tags);
      newThis.saveArrayToState(result.tags);
    });
    this.getChromeStoragefunction();
  }

  componentWillUnmount() {
    let newThis = this;
    chrome.storage.local.set({
      tags: newThis.state.savedTags
    }, function () {
      console.log("saved: " + newThis.state.savedTags);
    });
  }

  getChromeStoragefunction() {
    let newThis = this;
    chrome.storage.onChanged.addListener(function (changes, namespace) {
      let tempArray = [...newThis.state.savedTags];

      for (var key in changes) {
        var storageChange = changes[key];
        storageChange.newValue.map(e => {
          if (!tempArray.includes(e)) {
            tempArray.push(e);
          }
        });
        newThis.saveArrayToState(tempArray);
      }
    });
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
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("b", {
        children: "You are following"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_tagsPaper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        savedTagArray: this.state.savedTags
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("b", {
        children: "From this article"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_currentTagPaper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        tagArray: this.state.tags
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Backend_apiCall__WEBPACK_IMPORTED_MODULE_3__["default"], {
        getTags: this.getTags,
        tags: this.state.tags
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this);
  }

}

/***/ })

})
//# sourceMappingURL=app.7533de427531fc4e4b57.hot-update.js.map