(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: external "react-bootstrap/SSRProvider"
const SSRProvider_namespaceObject = require("react-bootstrap/SSRProvider");
var SSRProvider_default = /*#__PURE__*/__webpack_require__.n(SSRProvider_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: ./store/index.js + 1 modules
var store = __webpack_require__(4528);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./styles/index.css
var styles = __webpack_require__(9517);
;// CONCATENATED MODULE: ./pages/_app.js


// import { appWithTranslation } from "next-i18next";






// global css


function MyApp({ Component , pageProps  }) {
    const [queryClient] = (0,external_react_.useState)(()=>new external_react_query_.QueryClient());
    const getLayout = Component.getLayout || ((page)=>page);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "تيفرى"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
                client: queryClient,
                children: /*#__PURE__*/ jsx_runtime_.jsx((SSRProvider_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                        store: store/* default */.Z,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
                            loading: "loading..................",
                            persistor: store/* persistor */.D,
                            children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            }))
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp); // export default appWithTranslation(MyApp);


/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 9517:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 8936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [528], () => (__webpack_exec__(9696)));
module.exports = __webpack_exports__;

})();