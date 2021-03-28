webpackHotUpdate("app",{

/***/ "./src/recomPaper.js":
/*!***************************!*\
  !*** ./src/recomPaper.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecomPaper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _recommendCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recommendCards */ "./src/recommendCards.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/xavier/Programming/React/percentag/src/recomPaper.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex'
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  }
}));
function RecomPaper(props) {
  let showRecommend;
  const classes = useStyles();

  if (props.recommendation[0].title === "") {
    showRecommend = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
      children: "Start Following Tags To View Articles Curated For You."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }, this);
  } else {
    showRecommend = props.recommendation.map(e => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_recommendCards__WEBPACK_IMPORTED_MODULE_5__["default"], {
          recoCardTitle: e.title,
          recoCardImg: e.img,
          recoCardDate: e.date,
          recoCardMatch: e.match,
          recoCardUrl: e.url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 34
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 162
        }, this)]
      }, e.title, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 14
      }, this);
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        container: true,
        spacing: 1,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classes.paper,
            children: showRecommend
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

/***/ })

})
//# sourceMappingURL=app.cc8ca715dddd50b7e907.hot-update.js.map