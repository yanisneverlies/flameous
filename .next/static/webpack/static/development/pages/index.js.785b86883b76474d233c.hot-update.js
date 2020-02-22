webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Question */ "./components/Question.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");


var _jsxFileName = "/Users/westfalsky/Projects/frontend/flameous/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Title = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Title,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Paragraph,
    Text = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text;
var data = [{
  id: 1,
  question: "Are you ok?",
  answers: [{
    id: 1,
    answer: "Yes",
    comment: "Fucking liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "I'm not alright",
    comment: "Well at least that's fair",
    isCorrect: true
  }]
}, {
  id: 2,
  question: "Where is leather club",
  answers: [{
    id: 1,
    answer: "Here",
    comment: "Liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "Two blocks down",
    comment: "YEAS",
    isCorrect: true
  }]
}, {
  id: 3,
  question: "Are you ok?",
  answers: [{
    id: 1,
    answer: "Yes",
    comment: "Fucking liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "I'm not alright",
    comment: "Well at least that's fair",
    isCorrect: true
  }]
}, {
  id: 4,
  question: "Where is leather club",
  answers: [{
    id: 1,
    answer: "Here",
    comment: "Liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "Two blocks down",
    comment: "YEAS",
    isCorrect: true
  }]
}, {
  id: 5,
  question: "Are you ok?",
  answers: [{
    id: 1,
    answer: "Yes",
    comment: "Fucking liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "I'm not alright",
    comment: "Well at least that's fair",
    isCorrect: true
  }]
}, {
  id: 6,
  question: "Where is leather club",
  answers: [{
    id: 1,
    answer: "Here",
    comment: "Liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "Two blocks down",
    comment: "YEAS",
    isCorrect: true
  }]
}, {
  id: 7,
  question: "Are you ok?",
  answers: [{
    id: 1,
    answer: "Yes",
    comment: "Fucking liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "I'm not alright",
    comment: "Well at least that's fair",
    isCorrect: true
  }]
}, {
  id: 8,
  question: "Where is leather club",
  answers: [{
    id: 1,
    answer: "Here",
    comment: "Liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "Two blocks down",
    comment: "YEAS",
    isCorrect: true
  }]
}, {
  id: 9,
  question: "Are you ok?",
  answers: [{
    id: 1,
    answer: "Yes",
    comment: "Fucking liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "I'm not alright",
    comment: "Well at least that's fair",
    isCorrect: true
  }]
}, {
  id: 10,
  question: "Where is leather club",
  answers: [{
    id: 1,
    answer: "Here",
    comment: "Liar",
    isCorrect: false
  }, {
    id: 2,
    answer: "Two blocks down",
    comment: "YEAS",
    isCorrect: true
  }]
}];

function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      counter = _React$useState2[0],
      increment = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      correctAnswers = _React$useState4[0],
      incrementCorrectAnswers = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      hasStarted = _React$useState6[0],
      handleStart = _React$useState6[1];

  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "\u041D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0424\u0430\u043D\u0437\u0438\u043B\u044C?"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Flameous loser DON'T LOOK AT MY SCREEN EVER AGAIN YOU FUCKING BASTARD I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU")), !hasStarted && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    onClick: function onClick() {
      return handleStart(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "\u041D\u0430\u0447\u0430\u0442\u044C")), hasStarted && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, data.map(function (item) {
    return __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.id
    }, item, {
      counter: counter,
      updateCounter: increment,
      correctAnswers: correctAnswers,
      updateCorrectCounter: incrementCorrectAnswers,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }));
  }))), counter !== 10 && __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    results: [counter, correctAnswers],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }));
}

var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1cvwks4-0"
})(["margin:0 auto;padding:64px 32px 0;max-width:1024px;width:100%;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "sc-1cvwks4-1"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.785b86883b76474d233c.hot-update.js.map