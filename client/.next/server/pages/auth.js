"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth";
exports.ids = ["pages/auth"];
exports.modules = {

/***/ "./pages/auth.jsx":
/*!************************!*\
  !*** ./pages/auth.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Auth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _dash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash */ \"./pages/dash.jsx\");\n\n\n\n\n\n\nfunction Auth() {\n    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const cookie = new (universal_cookie__WEBPACK_IMPORTED_MODULE_4___default())();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // if (typeof token !== \"string\") {\n    //   throw new Error(\"No valid token provided.\");\n    // }\n    // console.log(\"TOKEN\", router.query.token);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const authenticate = ()=>{\n            axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:3001/auth\", {\n                token: String(router.query.token)\n            }).then((res)=>{\n                setAuth(true);\n                console.log(\"RESPONSE THAT WE GET BACK\", res.data);\n            // cookie.set(\"sessionToken\", router.query.token);\n            }).catch((err)=>console.log(err)\n            );\n        };\n        authenticate();\n    // Axios.post(\"http://localhost:3001/auth\", {\n    //   token: String(router.query.token),\n    // }).then((response) => {\n    //   console.log(\"RESPONSE!\", response.data)\n    //   cookie.set(\"sessionToken\", response.data);\n    // }).catch(err => console.log(\"ERROR\", err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {}, void 0, false, {\n        fileName: \"/Users/jordynsaltzman/dome/stytch-test-app/client/pages/auth.jsx\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUN6QjtBQUNjO0FBQ0Q7QUFDYjtBQUVYLFNBQVNPLElBQUksR0FBRztJQUM3QixNQUFNLEVBUFIsR0FPU0MsSUFBSSxHQVBiLEdBT2VDLE9BQU8sTUFBSVAsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDdkMsTUFBTVEsTUFBTSxHQUFHLElBQUlMLHlEQUFPLEVBQUU7SUFDNUIsTUFBTU0sTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBRTFCLG1DQUFtQztJQUNuQyxpREFBaUQ7SUFDakQsSUFBSTtJQUNKLDRDQUE0QztJQUU1Q0osc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLE1BQU1ZLFlBQVksR0FBRyxJQUFNO1lBQ3pCVCxpREFBVSxDQUFDLDRCQUE0QixFQUFFO2dCQUFFVyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0osTUFBTSxDQUFDSyxLQUFLLENBQUNGLEtBQUssQ0FBQzthQUFFLENBQUMsQ0FDNUVHLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUs7Z0JBQ2JULE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZFUsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUM7WUFDbkQsa0RBQWtEO2FBQ25ELENBQUMsQ0FDREMsS0FBSyxDQUFDLENBQUNDLEdBQUcsR0FBS0osT0FBTyxDQUFDQyxHQUFHLENBQUNHLEdBQUcsQ0FBQztZQUFBLENBQUMsQ0FBQztTQUNyQztRQUNEWCxZQUFZLEVBQUUsQ0FBQztJQUVmLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QywrQ0FBK0M7SUFDL0MsOENBQThDO0tBQy9DLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBTyw4REFBQ1osdURBQWM7Ozs7WUFBRyxDQUFDO0NBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXV0aC5qc3g/ZGEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xuaW1wb3J0IERhc2ggZnJvbSBcIi4vZGFzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNvb2tpZSA9IG5ldyBDb29raWVzKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGlmICh0eXBlb2YgdG9rZW4gIT09IFwic3RyaW5nXCIpIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJObyB2YWxpZCB0b2tlbiBwcm92aWRlZC5cIik7XG4gIC8vIH1cbiAgLy8gY29uc29sZS5sb2coXCJUT0tFTlwiLCByb3V0ZXIucXVlcnkudG9rZW4pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXV0aGVudGljYXRlID0gKCkgPT4ge1xuICAgICAgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRoXCIsIHsgdG9rZW46IFN0cmluZyhyb3V0ZXIucXVlcnkudG9rZW4pIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzZXRBdXRoKHRydWUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTUE9OU0UgVEhBVCBXRSBHRVQgQkFDS1wiLCByZXMuZGF0YSk7XG4gICAgICAgICAgLy8gY29va2llLnNldChcInNlc3Npb25Ub2tlblwiLCByb3V0ZXIucXVlcnkudG9rZW4pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfTtcbiAgICBhdXRoZW50aWNhdGUoKTtcblxuICAgIC8vIEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0aFwiLCB7XG4gICAgLy8gICB0b2tlbjogU3RyaW5nKHJvdXRlci5xdWVyeS50b2tlbiksXG4gICAgLy8gfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiUkVTUE9OU0UhXCIsIHJlc3BvbnNlLmRhdGEpXG4gICAgLy8gICBjb29raWUuc2V0KFwic2Vzc2lvblRva2VuXCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgIC8vIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycikpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCAvPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXhpb3MiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiRGFzaCIsIkF1dGgiLCJhdXRoIiwic2V0QXV0aCIsImNvb2tpZSIsInJvdXRlciIsImF1dGhlbnRpY2F0ZSIsInBvc3QiLCJ0b2tlbiIsIlN0cmluZyIsInF1ZXJ5IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJGcmFnbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth.jsx\n");

