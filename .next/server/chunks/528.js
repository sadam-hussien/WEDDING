"use strict";
exports.id = 528;
exports.ids = [528];
exports.modules = {

/***/ 5753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "x4": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const auth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action)=>{
            state.user = action.payload;
        },
        logout: (state)=>{
            state.user = null;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth.reducer);
const { login , logout  } = auth.actions;


/***/ }),

/***/ 4528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store_0),
  "D": () => (/* binding */ persistor)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(4161);
// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(8936);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);
// EXTERNAL MODULE: ./modules/auth/store/index.js
var store = __webpack_require__(5753);
;// CONCATENATED MODULE: ./store/global.js

const globalReducer = (0,toolkit_.createSlice)({
    name: "global_reducer",
    initialState: {
        modal: {
            isShow: false,
            data: null
        }
    },
    reducers: {
        openModal: (state, action)=>{
            state.modal.isShow = true;
            state.modal.data = action.payload;
        },
        closeModal: (state)=>{
            state.modal.isShow = false;
            state.modal.data = null;
        }
    }
});
/* harmony default export */ const global = (globalReducer.reducer);
const { closeModal , openModal  } = globalReducer.actions;

;// CONCATENATED MODULE: ./store/index.js
// **************** main store



// reducers


const authPersistConfig = {
    key: "auth",
    storage: (storage_default())
};
const reducers = (0,toolkit_.combineReducers)({
    global: global,
    auth: (0,external_redux_persist_.persistReducer)(authPersistConfig, store/* default */.ZP)
});
const store_store = (0,toolkit_.configureStore)({
    reducer: reducers,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    external_redux_persist_.FLUSH,
                    external_redux_persist_.REHYDRATE,
                    external_redux_persist_.PAUSE,
                    external_redux_persist_.PERSIST,
                    external_redux_persist_.PURGE,
                    external_redux_persist_.REGISTER
                ]
            }
        })
});
const persistor = (0,external_redux_persist_.persistStore)(store_store);
/* harmony default export */ const store_0 = (store_store);


/***/ })

};
;