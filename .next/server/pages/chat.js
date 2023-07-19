"use strict";
(() => {
var exports = {};
exports.id = 180;
exports.ids = [180];
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

/***/ 5411:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChatBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1757);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5949);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1243);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4597);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server__WEBPACK_IMPORTED_MODULE_7__]);
_server__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function ChatBox({ ...props }) {
    const [emojiIsShow, setEmojiIsShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { currentConversationData  } = props;
    const chatId = currentConversationData?.chat_id;
    const { data: dataChatMessages , isLoading: isLoadingGetChatMessages  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useFetch */ .ib)({
        queryFn: ()=>(0,_server__WEBPACK_IMPORTED_MODULE_7__/* .api_server_get_messages */ .JD)(chatId),
        queryKey: [
            "get-chat-messages",
            chatId
        ],
        options: {
            enabled: !!chatId
        }
    });
    // const reversedData = dataChatMessages?.data.reverse();
    const { mutate , isLoading  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .usePost */ .uV)({
        queryFn: _server__WEBPACK_IMPORTED_MODULE_7__/* .api_server_send_message */ .gy,
        alert: false
    });
    // handle submit
    function handleSubmit(values, actions) {
        mutate({
            chat_id: currentConversationData.chat_id,
            msg: values.message
        }, {
            onSettled: ()=>{
                actions.resetForm();
            }
        });
    }
    if (Object.keys(currentConversationData).length && dataChatMessages?.data) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "box chat-box chat-height d-flex flex-column",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex align-items-center justify-content-between chat-box-header",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "chat-box-header-info d-flex align-items-center gap-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: currentConversationData.user?.avatar || "/images/user-placeholder.png",
                                    alt: "avatar",
                                    className: "img-fluid d-none d-md-block"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "chat-box-header-info-name d-flex flex-column gap-1",
                                    children: [
                                        currentConversationData.user.first_name,
                                        " ",
                                        currentConversationData.user.middle_name,
                                        " ",
                                        currentConversationData.user.last_name,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "bg-transparent p-0 border-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "las la-ellipsis-h"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "chat-box-body flex-fill d-flex flex-column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-fill chat-box-body-list",
                            children: dataChatMessages.data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `chat-box-body-list-item d-flex gap-2 ${item.from === props.user?.data.id ? "sender" : "receiver"}`,
                                    children: [
                                        item.from !== props.user?.data.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: currentConversationData?.member_b_id?.avatar || "/images/user-placeholder.png",
                                            alt: "",
                                            className: "img-fluid chat-box-body-list-item-avatar d-none d-md-block"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chat-box-body-list-item-info",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex align-items-center gap-2",
                                                    children: [
                                                        item.from !== props.user?.data.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "chat-box-body-list-item-info-name",
                                                            children: [
                                                                currentConversationData.user?.first_name,
                                                                " ",
                                                                currentConversationData.user?.middle_name
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "chat-box-body-list-item-info-date",
                                                            children: (0,_helpers__WEBPACK_IMPORTED_MODULE_8__/* .handleDate */ .J)(item.updated_at)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "chat-box-body-list-item-info-message",
                                                    children: [
                                                        item.file && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.file,
                                                            alt: "",
                                                            className: "img-fluid"
                                                        }),
                                                        item.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: item.message
                                                        })
                                                    ]
                                                }),
                                                item.from === props.user?.data.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "las la-check-double"
                                                })
                                            ]
                                        })
                                    ]
                                }, index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                            initialValues: {
                                message: "",
                                file: ""
                            },
                            onSubmit: handleSubmit,
                            children: ({ setFieldValue , values  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "chat-box-body-form d-flex align-items-center gap-3 position-relative",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center flex-fill chat-box-body-form-input h-100 position-relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `emoji-box ${emojiIsShow ? "active" : ""}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Emoji, {
                                                            setFieldValue: setFieldValue,
                                                            setEmojiIsShow: setEmojiIsShow,
                                                            values: values
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        className: "chat-box-body-form-emoji bg-transparent border-0 p-0 h-100",
                                                        onClick: ()=>setEmojiIsShow((prev)=>!prev),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "las la-smile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .InputWithIcon */ .Wu, {
                                                        type: "text",
                                                        name: "message",
                                                        placeholder: "إكتب رسالتك .....",
                                                        id: "message-text",
                                                        autoComplete: "off",
                                                        noBorder: true,
                                                        containerStyle: {
                                                            marginBottom: 0,
                                                            flex: 1
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "chat-box-body-form-camera chat-box-body-form-btn border-0 p-0 d-none d-md-block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "las la-camera"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "d-none d-lg-block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .DynamicFileUploaderInput */ .CF, {
                                                    item: {
                                                        name: "file",
                                                        id: "chat-file-uploading"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadingBtn, {
                                                        name: "file"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "submit",
                                                className: "chat-box-body-form-btn chat-box-body-form-submit p-0 border-0",
                                                disabled: isLoading,
                                                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Spinner, {
                                                    as: "span",
                                                    animation: "border",
                                                    size: "sm",
                                                    role: "status",
                                                    "aria-hidden": "true"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "las la-paper-plane"
                                                })
                                            })
                                        ]
                                    })
                                })
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "box chat-box chat-height d-flex flex-column",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/images/chat.jpg",
            alt: "",
            className: "img-fluid chat-empty-img"
        })
    });
}
function UploadingBtn({ files , deleteFile , isLoading  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "cursor-pointer chat-box-body-form-file chat-box-body-form-btn",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "las la-paperclip"
                })
            }),
            isLoading || files ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "position-absolute chat-uploading-img",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "position-relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: files ? typeof files === "string" ? files : window.URL.createObjectURL(files) : "/images/placholder.png",
                            alt: "placholder",
                            className: "img-fluid subscription-upload-img-img"
                        }),
                        isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "position-absolute overlay-when-uploading-image d-flex align-items-center justify-content-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Spinner, {
                                    as: "span",
                                    animation: "border",
                                    size: "md",
                                    role: "status",
                                    "aria-hidden": "true"
                                })
                            })
                        })
                    ]
                })
            }) : null
        ]
    });
}
const Emoji = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(({ setFieldValue , setEmojiIsShow , values  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((emoji_picker_react__WEBPACK_IMPORTED_MODULE_4___default()), {
        onEmojiClick: (e)=>{
            setFieldValue("message", values.message + e.emoji);
            setEmojiIsShow((prev)=>!prev);
        }
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ListOfChats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5949);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1757);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4597);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4641);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server__WEBPACK_IMPORTED_MODULE_4__]);
_server__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function ListOfChats({ ...props }) {
    // list of conversations
    // const [listOfConversations, setListOfConversations] = useState([
    //   {
    //     member_b_id: {
    //       avatar: "/images/user-placeholder.png",
    //       name: "اسلام اشرف",
    //     },
    //     member_a_id: {
    //       name: "اسلام اشرف",
    //     },
    //     updatedAt: new Date(),
    //     chats: [
    //       {
    //         message: "ازيك ي عم محمود",
    //       },
    //     ],
    //   },
    // ]);
    const { data: listOfConversations , isLoading  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFetch */ .ib)({
        queryFn: _server__WEBPACK_IMPORTED_MODULE_4__/* .api_server_get_rooms */ .p,
        queryKey: "get-rooms-list"
    });
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Spinner, {
            as: "span",
            animation: "border",
            role: "status",
            "aria-hidden": "true"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "box chat-conversations-list",
        children: listOfConversations.data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: {
                    pathname: "/chat",
                    query: {
                        id: item.user.id
                    }
                },
                className: "bg-transparent border-0 p-0 d-flex justify-content-between flex-wrap gap-2 chat-conversations-list-item w-100",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex align-items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.user?.avatar || "/images/user-placeholder.png",
                                alt: "",
                                className: "img-fluid chat-conversations-list-item-img"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-fill chat-conversations-list-item-info text-end",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "chat-box-header-info-name d-flex flex-column gap-1",
                                    children: [
                                        item.user?.first_name,
                                        " ",
                                        item.user?.middle_name,
                                        " ",
                                        item.user?.last_name,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: item?.message
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "me-auto",
                        children: (0,_helpers__WEBPACK_IMPORTED_MODULE_7__/* .handleDate */ .J)(item.updated_at)
                    })
                ]
            }, index))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _ListOfChats__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "r": () => (/* reexport safe */ _ChatBox__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ChatBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5411);
/* harmony import */ var _ListOfChats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatBox__WEBPACK_IMPORTED_MODULE_0__, _ListOfChats__WEBPACK_IMPORTED_MODULE_1__]);
([_ChatBox__WEBPACK_IMPORTED_MODULE_0__, _ListOfChats__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JD": () => (/* binding */ api_server_get_messages),
/* harmony export */   "gy": () => (/* binding */ api_server_send_message),
/* harmony export */   "p": () => (/* binding */ api_server_get_rooms),
/* harmony export */   "sI": () => (/* binding */ api_server_open_chat)
/* harmony export */ });
/* harmony import */ var _server_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_axios__WEBPACK_IMPORTED_MODULE_0__]);
_server_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function api_server_open_chat(user) {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().post("user/chat/start", user);
}
function api_server_send_message(data) {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().post("user/chat/message", data);
}
function api_server_get_messages(id) {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get(`user/chat/message/${id}`);
}
function api_server_get_rooms() {
    return (0,_server_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get(`user/chat/rooms`);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chat),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_chat_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6994);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_profile_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3970);
/* harmony import */ var _layout_homeLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3663);
/* harmony import */ var _pusher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8906);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4597);
/* harmony import */ var _modules_chat_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4641);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_chat_components__WEBPACK_IMPORTED_MODULE_2__, _modules_chat_server__WEBPACK_IMPORTED_MODULE_9__]);
([_modules_chat_components__WEBPACK_IMPORTED_MODULE_2__, _modules_chat_server__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Chat() {
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.auth);
    const [currentConversationData, setCurrentConversationData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    const { mutate , isLoading , data  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .usePost */ .uV)({
        queryFn: _modules_chat_server__WEBPACK_IMPORTED_MODULE_9__/* .api_server_open_chat */ .sI,
        alert: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (query?.id) {
            mutate({
                user_id: query?.id
            }, {
                onSuccess: (data)=>{
                    setCurrentConversationData(data.data);
                }
            });
        }
    }, [
        query?.id
    ]);
    console.log(currentConversationData);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (Object.keys(currentConversationData).length && currentConversationData.chat_id) {
            console.log(currentConversationData.chat_id);
            console.log("enter", currentConversationData.chat_id);
            (0,_pusher__WEBPACK_IMPORTED_MODULE_7__/* .pusherGetMessage */ .W)(currentConversationData.chat_id).bind("send-message-event", (data)=>{
                console.log("chat", data);
            });
        }
    }, [
        currentConversationData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        _pusher__WEBPACK_IMPORTED_MODULE_7__/* .pusherSubscribe.bind */ .L.bind("new-chat-event", (data)=>{});
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "chat-page-container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                className: "g-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        lg: {
                            order: "first",
                            span: 7
                        },
                        xs: {
                            order: "last"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_chat_components__WEBPACK_IMPORTED_MODULE_2__/* .ChatBox */ .r, {
                            user: user,
                            currentConversationData: currentConversationData
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        lg: 5,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_chat_components__WEBPACK_IMPORTED_MODULE_2__/* .ListOfChats */ .D, {
                            user: user,
                            setCurrentConversationData: setCurrentConversationData
                        })
                    })
                ]
            })
        })
    });
}
Chat.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_homeLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        containerProps: _modules_profile_constants__WEBPACK_IMPORTED_MODULE_5__/* .layout_styles.containerProps */ .n.containerProps,
        headerProps: _modules_profile_constants__WEBPACK_IMPORTED_MODULE_5__/* .layout_styles.headerProps */ .n.headerProps,
        children: page
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

/***/ 8906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ pusherGetMessage),
  "L": () => (/* binding */ pusherSubscribe)
});

;// CONCATENATED MODULE: external "pusher-js"
const external_pusher_js_namespaceObject = require("pusher-js");
var external_pusher_js_default = /*#__PURE__*/__webpack_require__.n(external_pusher_js_namespaceObject);
// EXTERNAL MODULE: ./store/index.js + 1 modules
var store = __webpack_require__(4528);
;// CONCATENATED MODULE: ./pusher.js


const pusherClient = new (external_pusher_js_default())("e28c3262971fb390a366", {
    cluster: "us2"
});
const userState = store/* default.getState */.Z.getState();
const userId = userState.auth.user?.data?.id;
let channelName = "user_" + userId;
const pusherSubscribe = pusherClient.subscribe(channelName);
const pusherGetMessage = (id)=>{
    console.log("undefined", id);
    return pusherClient.subscribe(id);
};


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1243:
/***/ ((module) => {

module.exports = require("emoji-picker-react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [538,251,528,699,663,970], () => (__webpack_exec__(8992)));
module.exports = __webpack_exports__;

})();