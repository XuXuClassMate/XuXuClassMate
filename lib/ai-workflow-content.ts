import type { Localized } from "@/components/i18n";
import type { IconName } from "@/components/icons";

export const WF_SUMMARY: Localized = {
  en: "Instead of one do-everything assistant, the work is split across a lead, test execution, defects, notifications, code, and docs — tied together by a role chart, handoff rules, long-term memory, and safety redlines. One QA engineer runs it like a small team, stepping in only at the key decisions.",
  zh: "把一个“什么都做”的 AI 助手,拆成主管、测试执行、缺陷管理、通知、编码、文档各管一摊,用分工表、交接规则、长期记忆与安全红线串起来。一名 QA 工程师像带一支小团队一样跑完全流程,只在关键节点拍板。",
  ar: "بدلاً من مساعد واحد يفعل كل شيء، يُوزَّع العمل على مشرف وتنفيذ اختبار وعيوب وإشعارات وبرمجة وتوثيق — مربوطة بجدول أدوار وقواعد تسليم وذاكرة طويلة المدى وخطوط أمان حمراء. مهندس جودة واحد يديرها كفريق صغير، ويتدخّل فقط عند القرارات الرئيسية.",
  fr: "Au lieu d'un assistant qui fait tout, le travail est réparti entre un superviseur, l'exécution des tests, les défauts, les notifications, le code et la doc — reliés par une table des rôles, des règles de passation, une mémoire long terme et des lignes rouges de sécurité. Un seul ingénieur QA le pilote comme une petite équipe, n'intervenant qu'aux décisions clés.",
  ru: "Вместо одного «универсального» ассистента работа распределена между руководителем, исполнением тестов, дефектами, уведомлениями, кодом и документами — связанными таблицей ролей, правилами передачи, долговременной памятью и красными линиями безопасности. Один QA-инженер управляет этим как небольшой командой, вмешиваясь только в ключевых решениях.",
  es: "En lugar de un asistente que lo hace todo, el trabajo se reparte entre un supervisor, ejecución de pruebas, defectos, notificaciones, código y documentación — unidos por una tabla de roles, reglas de traspaso, memoria a largo plazo y líneas rojas de seguridad. Un ingeniero QA lo dirige como un pequeño equipo, interviniendo solo en las decisiones clave.",
};

