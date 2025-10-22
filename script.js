const htmlElement = document.documentElement;
const bodyElement = document.body;
const scrollTopBtn = document.querySelector(".scroll-top");
const transactionForm = document.getElementById("transaction-form");
const transactionAmountInput = document.getElementById("transaction-amount");
const transactionDescArInput = document.getElementById("transaction-desc-ar");
const transactionDescEnInput = document.getElementById("transaction-desc-en");
const caseForm = document.getElementById("case-form");
const caseNumberInput = document.getElementById("case-number");
const casePropertySelect = document.getElementById("case-property");
const caseStatusSelect = document.getElementById("case-status");
const caseStopDateInput = document.getElementById("case-stop-date");
const caseLegalFeesInput = document.getElementById("case-legal-fees");
const caseOverrideAmountInput = document.getElementById("case-override-amount");
const caseCalculatedAmount = document.getElementById("case-calculated-amount");
const caseMonthlyRentInput = document.getElementById("case-monthly-rent");
const caseContractStartInput = document.getElementById("case-contract-start");
const caseTenantArInput = document.getElementById("case-tenant-ar");
const caseTenantEnInput = document.getElementById("case-tenant-en");
const caseActionArInput = document.getElementById("case-action-ar");
const caseActionEnInput = document.getElementById("case-action-en");
const ownerSelect = document.getElementById("owner-select");
const logoutBtn = document.getElementById("logout-btn");
const openAccountSettingsBtn = document.getElementById("open-account-settings");
const accountModal = document.getElementById("account-modal");
const closeAccountModalBtn = document.getElementById("close-account-modal");
const openDataManagerBtn = document.getElementById("open-data-manager");
const dataModal = document.getElementById("data-modal");
const closeDataModalBtn = document.getElementById("close-data-modal");
const credentialsForm = document.getElementById("credentials-form");
const credentialsMessage = document.getElementById("credentials-message");
const summaryPeriod = document.getElementById("summary-period");
const ownerCurrentName = document.getElementById("owner-current-name");
const summaryUnits = document.getElementById("summary-units");
const summaryRevenue = document.getElementById("summary-revenue");
const summaryOverdue = document.getElementById("summary-overdue");
const summaryProfit = document.getElementById("summary-profit");
const summaryMaintenance = document.getElementById("summary-maintenance");
const occupancyPill = document.getElementById("occupancy-pill");
const portfolioBody = document.getElementById("portfolio-body");
const ledgerItemsContainer = document.getElementById("ledger-items");
const ledgerTotal = document.getElementById("ledger-total");
const caseOpenCount = document.getElementById("cases-open-count");
const caseOpenNote = document.getElementById("cases-open-note");
const caseNextHearing = document.getElementById("case-next-hearing");
const caseNextNote = document.getElementById("case-next-note");
const caseClaims = document.getElementById("case-claims");
const caseClaimsNote = document.getElementById("case-claims-note");
const caseBoardUpdate = document.getElementById("case-board-update");
const caseTableBody = document.getElementById("case-table-body");
const summaryForm = document.getElementById("summary-form");
const summaryTotalInput = document.getElementById("summary-total-units");
const summaryOccupiedInput = document.getElementById("summary-occupied-units");
const summaryRevenueInput = document.getElementById("summary-revenue");
const summaryOverdueInput = document.getElementById("summary-overdue");
const summaryProfitInput = document.getElementById("summary-profit");
const summaryMaintenanceInput = document.getElementById("summary-maintenance");
const propertyForm = document.getElementById("property-form");
const propertyIndexInput = document.getElementById("property-index");
const propertyIdInput = document.getElementById("property-id");
const propertyNameArInput = document.getElementById("property-name-ar");
const propertyNameEnInput = document.getElementById("property-name-en");
const propertyTotalInput = document.getElementById("property-total");
const propertyLeasedInput = document.getElementById("property-leased");
const propertyRevenueInput = document.getElementById("property-revenue");
const propertyTenantArInput = document.getElementById("property-tenant-ar");
const propertyTenantEnInput = document.getElementById("property-tenant-en");
const propertyContractStartInput = document.getElementById("property-contract-start");
const propertyMonthlyRentInput = document.getElementById("property-monthly-rent");
const propertyTenantContactInput = document.getElementById("property-tenant-contact");
const propertyList = document.getElementById("property-list");
const ledgerManageForm = document.getElementById("ledger-manage-form");
const ledgerIndexInput = document.getElementById("ledger-index");
const ledgerTypeSelect = document.getElementById("ledger-type");
const ledgerAmountInput = document.getElementById("ledger-amount");
const ledgerDescArInput = document.getElementById("ledger-desc-ar");
const ledgerDescEnInput = document.getElementById("ledger-desc-en");
const ledgerList = document.getElementById("ledger-list");
const caseManageForm = document.getElementById("case-manage-form");
const caseIndexInput = document.getElementById("case-index");
const caseManageNumberInput = document.getElementById("case-manage-number");
const caseManagePropertySelect = document.getElementById("case-manage-property");
const caseManageStatusSelect = document.getElementById("case-manage-status");
const caseManageStopDateInput = document.getElementById("case-manage-stop-date");
const caseManageLegalFeesInput = document.getElementById("case-manage-legal-fees");
const caseManageOverrideInput = document.getElementById("case-manage-override");
const caseManageCalculated = document.getElementById("case-manage-calculated");
const caseManageMonthlyRentInput = document.getElementById("case-manage-monthly-rent");
const caseManageContractStartInput = document.getElementById("case-manage-contract-start");
const caseManageTenantArInput = document.getElementById("case-manage-tenant-ar");
const caseManageTenantEnInput = document.getElementById("case-manage-tenant-en");
const caseManageActionArInput = document.getElementById("case-manage-action-ar");
const caseManageActionEnInput = document.getElementById("case-manage-action-en");
const caseList = document.getElementById("case-list");
const resetSummaryBtn = document.querySelector("[data-reset-summary]");
const resetPropertyBtn = document.querySelector("[data-reset-property]");
const resetLedgerBtn = document.querySelector("[data-reset-ledger]");
const resetCaseBtn = document.querySelector("[data-reset-case]");
const languageControls = document.querySelectorAll("[data-language-control]");
const managePropertiesBtn = document.getElementById("manage-properties-btn");
const manageLedgerBtn = document.getElementById("manage-ledger-btn");
const manageCasesBtn = document.getElementById("manage-cases-btn");

const ACCESS_STORAGE_KEY = "mohamedUaqAccessCode";
const LEGACY_CREDENTIALS_KEY = "mohamedUaqCredentials";
const LANGUAGE_STORAGE_KEY = "mohamedUaqLanguage";
const DATA_STORAGE_KEY = "mohamedUaqOwnerData";
const DEFAULT_ACCESS = {
  code: "11223344",
};

const languageSettings = {
  ar: { dir: "rtl", locale: "ar-AE" },
  en: { dir: "ltr", locale: "en-AE" },
};

