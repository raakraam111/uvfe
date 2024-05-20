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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SideMenu */ \"(app-pages-browser)/./src/components/SideMenu.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.tsx\");\n/* harmony import */ var _components_LogoWord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/LogoWord */ \"(app-pages-browser)/./src/components/LogoWord.tsx\");\n/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/slices/authSlice */ \"(app-pages-browser)/./src/store/slices/authSlice.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./src/constants/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Purchase() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [packs, setPacks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_8__.packDetails);\n    console.log(packs);\n    const [selectedNetwork, setSelectedNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ethereum\");\n    const isUserLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.auth.isUserLoggedIn);\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.auth.user);\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.auth.token);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isUserLoggedIn || !user) {\n            console.log(\"User not logged in or user data not available, redirecting...\");\n            (0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__.logout)();\n            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(\"Please login to continue.\");\n        }\n    }, [\n        isUserLoggedIn,\n        user\n    ]);\n    const handleQuantityChange = (index, amount)=>{\n        const newPacks = [\n            ...packs\n        ];\n        newPacks[index].quantity += amount;\n        if (newPacks[index].quantity < 0) newPacks[index].quantity = 0; // Prevent negative quantities\n        setPacks(newPacks);\n    };\n    const getTotalPrice = ()=>{\n        return packs.reduce((acc, pack)=>acc + pack.quantity * pack.price, 0);\n    };\n    const handleNetworkChange = (e)=>{\n        setSelectedNetwork(e.target.value);\n    };\n    const handlePurchase = async ()=>{\n        // Implementation depends on your payment gateway or crypto wallet integration\n        console.log(\"Implement purchase logic here\");\n        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.info(\"Purchase logic needs to be implemented.\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboard-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dashboard-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"stat-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"df ac jc mb30\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LogoWord__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    firstWord: \"MORE WITH\",\n                                    secondWord: \"UPGRADES\"\n                                }, void 0, false, {\n                                    fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this),\n                            packs.map((pack, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rectangle-box mb30\",\n                                    style: {\n                                        backgroundColor: \"#0f0f0f\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"content-col dg ac jc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"row fs30 fw800 c-white\",\n                                                children: pack + \" rolls per day\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"row c-gray fs20\",\n                                                children: pack.name + \" ($\" + pack.price + \")\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"col\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>handleQuantityChange(index, -1),\n                                                        children: \"-\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"text\",\n                                                        value: pack.quantity,\n                                                        readOnly: true\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>handleQuantityChange(index, 1),\n                                                        children: \"+\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>handleQuantityChange(index, 5),\n                                                        children: \"+5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>handleQuantityChange(index, 10),\n                                                        children: \"+10\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 37\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, this)\n                                }, pack.id, false, {\n                                    fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Total: $\",\n                                    getTotalPrice().toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                onChange: handleNetworkChange,\n                                value: selectedNetwork,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"ethereum\",\n                                        children: \"Ethereum\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"binance\",\n                                        children: \"Binance\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"polygon\",\n                                        children: \"Polygon\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handlePurchase,\n                                children: \"Purchase\"\n                            }, void 0, false, {\n                                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/spyder/spyder-projects/upside-vault-web/frontend/src/app/purchase/page.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s(Purchase, \"eZdD1MJxMhiYd0dIjoNxc56XPms=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector\n    ];\n});\n_c = Purchase;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Purchase);\nvar _c;\n$RefreshReg$(_c, \"Purchase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHVyY2hhc2UvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFJVDtBQUVFO0FBQ0M7QUFDSjtBQUNJO0FBQ0s7QUFDWDtBQUNHO0FBRTFDLFNBQVNXOztJQUNMLE1BQU1DLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUNTLG1EQUFXQTtJQUM5Q0ssUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU1rQixpQkFBaUJoQix3REFBV0EsQ0FBQyxDQUFDaUIsUUFBcUJBLE1BQU1DLElBQUksQ0FBQ0YsY0FBYztJQUNsRixNQUFNRyxPQUFPbkIsd0RBQVdBLENBQUMsQ0FBQ2lCLFFBQXFCQSxNQUFNQyxJQUFJLENBQUNDLElBQUk7SUFDOUQsTUFBTUMsUUFBUXBCLHdEQUFXQSxDQUFDLENBQUNpQixRQUFxQkEsTUFBTUMsSUFBSSxDQUFDRSxLQUFLO0lBRWhFckIsZ0RBQVNBLENBQUM7UUFDTixJQUFJLENBQUNpQixrQkFBa0IsQ0FBQ0csTUFBTTtZQUMxQlAsUUFBUUMsR0FBRyxDQUFDO1lBQ1pSLCtEQUFNQTtZQUNOQyxpREFBS0EsQ0FBQ2UsS0FBSyxDQUFDO1FBQ2hCO0lBQ0osR0FBRztRQUFDTDtRQUFnQkc7S0FBSztJQUV6QixNQUFNRyx1QkFBdUIsQ0FBQ0MsT0FBT0M7UUFDakMsTUFBTUMsV0FBVztlQUFJZjtTQUFNO1FBQzNCZSxRQUFRLENBQUNGLE1BQU0sQ0FBQ0csUUFBUSxJQUFJRjtRQUM1QixJQUFJQyxRQUFRLENBQUNGLE1BQU0sQ0FBQ0csUUFBUSxHQUFHLEdBQUdELFFBQVEsQ0FBQ0YsTUFBTSxDQUFDRyxRQUFRLEdBQUcsR0FBRyw4QkFBOEI7UUFDOUZmLFNBQVNjO0lBQ2I7SUFFQSxNQUFNRSxnQkFBZ0I7UUFDbEIsT0FBT2pCLE1BQU1rQixNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsT0FBU0QsTUFBT0MsS0FBS0osUUFBUSxHQUFHSSxLQUFLQyxLQUFLLEVBQUc7SUFDM0U7SUFFQSxNQUFNQyxzQkFBc0IsQ0FBQ0M7UUFDekJsQixtQkFBbUJrQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDckM7SUFFQSxNQUFNQyxpQkFBaUI7UUFDbkIsOEVBQThFO1FBQzlFeEIsUUFBUUMsR0FBRyxDQUFDO1FBQ1pQLGlEQUFLQSxDQUFDK0IsSUFBSSxDQUFDO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNwQywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDbUM7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDckMsNERBQVFBOzs7OztrQ0FDVCw4REFBQ29DO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNuQyw0REFBUUE7b0NBQUNvQyxXQUFVO29DQUFZQyxZQUFXOzs7Ozs7Ozs7Ozs0QkFFOUMvQixNQUFNZ0MsR0FBRyxDQUFDLENBQUNaLE1BQU1QLHNCQUNkLDhEQUFDZTtvQ0FBSUMsV0FBVTtvQ0FBbUNJLE9BQU87d0NBQUVDLGlCQUFpQjtvQ0FBVTs4Q0FDbEYsNEVBQUNOO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBRVZULE9BQVE7Ozs7OzswREFFYiw4REFBQ1E7Z0RBQUlDLFdBQVU7MERBQ1ZULEtBQUtlLElBQUksR0FBRyxRQUFRZixLQUFLQyxLQUFLLEdBQUc7Ozs7OzswREFFdEMsOERBQUNPO2dEQUFJQyxXQUFVOztrRUFDWCw4REFBQ087d0RBQU9DLFNBQVMsSUFBTXpCLHFCQUFxQkMsT0FBTyxDQUFDO2tFQUFJOzs7Ozs7a0VBQ3hELDhEQUFDeUI7d0RBQU1DLE1BQUs7d0RBQU9kLE9BQU9MLEtBQUtKLFFBQVE7d0RBQUV3QixRQUFROzs7Ozs7a0VBQ2pELDhEQUFDSjt3REFBT0MsU0FBUyxJQUFNekIscUJBQXFCQyxPQUFPO2tFQUFJOzs7Ozs7a0VBQ3ZELDhEQUFDdUI7d0RBQU9DLFNBQVMsSUFBTXpCLHFCQUFxQkMsT0FBTztrRUFBSTs7Ozs7O2tFQUN2RCw4REFBQ3VCO3dEQUFPQyxTQUFTLElBQU16QixxQkFBcUJDLE9BQU87a0VBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FkM0JPLEtBQUtxQixFQUFFOzs7OzswQ0FtQnBELDhEQUFDYjs7b0NBQUk7b0NBQVNYLGdCQUFnQnlCLE9BQU8sQ0FBQzs7Ozs7OzswQ0FDdEMsOERBQUNDO2dDQUFPQyxVQUFVdEI7Z0NBQXFCRyxPQUFPckI7O2tEQUMxQyw4REFBQ3lDO3dDQUFPcEIsT0FBTTtrREFBVzs7Ozs7O2tEQUN6Qiw4REFBQ29CO3dDQUFPcEIsT0FBTTtrREFBVTs7Ozs7O2tEQUN4Qiw4REFBQ29CO3dDQUFPcEIsT0FBTTtrREFBVTs7Ozs7Ozs7Ozs7OzBDQUU1Qiw4REFBQ1c7Z0NBQU9DLFNBQVNYOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JEO0dBOUVTNUI7O1FBQ1VQLHNEQUFTQTtRQUlERCxvREFBV0E7UUFDckJBLG9EQUFXQTtRQUNWQSxvREFBV0E7OztLQVBwQlE7QUFnRlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wdXJjaGFzZS9wYWdlLnRzeD9mYzViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQC91dGlscy9jb25maWcnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnQC9jb21wb25lbnRzL1NpZGVNZW51JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTG9nb1dvcmQgZnJvbSAnQC9jb21wb25lbnRzL0xvZ29Xb3JkJztcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJ0Avc3RvcmUvc2xpY2VzL2F1dGhTbGljZSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IHBhY2tEZXRhaWxzIH0gZnJvbSAnQC9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBQdXJjaGFzZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbcGFja3MsIHNldFBhY2tzXSA9IHVzZVN0YXRlKHBhY2tEZXRhaWxzKTtcbiAgICBjb25zb2xlLmxvZyhwYWNrcylcbiAgICBjb25zdCBbc2VsZWN0ZWROZXR3b3JrLCBzZXRTZWxlY3RlZE5ldHdvcmtdID0gdXNlU3RhdGUoJ2V0aGVyZXVtJyk7XG4gICAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc1VzZXJMb2dnZWRJbik7XG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXIpO1xuICAgIGNvbnN0IHRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF1dGgudG9rZW4pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFpc1VzZXJMb2dnZWRJbiB8fCAhdXNlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIG5vdCBsb2dnZWQgaW4gb3IgdXNlciBkYXRhIG5vdCBhdmFpbGFibGUsIHJlZGlyZWN0aW5nLi4uXCIpO1xuICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcignUGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlLicpO1xuICAgICAgICB9XG4gICAgfSwgW2lzVXNlckxvZ2dlZEluLCB1c2VyXSk7XG5cbiAgICBjb25zdCBoYW5kbGVRdWFudGl0eUNoYW5nZSA9IChpbmRleCwgYW1vdW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhY2tzID0gWy4uLnBhY2tzXTtcbiAgICAgICAgbmV3UGFja3NbaW5kZXhdLnF1YW50aXR5ICs9IGFtb3VudDtcbiAgICAgICAgaWYgKG5ld1BhY2tzW2luZGV4XS5xdWFudGl0eSA8IDApIG5ld1BhY2tzW2luZGV4XS5xdWFudGl0eSA9IDA7IC8vIFByZXZlbnQgbmVnYXRpdmUgcXVhbnRpdGllc1xuICAgICAgICBzZXRQYWNrcyhuZXdQYWNrcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRvdGFsUHJpY2UgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYWNrcy5yZWR1Y2UoKGFjYywgcGFjaykgPT4gYWNjICsgKHBhY2sucXVhbnRpdHkgKiBwYWNrLnByaWNlKSwgMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU5ldHdvcmtDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE5ldHdvcmsoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVQdXJjaGFzZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gSW1wbGVtZW50YXRpb24gZGVwZW5kcyBvbiB5b3VyIHBheW1lbnQgZ2F0ZXdheSBvciBjcnlwdG8gd2FsbGV0IGludGVncmF0aW9uXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW1wbGVtZW50IHB1cmNoYXNlIGxvZ2ljIGhlcmVcIik7XG4gICAgICAgIHRvYXN0LmluZm8oXCJQdXJjaGFzZSBsb2dpYyBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZC5cIik7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxTaWRlTWVudSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZiBhYyBqYyBtYjMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nb1dvcmQgZmlyc3RXb3JkPVwiTU9SRSBXSVRIXCIgc2Vjb25kV29yZD1cIlVQR1JBREVTXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtwYWNrcy5tYXAoKHBhY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3RhbmdsZS1ib3ggbWIzMFwiIGtleT17cGFjay5pZH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzBmMGYwZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbCBkZyBhYyBqY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmczMwIGZ3ODAwIGMtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWNrICArICcgcm9sbHMgcGVyIGRheSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjLWdyYXkgZnMyMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhY2submFtZSArICcgKCQnICsgcGFjay5wcmljZSArICcpJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVF1YW50aXR5Q2hhbmdlKGluZGV4LCAtMSl9Pi08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtwYWNrLnF1YW50aXR5fSByZWFkT25seSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdWFudGl0eUNoYW5nZShpbmRleCwgMSl9Pis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUXVhbnRpdHlDaGFuZ2UoaW5kZXgsIDUpfT4rNTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdWFudGl0eUNoYW5nZShpbmRleCwgMTApfT4rMTA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VG90YWw6ICR7Z2V0VG90YWxQcmljZSgpLnRvRml4ZWQoMil9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZU5ldHdvcmtDaGFuZ2V9IHZhbHVlPXtzZWxlY3RlZE5ldHdvcmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImV0aGVyZXVtXCI+RXRoZXJldW08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiaW5hbmNlXCI+QmluYW5jZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbHlnb25cIj5Qb2x5Z29uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVB1cmNoYXNlfT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsIlNpZGVNZW51IiwiSGVhZGVyIiwiTG9nb1dvcmQiLCJsb2dvdXQiLCJ0b2FzdCIsInBhY2tEZXRhaWxzIiwiUHVyY2hhc2UiLCJyb3V0ZXIiLCJwYWNrcyIsInNldFBhY2tzIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkTmV0d29yayIsInNldFNlbGVjdGVkTmV0d29yayIsImlzVXNlckxvZ2dlZEluIiwic3RhdGUiLCJhdXRoIiwidXNlciIsInRva2VuIiwiZXJyb3IiLCJoYW5kbGVRdWFudGl0eUNoYW5nZSIsImluZGV4IiwiYW1vdW50IiwibmV3UGFja3MiLCJxdWFudGl0eSIsImdldFRvdGFsUHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJwYWNrIiwicHJpY2UiLCJoYW5kbGVOZXR3b3JrQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUHVyY2hhc2UiLCJpbmZvIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlyc3RXb3JkIiwic2Vjb25kV29yZCIsIm1hcCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJyZWFkT25seSIsImlkIiwidG9GaXhlZCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/purchase/page.tsx\n"));

/***/ })

});