export const PRINCIPLES: { title: Localized; body: Localized }[] = [
  {
    title: {
      en: "The lead dispatches, never executes",
      zh: "主管只调度,不干活",
      ar: "المشرف يوزّع ولا ينفّذ",
      fr: "Le superviseur répartit, n'exécute jamais",
      ru: "Руководитель распределяет, но не исполняет",
      es: "El supervisor reparte, nunca ejecuta",
    },
    body: {
      en: "The lead splits a request into subtasks, assigns them, gathers results, and reports back — it writes no cases, sends no messages, files no defects itself.",
      zh: "主管把一句需求拆成子任务、分派、收集结果、汇总回报——它自己不写用例、不发消息、不提缺陷。",
      ar: "يقسّم المشرف الطلب إلى مهام فرعية ويوزّعها ويجمع النتائج ويرفع التقرير — دون أن يكتب حالات أو يرسل رسائل أو يسجّل عيوباً بنفسه.",
      fr: "Le superviseur découpe une demande en sous-tâches, les assigne, rassemble les résultats et fait le compte rendu — sans écrire de cas, envoyer de messages ni consigner de défauts lui-même.",
      ru: "Руководитель делит запрос на подзадачи, назначает их, собирает результаты и отчитывается — сам не пишет кейсы, не шлёт сообщения и не заводит дефекты.",
      es: "El supervisor divide una petición en subtareas, las asigna, reúne resultados e informa — sin escribir casos, enviar mensajes ni registrar defectos por sí mismo.",
    },
  },
  {
    title: {
      en: "The entry point doesn't change the split",
      zh: "入口不改变分工",
      ar: "نقطة الدخول لا تغيّر التوزيع",
      fr: "Le point d'entrée ne change pas la répartition",
      ru: "Точка входа не меняет распределение",
      es: "El punto de entrada no cambia el reparto",
    },
    body: {
      en: "Whatever you say to whichever assistant, a task outside its job is pushed back to the lead to reassign — never quietly done on the side.",
      zh: "不管你对哪个助手说什么,不属于它职责的任务,它就推回主管重新分派,而不是“顺手做了”。",
      ar: "مهما قلت ولأي مساعد، أي مهمة خارج اختصاصه تُعاد إلى المشرف لإعادة توزيعها — لا تُنجَز خلسة.",
      fr: "Quoi que vous disiez, à quel assistant que ce soit, une tâche hors de son rôle est renvoyée au superviseur pour réassignation — jamais faite en douce.",
      ru: "Что бы вы ни сказали и какому бы ассистенту, задача вне его роли возвращается руководителю для переназначения — её не делают втихую.",
      es: "Digas lo que digas y al asistente que sea, una tarea fuera de su rol se devuelve al supervisor para reasignarla — nunca se hace por su cuenta.",
    },
  },
  {
    title: {
      en: "One outlet per external write",
      zh: "一类外部写操作只有一个出口",
      ar: "منفذ واحد لكل كتابة خارجية",
      fr: "Une seule sortie par écriture externe",
      ru: "Один выход на каждый внешний запись-канал",
      es: "Una sola salida por cada escritura externa",
    },
    body: {
      en: "Messages go only through Notify, the defect system only through Defects, the knowledge base only through Docs, code and deploys only through Code — so when something breaks, you know exactly who to check.",
      zh: "消息只走通知助手,缺陷系统只走缺陷管理助手,知识库只走文档助手,代码与部署只走编码助手——出了问题一眼就知道该查谁。",
      ar: "الرسائل عبر مساعد الإشعار فقط، ونظام العيوب عبر مساعد العيوب فقط، وقاعدة المعرفة عبر مساعد التوثيق فقط، والكود والنشر عبر مساعد البرمجة فقط — فإذا حدث خطأ تعرف بالضبط من تراجع.",
      fr: "Les messages passent uniquement par Notify, le système de défauts par Défauts, la base de connaissances par Docs, le code et les déploiements par Code — en cas de problème, vous savez exactement qui vérifier.",
      ru: "Сообщения — только через Notify, система дефектов — только через Defects, база знаний — только через Docs, код и деплой — только через Code: если что-то сломалось, сразу ясно, кого проверять.",
      es: "Los mensajes solo por Notify, el sistema de defectos solo por Defects, la base de conocimiento solo por Docs, el código y los despliegues solo por Code — si algo falla, sabes exactamente a quién revisar.",
    },
  },
];