const translations = {
  ar: {
    meta: {
      title: "Mohamed UAQ Realestates - نظام إدارة العقارات",
    },
    language: {
      label: "اختر اللغة",
    },
    access: {
      prompt: "أدخل رمز الدخول للوصول إلى المنصة (مثال: 11223344)",
      error: "رمز الدخول غير صحيح. يرجى المحاولة مرة أخرى.",
      cancelled: "تم إلغاء الإدخال. المنصة ستظل مقفلة حتى يتم إدخال الرمز الصحيح.",
    },
    nav: {
      features: "المزايا",
      dashboard: "لوحة التحكم",
      cases: "القضايا الإيجارية",
      reports: "التقارير",
      contact: "تواصل معنا",
      dataManager: "إدارة البيانات",
      account: "إعداد رمز الدخول",
      logout: "قفل المنصة",
      cta: "ابدأ الآن",
    },
    hero: {
      title: "منصة Mohamed UAQ Realestates المتكاملة لإدارة العقارات",
      description:
        "قم بإدارة محفظتك العقارية بسهولة، تتبع الإيرادات والمصروفات، وأصدر الفواتير والتقارير المحاسبية بضغطة زر.",
      primary: "طلب نسخة تجريبية",
      secondary: "شاهد العرض التعريفي",
      summaryTitle: "ملخص المحفظة",
      ownerLabel: "اختر المالك",
      unitsLabel: "عدد الوحدات المؤجرة",
      revenueLabel: "إجمالي الإيرادات",
      overdueLabel: "المستحقات المتأخرة",
      profitLabel: "صافي الربح",
      maintenanceLabel: "مصاريف الصيانة",
      occupancyRate: "نسبة الإشغال {{value}}%",
    },
    features: {
      title: "حل محاسبي متكامل للعقارات",
      subtitle: "كل الأدوات التي تحتاجها لمتابعة محفظتك العقارية وتحليل أدائها المالي",
      cards: {
        management: {
          title: "إدارة الملكيات",
          body: "سجل كل العقارات والوحدات، تابع حالة الإشغال، وضع خطط التسويق والتأجير بسهولة.",
        },
        billing: {
          title: "نظام فواتير ذكي",
          body: "إصدار فواتير الإيجار تلقائيًا، تتبع المدفوعات، وارسل التذكيرات للمستأجرين المتأخرين.",
        },
        reports: {
          title: "تقارير مالية فورية",
          body: "راقب صافي الربح، التدفقات النقدية، والتزاماتك المالية من لوحة القيادة التفاعلية.",
        },
        maintenance: {
          title: "إدارة الصيانة",
          body: "أنشئ أوامر صيانة، تتبع التنفيذ، وراقب الميزانيات والموردين المرتبطين.",
        },
      },
    },
    dashboard: {
      title: "لوحة تحكم الملاك",
      subtitle: "عرض مبسط لحالة الإشغال، التدفقات النقدية، وجدول التحصيل الشهري.",
      portfolio: {
        title: "حافظة العقارات",
        manageButton: "إدارة الحافظة",
        headers: {
          property: "العقار",
          units: "الوحدات",
          leased: "المؤجر",
          revenue: "إيراد شهري",
          manage: "إدارة",
        },
      },
      ledger: {
        title: "دفتر الأستاذ",
        updated: "آخر تحديث اليوم",
        net: "صافي الحركة",
        quickAdd: "إضافة حركة مالية",
        manageButton: "إدارة القيود",
      },
    },
    forms: {
      transaction: {
        typeLabel: "النوع",
        type: {
          income: "إيراد",
          expense: "مصروف",
        },
        descLabel: "الوصف",
        descPlaceholder: "مثل: إيجار شقة 204",
        descLabelAr: "الوصف (عربي)",
        descLabelEn: "الوصف (English)",
        descPlaceholderAr: "مثل: إيجار شقة 204",
        descPlaceholderEn: "e.g. Rent Apartment 204",
        amountLabel: "المبلغ (د.إ)",
        submit: "حفظ الحركة",
      },
    },
    portfolio: {
      empty: "لا توجد عقارات مرتبطة بهذا المالك.",
    },
    ledger: {
      empty: "لا توجد حركات مسجلة لهذا المالك.",
      type: {
        income: "إيراد",
        expense: "مصروف",
      },
    },
    data: {
      close: "إغلاق",
      title: "إدارة بيانات المالك",
      subtitle: "عدل ملخص المالك، الحافظة، دفتر الأستاذ، وسجل القضايا بشكل فوري حسب المالك الحالي.",
      actions: {
        reset: "إلغاء التعديلات",
        edit: "تحرير",
        delete: "حذف",
      },
      summary: {
        heading: "تعديل الملخص المالي",
        caption: "حدث الأرقام الأساسية للوحدات والإيرادات والتكاليف.",
        totalUnits: "إجمالي الوحدات",
        occupiedUnits: "الوحدات المؤجرة",
        revenue: "الإيرادات الشهرية (د.إ)",
        overdue: "المتأخرات (د.إ)",
        profit: "صافي الربح (د.إ)",
        maintenance: "تكاليف الصيانة (د.إ)",
        save: "حفظ الملخص",
      },
      properties: {
        heading: "حافظة العقارات",
        caption: "أدر بيانات العقار، وحداته، والمستأجر المرتبط بالعقد وقيمة الإيجار.",
        nameAr: "اسم العقار (عربي)",
        nameEn: "اسم العقار (English)",
        totalUnits: "إجمالي الوحدات",
        leasedUnits: "الوحدات المؤجرة",
        revenue: "الإيراد الشهري (د.إ)",
        tenantAr: "المستأجر الحالي (عربي)",
        tenantEn: "المستأجر الحالي (English)",
        contractStart: "بداية العقد",
        monthlyRent: "قيمة الإيجار الشهري (د.إ)",
        tenantContact: "رقم/بريد المستأجر",
        save: "حفظ العقار",
        empty: "لا توجد عقارات مضافة بعد لهذا المالك.",
      },
      ledger: {
        heading: "دفتر الأستاذ",
        caption: "تحكم في القيود المالية، نوع الحركة، والقيمة لكل معاملة.",
        type: "النوع",
        amount: "المبلغ (د.إ)",
        descAr: "الوصف (عربي)",
        descEn: "الوصف (English)",
        save: "حفظ الحركة",
        empty: "لا توجد حركات في دفتر الأستاذ لهذا المالك.",
      },
      cases: {
        heading: "القضايا الإيجارية",
        caption:
          "اربط القضايا بالعقار، حدّث بيانات العقد والإيجار، التواريخ، المصاريف، وأعد حساب المطالبات فوراً.",
        number: "رقم القضية",
        property: "العقار المرتبط",
        monthlyRent: "الإيجار الشهري (د.إ)",
        contractStart: "بداية العقد المسجلة",
        status: "الحالة",
        tenantAr: "المستأجر (عربي)",
        tenantEn: "المستأجر (English)",
        stopDate: "تاريخ توقف السداد",
        legalFees: "مصاريف القضية (د.إ)",
        override: "تعديل يدوي",
        actionAr: "آخر إجراء (عربي)",
        actionEn: "آخر إجراء (English)",
        autoAmount: "القيمة المحسوبة",
        save: "حفظ القضية",
        empty: "لا توجد قضايا مسجلة لهذا المالك في الوقت الحالي.",
      },
    },
    cases: {
      title: "نظام إدارة القضايا الإيجارية",
      subtitle:
        "تابع القضايا المرفوعة ضد المستأجرين، سجل الإجراءات القانونية، ونسق مع فرق التحصيل والمحامين عبر لوحة واحدة متكاملة.",
      overview: {
        openTitle: "قضايا مفتوحة",
        nextTitle: "أقرب جلسة",
        claimsTitle: "قيمة المطالبات",
      },
      board: {
        title: "سجل القضايا النشطة",
        headers: {
          number: "رقم القضية",
          property: "العقار",
          tenant: "المستأجر",
          status: "الحالة",
          action: "آخر إجراء",
          amount: "قيمة المطالبة",
          manage: "إدارة",
        },
        breakdown: {
          auto: "الإيجار المتراكم: {{rent}} + مصاريف: {{fees}}",
          override: "قيمة مخصصة: {{value}}",
        },
        meta: {
          contractMissing: "لا يوجد تاريخ بداية عقد مسجل",
          noDetails: "لا توجد بيانات عقد إضافية",
        },
        manageButton: "إدارة القضايا",
      },
      timeline: {
        title: "خطوات المتابعة",
        automation: "مؤتمت",
        steps: {
          open: {
            title: "فتح القضية",
            body: "إدخال بيانات المستأجر وتفاصيل العقد وإرفاق المستندات.",
          },
          notice: {
            title: "الإشعارات القانونية",
            body: "إرسال إنذار بالدفع مع توقيت الإشعارات البريدية والرسائل.",
          },
          prep: {
            title: "التحضير للجلسة",
            body: "تجهيز المذكرات، التكليف بالمحامي، وإرفاق المستندات للمحكمة.",
          },
          collection: {
            title: "تحصيل المبالغ",
            body: "تحديث خطة السداد وربطها مع الحسابات البنكية والمحاسبة.",
          },
        },
      },
      form: {
        title: "تسجيل قضية إيجارية جديدة",
        numberLabel: "رقم القضية",
        numberPlaceholder: "مثل EJ-2024-120",
        tenantLabel: "اسم المستأجر",
        tenantPlaceholder: "اسم المستأجر",
        tenantLabelAr: "اسم المستأجر (عربي)",
        tenantLabelEn: "اسم المستأجر (English)",
        tenantPlaceholderAr: "اسم المستأجر",
        tenantPlaceholderEn: "Tenant name",
        propertyLabel: "العقار المرتبط",
        propertyPlaceholder: "اختر العقار المرتبط",
        propertyHint: "يتم تحميل بيانات المستأجر والعقد تلقائياً ويمكن تعديلها قبل الحفظ.",
        monthlyRentLabel: "قيمة الإيجار الشهري (د.إ)",
        monthlyRentPlaceholder: "مثل 5200",
        contractStartLabel: "بداية العقد",
        contractStartHint: "يُستخدم هذا التاريخ لحساب المتأخرات ويمكن تعديله قبل الحفظ.",
        statusLabel: "حالة القضية",
        status: {
          waiting: "بانتظار جلسة",
          negotiation: "تفاوض",
          judgement: "حكم ابتدائي",
          execution: "تنفيذ",
        },
        stopDateLabel: "تاريخ توقف السداد",
        actionLabel: "آخر إجراء",
        actionPlaceholder: "مثل: إرسال إنذار بالدفع",
        actionLabelAr: "آخر إجراء (عربي)",
        actionLabelEn: "آخر إجراء (English)",
        actionPlaceholderAr: "مثل: إرسال إنذار بالدفع",
        actionPlaceholderEn: "e.g. Payment notice issued",
        legalFeesLabel: "مصاريف القضية (د.إ)",
        overrideLabel: "تعديل يدوي للمطالبة",
        overridePlaceholder: "يمكنك إدخال قيمة مخصصة للمطالبة",
        autoAmount: "القيمة المحسوبة تلقائياً",
        submit: "إضافة القضية",
      },
      status: {
        warning: "بانتظار جلسة",
        info: "تفاوض",
        success: "حكم ابتدائي",
        danger: "تنفيذ",
      },
      empty: "لا توجد قضايا مسجلة لهذا المالك.",
      noOpen: "لا توجد قضايا مفتوحة لهذا المالك.",
      boardUpdatedNow: "تم التحديث الآن",
      count: {
        none: "لا توجد حالات",
        one: "حالة واحدة",
        two: "حالتان",
        few: "{{count}} حالات",
        many: "{{count}} حالة",
      },
    },
    reports: {
      title: "التقارير المحاسبية",
      subtitle: "تابع أداء الاستثمار عبر تقارير شهرية، ميزانيات، ومتابعة التدفقات النقدية.",
      cards: {
        cashflow: {
          title: "التدفقات النقدية",
          body: "عرض تفصيلي للإيرادات والمصروفات حسب الفئة والشهر.",
          items: {
            periods: "تقارير شهرية وربعية وسنوية",
            downloads: "تحميل بصيغة PDF و Excel",
            export: "تصدير تلقائي للمحاسب",
          },
        },
        arrears: {
          title: "متأخرات التحصيل",
          body: "معرفة المستأجرين المتأخرين وتحديد إجراءات المتابعة.",
          items: {
            reminders: "تذكيرات آلية",
            calls: "جدولة مكالمات التحصيل",
            messages: "إرسال رسائل نصية وبريد إلكتروني",
          },
        },
        maintenance: {
          title: "تقارير الصيانة",
          body: "قارن بين الميزانية الفعلية والمتوقعة لكل عقار.",
          items: {
            vendors: "تقييم أداء الموردين",
            archive: "أرشفة الصور والفواتير",
            alerts: "تنبيهات تجاوز الميزانية",
          },
        },
      },
    },
    cta: {
      title: "جاهز لتنظيم إدارة عقاراتك؟",
      subtitle: "تواصل معنا للحصول على عرض مخصص لاحتياجاتك، مع تدريب كامل لفريقك ودعم فني متواصل.",
      form: {
        ownerLabel: "اسم المالك",
        ownerPlaceholder: "الاسم الكامل",
        companyLabel: "اسم الشركة",
        companyPlaceholder: "شركة إدارة",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "example@mail.com",
        sizeLabel: "حجم المحفظة",
        size: {
          less10: "أقل من 10 وحدات",
          between1050: "10 - 50 وحدة",
          between50200: "50 - 200 وحدة",
          more200: "أكثر من 200 وحدة",
        },
        submit: "احجز جلسة تعريفية",
      },
      info: {
        support: {
          title: "دعم فني مباشر",
          body: "فريقنا متواجد على مدار الساعة للإجابة على أسئلتك ومساعدتك.",
        },
        training: {
          title: "تدريب مخصص",
          body: "جلسات تدريبية مجانية لتهيئة فريق الإدارة والمحاسبة لديك.",
        },
        integration: {
          title: "تكامل مع الأنظمة",
          body: "ربط مع أنظمة المحاسبة والبنوك وخدمات الدفع الإلكتروني.",
        },
      },
    },
    footer: {
      tagline: "حلول محاسبية وتنظيمية شاملة للملاك ومديري العقارات.",
      contact: {
        title: "تواصل معنا",
        email: "البريد: support@mohameduaq.com",
        phone: "الهاتف: 050 891 1211",
      },
      follow: {
        title: "تابعنا",
        twitter: "تويتر",
        linkedin: "لينكدإن",
        instagram: "إنستغرام",
      },
    },
    account: {
      close: "إغلاق",
      title: "تحديث رمز الدخول",
      subtitle: "أدخل الرمز الحالي للتأكيد ثم اختر رمز وصول جديدًا.",
      currentCode: "رمز الدخول الحالي",
      newCode: "رمز الدخول الجديد",
      confirmCode: "تأكيد رمز الدخول الجديد",
      submit: "حفظ الرمز",
      feedback: {
        codeInvalid: "الرمز الحالي غير صحيح. تحقق وأعد المحاولة.",
        codeTooShort: "الرمز الجديد يجب أن يتكون من 4 أرقام على الأقل.",
        codeMismatch: "تأكيد الرمز لا يطابق الرمز الجديد.",
        updated: "تم تحديث رمز الدخول بنجاح.",
      },
    },
    scrollTop: "العودة للأعلى",
  },
  en: {
    meta: {
      title: "Mohamed UAQ Realestates - Property Management Suite",
    },
    language: {
      label: "Choose language",
    },
    access: {
      prompt: "Enter the access code to view the platform (example: 11223344)",
      error: "Incorrect access code. Please try again.",
      cancelled: "Entry was cancelled. The platform remains locked until the correct code is provided.",
    },
    nav: {
      features: "Features",
      dashboard: "Dashboard",
      cases: "Rental cases",
      reports: "Reports",
      contact: "Contact",
      dataManager: "Data manager",
      account: "Update access code",
      logout: "Lock platform",
      cta: "Get started",
    },
    hero: {
      title: "Mohamed UAQ Realestates platform for end-to-end property management",
      description:
        "Manage your property portfolio with ease, track income and expenses, and issue invoices and financial reports instantly.",
      primary: "Request a demo",
      secondary: "Watch product tour",
      summaryTitle: "Portfolio summary",
      ownerLabel: "Select owner",
      unitsLabel: "Leased units",
      revenueLabel: "Total revenue",
      overdueLabel: "Outstanding dues",
      profitLabel: "Net profit",
      maintenanceLabel: "Maintenance spend",
      occupancyRate: "Occupancy rate {{value}}%",
    },
    features: {
      title: "An all-in-one accounting solution for real estate",
      subtitle:
        "Everything you need to monitor your property portfolio and analyse its financial performance.",
      cards: {
        management: {
          title: "Property management",
          body: "Register every property and unit, monitor occupancy, and plan leasing and marketing effortlessly.",
        },
        billing: {
          title: "Smart invoicing",
          body: "Generate rent invoices automatically, track payments, and send reminders to late tenants.",
        },
        reports: {
          title: "Instant financial reports",
          body: "Track net profit, cash flow, and liabilities from the interactive dashboard.",
        },
        maintenance: {
          title: "Maintenance oversight",
          body: "Create work orders, monitor execution, and watch supplier budgets in one place.",
        },
      },
    },
    dashboard: {
      title: "Owners dashboard",
      subtitle: "A simplified view of occupancy, cash flow, and monthly collections.",
      portfolio: {
        title: "Property portfolio",
        manageButton: "Manage portfolio",
        headers: {
          property: "Property",
          units: "Units",
          leased: "Leased",
          revenue: "Monthly revenue",
          manage: "Manage",
        },
      },
      ledger: {
        title: "General ledger",
        updated: "Last updated today",
        net: "Net movement",
        quickAdd: "Add financial entry",
        manageButton: "Manage ledger",
      },
    },
    forms: {
      transaction: {
        typeLabel: "Type",
        type: {
          income: "Income",
          expense: "Expense",
        },
        descLabel: "Description",
        descPlaceholder: "e.g. Rent - Apartment 204",
        descLabelAr: "Description (Arabic)",
        descLabelEn: "Description (English)",
        descPlaceholderAr: "مثال: إيجار شقة 204",
        descPlaceholderEn: "e.g. Rent Apartment 204",
        amountLabel: "Amount (AED)",
        submit: "Save entry",
      },
    },
    portfolio: {
      empty: "No properties are linked to this owner.",
    },
    ledger: {
      empty: "No ledger entries recorded for this owner.",
      type: {
        income: "Income",
        expense: "Expense",
      },
    },
    data: {
      close: "Close",
      title: "Manage owner data",
      subtitle: "Update the summary, portfolio, ledger, and cases instantly for the active owner.",
      actions: {
        reset: "Cancel edits",
        edit: "Edit",
        delete: "Delete",
      },
      summary: {
        heading: "Adjust financial summary",
        caption: "Refresh unit counts, revenue, overdue balances, and profitability.",
        totalUnits: "Total units",
        occupiedUnits: "Occupied units",
        revenue: "Monthly revenue (AED)",
        overdue: "Overdue (AED)",
        profit: "Net profit (AED)",
        maintenance: "Maintenance costs (AED)",
        save: "Save summary",
      },
      properties: {
        heading: "Property portfolio",
        caption: "Maintain property details, unit counts, the linked tenant, and lease terms.",
        nameAr: "Property name (Arabic)",
        nameEn: "Property name (English)",
        totalUnits: "Total units",
        leasedUnits: "Leased units",
        revenue: "Monthly revenue (AED)",
        tenantAr: "Current tenant (Arabic)",
        tenantEn: "Current tenant (English)",
        contractStart: "Lease start date",
        monthlyRent: "Monthly rent (AED)",
        tenantContact: "Tenant contact",
        save: "Save property",
        empty: "No properties have been added for this owner yet.",
      },
      ledger: {
        heading: "Ledger entries",
        caption: "Control each transaction type, description, and amount.",
        type: "Type",
        amount: "Amount (AED)",
        descAr: "Description (Arabic)",
        descEn: "Description (English)",
        save: "Save entry",
        empty: "No ledger movements recorded for this owner yet.",
      },
      cases: {
        heading: "Rental cases",
        caption:
          "Link disputes to a property, keep lease and rent data in sync, adjust timelines and fees, and recalculate claims instantly.",
        number: "Case number",
        property: "Linked property",
        monthlyRent: "Monthly rent (AED)",
        contractStart: "Recorded lease start",
        status: "Status",
        tenantAr: "Tenant (Arabic)",
        tenantEn: "Tenant (English)",
        stopDate: "Non-payment date",
        legalFees: "Legal fees (AED)",
        override: "Manual override",
        actionAr: "Last action (Arabic)",
        actionEn: "Last action (English)",
        autoAmount: "Auto-calculated",
        save: "Save case",
        empty: "This owner has no registered cases yet.",
      },
    },
    cases: {
      title: "Rental case management",
      subtitle:
        "Track tenant disputes, log legal actions, and coordinate with collections and legal teams from one unified board.",
      overview: {
        openTitle: "Open cases",
        nextTitle: "Next hearing",
        claimsTitle: "Claim value",
      },
      board: {
        title: "Active case register",
        headers: {
          number: "Case number",
          property: "Property",
          tenant: "Tenant",
          status: "Status",
          action: "Last action",
          amount: "Claim amount",
          manage: "Manage",
        },
        breakdown: {
          auto: "Accrued rent: {{rent}} + Fees: {{fees}}",
          override: "Manual total: {{value}}",
        },
        meta: {
          contractMissing: "No lease start date on file",
          noDetails: "No lease details available",
        },
        manageButton: "Manage cases",
      },
      timeline: {
        title: "Follow-up steps",
        automation: "Automated",
        steps: {
          open: {
            title: "Open the case",
            body: "Capture tenant details, lease terms, and upload supporting documents.",
          },
          notice: {
            title: "Legal notices",
            body: "Send payment notices with scheduled mail and SMS reminders.",
          },
          prep: {
            title: "Hearing preparation",
            body: "Prepare briefs, assign counsel, and submit documents to the court.",
          },
          collection: {
            title: "Collect funds",
            body: "Update the repayment plan and sync with bank accounts and accounting.",
          },
        },
      },
      form: {
        title: "Log a new rental case",
        numberLabel: "Case number",
        numberPlaceholder: "e.g. EJ-2024-120",
        tenantLabel: "Tenant name",
        tenantPlaceholder: "Tenant name",
        tenantLabelAr: "Tenant (Arabic)",
        tenantLabelEn: "Tenant (English)",
        tenantPlaceholderAr: "اسم المستأجر",
        tenantPlaceholderEn: "Tenant name",
        propertyLabel: "Linked property",
        propertyPlaceholder: "Select a property",
        propertyHint: "Tenant and lease data load automatically but can be adjusted before saving.",
        monthlyRentLabel: "Monthly rent (AED)",
        monthlyRentPlaceholder: "e.g. 5200",
        contractStartLabel: "Lease start date",
        contractStartHint: "Used to calculate arrears and can be tweaked before saving.",
        statusLabel: "Case status",
        status: {
          waiting: "Awaiting hearing",
          negotiation: "Negotiation",
          judgement: "Initial ruling",
          execution: "Enforcement",
        },
        stopDateLabel: "Non-payment date",
        actionLabel: "Last action",
        actionPlaceholder: "e.g. Payment notice sent",
        actionLabelAr: "Last action (Arabic)",
        actionLabelEn: "Last action (English)",
        actionPlaceholderAr: "مثل: إرسال إنذار بالدفع",
        actionPlaceholderEn: "e.g. Payment notice issued",
        legalFeesLabel: "Legal fees (AED)",
        overrideLabel: "Manual override",
        overridePlaceholder: "Enter a custom claim if required",
        autoAmount: "Auto-calculated value",
        submit: "Add case",
      },
      status: {
        warning: "Awaiting hearing",
        info: "Negotiation",
        success: "Initial ruling",
        danger: "Enforcement",
      },
      empty: "No rental cases recorded for this owner.",
      noOpen: "No open cases for this owner.",
      boardUpdatedNow: "Updated just now",
      count: {
        none: "No cases",
        one: "1 case",
        two: "2 cases",
        many: "{{count}} cases",
      },
    },
    reports: {
      title: "Financial reporting",
      subtitle:
        "Monitor performance with monthly statements, budgeting insights, and cash-flow tracking.",
      cards: {
        cashflow: {
          title: "Cash flow",
          body: "Detailed breakdown of income and expenses by category and month.",
          items: {
            periods: "Monthly, quarterly, and annual reports",
            downloads: "Download as PDF or Excel",
            export: "Auto-export to your accountant",
          },
        },
        arrears: {
          title: "Collections arrears",
          body: "Identify overdue tenants and plan follow-up actions.",
          items: {
            reminders: "Automated reminders",
            calls: "Scheduled collection calls",
            messages: "Send SMS and email notices",
          },
        },
        maintenance: {
          title: "Maintenance reports",
          body: "Compare actual versus planned budgets for every property.",
          items: {
            vendors: "Supplier performance reviews",
            archive: "Archive photos and invoices",
            alerts: "Budget overrun alerts",
          },
        },
      },
    },
    cta: {
      title: "Ready to streamline your property operations?",
      subtitle:
        "Contact us for a tailored proposal with full team onboarding and ongoing support.",
      form: {
        ownerLabel: "Owner name",
        ownerPlaceholder: "Full name",
        companyLabel: "Company name",
        companyPlaceholder: "Management company",
        emailLabel: "Email",
        emailPlaceholder: "example@mail.com",
        sizeLabel: "Portfolio size",
        size: {
          less10: "Less than 10 units",
          between1050: "10 - 50 units",
          between50200: "50 - 200 units",
          more200: "More than 200 units",
        },
        submit: "Book a discovery call",
      },
      info: {
        support: {
          title: "Live support",
          body: "Our team is available around the clock to answer your questions.",
        },
        training: {
          title: "Tailored training",
          body: "Complimentary sessions to onboard your property and finance teams.",
        },
        integration: {
          title: "System integrations",
          body: "Connect with accounting systems, banks, and digital payment services.",
        },
      },
    },
    footer: {
      tagline: "Comprehensive accounting and operational tools for owners and property managers.",
      contact: {
        title: "Contact",
        email: "Email: support@mohameduaq.com",
        phone: "Phone: +971 50 891 1211",
      },
      follow: {
        title: "Follow us",
        twitter: "Twitter",
        linkedin: "LinkedIn",
        instagram: "Instagram",
      },
    },
    account: {
      close: "Close",
      title: "Update access code",
      subtitle: "Enter the current code to confirm, then choose a new access code.",
      currentCode: "Current access code",
      newCode: "New access code",
      confirmCode: "Confirm new access code",
      submit: "Save code",
      feedback: {
        codeInvalid: "The current code is incorrect. Please try again.",
        codeTooShort: "The new code must be at least 4 characters long.",
        codeMismatch: "Confirmation code does not match the new code.",
        updated: "Access code updated successfully.",
      },
    },
    scrollTop: "Back to top",
  },
};

