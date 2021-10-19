"use strict";
self["webpackHotUpdatedmitry_rubel_ligabank"]("main",{

/***/ "./project/src/components/calc/calc.jsx":
/*!**********************************************!*\
  !*** ./project/src/components/calc/calc.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _credit_time_credit_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../credit-time/credit-time */ "./project/src/components/credit-time/credit-time.jsx");
/* harmony import */ var _display_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/display */ "./project/src/components/display/display.jsx");
/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dropdown/dropdown */ "./project/src/components/dropdown/dropdown.jsx");
/* harmony import */ var _initial_payment_initial_payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../initial-payment/initial-payment */ "./project/src/components/initial-payment/initial-payment.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Calc() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1]; // 0 это ипотечное кредитование 1 авто 


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      counter = _useState4[0],
      setCounter = _useState4[1];

  var incrementCounter = function incrementCounter(value) {
    return setCounter(counter + value);
  };

  var decrement = function decrement(value) {
    return setCounter(counter - value);
  };

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      initialPayment = _useState6[0],
      setInitialPayment = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),
      _useState8 = _slicedToArray(_useState7, 2),
      creditTime = _useState8[0],
      setCreditTime = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      maternalCapital = _useState10[0],
      setMaternalCapital = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      casko = _useState12[0],
      setCasko = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      insurance = _useState14[0],
      setInsurance = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState16 = _slicedToArray(_useState15, 2),
      stepCount = _useState16[0],
      setStepCount = _useState16[1];

  function selectCreditType(type) {
    setSelected(type);
    setCounter(type === 0 ? 2000000 : 500000);
    setCreditTime(type === 0 ? 5 : 1);
    setInitialPayment(type === 0 ? 2000000 * 0.1 : 500000 * 0.2);
    setStepCount(2);
  }

  function getCreditSumm() {
    if (maternalCapital) {
      return counter - initialPayment - 470000;
    }

    return counter - initialPayment;
  }

  function getPercent() {
    if (selected === 0) {
      return initialPayment / counter < 0.15 ? 9.4 : 8.5;
    }

    if (casko && !insurance || !casko && insurance) {
      return 8.5;
    }

    if (casko && insurance) {
      return 3.5;
    }

    return counter < 2000000 ? 16 : 15;
  }

  function getMontlyPayment() {
    return Math.round(getCreditSumm() * getPercent() / 1200 / (1 - Math.pow(1 + getPercent() / 1200, -creditTime * 12)));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "calc",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("form", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "calc__case",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "calc__container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
              className: "calc__header",
              children: "\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "calc__wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "calc__step",
                children: "\u0428\u0430\u0433 1. \u0426\u0435\u043B\u044C \u043A\u0440\u0435\u0434\u0438\u0442\u0430"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__.default, {
                selected: selected,
                setSelected: selectCreditType
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: stepCount === 1 ? "calc__step-hidden" : "",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "calc__step",
                  children: "\u0428\u0430\u0433 2. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043A\u0440\u0435\u0434\u0438\u0442\u0430"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_display_display__WEBPACK_IMPORTED_MODULE_2__.default, {
                  counter: counter,
                  onChange: setCounter,
                  decrement: decrement,
                  selected: selected,
                  increment: incrementCounter
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_initial_payment_initial_payment__WEBPACK_IMPORTED_MODULE_4__.default, {
                  initialPayment: initialPayment,
                  counter: counter,
                  onChange: setInitialPayment,
                  maternalCapital: maternalCapital,
                  selected: selected
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_credit_time_credit_time__WEBPACK_IMPORTED_MODULE_1__.default, {
                  creditTime: creditTime,
                  onChange: setCreditTime,
                  selected: selected
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  type: "checkbox",
                  id: "maternalCapital",
                  checked: maternalCapital,
                  onChange: function onChange(evt) {
                    return setMaternalCapital(evt.target.checked);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                  className: "calc__checkbox",
                  htmlFor: "maternalCapital",
                  children: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: selected === 0 ? "calc__insurance" : "",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                    type: "checkbox",
                    id: "casko",
                    checked: casko,
                    onChange: function onChange(evt) {
                      return setCasko(evt.target.checked);
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "calc__checkbox",
                    htmlFor: "casko",
                    children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u041A\u0410\u0421\u041A\u041E \u0432 \u043D\u0430\u0448\u0435\u043C \u0431\u0430\u043D\u043A\u0435"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: selected === 0 ? "calc__insurance" : "",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                    type: "checkbox",
                    id: "insuranceCheckbox",
                    checked: insurance,
                    onChange: function onChange(evt) {
                      return setInsurance(evt.target.checked);
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "calc__checkbox",
                    htmlFor: "insuranceCheckbox",
                    children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0436\u0438\u0437\u043D\u0438 \u0432 \u043D\u0430\u0448\u0435\u043C \u0431\u0430\u043D\u043A\u0435"
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: stepCount === 1 ? "calc__step-hidden" : "calc__offer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "calc__offer-wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "calc__step calc__step-header",
                children: "\u041D\u0430\u0448\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "calc__step-wrapper",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: "calc__list",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
                    className: "calc__item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
                      className: "calc__step calc__steb-item",
                      children: [getCreditSumm(), " \u0440\u0443\u0431\u043B\u0435\u0439 "]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                      className: "calc__text-item",
                      children: "\u0421\u0443\u043C\u043C\u0430 \u0438\u043F\u043E\u0442\u0435\u043A\u0438"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
                    className: "calc__item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
                      className: "calc__step calc__steb-item",
                      children: [getPercent(), "%"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                      className: "calc__text-item",
                      children: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
                    className: "calc__item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
                      className: "calc__step calc__steb-item",
                      children: [getMontlyPayment(), " \u0440\u0443\u0431\u043B\u0435\u0439"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                      className: "calc__text-item",
                      children: "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
                    className: "calc__item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
                      className: "calc__step calc__steb-item",
                      children: [Math.trunc(getMontlyPayment() / 45 * 100), " \u0440\u0443\u0431\u043B\u0435\u0439"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                      className: "calc__text-item",
                      children: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u0434\u043E\u0445\u043E\u0434"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: "calc__button",
                children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: stepCount === 1 || stepCount === 2 ? "calc__step-hidden" : "registration",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "registration__wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            className: "registration__header",
            children: "\u0428\u0430\u0433 3. \u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
            className: "registration__list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
              className: "registration__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text",
                children: "\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u044F\u0432\u043A\u0438"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text-cell",
                children: "\u2116 0010"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
              className: "registration__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text",
                children: "\u0426\u0435\u043B\u044C \u043A\u0440\u0435\u0434\u0438\u0442\u0430"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text-cell",
                children: "\u0418\u043F\u043E\u0442\u0435\u043A\u0430"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
              className: "registration__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text",
                children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text-cell",
                children: "2 000 000 \u0440\u0443\u0431\u043B\u0435\u0439"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
              className: "registration__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text",
                children: "\u041F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0437\u043D\u043E\u0441"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text-cell",
                children: "200 000 \u0440\u0443\u0431\u043B\u0435\u0439"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
              className: "registration__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text",
                children: "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "registration__text-cell",
                children: "5 \u043B\u0435\u0442"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            className: "visually-hidden",
            children: "\u0424\u0418\u041E"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "text",
            className: "registration__name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "registration__case",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              className: "visually-hidden",
              children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "text",
              className: "registration__phohe"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              className: "visually-hidden",
              children: "\u0415-mail"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "text",
              className: "registration__email"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "registration__button-case",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              className: "registration__button",
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
            })
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calc);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("27b0cb810f7fa9c912df")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.702c5688dfe507b1fb73.hot-update.js.map