export const FLOW: { n: string; title: Localized; body: Localized }[] = [
  {
    n: "01",
    title: {
      en: "Requirement in, lead splits",
      zh: "需求进来,主管拆任务",
      ar: "يصل المتطلب، المشرف يقسّم",
      fr: "Exigence reçue, le superviseur découpe",
      ru: "Пришло требование — руководитель делит",
      es: "Llega el requisito, el supervisor divide",
    },
    body: {
      en: "The lead turns one request into numbered subtasks with owners and dependencies.",
      zh: "主管把一句需求拆成带执行者和依赖关系的编号子任务。",
      ar: "يحوّل المشرف الطلب إلى مهام فرعية مرقّمة بأصحابها وتبعياتها.",
      fr: "Le superviseur transforme une demande en sous-tâches numérotées avec responsables et dépendances.",
      ru: "Руководитель превращает запрос в пронумерованные подзадачи с исполнителями и зависимостями.",
      es: "El supervisor convierte una petición en subtareas numeradas con responsables y dependencias.",
    },
  },
  {
    n: "02",
    title: {
      en: "Cases drafted, then loaded",
      zh: "写用例稿,再落库",
      ar: "تُكتب الحالات ثم تُحمَّل",
      fr: "Cas rédigés, puis chargés",
      ru: "Кейсы составлены, затем загружены",
      es: "Casos redactados, luego cargados",
    },
    body: {
      en: "The test assistant writes cases (md + json + a visual draft) from the acceptance criteria; the defect assistant loads them — the test assistant never touches the defect system directly.",
      zh: "测试助手按验收标准产出用例(md + json + 可视化稿);缺陷管理助手落库——测试助手从不直接碰缺陷系统。",
      ar: "يكتب مساعد الاختبار الحالات (md + json + مسودة مرئية) من معايير القبول؛ ويحمّلها مساعد العيوب — ولا يلمس مساعد الاختبار نظام العيوب مباشرة.",
      fr: "L'assistant de test rédige les cas (md + json + maquette) à partir des critères d'acceptation ; l'assistant défauts les charge — l'assistant de test ne touche jamais directement le système de défauts.",
      ru: "Ассистент тестов пишет кейсы (md + json + визуальный черновик) по критериям приёмки; ассистент дефектов загружает их — ассистент тестов не трогает систему дефектов напрямую.",
      es: "El asistente de pruebas redacta los casos (md + json + un boceto visual) desde los criterios de aceptación; el asistente de defectos los carga — el de pruebas nunca toca el sistema de defectos directamente.",
    },
  },
  {
    n: "03",
    title: {
      en: "Execute, data-driven",
      zh: "执行,数据驱动",
      ar: "التنفيذ، مدفوع بالبيانات",
      fr: "Exécution, pilotée par les données",
      ru: "Выполнение, на данных",
      es: "Ejecución, guiada por datos",
    },
    body: {
      en: "API-level data generation and simulated third-party callbacks (success, failure, delay, duplicate, out-of-order); headless browser first, real devices only when needed.",
      zh: "接口层造数 + 模拟第三方回调(成功、失败、延迟、重复、乱序);无头浏览器优先,必要时才上真机。",
      ar: "توليد البيانات على مستوى الواجهة ومحاكاة ردود الطرف الثالث (نجاح، فشل، تأخير، تكرار، ترتيب مضطرب)؛ المتصفح بلا واجهة أولاً، والأجهزة الحقيقية عند الحاجة فقط.",
      fr: "Génération de données au niveau API et rappels tiers simulés (succès, échec, délai, doublon, hors-ordre) ; navigateur headless d'abord, appareils réels seulement si nécessaire.",
      ru: "Генерация данных на уровне API и имитация сторонних колбэков (успех, сбой, задержка, дубль, нарушение порядка); сначала headless-браузер, реальные устройства — только при необходимости.",
      es: "Generación de datos a nivel de API y callbacks de terceros simulados (éxito, fallo, retraso, duplicado, desorden); navegador headless primero, dispositivos reales solo cuando hace falta.",
    },
  },
  {
    n: "04",
    title: {
      en: "Online report, numbered",
      zh: "在线报告,带编号",
      ar: "تقرير على الإنترنت، مُرقّم",
      fr: "Rapport en ligne, numéroté",
      ru: "Онлайн-отчёт, с номерами",
      es: "Informe en línea, numerado",
    },
    body: {
      en: "A report page opens with a numbered “suspected issues to confirm” list; the chat summary uses the exact same numbers.",
      zh: "报告页开头是编号的“疑似问题待确认”清单;聊天摘要用完全一致的编号。",
      ar: "تبدأ صفحة التقرير بقائمة مرقّمة بـ«مشكلات مشتبهة للتأكيد»؛ ويستخدم ملخّص المحادثة الأرقام نفسها تماماً.",
      fr: "Une page de rapport s'ouvre sur une liste numérotée de « problèmes suspectés à confirmer » ; le résumé du chat reprend exactement les mêmes numéros.",
      ru: "Страница отчёта открывается нумерованным списком «предполагаемых проблем к подтверждению»; в сводке чата те же номера.",
      es: "La página de informe abre con una lista numerada de «problemas sospechosos por confirmar»; el resumen del chat usa exactamente los mismos números.",
    },
  },
  {
    n: "05",
    title: {
      en: "Human confirms by number",
      zh: "人按编号确认",
      ar: "الإنسان يؤكّد بالرقم",
      fr: "L'humain confirme par numéro",
      ru: "Человек подтверждает по номеру",
      es: "La persona confirma por número",
    },
    body: {
      en: "I reply by number which are bugs. Confirmed ones go to the defect assistant to file; notify DMs the right engineer, one merged message per person.",
      zh: "我按编号回复哪些是 bug。确认的交给缺陷管理助手提单;通知助手私信对应研发,同一人合并成一条消息。",
      ar: "أردّ بالأرقام أيها عيوب. المؤكّدة تذهب لمساعد العيوب للتسجيل؛ ويراسل مساعد الإشعار المهندس المناسب برسالة واحدة مدمجة لكل شخص.",
      fr: "Je réponds par numéro lesquels sont des bugs. Les confirmés vont à l'assistant défauts ; Notify envoie un message privé au bon ingénieur, un message fusionné par personne.",
      ru: "Я отвечаю по номерам, что баги. Подтверждённые идут ассистенту дефектов; Notify пишет нужному инженеру — одно объединённое сообщение на человека.",
      es: "Respondo por número cuáles son bugs. Los confirmados van al asistente de defectos; Notify envía un privado al ingeniero correcto, un mensaje fusionado por persona.",
    },
  },
  {
    n: "06",
    title: {
      en: "Retest reads the fix note first",
      zh: "复测先读修复说明",
      ar: "إعادة الاختبار تقرأ ملاحظة الإصلاح أولاً",
      fr: "Le retest lit d'abord la note de correctif",
      ru: "Ретест сначала читает заметку об исправлении",
      es: "El retest lee primero la nota de arreglo",
    },
    body: {
      en: "After a fix, retest reads the developer's note, then closes the defect or reactivates it with evidence — blocked cases are listed separately, not failed.",
      zh: "修复后,复测先读研发的修复说明,再关单或附数据重新激活——被阻塞无法判定的单独列出,不算失败。",
      ar: "بعد الإصلاح، تقرأ إعادة الاختبار ملاحظة المطوّر، ثم تُغلق العيب أو تعيد تفعيله بالأدلة — الحالات المحجوبة تُدرَج على حدة ولا تُعدّ فاشلة.",
      fr: "Après un correctif, le retest lit la note du développeur, puis clôt le défaut ou le réactive avec preuves — les cas bloqués sont listés à part, non échoués.",
      ru: "После исправления ретест читает заметку разработчика, затем закрывает дефект или реактивирует его с доказательствами — заблокированные кейсы выносятся отдельно, не как провал.",
      es: "Tras un arreglo, el retest lee la nota del desarrollador y luego cierra el defecto o lo reactiva con evidencia — los casos bloqueados se listan aparte, no como fallo.",
    },
  },
];