const translateForLang = (key, lang) => {
  const segments = key.split(".");
  let current = translations[lang];
  for (const segment of segments) {
    if (current == null) {
      return undefined;
    }
    current = current[segment];
  }
  return current;
};

const translate = (key) => translateForLang(key, currentLanguage);

const replaceParams = (template, params = {}) =>
  typeof template === "string"
    ? template.replace(/\{\{(\w+)\}\}/g, (_, param) => {
        const value = params[param];
        return value === undefined ? "" : value;
      })
    : template;

const translateWithParams = (key, params = {}) => {
  const template = translate(key);
  if (typeof template !== "string") {
    return "";
  }
  return replaceParams(template, params);
};

const isStorageAvailable = (() => {
  try {
    const storage = window.localStorage;
    const testKey = "__mohameduaq_test__";
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
})();

const loadLanguage = () => {
  if (isStorageAvailable) {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && languageSettings[stored]) {
      return stored;
    }
  }
  return "ar";
};

let currentLanguage = loadLanguage();

const createBlankOwner = (seed = {}, ownerId = "") => {
  const owner = {
    name: ensureLocalizedObject(seed.name ?? {}),
    period: ensureLocalizedObject(seed.period ?? {}),
    summary: {
      unitsTotal: 0,
      unitsOccupied: 0,
      revenue: 0,
      overdue: 0,
      netProfit: 0,
      maintenance: 0,
      ...(seed.summary ?? {}),
    },
    properties: [],
    ledger: Array.isArray(seed.ledger) ? [...seed.ledger] : [],
    caseOverview: {
      openNote: ensureLocalizedObject((seed.caseOverview ?? {}).openNote ?? {}),
      emptyNote: ensureLocalizedObject((seed.caseOverview ?? {}).emptyNote ?? {}),
      nextHearing: ensureLocalizedObject((seed.caseOverview ?? {}).nextHearing ?? {}),
      nextHearingNote: ensureLocalizedObject((seed.caseOverview ?? {}).nextHearingNote ?? {}),
      claimsNote: ensureLocalizedObject((seed.caseOverview ?? {}).claimsNote ?? {}),
      boardUpdate: ensureLocalizedObject((seed.caseOverview ?? {}).boardUpdate ?? {}),
    },
    cases: [],
  };

  owner.properties = Array.isArray(seed.properties)
    ? seed.properties.map((entry, index) => normalizePropertyEntry(entry, ownerId, index))
    : [];

  owner.cases = Array.isArray(seed.cases)
    ? seed.cases.map((entry) => normalizeCaseEntry(entry, owner, ownerId))
    : [];

  return owner;
};

const mergeOwnerEntry = (base, updates, ownerId = "") => {
  const merged = createBlankOwner(base, ownerId);

  if (!updates) {
    return merged;
  }

  if (updates.name) {
    merged.name = ensureLocalizedObject({ ...merged.name, ...updates.name });
  }

  if (updates.period) {
    merged.period = ensureLocalizedObject({ ...merged.period, ...updates.period });
  }

  if (updates.summary) {
    merged.summary = { ...merged.summary, ...updates.summary };
  }

  if (Array.isArray(updates.properties)) {
    merged.properties = updates.properties.map((entry, index) =>
      normalizePropertyEntry(entry, ownerId, index)
    );
  }

  if (Array.isArray(updates.ledger)) {
    merged.ledger = updates.ledger;
  }

  if (updates.caseOverview) {
    merged.caseOverview = {
      openNote: ensureLocalizedObject({
        ...merged.caseOverview.openNote,
        ...((updates.caseOverview ?? {}).openNote ?? {}),
      }),
      emptyNote: ensureLocalizedObject({
        ...merged.caseOverview.emptyNote,
        ...((updates.caseOverview ?? {}).emptyNote ?? {}),
      }),
      nextHearing: ensureLocalizedObject({
        ...merged.caseOverview.nextHearing,
        ...((updates.caseOverview ?? {}).nextHearing ?? {}),
      }),
      nextHearingNote: ensureLocalizedObject({
        ...merged.caseOverview.nextHearingNote,
        ...((updates.caseOverview ?? {}).nextHearingNote ?? {}),
      }),
      claimsNote: ensureLocalizedObject({
        ...merged.caseOverview.claimsNote,
        ...((updates.caseOverview ?? {}).claimsNote ?? {}),
      }),
      boardUpdate: ensureLocalizedObject({
        ...merged.caseOverview.boardUpdate,
        ...((updates.caseOverview ?? {}).boardUpdate ?? {}),
      }),
    };
  }

  if (Array.isArray(updates.cases)) {
    merged.cases = updates.cases.map((entry) => normalizeCaseEntry(entry, merged, ownerId));
  }

  return merged;
};

const persistOwnerData = () => {
  if (!isStorageAvailable) {
    return;
  }
  try {
    window.localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(ownersData));
  } catch (error) {
    console.error("Unable to persist owner data", error);
  }
};

const restoreOwnerData = () => {
  if (!isStorageAvailable) {
    return;
  }

  const stored = window.localStorage.getItem(DATA_STORAGE_KEY);
  if (!stored) {
    return;
  }

  try {
    const parsed = JSON.parse(stored);
    Object.entries(parsed).forEach(([ownerId, storedOwner]) => {
      const baseOwner = ownersData[ownerId] ?? createBlankOwner({}, ownerId);
      ownersData[ownerId] = mergeOwnerEntry(baseOwner, storedOwner, ownerId);
    });
  } catch (error) {
    console.error("Unable to restore owner data", error);
  }
};

const getLocalizedText = (value, lang = currentLanguage) => {
  if (typeof value === "string") {
    return value;
  }
  if (value && typeof value === "object") {
    return value[lang] ?? value.ar ?? value.en ?? "";
  }
  return "";
};

const applyDocumentLanguage = () => {
  const settings = languageSettings[currentLanguage] ?? languageSettings.ar;
  htmlElement.lang = currentLanguage;
  htmlElement.dir = settings.dir;
  bodyElement.dataset.lang = currentLanguage;
};

const applyTranslationsToElements = () => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translate(key);
    if (typeof translation === "string") {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translation = translate(key);
    if (typeof translation === "string") {
      element.setAttribute("placeholder", translation);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const translation = translate(key);
    if (typeof translation === "string") {
      element.setAttribute("aria-label", translation);
    }
  });

  document.querySelectorAll("[data-i18n-value]").forEach((element) => {
    const key = element.dataset.i18nValue;
    const translation = translate(key);
    if (typeof translation === "string") {
      element.setAttribute("value", translation);
    }
  });
};

const persistLanguage = (language) => {
  if (!isStorageAvailable) {
    return;
  }
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
};

