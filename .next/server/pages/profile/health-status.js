"use strict";
(() => {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 2601:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HealthStatus),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_homeLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3663);
/* harmony import */ var _layout_profileLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1661);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_profile_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3970);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5949);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1757);
/* harmony import */ var _modules_profile_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8061);
/* harmony import */ var _modules_profile_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1030);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_profileLayout__WEBPACK_IMPORTED_MODULE_2__, _modules_profile_hooks__WEBPACK_IMPORTED_MODULE_8__]);
([_layout_profileLayout__WEBPACK_IMPORTED_MODULE_2__, _modules_profile_hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function HealthStatus() {
    const { healthStatus  } = _modules_profile_constants__WEBPACK_IMPORTED_MODULE_4__/* .profile_data */ .m;
    const namesOfInputs = (0,_helpers__WEBPACK_IMPORTED_MODULE_9__/* .getNames */ .e)(healthStatus.fields);
    function handlePayload(values) {
        const fd = new FormData();
        for(let field in values){
            fd.append(field, values[field]);
        }
        fd.append("step", 3);
        return fd;
    }
    const { handleSubmit , isLoading , isLoadingProfileData , data  } = (0,_modules_profile_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useProfile */ .U)({
        handlePayload
    });
    if (isLoadingProfileData) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Spinner, {
            as: "span",
            animation: "border",
            size: "md",
            role: "status",
            "aria-hidden": "true"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
            initialValues: {
                ...data?.step_3,
                disease_type: data?.step_3?.disease_type ? data?.step_3?.disease_type.split(",") : ""
            } || namesOfInputs,
            onSubmit: handleSubmit,
            children: ({ values  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
                    className: "h-100 d-flex flex-column profile-form box",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {
                            children: healthStatus.fields.map((field, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                    ...field.cols,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .InputsHandler */ .nG, {
                                        item: field
                                    })
                                }, index + field.id))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_profile_components__WEBPACK_IMPORTED_MODULE_7__/* .FormFooter */ .Z, {
                            loading: isLoading,
                            link: "مسكن الزوجية",
                            path: "/profile/marital-housing"
                        })
                    ]
                })
        })
    });
}
HealthStatus.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_homeLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        containerProps: _modules_profile_constants__WEBPACK_IMPORTED_MODULE_4__/* .layout_styles.containerProps */ .n.containerProps,
        headerProps: _modules_profile_constants__WEBPACK_IMPORTED_MODULE_4__/* .layout_styles.headerProps */ .n.headerProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_profileLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: page
        })
    });
};
// if user is logged in redirect to home page
async function getServerSideProps({ req  }) {
    const isAuth = req.cookies.access_token;
    if (!isAuth) {
        return {
            redirect: {
                destination: "/auth",
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

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [538,636,675,251,528,699,663,970,116], () => (__webpack_exec__(2601)));
module.exports = __webpack_exports__;

})();