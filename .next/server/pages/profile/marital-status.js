"use strict";
(() => {
var exports = {};
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 6019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaritalStatus),
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1757);
/* harmony import */ var _modules_profile_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8061);
/* harmony import */ var _modules_profile_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1030);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_profileLayout__WEBPACK_IMPORTED_MODULE_2__, _modules_profile_hooks__WEBPACK_IMPORTED_MODULE_8__]);
([_layout_profileLayout__WEBPACK_IMPORTED_MODULE_2__, _modules_profile_hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function MaritalStatus() {
    const { maritalStatus  } = _modules_profile_constants__WEBPACK_IMPORTED_MODULE_4__/* .profile_data */ .m;
    const namesOfInputs = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getNames */ .e)(maritalStatus.fields);
    const namesOfChildrenDataInputs = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getNames */ .e)(maritalStatus.fields.at(-1).fields);
    function arraysPayloadHandler(name, data, fd) {
        data.forEach((item, index)=>{
            for(let field in item){
                fd.append(`${name}[${index}][${field}]`, item[field]);
            }
        });
    }
    function handlePayload(values) {
        const fd = new FormData();
        for(let field in values){
            if (Array.isArray(values[field])) {
                arraysPayloadHandler(field, values[field], fd);
            } else {
                fd.append(field, values[field]);
            }
        }
        fd.append("step", 2);
        return fd;
    }
    const { handleSubmit , isLoading , isLoadingProfileData , data  } = (0,_modules_profile_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useProfile */ .U)({
        handlePayload
    });
    function orderItems(dependant, dependantValue, value) {
        if (Array.isArray(dependantValue)) {
            return dependant ? !dependantValue.includes(value) : false;
        }
        return dependant ? value !== dependantValue : false;
    }
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
                ...data?.step_2,
                children_data: data?.step_2?.children_data || [
                    namesOfChildrenDataInputs
                ]
            } || {
                ...namesOfInputs,
                children_data: [
                    namesOfChildrenDataInputs
                ]
            },
            onSubmit: handleSubmit,
            children: ({ values  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
                    className: "h-100 d-flex flex-column profile-form box",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {
                            children: maritalStatus.fields.map((field, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                    ...field.cols,
                                    className: `${orderItems(field.dependant, field.dependantValue, values[field.dependant]) ? "order-last" : ""}`,
                                    children: field.type !== "fieldArray" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .InputsHandler */ .nG, {
                                        item: field
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {
                                        className: "align-items-end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
                                            name: field.name,
                                            render: (arrayHelpers)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: values[field.name].map((item, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                                                            children: [
                                                                idx > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                                                    xs: 12,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                                }, idx + "" + item.id + "border"),
                                                                field.fields.map((itemField, itemIdx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                                                        ...itemField.cols,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .InputsHandler */ .nG, {
                                                                            item: {
                                                                                ...itemField,
                                                                                name: `${field.name}.${idx}.${itemField.name}`,
                                                                                id: `${itemField.id}.${idx}.${itemIdx}`
                                                                            }
                                                                        })
                                                                    }, idx + "" + itemIdx + itemField.id)),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
                                                                    md: 3,
                                                                    className: "d-flex justify-content-end align-items-center gap-3",
                                                                    children: [
                                                                        values.has_children == "1" && values[field.name].length - 1 > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            className: "remove-btn mb-md border-0 p-0",
                                                                            type: "button",
                                                                            onClick: ()=>arrayHelpers.remove(idx),
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "las la-trash"
                                                                            })
                                                                        }),
                                                                        values.has_children == "1" && values[field.name].length - 1 === idx && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            className: "add-btn mb-md border-0 p-0 ",
                                                                            type: "button",
                                                                            onClick: ()=>arrayHelpers.push(namesOfChildrenDataInputs),
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "las la-plus"
                                                                            })
                                                                        })
                                                                    ]
                                                                }, idx + "" + item.id + "actions")
                                                            ]
                                                        }, item.id + "" + idx + "wrapper"))
                                                })
                                        })
                                    })
                                }, index + field.id))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_profile_components__WEBPACK_IMPORTED_MODULE_7__/* .FormFooter */ .Z, {
                            loading: isLoading,
                            link: "الحالة الصحية",
                            path: "/profile/health-status"
                        })
                    ]
                })
        })
    });
}
MaritalStatus.getLayout = function getLayout(page) {
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
var __webpack_exports__ = __webpack_require__.X(0, [538,636,675,251,528,699,663,970,116], () => (__webpack_exec__(6019)));
module.exports = __webpack_exports__;

})();