const populateOwnerOptions = () => {
  if (!ownerSelect) {
    return;
  }

  ownerSelect.innerHTML = "";
  ownerIds.forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = getLocalizedText(ownersData[id].name);
    ownerSelect.append(option);
  });

  if (activeOwnerId) {
    ownerSelect.value = activeOwnerId;
  }
};

const applyTranslations = () => {
  applyDocumentLanguage();
  document.title = translate("meta.title");
  languageControls.forEach((control) => {
    if (control.value !== currentLanguage) {
      control.value = currentLanguage;
    }
  });
  applyTranslationsToElements();
  populateOwnerOptions();
  if (activeOwnerId) {
    renderOwnerData(activeOwnerId);
  }
};

const setLanguage = (language) => {
  if (!languageSettings[language]) {
    return;
  }
  currentLanguage = language;
  persistLanguage(language);
  applyTranslations();
};

languageControls.forEach((control) => {
  control.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
});

const loadAccessSettings = () => {
  if (isStorageAvailable) {
    const stored = window.localStorage.getItem(ACCESS_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.code) {
          return parsed;
        }
      } catch (error) {
        window.localStorage.removeItem(ACCESS_STORAGE_KEY);
      }
    }

    const legacyStored = window.localStorage.getItem(LEGACY_CREDENTIALS_KEY);
    if (legacyStored) {
      try {
        const legacyParsed = JSON.parse(legacyStored);
        if (legacyParsed?.password) {
          const migrated = { code: String(legacyParsed.password) };
          persistAccessSettings(migrated);
          window.localStorage.removeItem(LEGACY_CREDENTIALS_KEY);
          return migrated;
        }
      } catch (error) {
        window.localStorage.removeItem(LEGACY_CREDENTIALS_KEY);
      }
    }
  }

  return { ...DEFAULT_ACCESS };
};

const persistAccessSettings = (settings) => {
  if (!isStorageAvailable) {
    return;
  }

  window.localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify(settings));
};

let activeAccess = loadAccessSettings();

const applyAuthState = (isAuthenticated) => {
  bodyElement.classList.toggle("authenticated", isAuthenticated);

  if (!isAuthenticated) {
    accountModal?.classList.remove("open");
    accountModal?.setAttribute("aria-hidden", "true");
  }
};

const requestAccessCode = () => {
  if (typeof window === "undefined") {
    return;
  }

  if (bodyElement.classList.contains("authenticated")) {
    return;
  }

  while (true) {
    const input = window.prompt(translate("access.prompt"), "");

    if (input === null) {
      window.alert(translate("access.cancelled"));
      continue;
    }

    if (input.trim() === activeAccess.code) {
      applyAuthState(true);
      break;
    }

    window.alert(translate("access.error"));
  }
};

const showAccountModal = () => {
  if (!accountModal) {
    return;
  }

  accountModal.classList.add("open");
  accountModal.setAttribute("aria-hidden", "false");
  credentialsForm?.reset();
  if (credentialsMessage) {
    credentialsMessage.textContent = "";
    credentialsMessage.className = "auth-feedback";
  }
  document.getElementById("current-access-code")?.focus();
};

const hideAccountModal = () => {
  if (!accountModal) {
    return;
  }

  accountModal.classList.remove("open");
  accountModal.setAttribute("aria-hidden", "true");
};

const showDataModal = (afterPopulate) => {
  if (!dataModal || !activeOwnerId) {
    return;
  }

  populateDataManager();
  dataModal.classList.add("open");
  dataModal.setAttribute("aria-hidden", "false");
  const modalContent = dataModal.querySelector(".data-modal-content");
  modalContent?.scrollTo({ top: 0, behavior: "auto" });
  if (typeof afterPopulate === "function") {
    afterPopulate();
  } else {
    summaryTotalInput?.focus();
  }
};

const hideDataModal = () => {
  if (!dataModal) {
    return;
  }

  dataModal.classList.remove("open");
  dataModal.setAttribute("aria-hidden", "true");
};

const setFeedbackMessage = (element, message, variant = "") => {
  if (!element) {
    return;
  }

  element.textContent = message;
  element.className = `auth-feedback ${variant}`.trim();
};

if (accountModal && !accountModal.hasAttribute("aria-hidden")) {
  accountModal.setAttribute("aria-hidden", "true");
}

if (dataModal && !dataModal.hasAttribute("aria-hidden")) {
  dataModal.setAttribute("aria-hidden", "true");
}

logoutBtn?.addEventListener("click", () => {
  hideDataModal();
  applyAuthState(false);
  requestAccessCode();
});

openAccountSettingsBtn?.addEventListener("click", showAccountModal);

closeAccountModalBtn?.addEventListener("click", hideAccountModal);

accountModal?.addEventListener("click", (event) => {
  if (event.target === accountModal) {
    hideAccountModal();
  }
});

openDataManagerBtn?.addEventListener("click", () => showDataModal());

managePropertiesBtn?.addEventListener("click", () =>
  showDataModal(() => {
    resetPropertyFormFields();
    const section = propertyForm?.closest(".data-section");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    propertyNameArInput?.focus();
  })
);

manageLedgerBtn?.addEventListener("click", () =>
  showDataModal(() => {
    resetLedgerFormFields();
    const section = ledgerManageForm?.closest(".data-section");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    ledgerDescArInput?.focus();
  })
);

manageCasesBtn?.addEventListener("click", () =>
  showDataModal(() => {
    resetCaseFormFields();
    const section = caseManageForm?.closest(".data-section");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    caseManageNumberInput?.focus();
  })
);

closeDataModalBtn?.addEventListener("click", hideDataModal);

dataModal?.addEventListener("click", (event) => {
  if (event.target === dataModal) {
    hideDataModal();
  }
});

summaryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;

  const total = Math.max(0, Number(summaryTotalInput?.value ?? 0));
  let occupied = Math.max(0, Number(summaryOccupiedInput?.value ?? 0));
  occupied = Math.min(occupied, total);
  const revenue = Math.max(0, Number(summaryRevenueInput?.value ?? 0));
  const overdue = Math.max(0, Number(summaryOverdueInput?.value ?? 0));
  const profit = Number(summaryProfitInput?.value ?? 0);
  const maintenance = Math.max(0, Number(summaryMaintenanceInput?.value ?? 0));

  owner.summary.unitsTotal = total;
  owner.summary.unitsOccupied = occupied;
  owner.summary.revenue = revenue;
  owner.summary.overdue = overdue;
  owner.summary.netProfit = profit;
  owner.summary.maintenance = maintenance;

  persistOwnerData();
  renderOwnerData(activeOwnerId);
  populateSummaryFields(owner);
});

resetSummaryBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  resetSummaryFormFields();
});

propertyForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;

  const nameAr = propertyNameArInput?.value.trim() ?? "";
  const nameEn = propertyNameEnInput?.value.trim() ?? "";
  const totalUnits = Math.max(0, Number(propertyTotalInput?.value ?? 0));
  let leasedUnits = Math.max(0, Number(propertyLeasedInput?.value ?? 0));
  leasedUnits = Math.min(leasedUnits, totalUnits);
  const revenue = Math.max(0, Number(propertyRevenueInput?.value ?? 0));
  const tenantAr = propertyTenantArInput?.value.trim() ?? "";
  const tenantEn = propertyTenantEnInput?.value.trim() ?? "";
  const contractStart = propertyContractStartInput?.value ?? "";
  const monthlyRentInputValue = Number(propertyMonthlyRentInput?.value ?? 0);
  const monthlyRent = sanitizeAmount(monthlyRentInputValue) || revenue;
  const tenantContact = propertyTenantContactInput?.value.trim() ?? "";
  const existingId = propertyIdInput?.value.trim() ?? "";

  if (!nameAr && !nameEn) {
    return;
  }

  const entrySeed = {
    id: existingId,
    name: {
      ar: nameAr || nameEn,
      en: nameEn || nameAr,
    },
    totalUnits,
    leasedUnits,
    monthlyRevenue: revenue,
    tenant: {
      ar: tenantAr || tenantEn,
      en: tenantEn || tenantAr,
    },
    tenantContact,
    contractStart,
    monthlyRent,
  };

  const index = Number(propertyIndexInput?.value ?? -1);
  const normalizedEntry = normalizePropertyEntry(
    entrySeed,
    activeOwnerId,
    Number.isInteger(index) && index >= 0 ? index : owner.properties.length
  );
  if (Number.isInteger(index) && index >= 0 && index < owner.properties.length) {
    owner.properties[index] = normalizedEntry;
  } else {
    owner.properties.unshift(normalizedEntry);
  }

  persistOwnerData();
  renderOwnerData(activeOwnerId);
  populateDataManager();
  resetPropertyFormFields();
});

resetPropertyBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  resetPropertyFormFields();
});

ledgerManageForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;

  const type = ledgerTypeSelect?.value ?? "income";
  const amount = Math.abs(Number(ledgerAmountInput?.value ?? 0));
  const descAr = ledgerDescArInput?.value.trim() ?? "";
  const descEn = ledgerDescEnInput?.value.trim() ?? "";

  if ((!descAr && !descEn) || !amount) {
    return;
  }

  const entry = {
    type,
    description: {
      ar: descAr || descEn,
      en: descEn || descAr,
    },
    amount,
  };

  const index = Number(ledgerIndexInput?.value ?? -1);
  if (Number.isInteger(index) && index >= 0 && index < owner.ledger.length) {
    owner.ledger[index] = entry;
  } else {
    owner.ledger.unshift(entry);
  }

  persistOwnerData();
  renderOwnerData(activeOwnerId);
  populateDataManager();
  resetLedgerFormFields();
});

resetLedgerBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  resetLedgerFormFields();
});

caseManageForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;

  const draft = buildCaseDraftFromManageForm(owner);

  if (
    !draft.number ||
    !draft.propertyId ||
    (!draft.tenant.ar && !draft.tenant.en) ||
    !draft.status ||
    (!draft.lastAction.ar && !draft.lastAction.en) ||
    !draft.stopDate
  ) {
    return;
  }

  const entry = normalizeCaseEntry(draft, owner, activeOwnerId);

  const index = Number(caseIndexInput?.value ?? -1);
  if (Number.isInteger(index) && index >= 0 && index < owner.cases.length) {
    owner.cases[index] = entry;
  } else {
    owner.cases.unshift(entry);
  }

  updateCaseBoardTimestamp(owner);
  persistOwnerData();
  renderOwnerData(activeOwnerId);
  populateDataManager();
  resetCaseFormFields();
});

resetCaseBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  resetCaseFormFields();
});

const bindActionHandler = (root, handler) => {
  root?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) {
      return;
    }
    event.preventDefault();
    const index = Number(button.dataset.index ?? "-1");
    handler(button.dataset.action, index);
  });
};

bindActionHandler(portfolioBody, handlePropertyAction);
bindActionHandler(propertyList, handlePropertyAction);
bindActionHandler(ledgerItemsContainer, handleLedgerAction);
bindActionHandler(ledgerList, handleLedgerAction);
bindActionHandler(caseTableBody, handleCaseAction);
bindActionHandler(caseList, handleCaseAction);

const handleCasePropertyChange = () => {
  if (!activeOwnerId || !casePropertySelect) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;
  const property = owner.properties.find((prop) => prop.id === casePropertySelect.value);
  if (property) {
    applyPropertyToCaseForm(property);
  } else {
    if (caseMonthlyRentInput) {
      caseMonthlyRentInput.value = "";
    }
    if (caseContractStartInput) {
      caseContractStartInput.value = "";
    }
  }
  updateCaseCreationCalculated();
};

const handleCaseManagePropertyChange = () => {
  if (!activeOwnerId || !caseManagePropertySelect) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;
  const property = owner.properties.find((prop) => prop.id === caseManagePropertySelect.value);
  if (property) {
    applyPropertyToCaseForm(property, { manage: true });
  } else {
    if (caseManageMonthlyRentInput) {
      caseManageMonthlyRentInput.value = "";
    }
    if (caseManageContractStartInput) {
      caseManageContractStartInput.value = "";
    }
  }
  updateCaseManageCalculated();
};

casePropertySelect?.addEventListener("change", handleCasePropertyChange);
caseStopDateInput?.addEventListener("change", updateCaseCreationCalculated);
caseStopDateInput?.addEventListener("input", updateCaseCreationCalculated);
caseLegalFeesInput?.addEventListener("input", updateCaseCreationCalculated);
caseOverrideAmountInput?.addEventListener("input", updateCaseCreationCalculated);
caseMonthlyRentInput?.addEventListener("input", updateCaseCreationCalculated);
caseContractStartInput?.addEventListener("change", updateCaseCreationCalculated);
caseContractStartInput?.addEventListener("input", updateCaseCreationCalculated);

caseManagePropertySelect?.addEventListener("change", handleCaseManagePropertyChange);
caseManageStopDateInput?.addEventListener("change", updateCaseManageCalculated);
caseManageStopDateInput?.addEventListener("input", updateCaseManageCalculated);
caseManageLegalFeesInput?.addEventListener("input", updateCaseManageCalculated);
caseManageOverrideInput?.addEventListener("input", updateCaseManageCalculated);
caseManageMonthlyRentInput?.addEventListener("input", updateCaseManageCalculated);
caseManageContractStartInput?.addEventListener("change", updateCaseManageCalculated);
caseManageContractStartInput?.addEventListener("input", updateCaseManageCalculated);

credentialsForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentCode = document.getElementById("current-access-code").value.trim();
  const newCode = document.getElementById("new-access-code").value.trim();
  const confirmCode = document.getElementById("confirm-access-code").value.trim();

  if (currentCode !== activeAccess.code) {
    setFeedbackMessage(credentialsMessage, translate("account.feedback.codeInvalid"), "error");
    return;
  }

  if (!newCode || newCode.length < 4) {
    setFeedbackMessage(credentialsMessage, translate("account.feedback.codeTooShort"), "error");
    return;
  }

  if (newCode !== confirmCode) {
    setFeedbackMessage(credentialsMessage, translate("account.feedback.codeMismatch"), "error");
    return;
  }

  activeAccess = { code: newCode };
  persistAccessSettings(activeAccess);
  setFeedbackMessage(credentialsMessage, translate("account.feedback.updated"), "success");
  credentialsForm.reset();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (dataModal?.classList.contains("open")) {
      hideDataModal();
      return;
    }
    if (accountModal?.classList.contains("open")) {
      hideAccountModal();
    }
  }
});

scrollTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const formatCurrency = (value) =>
  new Intl.NumberFormat(languageSettings[currentLanguage]?.locale ?? "ar-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);

const slugify = (value) =>
  value
    ?.toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalizeDateValue = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) {
    return "";
  }
  const iso = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  return iso.toISOString().slice(0, 10);
};

const generatePropertyId = (ownerId, property, fallbackIndex = 0) => {
  const nameSource = property?.name?.en ?? property?.name?.ar ?? property?.name ?? "";
  const base = slugify(nameSource) || `property-${fallbackIndex + 1}`;
  const ownerSlug = slugify(ownerId ?? "owner");
  return [ownerSlug, base].filter(Boolean).join("-");
};

const sanitizeAmount = (value) => {
  let numeric = value;
  if (typeof numeric === "string") {
    const cleaned = numeric.replace(/[^\d.-]/g, "");
    numeric = Number(cleaned);
  }
  if (!Number.isFinite(numeric)) {
    return 0;
  }
  return Math.max(0, Math.abs(numeric));
};

const ensureLocalizedObject = (value, fallback = "") => {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return { ar: trimmed, en: trimmed };
  }
  if (value && typeof value === "object") {
    const arValue =
      typeof value.ar === "string"
        ? value.ar
        : typeof value.en === "string"
        ? value.en
        : fallback;
    const enValue =
      typeof value.en === "string"
        ? value.en
        : typeof value.ar === "string"
        ? value.ar
        : fallback;
    return { ...value, ar: arValue, en: enValue };
  }
  return { ar: fallback, en: fallback };
};

const normalizePropertyEntry = (property = {}, ownerId = "", index = 0) => {
  const normalized = {
    id: property.id ?? generatePropertyId(ownerId, property, index),
    name: ensureLocalizedObject(property.name ?? {}),
    totalUnits: Number(property.totalUnits ?? 0),
    leasedUnits: Number(property.leasedUnits ?? 0),
    monthlyRevenue: sanitizeAmount(property.monthlyRevenue ?? 0),
    tenant: ensureLocalizedObject(property.tenant ?? {}),
    tenantContact: property.tenantContact ?? "",
    contractStart: normalizeDateValue(property.contractStart),
    monthlyRent: sanitizeAmount(property.monthlyRent ?? property.monthlyRevenue ?? 0),
  };
  return normalized;
};

const normalizeCaseEntry = (caseEntry = {}, owner, ownerId = "") => {
  const property =
    owner?.properties?.find((prop) => prop.id === caseEntry.propertyId) ?? null;
  const propertyName = ensureLocalizedObject(
    caseEntry.propertyName ?? property?.name ?? { ar: "", en: "" }
  );
  const contractStart = normalizeDateValue(
    caseEntry.recordedContractStart ?? property?.contractStart
  );
  const monthlyRent = sanitizeAmount(
    caseEntry.recordedMonthlyRent ??
      property?.monthlyRent ??
      property?.monthlyRevenue ??
      caseEntry.monthlyRent ??
      0
  );
  let overrideAmount =
    caseEntry.overrideAmount === null || caseEntry.overrideAmount === undefined
      ? null
      : Number(caseEntry.overrideAmount);
  if ((overrideAmount === null || Number.isNaN(overrideAmount)) && caseEntry.amount !== undefined) {
    overrideAmount = sanitizeAmount(Number(caseEntry.amount));
  }

  const legalFees = sanitizeAmount(caseEntry.legalFees ?? caseEntry.fees ?? 0);

  return {
    number: caseEntry.number ?? "",
    propertyId:
      caseEntry.propertyId ?? property?.id ?? generatePropertyId(ownerId, { name: propertyName }, 0),
    propertyName,
    tenant: ensureLocalizedObject(caseEntry.tenant ?? {}),
    status: caseEntry.status ?? "warning",
    lastAction: ensureLocalizedObject(caseEntry.lastAction ?? {}),
    stopDate: normalizeDateValue(caseEntry.stopDate),
    legalFees,
    overrideAmount: overrideAmount === null || Number.isNaN(overrideAmount) ? null : overrideAmount,
    recordedMonthlyRent: monthlyRent,
    recordedContractStart: contractStart,
  };
};

const resolvePropertyContext = (owner, caseEntry) => {
  const property =
    owner?.properties?.find((item) => item.id === caseEntry.propertyId) ?? null;
  return {
    id: property?.id ?? caseEntry.propertyId ?? "",
    name: ensureLocalizedObject(property?.name ?? caseEntry.propertyName ?? { ar: "", en: "" }),
    tenant: ensureLocalizedObject(property?.tenant ?? caseEntry.tenant ?? { ar: "", en: "" }),
    tenantContact: property?.tenantContact ?? "",
    contractStart: caseEntry.recordedContractStart || property?.contractStart || "",
    monthlyRent: sanitizeAmount(
      caseEntry.recordedMonthlyRent ??
        property?.monthlyRent ??
        property?.monthlyRevenue ??
        caseEntry.monthlyRent ??
        0
    ),
  };
};

const calculateAccruedRent = (context, stopDate, referenceDate = new Date()) => {
  const rent = Number(context?.monthlyRent ?? 0);
  if (!rent) return 0;

  const effectiveStop = normalizeDateValue(stopDate);
  if (!effectiveStop) return 0;

  const startDate = new Date(`${effectiveStop}T00:00:00Z`);
  const today = new Date(referenceDate);
  const todayUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));

  if (Number.isNaN(startDate.valueOf()) || todayUtc <= startDate) {
    return 0;
  }

  const contractStart = context?.contractStart ? new Date(`${context.contractStart}T00:00:00Z`) : null;
  const accrualStart = contractStart && contractStart > startDate ? contractStart : startDate;
  const diffMs = todayUtc - accrualStart;
  if (diffMs <= 0) {
    return 0;
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const dailyRate = rent / 30;
  return Math.max(0, Math.round((days * dailyRate + Number.EPSILON) * 100) / 100);
};

const calculateCaseFinancials = (owner, caseEntry, referenceDate = new Date()) => {
  const context = resolvePropertyContext(owner, caseEntry);
  const rentDue = calculateAccruedRent(context, caseEntry.stopDate, referenceDate);
  const legalFees = Number(caseEntry.legalFees ?? 0);
  const overrideAmount =
    caseEntry.overrideAmount === null || Number.isNaN(Number(caseEntry.overrideAmount))
      ? null
      : Number(caseEntry.overrideAmount);
  const total = overrideAmount !== null ? overrideAmount : rentDue + legalFees;
  return { context, rentDue, legalFees, total, overrideAmount };
};

const createNameObject = (label) => ({ ar: label ?? "", en: label ?? "" });

const readAmountInput = (input) => {
  if (!input) return 0;
  const raw = Number(input.value ?? 0);
  const sanitized = sanitizeAmount(raw);
  if (!Number.isNaN(raw) && sanitized !== raw) {
    input.value = String(sanitized);
  }
  return sanitized;
};

const readOptionalAmountInput = (input) => {
  if (!input) return null;
  const trimmed = input.value?.trim();
  if (!trimmed) {
    return null;
  }
  const raw = Number(trimmed);
  const sanitized = sanitizeAmount(raw);
  if (!Number.isNaN(raw) && sanitized !== raw) {
    input.value = String(sanitized);
  }
  return sanitized;
};

const setPropertyOptions = (select, owner, { includePlaceholder = false, selectedId, fallbackLabel } = {}) => {
  if (!select || !owner) return;
  const properties = Array.isArray(owner.properties) ? owner.properties : [];
  const previousValue = selectedId ?? select.value;
  select.innerHTML = "";

  if (includePlaceholder) {
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = translate("cases.form.propertyPlaceholder");
    placeholder.disabled = true;
    placeholder.selected = true;
    select.append(placeholder);
  }

  properties.forEach((property) => {
    const option = document.createElement("option");
    option.value = property.id;
    option.textContent = getLocalizedText(property.name);
    select.append(option);
  });

  if (previousValue) {
    const exists = properties.some((property) => property.id === previousValue);
    if (!exists && fallbackLabel) {
      const fallbackOption = document.createElement("option");
      fallbackOption.value = previousValue;
      fallbackOption.textContent = fallbackLabel;
      select.append(fallbackOption);
    }
    select.value = previousValue;
  } else if (includePlaceholder) {
    select.selectedIndex = 0;
  }
};

const populateCasePropertyOptions = (owner, { creationSelected, manageSelected, manageFallbackLabel } = {}) => {
  if (casePropertySelect) {
    setPropertyOptions(casePropertySelect, owner, {
      includePlaceholder: true,
      selectedId: creationSelected,
    });
  }

  if (caseManagePropertySelect) {
    setPropertyOptions(caseManagePropertySelect, owner, {
      includePlaceholder: false,
      selectedId: manageSelected,
      fallbackLabel: manageFallbackLabel,
    });
  }
};

const applyPropertyToCaseForm = (property, { manage = false } = {}) => {
  if (!property) return;
  const tenantAr = getTranslationValue(property.tenant, "ar");
  const tenantEn = getTranslationValue(property.tenant, "en");
  const rentValue = sanitizeAmount(property?.monthlyRent ?? property?.monthlyRevenue ?? 0);
  const contractStart = property?.contractStart ?? "";

  const rentInput = manage ? caseManageMonthlyRentInput : caseMonthlyRentInput;
  const contractInput = manage ? caseManageContractStartInput : caseContractStartInput;

  if (manage) {
    if (caseManageTenantArInput && tenantAr) {
      caseManageTenantArInput.value = tenantAr;
    }
    if (caseManageTenantEnInput && tenantEn) {
      caseManageTenantEnInput.value = tenantEn;
    }
  } else {
    if (caseTenantArInput && tenantAr) {
      caseTenantArInput.value = tenantAr;
    }
    if (caseTenantEnInput && tenantEn) {
      caseTenantEnInput.value = tenantEn;
    }
  }

  if (rentInput) {
    rentInput.value = rentValue ? String(rentValue) : "";
  }

  if (contractInput) {
    contractInput.value = contractStart || "";
  }
};

const buildCaseDraftFromCreationForm = (owner) => {
  const propertyId = casePropertySelect?.value ?? "";
  const property = owner?.properties?.find((prop) => prop.id === propertyId) ?? null;
  const overrideAmount = readOptionalAmountInput(caseOverrideAmountInput);
  const manualRent = readOptionalAmountInput(caseMonthlyRentInput);
  const recordedMonthlyRent =
    manualRent !== null ? manualRent : property?.monthlyRent ?? property?.monthlyRevenue ?? 0;
  const recordedContractStart = caseContractStartInput?.value?.trim() || property?.contractStart || "";
  return {
    number: caseNumberInput?.value.trim() ?? "",
    propertyId,
    propertyName: property?.name ?? createNameObject(casePropertySelect?.selectedOptions?.[0]?.textContent ?? ""),
    tenant: {
      ar: caseTenantArInput?.value.trim() ?? "",
      en: caseTenantEnInput?.value.trim() ?? "",
    },
    status: caseStatusSelect?.value ?? "warning",
    lastAction: {
      ar: caseActionArInput?.value.trim() ?? "",
      en: caseActionEnInput?.value.trim() ?? "",
    },
    stopDate: caseStopDateInput?.value ?? "",
    legalFees: readAmountInput(caseLegalFeesInput),
    overrideAmount,
    recordedMonthlyRent,
    recordedContractStart,
  };
};

const buildCaseDraftFromManageForm = (owner) => {
  const propertyId = caseManagePropertySelect?.value ?? "";
  const property = owner?.properties?.find((prop) => prop.id === propertyId) ?? null;
  const label = caseManagePropertySelect?.selectedOptions?.[0]?.textContent ?? "";
  const overrideAmount = readOptionalAmountInput(caseManageOverrideInput);
  const manualRent = readOptionalAmountInput(caseManageMonthlyRentInput);
  const recordedMonthlyRent =
    manualRent !== null ? manualRent : property?.monthlyRent ?? property?.monthlyRevenue ?? 0;
  const recordedContractStart =
    caseManageContractStartInput?.value?.trim() || property?.contractStart || "";
  return {
    number: caseManageNumberInput?.value.trim() ?? "",
    propertyId,
    propertyName: property?.name ?? createNameObject(label),
    tenant: {
      ar: caseManageTenantArInput?.value.trim() ?? "",
      en: caseManageTenantEnInput?.value.trim() ?? "",
    },
    status: caseManageStatusSelect?.value ?? "warning",
    lastAction: {
      ar: caseManageActionArInput?.value.trim() ?? "",
      en: caseManageActionEnInput?.value.trim() ?? "",
    },
    stopDate: caseManageStopDateInput?.value ?? "",
    legalFees: readAmountInput(caseManageLegalFeesInput),
    overrideAmount,
    recordedMonthlyRent,
    recordedContractStart,
  };
};

