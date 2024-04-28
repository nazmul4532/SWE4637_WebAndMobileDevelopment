"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-quiz",{

/***/ "./pages/create-quiz.js":
/*!******************************!*\
  !*** ./pages/create-quiz.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CreateQuizPage = ()=>{\n    _s();\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        questions: [\n            {\n                prompt: \"\",\n                options: [\n                    \"\",\n                    \"\"\n                ],\n                correctAnswer: \"\"\n            }\n        ]\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    const handleInputChange = (index, key, value)=>{\n        setQuizData((prevState)=>{\n            if (key === \"name\") {\n                return {\n                    ...prevState,\n                    name: value\n                };\n            } else {\n                const updatedQuestions = [\n                    ...prevState.questions\n                ];\n                updatedQuestions[index][key] = value;\n                return {\n                    ...prevState,\n                    questions: updatedQuestions\n                };\n            }\n        });\n    };\n    const handleOptionChange = (questionIndex, optionIndex, value)=>{\n        setQuizData((prevState)=>{\n            const updatedQuestions = [\n                ...prevState.questions\n            ];\n            updatedQuestions[questionIndex].options[optionIndex] = value;\n            return {\n                ...prevState,\n                questions: updatedQuestions\n            };\n        });\n    };\n    const handleAddQuestion = ()=>{\n        setQuizData((prevState)=>{\n            const updatedQuestions = [\n                ...prevState.questions,\n                {\n                    prompt: \"\",\n                    options: [\n                        \"\",\n                        \"\"\n                    ],\n                    correctAnswer: \"\"\n                }\n            ];\n            return {\n                ...prevState,\n                questions: updatedQuestions\n            };\n        });\n    };\n    const handleAddOption = (questionIndex)=>{\n        setQuizData((prevState)=>{\n            const updatedQuestions = [\n                ...prevState.questions\n            ];\n            updatedQuestions[questionIndex].options.push(\"\");\n            return {\n                ...prevState,\n                questions: updatedQuestions\n            };\n        });\n    };\n    // const handleSubmit = (e) => {\n    //     e.preventDefault();\n    //     try {\n    //         const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];\n    //         const newQuizData = { ...quizData };\n    //         if (storedQuizzes.length === 0) {\n    //             localStorage.setItem('quizzes', JSON.stringify([newQuizData]));\n    //         } else {\n    //             localStorage.setItem('quizzes', JSON.stringify([...storedQuizzes, newQuizData]));\n    //         }\n    //         setQuizData({ name: '', questions: [{ prompt: '', options: ['', ''], correctAnswer: '' }] });\n    //         console.log('Quiz submitted successfully');\n    //     } catch (error) {\n    //         console.error('Error submitting quiz:', error);\n    //     }\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/create-quiz\", quizData);\n            console.log(\"Quiz created successfully:\", response.data);\n            setQuizData({\n                name: \"\",\n                questions: [\n                    {\n                        prompt: \"\",\n                        options: [\n                            \"\",\n                            \"\"\n                        ],\n                        correctAnswer: \"\"\n                    }\n                ]\n            });\n        } catch (error) {\n            console.error(\"Error creating quiz:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create Quiz\"\n            }, void 0, false, {\n                fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Quiz Name:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: quizData.name,\n                                onChange: (e)=>handleInputChange(null, \"name\", e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    quizData.questions.map((question, questionIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"Question Prompt:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            value: question.prompt,\n                                            onChange: (e)=>handleInputChange(questionIndex, \"prompt\", e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, undefined),\n                                question.options.map((option, optionIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: [\n                                                \"Option \",\n                                                optionIndex + 1,\n                                                \":\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    value: option,\n                                                    onChange: (e)=>handleOptionChange(questionIndex, optionIndex, e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, optionIndex, false, {\n                                        fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 29\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>handleAddOption(questionIndex),\n                                    children: \"Add Option\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"Correct Answer:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            value: question.correctAnswer,\n                                            onChange: (e)=>handleInputChange(questionIndex, \"correctAnswer\", e.target.value),\n                                            children: question.options.map((option, optionIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: option,\n                                                    children: option\n                                                }, optionIndex, false, {\n                                                    fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                                    lineNumber: 129,\n                                                    columnNumber: 37\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, questionIndex, true, {\n                            fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleAddQuestion,\n                        children: \"Add Question\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit Quiz\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                        lineNumber: 141,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nazmul/Desktop/Web Dev/my-quiz-app-with-backend/client/pages/create-quiz.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CreateQuizPage, \"bEgCnu6F8KhI4jBpUqV8lnv8ApM=\");\n_c = CreateQuizPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateQuizPage);\nvar _c;\n$RefreshReg$(_c, \"CreateQuizPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlCOUIsT0FBTzhCOzhEQUM1QkE7bURBRFF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FNekIsOERBQUNzQjs7Ozs7OzJCQXZDS3ZCOzs7OztrQ0EwQ2QsOERBQUMyQjt3QkFBT1AsTUFBSzt3QkFBU1EsU0FBUzFCO2tDQUFtQjs7Ozs7O2tDQUdsRCw4REFBQ3lCO3dCQUFPUCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEM7R0E1SU1uQztLQUFBQTtBQThJTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtcXVpei5qcz9iZWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDcmVhdGVRdWl6UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbcXVpekRhdGEsIHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHF1ZXN0aW9uczogW3sgcHJvbXB0OiAnJywgb3B0aW9uczogWycnLCAnJ10sIGNvcnJlY3RBbnN3ZXI6ICcnIH1dXG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoaW5kZXgsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgc2V0UXVpekRhdGEocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICduYW1lJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgbmFtZTogdmFsdWUgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFF1ZXN0aW9ucyA9IFsuLi5wcmV2U3RhdGUucXVlc3Rpb25zXTtcbiAgICAgICAgICAgICAgICB1cGRhdGVkUXVlc3Rpb25zW2luZGV4XVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBxdWVzdGlvbnM6IHVwZGF0ZWRRdWVzdGlvbnMgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU9wdGlvbkNoYW5nZSA9IChxdWVzdGlvbkluZGV4LCBvcHRpb25JbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgc2V0UXVpekRhdGEocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRRdWVzdGlvbnMgPSBbLi4ucHJldlN0YXRlLnF1ZXN0aW9uc107XG4gICAgICAgICAgICB1cGRhdGVkUXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdLm9wdGlvbnNbb3B0aW9uSW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHF1ZXN0aW9uczogdXBkYXRlZFF1ZXN0aW9ucyB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQWRkUXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFF1aXpEYXRhKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUXVlc3Rpb25zID0gWy4uLnByZXZTdGF0ZS5xdWVzdGlvbnMsIHsgcHJvbXB0OiAnJywgb3B0aW9uczogWycnLCAnJ10sIGNvcnJlY3RBbnN3ZXI6ICcnIH1dO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBxdWVzdGlvbnM6IHVwZGF0ZWRRdWVzdGlvbnMgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgY29uc3QgaGFuZGxlQWRkT3B0aW9uID0gKHF1ZXN0aW9uSW5kZXgpID0+IHtcbiAgICAgICAgc2V0UXVpekRhdGEocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRRdWVzdGlvbnMgPSBbLi4ucHJldlN0YXRlLnF1ZXN0aW9uc107XG4gICAgICAgICAgICB1cGRhdGVkUXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdLm9wdGlvbnMucHVzaCgnJyk7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHF1ZXN0aW9uczogdXBkYXRlZFF1ZXN0aW9ucyB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgICAgY29uc3Qgc3RvcmVkUXVpenplcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3F1aXp6ZXMnKSkgfHwgW107XG4gICAgLy8gICAgICAgICBjb25zdCBuZXdRdWl6RGF0YSA9IHsgLi4ucXVpekRhdGEgfTtcbiAgICAvLyAgICAgICAgIGlmIChzdG9yZWRRdWl6emVzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdxdWl6emVzJywgSlNPTi5zdHJpbmdpZnkoW25ld1F1aXpEYXRhXSkpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncXVpenplcycsIEpTT04uc3RyaW5naWZ5KFsuLi5zdG9yZWRRdWl6emVzLCBuZXdRdWl6RGF0YV0pKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHNldFF1aXpEYXRhKHsgbmFtZTogJycsIHF1ZXN0aW9uczogW3sgcHJvbXB0OiAnJywgb3B0aW9uczogWycnLCAnJ10sIGNvcnJlY3RBbnN3ZXI6ICcnIH1dIH0pO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ1F1aXogc3VibWl0dGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBxdWl6OicsIGVycm9yKTtcbiAgICAvLyAgICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2NyZWF0ZS1xdWl6JywgcXVpekRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdRdWl6IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5OicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIHNldFF1aXpEYXRhKHsgbmFtZTogJycsIHF1ZXN0aW9uczogW3sgcHJvbXB0OiAnJywgb3B0aW9uczogWycnLCAnJ10sIGNvcnJlY3RBbnN3ZXI6ICcnIH1dIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHF1aXo6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8aDE+Q3JlYXRlIFF1aXo8L2gxPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBRdWl6IE5hbWU6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1aXpEYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKG51bGwsICduYW1lJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAge3F1aXpEYXRhLnF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBxdWVzdGlvbkluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtxdWVzdGlvbkluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWVzdGlvbiBQcm9tcHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9uLnByb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShxdWVzdGlvbkluZGV4LCAncHJvbXB0JywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17b3B0aW9uSW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb24ge29wdGlvbkluZGV4ICsgMX06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU9wdGlvbkNoYW5nZShxdWVzdGlvbkluZGV4LCBvcHRpb25JbmRleCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkT3B0aW9uKHF1ZXN0aW9uSW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnJlY3QgQW5zd2VyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UocXVlc3Rpb25JbmRleCwgJ2NvcnJlY3RBbnN3ZXInLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb25JbmRleH0gdmFsdWU9e29wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQWRkUXVlc3Rpb259PlxuICAgICAgICAgICAgICAgICAgICBBZGQgUXVlc3Rpb25cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQgUXVpejwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUXVpelBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdmJhciIsImF4aW9zIiwiQ3JlYXRlUXVpelBhZ2UiLCJxdWl6RGF0YSIsInNldFF1aXpEYXRhIiwibmFtZSIsInF1ZXN0aW9ucyIsInByb21wdCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpbmRleCIsImtleSIsInZhbHVlIiwicHJldlN0YXRlIiwidXBkYXRlZFF1ZXN0aW9ucyIsImhhbmRsZU9wdGlvbkNoYW5nZSIsInF1ZXN0aW9uSW5kZXgiLCJvcHRpb25JbmRleCIsImhhbmRsZUFkZFF1ZXN0aW9uIiwiaGFuZGxlQWRkT3B0aW9uIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJiciIsIm1hcCIsInF1ZXN0aW9uIiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInNlbGVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create-quiz.js\n"));

/***/ })

});