webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/westfalsky/Projects/frontend/flameous/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Title = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Paragraph,
    Text = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text;
var results = [{
  id: 1,
  title: "Вы абсолютно не фанзиль! 🍾",
  text: ""
}, {
  id: 2,
  title: "",
  text: ""
}, {
  id: 3,
  title: "Вы абсолютно не фанзиль! 🍾",
  text: ""
}, {
  id: 4,
  title: "Вы абсолютно не фанзиль! 🍾",
  text: ""
}, {
  id: 5,
  title: "Being fanzil is my normal, my nature 👺",
  text: "You've lost your mind. Вас стоит изолировать от общества. Пожалуйста, обратитесь за психологической помощью как можно скорее."
}];

function Card() {
  var result = 10;
  var testResult;

  if (result <= 2) {
    testResult = 1;
  }

  if (result > 2 && result <= 4) {
    testResult = 2;
  }

  if (result > 4 && result <= 6) {
    testResult = 3;
  }

  if (result > 6 && result <= 8) {
    testResult = 4;
  }

  if (result > 8 && result <= 10) {
    testResult = 5;
  }

  var item = results.filter(function (i) {
    return i.id === testResult;
  })[0];
  console.log('---', item);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(Title, {
    level: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ", item.title), __jsx(Text, {
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, result, " / 10"), __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, item.text));
}

/* harmony default export */ __webpack_exports__["default"] = (Card);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Card__Wrapper",
  componentId: "xtwp70-0"
})(["margin-top:24px;"]);

/***/ })

})
//# sourceMappingURL=index.js.0626d0af28258b9b96bc.hot-update.js.map