export const HUMAN_LOOP: Localized[] = [
  {
    en: "Deleting data, files, defects, or resources",
    zh: "删除数据、文件、缺陷或资源",
    ar: "حذف البيانات أو الملفات أو العيوب أو الموارد",
    fr: "Supprimer données, fichiers, défauts ou ressources",
    ru: "Удаление данных, файлов, дефектов или ресурсов",
    es: "Eliminar datos, archivos, defectos o recursos",
  },
  {
    en: "Sending anything outward — messages, email, public posts",
    zh: "对外发送——消息、邮件、公开发布",
    ar: "أي إرسال خارجي — رسائل أو بريد أو نشر عام",
    fr: "Tout envoi externe — messages, e-mails, publications",
    ru: "Любая отправка вовне — сообщения, почта, публикации",
    es: "Cualquier envío externo — mensajes, correo, publicaciones",
  },
  {
    en: "Committing code or deploying",
    zh: "提交代码或部署",
    ar: "إيداع الكود أو النشر",
    fr: "Valider du code ou déployer",
    ru: "Коммит кода или деплой",
    es: "Hacer commit de código o desplegar",
  },
  {
    en: "Widening access or permissions",
    zh: "扩大访问范围或权限",
    ar: "توسيع الوصول أو الصلاحيات",
    fr: "Élargir l'accès ou les permissions",
    ru: "Расширение доступа или прав",
    es: "Ampliar accesos o permisos",
  },
  {
    en: "Deciding whether a suspected issue is a bug",
    zh: "判定疑似问题是不是 bug",
    ar: "تقرير ما إذا كانت المشكلة المشتبهة عيباً",
    fr: "Décider si un problème suspecté est un bug",
    ru: "Решение, баг ли предполагаемая проблема",
    es: "Decidir si un problema sospechoso es un bug",
  },
];

