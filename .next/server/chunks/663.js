"use strict";
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 3663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HomeLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./layout/homeLayout/components/header/index.js



function Header(props) {
    const { user  } = (0,external_react_redux_.useSelector)((state)=>state.auth);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "main-header d-flex align-items-center",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container d-flex align-items-center justify-content-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "main-header__logo",
                    children: [
                        "WE",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "logo"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex align-items-center gap-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "main-header__nav list-unstyled m-0 p-0 d-flex align-items-center gap-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/#about-section",
                                    className: "main-header__nav-item",
                                    "data-link": "about",
                                    children: "من نحن"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/#service-section",
                                    className: "main-header__nav-item",
                                    "data-link": "about",
                                    children: "الخدمات"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/#membership-section",
                                    className: "main-header__nav-item",
                                    "data-link": "subscriptions",
                                    children: "الاشتراكات"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/members",
                                    className: "main-header__nav-item",
                                    children: "تصفح الاعضاء"
                                })
                            ]
                        }),
                        user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/profile",
                            className: "main-header__login main-header__profile position-relative   d-flex align-items-center justify-content-center text-center btn-primary btn",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "d-flex align-items-center justify-content-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "las la-user"
                                    })
                                }),
                                "الملف الشخصى"
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/auth/login",
                            className: "main-header__login d-flex align-items-center justify-content-center text-center btn-primary btn",
                            children: "انشاء حساب"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./layout/homeLayout/components/index.js


;// CONCATENATED MODULE: ./layout/homeLayout/index.js


function HomeLayout({ children , headerProps , containerProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "home-layout",
        ...containerProps,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                ...headerProps
            }),
            children
        ]
    });
}


/***/ })

};
;