const updateCaseCreationCalculated = () => {
  if (!caseCalculatedAmount || !activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) {
    caseCalculatedAmount.textContent = "—";
    return;
  }
  const draft = buildCaseDraftFromCreationForm(owner);
  if (!draft.propertyId || !draft.stopDate) {
    caseCalculatedAmount.textContent = "—";
    return;
  }
  const { total } = calculateCaseFinancials(owner, draft);
  caseCalculatedAmount.textContent = formatCurrency(total);
};

const updateCaseManageCalculated = () => {
  if (!caseManageCalculated || !activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) {
    caseManageCalculated.textContent = "—";
    return;
  }
  const draft = buildCaseDraftFromManageForm(owner);
  if (!draft.propertyId || !draft.stopDate) {
    caseManageCalculated.textContent = "—";
    return;
  }
  const { total } = calculateCaseFinancials(owner, draft);
  caseManageCalculated.textContent = formatCurrency(total);
};

const ownersData = {
  tamimi: {
    name: { ar: "مجموعة التميمي العقارية", en: "Al Tamimi Real Estate Group" },
    period: { ar: "شهر مايو 2024", en: "May 2024" },
    summary: {
      unitsTotal: 24,
      unitsOccupied: 18,
      revenue: 124500,
      overdue: 12700,
      netProfit: 87900,
      maintenance: 9350,
    },
    properties: [
      {
        id: "tamimi-elite-tower",
        name: { ar: "برج النخبة", en: "Elite Tower" },
        totalUnits: 12,
        leasedUnits: 10,
        monthlyRevenue: 62000,
        tenant: { ar: "نورة الشامسي", en: "Noura Al Shamsi" },
        tenantContact: "noura.shamsi@example.ae",
        contractStart: "2023-09-01",
        monthlyRent: 5200,
      },
      {
        id: "tamimi-alsafwa-villas",
        name: { ar: "فلل الصفوة", en: "Al Safwa Villas" },
        totalUnits: 8,
        leasedUnits: 6,
        monthlyRevenue: 38500,
        tenant: { ar: "خالد المنصوري", en: "Khalid Al Mansoori" },
        tenantContact: "+971501234567",
        contractStart: "2022-11-01",
        monthlyRent: 7800,
      },
      {
        id: "tamimi-business-complex",
        name: { ar: "مجمع الأعمال", en: "Business Complex" },
        totalUnits: 4,
        leasedUnits: 2,
        monthlyRevenue: 24000,
        tenant: { ar: "ليلى الحمادي", en: "Laila Al Hammadi" },
        tenantContact: "laila.hamadi@corp.ae",
        contractStart: "2023-04-15",
        monthlyRent: 6800,
      },
    ],
    ledger: [
      { type: "income", description: { ar: "إيجار - شقة 302", en: "Rent - Apartment 302" }, amount: 4500 },
      { type: "expense", description: { ar: "صيانة المصعد", en: "Elevator maintenance" }, amount: 1200 },
      { type: "income", description: { ar: "إيجار - مكتب 12B", en: "Rent - Office 12B" }, amount: 6800 },
    ],
    caseOverview: {
      openNote: {
        ar: "متابعة حالات متنوعة بين جلسات الاستماع والتفاوض.",
        en: "Monitoring a mix of hearings and negotiation stages.",
      },
      emptyNote: {
        ar: "لا توجد قضايا مفتوحة لهذا المالك.",
        en: "No open cases for this owner.",
      },
      nextHearing: { ar: "15 يونيو 2024", en: "15 June 2024" },
      nextHearingNote: {
        ar: "قضية رقم EJ-2024-112 مع المستأجر خالد المنصوري.",
        en: "Case EJ-2024-112 with tenant Khalid Al Mansoori.",
      },
      claimsNote: {
        ar: "موزعة على إيجارات متأخرة وتعويضات تلفيات.",
        en: "Split across overdue rent and damage claims.",
      },
      boardUpdate: { ar: "آخر تحديث قبل ساعة", en: "Last update an hour ago" },
    },
    cases: [
      {
        number: "EJ-2024-108",
        propertyId: "tamimi-elite-tower",
        propertyName: { ar: "برج النخبة", en: "Elite Tower" },
        tenant: { ar: "نورة الشامسي", en: "Noura Al Shamsi" },
        status: "warning",
        lastAction: { ar: "رفع مذكرة دفاع", en: "Defense memo submitted" },
        stopDate: "2024-02-18",
        legalFees: 1500,
        overrideAmount: null,
        recordedMonthlyRent: 5200,
        recordedContractStart: "2023-09-01",
      },
      {
        number: "EJ-2024-112",
        propertyId: "tamimi-alsafwa-villas",
        propertyName: { ar: "فلل الصفوة", en: "Al Safwa Villas" },
        tenant: { ar: "خالد المنصوري", en: "Khalid Al Mansoori" },
        status: "info",
        lastAction: { ar: "تحديد خطة السداد", en: "Repayment plan defined" },
        stopDate: "2024-01-10",
        legalFees: 2200,
        overrideAmount: null,
        recordedMonthlyRent: 7800,
        recordedContractStart: "2022-11-01",
      },
      {
        number: "EJ-2024-097",
        propertyId: "tamimi-business-complex",
        propertyName: { ar: "مجمع الأعمال", en: "Business Complex" },
        tenant: { ar: "ليلى الحمادي", en: "Laila Al Hammadi" },
        status: "success",
        lastAction: { ar: "انتظار التصديق", en: "Awaiting ratification" },
        stopDate: "2023-12-01",
        legalFees: 1850,
        overrideAmount: 18750,
        recordedMonthlyRent: 6800,
        recordedContractStart: "2023-04-15",
      },
    ],
  },
  oasis: {
    name: { ar: "شركة الواحة للاستثمار", en: "Al Waha Investment Co." },
    period: { ar: "شهر مايو 2024", en: "May 2024" },
    summary: {
      unitsTotal: 32,
      unitsOccupied: 27,
      revenue: 158400,
      overdue: 18600,
      netProfit: 102500,
      maintenance: 14200,
    },
    properties: [
      {
        id: "oasis-towers",
        name: { ar: "أبراج الواحة", en: "Oasis Towers" },
        totalUnits: 16,
        leasedUnits: 14,
        monthlyRevenue: 92000,
        tenant: { ar: "سعيد البلوشي", en: "Saeed Al Balushi" },
        tenantContact: "saeed.balushi@oasis.ae",
        contractStart: "2023-06-01",
        monthlyRent: 9500,
      },
      {
        id: "oasis-gulf-gardens",
        name: { ar: "حدائق الخليج", en: "Gulf Gardens" },
        totalUnits: 10,
        leasedUnits: 9,
        monthlyRevenue: 44800,
        tenant: { ar: "شركة أزهار للتجارة", en: "Azhar Trading Co." },
        tenantContact: "legal@azhartrading.ae",
        contractStart: "2022-02-15",
        monthlyRent: 18600,
      },
      {
        id: "oasis-market",
        name: { ar: "سوق الواحة", en: "Oasis Market" },
        totalUnits: 6,
        leasedUnits: 4,
        monthlyRevenue: 21600,
        tenant: { ar: "منى المزروعي", en: "Muna Al Mazrouei" },
        tenantContact: "+971502889900",
        contractStart: "2023-01-05",
        monthlyRent: 7200,
      },
    ],
    ledger: [
      { type: "income", description: { ar: "إيجار - محل 5A", en: "Rent - Retail 5A" }, amount: 12500 },
      { type: "income", description: { ar: "إيجار - فيلا 14", en: "Rent - Villa 14" }, amount: 9500 },
      { type: "expense", description: { ar: "رسوم خدمات شهرية", en: "Monthly service fees" }, amount: 3800 },
      { type: "expense", description: { ar: "حملة تسويق موسمية", en: "Seasonal marketing campaign" }, amount: 2600 },
    ],
    caseOverview: {
      openNote: {
        ar: "متابعة مكثفة مع فريق التحصيل والمستشار القانوني.",
        en: "Intensive follow-up with collections and legal teams.",
      },
      emptyNote: {
        ar: "لا توجد قضايا مفتوحة لهذا المالك حالياً.",
        en: "No open cases for this owner currently.",
      },
      nextHearing: { ar: "28 يونيو 2024", en: "28 June 2024" },
      nextHearingNote: {
        ar: "قضية رقم EJ-2024-145 في مركز تسوية المنازعات الإيجارية.",
        en: "Case EJ-2024-145 at the Rental Dispute Center.",
      },
      claimsNote: {
        ar: "المطالبات تتركز على إيجارات متأخرة ورسوم خدمات.",
        en: "Claims focus on overdue rent and service charges.",
      },
      boardUpdate: { ar: "آخر تحديث منذ ساعتين", en: "Last update two hours ago" },
    },
    cases: [
      {
        number: "EJ-2024-145",
        propertyId: "oasis-towers",
        propertyName: { ar: "أبراج الواحة", en: "Oasis Towers" },
        tenant: { ar: "سعيد البلوشي", en: "Saeed Al Balushi" },
        status: "warning",
        lastAction: { ar: "استلام مذكرة دفاع", en: "Received defense brief" },
        stopDate: "2024-03-05",
        legalFees: 2400,
        overrideAmount: null,
        recordedMonthlyRent: 9500,
        recordedContractStart: "2023-06-01",
      },
      {
        number: "EJ-2024-139",
        propertyId: "oasis-gulf-gardens",
        propertyName: { ar: "حدائق الخليج", en: "Gulf Gardens" },
        tenant: { ar: "شركة أزهار للتجارة", en: "Azhar Trading Co." },
        status: "danger",
        lastAction: { ar: "بدء إجراءات التنفيذ", en: "Initiated enforcement" },
        stopDate: "2023-11-22",
        legalFees: 3200,
        overrideAmount: null,
        recordedMonthlyRent: 18600,
        recordedContractStart: "2022-02-15",
      },
      {
        number: "EJ-2024-133",
        propertyId: "oasis-market",
        propertyName: { ar: "سوق الواحة", en: "Oasis Market" },
        tenant: { ar: "منى المزروعي", en: "Muna Al Mazrouei" },
        status: "info",
        lastAction: { ar: "التفاوض على تسوية", en: "Negotiating settlement" },
        stopDate: "2024-02-01",
        legalFees: 1200,
        overrideAmount: null,
        recordedMonthlyRent: 7200,
        recordedContractStart: "2023-01-05",
      },
    ],
  },
  sama: {
    name: { ar: "شركة سما للتطوير", en: "Sama Development" },
    period: { ar: "شهر أبريل 2024", en: "April 2024" },
    summary: {
      unitsTotal: 18,
      unitsOccupied: 15,
      revenue: 112200,
      overdue: 8400,
      netProfit: 76400,
      maintenance: 5900,
    },
    properties: [
      {
        id: "sama-marina",
        name: { ar: "برج سما مارينا", en: "Sama Marina Tower" },
        totalUnits: 10,
        leasedUnits: 8,
        monthlyRevenue: 67200,
        tenant: { ar: "ياسر الزعابي", en: "Yasir Al Zaabi" },
        tenantContact: "+971503332211",
        contractStart: "2023-05-01",
        monthlyRent: 7700,
      },
      {
        id: "sama-yasmeen",
        name: { ar: "مساكن الياسمين", en: "Yasmeen Residences" },
        totalUnits: 6,
        leasedUnits: 5,
        monthlyRevenue: 33600,
        tenant: { ar: "سارة الكتبي", en: "Sara Al Ketbi" },
        tenantContact: "sara.ketbi@example.com",
        contractStart: "2022-12-10",
        monthlyRent: 5400,
      },
      {
        id: "sama-golden-offices",
        name: { ar: "مكاتب الخليج الذهبي", en: "Golden Gulf Offices" },
        totalUnits: 2,
        leasedUnits: 2,
        monthlyRevenue: 11500,
        tenant: { ar: "شركة أفق للأعمال", en: "Ufuq Business LLC" },
        tenantContact: "ops@ufuqbiz.ae",
        contractStart: "2023-03-20",
        monthlyRent: 11500,
      },
    ],
    ledger: [
      { type: "income", description: { ar: "إيجار - جناح بحري", en: "Rent - Marina suite" }, amount: 18500 },
      { type: "income", description: { ar: "دفعة إيجار ربع سنوية", en: "Quarterly rent payment" }, amount: 42000 },
      { type: "expense", description: { ar: "تجديد لوبي البرج", en: "Tower lobby renovation" }, amount: 9500 },
    ],
    caseOverview: {
      openNote: {
        ar: "قضية واحدة قيد المتابعة لإغلاق إجراءات السداد.",
        en: "One case under review to close repayment procedures.",
      },
      emptyNote: {
        ar: "لا توجد قضايا إيجارية حالياً.",
        en: "No rental cases at the moment.",
      },
      nextHearing: { ar: "لا توجد جلسات مجدولة", en: "No hearings scheduled" },
      nextHearingNote: {
        ar: "سيتم إعلامك فور تحديد جلسة جديدة من قبل المحكمة.",
        en: "You will be notified once the court schedules a new hearing.",
      },
      claimsNote: {
        ar: "المطالبة الأساسية تتعلق بمتأخرات إيجار لشقة فاخرة.",
        en: "Primary claim relates to overdue rent for a premium apartment.",
      },
      boardUpdate: { ar: "آخر تحديث اليوم", en: "Last update today" },
    },
    cases: [
      {
        number: "EJ-2024-156",
        propertyId: "sama-marina",
        propertyName: { ar: "برج سما مارينا", en: "Sama Marina Tower" },
        tenant: { ar: "ياسر الزعابي", en: "Yasir Al Zaabi" },
        status: "success",
        lastAction: { ar: "إصدار الحكم الابتدائي", en: "Initial ruling issued" },
        stopDate: "2023-12-18",
        legalFees: 950,
        overrideAmount: null,
        recordedMonthlyRent: 7700,
        recordedContractStart: "2023-05-01",
      },
    ],
  },
};

