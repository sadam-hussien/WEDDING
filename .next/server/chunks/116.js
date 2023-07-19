"use strict";
exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 1757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ handleDate),
/* harmony export */   "e": () => (/* binding */ getNames)
/* harmony export */ });
function getNames(arr) {
    let obj = {};
    arr.forEach((item)=>{
        obj[item.name] = item.value || "";
    });
    return obj;
}
function handleDate(d) {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
    return `${year}-${month}-${day}`;
}


/***/ }),

/***/ 1661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProfileLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_profile_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3970);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5949);
/* harmony import */ var _modules_auth_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5753);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_9__]);
js_cookie__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const navItemClasses = "profile-layout-navbar-item d-flex align-items-center justify-content-between";
function ProfileLayout({ children  }) {
    const { pathname , reload  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    function activeClass(href) {
        if (pathname === href) {
            return "active " + navItemClasses;
        }
        return navItemClasses;
    }
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.auth);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    function handleLogout() {
        js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].remove("access_token");
        dispatch((0,_modules_auth_store__WEBPACK_IMPORTED_MODULE_8__/* .logout */ .kS)());
        reload();
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "profile-layout",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                    className: "profile-layout-aside d-flex flex-column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "profile-layout-header border-bottom  d-flex mb-lg align-items-center justify-content-between gap-3",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex align-items-center gap-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: user?.data?.avatar || "/images/user-placeholder.png",
                                        alt: "",
                                        className: "img-fluid profile-layout-aside-avatar rounded-circle",
                                        width: 60,
                                        height: 60
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                className: "profile-layout-aside-name m-0",
                                                children: [
                                                    user?.data?.first_name,
                                                    " ",
                                                    user?.data?.middle_name
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: user?.data?.package_type
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: "profile-layout-navbar",
                            children: Object.values(_modules_profile_constants__WEBPACK_IMPORTED_MODULE_3__/* .profile_data */ .m).map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: item.path,
                                    className: activeClass(item.path),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "las la-angle-left icon"
                                        })
                                    ]
                                }, index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .Btn */ .un, {
                                type: "button",
                                variant: "danger",
                                style: {
                                    minWidth: "100%"
                                },
                                title: "تسجيل خروج",
                                onClick: handleLogout
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "profile-layout-content",
                    children: children
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ FormFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/index.js + 17 modules
var components = __webpack_require__(5949);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./modules/profile/components/FormFooter.js



function FormFooter(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " mt-auto d-flex align-items-center justify-content-between border-top pt-4 gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components/* ButtonWithIcon */.Ai, {
                type: "submit",
                title: "حفظ",
                icon: "las la-check",
                style: {
                    minWidth: "150px"
                },
                radius: true,
                loading: props.loading
            }),
            props.path && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: props.path,
                className: "profile-form-footer d-flex align-items-center gap-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: props.link
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "las la-long-arrow-alt-left icon"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./modules/profile/components/index.js



/***/ }),

/***/ 1030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useProfile)
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4597);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1478);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server__WEBPACK_IMPORTED_MODULE_1__]);
_server__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useProfile({ handlePayload  }) {
    const { data , isLoading: isLoadingProfileData  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useFetch */ .ib)({
        queryFn: _server__WEBPACK_IMPORTED_MODULE_1__/* .api_get_data */ .l,
        queryKey: "get-profile-data"
    });
    const { mutate , isLoading  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__/* .usePost */ .uV)({
        queryFn: _server__WEBPACK_IMPORTED_MODULE_1__/* .api_send_data */ .R,
        alert: false
    });
    function handleSubmit(values, actions) {
        const fd = handlePayload(values);
        mutate(fd, {
            onSuccess: (data)=>{
                (0,_components__WEBPACK_IMPORTED_MODULE_2__/* .Toast */ .FN)({
                    icon: "success",
                    title: "تم تحديث البيانات بنجاح"
                });
            },
            onError: (error)=>{
                const errors = error?.data?.errors;
                if (errors) {
                    for(let err in errors){
                        actions.setFieldError(err, errors[err][0]);
                    }
                }
                (0,_components__WEBPACK_IMPORTED_MODULE_2__/* .Toast */ .FN)({
                    icon: "error",
                    title: error?.data?.message
                });
            }
        });
    }
    return {
        data: data?.data,
        isLoadingProfileData,
        isLoading,
        handleSubmit
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ api_send_data),
/* harmony export */   "l": () => (/* binding */ api_get_data)
/* harmony export */ });
/* harmony import */ var _server_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_axios__WEBPACK_IMPORTED_MODULE_0__]);
_server_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function api_send_data(data) {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().post("user/profile", data);
}
function api_get_data() {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get("user/profile");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;