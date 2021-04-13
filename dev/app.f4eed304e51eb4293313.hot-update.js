webpackHotUpdate("app",{

/***/ "./src/recommend.js":
/*!**************************!*\
  !*** ./src/recommend.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recommend; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recomPaper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recomPaper */ "./src/recomPaper.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/xavier/Programming/React/percentag/src/recommend.js";

/*global chrome*/



class Recommend extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.fakeUpdateRecommendation = async () => {
      if (Array.isArray(this.state.savedTags) && this.state.savedTags.length === 0) {
        return this.setState({
          recommended: [{
            title: ""
          }],
          savedTags: []
        });
      } else {
        return this.setState({
          recommended: [// {title: ""},
          {
            index: 0,
            title: "Former BoE governor Mark Carney joins board of digital payments firm Stripe",
            img: "https://cdn.dealstreetasia.com/uploads/2018/09/Stripe-e1613972852450.png?fit=1024,512?resize=940,528",
            date: Date().toLocaleString(),
            match: 93,
            url: "https://www.dealstreetasia.com/stories/boe-mark-carney-stripe-228604/"
          }, {
            index: 1,
            title: "Asia Digest: Mars Growth invests $4m in Hiver; Stripe backs Safepay",
            img: "https://cdn.dealstreetasia.com/uploads/2015/12/money-currency-investment-dollars.jpg?fit=980,544?resize=940,528",
            date: Date().toLocaleString(),
            match: 77,
            url: "https://www.dealstreetasia.com/stories/mars-growth-hiver-strip-safepay-227585/"
          }, {
            index: 2,
            title: "BEENEXT, Qualgro invest in Vietnamese edtech startup Edmicro’s pre-Series A+ round",
            img: "https://cdn.dealstreetasia.com/uploads/2020/08/online-education-e1609923082605.png?fit=950,477?resize=940,528",
            date: Date().toLocaleString(),
            match: 65,
            url: "https://www.dealstreetasia.com/stories/vietnam-edtech-edmicro-2m-232597/"
          }]
        });
      }
    };

    this.getRecommendation = async () => {
      console.log("savedTages in recommend to be send:" + this.state.savedTags);
      let recommendArr = this.state.recommended;
      recommendArr.map(async (recoObj, _idx) => {
        const response = await fetch('http://localhost:5000/api/getReco', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            tags: this.state.savedTags,
            title: recoObj.title
          })
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(body.express[0]);
        let tempState = {
          index: _idx,
          score: body.express[0]
        };
        this.setState({
          resultScore: [...this.state.resultScore, tempState]
        });
        console.log(this.state.resultScore);
        this.updateMatchingPercentage();
      });
    };

    this.state = {
      recommended: [// {title: ""},
      {
        index: 0,
        title: "Former BoE governor Mark Carney joins board of digital payments firm Stripe",
        img: "https://cdn.dealstreetasia.com/uploads/2018/09/Stripe-e1613972852450.png?fit=1024,512?resize=940,528",
        date: Date().toLocaleString(),
        match: 93,
        url: "https://www.dealstreetasia.com/stories/boe-mark-carney-stripe-228604/"
      }, {
        index: 1,
        title: "Asia Digest: Mars Growth invests $4m in Hiver; Stripe backs Safepay",
        img: "https://cdn.dealstreetasia.com/uploads/2015/12/money-currency-investment-dollars.jpg?fit=980,544?resize=940,528",
        date: Date().toLocaleString(),
        match: 77,
        url: "https://www.dealstreetasia.com/stories/mars-growth-hiver-strip-safepay-227585/"
      }, {
        index: 2,
        title: "BEENEXT, Qualgro invest in Vietnamese edtech startup Edmicro’s pre-Series A+ round",
        img: "https://cdn.dealstreetasia.com/uploads/2020/08/online-education-e1609923082605.png?fit=950,477?resize=940,528",
        date: Date().toLocaleString(),
        match: 65,
        url: "https://www.dealstreetasia.com/stories/vietnam-edtech-edmicro-2m-232597/"
      }],
      savedTags: [],
      resultScore: []
    };
    this.getRecommendation = this.getRecommendation.bind(this); // this.getTag = this.getTag(this);
  }

  componentDidMount() {
    let newThis = this;
    chrome.storage.local.get(['tags'], function (result) {
      newThis.setState({
        savedTags: result.tags
      });
      newThis.fakeUpdateRecommendation();
      newThis.getRecommendation();
    });
  }

  updateMatchingPercentage() {
    let newResult = this.state.resultScore;
    let tempState = this.state.recommended;
    newResult.map(obj => {
      let index = obj.index;
      tempState.map(recoObj => {
        if (recoObj.index === index && index == 0) {
          recoObj.match = (obj.score * 100 * 3.1).toFixed(2);
        } else if (recoObj.index === index) {
          recoObj.match = (obj.score * 100 * 2.1).toFixed(2);
        }

        if (recoObj.index === index && index == 2) {
          recoObj.match = (obj.score * 100 * 1.8).toFixed(2);
        }
      });
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Follow more tags to receive recommendations specific to your interest "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: "Recommended For You"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_recomPaper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        recommendation: this.state.recommended
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, this);
  }

}

/***/ })

})
//# sourceMappingURL=app.f4eed304e51eb4293313.hot-update.js.map