Object.entries(ownersData).forEach(([ownerId, owner]) => {
  ownersData[ownerId] = createBlankOwner(owner, ownerId);
});

restoreOwnerData();

const ownerIds = Object.keys(ownersData);
let activeOwnerId = ownerIds[0] ?? null;

const formatCaseCountLabel = (count) => {
  if (currentLanguage === "ar") {
    if (count === 0) return translate("cases.count.none");
    if (count === 1) return translate("cases.count.one");
    if (count === 2) return translateWithParams("cases.count.two", { count });
    if (count >= 3 && count <= 10) return translateWithParams("cases.count.few", { count });
    return translateWithParams("cases.count.many", { count });
  }

  if (count === 0) return translate("cases.count.none");
  if (count === 1) return translate("cases.count.one");
  if (count === 2) return translate("cases.count.two");
  return translateWithParams("cases.count.many", { count });
};

const createActionButton = (action, index, labelKey, icon) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "icon-btn";
  button.dataset.action = action;
  button.dataset.index = String(index);
  const label = translate(labelKey);
  button.setAttribute("aria-label", label);
  button.innerHTML = `<span class="btn-icon" aria-hidden="true">${icon}</span><span class="btn-label">${label}</span>`;
  return button;
};

const getTranslationValue = (value, lang) => {
  if (typeof value === "string") {
    return value;
  }
  if (value && typeof value === "object") {
    return value[lang] ?? value.ar ?? value.en ?? "";
  }
  return "";
};

const updateCaseBoardTimestamp = (owner) => {
  owner.caseOverview.boardUpdate = {
    ar: translateForLang("cases.boardUpdatedNow", "ar"),
    en: translateForLang("cases.boardUpdatedNow", "en"),
  };
};

const renderProperties = (owner) => {
  if (!portfolioBody) return;
  portfolioBody.innerHTML = "";

  if (!owner.properties.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.className = "table-empty";
    cell.textContent = translate("portfolio.empty");
    row.append(cell);
    portfolioBody.append(row);
    return;
  }

  owner.properties.forEach((property, index) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = getLocalizedText(property.name);

    const unitsCell = document.createElement("td");
    unitsCell.textContent = property.totalUnits;

    const leasedCell = document.createElement("td");
    leasedCell.textContent = property.leasedUnits;

    const revenueCell = document.createElement("td");
    revenueCell.textContent = formatCurrency(property.monthlyRevenue);

    const actionsCell = document.createElement("td");
    actionsCell.className = "table-actions";
    const editBtn = createActionButton("edit-property", index, "data.actions.edit", "✏️");
    const deleteBtn = createActionButton("delete-property", index, "data.actions.delete", "🗑️");
    actionsCell.append(editBtn, deleteBtn);

    row.append(nameCell, unitsCell, leasedCell, revenueCell, actionsCell);
    portfolioBody.append(row);
  });
};

const renderLedger = (owner) => {
  if (!ledgerItemsContainer || !ledgerTotal) return;
  ledgerItemsContainer.innerHTML = "";

  if (!owner.ledger.length) {
    const empty = document.createElement("div");
    empty.className = "empty-placeholder";
    empty.textContent = translate("ledger.empty");
    ledgerItemsContainer.append(empty);
  } else {
    owner.ledger.forEach((entry, index) => {
      const ledgerItem = document.createElement("div");
      ledgerItem.className = "ledger-item";

      const info = document.createElement("div");
      info.className = "ledger-info";
      const title = document.createElement("strong");
      title.textContent = getLocalizedText(entry.description);
      const subtitle = document.createElement("span");
      subtitle.textContent = translate(`ledger.type.${entry.type}`);
      info.append(title, subtitle);

      const amount = document.createElement("div");
      amount.className = `amount ${entry.type === "income" ? "positive" : "negative"}`;
      amount.textContent = `${entry.type === "income" ? "+" : "-"} ${formatCurrency(entry.amount)}`;

      const actions = document.createElement("div");
      actions.className = "ledger-actions";
      const editBtn = createActionButton("edit-ledger", index, "data.actions.edit", "✏️");
      const deleteBtn = createActionButton("delete-ledger", index, "data.actions.delete", "🗑️");
      actions.append(editBtn, deleteBtn);

      ledgerItem.append(info, amount, actions);
      ledgerItemsContainer.append(ledgerItem);
    });
  }

  const total = owner.ledger.reduce(
    (acc, entry) => acc + (entry.type === "income" ? entry.amount : -entry.amount),
    0
  );
  const formatted = formatCurrency(Math.abs(total));
  ledgerTotal.textContent = `${total >= 0 ? "+" : "-"} ${formatted}`;
};

const renderCases = (owner) => {
  if (!caseTableBody) return;
  caseTableBody.innerHTML = "";

  if (!owner.cases.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.className = "table-empty";
    cell.textContent = getLocalizedText(owner.caseOverview.emptyNote) || translate("cases.empty");
    row.append(cell);
    caseTableBody.append(row);
  } else {
    owner.cases.forEach((caseItem, index) => {
      const { context, rentDue, legalFees, total, overrideAmount } = calculateCaseFinancials(owner, caseItem);
      const row = document.createElement("tr");

      const numberCell = document.createElement("td");
      numberCell.textContent = caseItem.number;

      const propertyCell = document.createElement("td");
      const propertyName = document.createElement("strong");
      propertyName.textContent = getLocalizedText(context.name);
      propertyCell.append(propertyName);
      const rentSource = context.monthlyRent || caseItem.recordedMonthlyRent || 0;
      const rentValue = Number(rentSource);
      const hasRent = Number.isFinite(rentValue) && rentValue > 0;
      const hasContract = Boolean(context.contractStart);
      const propertyMetaParts = [];
      if (hasRent) {
        propertyMetaParts.push(formatCurrency(rentValue));
      }
      if (hasContract) {
        const contractLabel = translate("data.properties.contractStart");
        propertyMetaParts.push(`${contractLabel}: ${context.contractStart}`);
      } else if (hasRent) {
        const fallbackLabel = translate("cases.board.meta.contractMissing");
        if (fallbackLabel) {
          propertyMetaParts.push(fallbackLabel);
        }
      }
      if (!hasRent && !hasContract) {
        const fallbackLabel = translate("cases.board.meta.noDetails");
        if (fallbackLabel) {
          propertyMetaParts.push(fallbackLabel);
        }
      }
      const metaText = propertyMetaParts.filter(Boolean).join(" · ");
      if (metaText) {
        const propertyMeta = document.createElement("span");
        propertyMeta.className = "secondary-text";
        propertyMeta.textContent = metaText;
        propertyCell.append(propertyMeta);
      }

      const tenantCell = document.createElement("td");
      tenantCell.textContent = getLocalizedText(caseItem.tenant);

      const statusCell = document.createElement("td");
      const statusBadge = document.createElement("span");
      statusBadge.className = `case-status ${caseItem.status}`;
      statusBadge.textContent = translate(`cases.status.${caseItem.status}`);
      statusCell.append(statusBadge);

      const actionCell = document.createElement("td");
      actionCell.textContent = getLocalizedText(caseItem.lastAction);

      const amountCell = document.createElement("td");
      amountCell.className = "case-amount-cell";
      const amountTotal = document.createElement("div");
      amountTotal.className = "amount-total";
      amountTotal.textContent = formatCurrency(total);
      amountCell.append(amountTotal);

      const breakdown = document.createElement("span");
      breakdown.className = "amount-breakdown";
      breakdown.textContent = translateWithParams("cases.board.breakdown.auto", {
        rent: formatCurrency(rentDue),
        fees: formatCurrency(legalFees),
      });
      if (overrideAmount !== null) {
        const overrideLine = document.createElement("span");
        overrideLine.className = "amount-breakdown override";
        overrideLine.textContent = translateWithParams("cases.board.breakdown.override", {
          value: formatCurrency(overrideAmount),
        });
        amountCell.append(overrideLine, breakdown);
      } else {
        amountCell.append(breakdown);
      }

      const manageCell = document.createElement("td");
      manageCell.className = "table-actions";
      const editBtn = createActionButton("edit-case", index, "data.actions.edit", "✏️");
      const deleteBtn = createActionButton("delete-case", index, "data.actions.delete", "🗑️");
      manageCell.append(editBtn, deleteBtn);

      row.append(numberCell, propertyCell, tenantCell, statusCell, actionCell, amountCell, manageCell);
      caseTableBody.append(row);
    });
  }

  const claimsTotal = owner.cases.reduce(
    (total, entry) => total + calculateCaseFinancials(owner, entry).total,
    0
  );

  if (caseClaims) {
    caseClaims.textContent = formatCurrency(claimsTotal);
  }

  if (caseOpenCount) {
    caseOpenCount.textContent = formatCaseCountLabel(owner.cases.length);
  }

  if (caseOpenNote) {
    caseOpenNote.textContent = owner.cases.length
      ? getLocalizedText(owner.caseOverview.openNote)
      : getLocalizedText(owner.caseOverview.emptyNote) || translate("cases.noOpen");
  }

  if (caseNextHearing) {
    caseNextHearing.textContent = getLocalizedText(owner.caseOverview.nextHearing);
  }

  if (caseNextNote) {
    caseNextNote.textContent = getLocalizedText(owner.caseOverview.nextHearingNote);
  }

  if (caseClaimsNote) {
    caseClaimsNote.textContent = getLocalizedText(owner.caseOverview.claimsNote);
  }

  if (caseBoardUpdate) {
    caseBoardUpdate.textContent = getLocalizedText(owner.caseOverview.boardUpdate);
  }
};

const populateSummaryFields = (owner) => {
  if (!summaryForm) return;
  if (summaryTotalInput) {
    summaryTotalInput.value = owner.summary.unitsTotal ?? 0;
  }
  if (summaryOccupiedInput) {
    summaryOccupiedInput.value = owner.summary.unitsOccupied ?? 0;
  }
  if (summaryRevenueInput) {
    summaryRevenueInput.value = owner.summary.revenue ?? 0;
  }
  if (summaryOverdueInput) {
    summaryOverdueInput.value = owner.summary.overdue ?? 0;
  }
  if (summaryProfitInput) {
    summaryProfitInput.value = owner.summary.netProfit ?? 0;
  }
  if (summaryMaintenanceInput) {
    summaryMaintenanceInput.value = owner.summary.maintenance ?? 0;
  }
};

const renderPropertyManagerList = (owner) => {
  if (!propertyList) return;
  propertyList.innerHTML = "";

  if (!owner.properties.length) {
    const empty = document.createElement("li");
    empty.className = "empty-placeholder";
    empty.textContent = translate("data.properties.empty");
    propertyList.append(empty);
    return;
  }

  owner.properties.forEach((property, index) => {
    const item = document.createElement("li");
    item.className = "data-list-item";

    const header = document.createElement("header");
    const title = document.createElement("strong");
    title.textContent = getLocalizedText(property.name);
    const actions = document.createElement("div");
    actions.className = "data-list-actions";
    actions.append(
      createActionButton("edit-property", index, "data.actions.edit", "✏️"),
      createActionButton("delete-property", index, "data.actions.delete", "🗑️")
    );
    header.append(title, actions);

    const secondary = document.createElement("span");
    const altLang = currentLanguage === "ar" ? "en" : "ar";
    secondary.textContent = getTranslationValue(property.name, altLang);
    secondary.className = "secondary-text";

    const footer = document.createElement("footer");
    const unitsBadge = document.createElement("span");
    unitsBadge.textContent = `${translate("dashboard.portfolio.headers.leased")}: ${property.leasedUnits}/${property.totalUnits}`;
    const revenueBadge = document.createElement("span");
    revenueBadge.textContent = `${translate("dashboard.portfolio.headers.revenue")}: ${formatCurrency(property.monthlyRevenue)}`;
    footer.append(unitsBadge, revenueBadge);

    item.append(header);
    if (secondary.textContent.trim()) {
      item.append(secondary);
    }
    item.append(footer);
    propertyList.append(item);
  });
};

const renderLedgerManagerList = (owner) => {
  if (!ledgerList) return;
  ledgerList.innerHTML = "";

  if (!owner.ledger.length) {
    const empty = document.createElement("li");
    empty.className = "empty-placeholder";
    empty.textContent = translate("data.ledger.empty");
    ledgerList.append(empty);
    return;
  }

  owner.ledger.forEach((entry, index) => {
    const item = document.createElement("li");
    item.className = "data-list-item";

    const header = document.createElement("header");
    const title = document.createElement("strong");
    title.textContent = getLocalizedText(entry.description);
    const actions = document.createElement("div");
    actions.className = "data-list-actions";
    actions.append(
      createActionButton("edit-ledger", index, "data.actions.edit", "✏️"),
      createActionButton("delete-ledger", index, "data.actions.delete", "🗑️")
    );
    header.append(title, actions);

    const footer = document.createElement("footer");
    const typeBadge = document.createElement("span");
    typeBadge.textContent = translate(`ledger.type.${entry.type}`);
    const amountBadge = document.createElement("span");
    amountBadge.textContent = formatCurrency(entry.amount);
    footer.append(typeBadge, amountBadge);

    item.append(header, footer);
    ledgerList.append(item);
  });
};

