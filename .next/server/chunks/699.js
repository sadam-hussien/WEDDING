"use strict";
exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 4699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4528);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var _modules_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5753);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Api(token) {
    const tokenInCookes = token ? token : js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("access_token");
    const appClient = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: "https://ahmedsprofile.com/api/",
        headers: {
            Authorization: `Bearer ${tokenInCookes}`,
            Accept: "application/json",
            ContentType: "application/json",
            "Accept-Language": "ar",
            "Content-Language": "ar"
        }
    });
    appClient.interceptors.response.use((response)=>{
        return response.data;
    }, (error)=>{
        const msg = error?.response?.data?.message || error?.response?.data?.msg;
        const errors = [
            "Unauthenticated",
            "you don't have a verified email"
        ];
        if (errors.includes(msg)) {
            js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("access_token");
            _store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dispatch */ .Z.dispatch((0,_modules_auth_store__WEBPACK_IMPORTED_MODULE_3__/* .logout */ .kS)());
            window.location.href = "/auth";
        }
        return Promise.reject(error.response);
    });
    return appClient;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;