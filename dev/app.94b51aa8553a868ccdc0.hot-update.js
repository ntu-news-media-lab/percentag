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
var _jsxFileName = "/Users/xavier/Programming/React/watchr2/src/recomPaper.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex'
  },
  container: {
    paddingTop: theme.spacing(2),
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
      lineNumber: 32,
      columnNumber: 21
    }, this);
  } else {
    showRecommend = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }, this);
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
            children: [showRecommend, props.recommendation.map(e => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_recommendCards__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  recoCardTitle: e.title,
                  recoCardImg: e.img,
                  recoCardDate: e.date,
                  recoCardMatch: e.match,
                  recoCardUrl: e.url
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 46
                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 174
                }, this)]
              }, e.title, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 26
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/recommendCards.js":
/*!*******************************!*\
  !*** ./src/recommendCards.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecommendCards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/xavier/Programming/React/watchr2/src/recommendCards.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    color: "black"
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  date: {
    fontSize: 10,
    overflow: 'auto'
  },
  cover: {
    width: 40,
    minWidth: "50px",
    height: "auto"
  },
  matchGreen: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: "green",
    fontSize: 11
  },
  matchOrange: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: "orange",
    fontSize: 11
  },
  matchRed: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: "red",
    fontSize: 11
  },
  title: {
    fontSize: 14,
    overflow: 'auto'
  }
}));
function RecommendCards(props) {
  const classes = useStyles();
  let matchColor;

  if (props.recoCardMatch < 50) {
    matchColor = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.matchRed,
      color: "inherit",
      children: props.recoCardMatch + "% match"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 22
    }, this);
  } else if (props.recoCardMatch > 75) {
    matchColor = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.matchGreen,
      color: "inherit",
      children: props.recoCardMatch + "% match"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 22
    }, this);
  } else {
    matchColor = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.matchOrange,
      color: "inherit",
      children: props.recoCardMatch + "% match"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 22
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.cover,
      image: props.recoCardImg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: classes.details,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
        className: classes.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.title,
          children: props.recoCardTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.date,
          color: "textSecondary",
          children: props.recoCardDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), matchColor]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, this);
}

/***/ })

})
//# sourceMappingURL=app.94b51aa8553a868ccdc0.hot-update.js.map