/***/ }),

/***/ "./pages/dash.jsx":
/*!************************!*\
  !*** ./pages/dash.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Dash = ()=>{\n    const cookie = new (universal_cookie__WEBPACK_IMPORTED_MODULE_2___default())();\n    const testAPI = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:3001/test\", {}, {\n            headers: {\n                sessiontoken: cookie.get(\"sessionToken\").session_token\n            }\n        }).then((resp)=>{\n            alert(resp.data);\n        }).catch((err)=>{\n            alert(\"USER NOT AUTHENTICATED\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"DASHBOARD\"\n            }, void 0, false, {\n                fileName: \"/Users/jordynsaltzman/dome/stytch-test-app/client/pages/dash.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: testAPI,\n                children: \"Test API\"\n            }, void 0, false, {\n                fileName: \"/Users/jordynsaltzman/dome/stytch-test-app/client/pages/dash.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jordynsaltzman/dome/stytch-test-app/client/pages/dash.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dash);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDYTtBQUV2QyxNQUFNRSxJQUFJLEdBQUcsSUFBTTtJQUNqQixNQUFNQyxNQUFNLEdBQUcsSUFBSUYseURBQU8sRUFBRTtJQUU1QixNQUFNRyxPQUFPLEdBQUcsSUFBTTtRQUNwQkosaURBQVUsQ0FDUiw0QkFBNEIsRUFDNUIsRUFBRSxFQUNGO1lBQUVNLE9BQU8sRUFBRTtnQkFBRUMsWUFBWSxFQUFFSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsYUFBYTthQUFFO1NBQUUsQ0FDeEUsQ0FDRUMsSUFBSSxDQUFDLENBQUNDLElBQUksR0FBSztZQUNkQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUNEQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1lBQ2RILEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQ2pDLENBQUMsQ0FBQztLQUNOO0lBRUQscUJBQ0UsOERBQUNJLEtBQUc7OzBCQUNGLDhEQUFDQyxHQUFDOzBCQUFDLFdBQVM7Ozs7O3lCQUFJOzBCQUNoQiw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFZixPQUFPOzBCQUFFLFVBQVE7Ozs7O3lCQUFTOzs7Ozs7aUJBQ3ZDLENBQ047Q0FDSDtBQUVELGlFQUFlRixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9kYXNoLmpzeD81MGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5cbmNvbnN0IERhc2ggPSAoKSA9PiB7XG4gIGNvbnN0IGNvb2tpZSA9IG5ldyBDb29raWVzKCk7XG5cbiAgY29uc3QgdGVzdEFQSSA9ICgpID0+IHtcbiAgICBBeGlvcy5wb3N0KFxuICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdGVzdFwiLFxuICAgICAge30sXG4gICAgICB7IGhlYWRlcnM6IHsgc2Vzc2lvbnRva2VuOiBjb29raWUuZ2V0KFwic2Vzc2lvblRva2VuXCIpLnNlc3Npb25fdG9rZW4gfSB9XG4gICAgKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgYWxlcnQocmVzcC5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhbGVydChcIlVTRVIgTk9UIEFVVEhFTlRJQ0FURURcIik7XG4gICAgICB9KTtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPkRBU0hCT0FSRDwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGVzdEFQSX0+VGVzdCBBUEk8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaDtcbiJdLCJuYW1lcyI6WyJBeGlvcyIsIkNvb2tpZXMiLCJEYXNoIiwiY29va2llIiwidGVzdEFQSSIsInBvc3QiLCJoZWFkZXJzIiwic2Vzc2lvbnRva2VuIiwiZ2V0Iiwic2Vzc2lvbl90b2tlbiIsInRoZW4iLCJyZXNwIiwiYWxlcnQiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dash.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth.jsx"));
module.exports = __webpack_exports__;

})();