import type { Localized } from "@/components/i18n";
import type { IconName } from "@/components/icons";

export type Capability = { icon: IconName; title: Localized; body: Localized };
export type AiRole = { icon: IconName; title: Localized; body: Localized };
export type Output = { title: Localized; body: Localized };

export const CAPABILITIES: Capability[] = [
  {
    icon: "quality",
    title: {
      en: "Test design",
      zh: "测试设计",
      ar: "تصميم الاختبار",
      fr: "Conception des tests",
      ru: "Дизайн тестов",
      es: "Diseño de pruebas",
    },
    body: {
      en: "From requirements and prototypes to cases — exception paths, boundaries, state transitions, idempotency, and concurrency — aligned line by line with product and dev.",
      zh: "从需求与原型拆出用例——异常场景、边界值、状态流转、幂等与并发——并与产品、研发逐条对齐口径。",
      ar: "من المتطلبات والنماذج إلى الحالات — المسارات الاستثنائية والحدود وانتقالات الحالة والتكرارية والتزامن — بمواءمة سطراً بسطر مع المنتج والتطوير.",
      fr: "Des exigences et maquettes aux cas — chemins d'exception, bornes, transitions d'état, idempotence et concurrence — alignés ligne à ligne avec produit et dev.",
      ru: "От требований и прототипов к кейсам — исключения, границы, переходы состояний, идемпотентность и конкурентность — согласованные построчно с продуктом и разработкой.",
      es: "De requisitos y prototipos a casos — rutas de excepción, límites, transiciones de estado, idempotencia y concurrencia — alineados línea por línea con producto y desarrollo.",
    },
  },
  {
    icon: "api",
    title: {
      en: "API & automation",
      zh: "接口与自动化",
      ar: "الواجهات والأتمتة",
      fr: "API & automatisation",
      ru: "API и автоматизация",
      es: "API y automatización",
    },
    body: {
      en: "Maintained API suites; scripts that mass-generate data and simulate third-party callbacks (success, failure, delay, duplicate, out-of-order), plus multi-IP concurrency to probe risk control and rate limits.",
      zh: "自维护接口测试项目;脚本批量造数据、模拟第三方回调(成功、失败、延迟、重复、乱序),并用多 IP 并发验证风控与限流。",
      ar: "صيانة حزم اختبار الواجهات؛ سكربتات لتوليد البيانات بكميات ومحاكاة ردود الطرف الثالث (نجاح، فشل، تأخير، تكرار، ترتيب مضطرب)، وتزامن متعدد الـIP لاختبار التحكم بالمخاطر والحدود.",
      fr: "Suites d'API maintenues ; scripts générant des données en masse et simulant les rappels tiers (succès, échec, délai, doublon, hors-ordre), plus concurrence multi-IP pour sonder le contrôle de risque et la limitation.",
      ru: "Поддержка API-наборов; скрипты массовой генерации данных и имитации сторонних колбэков (успех, сбой, задержка, дубль, нарушение порядка) и многопоточные запросы с разных IP для проверки риск-контроля и лимитов.",
      es: "Suites de API mantenidas; scripts que generan datos en masa y simulan callbacks de terceros (éxito, fallo, retraso, duplicado, desorden), más concurrencia multi-IP para probar el control de riesgo y los límites.",
    },
  },
  {
    icon: "permissions",
    title: {
      en: "Permissions & multi-tenant",
      zh: "权限与多租户",
      ar: "الصلاحيات وتعدد المستأجرين",
      fr: "Permissions & multi-tenant",
      ru: "Права и мультиарендность",
      es: "Permisos y multi-tenant",
    },
    body: {
      en: "Across layered roles (platform, tenant, sub-account), verify menu permissions and data scope, and probe for privilege escalation.",
      zh: "在多层级角色(平台、租户、子账号)下,验证菜单权限与数据范围是否生效,排查越权。",
      ar: "عبر أدوار متعددة الطبقات (منصة، مستأجر، حساب فرعي)، التحقق من صلاحيات القوائم ونطاق البيانات، واختبار تجاوز الصلاحيات.",
      fr: "Sur des rôles en couches (plateforme, locataire, sous-compte), vérifier les permissions de menu et la portée des données, et sonder l'élévation de privilèges.",
      ru: "В многоуровневых ролях (платформа, арендатор, субаккаунт) проверка прав меню и области данных и поиск эскалации привилегий.",
      es: "En roles por capas (plataforma, tenant, subcuenta), verificar permisos de menú y alcance de datos, y sondear la escalada de privilegios.",
    },
  },
  {
    icon: "performance",
    title: {
      en: "Front-end performance",
      zh: "前端性能与弱网",
      ar: "أداء الواجهة الأمامية",
      fr: "Performance front-end",
      ru: "Производительность фронтенда",
      es: "Rendimiento front-end",
    },
    body: {
      en: "Load and weak-network testing — first paint, time-to-interactive, bundle size, render-blocking resources — with quantified fixes tracked before and after.",
      zh: "加载与弱网测试——首屏、可交互时间、主包体积、阻塞渲染资源——给出可量化优化项并跟踪前后对比。",
      ar: "اختبار التحميل والشبكة الضعيفة — أول رسم، زمن التفاعل، حجم الحزمة، الموارد المعيقة للعرض — مع إصلاحات قابلة للقياس تُتابَع قبل وبعد.",
      fr: "Tests de charge et réseau faible — premier rendu, time-to-interactive, taille du bundle, ressources bloquant le rendu — avec corrections quantifiées suivies avant/après.",
      ru: "Тесты загрузки и слабой сети — первая отрисовка, время до интерактивности, размер бандла, блокирующие ресурсы — с измеримыми улучшениями «до/после».",
      es: "Pruebas de carga y red débil — primer render, time-to-interactive, tamaño del bundle, recursos que bloquean el render — con mejoras cuantificadas medidas antes y después.",
    },
  },
  {
    icon: "device",
    title: {
      en: "Real-device testing",
      zh: "App 真机兼容",
      ar: "اختبار الأجهزة الحقيقية",
      fr: "Tests sur appareils réels",
      ru: "Тестирование на реальных устройствах",
      es: "Pruebas en dispositivos reales",
    },
    body: {
      en: "Compatibility across device models — network switching, foreground/background, system permissions, and error recovery — with redacted log bundles for devs.",
      zh: "多机型兼容对比——网络切换、前后台切换、系统权限与异常恢复——测试日志脱敏打包,方便研发定位。",
      ar: "التوافق عبر طُرز الأجهزة — تبديل الشبكة، المقدمة/الخلفية، صلاحيات النظام، والتعافي من الأخطاء — مع حِزم سجلات مُنقّاة للمطورين.",
      fr: "Compatibilité multi-modèles — bascule réseau, premier/arrière-plan, permissions système, reprise après erreur — avec journaux anonymisés pour les devs.",
      ru: "Совместимость по моделям устройств — переключение сети, передний/фоновый режим, системные разрешения и восстановление после ошибок — с обезличенными логами для разработки.",
      es: "Compatibilidad entre modelos — cambio de red, primer plano/segundo plano, permisos del sistema y recuperación de errores — con registros anonimizados para desarrollo.",
    },
  },
  {
    icon: "analytics",
    title: {
      en: "Data analysis",
      zh: "数据分析",
      ar: "تحليل البيانات",
      fr: "Analyse de données",
      ru: "Анализ данных",
      es: "Análisis de datos",
    },
    body: {
      en: "Device and OS distribution from access logs (100k+ deduped users) to scope compatibility testing with evidence.",
      zh: "基于访问日志做设备与系统分布分析(十几万去重用户),为兼容性测试范围提供依据。",
      ar: "توزيع الأجهزة وأنظمة التشغيل من سجلات الوصول (أكثر من 100 ألف مستخدم بعد إزالة التكرار) لتحديد نطاق اختبار التوافق بالأدلة.",
      fr: "Répartition appareils/OS à partir des journaux d'accès (100k+ utilisateurs dédupliqués) pour cadrer les tests de compatibilité avec des preuves.",
      ru: "Распределение устройств и ОС из логов доступа (100k+ уникальных пользователей) для обоснования охвата тестов совместимости.",
      es: "Distribución de dispositivos y SO a partir de logs de acceso (100k+ usuarios deduplicados) para acotar las pruebas de compatibilidad con evidencia.",
    },
  },
  {
    icon: "sql",
    title: {
      en: "SQL & tooling",
      zh: "SQL 与工具",
      ar: "SQL والأدوات",
      fr: "SQL & outils",
      ru: "SQL и инструменты",
      es: "SQL y herramientas",
    },
    body: {
      en: "SQL for data reconciliation; fluent with defect tracking, docs, and chat tooling; Cloudflare to deploy internal report sites.",
      zh: "用 SQL 做数据核对;熟悉缺陷管理、文档协作与即时通讯工具;用 Cloudflare 部署内部报告站。",
      ar: "SQL لمطابقة البيانات؛ إتقان أدوات تتبّع العيوب والتوثيق والمحادثة؛ ونشر مواقع التقارير الداخلية عبر Cloudflare.",
      fr: "SQL pour le rapprochement des données ; à l'aise avec le suivi de défauts, la doc et la messagerie ; Cloudflare pour déployer des sites de rapports internes.",
      ru: "SQL для сверки данных; уверенно с трекерами дефектов, документацией и мессенджерами; Cloudflare для внутренних сайтов отчётов.",
      es: "SQL para conciliación de datos; soltura con seguimiento de defectos, documentación y mensajería; Cloudflare para desplegar sitios de informes internos.",
    },
  },
];

