webpackHotUpdate("app",{

/***/ "./src/taggedCards.js":
/*!****************************!*\
  !*** ./src/taggedCards.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaggedCards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/xavier/Programming/React/percentag/src/taggedCards.js";

/*global chrome*/



 // import { CardContent } from '@material-ui/core';


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    maxWidth: 110,
    maxHeight: 50,
    padding: theme.spacing(1),
    background: "#0D3A71"
  },
  content: {
    flex: '1 0 auto'
  },
  title: {
    fontSize: 12,
    overflow: 'auto',
    color: "white",
    fontWeight: "600"
  }
}));

function removeTag(tagName) {
  let tagArray = [];
  chrome.storage.local.get({
    tags: []
  }, function (result) {
    var tags = result.tag;
    let tempArray = [...tags];
    tempArray = tempArray.filter(item => item.toString() !== tagName);
    chrome.storage.local.set({
      tags: tempArray
    }, function () {
      tempArray.map(e => console.log(e));
    });
  });
}

function TaggedCards(props) {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    onDoubleClick: () => {
      removeTag(props.tagName);
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.title,
      color: "textSecondary",
      children: props.tagName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, this);
}

/***/ })

})
//# sourceMappingURL=app.a98b36be69ef0d7a59a2.hot-update.js.map