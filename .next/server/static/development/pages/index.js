module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/westfalsky/Projects/frontend/flameous/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"];
const results = [{
  id: 1,
  title: "Вы абсолютно не фанзиль! 🍾",
  text: "Скорее всего, вы достаточно счастливый человек с высоким уровнем эмпатии. У вас есть друзья, которые всегда вас поддержат, а так же вещи, которые приносят вам удовольствие. Однако расслабляться не стоит, ведь «счастье — эфемерное понятие. Оно расхолаживает и заставляет вас терять осознанность. Потеря осознанности ведёт к стрессу, появлению баесов, неправильной интерпретации событий и, как итог, к депрессии.» (с) Фанзиль"
}, {
  id: 2,
  title: "Не фанзиль, но есть звоночки 🔔",
  text: "В целом вы счастливы, но без проблем не обошлось. Возможно, у вас не ладится с противоположным полом или же вы просто petrolhead, ищущий внимания. В любом случае, всё не так страшно и с возрастом это пройдёт. Рекомендуется пройти этот тест ещё раз через пару лет, чтобы посмотреть на динамику безумия."
}, {
  id: 3,
  title: "Опасное перепутье 🚸",
  text: "Вы не безумны, но и нормальным вас не назовёшь. Что-то не даёт вам покоя. Реальность вокруг начинает вращаться с опасной динамикой. Уровень окситоцина начинает падать и вам становится сложнее интерпретировать намерения людей. Ещё немного и вы начнёте есть чесночный хлеб и писать attention-seeking посты в свой канал в телеграме. Рекомендуется: НАЙТИ ДРУЗЕЙ"
}, {
  id: 4,
  title: "Фанзиль, это ты? 🤡",
  text: "Результаты очень тревожные и ваше положение в обществе крайне шаткое. Люди не понимают вас, ваши друзья не кажутся вам друзьями. Вы в любой момент можете упасть в пучину безумия и начать ходить под себя (если ещё не начали). Граница между реальностью и воображением почти стёрлась и реальность похожа на набор математических моделей, в которые люди не могут вписаться. Вам срочно нужны близкий друг, который вас выслушает и слоновья доза ингибиторов обратного захвата серотонина."
}, {
  id: 5,
  title: "Being fanzil is my normal, my nature 👺",
  text: "You've lost your mind. Безумие уже охватило вас. Очень небольшое количество людей способно вас понять, ещё меньше — согласиться с тем, о чём вы говорите. Death, anxiety, overthinking and toxicity — это ваш вижен четырёх всадников апокалипсиса, которые уже настигли ваше сознание. Возможно, вас стоит изолировать от общества. Пожалуйста, обратитесь за помощью к психотерапевту как можно скорее: \n\n https://docdoc.ru/doctor/psihoterapevt"
}];

function Card({
  result
}) {
  let testResult;
  let type;

  if (result <= 2) {
    testResult = 1;
    type = "success";
  }

  if (result > 2 && result <= 4) {
    testResult = 2;
    type = "success";
  }

  if (result > 4 && result <= 6) {
    testResult = 3;
    type = "warning";
  }

  if (result > 6 && result <= 8) {
    testResult = 4;
    type = "warning";
  }

  if (result > 8 && result <= 10) {
    testResult = 5;
    type = "error";
  }

  const item = results.filter(i => i.id === testResult)[0];
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(Title, {
    level: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ", item.title), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    type: type,
    message: `${result} / 10`,
    description: item.text,
    banner: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Card);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Card__Wrapper",
  componentId: "tiu9lr-0"
})(["margin:24px 0 96px;"]);

/***/ }),

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/westfalsky/Projects/frontend/flameous/components/Question.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"];

