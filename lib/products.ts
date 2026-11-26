import type { Localized } from "@/components/i18n";

export type ProductGroup =
  | "Quality Engineering"
  | "Developer Infrastructure"
  | "AI / Agent";

export const GROUP_LABEL: Record<ProductGroup, Localized> = {
  "Quality Engineering": {
    en: "Quality Engineering",
    zh: "质量工程",
    ar: "هندسة الجودة",
    fr: "Ingénierie qualité",
    ru: "Инженерия качества",
    es: "Ingeniería de calidad",
  },
  "Developer Infrastructure": {
    en: "Developer Infrastructure",
    zh: "开发者基础设施",
    ar: "البنية التحتية للمطوّرين",
    fr: "Infrastructure développeur",
    ru: "Инфраструктура разработки",
    es: "Infraestructura para desarrolladores",
  },
  "AI / Agent": {
    en: "AI / Agent",
    zh: "AI / 智能体",
    ar: "ذكاء اصطناعي / وكيل",
    fr: "IA / agent",
    ru: "ИИ / агент",
    es: "IA / agente",
  },
};

export type Product = {
  slug: string;
  name: Localized;
  group: ProductGroup;
  tagline: Localized;
  summary: Localized;
  features: { title: Localized; body: Localized }[];
  specs: { label: Localized; value: Localized }[];
  cta: { label: Localized; note: Localized; href: string };
};

const RUNTIME: Localized = {
  en: "Runtime",
  zh: "运行时",
  ar: "بيئة التشغيل",
  fr: "Runtime",
  ru: "Среда выполнения",
  es: "Runtime",
};
const CF_WORKERS: Localized = {
  en: "Cloudflare Workers",
  zh: "Cloudflare Workers",
  ar: "Cloudflare Workers",
  fr: "Cloudflare Workers",
  ru: "Cloudflare Workers",
  es: "Cloudflare Workers",
};

