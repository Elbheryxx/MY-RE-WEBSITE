const htmlElement = document.documentElement;
const bodyElement = document.body;
const scrollTopBtn = document.querySelector(".scroll-top");
const transactionForm = document.getElementById("transaction-form");
const caseForm = document.getElementById("case-form");
const ownerSelect = document.getElementById("owner-select");
const authOverlay = document.getElementById("auth-overlay");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const logoutBtn = document.getElementById("logout-btn");
const openAccountSettingsBtn = document.getElementById("open-account-settings");
const accountModal = document.getElementById("account-modal");
const closeAccountModalBtn = document.getElementById("close-account-modal");
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
const languageControls = document.querySelectorAll("[data-language-control]");

const STORAGE_KEY = "mohamedUaqCredentials";
const LANGUAGE_STORAGE_KEY = "mohamedUaqLanguage";
const DEFAULT_CREDENTIALS = {
  username: "Elbhery",
  password: "0508911211",
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
    auth: {
      title: "تسجيل الدخول",
      description: "يرجى إدخال بيانات الاعتماد الخاصة بك للوصول إلى لوحة التحكم.",
      usernameLabel: "اسم المستخدم",
      usernamePlaceholder: "اكتب اسم المستخدم",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "اكتب كلمة المرور",
      submit: "دخول",
      hint: "بعد تسجيل الدخول يمكنك تحديث بيانات الدخول من إعدادات الحساب.",
      errorInvalid: "بيانات الدخول غير صحيحة. يرجى المحاولة مرة أخرى.",
    },
    nav: {
      features: "المزايا",
      dashboard: "لوحة التحكم",
      cases: "القضايا الإيجارية",
      reports: "التقارير",
      contact: "تواصل معنا",
      account: "إعدادات الحساب",
      logout: "تسجيل الخروج",
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
        headers: {
          property: "العقار",
          units: "الوحدات",
          leased: "المؤجر",
          revenue: "إيراد شهري",
        },
      },
      ledger: {
        title: "دفتر الأستاذ",
        updated: "آخر تحديث اليوم",
        net: "صافي الحركة",
        quickAdd: "إضافة حركة مالية",
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
          tenant: "المستأجر",
          status: "الحالة",
          action: "آخر إجراء",
          amount: "قيمة المطالبة",
        },
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
        statusLabel: "حالة القضية",
        status: {
          waiting: "بانتظار جلسة",
          negotiation: "تفاوض",
          judgement: "حكم ابتدائي",
          execution: "تنفيذ",
        },
        actionLabel: "آخر إجراء",
        actionPlaceholder: "مثل: إرسال إنذار بالدفع",
        amountLabel: "قيمة المطالبة (د.إ)",
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
      title: "تحديث بيانات الدخول",
      subtitle: "أدخل البيانات الحالية للتأكيد ثم اختر اسم مستخدم وكلمة مرور جديدة.",
      currentUsername: "اسم المستخدم الحالي",
      currentPassword: "كلمة المرور الحالية",
      newUsername: "اسم المستخدم الجديد",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور الجديدة",
      submit: "حفظ التغييرات",
      feedback: {
        credentialsInvalid: "البيانات الحالية غير مطابقة. تحقق وأعد المحاولة.",
        usernameInvalid: "يرجى إدخال اسم مستخدم جديد صالح.",
        passwordMismatch: "تأكيد كلمة المرور غير متطابق.",
        passwordWeak:
          "يجب أن تحتوي كلمة المرور على 10 أحرف على الأقل مع حروف كبيرة وصغيرة وأرقام ورمز خاص واحد على الأقل.",
        updated: "تم تحديث بيانات الدخول بنجاح.",
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
    auth: {
      title: "Sign in",
      description: "Enter your credentials to access the management dashboard.",
      usernameLabel: "Username",
      usernamePlaceholder: "Enter username",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      submit: "Log in",
      hint: "After signing in you can update the credentials from account settings.",
      errorInvalid: "Incorrect username or password. Please try again.",
    },
    nav: {
      features: "Features",
      dashboard: "Dashboard",
      cases: "Rental cases",
      reports: "Reports",
      contact: "Contact",
      account: "Account settings",
      logout: "Log out",
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
        headers: {
          property: "Property",
          units: "Units",
          leased: "Leased",
          revenue: "Monthly revenue",
        },
      },
      ledger: {
        title: "General ledger",
        updated: "Last updated today",
        net: "Net movement",
        quickAdd: "Add financial entry",
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
          tenant: "Tenant",
          status: "Status",
          action: "Last action",
          amount: "Claim amount",
        },
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
        statusLabel: "Case status",
        status: {
          waiting: "Awaiting hearing",
          negotiation: "Negotiation",
          judgement: "Initial ruling",
          execution: "Enforcement",
        },
        actionLabel: "Last action",
        actionPlaceholder: "e.g. Payment notice sent",
        amountLabel: "Claim amount (AED)",
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
      title: "Update credentials",
      subtitle: "Enter the current details to confirm, then choose a new username and password.",
      currentUsername: "Current username",
      currentPassword: "Current password",
      newUsername: "New username",
      newPassword: "New password",
      confirmPassword: "Confirm new password",
      submit: "Save changes",
      feedback: {
        credentialsInvalid: "The current credentials do not match. Please try again.",
        usernameInvalid: "Please enter a valid new username.",
        passwordMismatch: "Password confirmation does not match.",
        passwordWeak:
          "Passwords must be at least 10 characters and include uppercase, lowercase, numbers, and a special symbol.",
        updated: "Credentials updated successfully.",
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

const loadCredentials = () => {
  if (isStorageAvailable) {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.username && parsed?.password) {
          return parsed;
        }
      } catch (error) {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }

  return { ...DEFAULT_CREDENTIALS };
};

const persistCredentials = (credentials) => {
  if (!isStorageAvailable) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(credentials));
};

let activeCredentials = loadCredentials();

const toggleAuthOverlay = (isVisible) => {
  if (!authOverlay) {
    return;
  }

  authOverlay.classList.toggle("overlay-hidden", !isVisible);
  authOverlay.setAttribute("aria-hidden", String(!isVisible));

  if (isVisible) {
    loginForm?.reset();
    if (loginError) {
      loginError.textContent = "";
    }
    document.getElementById("login-username")?.focus();
  }
};

const applyAuthState = (isAuthenticated) => {
  bodyElement.classList.toggle("authenticated", isAuthenticated);

  if (isAuthenticated) {
    toggleAuthOverlay(false);
  } else {
    toggleAuthOverlay(true);
    accountModal?.classList.remove("open");
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
  document.getElementById("current-username")?.focus();
};

const hideAccountModal = () => {
  if (!accountModal) {
    return;
  }

  accountModal.classList.remove("open");
  accountModal.setAttribute("aria-hidden", "true");
};

const setFeedbackMessage = (element, message, variant = "") => {
  if (!element) {
    return;
  }

  element.textContent = message;
  element.className = `auth-feedback ${variant}`.trim();
};

const passwordIsComplex = (password) =>
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}/.test(password);

toggleAuthOverlay(true);

if (accountModal && !accountModal.hasAttribute("aria-hidden")) {
  accountModal.setAttribute("aria-hidden", "true");
}

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  if (username === activeCredentials.username && password === activeCredentials.password) {
    if (loginError) {
      loginError.textContent = "";
    }
    applyAuthState(true);
  } else if (loginError) {
    loginError.textContent = translate("auth.errorInvalid");
  }
});