export const SAFETY: Localized[] = [
  {
    en: "No passwords, tokens, or keys in chat, code, repos, or logs",
    zh: "密码、token、私钥不进聊天、代码、仓库、日志",
    ar: "لا كلمات مرور أو رموز أو مفاتيح في المحادثة أو الكود أو المستودعات أو السجلّات",
    fr: "Aucun mot de passe, token ou clé dans le chat, le code, les dépôts ou les logs",
    ru: "Ни паролей, ни токенов, ни ключей в чате, коде, репозиториях и логах",
    es: "Sin contraseñas, tokens ni claves en chat, código, repos o logs",
  },
  {
    en: "No commits or deploys without authorization",
    zh: "未经授权不提交代码、不部署",
    ar: "لا إيداع أو نشر دون تفويض",
    fr: "Aucun commit ni déploiement sans autorisation",
    ru: "Никаких коммитов и деплоев без разрешения",
    es: "Sin commits ni despliegues sin autorización",
  },
  {
    en: "Never guess backend passwords — report instead",
    zh: "不猜后台密码——拿不到就报告",
    ar: "لا تخمين لكلمات مرور الخادم — بل الإبلاغ",
    fr: "Ne jamais deviner les mots de passe backend — signaler plutôt",
    ru: "Не угадывать серверные пароли — сообщать",
    es: "Nunca adivinar contraseñas del backend — informar",
  },
  {
    en: "Account files read at runtime, deleted after use",
    zh: "账号文件运行时读取,用完即删",
    ar: "ملفات الحسابات تُقرأ وقت التشغيل وتُحذف بعد الاستخدام",
    fr: "Fichiers de comptes lus à l'exécution, supprimés après usage",
    ru: "Файлы учёток читаются в рантайме и удаляются после использования",
    es: "Archivos de cuentas leídos en ejecución, borrados tras su uso",
  },
  {
    en: "Credentials redacted in screenshots and logs",
    zh: "截图与日志中的凭证脱敏",
    ar: "إخفاء بيانات الاعتماد في لقطات الشاشة والسجلّات",
    fr: "Identifiants masqués dans les captures et les logs",
    ru: "Учётные данные скрыты на скриншотах и в логах",
    es: "Credenciales ocultadas en capturas y logs",
  },
  {
    en: "Outbound messages draft-first by default",
    zh: "对外消息默认先出草稿",
    ar: "الرسائل الخارجية كمسودة أولاً افتراضياً",
    fr: "Messages sortants en brouillon d'abord par défaut",
    ru: "Исходящие сообщения по умолчанию сначала черновиком",
    es: "Mensajes salientes en borrador primero por defecto",
  },
  {
    en: "Reproduction curl always strips credential headers",
    zh: "复现用的 curl 一律删除凭证请求头",
    ar: "أمر curl للاستنساخ يزيل دائماً ترويسات الاعتماد",
    fr: "Le curl de reproduction retire toujours les en-têtes d'identifiants",
    ru: "curl для воспроизведения всегда без заголовков с учётными данными",
    es: "El curl de reproducción siempre quita cabeceras de credenciales",
  },
];

export const WF_HEADINGS: Record<string, Localized> = {
  principles: {
    en: "Three rules hold it together",
    zh: "三条规则把它串起来",
    ar: "ثلاث قواعد تجمعها معاً",
    fr: "Trois règles qui tiennent l'ensemble",
    ru: "Три правила держат всё вместе",
    es: "Tres reglas lo mantienen unido",
  },
  roles: {
    en: "Six roles, one responsibility each",
    zh: "六个角色,各管一摊",
    ar: "ستة أدوار، لكل منها مسؤولية واحدة",
    fr: "Six rôles, une responsabilité chacun",
    ru: "Шесть ролей, у каждой своя зона",
    es: "Seis roles, una responsabilidad cada uno",
  },
  flow: {
    en: "From requirement to closed defect",
    zh: "从需求到关单",
    ar: "من المتطلب إلى إغلاق العيب",
    fr: "De l'exigence au défaut clôturé",
    ru: "От требования до закрытого дефекта",
    es: "Del requisito al defecto cerrado",
  },
  human: {
    en: "What still needs a human",
    zh: "仍然需要人拍板的",
    ar: "ما يزال يحتاج إلى إنسان",
    fr: "Ce qui requiert encore un humain",
    ru: "Что всё ещё требует человека",
    es: "Lo que aún necesita a una persona",
  },
  safety: {
    en: "Safety redlines, no exceptions",
    zh: "安全红线,没有例外",
    ar: "خطوط الأمان الحمراء، بلا استثناء",
    fr: "Lignes rouges de sécurité, sans exception",
    ru: "Красные линии безопасности, без исключений",
    es: "Líneas rojas de seguridad, sin excepciones",
  },
};

export const WF_META: { icon: IconName } = { icon: "dispatch" };
