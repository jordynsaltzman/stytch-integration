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
exports.id = "pages/dash";
exports.ids = ["pages/dash"];
exports.modules = {

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
var __webpack_exports__ = (__webpack_exec__("./pages/dash.jsx"));
module.exports = __webpack_exports__;

})();