logoutBtn?.addEventListener("click", () => {
  applyAuthState(false);
});

openAccountSettingsBtn?.addEventListener("click", showAccountModal);

closeAccountModalBtn?.addEventListener("click", hideAccountModal);

accountModal?.addEventListener("click", (event) => {
  if (event.target === accountModal) {
    hideAccountModal();
  }
});

credentialsForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentUsername = document.getElementById("current-username").value.trim();
  const currentPassword = document.getElementById("current-password").value;
  const newUsername = document.getElementById("new-username").value.trim();
  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (currentUsername !== activeCredentials.username || currentPassword !== activeCredentials.password) {
    setFeedbackMessage(credentialsMessage, translate("account.feedback.credentialsInvalid"), "error");
    return;
  }

  if (!newUsername) {
    setFeedbackMessage(credentialsMessage, translate("account.feedback.usernameInvalid"), "error");
    return;
  }

  if (newPassword !== confirmPassword) {
    setFeedbackMessage(credentialsMessage, translate("account.feedback.passwordMismatch"), "error");
    return;
  }

  if (!passwordIsComplex(newPassword)) {
    setFeedbackMessage(credentialsMessage, translate("account.feedback.passwordWeak"), "error");
    return;
  }

  activeCredentials = { username: newUsername, password: newPassword };
  persistCredentials(activeCredentials);
  setFeedbackMessage(credentialsMessage, translate("account.feedback.updated"), "success");
  credentialsForm.reset();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && accountModal?.classList.contains("open")) {
    hideAccountModal();
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
      { name: { ar: "برج النخبة", en: "Elite Tower" }, totalUnits: 12, leasedUnits: 10, monthlyRevenue: 62000 },
      { name: { ar: "فلل الصفوة", en: "Al Safwa Villas" }, totalUnits: 8, leasedUnits: 6, monthlyRevenue: 38500 },
      { name: { ar: "مجمع الأعمال", en: "Business Complex" }, totalUnits: 4, leasedUnits: 2, monthlyRevenue: 24000 },
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
        tenant: { ar: "نورة الشامسي", en: "Noura Al Shamsi" },
        status: "warning",
        lastAction: { ar: "رفع مذكرة دفاع", en: "Defense memo submitted" },
        amount: 28000,
      },
      {
        number: "EJ-2024-112",
        tenant: { ar: "خالد المنصوري", en: "Khalid Al Mansoori" },
        status: "info",
        lastAction: { ar: "تحديد خطة السداد", en: "Repayment plan defined" },
        amount: 34500,
      },
      {
        number: "EJ-2024-097",
        tenant: { ar: "ليلى الحمادي", en: "Laila Al Hammadi" },
        status: "success",
        lastAction: { ar: "انتظار التصديق", en: "Awaiting ratification" },
        amount: 18750,
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
      { name: { ar: "أبراج الواحة", en: "Oasis Towers" }, totalUnits: 16, leasedUnits: 14, monthlyRevenue: 92000 },
      { name: { ar: "حدائق الخليج", en: "Gulf Gardens" }, totalUnits: 10, leasedUnits: 9, monthlyRevenue: 44800 },
      { name: { ar: "سوق الواحة", en: "Oasis Market" }, totalUnits: 6, leasedUnits: 4, monthlyRevenue: 21600 },
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
        tenant: { ar: "سعيد البلوشي", en: "Saeed Al Balushi" },
        status: "warning",
        lastAction: { ar: "استلام مذكرة دفاع", en: "Received defense brief" },
        amount: 21000,
      },
      {
        number: "EJ-2024-139",
        tenant: { ar: "شركة أزهار للتجارة", en: "Azhar Trading Co." },
        status: "danger",
        lastAction: { ar: "بدء إجراءات التنفيذ", en: "Initiated enforcement" },
        amount: 46500,
      },
      {
        number: "EJ-2024-133",
        tenant: { ar: "منى المزروعي", en: "Muna Al Mazrouei" },
        status: "info",
        lastAction: { ar: "التفاوض على تسوية", en: "Negotiating settlement" },
        amount: 18600,
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
      { name: { ar: "برج سما مارينا", en: "Sama Marina Tower" }, totalUnits: 10, leasedUnits: 8, monthlyRevenue: 67200 },
      { name: { ar: "مساكن الياسمين", en: "Yasmeen Residences" }, totalUnits: 6, leasedUnits: 5, monthlyRevenue: 33600 },
      { name: { ar: "مكاتب الخليج الذهبي", en: "Golden Gulf Offices" }, totalUnits: 2, leasedUnits: 2, monthlyRevenue: 11500 },
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
        tenant: { ar: "ياسر الزعابي", en: "Yasir Al Zaabi" },
        status: "success",
        lastAction: { ar: "إصدار الحكم الابتدائي", en: "Initial ruling issued" },
        amount: 15400,
      },
    ],
  },
};

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

