webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/westfalsky/Projects/frontend/flameous/components/Question.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Question(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "privet");
}

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Question */ "./components/Question.js");

var _jsxFileName = "/Users/westfalsky/Projects/frontend/flameous/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Title = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Title,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Paragraph,
    Text = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Text;
var data = [{
  id: 1,
  question: "Are you ok?",
  wrongAnswer: "Yes",
  wrongAnswerComment: "Fucking liar",
  correctAnswer: "I'm not alright",
  correctAnswerComment: "Well at least that's fair"
}, {
  id: 2,
  question: "Where is leather club",
  wrongAnswer: "Here",
  wrongAnswerComment: "Liar",
  correctAnswer: "Two blocks down",
  correctAnswerComment: "YEAS"
}];

function Home() {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "flameous"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Flameous loser DON'T LOOK AT MY SCREEN EVER AGAIN YOU FUCKING BASTARD I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU I FOCKEN HATE YOU")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, data.map(function (item) {
    return __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.id
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }));
  }))));
}

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1cvwks4-0"
})(["margin:0 auto;padding:64px 32px 0;max-width:1024px;width:100%;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "sc-1cvwks4-1"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.fd27214f305cb6e4a095.hot-update.js.map