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
  {
    title: {
      en: "Judge against the latest requirement",
      zh: "按最新需求判定",
      ar: "احكم وفق أحدث متطلب",
      fr: "Juger selon l'exigence la plus récente",
      ru: "Судить по последнему требованию",
      es: "Juzgar según el requisito más reciente",
    },
    body: {
      en: "The verdict follows the newest spec, not the test case: matches → pass, doesn't → file it, unclear → number it and hand it to me. An outdated case never fails a correct build.",
      zh: "判定依据是最新需求,而不是用例本身:符合即过,不符合直接提单,拿不准就编号交给我。用例过时,绝不因此判一个正确的版本不通过。",
      ar: "يتبع الحكم أحدث مواصفة لا حالة الاختبار: مطابق ← ينجح، غير مطابق ← سجّله، غير واضح ← رقّمه وسلّمه لي. حالة قديمة لا تُسقِط بناءً صحيحاً أبداً.",
      fr: "Le verdict suit la spec la plus récente, pas le cas de test : conforme → passe, non conforme → à consigner, incertain → numéroté et remis à moi. Un cas obsolète ne fait jamais échouer un build correct.",
      ru: "Вердикт следует за свежей спецификацией, а не за кейсом: совпало → проходит, нет → завести дефект, неясно → пронумеровать и передать мне. Устаревший кейс никогда не валит корректную сборку.",
      es: "El veredicto sigue a la spec más reciente, no al caso: coincide → pasa, no coincide → se registra, dudoso → se numera y me lo pasa. Un caso obsoleto nunca tumba un build correcto.",
    },
  },
  {
    title: {
      en: "Testing never queues — it scales out",
      zh: "测试不排队,而是并行扩容",
      ar: "الاختبار لا ينتظر في طابور — بل يتوسّع",
      fr: "Les tests ne font pas la queue — ils montent en parallèle",
      ru: "Тестирование не стоит в очереди — оно масштабируется",
      es: "Las pruebas no hacen cola — escalan en paralelo",
    },
    body: {
      en: "When batches pile up or a single one is too big for the day, the lead spins up temporary test helpers to run in parallel — named, scoped, and retired when the batch is done.",
      zh: "当批次堆积、或单个批次大到当天测不完,主管就临时拉起测试助手并行跑——按规则命名、限定权限,批次结束即回收。",
      ar: "عند تراكم الدفعات أو كِبَر دفعة واحدة على يوم واحد، يُنشئ المشرف مساعدي اختبار مؤقتين للعمل بالتوازي — بأسماء ونطاق محدّد، ويُسرَّحون عند انتهاء الدفعة.",
      fr: "Quand les lots s'accumulent ou qu'un seul est trop gros pour la journée, le superviseur lance des assistants de test temporaires en parallèle — nommés, cadrés, puis retirés une fois le lot fini.",
      ru: "Когда партии копятся или одна слишком велика на день, руководитель запускает временных тест-помощников параллельно — с именами, областью и роспуском по завершении.",
      es: "Cuando los lotes se acumulan o uno es demasiado grande para el día, el supervisor lanza asistentes de prueba temporales en paralelo — con nombre, alcance y retirada al terminar el lote.",
    },
  },
  {
    title: {
      en: "Testers make their own data",
      zh: "测试数据自己造",
      ar: "المختبِرون يصنعون بياناتهم",
      fr: "Les testeurs fabriquent leurs données",
      ru: "Тестировщики создают свои данные",
      es: "Los testers fabrican sus propios datos",
    },
    body: {
      en: "Data is generated by calling the designated data-factory project first — never by bothering devs. Any config touched for a test is noted and restored the moment the check is done.",
      zh: "造数优先调用指定的造数项目,而不是麻烦研发。为测试改动的任何配置都记下原值,验证一结束就立刻改回。",
      ar: "تُولَّد البيانات باستدعاء مشروع مصنع البيانات المخصّص أولاً — لا بإزعاج المطوّرين. وأي إعداد يُغيَّر للاختبار يُسجَّل ويُعاد فور انتهاء الفحص.",
      fr: "Les données sont générées en appelant d'abord le projet data-factory désigné — jamais en dérangeant les devs. Toute config modifiée pour un test est notée et restaurée dès la vérification faite.",
      ru: "Данные генерируются вызовом назначенного проекта-фабрики данных — а не беспокойством разработчиков. Любой изменённый для теста конфиг фиксируется и возвращается сразу после проверки.",
      es: "Los datos se generan llamando primero al proyecto data-factory designado — nunca molestando a desarrollo. Cualquier config tocada para una prueba se anota y se restaura en cuanto termina la verificación.",
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
  skills: {
    en: "The skill library: 23 skills, 9 groups",
    zh: "技能库:23 个技能,9 个分组",
    ar: "مكتبة المهارات: 23 مهارة، 9 مجموعات",
    fr: "La bibliothèque de compétences : 23 compétences, 9 groupes",
    ru: "Библиотека навыков: 23 навыка, 9 групп",
    es: "La biblioteca de habilidades: 23 habilidades, 9 grupos",
  },
  example: {
    en: "A requirement, end to end",
    zh: "一个需求,端到端走一遍",
    ar: "متطلب واحد، من البداية إلى النهاية",
    fr: "Une exigence, de bout en bout",
    ru: "Одно требование, от начала до конца",
    es: "Un requisito, de principio a fin",
  },
};

/* ---- Runtime compatibility: the skills are plain Markdown + conventions,
   so they run on any agent runtime that reads a skill/system prompt. ---- */
export const TOOLS_LABEL: Localized = {
  en: "Runs on any agent runtime",
  zh: "可在任意 AI 助手运行时上使用",
  ar: "يعمل على أي بيئة تشغيل للوكلاء",
  fr: "Fonctionne sur tout runtime d'agent",
  ru: "Работает на любой среде агентов",
  es: "Funciona en cualquier runtime de agente",
};

export const TOOLS_NOTE: Localized = {
  en: "The skills are plain Markdown — triggers, steps, decision rules, output templates. Load them into whichever assistant your team already uses.",
  zh: "技能都是纯 Markdown——触发条件、步骤、判定规则、产出模板。装进你团队已经在用的任意助手即可。",
  ar: "المهارات عبارة عن Markdown عادي — محفّزات وخطوات وقواعد حكم وقوالب مخرجات. حمّلها في أي مساعد يستخدمه فريقك أصلاً.",
  fr: "Les compétences sont du simple Markdown — déclencheurs, étapes, règles de décision, modèles de sortie. Chargez-les dans l'assistant que votre équipe utilise déjà.",
  ru: "Навыки — это обычный Markdown: триггеры, шаги, правила решений, шаблоны вывода. Загрузите их в того ассистента, которым команда уже пользуется.",
  es: "Las habilidades son Markdown plano — disparadores, pasos, reglas de decisión, plantillas de salida. Cárgalas en el asistente que tu equipo ya usa.",
};

export const TOOLS: { name: string; icon: IconName }[] = [
  { name: "OpenClaw", icon: "box" },
  { name: "Cursor", icon: "code" },
  { name: "ChatGPT", icon: "ai" },
  { name: "Claude", icon: "generate" },
  { name: "GrokBot", icon: "dispatch" },
];

/* ---- The 23-skill library, grouped. Names kept as short role labels; the
   one-liner captures what each skill actually enforces. ---- */
export const SKILL_GROUPS: {
  group: Localized;
  skills: { name: Localized; desc: Localized }[];
}[] = [
  {
    group: { en: "Collaboration", zh: "协作", ar: "التعاون", fr: "Collaboration", ru: "Совместная работа", es: "Colaboración" },
    skills: [
      {
        name: { en: "Supervisor", zh: "主管", ar: "المشرف", fr: "Superviseur", ru: "Руководитель", es: "Supervisor" },
        desc: {
          en: "Splits a request, dispatches with the user's exact words, judges what can run in parallel, and reports back.",
          zh: "拆分需求、转述用户原话派单、判断哪些可并行、汇总回报。",
          ar: "يقسّم الطلب، ويوزّع بكلمات المستخدم نفسها، ويقرّر ما يمكن تشغيله بالتوازي، ويرفع التقرير.",
          fr: "Découpe une demande, répartit avec les mots exacts de l'utilisateur, juge le parallélisable et rend compte.",
          ru: "Делит запрос, раздаёт задачи дословно словами пользователя, решает, что параллелить, и отчитывается.",
          es: "Divide la petición, reparte con las palabras exactas del usuario, juzga qué paralelizar e informa.",
        },
      },
      {
        name: { en: "Escalate to supervisor", zh: "上报主管", ar: "التصعيد للمشرف", fr: "Escalade au superviseur", ru: "Эскалация руководителю", es: "Escalar al supervisor" },
        desc: {
          en: "Every assistant's intake rule: do your own work, forward the clearly-owned, push cross-domain back to the lead.",
          zh: "每个助手的接单规则:本职就做,归属明确的转交,跨域推回主管。",
          ar: "قاعدة الاستلام لكل مساعد: نفّذ اختصاصك، ومرّر واضح الملكية، وأعِد المتعدّد المجالات إلى المشرف.",
          fr: "Règle d'admission de chaque assistant : fais ton travail, transmets ce qui a un propriétaire clair, renvoie le transverse au superviseur.",
          ru: "Правило приёмки для каждого: делай своё, передавай явно чужое, возвращай межзональное руководителю.",
          es: "Regla de admisión de cada asistente: haz lo tuyo, reenvía lo de dueño claro, devuelve lo transversal al supervisor.",
        },
      },
      {
        name: { en: "Parallel helper scale-out", zh: "并行助手扩容", ar: "توسيع المساعدين المتوازي", fr: "Montée en charge parallèle", ru: "Параллельное масштабирование", es: "Escalado de ayudantes paralelos" },
        desc: {
          en: "When and how to spin up temporary test helpers, how to name and scope them, and when to retire them.",
          zh: "何时、如何拉起临时测试助手,如何命名与限权,以及何时回收。",
          ar: "متى وكيف تُنشئ مساعدي اختبار مؤقتين، وكيف تسمّيهم وتحدّد نطاقهم، ومتى تُسرّحهم.",
          fr: "Quand et comment lancer des assistants de test temporaires, comment les nommer et les cadrer, et quand les retirer.",
          ru: "Когда и как поднимать временных тест-помощников, как их называть и ограничивать, когда распускать.",
          es: "Cuándo y cómo lanzar ayudantes de prueba temporales, cómo nombrarlos y acotarlos, y cuándo retirarlos.",
        },
      },
      {
        name: { en: "Self-improvement", zh: "自我进步", ar: "التحسين الذاتي", fr: "Auto-amélioration", ru: "Самосовершенствование", es: "Auto-mejora" },
        desc: {
          en: "Idle-time patrol for gaps between roles; turns every correction into a dated, durable rule.",
          zh: "闲时巡检分工缝隙,把每次纠正沉淀成带日期的长期规则。",
          ar: "دورية وقت الفراغ لسدّ الفجوات بين الأدوار؛ تحوّل كل تصحيح إلى قاعدة دائمة مؤرّخة.",
          fr: "Patrouille à vide des écarts entre rôles ; transforme chaque correction en règle datée et durable.",
          ru: "Патруль в простое по зазорам между ролями; превращает каждую правку в датированное устойчивое правило.",
          es: "Patrulla en inactividad de huecos entre roles; convierte cada corrección en una regla fechada y duradera.",
        },
      },
    ],
  },
  {
    group: { en: "Safety", zh: "安全", ar: "الأمان", fr: "Sécurité", ru: "Безопасность", es: "Seguridad" },
    skills: [
      {
        name: { en: "Security redlines", zh: "安全红线", ar: "خطوط الأمان الحمراء", fr: "Lignes rouges de sécurité", ru: "Красные линии безопасности", es: "Líneas rojas de seguridad" },
        desc: {
          en: "Credentials, commits and deploys, production access, browser sessions, redaction and anything outbound — the rules that override everything else.",
          zh: "凭证、提交与部署、生产访问、浏览器会话、脱敏与一切外发——优先级高于其他所有规则。",
          ar: "بيانات الاعتماد، الإيداع والنشر، الوصول للإنتاج، جلسات المتصفح، الإخفاء وأي إرسال خارجي — قواعد تتجاوز كل ما عداها.",
          fr: "Identifiants, commits et déploiements, accès production, sessions navigateur, masquage et tout envoi externe — les règles qui priment sur tout.",
          ru: "Учётные данные, коммиты и деплои, доступ к проду, сессии браузера, маскирование и всё исходящее — правила выше всех прочих.",
          es: "Credenciales, commits y despliegues, acceso a producción, sesiones de navegador, ocultación y todo lo saliente — las reglas que prevalecen sobre todo.",
        },
      },
    ],
  },
  {
    group: { en: "Test cases", zh: "用例", ar: "حالات الاختبار", fr: "Cas de test", ru: "Тест-кейсы", es: "Casos de prueba" },
    skills: [
      {
        name: { en: "Test-case design", zh: "用例设计", ar: "تصميم الحالات", fr: "Conception des cas", ru: "Проектирование кейсов", es: "Diseño de casos" },
        desc: {
          en: "A coverage matrix drives the cases; three artifacts (md + json + a visual draft) come from one source of truth.",
          zh: "用覆盖矩阵生成用例;md + json + 可视化稿三份产物同源。",
          ar: "مصفوفة تغطية تقود الحالات؛ ثلاثة مخرجات (md + json + مسودة مرئية) من مصدر واحد.",
          fr: "Une matrice de couverture pilote les cas ; trois artefacts (md + json + maquette) issus d'une source unique.",
          ru: "Матрица покрытия задаёт кейсы; три артефакта (md + json + визуальный черновик) из одного источника.",
          es: "Una matriz de cobertura guía los casos; tres artefactos (md + json + boceto) desde una sola fuente.",
        },
      },
      {
        name: { en: "Test-case review", zh: "用例评审", ar: "مراجعة الحالات", fr: "Revue des cas", ru: "Ревью кейсов", es: "Revisión de casos" },
        desc: {
          en: "A self-review checklist, then submit for review and resolve comments — cases load only once they clear the bar.",
          zh: "先走自评审清单,再送审、处理意见——通过后才落库。",
          ar: "قائمة مراجعة ذاتية، ثم الإرسال للمراجعة ومعالجة الملاحظات — لا تُحمَّل الحالات إلا بعد اجتياز الحدّ.",
          fr: "Une checklist d'auto-revue, puis soumission et traitement des commentaires — les cas ne sont chargés qu'une fois validés.",
          ru: "Чеклист самопроверки, затем отправка на ревью и отработка замечаний — кейсы грузятся только пройдя порог.",
          es: "Una checklist de auto-revisión, luego envío a revisión y resolución de comentarios — los casos se cargan solo tras superar el umbral.",
        },
      },
      {
        name: { en: "Test-case publish", zh: "用例落库", ar: "نشر الحالات", fr: "Publication des cas", ru: "Публикация кейсов", es: "Publicación de casos" },
        desc: {
          en: "Rich-text load into the case system — back up first, then read back to confirm every case matches.",
          zh: "富文本落库到用例系统——先备份,再回读核对每条用例一致。",
          ar: "تحميل نصّي غني إلى نظام الحالات — انسخ احتياطياً أولاً ثم اقرأ مجدداً للتأكد من تطابق كل حالة.",
          fr: "Chargement en texte riche dans le système de cas — sauvegarder d'abord, puis relire pour confirmer chaque cas.",
          ru: "Загрузка в систему кейсов в rich-text — сначала бэкап, затем перечитывание для сверки каждого кейса.",
          es: "Carga en texto enriquecido al sistema de casos — respaldar primero, luego releer para confirmar cada caso.",
        },
      },
    ],
  },
  {
    group: { en: "Execution", zh: "执行", ar: "التنفيذ", fr: "Exécution", ru: "Выполнение", es: "Ejecución" },
    skills: [
      {
        name: { en: "Test-data factory", zh: "造数工厂", ar: "مصنع بيانات الاختبار", fr: "Fabrique de données", ru: "Фабрика тест-данных", es: "Fábrica de datos" },
        desc: {
          en: "Data-generation priority, calling the designated factory, five callback shapes, and restoring every config that was touched.",
          zh: "造数优先级、调用指定造数项目、五种回调情况,以及把改过的配置全部改回。",
          ar: "أولوية توليد البيانات، واستدعاء المصنع المخصّص، وخمسة أشكال ردود، وإعادة كل إعداد مُسّ.",
          fr: "Priorité de génération, appel de la fabrique désignée, cinq formes de rappel, et restauration de toute config modifiée.",
          ru: "Приоритет генерации, вызов назначенной фабрики, пять форм колбэков и возврат каждого тронутого конфига.",
          es: "Prioridad de generación, llamada a la fábrica designada, cinco formas de callback y restaurar toda config tocada.",
        },
      },
      {
        name: { en: "Test execution", zh: "测试执行", ar: "تنفيذ الاختبار", fr: "Exécution des tests", ru: "Выполнение тестов", es: "Ejecución de pruebas" },
        desc: {
          en: "Headless first, evidence captured per case, a pass/fail/blocked verdict table — and finishing the batch fast.",
          zh: "无头优先、逐条留证据、通过/不通过/阻塞判定表——并尽快测完整批。",
          ar: "بلا واجهة أولاً، وأدلة لكل حالة، وجدول حكم نجاح/فشل/محجوب — وإنهاء الدفعة بسرعة.",
          fr: "Headless d'abord, preuve par cas, une table de verdict passe/échoue/bloqué — et finir le lot vite.",
          ru: "Сначала headless, доказательства по каждому кейсу, таблица вердиктов прошёл/нет/заблокирован — и быстрое завершение партии.",
          es: "Headless primero, evidencia por caso, una tabla de veredicto pasa/falla/bloqueado — y terminar el lote rápido.",
        },
      },
      {
        name: { en: "Permission testing", zh: "权限测试", ar: "اختبار الصلاحيات", fr: "Test des permissions", ru: "Тестирование прав", es: "Pruebas de permisos" },
        desc: {
          en: "Assign roles first, then work the matrix: horizontal and vertical escalation, and data-scope at the data layer.",
          zh: "先分配权限,再跑矩阵:横向与纵向越权,以及数据层的数据范围。",
          ar: "خصّص الأدوار أولاً، ثم اعمل على المصفوفة: تصعيد أفقي ورأسي، ونطاق البيانات في طبقة البيانات.",
          fr: "Assigner les rôles d'abord, puis travailler la matrice : escalade horizontale et verticale, et portée des données au niveau données.",
          ru: "Сначала назначить роли, потом матрица: горизонтальная и вертикальная эскалация и область данных на уровне данных.",
          es: "Asignar roles primero, luego la matriz: escalada horizontal y vertical, y alcance de datos en la capa de datos.",
        },
      },
      {
        name: { en: "App & device testing", zh: "应用与设备测试", ar: "اختبار التطبيق والأجهزة", fr: "Test app & appareils", ru: "Тестирование приложений и устройств", es: "Pruebas de app y dispositivos" },
        desc: {
          en: "Edge cases, compatibility and native capabilities; multi-device comparison; redacted log bundles.",
          zh: "异常场景、兼容性与原生能力;多机型对比;日志脱敏打包。",
          ar: "الحالات الحدّية والتوافق والقدرات الأصلية؛ مقارنة أجهزة متعددة؛ حزم سجلّات مُخفّاة.",
          fr: "Cas limites, compatibilité et capacités natives ; comparaison multi-appareils ; logs masqués en paquet.",
          ru: "Краевые случаи, совместимость и нативные возможности; сравнение устройств; пакеты логов с маскированием.",
          es: "Casos límite, compatibilidad y capacidades nativas; comparación multidispositivo; paquetes de logs ocultados.",
        },
      },
      {
        name: { en: "Performance testing", zh: "性能测试", ar: "اختبار الأداء", fr: "Test de performance", ru: "Тестирование производительности", es: "Pruebas de rendimiento" },
        desc: {
          en: "A stable environment as the baseline, quantifiable recommendations, and a capped report-retention rule.",
          zh: "以稳定环境为基准、给出可量化建议,并设报告保留上限。",
          ar: "بيئة مستقرة كأساس، وتوصيات قابلة للقياس، وقاعدة حدّ أقصى للاحتفاظ بالتقارير.",
          fr: "Un environnement stable comme référence, des recommandations quantifiables, et une règle de rétention plafonnée.",
          ru: "Стабильная среда как база, измеримые рекомендации и правило лимита хранения отчётов.",
          es: "Un entorno estable como base, recomendaciones cuantificables y un tope de retención de informes.",
        },
      },
    ],
  },
  {
    group: { en: "Reporting", zh: "报告", ar: "التقارير", fr: "Rapports", ru: "Отчётность", es: "Informes" },
    skills: [
      {
        name: { en: "Test report", zh: "测试报告", ar: "تقرير الاختبار", fr: "Rapport de test", ru: "Отчёт о тестировании", es: "Informe de prueba" },
        desc: {
          en: "Report structure, clickable evidence popups, numbers synced in three places, an index page, and archiving.",
          zh: "报告结构、可点证据弹窗、三处编号同步、汇总页与归档。",
          ar: "هيكل التقرير، نوافذ أدلة قابلة للنقر، أرقام متزامنة في ثلاثة مواضع، صفحة فهرس، وأرشفة.",
          fr: "Structure du rapport, popups de preuve cliquables, chiffres synchronisés en trois endroits, page d'index et archivage.",
          ru: "Структура отчёта, кликабельные попапы с доказательствами, номера в трёх местах, страница-индекс и архивация.",
          es: "Estructura del informe, popups de evidencia clicables, números sincronizados en tres lugares, página índice y archivado.",
        },
      },
    ],
  },
  {
    group: { en: "Defects", zh: "缺陷", ar: "العيوب", fr: "Défauts", ru: "Дефекты", es: "Defectos" },
    skills: [
      {
        name: { en: "Bug filing", zh: "缺陷提单", ar: "تسجيل العلل", fr: "Dépôt de bug", ru: "Заведение багов", es: "Registro de bugs" },
        desc: {
          en: "Four questions, a minimal format, inline screenshots, a severity map — and a notification the moment it's filed.",
          zh: "提单四问、极简格式、截图内嵌、严重程度映射——提完即通知。",
          ar: "أربعة أسئلة، صيغة مبسّطة، لقطات مضمّنة، خريطة خطورة — وإشعار فور التسجيل.",
          fr: "Quatre questions, un format minimal, captures en ligne, une carte de sévérité — et une notification dès le dépôt.",
          ru: "Четыре вопроса, минимальный формат, встроенные скриншоты, карта серьёзности — и уведомление сразу после заведения.",
          es: "Cuatro preguntas, un formato mínimo, capturas en línea, un mapa de severidad — y una notificación al registrarlo.",
        },
      },
      {
        name: { en: "Bug retest", zh: "缺陷复测", ar: "إعادة اختبار العلل", fr: "Retest de bug", ru: "Ретест багов", es: "Retest de bugs" },
        desc: {
          en: "Read the developer's fix note, confirm it's deployed, then close, reactivate with evidence, or hold if blocked.",
          zh: "先读研发修复说明、确认已部署,再关单、附证据重新激活,或阻塞则暂挂。",
          ar: "اقرأ ملاحظة إصلاح المطوّر، تأكّد من النشر، ثم أغلق، أو أعِد التفعيل بالأدلة، أو علّق إن كان محجوباً.",
          fr: "Lire la note de correctif du dev, confirmer le déploiement, puis clore, réactiver avec preuves, ou suspendre si bloqué.",
          ru: "Прочитать заметку об исправлении, подтвердить деплой, затем закрыть, реактивировать с доказательствами или отложить, если заблокировано.",
          es: "Leer la nota de arreglo del dev, confirmar el despliegue, luego cerrar, reactivar con evidencia o suspender si está bloqueado.",
        },
      },
      {
        name: { en: "Defect manager", zh: "缺陷管理", ar: "مدير العيوب", fr: "Gestionnaire de défauts", ru: "Менеджер дефектов", es: "Gestor de defectos" },
        desc: {
          en: "The single read/write outlet for the defect system — filing, closing, reassigning, exporting; it never decides what's a bug.",
          zh: "缺陷系统唯一读写出口——提单、关单、改派、导出;从不判定是不是 bug。",
          ar: "المنفذ الوحيد للقراءة/الكتابة في نظام العيوب — تسجيل وإغلاق وإعادة إسناد وتصدير؛ ولا يقرّر ما هو العيب.",
          fr: "La seule sortie lecture/écriture du système de défauts — dépôt, clôture, réassignation, export ; ne décide jamais ce qui est un bug.",
          ru: "Единственный канал чтения/записи системы дефектов — заведение, закрытие, переназначение, экспорт; не решает, что баг.",
          es: "La única salida de lectura/escritura del sistema de defectos — registrar, cerrar, reasignar, exportar; nunca decide qué es un bug.",
        },
      },
      {
        name: { en: "Weekly bug stats", zh: "周缺陷统计", ar: "إحصاءات العلل الأسبوعية", fr: "Stats bugs hebdo", ru: "Еженедельная статистика багов", es: "Estadísticas semanales de bugs" },
        desc: {
          en: "Weekly defect statistics computed on one consistent definition, so numbers compare week to week.",
          zh: "周缺陷统计用统一口径计算,保证逐周可比。",
          ar: "إحصاءات عيوب أسبوعية محسوبة بتعريف موحّد، فتصبح الأرقام قابلة للمقارنة أسبوعياً.",
          fr: "Statistiques hebdomadaires calculées sur une définition unique, pour comparer d'une semaine à l'autre.",
          ru: "Еженедельная статистика по единому определению, чтобы числа сравнивались неделя к неделе.",
          es: "Estadísticas semanales calculadas con una definición única, para comparar semana a semana.",
        },
      },
    ],
  },
  {
    group: { en: "Notifications", zh: "通知", ar: "الإشعارات", fr: "Notifications", ru: "Уведомления", es: "Notificaciones" },
    skills: [
      {
        name: { en: "Notifier", zh: "通知", ar: "المُشعِر", fr: "Notificateur", ru: "Уведомитель", es: "Notificador" },
        desc: {
          en: "The single messaging outlet: tone templates, one merged message per person, and a read-only contact list.",
          zh: "唯一消息出口:语气模板、按人合并成一条、只读联系人名单。",
          ar: "منفذ المراسلة الوحيد: قوالب نبرة، رسالة واحدة مدمجة لكل شخص، وقائمة اتصال للقراءة فقط.",
          fr: "La seule sortie de messagerie : modèles de ton, un message fusionné par personne, et une liste de contacts en lecture seule.",
          ru: "Единственный канал сообщений: шаблоны тона, одно объединённое сообщение на человека и список контактов только для чтения.",
          es: "La única salida de mensajería: plantillas de tono, un mensaje fusionado por persona y una lista de contactos de solo lectura.",
        },
      },
      {
        name: { en: "Requirement watch", zh: "需求巡检", ar: "مراقبة المتطلبات", fr: "Veille des exigences", ru: "Наблюдение за требованиями", es: "Vigilancia de requisitos" },
        desc: {
          en: "Read-only patrol of the requirements channel, output framed as “impact on testing” — no duplicate alerts, no noise.",
          zh: "需求群只读巡检,输出一律写成「对测试的影响」——不重复上轮,无更新不打扰。",
          ar: "دورية للقراءة فقط لقناة المتطلبات، والمخرجات بصيغة «الأثر على الاختبار» — بلا تنبيهات مكرّرة ولا ضجيج.",
          fr: "Patrouille en lecture seule du canal des exigences, sortie formulée comme « impact sur les tests » — sans alertes en double ni bruit.",
          ru: "Патруль канала требований только для чтения, вывод в форме «влияние на тестирование» — без дублей и шума.",
          es: "Patrulla de solo lectura del canal de requisitos, salida como «impacto en las pruebas» — sin alertas duplicadas ni ruido.",
        },
      },
    ],
  },
  {
    group: { en: "Docs", zh: "文档", ar: "التوثيق", fr: "Documentation", ru: "Документация", es: "Documentación" },
    skills: [
      {
        name: { en: "Docs", zh: "文档", ar: "التوثيق", fr: "Docs", ru: "Документы", es: "Docs" },
        desc: {
          en: "The single knowledge-base outlet: weekly plans, defect ledgers, the pending-requirement list — all matching existing page formats.",
          zh: "知识库唯一出口:周计划、缺陷台账、待测需求列表——格式都随以往页面。",
          ar: "المنفذ الوحيد لقاعدة المعرفة: خطط أسبوعية، سجلّات عيوب، قائمة المتطلبات المعلّقة — كلها بتنسيق الصفحات السابقة.",
          fr: "La seule sortie de la base de connaissances : plans hebdo, registres de défauts, liste des exigences en attente — au format des pages existantes.",
          ru: "Единственный канал базы знаний: недельные планы, реестры дефектов, список ожидающих требований — всё в формате прежних страниц.",
          es: "La única salida de la base de conocimiento: planes semanales, registros de defectos, lista de requisitos pendientes — todo con el formato de las páginas existentes.",
        },
      },
      {
        name: { en: "Release notes", zh: "发版小结", ar: "ملاحظات الإصدار", fr: "Notes de version", ru: "Заметки о релизе", es: "Notas de versión" },
        desc: {
          en: "Release summaries on a fixed format and a clear rule for what gets included.",
          zh: "发版小结固定格式,并明确收录口径。",
          ar: "ملخّصات إصدار بتنسيق ثابت وقاعدة واضحة لما يُدرَج.",
          fr: "Résumés de version au format fixe et une règle claire de ce qui est inclus.",
          ru: "Сводки релизов в фиксированном формате и чёткое правило, что включать.",
          es: "Resúmenes de versión con formato fijo y una regla clara de qué se incluye.",
        },
      },
    ],
  },
  {
    group: { en: "Code", zh: "编码", ar: "البرمجة", fr: "Code", ru: "Код", es: "Código" },
    skills: [
      {
        name: { en: "Coder", zh: "编码", ar: "المبرمج", fr: "Codeur", ru: "Кодер", es: "Programador" },
        desc: {
          en: "Script conventions, credentials never in code, and commits or deploys only inside the authorized scope.",
          zh: "脚本规范、凭证绝不进代码、只在授权范围内提交或部署。",
          ar: "اصطلاحات السكربت، لا بيانات اعتماد في الكود، والإيداع أو النشر فقط ضمن النطاق المفوَّض.",
          fr: "Conventions de script, jamais d'identifiants dans le code, et commits ou déploiements seulement dans le périmètre autorisé.",
          ru: "Соглашения по скриптам, никаких учёток в коде, коммиты и деплои только в рамках разрешённого.",
          es: "Convenciones de scripts, nunca credenciales en el código, y commits o despliegues solo dentro del alcance autorizado.",
        },
      },
    ],
  },
];

/* ---- Worked example: a fictional requirement run end to end. ---- */
export const EXAMPLE_INTRO: Localized = {
  en: "A fictional requirement — “reserve a library book, auto-release after 48h, with cross-branch permissions and an external inter-library callback” — run through the whole roster to show the skills chained together.",
  zh: "一个虚构需求——「预约图书、48 小时未取自动释放,含跨分馆权限与外部馆际互借回调」——完整走一遍整个名册,演示技能如何串起来。",
  ar: "متطلب افتراضي — «حجز كتاب في المكتبة، وإطلاق تلقائي بعد 48 ساعة، مع صلاحيات بين الفروع ونداء خارجي للإعارة بين المكتبات» — يُنفَّذ عبر كامل الفريق لإظهار تسلسل المهارات.",
  fr: "Une exigence fictive — « réserver un livre, libération auto après 48 h, avec permissions inter-sites et un rappel de prêt entre bibliothèques » — déroulée sur tout l'effectif pour montrer l'enchaînement des compétences.",
  ru: "Вымышленное требование — «бронь книги, авторелиз через 48 ч, права между филиалами и внешний колбэк межбиблиотечного обмена» — проводится через весь состав, чтобы показать сцепку навыков.",
  es: "Un requisito ficticio — «reservar un libro, liberación automática tras 48 h, con permisos entre sedes y un callback externo de préstamo interbibliotecario» — recorrido por toda la plantilla para mostrar las habilidades encadenadas.",
};

export const EXAMPLE_STEPS: { n: string; title: Localized; body: Localized }[] = [
  {
    n: "01",
    title: {
      en: "Patrol flags an undecided change",
      zh: "巡检发现未定变更",
      ar: "الدورية ترصد تغييراً غير محسوم",
      fr: "La veille signale un changement non tranché",
      ru: "Патруль отмечает нерешённое изменение",
      es: "La patrulla marca un cambio sin decidir",
    },
    body: {
      en: "Requirement-watch sees product mulling 48h → 72h. It's noted as “impact on testing,” not actioned — discussion-stage changes never rewrite cases.",
      zh: "需求巡检看到产品在讨论 48 小时改 72 小时。只记为「对测试的影响」,不动用例——讨论中的变更绝不改用例。",
      ar: "ترصد مراقبة المتطلبات مناقشة المنتج تغيير 48 إلى 72 ساعة. يُسجَّل كـ«أثر على الاختبار» دون تنفيذ — تغييرات مرحلة النقاش لا تعيد كتابة الحالات.",
      fr: "La veille voit le produit hésiter 48 h → 72 h. C'est noté « impact sur les tests », non actionné — les changements en discussion ne réécrivent jamais les cas.",
      ru: "Наблюдение видит, что продукт обдумывает 48ч → 72ч. Это фиксируется как «влияние на тестирование», без действий — изменения на стадии обсуждения не переписывают кейсы.",
      es: "La vigilancia ve al producto sopesando 48 h → 72 h. Se anota como «impacto en pruebas», sin actuar — los cambios en discusión nunca reescriben casos.",
    },
  },
  {
    n: "02",
    title: {
      en: "Lead splits, then cases are designed",
      zh: "主管拆分,随后设计用例",
      ar: "المشرف يقسّم ثم تُصمَّم الحالات",
      fr: "Le superviseur découpe, puis les cas sont conçus",
      ru: "Руководитель делит, затем проектируются кейсы",
      es: "El supervisor divide, luego se diseñan los casos",
    },
    body: {
      en: "The lead turns one request into numbered subtasks. The coverage matrix yields 146 cases (P0 38 / P1 71 / P2 37); two gaps between spec and prototype are flagged as open questions.",
      zh: "主管把一句需求拆成编号子任务。覆盖矩阵产出 146 条用例(P0 38 / P1 71 / P2 37);需求与原型的 2 处差异标为待确认。",
      ar: "يحوّل المشرف الطلب إلى مهام مرقّمة. تنتج مصفوفة التغطية 146 حالة (P0 38 / P1 71 / P2 37)؛ وتُعلَّم فجوتان بين المواصفة والنموذج كأسئلة مفتوحة.",
      fr: "Le superviseur transforme la demande en sous-tâches numérotées. La matrice donne 146 cas (P0 38 / P1 71 / P2 37) ; deux écarts spec/maquette sont marqués comme questions ouvertes.",
      ru: "Руководитель превращает запрос в пронумерованные подзадачи. Матрица даёт 146 кейсов (P0 38 / P1 71 / P2 37); два расхождения спеки и прототипа помечены как открытые вопросы.",
      es: "El supervisor convierte la petición en subtareas numeradas. La matriz da 146 casos (P0 38 / P1 71 / P2 37); dos brechas entre spec y prototipo se marcan como preguntas abiertas.",
    },
  },
  {
    n: "03",
    title: {
      en: "Data is fabricated at the boundary",
      zh: "在边界上造数",
      ar: "تُصنَع البيانات عند الحدود",
      fr: "Les données sont fabriquées à la frontière",
      ru: "Данные создаются на границе",
      es: "Los datos se fabrican en el límite",
    },
    body: {
      en: "50 holds with creation times straddling −47:59:59 … −48:00:01, a multi-IP race for the last copy, and five callback shapes. The global “max holds” config is set to 1, verified, and restored to 3.",
      zh: "造 50 张取书单,创建时间卡在 −47:59:59 … −48:00:01;多 IP 抢最后一本;五种回调。全局「最大预约数」改成 1 验证后,立即改回 3。",
      ar: "50 حجزاً بأوقات إنشاء تحيط بـ −47:59:59 … −48:00:01، وسباق متعدّد العناوين على آخر نسخة، وخمسة أشكال نداء. يُضبط إعداد «أقصى حجوزات» إلى 1 ويُتحقَّق ثم يُعاد إلى 3.",
      fr: "50 réservations aux heures de création autour de −47:59:59 … −48:00:01, une course multi-IP pour le dernier exemplaire, et cinq formes de rappel. La config « max réservations » est mise à 1, vérifiée, puis remise à 3.",
      ru: "50 броней со временем создания вокруг −47:59:59 … −48:00:01, гонка нескольких IP за последний экземпляр и пять форм колбэков. Глобальный конфиг «макс. броней» ставится в 1, проверяется и возвращается в 3.",
      es: "50 reservas con horas de creación en torno a −47:59:59 … −48:00:01, una carrera multi-IP por el último ejemplar y cinco formas de callback. La config global «máx. reservas» se pone en 1, se verifica y se restaura a 3.",
    },
  },
  {
    n: "04",
    title: {
      en: "Parallel execution, then verdicts",
      zh: "并行执行,得出判定",
      ar: "تنفيذ متوازٍ ثم أحكام",
      fr: "Exécution parallèle, puis verdicts",
      ru: "Параллельное выполнение, затем вердикты",
      es: "Ejecución paralela, luego veredictos",
    },
    body: {
      en: "Three streams run at once: web + backend, two real devices, and the permission matrix. Result: 131 pass / 4 fail / 2 blocked / 9 skipped. A duplicate-callback double-charge is a clear miss → filed; a copy-text question the spec didn't cover → to me.",
      zh: "三路并行:移动网页+后台、两台真机、权限矩阵。结果:通过 131 / 不通过 4 / 阻塞 2 / 未执行 9。重复回调导致扣两次额度,口径明确 → 直接提单;需求没写的文案问题 → 交我。",
      ar: "ثلاثة مسارات معاً: الويب + الخلفية، وجهازان حقيقيان، ومصفوفة الصلاحيات. النتيجة: 131 ناجح / 4 فاشل / 2 محجوب / 9 غير منفَّذ. خصم مزدوج بسبب نداء مكرّر خطأ واضح ← سُجِّل؛ وسؤال نصّي لم تغطّه المواصفة ← إليّ.",
      fr: "Trois flux en même temps : web + backend, deux appareils réels, et la matrice de permissions. Résultat : 131 passent / 4 échouent / 2 bloqués / 9 non exécutés. Un double débit par rappel dupliqué est un manquement net → consigné ; une question de libellé non couverte → à moi.",
      ru: "Три потока одновременно: веб + бэкенд, два реальных устройства и матрица прав. Итог: 131 прошёл / 4 нет / 2 заблокировано / 9 пропущено. Двойное списание из-за дубля колбэка — явный промах → заведено; вопрос по тексту, не покрытый спекой → мне.",
      es: "Tres flujos a la vez: web + backend, dos dispositivos reales y la matriz de permisos. Resultado: 131 pasan / 4 fallan / 2 bloqueados / 9 omitidos. Un doble cargo por callback duplicado es un fallo claro → registrado; una duda de texto no cubierta → a mí.",
    },
  },
  {
    n: "05",
    title: {
      en: "File, notify, report — numbers in sync",
      zh: "提单、通知、报告——编号同步",
      ar: "تسجيل وإشعار وتقرير — أرقام متزامنة",
      fr: "Dépôt, notification, rapport — chiffres synchronisés",
      ru: "Завести, уведомить, отчитаться — номера синхронны",
      es: "Registrar, notificar, informar — números sincronizados",
    },
    body: {
      en: "The defect assistant files with inline shots; notify sends one merged DM per engineer. Issue numbers match across chat, report, and the defect system; the report opens with the numbered suspected-issue list.",
      zh: "缺陷助手内嵌截图提单;通知助手按人合并成一条私信。单号在聊天、报告、缺陷系统三处一致;报告开头是编号的疑似问题清单。",
      ar: "يسجّل مساعد العيوب بلقطات مضمّنة؛ ويرسل المُشعِر رسالة مدمجة لكل مهندس. تتطابق الأرقام عبر المحادثة والتقرير ونظام العيوب؛ ويبدأ التقرير بقائمة المشكلات المشتبهة المرقّمة.",
      fr: "L'assistant défauts dépose avec captures en ligne ; notify envoie un DM fusionné par ingénieur. Les numéros concordent entre chat, rapport et système de défauts ; le rapport s'ouvre sur la liste numérotée des problèmes suspectés.",
      ru: "Ассистент дефектов заводит со встроенными скриншотами; уведомитель шлёт по одному объединённому ЛС на инженера. Номера совпадают в чате, отчёте и системе дефектов; отчёт открывается нумерованным списком предполагаемых проблем.",
      es: "El asistente de defectos registra con capturas en línea; notify envía un DM fusionado por ingeniero. Los números coinciden en chat, informe y sistema de defectos; el informe abre con la lista numerada de problemas sospechosos.",
    },
  },
  {
    n: "06",
    title: {
      en: "Retest reads the fix note",
      zh: "复测先读修复说明",
      ar: "إعادة الاختبار تقرأ ملاحظة الإصلاح",
      fr: "Le retest lit la note de correctif",
      ru: "Ретест читает заметку об исправлении",
      es: "El retest lee la nota de arreglo",
    },
    body: {
      en: "Two days later: read the developer's note, confirm deploy. One defect closes; one shows a stale front-end bundle (Last-Modified unchanged) → recorded “not deployed, pending,” not failed. The original report is updated in place.",
      zh: "两天后:读研发说明、确认部署。一张关闭;一张前端包未更新(Last-Modified 没变)→ 记「未部署,待复测」,不判不通过。原报告就地更新。",
      ar: "بعد يومين: اقرأ ملاحظة المطوّر وأكّد النشر. يُغلق عيب؛ ويُظهر آخر حزمة واجهة قديمة (Last-Modified لم يتغيّر) ← يُسجَّل «لم يُنشر، معلّق» لا فاشلاً. ويُحدَّث التقرير الأصلي في مكانه.",
      fr: "Deux jours plus tard : lire la note du dev, confirmer le déploiement. Un défaut se clôt ; un autre montre un bundle front obsolète (Last-Modified inchangé) → noté « non déployé, en attente », non échoué. Le rapport d'origine est mis à jour sur place.",
      ru: "Через два дня: прочитать заметку разработчика, подтвердить деплой. Один дефект закрывается; другой показывает устаревший фронт-бандл (Last-Modified не изменился) → записано «не задеплоено, ожидает», не провал. Исходный отчёт обновляется на месте.",
      es: "Dos días después: leer la nota del dev, confirmar el despliegue. Un defecto se cierra; otro muestra un bundle de front obsoleto (Last-Modified sin cambiar) → anotado «no desplegado, pendiente», no fallido. El informe original se actualiza in situ.",
    },
  },
];

export const WF_META: { icon: IconName } = { icon: "dispatch" };
