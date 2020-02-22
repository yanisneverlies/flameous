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
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Paragraph;
var data = [{
  id: "1",
  question: "Начну с простого: Вы фанзиль?",
  answers: [{
    id: 1,
    answer: "Да",
    comment: "Пизда. Фанзиль не открылся бы так легко.",
    isCorrect: false
  }, {
    id: 2,
    answer: "Нет",
    comment: "Seems fair, продолжаем.",
    isCorrect: true
  }]
}, {
  id: "2",
  question: "Вы поссорились со своей девушкой. Спустя какое-то время вы разговариваете на улице и она говорит, что ей холодно. Ваши действия?",
  answers: [{
    id: 1,
    answer: "Предложу свою куртку / обниму её.",
    comment: "Похоже на то, что у вас нет ни единого шанса сдать этот тест.",
    isCorrect: false
  }, {
    id: 2,
    answer: "Предложу ей пойти вон в то соседнее здание, там наверняка теплее.",
    comment: "Абсолютно верно. Законы романтики неведомы человеку рациональности.",
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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      state = _React$useState6[0],
      setState = _React$useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (counter === 2) {
      setState("finished");
    }
  }, [counter]);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u041D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0424\u0430\u043D\u0437\u0438\u043B\u044C?"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, state !== "finished" && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Flameous loser DON'T LOOK AT MY SCREEN EVER AGAIN YOU FUCKING BASTARD I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU")), state === null && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    onClick: function onClick() {
      return setState("started");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\u041D\u0430\u0447\u0430\u0442\u044C")), state === "started" && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
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
        lineNumber: 90
      },
      __self: this
    }));
  }))), state === "finished" && __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    results: [counter, correctAnswers],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
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
//# sourceMappingURL=index.js.c01885f871f6d07613ac.hot-update.js.map