function Question(_ref) {
  let {
    question,
    answers
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["question", "answers"]);

  const [isAnswered, setAnswered] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [isCorrect, setCorrect] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [comment, setComment] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleAnswer = e => {
    const {
      value
    } = e.target;
    setAnswered(true);
    const answer = answers.find(answer => answer.id === value);
    const isAnswerCorrect = answer.isCorrect;
    const answerComment = answer.comment;
    setCorrect(isAnswerCorrect);
    setComment(answerComment);
    rest.updateCounter(++rest.counter);

    if (isAnswerCorrect) {
      rest.updateCorrectCounter(++rest.correctAnswers);
    }
  };

  const radioStyle = {
    display: "block",
    lineHeight: "30px",
    whiteSpace: "normal"
  };
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(Title, {
    level: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, question), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
    onChange: handleAnswer,
    disabled: isAnswered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, answers.map(element => {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
      key: element.id,
      style: radioStyle,
      value: element.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, element.answer);
  })), __jsx(AnswerWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, isAnswered && (isCorrect ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    message: comment,
    type: "success",
    showIcon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    message: comment,
    type: "error",
    showIcon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Question);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Question__Wrapper",
  componentId: "sc-164vbo1-0"
})(["margin:24px 0;"]);
const AnswerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Question__AnswerWrapper",
  componentId: "sc-164vbo1-1"
})(["margin-top:12px;"]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Question */ "./components/Question.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
var _jsxFileName = "/Users/westfalsky/Projects/frontend/flameous/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const {
  Title,
  Paragraph,
  Text
} = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"];
const data = [{
  id: 1,
  question: "Начну с простого: Вы фанзиль?",
  answers: [{
    id: 1,
    answer: "Да",
    comment: "Пизда. Фанзиль не открылся бы так легко.",
    isCorrect: false
  }, {
    id: 2,
    answer: "Нет",
    comment: "Неплохо. Продолжаем.",
    isCorrect: true
  }]
}, {
  id: 2,
  question: "Вы поссорились со своей девушкой, спустя какое-то время вы разговариваете на улице и она говорит, что ей холодно. Ваши действия?",
  answers: [{
    id: 1,
    answer: "Предложу свою куртку / обниму её.",
    comment: "Похоже, что у вас нет ни единого шанса сдать этот тест.",
    isCorrect: false
  }, {
    id: 2,
    answer: "Предложу ей пойти вон в то соседнее здание, там наверняка теплее.",
    comment: "Абсолютно верно. Законы романтики неведомы человеку рациональности.",
    isCorrect: true
  }]
}, {
  id: 3,
  question: "Вы упарываете ЛСД в кругу друзей, внезапно один из них решает залезть на шкаф. Как вы себя чувствуете?",
  answers: [{
    id: 1,
    answer: "Скорее всего, он агрессивен и хочет избить именно меня",
    comment: "В яблочко. Прямо сейчас у вас кошмарнейший бэдтрип",
    isCorrect: true
  }, {
    id: 2,
    answer: "Нет никаких причин переживать — он не причинит никому вреда.",
    comment: "Очень наивное предположение, если вы — фанзиль.",
    isCorrect: false
  }]
}, {
  id: 4,
  question: "Вы ложитесь спать. О чём вы думаете перед сном?",
  answers: [{
    id: 1,
    answer: "Думаю о том, что хорошего со мной будет в будущем; о том, как прошёл день",
    comment: "Ответ отрицательный. Фанзиль НИКОГДА не думает о хорошем.",
    isCorrect: false
  }, {
    id: 2,
    answer: "Думаю о том, насколько ужасно забвение после смерти; о человеческой темпоральности и ничтожности",
    comment: "Верно. Нельзя ложиться спать без ночного приступа тревожности.",
    isCorrect: true
  }]
}, {
  id: 5,
  question: "К вам домой приходят близкие друзья, чтобы поиграть в настольные игры. В какой-то момент вы понимаете, что проигрываете. Что вы будете делать?",
  answers: [{
    id: 1,
    answer: "Буду явно демонстрировать, что у меня больше нет настроения. Нужно сделать всё возможное, чтобы задушить Яниса в этой игре.",
    comment: "Из-за этого я перестал играть в колонизаторов, кстати.",
    isCorrect: true
  }, {
    id: 2,
    answer: "Победа — не главное. Главное — это то, что мы с друзьями смогли собраться вместе и лампово поиграть в игры",
    comment: "Я бы хотел поиграть с вами в настолки, потому что видимо, вы неплохой человек.",
    isCorrect: false
  }]
}, {
  id: 6,
  question: "На вечеринке вас знакомят с человеком. В процессе выясняется, что он зарабатывает значительно меньше вас. Что вы чувствуете?",
  answers: [{
    id: 1,
    answer: "Он хочет втереться ко мне в доверие, чтобы обмануть меня и украсть мои ресурсы",
    comment: "Именно так. Кстати, это тоже бэдтрип, но уже не от кислоты.",
    isCorrect: true
  }, {
    id: 2,
    answer: "Ничего страшного, ведь уровень зарплаты не делает его плохим человеком со скрытыми мотивами",
    comment: "Очень наивно. Возможно, вас УЖЕ обобрали.",
    isCorrect: false
  }]
}, {
  id: 7,
  question: "Вы видите, что позиция Яниса отлична от вашей и думаете, что нужно с ним поспорить. Станете ли вы это делать?",
  answers: [{
    id: 1,
    answer: "Да, ведь у меня неплохая аргументация и его позиция не кажется устойчивой",
    comment: "ДИТЯ, ТЫ БРОСАЕШЬ ВЫЗОВ МНЕ?",
    isCorrect: false
  }, {
    id: 2,
    answer: "Нет, это было бы иррационально, ведь я ни разу не выиграл в споре с ним и статистически он почти всегда оказывается прав",
    comment: "Всё верно, с Янисом спорить не стоит.",
    isCorrect: true
  }]
}, {
  id: 8,
  question: "Вы знакомитесь с милой девушкой. В общении вы:",
  answers: [{
    id: 1,
    answer: "Стараюсь быть лёгким и понятным, чередую интересные ей и мне темы, но стараюсь найти нечто общее",
    comment: "Всё в порядке, скорее всего вы нормальный человек.",
    isCorrect: false
  }, {
    id: 2,
    answer: "Использую слова, значение которых известно только мне, термины, англицизмы и явно показываю, что я билингв, because sometimes I just wanna use english for no reason",
    comment: "Фанзиль, ты единственный, кто мог нажать на этот ответ.",
    isCorrect: true
  }]
}, {
  id: 9,
  question: "Вы играете по сети в ЧГК со старыми друзьями из универа. Вам весело и нет никаких поводов думать о плохом. Что вы решаете сделать в этот момент?",
  answers: [{
    id: 1,
    answer: "Предложу продолжить общение и поиграть во что-нибудь ещё после этой партии",
    comment: "Ответ верный для нормального человека. Как жаль, что тест не об этом.",
    isCorrect: false
  }, {
    id: 2,
    answer: "Начну рандомно говорить токсичные вещи каждому из участников разговора",
    comment: "Поразительно, но именно так и поступил фанзиль прямо в момент, пока я работал над этим тестом.",
    isCorrect: true
  }]
}, {
  id: 10,
  question: "В детстве у вас был телефон, но не было",
  answers: [{
    id: 1,
    answer: "Друзей",
    comment: "Пожалуйста, можно мне вас обнять? В любом случае, вы не одиноки.",
    isCorrect: true
  }, {
    id: 2,
    answer: "Компьютера",
    comment: "Компьютер у фанзиля был, как и фанфики по мультику с пони.",
    isCorrect: false
  }]
}];

