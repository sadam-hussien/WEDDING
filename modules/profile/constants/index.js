export const layout_styles = {
  containerProps: {
    style: {
      paddingTop: "var(--header-height",
    },
  },
  headerProps: {
    style: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 9 },
  },
};

export const profile_data = {
  personalAttributes: {
    title: "السمات الشخصية",
    path: "/profile/personal-traits",
    fields: [
      {
        id: "height-inp",
        type: "text",
        name: "height",
        placeholder: "الطول",
        label: "الطول",
        // icon: "las la-arrows-v",
        noBorder: true,
        cols: {
          md: 6,
        },
      },
      {
        id: "weight-inp",
        type: "text",
        name: "weight",
        placeholder: "الوزن",
        label: "الوزن",
        // icon: "las la-weight",
        noBorder: true,
        cols: {
          md: 6,
        },
      },
      {
        id: "skinColor-inp",
        type: "radiobox",
        name: "skin_color",
        placeholder: "لون البشرة",
        label: "لون البشرة",
        // icon: "las la-palette",
        noBorder: true,
        cols: {
          md: 12,
        },
        options: ["اشقر", "قمحي", "أسمر", "عربي", "اسمر افريقي"],
      },
      {
        id: "hairColor-inp",
        type: "radiobox",
        name: "hair_color",
        placeholder: "لون الشعر",
        label: "لون الشعر",
        // icon: "las la-palette",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["ملون", "بني", "أسود"],
      },
      {
        id: "eyeColor-inp",
        type: "radiobox",
        name: "eye_color",
        placeholder: "لون العين",
        label: "لون العين",
        // icon: "las la-palette",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["ملون", "بني", "أسود"],
      },
      {
        id: "hairType-inp",
        type: "radiobox",
        name: "hair_type",
        placeholder: "نوع الشعر",
        label: "نوع الشعر",
        // icon: "las la-cut",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["ناعم", "عادي", "خشن"],
      },
      {
        id: "bodyShape-inp",
        type: "radiobox",
        name: "body_shape",
        placeholder: "شكل الجسم",
        label: "شكل الجسم",
        // icon: "las la-male",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["عادي", "رياضي"],
      },
      {
        id: "notes-inp",
        type: "textarea",
        name: "notes",
        placeholder: "ملاحظات",
        label: "ملاحظات",
        // icon: "las la-sticky-note",
        noBorder: true,
        cols: {
          md: 12,
        },
      },
    ],
  },
  // ********************************
  maritalStatus: {
    title: "الحالة الاجتماعية",
    path: "/profile/marital-status",
    fields: [
      {
        id: "maritalStatus-inp",
        type: "radiobox",
        name: "marital_status",
        placeholder: "الحالة الاجتماعية",
        label: "الحالة الاجتماعية",
        noBorder: true,
        value: "متزوج",
        cols: {
          md: 12,
        },
        options: ["متزوج", "عازب", "مطلق"],
      },
      // متزوج
      {
        dependant: "marital_status",
        dependantValue: "متزوج",
        id: "numberOfWives-inp",
        type: "text",
        name: "number_of_wives",
        placeholder: "عدد الزوجات",
        label: "عدد الزوجات",
        noBorder: true,
        cols: {
          md: 6,
        },
      },
      {
        dependant: "marital_status",
        dependantValue: "متزوج",
        id: "ageOfFirstWife-inp",
        type: "text",
        name: "age_of_first_wife",
        placeholder: "سن الزوجة الأولى",
        label: "سن الزوجة الأولى",
        noBorder: true,
        cols: {
          md: 6,
        },
      },
      {
        dependant: "marital_status",
        dependantValue: "متزوج",
        id: "marriageDate-inp",
        type: "date",
        name: "marriage_date",
        placeholder: "تاريخ الزواج",
        label: "تاريخ الزواج",
        noBorder: true,
        cols: {
          md: 6,
        },
      },

      // عازب
      {
        dependant: "marital_status",
        dependantValue: "عازب",
        id: "singleBkr-inp",
        type: "radiobox",
        name: "single_bkr",
        placeholder: "بكر؟؟ - ليس له تجارب سابقة.",
        label: "بكر؟؟ - ليس له تجارب سابقة.",
        // icon: "las la-palette",
        noBorder: true,
        cols: {
          md: 12,
        },
        options: ["نعم", "لا", "لا احب ذكر ذلك"],
      },

      // مطلق
      {
        dependant: "marital_status",
        dependantValue: "مطلق",
        id: "absolute-inp",
        type: "radiobox",
        name: "divorce_reason",
        placeholder: "سبب الطلاق",
        label: "سبب الطلاق",
        // icon: "las la-palette",
        noBorder: true,
        cols: {
          md: "auto",
        },
        options: ["عدم توافق", "صحية", "النفقة", "اخرى"],
      },
      {
        dependant: "marital_status",
        dependantValue: "مطلق",
        id: "divorceDate-inp",
        type: "date",
        name: "divorce_date",
        placeholder: "تاريخ الطلاق",
        label: "تاريخ الطلاق",
        noBorder: true,
        cols: {
          // md: "auto",
        },
      },
      // shared data
      {
        dependant: "marital_status",
        dependantValue: ["مطلق", "متزوج"],
        id: "hasChildren-inp",
        type: "radiobox",
        name: "has_children",
        placeholder: "يوجد أولاد",
        label: "يوجد أولاد",
        noBorder: true,
        cols: {
          md: 12,
        },
        options: [
          { label: "نعم", value: "1" },
          { label: "لا", value: "0" },
        ],
      },
      {
        dependant: "has_children",
        dependantValue: "1",
        id: "numberOfChildren-inp",
        type: "text",
        name: "number_of_children",
        placeholder: "عدد الأطفال",
        label: "عدد الأطفال",
        noBorder: true,
        cols: {
          md: 6,
        },
      },
      {
        dependant: "has_children",
        dependantValue: "1",
        id: "children_expense-inp",
        type: "text",
        name: "children_expense",
        placeholder: "نفقة الاطفال",
        label: "نفقة الاطفال",
        noBorder: true,
        cols: {
          md: 6,
        },
      },
      // array data
      {
        dependant: "has_children",
        dependantValue: "1",
        id: "children_data-inp",
        type: "fieldArray",
        name: "children_data",
        placeholder: "بيانات الاطفال",
        label: "بيانات الاطفال",
        noBorder: true,
        cols: {
          md: 12,
        },

        fields: [
          {
            dependant: "has_children",
            dependantValue: "1",
            id: "children_data_name-inp",
            type: "text",
            name: "name",
            placeholder: "اسم الطفل",
            label: "اسم الطفل",
            noBorder: true,
            cols: {
              md: 6,
            },
          },
          {
            dependant: "has_children",
            dependantValue: "1",
            id: "children_data_age-inp",
            type: "text",
            name: "age",
            placeholder: "سن الطفل",
            label: "سن الطفل",
            noBorder: true,
            cols: {
              md: 6,
            },
          },
          {
            dependant: "has_children",
            dependantValue: "1",
            id: "children_data_gender-inp",
            type: "radiobox",
            name: "type",
            placeholder: "نوع الطفل",
            label: "نوع الطفل",
            noBorder: true,
            cols: {
              md: 4,
            },
            options: [
              { label: "ذكر", value: "male" },
              { label: "انثى", value: "female" },
            ],
          },
          {
            dependant: "has_children",
            dependantValue: "1",
            id: "children_data_health_status-inp",
            type: "radiobox",
            name: "health_status",
            placeholder: "الحالة الصحية للطفل",
            label: "الحالة الصحية للطفل",
            noBorder: true,
            cols: {
              md: 5,
            },
            options: [
              { label: "ممتاز", value: "excellent" },
              { label: "جيد", value: "good" },
              { label: "ضعيف", value: "weak" },
            ],
          },
        ],
      },
    ],
  },
  // ********************************
  healthStatus: {
    title: "الحالة الصحية",
    path: "/profile/health-status",
    fields: [
      {
        id: "generalHealth-inp",
        type: "radiobox",
        name: "general_health",
        placeholder: "الصحة العامة",
        label: "الصحة العامة",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["ممتاز", "جيد", "ضعيفة"],
      },
      {
        id: "hearing-inp",
        type: "radiobox",
        name: "hearing",
        placeholder: "الحواس الأساسية - السمع",
        label: "الحواس الأساسية - السمع",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["ممتاز", "جيد", "ضعيف", "أصم"],
      },
      {
        id: "vision-inp",
        type: "radiobox",
        name: "vision",
        placeholder: "الحواس الأساسية - البصر",
        label: "الحواس الأساسية - البصر",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["ممتاز", "جيد", "ضعيف", "كفيف"],
      },
      {
        id: "speech-inp",
        type: "radiobox",
        name: "speech",
        placeholder: "الحواس الأساسية - الكلام",
        label: "الحواس الأساسية - الكلام",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["ممتاز", "جيد", "ضعيف", "أبكم"],
      },
      {
        id: "signLanguage-inp",
        type: "radiobox",
        name: "sign_language",
        placeholder: "إجادة لغة الإشارة",
        label: "إجادة لغة الإشارة",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["نعم", "لا"],
      },
      {
        id: "chronicDiseases-inp",
        type: "radiobox",
        name: "chronic_diseases",
        placeholder: "يعاني من أمراض مزمنة",
        label: "يعاني من أمراض مزمنة",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["نعم", "لا"],
      },
      {
        dependant: "chronic_diseases",
        dependantValue: "نعم",
        id: "diseaseType-inp",
        type: "checkbox",
        name: "disease_type",
        placeholder: "نوع المرض",
        label: "نوع المرض",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["قلب", "ضغط", "سكر", "روماتويد", "شيخوخة"],
      },
      {
        dependant: "chronic_diseases",
        dependantValue: "نعم",
        id: "sideEffects-inp",
        type: "radiobox",
        name: "side_effects",
        placeholder: "مضاعفات جانبية للمرض المزمن",
        label: "مضاعفات جانبية للمرض المزمن",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["نعم", "لا"],
      },
      {
        dependant: "chronic_diseases",
        dependantValue: "نعم",
        id: "fertilityAbility-inp",
        type: "radiobox",
        name: "fertility_ability",
        placeholder: "القدرة على الإنجاب",
        label: "القدرة على الإنجاب",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["قادر", "غير قادر", "الأرغب في ذكر ذلك"],
      },
      {
        dependant: "chronic_diseases",
        dependantValue: "نعم",
        id: "sexualAbility-inp",
        type: "radiobox",
        name: "sexual_ability",
        placeholder: "القدرة الجنسية",
        label: "القدرة الجنسية",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["طبيعية", "ضعيفة", "الأرغب في ذكر ذلك"],
      },
      {
        id: "notes-inp",
        type: "textarea",
        name: "health_notes",
        placeholder: "ملاحظات",
        label: "ملاحظات",
        noBorder: true,
        cols: {
          md: 12,
        },
      },
    ],
  },
  // ********************************
  maritalHousing: {
    title: "مسكن الزوجية",
    path: "/profile/marital-housing",
    fields: [
      // {
      //   id: "housingAvailability-inp",
      //   type: "radiobox",
      //   name: "housingAvailability",
      //   placeholder: "توفر المسكن",
      //   label: "توفر المسكن",
      //   noBorder: true,
      //   cols: {
      //     md: 12,
      //   },
      //   options: [
      //     "متوفر",
      //     "غير متوفر",
      //     "غير متوفر حاليا",
      //     "غير قادر على توفير مسكن",
      //   ],
      // },
      {
        id: "housingLocationAddress-inp",
        type: "text",
        name: "housing_location_address",
        placeholder: "محل المسكن - محافظة - منطقة - شارع",
        label: "محل المسكن - محافظة - منطقة - شارع",
        noBorder: true,
        cols: {
          md: 6,
        },
      },
      {
        id: "housingType-inp",
        type: "radiobox",
        name: "housing_type",
        placeholder: "نوع المسكن",
        label: "نوع المسكن",
        noBorder: true,
        cols: {
          md: 3,
        },
        options: ["فيلا", "شقة"],
      },
      {
        id: "housingArea-inp",
        type: "text",
        name: "housing_area",
        placeholder: "مساحة المسكن",
        label: "مساحة المسكن",
        noBorder: true,
        cols: {
          md: 3,
        },
      },
      {
        id: "housingContractType-inp",
        type: "radiobox",
        name: "housing_contract_type",
        placeholder: "نوع عقد المسكن",
        label: "نوع عقد المسكن",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["إيجار جديد", "إيجار قديم", "تمليك"],
      },

      // de
      {
        dependant: "housing_contract_type",
        dependantValue: "إيجار جديد",
        id: "housingContractYears-inp",
        type: "text",
        name: "housing_contract_Years",
        placeholder: "عدد سنوات الإيجار",
        label: "عدد سنوات الإيجار",
        noBorder: true,
        cols: {
          md: 6,
        },
      },

      {
        id: "housingNotes-inp",
        type: "textarea",
        name: "housing_notes",
        placeholder: "ملاحظات",
        label: "ملاحظات",
        noBorder: true,
        cols: {
          md: 12,
        },
      },

      // end
    ],
  },
  // ********************************
  financialStatus: {
    title: "الحالة المالية",
    path: "/profile/financial-status",
    fields: [
      {
        id: "financialLevel-inp",
        type: "radiobox",
        name: "financial_level",
        placeholder: "المستوى المالي",
        label: "المستوى المالي",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["متيسر", "متوسط", "ضعيف"],
      },
      {
        id: "incomeSource-inp",
        type: "radiobox",
        name: "income_source",
        placeholder: "مصدر الدخل",
        label: "مصدر الدخل",
        noBorder: true,
        cols: {
          md: 6,
        },
        options: ["إيجار", "معاش", "لا يوجد مصدر دخل ثابت"],
      },
      {
        id: "financialNotes-inp",
        type: "textarea",
        name: "financial_notes",
        placeholder: "ملاحظات",
        label: "ملاحظات",
        noBorder: true,
        cols: {
          md: 12,
        },
      },
    ],
  },

  marriageGoal: {
    title: "الهدف من الزواج",
    path: "/profile/marriage-goal",
    fields: [],
  },

  marriageCulture: {
    title: "ثقافة الزواج",
    path: "/profile/marriage-culture",

    tabs: [
      {
        title: "زواج تقليدي",
        // start
        fields: [
          {
            id: "network-inp",
            type: "radiobox",
            name: "gift",
            placeholder: "شبكة",
            label: "شبكة",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "لا", "حسب الاتفاق"],
          },
          {
            id: "mahr-inp",
            type: "radiobox",
            name: "mahr",
            placeholder: "المؤخر",
            label: "المؤخر",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "لا", "حسب الاتفاق"],
          },
          {
            id: "witnesses-inp",
            type: "radiobox",
            name: "witnesses",
            placeholder: "قايمة",
            label: "قايمة",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "لا", "حسب الاتفاق"],
          },
          {
            id: "maritalHome-inp",
            type: "radiobox",
            name: "marital_home",
            placeholder: "سكن زوجية",
            label: "سكن زوجية",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "لا", "حسب الاتفاق"],
          },
          {
            id: "celebration-inp",
            type: "radiobox",
            name: "celebration",
            placeholder: "فرح",
            label: "فرح",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "لا", "حسب الاتفاق"],
          },
          {
            id: "furniture-inp",
            type: "radiobox",
            name: "furniture",
            placeholder: "عفش",
            label: "عفش",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "لا", "حسب الاتفاق"],
          },
          {
            id: "notes-inp",
            type: "textarea",
            name: "marriage_culture_notes",
            placeholder: "ملاحظات",
            label: "ملاحظات",
            noBorder: true,
            cols: {
              md: 12,
            },
          },
        ],
        // end
      },
      {
        title: "زواج غير تقليدي",
        fields: [
          {
            id: "livingArrangement-inp",
            type: "radiobox",
            name: "living_arrangement",
            placeholder: "المعايشة الزوجية",
            label: "المعايشة الزوجية",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: [
              "ميعاد محدد",
              "حسب الظروف",
              "غير قادر",
              "في حالة زواج الرعاية الصحية",
            ],
          },
          {
            id: "knowOtherWives-inp",
            type: "radiobox",
            name: "know_other_wives",
            placeholder: "معرفة الزوجات الأخريات",
            label: "معرفة الزوجات الأخريات",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "لا", "حسب الاتفاق"],
          },
          {
            id: "marriageRegistration-inp",
            type: "radiobox",
            name: "marriage_registration",
            placeholder: "نوع تسجيل وتوثيق عقد الزواج",
            label: "نوع تسجيل وتوثيق عقد الزواج",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["مأذون", "مدني"],
          },
          {
            id: "provideMaritalHome-inp",
            type: "radiobox",
            name: "provide_marital_home",
            placeholder: "توفير مسكن للزواج",
            label: "توفير مسكن للزواج",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "لا", "حسب الاتفاق"],
          },
          {
            id: "weddingExpenses-inp",
            type: "radiobox",
            name: "wedding_expenses",
            placeholder: "تكاليف الزواج",
            label: "تكاليف الزواج",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["قادر", "غير قادر", "حسب الاتفاق"],
          },
          {
            id: "financialSupport-inp",
            type: "radiobox",
            name: "financial_support",
            placeholder: "النفقة",
            label: "النفقة",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: [
              "نفقة الزوجة فقط",
              "نفقة الزوجة وأولادها",
              "غير مستعد لتحمل النفقة",
            ],
          },
          {
            id: "notes-inp",
            type: "textarea",
            name: "marriage_details_notes",
            placeholder: "ملاحظات",
            label: "ملاحظات",
            noBorder: true,
            cols: {
              md: 12,
            },
          },
        ],
      },
      {
        title: "متطلبات في الطرف المطلوب للزواج",
        fields: [
          {
            id: "otherMaritalRegistration-inp",
            type: "radiobox",
            name: "other_marital_registration",
            placeholder: "نوع تسجيل وتوثيق عقد الزواج",
            label: "نوع تسجيل وتوثيق عقد الزواج",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["مأذون", "مدني"],
          },
          {
            id: "otherMaritalHome-inp",
            type: "radiobox",
            name: "other_marital_home",
            placeholder: "توفير مسكن للزواج",
            label: "توفير مسكن للزواج",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "لا", "حسب الاتفاق"],
          },
          // start
          {
            id: "weddingCosts-inp",
            type: "radiobox",
            name: "wedding_costs",
            placeholder: "تكاليف الزواج",
            label: "تكاليف الزواج",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["أساسي", "غير أساسي", "حسب الاتفاق"],
          },
          {
            id: "expenses-inp",
            type: "radiobox",
            name: "expenses",
            placeholder: "النفقة",
            label: "النفقة",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["أساسي", "غير أساسي", "حسب الاتفاق"],
          },
          {
            id: "socialStatus-inp",
            type: "radiobox",
            name: "social_status",
            placeholder: "مستوى اجتماعي",
            label: "مستوى اجتماعي",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["راقي", "متوسط", "لا يهم"],
          },
          {
            id: "financialStatus-inp",
            type: "radiobox",
            name: "financial_status",
            placeholder: "مستوى مالي",
            label: "مستوى مالي",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["متيسر", "متوسط", "لا يهم"],
          },
          {
            id: "education-inp",
            type: "radiobox",
            name: "education",
            placeholder: "التعليم",
            label: "التعليم",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["دكتوراه", "ماجستير", "بكالوريوس", "دبلوم", "لا يهم"],
          },
          {
            id: "appearance-inp",
            type: "radiobox",
            name: "appearance",
            label: "الشكل",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["وسيم", "عادي", "حسب القبول"],
          },
          {
            id: "maritalStatus-inp",
            type: "radiobox",
            name: "partner_marital_status",
            placeholder: "الحالة الاجتماعية",
            label: "الحالة الاجتماعية",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["أعزب", "متزوج", "أرمل", "مطلق"],
          },
          {
            id: "children-inp",
            type: "radiobox",
            name: "children",
            placeholder: "وجود أولاد",
            label: "وجود أولاد",
            noBorder: true,
            cols: {
              md: 6,
            },
            options: ["نعم", "بدون أولاد", "لا يهم"],
          },
          {
            id: "notes-inp",
            type: "textarea",
            name: "partner_notes",
            placeholder: "ملاحظات",
            label: "ملاحظات",
            noBorder: true,
            cols: {
              md: 12,
            },
          }, // end
        ],
      },
    ],
  },
};
