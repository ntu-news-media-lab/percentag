webpackHotUpdate("app",{

/***/ "./src/tagCards.js":
/*!*************************!*\
  !*** ./src/tagCards.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaControlCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ "./node_modules/@material-ui/icons/SkipPrevious.js");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "./node_modules/@material-ui/icons/PlayArrow.js");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/SkipNext */ "./node_modules/@material-ui/icons/SkipNext.js");
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/xavier/Programming/React/watchr2/src/tagCards.js";











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    maxWidth: 50
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));
function MediaControlCard() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: classes.details,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
          component: "h5",
          variant: "h5",
          children: "Apple"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "subtitle1",
          color: "textSecondary",
          children: "Mac Miller"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: classes.controls,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          "aria-label": "previous",
          children: theme.direction === 'rtl' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 42
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 61
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          "aria-label": "play/pause",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default.a, {
            className: classes.playIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          "aria-label": "next",
          children: theme.direction === 'rtl' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 42
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 65
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

/***/ })

})
//# sourceMappingURL=app.08018ceafe647b94e663.hot-update.js.map