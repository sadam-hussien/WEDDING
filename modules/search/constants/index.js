const search_data = [
  {
    title: "السمات الشخصية",
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
        name: "skinColor",
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
        name: "hairColor",
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
        name: "eyeColor",
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
        name: "hairType",
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
        name: "bodyShape",
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
  }
]