const renderCaseManagerList = (owner) => {
  if (!caseList) return;
  caseList.innerHTML = "";

  if (!owner.cases.length) {
    const empty = document.createElement("li");
    empty.className = "empty-placeholder";
    empty.textContent = translate("data.cases.empty");
    caseList.append(empty);
    return;
  }

  owner.cases.forEach((caseItem, index) => {
    const { context, rentDue, legalFees, total, overrideAmount } = calculateCaseFinancials(owner, caseItem);
    const item = document.createElement("li");
    item.className = "data-list-item";

    const header = document.createElement("header");
    const title = document.createElement("strong");
    title.textContent = caseItem.number;
    const actions = document.createElement("div");
    actions.className = "data-list-actions";
    actions.append(
      createActionButton("edit-case", index, "data.actions.edit", "✏️"),
      createActionButton("delete-case", index, "data.actions.delete", "🗑️")
    );
    header.append(title, actions);

    const secondary = document.createElement("span");
    const propertyName = getLocalizedText(context.name);
    const tenantName = getLocalizedText(caseItem.tenant);
    secondary.textContent = propertyName
      ? `${propertyName} • ${tenantName}`
      : tenantName;
    secondary.className = "secondary-text";

    const footer = document.createElement("footer");
    const statusBadge = document.createElement("span");
    statusBadge.textContent = translate(`cases.status.${caseItem.status}`);
    const amountBadge = document.createElement("span");
    amountBadge.textContent = formatCurrency(total);
    amountBadge.title = translateWithParams("cases.board.breakdown.auto", {
      rent: formatCurrency(rentDue),
      fees: formatCurrency(legalFees),
    });
    if (overrideAmount !== null) {
      amountBadge.title += `\n${translateWithParams("cases.board.breakdown.override", {
        value: formatCurrency(overrideAmount),
      })}`;
    }
    footer.append(statusBadge, amountBadge);

    item.append(header);
    if (secondary.textContent.trim()) {
      item.append(secondary);
    }
    item.append(footer);
    caseList.append(item);
  });
};

const populateDataManager = () => {
  if (!activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;

  resetPropertyFormFields();
  resetLedgerFormFields();
  resetCaseFormFields();
  populateSummaryFields(owner);
  renderPropertyManagerList(owner);
  renderLedgerManagerList(owner);
  renderCaseManagerList(owner);
  populateCasePropertyOptions(owner, {
    creationSelected: casePropertySelect?.value,
    manageSelected: caseManagePropertySelect?.value,
  });
};

const resetSummaryFormFields = () => {
  if (!activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (owner) {
    populateSummaryFields(owner);
  }
};

const resetPropertyFormFields = () => {
  propertyForm?.reset();
  if (propertyIndexInput) {
    propertyIndexInput.value = -1;
  }
  if (propertyIdInput) {
    propertyIdInput.value = "";
  }
};

const resetLedgerFormFields = () => {
  ledgerManageForm?.reset();
  if (ledgerIndexInput) {
    ledgerIndexInput.value = -1;
  }
  if (ledgerTypeSelect) {
    ledgerTypeSelect.value = "income";
  }
};

const resetCaseFormFields = () => {
  caseManageForm?.reset();
  if (caseIndexInput) {
    caseIndexInput.value = -1;
  }
  if (caseManagePropertySelect) {
    caseManagePropertySelect.value = "";
  }
  if (caseManageCalculated) {
    caseManageCalculated.textContent = "—";
  }
};

const handlePropertyAction = (action, index) => {
  if (!activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;

  if (action === "edit-property") {
    const property = owner.properties[index];
    if (!property) return;

    showDataModal(() => {
      resetPropertyFormFields();
      if (propertyIndexInput) {
        propertyIndexInput.value = index;
      }
      if (propertyIdInput) {
        propertyIdInput.value = property.id ?? "";
      }
      if (propertyNameArInput) {
        propertyNameArInput.value = getTranslationValue(property.name, "ar");
      }
      if (propertyNameEnInput) {
        propertyNameEnInput.value = getTranslationValue(property.name, "en");
      }
      if (propertyTotalInput) {
        propertyTotalInput.value = property.totalUnits ?? 0;
      }
      if (propertyLeasedInput) {
        propertyLeasedInput.value = property.leasedUnits ?? 0;
      }
      if (propertyRevenueInput) {
        propertyRevenueInput.value = property.monthlyRevenue ?? 0;
      }
      if (propertyTenantArInput) {
        propertyTenantArInput.value = getTranslationValue(property.tenant, "ar");
      }
      if (propertyTenantEnInput) {
        propertyTenantEnInput.value = getTranslationValue(property.tenant, "en");
      }
      if (propertyContractStartInput) {
        propertyContractStartInput.value = property.contractStart ?? "";
      }
      if (propertyMonthlyRentInput) {
        propertyMonthlyRentInput.value = property.monthlyRent ?? property.monthlyRevenue ?? 0;
      }
      if (propertyTenantContactInput) {
        propertyTenantContactInput.value = property.tenantContact ?? "";
      }
      propertyNameArInput?.focus();
      propertyForm?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return;
  }

  if (action === "delete-property") {
    if (index < 0 || index >= owner.properties.length) return;
    owner.properties.splice(index, 1);
    persistOwnerData();
    renderOwnerData(activeOwnerId);
    if (dataModal?.classList.contains("open")) {
      populateDataManager();
    }
  }
};

const handleLedgerAction = (action, index) => {
  if (!activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;

  if (action === "edit-ledger") {
    const entry = owner.ledger[index];
    if (!entry) return;

    showDataModal(() => {
      resetLedgerFormFields();
      if (ledgerIndexInput) {
        ledgerIndexInput.value = index;
      }
      if (ledgerTypeSelect && entry.type) {
        ledgerTypeSelect.value = entry.type;
      }
      if (ledgerAmountInput) {
        ledgerAmountInput.value = entry.amount ?? 0;
      }
      if (ledgerDescArInput) {
        ledgerDescArInput.value = getTranslationValue(entry.description, "ar");
      }
      if (ledgerDescEnInput) {
        ledgerDescEnInput.value = getTranslationValue(entry.description, "en");
      }
      ledgerDescArInput?.focus();
      ledgerManageForm?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return;
  }

  if (action === "delete-ledger") {
    if (index < 0 || index >= owner.ledger.length) return;
    owner.ledger.splice(index, 1);
    persistOwnerData();
    renderOwnerData(activeOwnerId);
    if (dataModal?.classList.contains("open")) {
      populateDataManager();
    }
  }
};

const handleCaseAction = (action, index) => {
  if (!activeOwnerId) return;
  const owner = ownersData[activeOwnerId];
  if (!owner) return;

  if (action === "edit-case") {
    const entry = owner.cases[index];
    if (!entry) return;
    const property = owner.properties.find((prop) => prop.id === entry.propertyId) ?? null;

    showDataModal(() => {
      resetCaseFormFields();
      if (caseIndexInput) {
        caseIndexInput.value = index;
      }
      if (caseManageNumberInput) {
        caseManageNumberInput.value = entry.number ?? "";
      }
      if (caseManageStatusSelect && entry.status) {
        caseManageStatusSelect.value = entry.status;
      }
      const fallbackLabel = getLocalizedText(entry.propertyName) || entry.propertyId || "";
      populateCasePropertyOptions(owner, {
        creationSelected: casePropertySelect?.value,
        manageSelected: entry.propertyId,
        manageFallbackLabel: fallbackLabel,
      });
      if (caseManagePropertySelect && entry.propertyId) {
        caseManagePropertySelect.value = entry.propertyId;
      }
      if (property) {
        applyPropertyToCaseForm(property, { manage: true });
      }
      if (caseManageStopDateInput) {
        caseManageStopDateInput.value = entry.stopDate ?? "";
      }
      if (caseManageLegalFeesInput) {
        caseManageLegalFeesInput.value = entry.legalFees ?? 0;
      }
      if (caseManageOverrideInput) {
        caseManageOverrideInput.value = entry.overrideAmount ?? "";
      }
      if (caseManageMonthlyRentInput) {
        caseManageMonthlyRentInput.value =
          entry.recordedMonthlyRent !== null && entry.recordedMonthlyRent !== undefined
            ? entry.recordedMonthlyRent
            : "";
      }
      if (caseManageContractStartInput) {
        caseManageContractStartInput.value = entry.recordedContractStart ?? "";
      }
      if (caseManageTenantArInput) {
        caseManageTenantArInput.value = getTranslationValue(entry.tenant, "ar");
      }
      if (caseManageTenantEnInput) {
        caseManageTenantEnInput.value = getTranslationValue(entry.tenant, "en");
      }
      if (caseManageActionArInput) {
        caseManageActionArInput.value = getTranslationValue(entry.lastAction, "ar");
      }
      if (caseManageActionEnInput) {
        caseManageActionEnInput.value = getTranslationValue(entry.lastAction, "en");
      }
      updateCaseManageCalculated();
      caseManageNumberInput?.focus();
      caseManageForm?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return;
  }

  if (action === "delete-case") {
    if (index < 0 || index >= owner.cases.length) return;
    owner.cases.splice(index, 1);
    updateCaseBoardTimestamp(owner);
    persistOwnerData();
    renderOwnerData(activeOwnerId);
    if (dataModal?.classList.contains("open")) {
      populateDataManager();
    }
  }
};

const renderOwnerData = (ownerId) => {
  const owner = ownersData[ownerId];
  if (!owner) {
    return;
  }

  activeOwnerId = ownerId;

  if (ownerSelect && ownerSelect.value !== ownerId) {
    ownerSelect.value = ownerId;
  }

  if (summaryPeriod) {
    summaryPeriod.textContent = getLocalizedText(owner.period);
  }

  if (ownerCurrentName) {
    ownerCurrentName.textContent = getLocalizedText(owner.name);
  }

  if (summaryUnits) {
    summaryUnits.textContent = `${owner.summary.unitsOccupied} / ${owner.summary.unitsTotal}`;
  }

  if (summaryRevenue) {
    summaryRevenue.textContent = formatCurrency(owner.summary.revenue);
  }

  if (summaryOverdue) {
    summaryOverdue.textContent = formatCurrency(owner.summary.overdue);
  }

  if (summaryProfit) {
    summaryProfit.textContent = formatCurrency(owner.summary.netProfit);
  }

  if (summaryMaintenance) {
    summaryMaintenance.textContent = formatCurrency(owner.summary.maintenance);
  }

  if (occupancyPill) {
    const rate = owner.summary.unitsTotal
      ? Math.round((owner.summary.unitsOccupied / owner.summary.unitsTotal) * 100)
      : 0;
    occupancyPill.textContent = translateWithParams("hero.occupancyRate", { value: rate });
  }

  renderProperties(owner);
  renderLedger(owner);
  renderCases(owner);
  populateCasePropertyOptions(owner, {
    creationSelected: casePropertySelect?.value,
    manageSelected: caseManagePropertySelect?.value,
  });

  if (dataModal?.classList.contains("open")) {
    populateDataManager();
  }
};

if (activeOwnerId) {
  populateOwnerOptions();
  renderOwnerData(activeOwnerId);
}

ownerSelect?.addEventListener("change", (event) => {
  renderOwnerData(event.target.value);
});

transactionForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!activeOwnerId) {
    return;
  }

  const owner = ownersData[activeOwnerId];
  if (!owner) {
    return;
  }

  const type = document.getElementById("transaction-type").value;
  const descAr = transactionDescArInput?.value.trim() ?? "";
  const descEn = transactionDescEnInput?.value.trim() ?? "";
  const amountValue = Math.abs(Number(transactionAmountInput?.value ?? 0));

  if ((!descAr && !descEn) || !amountValue) {
    return;
  }

  owner.ledger.unshift({
    type,
    description: {
      ar: descAr || descEn,
      en: descEn || descAr,
    },
    amount: amountValue,
  });

  transactionForm.reset();
  persistOwnerData();
  renderOwnerData(activeOwnerId);
});

caseForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!activeOwnerId) {
    return;
  }

  const owner = ownersData[activeOwnerId];
  if (!owner) {
    return;
  }

  const draft = buildCaseDraftFromCreationForm(owner);

  if (
    !draft.number ||
    !draft.propertyId ||
    (!draft.tenant.ar && !draft.tenant.en) ||
    !draft.status ||
    (!draft.lastAction.ar && !draft.lastAction.en) ||
    !draft.stopDate
  ) {
    return;
  }

  const normalizedEntry = normalizeCaseEntry(draft, owner, activeOwnerId);
  owner.cases.unshift(normalizedEntry);

  updateCaseBoardTimestamp(owner);

  caseForm.reset();
  if (caseCalculatedAmount) {
    caseCalculatedAmount.textContent = "—";
  }
  populateCasePropertyOptions(owner, { creationSelected: "", manageSelected: caseManagePropertySelect?.value });
  persistOwnerData();
  renderOwnerData(activeOwnerId);
});

const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

const observer = new IntersectionObserver(
  ([entry]) => {
    navbar.classList.toggle("navbar-shadow", !entry.isIntersecting);
  },
  { threshold: 0.6 }
);

if (hero) {
  observer.observe(hero);
}

applyTranslations();
applyAuthState(false);
requestAccessCode();
updateCaseCreationCalculated();
updateCaseManageCalculated();

setInterval(() => {
  if (!activeOwnerId) return;
  if (dataModal?.classList.contains("open") || accountModal?.classList.contains("open")) {
    return;
  }
  renderOwnerData(activeOwnerId);
}, 60 * 60 * 1000);
