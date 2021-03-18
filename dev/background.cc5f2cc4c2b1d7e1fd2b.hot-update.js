webpackHotUpdate("background",{

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! exports provided: messageInBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageInBackground", function() { return messageInBackground; });
// If your extension doesn't need a background script, just leave this file empty
messageInBackground(); // This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig

function messageInBackground() {
  console.log('I can run your javascript like any other code in your project');
  console.log('just do not forget, I cannot render anything !');
}

const axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

const cheerio = __webpack_require__(/*! cheerio */ "./node_modules/cheerio/index.js");

const getPostTitles = async () => {
  try {
    const {
      data
    } = await axios.get('https://www.dealstreetasia.com/stories/airasia-tpg-execs-aimia-232207/');
    const $ = cheerio.load(data);
    const postTitles = [];
    $('div > p.title > a').each((_idx, el) => {
      const postTitle = $(el).text();
      postTitles.push(postTitle);
    });
    return postTitles;
  } catch (error) {
    throw error;
  }
};

getPostTitles().then(postTitles => console.log(postTitles));

/***/ })

})
//# sourceMappingURL=background.cc5f2cc4c2b1d7e1fd2b.hot-update.js.map