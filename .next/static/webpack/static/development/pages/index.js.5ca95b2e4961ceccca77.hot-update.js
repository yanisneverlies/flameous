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
      lineNumber: 42
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u0412\u044B \u0424\u0430\u043D\u0437\u0438\u043B\u044C?"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, state !== "finished" && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\xAB\u0412\u044B \u0424\u0430\u043D\u0437\u0438\u043B\u044C?\xBB \u2014 \u044D\u0442\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u0441\u0442 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u0433\u043E, \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0442\u0435\u0441\u0442 \u0444\u0430\u043D\u0437\u0438\u043B\u044C \u0438\u043B\u0438 \u0436\u0435 \u043D\u0435\u0442. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0435\u0441\u0442\u0430 \u043D\u0435\u0431\u0438\u043D\u0430\u0440\u043D\u044B\u0439 \u2014 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043A\u0435\u043C-\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u0445\u043E\u0436\u0438\u043C \u043D\u0430 \u0444\u0430\u043D\u0437\u0438\u043B\u044F, \u0438\u043B\u0438 \u0436\u0435, \u0435\u0441\u043B\u0438 \u0432\u044B ", __jsx(Text, {
    strong: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439"), " \u0447\u0435\u043B\u043E\u0432\u0435\u043A, \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0430 \u043D\u0435\u0433\u043E \u043D\u0435 \u043F\u043E\u0445\u043E\u0436\u0438\u043C."), __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 \u0442\u0435\u0441\u0442\u0430 \u2014 \u0434\u0435\u043B\u043E \u0432\u0430\u0448\u0435. \u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u044F, \u0433\u0435\u043D\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u044D\u0442\u043E\u0433\u043E \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0442\u0435\u0441\u0442\u0430, \u2014 \u0432\u0430\u0448 \u0441\u043E\u044E\u0437\u043D\u0438\u043A, \u0442\u043E \u043F\u043E \u0435\u0433\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C \u044F \u043E\u0441\u0442\u0430\u0432\u043B\u044E \u0441\u043E\u0432\u0435\u0442, \u043A\u0430\u043A \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u043F\u0440\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0438 \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435.")), state === null && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    onClick: function onClick() {
      return setState("started");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u041F\u043E\u0435\u0445\u0430\u043B\u0438")), state !== null && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
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
        lineNumber: 68
      },
      __self: this
    }));
  }))), state === "finished" && __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    results: [counter, correctAnswers],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
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
//# sourceMappingURL=index.js.5ca95b2e4961ceccca77.hot-update.js.map