export const PRODUCTS: Product[] = [
  {
    slug: "relay",
    name: {
      en: "relay",
      zh: "relay",
      ar: "relay",
      fr: "relay",
      ru: "relay",
      es: "relay",
    },
    group: "AI / Agent",
    tagline: {
      en: "One engineer, a team of AI assistants, one enforced workflow.",
      zh: "一个人,一队 AI 助手,一套强制执行的流程。",
      ar: "مهندس واحد، فريق من مساعدي الذكاء الاصطناعي، وسير عمل مُلزَم.",
      fr: "Un ingénieur, une équipe d'assistants IA, un workflow imposé.",
      ru: "Один инженер, команда ИИ-ассистентов, один обязательный процесс.",
      es: "Un ingeniero, un equipo de asistentes de IA, un flujo obligatorio.",
    },
    summary: {
      en: "A model-agnostic multi-agent workflow for the whole dev and test lifecycle: a supervisor dispatches, specialists each own one write channel, and parallel helpers scale out — with a scoring gate that checks the flow was actually followed and re-runs until it passes.",
      zh: "一套模型无关的多智能体开发与测试全流程:主管派单、专员各管一个写出口、临时助手按需并行——并用打分门禁核验流程是否被真正遵循,不达标就重跑。",
      ar: "سير عمل متعدد الوكلاء ومستقل عن النموذج يغطي دورة التطوير والاختبار كاملة: مشرف يوزّع المهام، ومتخصّصون يملك كلٌّ منهم قناة كتابة واحدة، ومساعدون متوازون للتوسّع — مع بوابة تقييم تتحقّق من اتّباع المسار وتعيد التشغيل حتى النجاح.",
      fr: "Un workflow multi-agents indépendant du modèle pour tout le cycle dev et test : un superviseur répartit, chaque spécialiste possède un seul canal d'écriture et des renforts parallèles montent en charge — avec une porte de notation qui vérifie que le flux a bien été suivi et relance jusqu'à réussite.",
      ru: "Модель-независимый мультиагентный процесс для всего цикла разработки и тестирования: супервизор распределяет задачи, у каждого специалиста один канал записи, параллельные помощники масштабируются — со шлюзом оценки, который проверяет соблюдение процесса и перезапускает до прохождения.",
      es: "Un flujo multiagente independiente del modelo para todo el ciclo de desarrollo y pruebas: un supervisor reparte, cada especialista posee un único canal de escritura y los ayudantes paralelos escalan — con una puerta de puntuación que verifica que se siguió el flujo y repite hasta aprobar.",
    },
    features: [
      {
        title: {
          en: "Dispatch, not improvise",
          zh: "派单,而非即兴",
          ar: "توزيع، لا ارتجال",
          fr: "Répartir, pas improviser",
          ru: "Распределение, а не импровизация",
          es: "Repartir, no improvisar",
        },
        body: {
          en: "A supervisor splits and dispatches, quoting the request verbatim; each specialist owns exactly one external write channel — chat, defects, docs, or code — so nothing collides.",
          zh: "主管拆分并派单,转述原话;每个专员只持有一个外部写出口——IM、缺陷、文档或代码——互不冲突。",
          ar: "يقسّم المشرف ويوزّع ناقلاً الطلب حرفياً؛ ويملك كل متخصّص قناة كتابة خارجية واحدة فقط — الدردشة أو العيوب أو التوثيق أو الكود — فلا تتضارب.",
          fr: "Un superviseur découpe et répartit en citant la demande mot pour mot ; chaque spécialiste ne possède qu'un seul canal d'écriture externe — chat, défauts, docs ou code — sans collision.",
          ru: "Супервизор дробит и распределяет, дословно цитируя запрос; у каждого специалиста лишь один внешний канал записи — чат, дефекты, документация или код — без конфликтов.",
          es: "Un supervisor divide y reparte citando la solicitud textualmente; cada especialista posee un único canal de escritura externo — chat, defectos, docs o código — sin colisiones.",
        },
      },
      {
        title: {
          en: "A gate that enforces the flow",
          zh: "强制流程的打分门禁",
          ar: "بوابة تفرض المسار",
          fr: "Une porte qui impose le flux",
          ru: "Шлюз, принуждающий к процессу",
          es: "Una puerta que impone el flujo",
        },
        body: {
          en: "Before delivery, relay checks the flow was actually followed, scores the run out of 100, and — below the configurable pass score (default 80) — runs an optimization loop and re-runs until it clears.",
          zh: "交付前,relay 先核验流程是否真的走了,再按百分制打分;低于可配置的通过线(默认 80)就触发优化循环并重跑,直到达标。",
          ar: "قبل التسليم، يتحقّق relay من اتّباع المسار فعلاً، ويُقيّم التنفيذ من 100، وتحت درجة النجاح القابلة للضبط (80 افتراضياً) يشغّل حلقة تحسين ويعيد التشغيل حتى يجتاز.",
          fr: "Avant livraison, relay vérifie que le flux a bien été suivi, note l'exécution sur 100 et — sous le score de passage configurable (80 par défaut) — lance une boucle d'optimisation et relance jusqu'à réussite.",
          ru: "Перед сдачей relay проверяет соблюдение процесса, оценивает прогон по 100-балльной шкале и — ниже настраиваемого порога (по умолчанию 80) — запускает цикл оптимизации и перезапускает до прохождения.",
          es: "Antes de entregar, relay comprueba que se siguió el flujo, puntúa la ejecución sobre 100 y — por debajo del umbral configurable (80 por defecto) — ejecuta un bucle de optimización y repite hasta aprobar.",
        },
      },
      {
        title: {
          en: "Any model, any tool",
          zh: "任意模型,任意工具",
          ar: "أي نموذج، أي أداة",
          fr: "Tout modèle, tout outil",
          ru: "Любая модель, любой инструмент",
          es: "Cualquier modelo, cualquier herramienta",
        },
        body: {
          en: "The 24 skills are plain Markdown, so Claude Code, GPT, Gemini, Cursor, Muse and DeepSeek all read them. Ship it as a Claude Code plugin, a Cursor rule, a ClawHub skill or plugin, an MCP server, or a Docker image.",
          zh: "24 个技能都是纯 Markdown,Claude Code、GPT、Gemini、Cursor、Muse、DeepSeek 都能读。可作为 Claude Code 插件、Cursor 规则、ClawHub skill 或 plugin、MCP 服务或 Docker 镜像分发。",
          ar: "المهارات الـ24 بصيغة Markdown بسيطة، فيقرؤها Claude Code وGPT وGemini وCursor وMuse وDeepSeek. وزّعها كإضافة Claude Code أو قاعدة Cursor أو مهارة/إضافة ClawHub أو خادم MCP أو صورة Docker.",
          fr: "Les 24 skills sont en Markdown simple : Claude Code, GPT, Gemini, Cursor, Muse et DeepSeek les lisent tous. Livrez-le en plugin Claude Code, règle Cursor, skill ou plugin ClawHub, serveur MCP ou image Docker.",
          ru: "24 навыка — простой Markdown, их читают Claude Code, GPT, Gemini, Cursor, Muse и DeepSeek. Поставляйте как плагин Claude Code, правило Cursor, skill или plugin ClawHub, MCP-сервер или Docker-образ.",
          es: "Las 24 skills son Markdown simple, así que Claude Code, GPT, Gemini, Cursor, Muse y DeepSeek las leen. Distribúyelo como plugin de Claude Code, regla de Cursor, skill o plugin de ClawHub, servidor MCP o imagen Docker.",
        },
      },
    ],
    specs: [
      {
        label: { en: "Runtime", zh: "运行时", ar: "بيئة التشغيل", fr: "Runtime", ru: "Среда", es: "Runtime" },
        value: {
          en: "MCP · CLI · Docker",
          zh: "MCP · CLI · Docker",
          ar: "MCP · CLI · Docker",
          fr: "MCP · CLI · Docker",
          ru: "MCP · CLI · Docker",
          es: "MCP · CLI · Docker",
        },
      },
      {
        label: { en: "Skills", zh: "技能", ar: "المهارات", fr: "Skills", ru: "Навыки", es: "Skills" },
        value: {
          en: "24 · Markdown",
          zh: "24 个 · Markdown",
          ar: "24 · Markdown",
          fr: "24 · Markdown",
          ru: "24 · Markdown",
          es: "24 · Markdown",
        },
      },
      {
        label: {
          en: "Pass score",
          zh: "通过线",
          ar: "درجة النجاح",
          fr: "Score de passage",
          ru: "Порог",
          es: "Umbral",
        },
        value: {
          en: "80, configurable",
          zh: "80,可配置",
          ar: "80، قابل للضبط",
          fr: "80, configurable",
          ru: "80, настраивается",
          es: "80, configurable",
        },
      },
      {
        label: {
          en: "Works with",
          zh: "兼容",
          ar: "يعمل مع",
          fr: "Compatible",
          ru: "Работает с",
          es: "Compatible con",
        },
        value: {
          en: "Claude Code · GPT · Gemini · Cursor · Muse · DeepSeek",
          zh: "Claude Code · GPT · Gemini · Cursor · Muse · DeepSeek",
          ar: "Claude Code · GPT · Gemini · Cursor · Muse · DeepSeek",
          fr: "Claude Code · GPT · Gemini · Cursor · Muse · DeepSeek",
          ru: "Claude Code · GPT · Gemini · Cursor · Muse · DeepSeek",
          es: "Claude Code · GPT · Gemini · Cursor · Muse · DeepSeek",
        },
      },
    ],
    cta: {
      label: {
        en: "Install relay — all methods",
        zh: "安装 relay — 所有方式",
        ar: "ثبّت relay — كل الطرق",
        fr: "Installer relay — toutes les méthodes",
        ru: "Установить relay — все способы",
        es: "Instalar relay — todos los métodos",
      },
      note: {
        en: "Jump straight to Claude Code · Cursor · ChatGPT · Gemini · Grok · ClawHub · Docker. MIT · source & docs linked there.",
        zh: "一键直达 Claude Code · Cursor · ChatGPT · Gemini · Grok · ClawHub · Docker 各安装方式。MIT · 源码与文档都在那里。",
        ar: "انتقل مباشرة إلى Claude Code · Cursor · ChatGPT · Gemini · Grok · ClawHub · Docker. MIT · المصدر والتوثيق هناك.",
        fr: "Accédez directement à Claude Code · Cursor · ChatGPT · Gemini · Grok · ClawHub · Docker. MIT · source et docs liées.",
        ru: "Сразу к Claude Code · Cursor · ChatGPT · Gemini · Grok · ClawHub · Docker. MIT · исходники и доки там.",
        es: "Ve directo a Claude Code · Cursor · ChatGPT · Gemini · Grok · ClawHub · Docker. MIT · código y docs ahí.",
      },
      href: "https://innonestx.github.io/relay/#install",
    },
  },
  {
    slug: "testcase-generator",
    name: {
      en: "AI Test Case Generator",
      zh: "AI 测试用例生成器",
      ar: "مولّد حالات الاختبار بالذكاء الاصطناعي",
      fr: "Générateur de cas de test IA",
      ru: "ИИ-генератор тест-кейсов",
      es: "Generador de casos de prueba con IA",
    },
    group: "Quality Engineering",
    tagline: {
      en: "Requirements in. Reviewable test cases out.",
      zh: "输入需求,产出可评审的测试用例。",
      ar: "متطلبات تدخل، وحالات اختبار قابلة للمراجعة تخرج.",
      fr: "Des exigences en entrée. Des cas de test relisables en sortie.",
      ru: "На входе требования. На выходе проверяемые тест-кейсы.",
      es: "Entran requisitos. Salen casos de prueba revisables.",
    },
    summary: {
      en: "Turn a PDF, screenshot, or plain spec into structured test cases with steps, expected results, and priority — then put them through a real review before they ship.",
      zh: "把 PDF、截图或纯文档变成结构化测试用例——含步骤、预期结果与优先级——并在交付前经过一轮真实评审。",
      ar: "حوّل ملف PDF أو لقطة شاشة أو مواصفات بسيطة إلى حالات اختبار منظّمة بخطوات ونتائج متوقعة وأولوية — ثم أخضِعها لمراجعة حقيقية قبل التسليم.",
      fr: "Transformez un PDF, une capture ou une simple spécification en cas de test structurés avec étapes, résultats attendus et priorité — puis soumettez-les à une vraie revue avant livraison.",
      ru: "Превратите PDF, скриншот или простую спецификацию в структурированные тест-кейсы с шагами, ожидаемыми результатами и приоритетом — и проведите их через реальную проверку до поставки.",
      es: "Convierte un PDF, una captura o una especificación simple en casos de prueba estructurados con pasos, resultados esperados y prioridad — y pásalos por una revisión real antes de entregarlos.",
    },
    features: [
      {
        title: {
          en: "Multimodal input",
          zh: "多模态输入",
          ar: "إدخال متعدد الوسائط",
          fr: "Entrée multimodale",
          ru: "Мультимодальный ввод",
          es: "Entrada multimodal",
        },
        body: {
          en: "Read a requirement from a document, an image, or a short spec. Acceptance criteria are drawn out before a single case is written.",
          zh: "从文档、图片或简短说明中读取需求。在写下第一条用例前,先梳理出验收标准。",
          ar: "اقرأ المتطلب من مستند أو صورة أو مواصفات قصيرة. وتُستخلَص معايير القبول قبل كتابة أي حالة.",
          fr: "Lit une exigence depuis un document, une image ou une courte spécification. Les critères d'acceptation sont dégagés avant d'écrire le moindre cas.",
          ru: "Читает требование из документа, изображения или короткой спецификации. Критерии приёмки выделяются до написания первого кейса.",
          es: "Lee un requisito desde un documento, una imagen o una especificación breve. Los criterios de aceptación se extraen antes de escribir un solo caso.",
        },
      },
      {
        title: {
          en: "Structured drafts",
          zh: "结构化草稿",
          ar: "مسودات منظّمة",
          fr: "Brouillons structurés",
          ru: "Структурированные черновики",
          es: "Borradores estructurados",
        },
        body: {
          en: "Every case carries steps, expected results, and a priority — grounded in the requirement, never invented.",
          zh: "每条用例都带步骤、预期结果与优先级——源自需求,绝不凭空捏造。",
          ar: "تحمل كل حالة خطوات ونتائج متوقعة وأولوية — مستندة إلى المتطلب لا مُختلَقة.",
          fr: "Chaque cas porte des étapes, des résultats attendus et une priorité — ancré dans l'exigence, jamais inventé.",
          ru: "Каждый кейс содержит шаги, ожидаемые результаты и приоритет — на основе требования, не выдуманный.",
          es: "Cada caso lleva pasos, resultados esperados y prioridad — basado en el requisito, nunca inventado.",
        },
      },
      {
        title: {
          en: "Human review, scored",
          zh: "人工评审,量化打分",
          ar: "مراجعة بشرية مُقيَّمة",
          fr: "Revue humaine, notée",
          ru: "Оценочная проверка людьми",
          es: "Revisión humana, puntuada",
        },
        body: {
          en: "QA, dev, and product score coverage, logic, and clarity. The default bar is 90 out of 100; only a set that clears it ships.",
          zh: "QA、研发与产品对覆盖度、逻辑与清晰度打分。默认达标线为 90/100,只有通过的用例集才会交付。",
          ar: "يقيّم فريق الجودة والتطوير والمنتج التغطية والمنطق والوضوح. الحدّ الافتراضي 90 من 100؛ ولا يُسلَّم إلا ما يتجاوزه.",
          fr: "QA, dev et produit notent la couverture, la logique et la clarté. Le seuil par défaut est de 90 sur 100 ; seul un ensemble qui le franchit est livré.",
          ru: "QA, разработка и продукт оценивают покрытие, логику и ясность. Порог по умолчанию — 90 из 100; поставляется только набор, прошедший его.",
          es: "QA, desarrollo y producto puntúan la cobertura, la lógica y la claridad. El umbral por defecto es 90 de 100; solo se entrega un conjunto que lo supera.",
        },
      },
      {
        title: {
          en: "Three exports, one set",
          zh: "一套用例,三种导出",
          ar: "ثلاثة تصديرات، مجموعة واحدة",
          fr: "Trois exports, un ensemble",
          ru: "Три экспорта, один набор",
          es: "Tres exportaciones, un conjunto",
        },
        body: {
          en: "Ship the reviewed set as Excel, Markdown, and XMind — the same scenarios on the surfaces teams already use.",
          zh: "把评审过的用例集导出为 Excel、Markdown 与 XMind——同样的场景,交付到团队已在用的工具里。",
          ar: "سلّم المجموعة المُراجَعة بصيغ Excel وMarkdown وXMind — نفس السيناريوهات على الأدوات التي تستخدمها الفرق أصلاً.",
          fr: "Livrez l'ensemble relu en Excel, Markdown et XMind — les mêmes scénarios sur les outils que les équipes utilisent déjà.",
          ru: "Поставляйте проверенный набор как Excel, Markdown и XMind — те же сценарии на инструментах, которыми команды уже пользуются.",
          es: "Entrega el conjunto revisado como Excel, Markdown y XMind — los mismos escenarios en las herramientas que los equipos ya usan.",
        },
      },
    ],
    specs: [
      {
        label: { en: "Input", zh: "输入", ar: "الإدخال", fr: "Entrée", ru: "Ввод", es: "Entrada" },
        value: {
          en: "PDF · image · spec",
          zh: "PDF · 图片 · 文档",
          ar: "PDF · صورة · مواصفات",
          fr: "PDF · image · spéc.",
          ru: "PDF · изображение · спека",
          es: "PDF · imagen · spec",
        },
      },
      {
        label: { en: "Output", zh: "输出", ar: "الإخراج", fr: "Sortie", ru: "Вывод", es: "Salida" },
        value: {
          en: "Excel · Markdown · XMind",
          zh: "Excel · Markdown · XMind",
          ar: "Excel · Markdown · XMind",
          fr: "Excel · Markdown · XMind",
          ru: "Excel · Markdown · XMind",
          es: "Excel · Markdown · XMind",
        },
      },
      {
        label: { en: "Review", zh: "评审", ar: "المراجعة", fr: "Revue", ru: "Проверка", es: "Revisión" },
        value: {
          en: "QA · Dev · Product, 90/100",
          zh: "QA · 研发 · 产品,90/100",
          ar: "الجودة · التطوير · المنتج، 90/100",
          fr: "QA · Dev · Produit, 90/100",
          ru: "QA · Разработка · Продукт, 90/100",
          es: "QA · Desarrollo · Producto, 90/100",
        },
      },
      {
        label: {
          en: "Runs as",
          zh: "运行形态",
          ar: "يعمل كـ",
          fr: "S'exécute comme",
          ru: "Запускается как",
          es: "Se ejecuta como",
        },
        value: {
          en: "Installable tool",
          zh: "可安装的工具",
          ar: "أداة قابلة للتثبيت",
          fr: "Outil installable",
          ru: "Устанавливаемый инструмент",
          es: "Herramienta instalable",
        },
      },
    ],
    cta: {
      label: {
        en: "Try the generator",
        zh: "试用生成器",
        ar: "جرّب المولّد",
        fr: "Essayer le générateur",
        ru: "Попробовать генератор",
        es: "Probar el generador",
      },
      note: {
        en: "Runs locally; your requirements stay yours.",
        zh: "本地运行;你的需求始终属于你。",
        ar: "يعمل محلياً؛ تبقى متطلباتك ملكك.",
        fr: "Fonctionne en local ; vos exigences restent les vôtres.",
        ru: "Работает локально; ваши требования остаются вашими.",
        es: "Funciona en local; tus requisitos siguen siendo tuyos.",
      },
      href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
    },
  },
  {
    slug: "docker-suite",
    name: {
      en: "Test DB Docker Suite",
      zh: "测试数据库 Docker 套件",
      ar: "حزمة Docker لقواعد بيانات الاختبار",
      fr: "Suite Docker de bases de test",
      ru: "Docker-набор тестовых БД",
      es: "Suite Docker de bases de prueba",
    },
    group: "Developer Infrastructure",
    tagline: {
      en: "Test databases, one pull away.",
      zh: "测试数据库,一键拉取即用。",
      ar: "قواعد بيانات اختبار على بُعد سحبة واحدة.",
      fr: "Des bases de test à un pull.",
      ru: "Тестовые базы данных в один pull.",
      es: "Bases de datos de prueba a un pull.",
    },
    summary: {
      en: "Ready-to-run images for the databases teams actually test against — Dameng, Highgo, Kingbase, and TiDB — pulled, seeded, and disposable.",
      zh: "为团队真正用于测试的数据库准备的开箱即用镜像——达梦、Highgo、人大金仓与 TiDB——可拉取、带种子数据、用完即弃。",
      ar: "صور جاهزة للتشغيل لقواعد البيانات التي تختبرها الفرق فعلاً — Dameng وHighgo وKingbase وTiDB — قابلة للسحب ومزوّدة بالبيانات وقابلة للتخلّص.",
      fr: "Des images prêtes à l'emploi pour les bases que les équipes testent vraiment — Dameng, Highgo, Kingbase et TiDB — récupérables, initialisées et jetables.",
      ru: "Готовые к запуску образы баз, против которых команды действительно тестируют — Dameng, Highgo, Kingbase и TiDB — загружаемые, с данными и одноразовые.",
      es: "Imágenes listas para ejecutar de las bases que los equipos realmente prueban — Dameng, Highgo, Kingbase y TiDB — descargables, con datos y desechables.",
    },
    features: [
      {
        title: {
          en: "One command up",
          zh: "一条命令拉起",
          ar: "أمر واحد للتشغيل",
          fr: "Une commande pour démarrer",
          ru: "Запуск одной командой",
          es: "Arranca con un comando",
        },
        body: {
          en: "Pull and run. Each image is seeded and ready in seconds, then wiped on stop so every run starts clean.",
          zh: "拉取即运行。每个镜像数秒内带种子数据就绪,停止即清空,每次运行都从干净状态开始。",
          ar: "اسحب وشغّل. كل صورة مزوّدة بالبيانات وجاهزة خلال ثوانٍ، ثم تُمحى عند الإيقاف ليبدأ كل تشغيل نظيفاً.",
          fr: "Récupérez et lancez. Chaque image est initialisée et prête en quelques secondes, puis effacée à l'arrêt pour que chaque exécution démarre propre.",
          ru: "Загрузите и запустите. Каждый образ наполнен данными и готов за секунды, затем очищается при остановке, чтобы каждый запуск начинался чисто.",
          es: "Descarga y ejecuta. Cada imagen está inicializada y lista en segundos, y se borra al parar para que cada ejecución empiece limpia.",
        },
      },
      {
        title: {
          en: "The databases that are hard to get",
          zh: "那些难搞的数据库",
          ar: "قواعد البيانات التي يصعب الحصول عليها",
          fr: "Les bases difficiles à obtenir",
          ru: "Базы, которые трудно достать",
          es: "Las bases difíciles de conseguir",
        },
        body: {
          en: "Dameng, Highgo, Kingbase, TiDB — the ones that usually block a test environment, packaged to just run.",
          zh: "达梦、Highgo、人大金仓、TiDB——这些通常会卡住测试环境的数据库,已打包成即开即用。",
          ar: "Dameng وHighgo وKingbase وTiDB — تلك التي تعرقل عادةً بيئة الاختبار، مُغلّفة لتعمل فوراً.",
          fr: "Dameng, Highgo, Kingbase, TiDB — celles qui bloquent d'ordinaire un environnement de test, empaquetées pour simplement tourner.",
          ru: "Dameng, Highgo, Kingbase, TiDB — те, что обычно блокируют тестовую среду, упакованы, чтобы просто работать.",
          es: "Dameng, Highgo, Kingbase, TiDB — las que suelen bloquear un entorno de prueba, empaquetadas para que simplemente funcionen.",
        },
      },
      {
        title: {
          en: "Built for CI",
          zh: "为 CI 而生",
          ar: "مبنيّة من أجل CI",
          fr: "Conçu pour la CI",
          ru: "Создано для CI",
          es: "Hecho para CI",
        },
        body: {
          en: "Deterministic startup and fixed ports make the images drop-in for pipelines and local runs alike.",
          zh: "确定性的启动与固定端口,让镜像在流水线与本地运行中都能即插即用。",
          ar: "بدء تشغيل حتمي ومنافذ ثابتة تجعل الصور صالحة للإدراج في خطوط الأنابيب والتشغيل المحلي على حدّ سواء.",
          fr: "Un démarrage déterministe et des ports fixes rendent les images intégrables aux pipelines comme aux exécutions locales.",
          ru: "Детерминированный старт и фиксированные порты делают образы пригодными и для пайплайнов, и для локальных запусков.",
          es: "Un arranque determinista y puertos fijos hacen que las imágenes encajen tanto en pipelines como en ejecuciones locales.",
        },
      },
    ],
    specs: [
      {
        label: {
          en: "Databases",
          zh: "数据库",
          ar: "قواعد البيانات",
          fr: "Bases de données",
          ru: "Базы данных",
          es: "Bases de datos",
        },
        value: {
          en: "Dameng · Highgo · Kingbase · TiDB",
          zh: "达梦 · Highgo · 人大金仓 · TiDB",
          ar: "Dameng · Highgo · Kingbase · TiDB",
          fr: "Dameng · Highgo · Kingbase · TiDB",
          ru: "Dameng · Highgo · Kingbase · TiDB",
          es: "Dameng · Highgo · Kingbase · TiDB",
        },
      },
      {
        label: { en: "Startup", zh: "启动", ar: "البدء", fr: "Démarrage", ru: "Запуск", es: "Arranque" },
        value: {
          en: "~6s, seeded",
          zh: "约 6 秒,带种子数据",
          ar: "~6 ثوانٍ، مزوّدة بالبيانات",
          fr: "~6 s, initialisée",
          ru: "~6 с, с данными",
          es: "~6 s, con datos",
        },
      },
      {
        label: {
          en: "Lifecycle",
          zh: "生命周期",
          ar: "دورة الحياة",
          fr: "Cycle de vie",
          ru: "Жизненный цикл",
          es: "Ciclo de vida",
        },
        value: {
          en: "Disposable, wiped on stop",
          zh: "用完即弃,停止即清空",
          ar: "قابلة للتخلّص، تُمحى عند الإيقاف",
          fr: "Jetable, effacée à l'arrêt",
          ru: "Одноразовая, очищается при остановке",
          es: "Desechable, se borra al parar",
        },
      },
      {
        label: { en: "Registry", zh: "镜像仓库", ar: "السجلّ", fr: "Registre", ru: "Реестр", es: "Registro" },
        value: {
          en: "Docker Hub",
          zh: "Docker Hub",
          ar: "Docker Hub",
          fr: "Docker Hub",
          ru: "Docker Hub",
          es: "Docker Hub",
        },
      },
    ],
    cta: {
      label: {
        en: "Pull from Docker Hub",
        zh: "从 Docker Hub 拉取",
        ar: "اسحب من Docker Hub",
        fr: "Récupérer depuis Docker Hub",
        ru: "Загрузить из Docker Hub",
        es: "Descargar de Docker Hub",
      },
      note: {
        en: "Public images, versioned tags.",
        zh: "公开镜像,带版本标签。",
        ar: "صور علنية بوسوم إصدارات.",
        fr: "Images publiques, tags versionnés.",
        ru: "Публичные образы, версионированные теги.",
        es: "Imágenes públicas, tags versionados.",
      },
      href: "https://hub.docker.com/u/xuxuclassmate",
    },
  },
  {
    slug: "docker-hub-api-gateway",
    name: {
      en: "Docker Hub API Gateway",
      zh: "Docker Hub API 网关",
      ar: "بوابة واجهة Docker Hub",
      fr: "Passerelle API Docker Hub",
      ru: "API-шлюз Docker Hub",
      es: "Gateway de API de Docker Hub",
    },
    group: "Developer Infrastructure",
    tagline: {
      en: "Docker Hub stats, as an API and a card.",
      zh: "Docker Hub 统计,既是 API 也是卡片。",
      ar: "إحصاءات Docker Hub، كواجهة وبطاقة.",
      fr: "Les stats Docker Hub, en API et en carte.",
      ru: "Статистика Docker Hub как API и карточка.",
      es: "Estadísticas de Docker Hub, como API y tarjeta.",
    },
    summary: {
      en: "A REST gateway over Docker Hub with ready-made SVG stat cards — the live pull counts behind the suite, available to anyone.",
      zh: "一个架在 Docker Hub 之上的 REST 网关,附带现成的 SVG 统计卡——套件背后的实时拉取量,对所有人开放。",
      ar: "بوابة REST فوق Docker Hub مع بطاقات إحصاء SVG جاهزة — أعداد السحب الحيّة خلف الحزمة، متاحة للجميع.",
      fr: "Une passerelle REST au-dessus de Docker Hub avec des cartes de stats SVG prêtes — les compteurs de pull en direct derrière la suite, pour tous.",
      ru: "REST-шлюз над Docker Hub с готовыми SVG-карточками статистики — живые счётчики загрузок за набором, доступные всем.",
      es: "Una pasarela REST sobre Docker Hub con tarjetas de estadísticas SVG listas — los contadores de pull en vivo detrás de la suite, para cualquiera.",
    },
    features: [
      {
        title: {
          en: "REST over Docker Hub",
          zh: "Docker Hub 之上的 REST",
          ar: "REST فوق Docker Hub",
          fr: "REST au-dessus de Docker Hub",
          ru: "REST над Docker Hub",
          es: "REST sobre Docker Hub",
        },
        body: {
          en: "A clean API for pulls, tags, and repository details, cached close to the edge.",
          zh: "面向拉取量、标签与仓库详情的简洁 API,就近在边缘缓存。",
          ar: "واجهة نظيفة لأعداد السحب والوسوم وتفاصيل المستودع، مُخزَّنة مؤقتاً قرب الحافة.",
          fr: "Une API propre pour les pulls, les tags et les détails de dépôt, mise en cache près du edge.",
          ru: "Чистый API для загрузок, тегов и деталей репозитория, кэшируется близко к краю сети.",
          es: "Una API limpia para pulls, tags y detalles del repositorio, cacheada cerca del edge.",
        },
      },
      {
        title: {
          en: "Drop-in SVG cards",
          zh: "即插即用的 SVG 卡片",
          ar: "بطاقات SVG جاهزة للإدراج",
          fr: "Cartes SVG prêtes à l'emploi",
          ru: "Готовые SVG-карточки",
          es: "Tarjetas SVG listas",
        },
        body: {
          en: "Embeddable stat cards that render live pull counts in a README or a site, no build step.",
          zh: "可嵌入的统计卡,在 README 或网站中实时渲染拉取量,无需构建步骤。",
          ar: "بطاقات إحصاء قابلة للتضمين تعرض أعداد السحب الحيّة في README أو موقع، دون خطوة بناء.",
          fr: "Des cartes de stats intégrables qui affichent les compteurs de pull en direct dans un README ou un site, sans étape de build.",
          ru: "Встраиваемые карточки статистики, показывающие живые счётчики загрузок в README или на сайте, без шага сборки.",
          es: "Tarjetas de estadísticas integrables que muestran contadores de pull en vivo en un README o un sitio, sin paso de build.",
        },
      },
    ],
    specs: [
      {
        label: { en: "Surface", zh: "形态", ar: "الواجهة", fr: "Surface", ru: "Поверхность", es: "Superficie" },
        value: { en: "REST + SVG", zh: "REST + SVG", ar: "REST + SVG", fr: "REST + SVG", ru: "REST + SVG", es: "REST + SVG" },
      },
      {
        label: RUNTIME,
        value: CF_WORKERS,
      },
      {
        label: { en: "Spec", zh: "规范", ar: "المواصفة", fr: "Spécification", ru: "Спецификация", es: "Especificación" },
        value: { en: "OpenAPI", zh: "OpenAPI", ar: "OpenAPI", fr: "OpenAPI", ru: "OpenAPI", es: "OpenAPI" },
      },
    ],
    cta: {
      label: {
        en: "Read the API",
        zh: "查看 API",
        ar: "اقرأ الواجهة",
        fr: "Lire l'API",
        ru: "Открыть API",
        es: "Ver la API",
      },
      note: {
        en: "Open endpoints, no key for public stats.",
        zh: "开放端点,公开统计无需密钥。",
        ar: "نقاط نهاية مفتوحة، بلا مفتاح للإحصاءات العلنية.",
        fr: "Points d'accès ouverts, pas de clé pour les stats publiques.",
        ru: "Открытые эндпоинты, без ключа для публичной статистики.",
        es: "Endpoints abiertos, sin clave para estadísticas públicas.",
      },
      href: "https://github.com/InnoNestX",
    },
  },
  {
    slug: "globalpulse",
    name: {
      en: "GlobalPulse",
      zh: "GlobalPulse",
      ar: "GlobalPulse",
      fr: "GlobalPulse",
      ru: "GlobalPulse",
      es: "GlobalPulse",
    },
    group: "AI / Agent",
    tagline: {
      en: "Scheduled market briefings, on the edge.",
      zh: "定时市场简报,运行在边缘。",
      ar: "إحاطات سوق مجدولة، على الحافة.",
      fr: "Briefings de marché planifiés, sur le edge.",
      ru: "Запланированные рыночные брифинги на краю сети.",
      es: "Briefings de mercado programados, en el edge.",
    },
    summary: {
      en: "A self-hosted agent that gathers market signals and sends scheduled briefings, running on Cloudflare with KV config and cron.",
      zh: "一个自托管智能体,采集市场信号并定时推送简报,运行在 Cloudflare 上,使用 KV 配置与 cron。",
      ar: "وكيل ذاتي الاستضافة يجمع إشارات السوق ويرسل إحاطات مجدولة، يعمل على Cloudflare بإعداد KV وcron.",
      fr: "Un agent auto-hébergé qui collecte des signaux de marché et envoie des briefings planifiés, tournant sur Cloudflare avec config KV et cron.",
      ru: "Самостоятельно размещаемый агент, который собирает рыночные сигналы и шлёт запланированные брифинги, работает на Cloudflare с конфигом KV и cron.",
      es: "Un agente autoalojado que reúne señales de mercado y envía briefings programados, ejecutándose en Cloudflare con config KV y cron.",
    },
    features: [
      {
        title: {
          en: "Scheduled by cron",
          zh: "由 cron 定时",
          ar: "مجدول عبر cron",
          fr: "Planifié par cron",
          ru: "По расписанию cron",
          es: "Programado por cron",
        },
        body: {
          en: "Briefings land on a schedule you set, assembled from market signals and calendars.",
          zh: "简报按你设定的计划送达,由市场信号与日历汇编而成。",
          ar: "تصل الإحاطات وفق جدول تحدّده، مجمّعة من إشارات السوق والتقاويم.",
          fr: "Les briefings arrivent selon un calendrier que vous définissez, assemblés à partir de signaux de marché et de calendriers.",
          ru: "Брифинги приходят по заданному вами расписанию, собранные из рыночных сигналов и календарей.",
          es: "Los briefings llegan según un horario que defines, armados a partir de señales de mercado y calendarios.",
        },
      },
      {
        title: {
          en: "Self-hosted, edge-native",
          zh: "自托管,边缘原生",
          ar: "ذاتي الاستضافة، أصيل على الحافة",
          fr: "Auto-hébergé, natif edge",
          ru: "Самохостинг, нативно на краю",
          es: "Autoalojado, nativo del edge",
        },
        body: {
          en: "Runs on Cloudflare Workers with KV for config — no server to keep alive.",
          zh: "运行在 Cloudflare Workers 上,用 KV 存配置——无需维护常驻服务器。",
          ar: "يعمل على Cloudflare Workers مع KV للإعداد — دون خادم تبقيه حيّاً.",
          fr: "Tourne sur Cloudflare Workers avec KV pour la config — aucun serveur à maintenir en vie.",
          ru: "Работает на Cloudflare Workers с KV для конфигурации — не нужно держать сервер живым.",
          es: "Se ejecuta en Cloudflare Workers con KV para la configuración — sin servidor que mantener vivo.",
        },
      },
    ],
    specs: [
      {
        label: RUNTIME,
        value: CF_WORKERS,
      },
      {
        label: { en: "Config", zh: "配置", ar: "الإعداد", fr: "Config", ru: "Конфигурация", es: "Configuración" },
        value: { en: "KV", zh: "KV", ar: "KV", fr: "KV", ru: "KV", es: "KV" },
      },
      {
        label: { en: "Cadence", zh: "频率", ar: "الوتيرة", fr: "Cadence", ru: "Частота", es: "Cadencia" },
        value: { en: "Cron", zh: "Cron", ar: "Cron", fr: "Cron", ru: "Cron", es: "Cron" },
      },
    ],
    cta: {
      label: {
        en: "See the project",
        zh: "查看项目",
        ar: "شاهد المشروع",
        fr: "Voir le projet",
        ru: "Открыть проект",
        es: "Ver el proyecto",
      },
      note: {
        en: "Self-hosted; bring your own keys.",
        zh: "自托管;自带密钥。",
        ar: "ذاتي الاستضافة؛ أحضِر مفاتيحك.",
        fr: "Auto-hébergé ; apportez vos propres clés.",
        ru: "Самохостинг; свои ключи.",
        es: "Autoalojado; trae tus propias claves.",
      },
      href: "https://pulse.xuxuclassmate.com/",
    },
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const GROUPS: ProductGroup[] = [
  "Quality Engineering",
  "Developer Infrastructure",
  "AI / Agent",
];
