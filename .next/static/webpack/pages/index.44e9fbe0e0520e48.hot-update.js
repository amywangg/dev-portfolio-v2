"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Skills.js":
/*!******************************!*\
  !*** ./components/Skills.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst skills = [\n    {\n        name: \"JavaScript & TypeScript\",\n        images: [\n            \"javascript\",\n            \"typescript\"\n        ],\n        description: \"My primary languages used in almost every project and most recent work experience, usually in conjunction with React. TypeScript makes code easier to read and consume.\"\n    },\n    {\n        name: \"React & Redux\",\n        images: [\n            \"react\",\n            \"redux\"\n        ],\n        description: \"My frontend library of choice, most of my work experience & projects use React! It's super lightweight and intuitive. With that comes experience with state management via Context, Redux, LocalStorage.\"\n    },\n    {\n        name: \"Node.js\",\n        images: [\n            \"nodejs\"\n        ],\n        description: \"Worked with Node.js professionally and in projects to setup the backend to communicate with db, provide REST endpoints, and setup Redis cache for authentication and session management.\"\n    },\n    {\n        name: \"Python & Flask\",\n        images: [\n            \"python\",\n            \"flask\"\n        ],\n        description: \"Used Python & Flask combo in earlier projects such as Resumate and Oink. Learned basic machine learning concepts and how to build neural networks via Python and various libraries such as SpaCy, numPy, etc.\"\n    },\n    {\n        name: \"HTML, CSS & Tailwind\",\n        images: [\n            \"html\",\n            \"css\",\n            \"tailwind\"\n        ],\n        description: \"The fundamental building blocks of frontend web development! (minus Tailwind) Even when using popular frontend frameworks and libraries, these are the foundational languages.\"\n    },\n    {\n        name: \"npm, lerna & yarn\",\n        images: [\n            \"npm\",\n            \"lerna\",\n            \"yarn\"\n        ],\n        description: \"Package and project managers I've worked with to build out versioned microservices and monorepos. I've also published packages to npm!\"\n    },\n    {\n        name: \"Git & Gitlab CI\",\n        images: [\n            \"git\",\n            \"gitlab\"\n        ],\n        description: \"Git is essential for any developers toolkit. I'm well versed in git best practices for coding, committing, PR reviews, etc. Additionally, I've worked on optimizing Gitlab CI pipelines!\"\n    },\n    {\n        name: \"AWS & Docker\",\n        images: [\n            \"aws\",\n            \"docker\"\n        ],\n        description: \"I've dabbled in AWS' S3, CloudFront, and Route 53. In fact, this porfolio is auto-deployed via GitHub Actions and served on AWS. Plus I've used Docker to containerize fullstack apps and visual regression tests.\"\n    },\n    {\n        name: \"PostgreSQL & GraphQL\",\n        images: [\n            \"postgresql\",\n            \"graphql\"\n        ],\n        description: \"Built to extend SQL's capabilities, these query languages come in handy for database management for fullstack apps. I have also used ORMs like Cube.js and Knex.js to more easily manipulate and display data!\"\n    },\n    {\n        name: \"Storybook.js\",\n        images: [\n            \"storybook\"\n        ],\n        description: \"Essential to every frontend project, I've used Storybook to visualize, test, and develop components. The most notable project was leveraging Storybook to create a visual regression framework.\"\n    },\n    {\n        name: \"Unit & Functional Testing\",\n        images: [\n            \"jest\",\n            \"rtl\"\n        ],\n        description: \"Core fundamentals to any kind of test-driven development to ensure methods or systems function as prescribed following AAA (Arrange-Act-Assert).\"\n    },\n    {\n        name: \"Jira & Scrum\",\n        images: [\n            \"jira\"\n        ],\n        description: \"Have always worked in an Agile  development environment following scrum methodologies and participating in various scrum ceremonies! Jira is definitely in my comfort zone.\"\n    }\n];\nconst SkillsCard = (param)=>{\n    let { skill  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"github-repo\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inline-flex gap-2\",\n                children: skill.images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"h-6 pr-2\",\n                        src: \"/skills-images/\".concat(image, \".png\")\n                    }, void 0, false, {\n                        fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-semibold text-lg dark:text-gray-200 text-slate-900\",\n                children: skill.name\n            }, void 0, false, {\n                fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-base font-normal mt-2 mb-4 text-gray-500 dark:text-slate-300\",\n                children: skill.description\n            }, void 0, false, {\n                fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SkillsCard;\nfunction Skills() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-start items-start bg-white dark:bg-slate-700 px-[8vw] pb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black dark:text-white my-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"border-l-4 border-blue-400 pl-2 text-4xl font-bold my-2\",\n                        children: \"What I do\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg\",\n                        children: \"I have over 3 years of experience building software on agile teams for early startups, large companies, financial companies, etc. Additionally, I have engineered several full stack applications during my time at Waterloo with differing use cases and stakeholders. Below is a quick overview of the tools and technologies that I've worked with, but I'm looking to expand that to more or strengthen the knowledge I have already accumulated!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 gap-y-5\",\n                children: skills.map((skill, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillsCard, {\n                        skill: skill\n                    }, idx, false, {\n                        fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amy/Projects/dev-portfolio-v2/components/Skills.js\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Skills;\nvar _c, _c1;\n$RefreshReg$(_c, \"SkillsCard\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBRTFCLE1BQU1DLFNBQVM7SUFDYjtRQUNFQyxNQUFNO1FBQ05DLFFBQVE7WUFBQztZQUFjO1NBQWE7UUFDcENDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsUUFBUTtZQUFDO1lBQVM7U0FBUTtRQUMxQkMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxRQUFRO1lBQUM7U0FBUztRQUNsQkMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxRQUFRO1lBQUM7WUFBVTtTQUFRO1FBQzNCQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLFFBQVE7WUFBQztZQUFRO1lBQU87U0FBVztRQUNuQ0MsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxRQUFRO1lBQUM7WUFBTztZQUFTO1NBQU87UUFDaENDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsUUFBUTtZQUFDO1lBQU87U0FBUztRQUN6QkMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxRQUFRO1lBQUM7WUFBTztTQUFTO1FBQ3pCQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLFFBQVE7WUFBQztZQUFjO1NBQVU7UUFDakNDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsUUFBUTtZQUFDO1NBQVk7UUFDckJDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsUUFBUTtZQUFDO1lBQVE7U0FBTTtRQUN2QkMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxRQUFRO1lBQUM7U0FBTztRQUNoQkMsYUFDRTtJQUNKO0NBQ0Q7QUFFRCxNQUFNQyxhQUFhLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDM0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWkYsTUFBTUgsTUFBTSxDQUFDTSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ2pCLDhEQUFDQzt3QkFBSUgsV0FBVTt3QkFBV0ksS0FBSyxrQkFBd0IsT0FBTkYsT0FBTTs7Ozs7Ozs7Ozs7MEJBRzNELDhEQUFDRztnQkFBR0wsV0FBVTswQkFDWEYsTUFBTUosSUFBSTs7Ozs7OzBCQUViLDhEQUFDWTtnQkFBRU4sV0FBVTswQkFDVkYsTUFBTUYsV0FBVzs7Ozs7Ozs7Ozs7O0FBSTFCO0tBaEJNQztBQWtCUyxTQUFTVSxTQUFTO0lBQy9CLHFCQUNFLDhEQUFDUjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBRU4sV0FBVTtrQ0FBMkQ7Ozs7OztrQ0FHeEUsOERBQUNNO3dCQUFFTixXQUFVO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBVXpCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlAsT0FBT1EsR0FBRyxDQUFDLENBQUNILE9BQU9VLG9CQUNsQiw4REFBQ1g7d0JBQVdDLE9BQU9BO3VCQUFZVTs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QyxDQUFDO01BeEJ1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMuanM/YTE5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHNraWxscyA9IFtcbiAge1xuICAgIG5hbWU6IFwiSmF2YVNjcmlwdCAmIFR5cGVTY3JpcHRcIixcbiAgICBpbWFnZXM6IFtcImphdmFzY3JpcHRcIiwgXCJ0eXBlc2NyaXB0XCJdLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNeSBwcmltYXJ5IGxhbmd1YWdlcyB1c2VkIGluIGFsbW9zdCBldmVyeSBwcm9qZWN0IGFuZCBtb3N0IHJlY2VudCB3b3JrIGV4cGVyaWVuY2UsIHVzdWFsbHkgaW4gY29uanVuY3Rpb24gd2l0aCBSZWFjdC4gVHlwZVNjcmlwdCBtYWtlcyBjb2RlIGVhc2llciB0byByZWFkIGFuZCBjb25zdW1lLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZWFjdCAmIFJlZHV4XCIsXG4gICAgaW1hZ2VzOiBbXCJyZWFjdFwiLCBcInJlZHV4XCJdLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNeSBmcm9udGVuZCBsaWJyYXJ5IG9mIGNob2ljZSwgbW9zdCBvZiBteSB3b3JrIGV4cGVyaWVuY2UgJiBwcm9qZWN0cyB1c2UgUmVhY3QhIEl0J3Mgc3VwZXIgbGlnaHR3ZWlnaHQgYW5kIGludHVpdGl2ZS4gV2l0aCB0aGF0IGNvbWVzIGV4cGVyaWVuY2Ugd2l0aCBzdGF0ZSBtYW5hZ2VtZW50IHZpYSBDb250ZXh0LCBSZWR1eCwgTG9jYWxTdG9yYWdlLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOb2RlLmpzXCIsXG4gICAgaW1hZ2VzOiBbXCJub2RlanNcIl0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldvcmtlZCB3aXRoIE5vZGUuanMgcHJvZmVzc2lvbmFsbHkgYW5kIGluIHByb2plY3RzIHRvIHNldHVwIHRoZSBiYWNrZW5kIHRvIGNvbW11bmljYXRlIHdpdGggZGIsIHByb3ZpZGUgUkVTVCBlbmRwb2ludHMsIGFuZCBzZXR1cCBSZWRpcyBjYWNoZSBmb3IgYXV0aGVudGljYXRpb24gYW5kIHNlc3Npb24gbWFuYWdlbWVudC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHl0aG9uICYgRmxhc2tcIixcbiAgICBpbWFnZXM6IFtcInB5dGhvblwiLCBcImZsYXNrXCJdLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJVc2VkIFB5dGhvbiAmIEZsYXNrIGNvbWJvIGluIGVhcmxpZXIgcHJvamVjdHMgc3VjaCBhcyBSZXN1bWF0ZSBhbmQgT2luay4gTGVhcm5lZCBiYXNpYyBtYWNoaW5lIGxlYXJuaW5nIGNvbmNlcHRzIGFuZCBob3cgdG8gYnVpbGQgbmV1cmFsIG5ldHdvcmtzIHZpYSBQeXRob24gYW5kIHZhcmlvdXMgbGlicmFyaWVzIHN1Y2ggYXMgU3BhQ3ksIG51bVB5LCBldGMuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhUTUwsIENTUyAmIFRhaWx3aW5kXCIsXG4gICAgaW1hZ2VzOiBbXCJodG1sXCIsIFwiY3NzXCIsIFwidGFpbHdpbmRcIl0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3Mgb2YgZnJvbnRlbmQgd2ViIGRldmVsb3BtZW50ISAobWludXMgVGFpbHdpbmQpIEV2ZW4gd2hlbiB1c2luZyBwb3B1bGFyIGZyb250ZW5kIGZyYW1ld29ya3MgYW5kIGxpYnJhcmllcywgdGhlc2UgYXJlIHRoZSBmb3VuZGF0aW9uYWwgbGFuZ3VhZ2VzLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJucG0sIGxlcm5hICYgeWFyblwiLFxuICAgIGltYWdlczogW1wibnBtXCIsIFwibGVybmFcIiwgXCJ5YXJuXCJdLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQYWNrYWdlIGFuZCBwcm9qZWN0IG1hbmFnZXJzIEkndmUgd29ya2VkIHdpdGggdG8gYnVpbGQgb3V0IHZlcnNpb25lZCBtaWNyb3NlcnZpY2VzIGFuZCBtb25vcmVwb3MuIEkndmUgYWxzbyBwdWJsaXNoZWQgcGFja2FnZXMgdG8gbnBtIVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHaXQgJiBHaXRsYWIgQ0lcIixcbiAgICBpbWFnZXM6IFtcImdpdFwiLCBcImdpdGxhYlwiXSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR2l0IGlzIGVzc2VudGlhbCBmb3IgYW55IGRldmVsb3BlcnMgdG9vbGtpdC4gSSdtIHdlbGwgdmVyc2VkIGluIGdpdCBiZXN0IHByYWN0aWNlcyBmb3IgY29kaW5nLCBjb21taXR0aW5nLCBQUiByZXZpZXdzLCBldGMuIEFkZGl0aW9uYWxseSwgSSd2ZSB3b3JrZWQgb24gb3B0aW1pemluZyBHaXRsYWIgQ0kgcGlwZWxpbmVzIVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBV1MgJiBEb2NrZXJcIixcbiAgICBpbWFnZXM6IFtcImF3c1wiLCBcImRvY2tlclwiXSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSd2ZSBkYWJibGVkIGluIEFXUycgUzMsIENsb3VkRnJvbnQsIGFuZCBSb3V0ZSA1My4gSW4gZmFjdCwgdGhpcyBwb3Jmb2xpbyBpcyBhdXRvLWRlcGxveWVkIHZpYSBHaXRIdWIgQWN0aW9ucyBhbmQgc2VydmVkIG9uIEFXUy4gUGx1cyBJJ3ZlIHVzZWQgRG9ja2VyIHRvIGNvbnRhaW5lcml6ZSBmdWxsc3RhY2sgYXBwcyBhbmQgdmlzdWFsIHJlZ3Jlc3Npb24gdGVzdHMuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBvc3RncmVTUUwgJiBHcmFwaFFMXCIsXG4gICAgaW1hZ2VzOiBbXCJwb3N0Z3Jlc3FsXCIsIFwiZ3JhcGhxbFwiXSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnVpbHQgdG8gZXh0ZW5kIFNRTCdzIGNhcGFiaWxpdGllcywgdGhlc2UgcXVlcnkgbGFuZ3VhZ2VzIGNvbWUgaW4gaGFuZHkgZm9yIGRhdGFiYXNlIG1hbmFnZW1lbnQgZm9yIGZ1bGxzdGFjayBhcHBzLiBJIGhhdmUgYWxzbyB1c2VkIE9STXMgbGlrZSBDdWJlLmpzIGFuZCBLbmV4LmpzIHRvIG1vcmUgZWFzaWx5IG1hbmlwdWxhdGUgYW5kIGRpc3BsYXkgZGF0YSFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3Rvcnlib29rLmpzXCIsXG4gICAgaW1hZ2VzOiBbXCJzdG9yeWJvb2tcIl0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkVzc2VudGlhbCB0byBldmVyeSBmcm9udGVuZCBwcm9qZWN0LCBJJ3ZlIHVzZWQgU3Rvcnlib29rIHRvIHZpc3VhbGl6ZSwgdGVzdCwgYW5kIGRldmVsb3AgY29tcG9uZW50cy4gVGhlIG1vc3Qgbm90YWJsZSBwcm9qZWN0IHdhcyBsZXZlcmFnaW5nIFN0b3J5Ym9vayB0byBjcmVhdGUgYSB2aXN1YWwgcmVncmVzc2lvbiBmcmFtZXdvcmsuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlVuaXQgJiBGdW5jdGlvbmFsIFRlc3RpbmdcIixcbiAgICBpbWFnZXM6IFtcImplc3RcIiwgXCJydGxcIl0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkNvcmUgZnVuZGFtZW50YWxzIHRvIGFueSBraW5kIG9mIHRlc3QtZHJpdmVuIGRldmVsb3BtZW50IHRvIGVuc3VyZSBtZXRob2RzIG9yIHN5c3RlbXMgZnVuY3Rpb24gYXMgcHJlc2NyaWJlZCBmb2xsb3dpbmcgQUFBIChBcnJhbmdlLUFjdC1Bc3NlcnQpLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJKaXJhICYgU2NydW1cIixcbiAgICBpbWFnZXM6IFtcImppcmFcIl0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkhhdmUgYWx3YXlzIHdvcmtlZCBpbiBhbiBBZ2lsZSAgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgZm9sbG93aW5nIHNjcnVtIG1ldGhvZG9sb2dpZXMgYW5kIHBhcnRpY2lwYXRpbmcgaW4gdmFyaW91cyBzY3J1bSBjZXJlbW9uaWVzISBKaXJhIGlzIGRlZmluaXRlbHkgaW4gbXkgY29tZm9ydCB6b25lLlwiLFxuICB9LFxuXTtcblxuY29uc3QgU2tpbGxzQ2FyZCA9ICh7IHNraWxsIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdpdGh1Yi1yZXBvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGdhcC0yXCI+XG4gICAgICAgIHtza2lsbC5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC02IHByLTJcIiBzcmM9e2Avc2tpbGxzLWltYWdlcy8ke2ltYWdlfS5wbmdgfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBkYXJrOnRleHQtZ3JheS0yMDAgdGV4dC1zbGF0ZS05MDBcIj5cbiAgICAgICAge3NraWxsLm5hbWV9XG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIG10LTIgbWItNCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1zbGF0ZS0zMDBcIj5cbiAgICAgICAge3NraWxsLmRlc2NyaXB0aW9ufVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGJnLXdoaXRlIGRhcms6Ymctc2xhdGUtNzAwIHB4LVs4dnddIHBiLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgbXktMTBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9yZGVyLWwtNCBib3JkZXItYmx1ZS00MDAgcGwtMiAgdGV4dC00eGwgZm9udC1ib2xkIG15LTJcIj5cbiAgICAgICAgICBXaGF0IEkgZG9cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XG4gICAgICAgICAgSSBoYXZlIG92ZXIgMyB5ZWFycyBvZiBleHBlcmllbmNlIGJ1aWxkaW5nIHNvZnR3YXJlIG9uIGFnaWxlIHRlYW1zIGZvclxuICAgICAgICAgIGVhcmx5IHN0YXJ0dXBzLCBsYXJnZSBjb21wYW5pZXMsIGZpbmFuY2lhbCBjb21wYW5pZXMsIGV0Yy5cbiAgICAgICAgICBBZGRpdGlvbmFsbHksIEkgaGF2ZSBlbmdpbmVlcmVkIHNldmVyYWwgZnVsbCBzdGFjayBhcHBsaWNhdGlvbnMgZHVyaW5nXG4gICAgICAgICAgbXkgdGltZSBhdCBXYXRlcmxvbyB3aXRoIGRpZmZlcmluZyB1c2UgY2FzZXMgYW5kIHN0YWtlaG9sZGVycy4gQmVsb3dcbiAgICAgICAgICBpcyBhIHF1aWNrIG92ZXJ2aWV3IG9mIHRoZSB0b29scyBhbmQgdGVjaG5vbG9naWVzIHRoYXQgSSd2ZSB3b3JrZWRcbiAgICAgICAgICB3aXRoLCBidXQgSSdtIGxvb2tpbmcgdG8gZXhwYW5kIHRoYXQgdG8gbW9yZSBvciBzdHJlbmd0aGVuIHRoZVxuICAgICAgICAgIGtub3dsZWRnZSBJIGhhdmUgYWxyZWFkeSBhY2N1bXVsYXRlZCFcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgdy1mdWxsIGdhcC04IGdhcC15LTVcIj5cbiAgICAgICAge3NraWxscy5tYXAoKHNraWxsLCBpZHgpID0+IChcbiAgICAgICAgICA8U2tpbGxzQ2FyZCBza2lsbD17c2tpbGx9IGtleT17aWR4fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic2tpbGxzIiwibmFtZSIsImltYWdlcyIsImRlc2NyaXB0aW9uIiwiU2tpbGxzQ2FyZCIsInNraWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJoMSIsInAiLCJTa2lsbHMiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skills.js\n"));

/***/ })

});