const renderProperties = (owner) => {
  if (!portfolioBody) return;
  portfolioBody.innerHTML = "";

  if (!owner.properties.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.className = "table-empty";
    cell.textContent = translate("portfolio.empty");
    row.append(cell);
    portfolioBody.append(row);
    return;
  }

  owner.properties.forEach((property) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = getLocalizedText(property.name);

    const unitsCell = document.createElement("td");
    unitsCell.textContent = property.totalUnits;

    const leasedCell = document.createElement("td");
    leasedCell.textContent = property.leasedUnits;

    const revenueCell = document.createElement("td");
    revenueCell.textContent = formatCurrency(property.monthlyRevenue);

    row.append(nameCell, unitsCell, leasedCell, revenueCell);
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
    owner.ledger.forEach((entry) => {
      const ledgerItem = document.createElement("div");
      ledgerItem.className = "ledger-item";

      const info = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = getLocalizedText(entry.description);
      const subtitle = document.createElement("span");
      subtitle.textContent = translate(`ledger.type.${entry.type}`);
      info.append(title, subtitle);

      const amount = document.createElement("div");
      amount.className = `amount ${entry.type === "income" ? "positive" : "negative"}`;
      amount.textContent = `${entry.type === "income" ? "+" : "-"} ${formatCurrency(entry.amount)}`;

      ledgerItem.append(info, amount);
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
    cell.colSpan = 5;
    cell.className = "table-empty";
    cell.textContent = getLocalizedText(owner.caseOverview.emptyNote) || translate("cases.empty");
    row.append(cell);
    caseTableBody.append(row);
  } else {
    owner.cases.forEach((caseItem) => {
      const row = document.createElement("tr");

      const numberCell = document.createElement("td");
      numberCell.textContent = caseItem.number;

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
      amountCell.textContent = formatCurrency(caseItem.amount);

      row.append(numberCell, tenantCell, statusCell, actionCell, amountCell);
      caseTableBody.append(row);
    });
  }

  const claimsTotal = owner.cases.reduce((total, entry) => total + entry.amount, 0);

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
  const description = document.getElementById("transaction-desc").value.trim();
  const amountValue = Number(document.getElementById("transaction-amount").value);

  if (!description || !amountValue) {
    return;
  }

  owner.ledger.unshift({ type, description, amount: amountValue });

  transactionForm.reset();
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

  const caseNumber = document.getElementById("case-number").value.trim();
  const tenant = document.getElementById("case-tenant").value.trim();
  const statusSelect = document.getElementById("case-status");
  const statusValue = statusSelect.value;
  const lastAction = document.getElementById("case-action").value.trim();
  const amountValue = Number(document.getElementById("case-amount").value);

  if (!caseNumber || !tenant || !statusValue || !lastAction || !amountValue) {
    return;
  }

  owner.cases.unshift({
    number: caseNumber,
    tenant,
    status: statusValue,
    lastAction,
    amount: amountValue,
  });

  owner.caseOverview.boardUpdate = {
    ar: translateForLang("cases.boardUpdatedNow", "ar"),
    en: translateForLang("cases.boardUpdatedNow", "en"),
  };

  caseForm.reset();
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
