"use strict";
(() => {
var exports = {};
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 2709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reset),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_auth_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3593);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5949);
/* harmony import */ var _modules_auth_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2485);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout_authLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3716);



// import { Navigate, useLocation, useNavigate } from "react-router-dom";







function Reset() {
    const { state: email  } = {
        state: ""
    };
    const { push: navigate , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    console.log(query);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const schema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
        password: yup__WEBPACK_IMPORTED_MODULE_4__.string().min(7, "minmum_symbols", {
            count: 7
        }).max(16, "maximum_symbols", {
            count: 16
        }).required("new_password_is_required"),
        password_confirmation: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("password_confirm").oneOf([
            yup__WEBPACK_IMPORTED_MODULE_4__.ref("password"),
            null
        ], "password_match")
    });
    const handleSubmit = (values)=>{
        setLoading(true);
    // dispatch(resetPassword(values)).then(({ payload }) => {
    //   setLoading(false);
    //   if (payload.error) {
    //     // toast error
    //     Toast({ icon: "error", title: payload.error });
    //   } else {
    //     navigate("/auth/login");
    //   }
    // });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "forget",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components__WEBPACK_IMPORTED_MODULE_5__/* .FormHeader */ .ph, {
                title: "back_to_login",
                link: "login",
                path: "/auth/login"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components__WEBPACK_IMPORTED_MODULE_5__/* .FormTitle */ .vw, {
                title: "reset_password",
                subtitle: "reset_password_subtitle"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
                initialValues: {
                    password: "",
                    password_confirmation: ""
                },
                onSubmit: handleSubmit,
                validationSchema: schema,
                children: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
                        children: [
                            _modules_auth_constants__WEBPACK_IMPORTED_MODULE_7__/* .reset_fields.map */ .AS.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .InputWithIcon */ .Wu, {
                                    id: item.id,
                                    type: item.type,
                                    name: item.name,
                                    placeholder: item.placeholder,
                                    icon: item.icon,
                                    noBorder: item.noBorder
                                }, index)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components__WEBPACK_IMPORTED_MODULE_5__/* .FormSubmit */ .Ow, {
                                title: "set_new_password",
                                loading: loading
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components__WEBPACK_IMPORTED_MODULE_5__/* .FormFooter */ .ZL, {})
        ]
    });
}
Reset.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_authLayout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        children: page
    });
};
async function getServerSideProps(context) {
    const { query  } = context;
    if (!query.email) {
        return {
            redirect: {
                destination: "forget-password",
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
}


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [538,251,569,485], () => (__webpack_exec__(2709)));
module.exports = __webpack_exports__;

})();