function Home() {
  const [counter, increment] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [correctAnswers, incrementCorrectAnswers] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (counter === 10) {
      setState("finished");
    }
  }, [counter]);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "\u0412\u044B \u0424\u0430\u043D\u0437\u0438\u043B\u044C?"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "\xAB\u0412\u044B \u0424\u0430\u043D\u0437\u0438\u043B\u044C?\xBB \u2014 \u044D\u0442\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u0435\u0441\u0442 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u0433\u043E, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u043F\u043E\u0445\u043E\u0436\u0438 \u043D\u0430 \u0444\u0430\u043D\u0437\u0438\u043B\u044F, \u0442\u0438\u0442\u0430\u043D\u0430 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u0441\u0432\u043E\u0435\u0439 \u0442\u0440\u0435\u0432\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E, \u0442\u043E\u043A\u0441\u0438\u0447\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043B\u044E\u0431\u043E\u0432\u044C\u044E \u043A \u0430\u043D\u0438\u043C\u0435. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0435\u0441\u0442\u0430 \u043D\u0435\u0431\u0438\u043D\u0430\u0440\u043D\u044B\u0439 \u2014 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043A\u0435\u043C-\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u0445\u043E\u0436\u0438\u043C \u043D\u0430 \u0444\u0430\u043D\u0437\u0438\u043B\u044F, \u0438\u043B\u0438 \u0436\u0435, \u0435\u0441\u043B\u0438 \u0432\u044B", " ", __jsx(Text, {
    strong: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439"), " \u0447\u0435\u043B\u043E\u0432\u0435\u043A, \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0430 \u043D\u0435\u0433\u043E \u043D\u0435 \u043F\u043E\u0445\u043E\u0436\u0438\u043C."), __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 \u0442\u0435\u0441\u0442\u0430 \u2014 \u0434\u0435\u043B\u043E \u0432\u0430\u0448\u0435. \u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u044F, \u0433\u0435\u043D\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u044D\u0442\u043E\u0433\u043E \u0442\u0435\u0441\u0442\u0430, \u2014 \u0432\u0430\u0448 \u0441\u043E\u044E\u0437\u043D\u0438\u043A, \u0442\u043E \u043F\u043E \u0435\u0433\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C \u044F \u043E\u0441\u0442\u0430\u0432\u043B\u044E \u0441\u043E\u0432\u0435\u0442, \u043A\u0430\u043A \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u043F\u0440\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0438 \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435.")), state === null && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    onClick: () => setState("started"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "\u041F\u043E\u0435\u0445\u0430\u043B\u0438")), state !== null && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, data.map(item => __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    key: item.id
  }, item, {
    counter: counter,
    updateCounter: increment,
    correctAnswers: correctAnswers,
    updateCorrectCounter: incrementCorrectAnswers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), state === "finished" && __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    result: correctAnswers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }));
}

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "pages__Container",
  componentId: "sc-3cyjm2-0"
})(["margin:0 auto;padding:64px 32px 0;max-width:1024px;width:100%;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "sc-3cyjm2-1"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/westfalsky/Projects/frontend/flameous/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map