"use strict";
(() => {
var exports = {};
exports.id = 344;
exports.ids = [344];
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

/***/ 4800:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_auth_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3593);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5949);
/* harmony import */ var _modules_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2485);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_auth_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5753);
/* harmony import */ var _layout_authLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3716);
/* harmony import */ var _modules_auth_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4897);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4597);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_auth_server__WEBPACK_IMPORTED_MODULE_10__, js_cookie__WEBPACK_IMPORTED_MODULE_13__]);
([_modules_auth_server__WEBPACK_IMPORTED_MODULE_10__, js_cookie__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Login() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { mutate , isLoading  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_11__/* .usePost */ .uV)({
        queryFn: _modules_auth_server__WEBPACK_IMPORTED_MODULE_10__/* .api_login */ .fe,
        alert: false
    });
    const handleSubmit = (values)=>{
        mutate(values, {
            onSuccess: (data)=>{
                if (data?.data?.email_verified_at) {
                    js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].set("access_token", data.access_token, {
                        expires: data.expires_in
                    });
                    dispatch((0,_modules_auth_store__WEBPACK_IMPORTED_MODULE_8__/* .login */ .x4)(data));
                    router.push("/profile");
                } else {
                    router.push(`/auth/verify-email?token=${data.access_token}`);
                }
            },
            onError: (error)=>{
                // token=${res.access_token}
                console.log(error);
            }
        });
    };
    const schema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_3__.string().email("ادخل بريد كويس").required("البريد الالكترونى مطلوب"),
        password: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("كلمة السر مطلوبة")
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "login",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components__WEBPACK_IMPORTED_MODULE_4__/* .FormHeader */ .ph, {
                title: "ليس لديك حساب؟",
                link: "انشاء حساب",
                path: "/auth/register",
                noBack: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components__WEBPACK_IMPORTED_MODULE_4__/* .FormTitle */ .vw, {
                title: "تسجيل الدخول",
                subtitle: "ادخل البريد الالكترونى وكلمة السر للدخول الى لوحة التحكم"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                initialValues: {
                    email: "",
                    password: ""
                },
                onSubmit: handleSubmit,
                validationSchema: schema,
                children: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                        children: [
                            _modules_auth_constants__WEBPACK_IMPORTED_MODULE_6__/* .login_fields.map */ .lK.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .InputWithIcon */ .Wu, {
                                    id: item.id,
                                    type: item.type,
                                    name: item.name,
                                    placeholder: item.placeholder,
                                    icon: item.icon,
                                    noBorder: item.noBorder
                                }, index)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components__WEBPACK_IMPORTED_MODULE_4__/* .FormSubmit */ .Ow, {
                                title: "تسجيل الدخول",
                                loading: isLoading
                            })
                        ]
                    })
            })
        ]
    });
}
Login.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_authLayout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

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
var __webpack_exports__ = __webpack_require__.X(0, [538,251,528,699,569,485], () => (__webpack_exec__(4800)));
module.exports = __webpack_exports__;

})();