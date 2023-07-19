"use strict";
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 3716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);


function AuthLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "auth-page",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
            md: 2,
            className: "g-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    className: "auth-container",
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    className: "layout",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "layout-bg"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 3593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZL": () => (/* reexport */ FormFooter),
  "ph": () => (/* reexport */ FormHeader),
  "Ow": () => (/* reexport */ FormSubmit),
  "vw": () => (/* reexport */ FormTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./modules/auth/components/FormHeader.js


function FormHeader({ title , link , path , noBack  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "auth-header d-flex justify-content-between align-items-center",
        children: [
            !noBack ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/auth",
                className: "back-btn d-inline-flex align-items-center justify-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: `las la-long-arrow-alt-right`
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "account-option",
                children: [
                    title,
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: path,
                        className: "account-option-link",
                        children: link
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./modules/auth/components/FormTitle.js

function FormTitle({ title , subtitle  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "auth-title",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "auth-title-text fw-bold text-capitalize",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: "auth-subtitle-text m-0",
                children: subtitle
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/index.js + 17 modules
var components = __webpack_require__(5949);
;// CONCATENATED MODULE: ./modules/auth/components/FormSubmit.js


function FormSubmit({ title , loading  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "auth-submit mt-5",
        children: /*#__PURE__*/ jsx_runtime_.jsx(components/* ButtonWithIcon */.Ai, {
            type: "submit",
            title: title,
            loading: loading
        })
    });
}

;// CONCATENATED MODULE: ./modules/auth/components/FormFooter.js


function FormFooter({ forget  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "auth-footer mt-5 d-flex justify-content-between align-items-center",
        children: forget ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/auth/forget-password",
            className: "forget-passowrd",
            children: "forget_passowrd"
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {})
    });
}

;// CONCATENATED MODULE: ./modules/auth/components/index.js






/***/ })

};
;