export const AI_ROLES: AiRole[] = [
  {
    icon: "dispatch",
    title: {
      en: "Dispatch",
      zh: "任务分派",
      ar: "التوزيع",
      fr: "Répartition",
      ru: "Диспетчеризация",
      es: "Despacho",
    },
    body: {
      en: "Splits the work and routes each task to the right assistant.",
      zh: "拆分工作,把每个任务分派给合适的助手。",
      ar: "يقسّم العمل ويوجّه كل مهمة إلى المساعد المناسب.",
      fr: "Découpe le travail et oriente chaque tâche vers le bon assistant.",
      ru: "Делит работу и направляет каждую задачу нужному ассистенту.",
      es: "Divide el trabajo y dirige cada tarea al asistente adecuado.",
    },
  },
  {
    icon: "generate",
    title: {
      en: "Generate & run",
      zh: "用例生成与执行",
      ar: "التوليد والتنفيذ",
      fr: "Générer & exécuter",
      ru: "Генерация и запуск",
      es: "Generar y ejecutar",
    },
    body: {
      en: "Drafts the test cases and runs them.",
      zh: "起草测试用例并执行。",
      ar: "يصيغ حالات الاختبار وينفّذها.",
      fr: "Rédige les cas de test et les exécute.",
      ru: "Составляет тест-кейсы и выполняет их.",
      es: "Redacta los casos de prueba y los ejecuta.",
    },
  },
  {
    icon: "defect",
    title: {
      en: "Defects",
      zh: "缺陷管理",
      ar: "العيوب",
      fr: "Défauts",
      ru: "Дефекты",
      es: "Defectos",
    },
    body: {
      en: "Files and tracks defects with screenshot evidence.",
      zh: "提交并跟踪缺陷,附截图证据。",
      ar: "يسجّل العيوب ويتابعها بأدلة لقطات الشاشة.",
      fr: "Consigne et suit les défauts avec captures à l'appui.",
      ru: "Заводит и отслеживает дефекты со скриншотами-доказательствами.",
      es: "Registra y sigue defectos con evidencia en capturas.",
    },
  },
  {
    icon: "notify",
    title: {
      en: "Notify",
      zh: "通知",
      ar: "الإشعار",
      fr: "Notifier",
      ru: "Уведомления",
      es: "Notificar",
    },
    body: {
      en: "Pings the engineer responsible, automatically.",
      zh: "自动通知对应的研发。",
      ar: "ينبّه المهندس المسؤول تلقائياً.",
      fr: "Alerte automatiquement l'ingénieur responsable.",
      ru: "Автоматически оповещает ответственного инженера.",
      es: "Avisa automáticamente al ingeniero responsable.",
    },
  },
  {
    icon: "docs",
    title: {
      en: "Docs",
      zh: "文档",
      ar: "التوثيق",
      fr: "Docs",
      ru: "Документы",
      es: "Docs",
    },
    body: {
      en: "Assembles the reports and release summaries.",
      zh: "汇编测试报告与发版小结。",
      ar: "يجمّع التقارير وملخّصات الإصدار.",
      fr: "Assemble les rapports et les notes de version.",
      ru: "Собирает отчёты и сводки по релизам.",
      es: "Compone los informes y resúmenes de versión.",
    },
  },
  {
    icon: "code",
    title: {
      en: "Code",
      zh: "编码",
      ar: "البرمجة",
      fr: "Code",
      ru: "Код",
      es: "Código",
    },
    body: {
      en: "Scaffolds scripts and small fixes.",
      zh: "生成脚本与小修复。",
      ar: "ينشئ السكربتات والإصلاحات الصغيرة.",
      fr: "Échafaude scripts et petits correctifs.",
      ru: "Создаёт скрипты и небольшие правки.",
      es: "Genera scripts y correcciones pequeñas.",
    },
  },
];

