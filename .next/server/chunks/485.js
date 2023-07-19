"use strict";
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 2485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AS": () => (/* binding */ reset_fields),
/* harmony export */   "F9": () => (/* binding */ register_fields),
/* harmony export */   "lK": () => (/* binding */ login_fields)
/* harmony export */ });
const login_fields = [
    {
        id: "email-inp",
        type: "email",
        name: "email",
        placeholder: "البريد الالكترونى",
        icon: "lar la-envelope",
        noBorder: true
    },
    {
        id: "password-inp",
        type: "password",
        name: "password",
        placeholder: "كلمة السر",
        icon: "las la-unlock-alt",
        noBorder: true
    }
];
const register_fields = [
    {
        id: "firstName-inp",
        type: "text",
        name: "first_name",
        placeholder: "الاسم الاول",
        icon: "las la-signature",
        noBorder: true,
        col: 4
    },
    {
        id: "middle_name-inp",
        type: "text",
        name: "middle_name",
        placeholder: "الاسم الاوسط",
        icon: "las la-signature",
        noBorder: true,
        col: 4
    },
    {
        id: "lastName-inp",
        type: "text",
        name: "last_name",
        placeholder: "الاسم الاخير",
        icon: "las la-signature",
        noBorder: true,
        col: 4
    },
    {
        id: "gender-inp",
        type: "select",
        name: "gender",
        placeholder: "النوع",
        icon: "las la-dna",
        noBorder: true,
        col: 6,
        options: [
            {
                label: "ذكر",
                value: "male"
            },
            {
                label: "انثى",
                value: "female"
            }
        ]
    },
    {
        id: "dateofbirth-inp",
        type: "date",
        name: "dob",
        placeholder: "تاريخ الميلاد",
        icon: "las la-calendar",
        noBorder: true,
        col: 6
    },
    {
        id: "email-inp",
        type: "email",
        name: "email",
        placeholder: "البريد الالكترونى",
        icon: "lar la-envelope",
        noBorder: true
    },
    {
        id: "phone-inp",
        type: "text",
        name: "phone",
        placeholder: "رقم الهاتف",
        icon: "las la-phone",
        noBorder: true
    },
    {
        id: "password-inp",
        type: "password",
        name: "password",
        placeholder: "كلمة السر",
        icon: "las la-unlock-alt",
        noBorder: true
    },
    {
        id: "password-conifirm-inp",
        type: "password",
        name: "password_confirmation",
        placeholder: "تاكيد كلمة السر",
        icon: "las la-unlock-alt",
        noBorder: true
    }
];
const reset_fields = [
    {
        id: "password-reset-inp",
        type: "password",
        name: "password",
        placeholder: "كلمة السر الجديدة",
        icon: "las la-unlock-alt",
        noBorder: true
    },
    {
        id: "password-confirm-reset-inp",
        type: "password",
        name: "password_confirmation",
        placeholder: "تاكيد كلمة السر",
        icon: "las la-unlock-alt",
        noBorder: true
    }
];


/***/ })

};
;