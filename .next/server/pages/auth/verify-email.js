"use strict";
(() => {
var exports = {};
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 4897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EH": () => (/* binding */ api_verify_email),
/* harmony export */   "fe": () => (/* binding */ api_login),
/* harmony export */   "uX": () => (/* binding */ api_register),
/* harmony export */   "z3": () => (/* binding */ api_resend_email)
/* harmony export */ });
/* harmony import */ var _server_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_axios__WEBPACK_IMPORTED_MODULE_0__]);
_server_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function api_login(data) {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().post("auth/login", data);
}
function api_register(data) {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().post("register", data);
}
function api_verify_email(token, data) {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(token).post("auth/account/verify", data);
}
function api_resend_email(token) {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(token).post("auth/account/otp/resend");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VerifyEmail),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_auth_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3593);
/* harmony import */ var _layout_authLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3716);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4254);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4597);
/* harmony import */ var _modules_auth_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4897);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_auth_server__WEBPACK_IMPORTED_MODULE_6__]);
_modules_auth_server__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function VerifyEmail() {
    const { query , replace  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { mutate , isLoading  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .usePost */ .uV)({
        queryFn: (d)=>(0,_modules_auth_server__WEBPACK_IMPORTED_MODULE_6__/* .api_verify_email */ .EH)(d.token, d.otp)
    });
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("otp", otp);
        mutate({
            otp: formData,
            token: query.token
        }, {
            onSuccess: (res)=>{
                if (res.msg === "Your email has been verified") {
                    replace("/auth/login");
                }
            }
        });
    }
    const { mutate: mutateResendOpt , isLoading: isLoadingResend  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .usePost */ .uV)({
        queryFn: _modules_auth_server__WEBPACK_IMPORTED_MODULE_6__/* .api_resend_email */ .z3
    });
    function resendCode() {
        mutateResendOpt(query.token);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "verify",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components__WEBPACK_IMPORTED_MODULE_1__/* .FormHeader */ .ph, {
                title: "ليس لديك حساب؟",
                link: "انشاء حساب",
                path: "/auth/register"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components__WEBPACK_IMPORTED_MODULE_1__/* .FormTitle */ .vw, {
                title: "تفعيل الحساب",
                subtitle: "تم ارسال رمز التحقيق الى البريد الالكترونى الخاص بك"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_3___default()), {
                        value: otp,
                        onChange: setOtp,
                        numInputs: 6,
                        // renderSeparator={<span>-</span>}
                        renderInput: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...props,
                                className: "input-code"
                            }),
                        containerStyle: {
                            gap: "25px",
                            justifyContent: "flex-start"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex align-items-center gap-4 mt-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .ButtonWithIcon */ .Ai, {
                                type: "submit",
                                title: "تحقق",
                                loading: isLoading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .ButtonWithIcon */ .Ai, {
                                variant: "secondary ",
                                type: "button",
                                title: "اعادة ارسال رمز التحقق",
                                loading: isLoadingResend,
                                onClick: resendCode,
                                style: {
                                    minWidth: "200px",
                                    backgroundColor: "transparent",
                                    height: "auto",
                                    padding: 0,
                                    border: "none",
                                    color: "var(--text)"
                                },
                                classes: "resend-code-btn",
                                icon: "las la-redo-alt"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
VerifyEmail.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_authLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: page
    });
};
// if user is logged in redirect to home page
async function getServerSideProps({ req  }) {
    const isAuth = req.cookies.access_token;
    if (isAuth) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 983:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 1189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 4254:
/***/ ((module) => {

module.exports = require("react-otp-input");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 8936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("sweetalert2-react-content");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [538,251,528,699,569], () => (__webpack_exec__(4942)));
module.exports = __webpack_exports__;

})();