export const AI_HUMAN_NOTE: Localized = {
  en: "AI carries the repetitive execution and reporting; I keep the test strategy and the judgment calls.",
  zh: "AI 承担重复的执行与报告整理,我把精力放在测试策略与问题判断上。",
  ar: "يتحمّل الذكاء الاصطناعي التنفيذ المتكرر وإعداد التقارير، وأحتفظ أنا باستراتيجية الاختبار والقرارات الحاسمة.",
  fr: "L'IA porte l'exécution répétitive et le reporting ; je garde la stratégie de test et les décisions de jugement.",
  ru: "ИИ берёт на себя рутинное выполнение и отчётность; за мной остаются стратегия тестирования и ключевые решения.",
  es: "La IA se encarga de la ejecución repetitiva y los informes; yo conservo la estrategia de prueba y las decisiones de criterio.",
};

export const OUTPUTS: Output[] = [
  {
    title: {
      en: "Structured reports",
      zh: "结构化测试报告",
      ar: "تقارير منظّمة",
      fr: "Rapports structurés",
      ru: "Структурированные отчёты",
      es: "Informes estructurados",
    },
    body: {
      en: "One format — conclusion, numbered open-issue list, charts, appendix — across function, performance, device-comparison, and user-device reports.",
      zh: "统一结构——结论、待确认问题编号清单、图表、附录——覆盖功能、性能、机型对比与用户设备分析报告。",
      ar: "صيغة واحدة — خلاصة، قائمة مرقّمة بالقضايا المعلّقة، رسوم، ملحق — عبر تقارير الوظائف والأداء ومقارنة الأجهزة وأجهزة المستخدمين.",
      fr: "Un format — conclusion, liste numérotée de points ouverts, graphiques, annexe — pour les rapports fonctionnels, de performance, de comparaison d'appareils et d'appareils utilisateurs.",
      ru: "Единый формат — вывод, нумерованный список открытых вопросов, графики, приложение — для отчётов по функциям, производительности, сравнению устройств и устройствам пользователей.",
      es: "Un formato — conclusión, lista numerada de temas abiertos, gráficos, apéndice — en informes de función, rendimiento, comparación de dispositivos y dispositivos de usuario.",
    },
  },
  {
    title: {
      en: "Internal report site",
      zh: "内部报告站",
      ar: "موقع تقارير داخلي",
      fr: "Site de rapports interne",
      ru: "Внутренний сайт отчётов",
      es: "Sitio de informes interno",
    },
    body: {
      en: "Login-gated, with a dedicated AI-readable entry — devs can have an AI read a report and go straight to the fix.",
      zh: "需登录访问,另设 AI 可读入口——研发可直接让 AI 读报告去修 bug。",
      ar: "محمي بتسجيل الدخول، مع مدخل مخصّص قابل للقراءة من الذكاء الاصطناعي — يمكن للمطور أن يجعل الذكاء الاصطناعي يقرأ التقرير وينتقل مباشرة إلى الإصلاح.",
      fr: "Accès authentifié, avec une entrée dédiée lisible par l'IA — un dev peut faire lire un rapport à une IA et passer droit au correctif.",
      ru: "Доступ по входу, с отдельным входом для ИИ — разработчик может дать ИИ прочитать отчёт и сразу перейти к исправлению.",
      es: "Con acceso autenticado y una entrada dedicada legible por IA — un dev puede hacer que una IA lea un informe y vaya directo al arreglo.",
    },
  },
  {
    title: {
      en: "Test standards",
      zh: "测试规范",
      ar: "معايير الاختبار",
      fr: "Normes de test",
      ru: "Стандарты тестирования",
      es: "Normas de prueba",
    },
    body: {
      en: "Stable-environment data as the performance baseline, no case changes before requirements are final, fix notes read before retest, one weekly defect metric.",
      zh: "以稳定环境数据作为性能基准、需求未定稿不改用例、复测前先读修复说明、周缺陷统计口径统一。",
      ar: "بيانات بيئة مستقرة كأساس للأداء، لا تغيير للحالات قبل اعتماد المتطلبات، قراءة ملاحظات الإصلاح قبل إعادة الاختبار، ومقياس عيوب أسبوعي موحّد.",
      fr: "Données d'environnement stable comme référence de performance, pas de changement de cas avant des exigences finalisées, lecture des notes de correctif avant retest, une métrique de défauts hebdomadaire unifiée.",
      ru: "Данные стабильной среды как базовая линия производительности, без изменения кейсов до финала требований, чтение заметок об исправлениях перед ретестом, единая недельная метрика дефектов.",
      es: "Datos de entorno estable como línea base de rendimiento, sin cambios de casos antes de requisitos finales, lectura de notas de arreglo antes del retest, una métrica semanal de defectos unificada.",
    },
  },
  {
    title: {
      en: "Release summaries",
      zh: "发版小结",
      ar: "ملخّصات الإصدار",
      fr: "Notes de version",
      ru: "Сводки по релизам",
      es: "Resúmenes de versión",
    },
    body: {
      en: "Per-surface rollups of what was added, improved, and fixed.",
      zh: "按端汇总新增、优化与修复内容。",
      ar: "تجميعات لكل واجهة لما أُضيف وحُسِّن وأُصلِح.",
      fr: "Récapitulatifs par surface de ce qui a été ajouté, amélioré et corrigé.",
      ru: "Сводки по каждой платформе: что добавлено, улучшено и исправлено.",
      es: "Resúmenes por superficie de lo añadido, mejorado y corregido.",
    },
  },
];
