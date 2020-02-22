webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _jsxFileName = "/Users/westfalsky/Projects/frontend/flameous/components/Question.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 24px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Title = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Title,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Paragraph,
    Text = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text;

function Question(_ref) {
  var question = _ref.question,
      answers = _ref.answers;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      isAnswered = _React$useState2[0],
      setAnswered = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      isCorrect = _React$useState4[0],
      setCorrect = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      comment = _React$useState6[0],
      setComment = _React$useState6[1];

  var handleAnswer = function handleAnswer(e) {
    var value = e.target.value;
    setAnswered(true);
    var answer = answers.find(function (answer) {
      return answer.id === value;
    });
    var isAnswerCorrect = answer.isCorrect;
    var answerComment = answer.comment;
    setCorrect(isAnswerCorrect);
    setComment(answerComment);
  };

  var shuffle = function shuffle(array) {
    return array.sort(function () {
      return Math.random() - 0.5;
    });
  };

  var radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };
  var answersArr = shuffle(answers);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(Title, {
    level: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, question), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Group, {
    onChange: handleAnswer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, answersArr.map(function (element) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
      key: element.id,
      style: radioStyle,
      value: element.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, element.answer);
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, isAnswered && isCorrect && comment));
}

/* harmony default export */ __webpack_exports__["default"] = (Question);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.b277f7edf5e7cb4aeb8a.hot-update.js.map