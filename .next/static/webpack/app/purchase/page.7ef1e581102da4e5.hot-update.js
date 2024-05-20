"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/purchase/page",{

/***/ "(app-pages-browser)/./src/app/purchase/page.tsx":
/*!***********************************!*\
  !*** ./src/app/purchase/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SideMenu */ \"(app-pages-browser)/./src/components/SideMenu.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.tsx\");\n/* harmony import */ var _components_LogoWord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/LogoWord */ \"(app-pages-browser)/./src/components/LogoWord.tsx\");\n/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/slices/authSlice */ \"(app-pages-browser)/./src/store/slices/authSlice.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./src/constants/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Purchase() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [packs, setPacks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_8__.packDetails);\n    console.log(packs);\n    const [selectedNetwork, setSelectedNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ethereum\");\n    const isUserLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.auth.isUserLoggedIn);\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.auth.user);\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.auth.token);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isUserLoggedIn || !user) {\n            console.log(\"User not logged in or user data not available, redirecting...\");\n            (0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__.logout)();\n            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(\"Please login to continue.\");\n        }\n    }, [\n        isUserLoggedIn,\n        user\n    ]);\n    const handleQuantityChange = (index, amount)=>{\n        const newPacks = [\n            ...packs\n        ];\n        newPacks[index].quantity += amount;\n        if (newPacks[index].quantity < 0) newPacks[index].quantity = 0; // Prevent negative quantities\n        setPacks(newPacks);\n    };\n    const getTotalPrice = ()=>{\n        return packs.reduce((acc, pack)=>acc + pack.quantity * pack.price, 0);\n    };\n    const handleNetworkChange = (e)=>{\n        setSelectedNetwork(e.target.value);\n    };\n    const handlePurchase = async ()=>{\n        // Implementation depends on your payment gateway or crypto wallet integration\n        console.log(\"Implement purchase logic here\");\n        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.info(\"Purchase logic needs to be implemented.\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboard-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dashboard-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"stat-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"df ac jc mb30\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LogoWord__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    firstWord: \"MORE WITH\",\n                                    secondWord: \"UPGRADES\"\n                                }, void 0, false, {\n                                    fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this),\n                            packs.map((pack, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rectangle-box mb30\",\n                                    style: {\n                                        backgroundColor: \"#0f0f0f\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"content-col dg ac jc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"row fs30 fw800 c-white\",\n                                                children: pack.rolls + \" rolls per day\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"row c-gray fs20\",\n                                                children: pack.name + \" ($\" + pack.price + \")\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"col\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>handleQuantityChange(index, -1),\n                                                        children: \"-\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"text\",\n                                                        value: pack.quantity,\n                                                        readOnly: true\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>handleQuantityChange(index, 1),\n                                                        children: \"+\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>handleQuantityChange(index, 5),\n                                                        children: \"+5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>handleQuantityChange(index, 10),\n                                                        children: \"+10\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 37\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, this)\n                                }, pack.id, false, {\n                                    fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Total: $\",\n                                    getTotalPrice().toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                onChange: handleNetworkChange,\n                                value: selectedNetwork,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"ethereum\",\n                                        children: \"Ethereum\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"binance\",\n                                        children: \"Binance\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"polygon\",\n                                        children: \"Polygon\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handlePurchase,\n                                children: \"Purchase\"\n                            }, void 0, false, {\n                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s(Purchase, \"eZdD1MJxMhiYd0dIjoNxc56XPms=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector\n    ];\n});\n_c = Purchase;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Purchase);\nvar _c;\n$RefreshReg$(_c, \"Purchase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHVyY2hhc2UvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFJVDtBQUVFO0FBQ0M7QUFDSjtBQUNJO0FBQ0s7QUFDWDtBQUNHO0FBRTFDLFNBQVNXOztJQUNMLE1BQU1DLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUNTLG1EQUFXQTtJQUM5Q0ssUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU1rQixpQkFBaUJoQix3REFBV0EsQ0FBQyxDQUFDaUIsUUFBcUJBLE1BQU1DLElBQUksQ0FBQ0YsY0FBYztJQUNsRixNQUFNRyxPQUFPbkIsd0RBQVdBLENBQUMsQ0FBQ2lCLFFBQXFCQSxNQUFNQyxJQUFJLENBQUNDLElBQUk7SUFDOUQsTUFBTUMsUUFBUXBCLHdEQUFXQSxDQUFDLENBQUNpQixRQUFxQkEsTUFBTUMsSUFBSSxDQUFDRSxLQUFLO0lBRWhFckIsZ0RBQVNBLENBQUM7UUFDTixJQUFJLENBQUNpQixrQkFBa0IsQ0FBQ0csTUFBTTtZQUMxQlAsUUFBUUMsR0FBRyxDQUFDO1lBQ1pSLCtEQUFNQTtZQUNOQyxpREFBS0EsQ0FBQ2UsS0FBSyxDQUFDO1FBQ2hCO0lBQ0osR0FBRztRQUFDTDtRQUFnQkc7S0FBSztJQUV6QixNQUFNRyx1QkFBdUIsQ0FBQ0MsT0FBT0M7UUFDakMsTUFBTUMsV0FBVztlQUFJZjtTQUFNO1FBQzNCZSxRQUFRLENBQUNGLE1BQU0sQ0FBQ0csUUFBUSxJQUFJRjtRQUM1QixJQUFJQyxRQUFRLENBQUNGLE1BQU0sQ0FBQ0csUUFBUSxHQUFHLEdBQUdELFFBQVEsQ0FBQ0YsTUFBTSxDQUFDRyxRQUFRLEdBQUcsR0FBRyw4QkFBOEI7UUFDOUZmLFNBQVNjO0lBQ2I7SUFFQSxNQUFNRSxnQkFBZ0I7UUFDbEIsT0FBT2pCLE1BQU1rQixNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsT0FBU0QsTUFBT0MsS0FBS0osUUFBUSxHQUFHSSxLQUFLQyxLQUFLLEVBQUc7SUFDM0U7SUFFQSxNQUFNQyxzQkFBc0IsQ0FBQ0M7UUFDekJsQixtQkFBbUJrQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDckM7SUFFQSxNQUFNQyxpQkFBaUI7UUFDbkIsOEVBQThFO1FBQzlFeEIsUUFBUUMsR0FBRyxDQUFDO1FBQ1pQLGlEQUFLQSxDQUFDK0IsSUFBSSxDQUFDO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNwQywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDbUM7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDckMsNERBQVFBOzs7OztrQ0FDVCw4REFBQ29DO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNuQyw0REFBUUE7b0NBQUNvQyxXQUFVO29DQUFZQyxZQUFXOzs7Ozs7Ozs7Ozs0QkFFOUMvQixNQUFNZ0MsR0FBRyxDQUFDLENBQUNaLE1BQU1QLHNCQUNkLDhEQUFDZTtvQ0FBSUMsV0FBVTtvQ0FBbUNJLE9BQU87d0NBQUVDLGlCQUFpQjtvQ0FBVTs4Q0FDbEYsNEVBQUNOO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBRVZULEtBQUtlLEtBQUssR0FBRzs7Ozs7OzBEQUVsQiw4REFBQ1A7Z0RBQUlDLFdBQVU7MERBQ1ZULEtBQUtnQixJQUFJLEdBQUcsUUFBUWhCLEtBQUtDLEtBQUssR0FBRzs7Ozs7OzBEQUV0Qyw4REFBQ087Z0RBQUlDLFdBQVU7O2tFQUNYLDhEQUFDUTt3REFBT0MsU0FBUyxJQUFNMUIscUJBQXFCQyxPQUFPLENBQUM7a0VBQUk7Ozs7OztrRUFDeEQsOERBQUMwQjt3REFBTUMsTUFBSzt3REFBT2YsT0FBT0wsS0FBS0osUUFBUTt3REFBRXlCLFFBQVE7Ozs7OztrRUFDakQsOERBQUNKO3dEQUFPQyxTQUFTLElBQU0xQixxQkFBcUJDLE9BQU87a0VBQUk7Ozs7OztrRUFDdkQsOERBQUN3Qjt3REFBT0MsU0FBUyxJQUFNMUIscUJBQXFCQyxPQUFPO2tFQUFJOzs7Ozs7a0VBQ3ZELDhEQUFDd0I7d0RBQU9DLFNBQVMsSUFBTTFCLHFCQUFxQkMsT0FBTztrRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWQzQk8sS0FBS3NCLEVBQUU7Ozs7OzBDQW1CcEQsOERBQUNkOztvQ0FBSTtvQ0FBU1gsZ0JBQWdCMEIsT0FBTyxDQUFDOzs7Ozs7OzBDQUN0Qyw4REFBQ0M7Z0NBQU9DLFVBQVV2QjtnQ0FBcUJHLE9BQU9yQjs7a0RBQzFDLDhEQUFDMEM7d0NBQU9yQixPQUFNO2tEQUFXOzs7Ozs7a0RBQ3pCLDhEQUFDcUI7d0NBQU9yQixPQUFNO2tEQUFVOzs7Ozs7a0RBQ3hCLDhEQUFDcUI7d0NBQU9yQixPQUFNO2tEQUFVOzs7Ozs7Ozs7Ozs7MENBRTVCLDhEQUFDWTtnQ0FBT0MsU0FBU1o7MENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckQ7R0E5RVM1Qjs7UUFDVVAsc0RBQVNBO1FBSURELG9EQUFXQTtRQUNyQkEsb0RBQVdBO1FBQ1ZBLG9EQUFXQTs7O0tBUHBCUTtBQWdGVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3B1cmNoYXNlL3BhZ2UudHN4P2ZjNWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0Avc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBTaWRlTWVudSBmcm9tICdAL2NvbXBvbmVudHMvU2lkZU1lbnUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMb2dvV29yZCBmcm9tICdAL2NvbXBvbmVudHMvTG9nb1dvcmQnO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnQC9zdG9yZS9zbGljZXMvYXV0aFNsaWNlJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgcGFja0RldGFpbHMgfSBmcm9tICdAL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIFB1cmNoYXNlKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtwYWNrcywgc2V0UGFja3NdID0gdXNlU3RhdGUocGFja0RldGFpbHMpO1xuICAgIGNvbnNvbGUubG9nKHBhY2tzKVxuICAgIGNvbnN0IFtzZWxlY3RlZE5ldHdvcmssIHNldFNlbGVjdGVkTmV0d29ya10gPSB1c2VTdGF0ZSgnZXRoZXJldW0nKTtcbiAgICBjb25zdCBpc1VzZXJMb2dnZWRJbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hdXRoLmlzVXNlckxvZ2dlZEluKTtcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF1dGgudXNlcik7XG4gICAgY29uc3QgdG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYXV0aC50b2tlbik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWlzVXNlckxvZ2dlZEluIHx8ICF1c2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgbm90IGxvZ2dlZCBpbiBvciB1c2VyIGRhdGEgbm90IGF2YWlsYWJsZSwgcmVkaXJlY3RpbmcuLi5cIik7XG4gICAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdQbGVhc2UgbG9naW4gdG8gY29udGludWUuJyk7XG4gICAgICAgIH1cbiAgICB9LCBbaXNVc2VyTG9nZ2VkSW4sIHVzZXJdKTtcblxuICAgIGNvbnN0IGhhbmRsZVF1YW50aXR5Q2hhbmdlID0gKGluZGV4LCBhbW91bnQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFja3MgPSBbLi4ucGFja3NdO1xuICAgICAgICBuZXdQYWNrc1tpbmRleF0ucXVhbnRpdHkgKz0gYW1vdW50O1xuICAgICAgICBpZiAobmV3UGFja3NbaW5kZXhdLnF1YW50aXR5IDwgMCkgbmV3UGFja3NbaW5kZXhdLnF1YW50aXR5ID0gMDsgLy8gUHJldmVudCBuZWdhdGl2ZSBxdWFudGl0aWVzXG4gICAgICAgIHNldFBhY2tzKG5ld1BhY2tzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG90YWxQcmljZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhY2tzLnJlZHVjZSgoYWNjLCBwYWNrKSA9PiBhY2MgKyAocGFjay5xdWFudGl0eSAqIHBhY2sucHJpY2UpLCAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTmV0d29ya0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkTmV0d29yayhlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVB1cmNoYXNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBJbXBsZW1lbnRhdGlvbiBkZXBlbmRzIG9uIHlvdXIgcGF5bWVudCBnYXRld2F5IG9yIGNyeXB0byB3YWxsZXQgaW50ZWdyYXRpb25cbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBsZW1lbnQgcHVyY2hhc2UgbG9naWMgaGVyZVwiKTtcbiAgICAgICAgdG9hc3QuaW5mbyhcIlB1cmNoYXNlIGxvZ2ljIG5lZWRzIHRvIGJlIGltcGxlbWVudGVkLlwiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPFNpZGVNZW51IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRmIGFjIGpjIG1iMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvV29yZCBmaXJzdFdvcmQ9XCJNT1JFIFdJVEhcIiBzZWNvbmRXb3JkPVwiVVBHUkFERVNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3BhY2tzLm1hcCgocGFjaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlLWJveCBtYjMwXCIga2V5PXtwYWNrLmlkfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMGYwZjBmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sIGRnIGFjIGpjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZzMzAgZnc4MDAgYy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhY2sucm9sbHMgKyAnIHJvbGxzIHBlciBkYXknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYy1ncmF5IGZzMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWNrLm5hbWUgKyAnICgkJyArIHBhY2sucHJpY2UgKyAnKSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdWFudGl0eUNoYW5nZShpbmRleCwgLTEpfT4tPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cGFjay5xdWFudGl0eX0gcmVhZE9ubHkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUXVhbnRpdHlDaGFuZ2UoaW5kZXgsIDEpfT4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVF1YW50aXR5Q2hhbmdlKGluZGV4LCA1KX0+KzU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUXVhbnRpdHlDaGFuZ2UoaW5kZXgsIDEwKX0+KzEwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRvdGFsOiAke2dldFRvdGFsUHJpY2UoKS50b0ZpeGVkKDIpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVOZXR3b3JrQ2hhbmdlfSB2YWx1ZT17c2VsZWN0ZWROZXR3b3JrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJldGhlcmV1bVwiPkV0aGVyZXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmluYW5jZVwiPkJpbmFuY2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb2x5Z29uXCI+UG9seWdvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQdXJjaGFzZX0+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJTaWRlTWVudSIsIkhlYWRlciIsIkxvZ29Xb3JkIiwibG9nb3V0IiwidG9hc3QiLCJwYWNrRGV0YWlscyIsIlB1cmNoYXNlIiwicm91dGVyIiwicGFja3MiLCJzZXRQYWNrcyIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZE5ldHdvcmsiLCJzZXRTZWxlY3RlZE5ldHdvcmsiLCJpc1VzZXJMb2dnZWRJbiIsInN0YXRlIiwiYXV0aCIsInVzZXIiLCJ0b2tlbiIsImVycm9yIiwiaGFuZGxlUXVhbnRpdHlDaGFuZ2UiLCJpbmRleCIsImFtb3VudCIsIm5ld1BhY2tzIiwicXVhbnRpdHkiLCJnZXRUb3RhbFByaWNlIiwicmVkdWNlIiwiYWNjIiwicGFjayIsInByaWNlIiwiaGFuZGxlTmV0d29ya0NoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVB1cmNoYXNlIiwiaW5mbyIsImRpdiIsImNsYXNzTmFtZSIsImZpcnN0V29yZCIsInNlY29uZFdvcmQiLCJtYXAiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInJvbGxzIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJyZWFkT25seSIsImlkIiwidG9GaXhlZCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/purchase/page.tsx\n"));

/***/ })

});