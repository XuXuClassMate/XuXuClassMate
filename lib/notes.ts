import type { Localized } from "@/components/i18n";

export type Note = {
  slug: string;
  title: Localized;
  date: string; // ISO
  readingTime: Localized;
  category: Localized;
  excerpt: Localized;
  body: { heading: Localized; paragraphs: Localized[] }[];
};

const MIN = (n: number): Localized => ({
  en: `${n} min`,
  zh: `${n} 分钟`,
  ar: `${n} دقائق`,
  fr: `${n} min`,
  ru: `${n} мин`,
  es: `${n} min`,
});

const CAT = {
  automation: {
    en: "Automation",
    zh: "自动化",
    ar: "الأتمتة",
    fr: "Automatisation",
    ru: "Автоматизация",
    es: "Automatización",
  },
  infra: {
    en: "Infrastructure",
    zh: "基础设施",
    ar: "البنية التحتية",
    fr: "Infrastructure",
    ru: "Инфраструктура",
    es: "Infraestructura",
  },
  ai: {
    en: "AI testing",
    zh: "AI 测试",
    ar: "اختبار الذكاء الاصطناعي",
    fr: "Test IA",
    ru: "AI-тестирование",
    es: "Pruebas con IA",
  },
  performance: {
    en: "Performance",
    zh: "性能",
    ar: "الأداء",
    fr: "Performance",
    ru: "Производительность",
    es: "Rendimiento",
  },
  security: {
    en: "Quality",
    zh: "质量",
    ar: "الجودة",
    fr: "Qualité",
    ru: "Качество",
    es: "Calidad",
  },
} satisfies Record<string, Localized>;

export const NOTES: Note[] = [
  {
    slug: "front-end-performance",
    title: {
      en: "Front-end performance you can defend",
      zh: "站得住脚的前端性能",
      ar: "أداء واجهة أمامية يمكنك الدفاع عنه",
      fr: "Des performances front-end défendables",
      ru: "Производительность фронтенда, которую можно отстоять",
      es: "Rendimiento front-end que puedes defender",
    },
    date: "2026-10-12",
    readingTime: MIN(5),
    category: CAT.performance,
    excerpt: {
      en: "First paint and time-to-interactive aren't a vibe — they're numbers you baseline, track, and can explain to developers.",
      zh: "首屏与可交互时间不是感觉,而是能定基准、可跟踪、也能对研发讲清楚的数字。",
      ar: "أول رسم وزمن التفاعل ليسا إحساساً — بل أرقام تضع لها أساساً وتتابعها وتشرحها للمطورين.",
      fr: "Le premier rendu et le time-to-interactive ne sont pas une impression — ce sont des chiffres qu'on étalonne, suit et explique aux devs.",
      ru: "Первая отрисовка и время до интерактивности — это не ощущение, а цифры, которые задаёшь как базу, отслеживаешь и объясняешь разработчикам.",
      es: "El primer render y el time-to-interactive no son una sensación — son números que fijas como base, sigues y explicas a desarrollo.",
    },
    body: [
      {
        heading: {
          en: "Measure on a stable baseline",
          zh: "在稳定基准上测量",
          ar: "قِس على أساس مستقر",
          fr: "Mesurer sur une base stable",
          ru: "Измеряй на стабильной базе",
          es: "Mide sobre una base estable",
        },
        paragraphs: [
          {
            en: "Performance conclusions only hold when the environment is stable. I baseline on a fixed test environment — not a dev box whose numbers drift — and report first paint, time-to-interactive, main-bundle size, and render-blocking resources.",
            zh: "性能结论只有在环境稳定时才成立。我以固定的测试环境作基准(而不是数字飘忽的开发机),报告首屏、可交互时间、主包体积与阻塞渲染的资源。",
            ar: "لا تصمد خلاصات الأداء إلا حين تكون البيئة مستقرة. أضع الأساس على بيئة اختبار ثابتة — لا على جهاز تطوير تتذبذب أرقامه — وأبلّغ عن أول رسم وزمن التفاعل وحجم الحزمة الرئيسية والموارد المعيقة للعرض.",
            fr: "Les conclusions de performance ne tiennent que si l'environnement est stable. J'étalonne sur un environnement de test fixe — pas une machine de dev aux chiffres mouvants — et je rapporte premier rendu, time-to-interactive, taille du bundle principal et ressources bloquant le rendu.",
            ru: "Выводы о производительности верны лишь при стабильной среде. Я задаю базу на фиксированной тестовой среде — не на dev-машине с плавающими числами — и отчитываюсь о первой отрисовке, времени до интерактивности, размере основного бандла и блокирующих ресурсах.",
            es: "Las conclusiones de rendimiento solo se sostienen con un entorno estable. Fijo la base en un entorno de prueba fijo — no en una máquina de dev con números cambiantes — e informo primer render, time-to-interactive, tamaño del bundle principal y recursos que bloquean el render.",
          },
        ],
      },
      {
        heading: {
          en: "Weak network is the real test",
          zh: "弱网才是真正的考验",
          ar: "الشبكة الضعيفة هي الاختبار الحقيقي",
          fr: "Le réseau faible est le vrai test",
          ru: "Слабая сеть — настоящий тест",
          es: "La red débil es la prueba real",
        },
        paragraphs: [
          {
            en: "Most users aren't on fibre. Throttling to a weak network surfaces the blocking resources and layout shifts a fast connection hides, and turns “it feels slow” into a tracked before/after delta.",
            zh: "大多数用户并不在光纤上。把网络限速到弱网,会暴露快连接下看不到的阻塞资源与布局抖动,也把“感觉有点慢”变成可跟踪的前后对比。",
            ar: "معظم المستخدمين ليسوا على الألياف. يكشف خفض السرعة إلى شبكة ضعيفة الموارد المعيقة وتزحزح التخطيط التي يخفيها الاتصال السريع، ويحوّل “يبدو بطيئاً” إلى فرق مُتابَع قبل/بعد.",
            fr: "La plupart des utilisateurs ne sont pas en fibre. Brider en réseau faible révèle les ressources bloquantes et les décalages de mise en page qu'une connexion rapide masque, et transforme « ça semble lent » en un écart avant/après suivi.",
            ru: "Большинство пользователей не на оптоволокне. Троттлинг до слабой сети вскрывает блокирующие ресурсы и сдвиги вёрстки, скрытые быстрым соединением, и превращает «кажется медленно» в отслеживаемую разницу до/после.",
            es: "La mayoría no está en fibra. Limitar a red débil revela los recursos bloqueantes y los saltos de layout que una conexión rápida oculta, y convierte “se siente lento” en una diferencia antes/después medible.",
          },
        ],
      },
    ],
  },
  {
    slug: "playwright-at-scale",
    title: {
      en: "Keeping Playwright fast when the suite grows",
      zh: "用例集变大时,如何让 Playwright 保持快速",
      ar: "الحفاظ على سرعة Playwright مع نمو مجموعة الاختبارات",
      fr: "Garder Playwright rapide quand la suite grossit",
      ru: "Как сохранить скорость Playwright, когда набор растёт",
      es: "Mantener Playwright rápido cuando la suite crece",
    },
    date: "2026-09-18",
    readingTime: MIN(6),
    category: CAT.automation,
    excerpt: {
      en: "A large end-to-end suite stays useful only if it stays fast and honest. Here is how I keep Playwright from becoming the thing teams skip.",
      zh: "一套大型端到端测试,只有保持快速且可信才有用。下面是我如何不让 Playwright 变成团队想跳过的东西。",
      ar: "مجموعة اختبارات شاملة كبيرة تبقى مفيدة فقط إذا ظلّت سريعة وصادقة. وإليك كيف أمنع Playwright من أن يصبح ما تتخطّاه الفرق.",
      fr: "Une grande suite end-to-end ne reste utile que si elle reste rapide et honnête. Voici comment j'évite que Playwright devienne ce que les équipes sautent.",
      ru: "Большой end-to-end набор полезен, только пока он быстрый и честный. Вот как я не даю Playwright стать тем, что команды пропускают.",
      es: "Una suite end-to-end grande solo sigue siendo útil si se mantiene rápida y honesta. Así evito que Playwright se convierta en lo que los equipos se saltan.",
    },
    body: [
      {
        heading: {
          en: "Flake is a design problem",
          zh: "不稳定是设计问题",
          ar: "التذبذب مشكلة تصميم",
          fr: "L'instabilité est un problème de conception",
          ru: "Нестабильность — это проблема дизайна",
          es: "La inestabilidad es un problema de diseño",
        },
        paragraphs: [
          {
            en: "Most flake is not random. It is a race the test did not wait for, or state left behind by the run before it. Fixing flake starts with making every test set up and tear down its own data, so order never matters.",
            zh: "大多数不稳定并非随机,而是测试没有等待的竞态,或上一次运行遗留的状态。修复不稳定,先让每个测试自行准备和清理数据,让执行顺序永远无关紧要。",
            ar: "معظم التذبذب ليس عشوائياً. إنه سباق لم ينتظره الاختبار، أو حالة خلّفها التشغيل السابق. يبدأ إصلاح التذبذب بجعل كل اختبار يهيّئ بياناته ويزيلها بنفسه، حتى لا يهمّ الترتيب أبداً.",
            fr: "La plupart des instabilités ne sont pas aléatoires. C'est une course que le test n'a pas attendue, ou un état laissé par l'exécution précédente. Corriger l'instabilité commence par faire que chaque test prépare et nettoie ses propres données, pour que l'ordre n'ait jamais d'importance.",
            ru: "Большинство нестабильностей не случайны. Это гонка, которую тест не дождался, или состояние от предыдущего запуска. Исправление начинается с того, чтобы каждый тест сам готовил и убирал свои данные, тогда порядок никогда не важен.",
            es: "La mayoría de la inestabilidad no es aleatoria. Es una carrera que el test no esperó, o estado que dejó la ejecución anterior. Arreglarla empieza por hacer que cada test prepare y limpie sus propios datos, para que el orden nunca importe.",
          },
          {
            en: "Web-first assertions and explicit waits on state — not timeouts — remove the second class of flake. A test should wait for the thing it cares about, and nothing else.",
            zh: "以 Web 为先的断言、以及针对状态(而非超时)的显式等待,能消除第二类不稳定。测试只应等待它真正关心的东西,别无其他。",
            ar: "التأكيدات التي تراعي الويب والانتظار الصريح للحالة — لا المهلات — تزيل النوع الثاني من التذبذب. على الاختبار أن ينتظر ما يهمّه فقط، لا شيء آخر.",
            fr: "Les assertions « web-first » et les attentes explicites sur l'état — pas des délais — éliminent la deuxième catégorie d'instabilité. Un test doit attendre ce qui l'intéresse, et rien d'autre.",
            ru: "«Web-first» проверки и явные ожидания состояния — а не таймауты — убирают второй класс нестабильности. Тест должен ждать именно то, что ему важно, и ничего больше.",
            es: "Las aserciones «web-first» y las esperas explícitas sobre el estado — no los timeouts — eliminan la segunda clase de inestabilidad. Un test debe esperar lo que le importa, y nada más.",
          },
        ],
      },
      {
        heading: {
          en: "Shard, don't trim",
          zh: "分片,而不是删减",
          ar: "جزّئ ولا تقتطع",
          fr: "Répartir, pas rogner",
          ru: "Шардируй, а не урезай",
          es: "Fragmenta, no recortes",
        },
        paragraphs: [
          {
            en: "When a suite gets slow the temptation is to delete coverage. Shard across workers and machines first; you keep the coverage and get the speed back.",
            zh: "当测试变慢时,人们总想删掉一些覆盖。先把测试分片到多个 worker 和机器上——既保住覆盖,又把速度拿回来。",
            ar: "حين تبطؤ المجموعة يغري حذف التغطية. جزّئ أولاً عبر العمّال والأجهزة؛ فتحتفظ بالتغطية وتستعيد السرعة.",
            fr: "Quand une suite ralentit, la tentation est de supprimer de la couverture. Répartissez d'abord sur les workers et les machines ; vous gardez la couverture et retrouvez la vitesse.",
            ru: "Когда набор замедляется, хочется удалить покрытие. Сначала шардируйте по воркерам и машинам — вы сохраните покрытие и вернёте скорость.",
            es: "Cuando una suite se vuelve lenta, la tentación es borrar cobertura. Fragmenta primero entre workers y máquinas; conservas la cobertura y recuperas la velocidad.",
          },
        ],
      },
    ],
  },
  {
    slug: "disposable-test-databases",
    title: {
      en: "Disposable test databases with Docker",
      zh: "用 Docker 打造用完即弃的测试数据库",
      ar: "قواعد بيانات اختبار قابلة للتخلّص مع Docker",
      fr: "Des bases de test jetables avec Docker",
      ru: "Одноразовые тестовые базы данных с Docker",
      es: "Bases de datos de prueba desechables con Docker",
    },
    date: "2026-08-02",
    readingTime: MIN(5),
    category: CAT.infra,
    excerpt: {
      en: "The fastest way to kill a test environment is a shared database. Pullable, seeded, disposable images fix it.",
      zh: "毁掉一个测试环境最快的方式,就是共享一个数据库。可拉取、带种子数据、用完即弃的镜像能解决它。",
      ar: "أسرع طريقة لقتل بيئة اختبار هي قاعدة بيانات مشتركة. الصور القابلة للسحب والمزوّدة ببيانات والقابلة للتخلّص تحلّ ذلك.",
      fr: "Le moyen le plus rapide de tuer un environnement de test, c'est une base partagée. Des images récupérables, initialisées et jetables règlent le problème.",
      ru: "Самый быстрый способ убить тестовую среду — общая база данных. Загружаемые, с данными, одноразовые образы это решают.",
      es: "La forma más rápida de matar un entorno de prueba es una base compartida. Las imágenes descargables, con datos y desechables lo arreglan.",
    },
    body: [
      {
        heading: {
          en: "One pull, one clean state",
          zh: "一次拉取,一个干净状态",
          ar: "سحبة واحدة، حالة نظيفة واحدة",
          fr: "Un pull, un état propre",
          ru: "Один pull — одно чистое состояние",
          es: "Un pull, un estado limpio",
        },
        paragraphs: [
          {
            en: "A test database that is seeded on start and wiped on stop removes a whole category of cross-test contamination. Each run starts from the same known state.",
            zh: "启动时注入种子数据、停止时清空的测试数据库,能消除一整类跨测试污染。每次运行都从同一个已知状态开始。",
            ar: "قاعدة بيانات اختبار تُزوَّد بالبيانات عند البدء وتُمحى عند التوقف تزيل فئة كاملة من التلوّث بين الاختبارات. كل تشغيل يبدأ من الحالة المعروفة نفسها.",
            fr: "Une base de test initialisée au démarrage et effacée à l'arrêt élimine toute une catégorie de contamination entre tests. Chaque exécution part du même état connu.",
            ru: "Тестовая база, которая наполняется при старте и очищается при остановке, устраняет целый класс перекрёстного загрязнения тестов. Каждый запуск стартует с одного известного состояния.",
            es: "Una base de prueba que se inicializa al arrancar y se borra al parar elimina toda una categoría de contaminación entre tests. Cada ejecución parte del mismo estado conocido.",
          },
          {
            en: "Packaging the harder databases — Dameng, Highgo, Kingbase, TiDB — as ready images means a new contributor runs the suite in minutes, not a day.",
            zh: "把那些更难搞的数据库——达梦、Highgo、人大金仓、TiDB——打包成现成镜像,意味着新贡献者几分钟就能跑起测试,而不是一天。",
            ar: "تغليف قواعد البيانات الأصعب — Dameng وHighgo وKingbase وTiDB — كصور جاهزة يعني أن مساهماً جديداً يشغّل المجموعة في دقائق لا في يوم.",
            fr: "Empaqueter les bases les plus difficiles — Dameng, Highgo, Kingbase, TiDB — en images prêtes signifie qu'un nouveau contributeur lance la suite en minutes, pas en une journée.",
            ru: "Упаковка более сложных баз — Dameng, Highgo, Kingbase, TiDB — в готовые образы означает, что новый участник запускает набор за минуты, а не за день.",
            es: "Empaquetar las bases más difíciles — Dameng, Highgo, Kingbase, TiDB — como imágenes listas hace que un nuevo colaborador ejecute la suite en minutos, no en un día.",
          },
        ],
      },
      {
        heading: {
          en: "Deterministic for CI",
          zh: "对 CI 确定可控",
          ar: "حتميّة من أجل CI",
          fr: "Déterministe pour la CI",
          ru: "Детерминированность для CI",
          es: "Determinista para CI",
        },
        paragraphs: [
          {
            en: "Fixed ports and a known startup time make the images drop-in for pipelines. The test environment stops being the reason a build is red.",
            zh: "固定端口与已知的启动时间,让镜像能即插即用地进入流水线。测试环境不再是构建变红的原因。",
            ar: "المنافذ الثابتة وزمن البدء المعروف يجعلان الصور صالحة للإدراج في خطوط الأنابيب. وتتوقّف بيئة الاختبار عن كونها سبب فشل البناء.",
            fr: "Des ports fixes et un temps de démarrage connu rendent les images directement intégrables aux pipelines. L'environnement de test cesse d'être la raison d'un build rouge.",
            ru: "Фиксированные порты и известное время старта делают образы готовыми для пайплайнов. Тестовая среда перестаёт быть причиной красной сборки.",
            es: "Puertos fijos y un tiempo de arranque conocido hacen que las imágenes encajen en los pipelines. El entorno de prueba deja de ser el motivo de un build en rojo.",
          },
        ],
      },
    ],
  },
  {
    slug: "permissions-multi-tenant",
    title: {
      en: "Where bugs hide: permissions and multi-tenant",
      zh: "缺陷藏身之处:权限与多租户",
      ar: "حيث تختبئ العلل: الصلاحيات وتعدّد المستأجرين",
      fr: "Où se cachent les bugs : permissions et multi-tenant",
      ru: "Где прячутся баги: права доступа и мультитенантность",
      es: "Dónde se esconden los bugs: permisos y multi-tenant",
    },
    date: "2026-07-15",
    readingTime: MIN(6),
    category: CAT.security,
    excerpt: {
      en: "The hardest defects aren't crashes — they're a user quietly seeing data that belongs to someone else. You find them by testing data scope, not menus.",
      zh: "最难的缺陷不是崩溃,而是一个用户悄悄看到了本属于别人的数据。要靠测试数据范围发现它们,而不是看菜单。",
      ar: "أصعب العلل ليست الأعطال — بل أن يرى مستخدم بهدوء بيانات تخص غيره. تكتشفها باختبار نطاق البيانات لا القوائم.",
      fr: "Les pires défauts ne sont pas des plantages — c'est un utilisateur qui voit discrètement les données d'un autre. On les trouve en testant la portée des données, pas les menus.",
      ru: "Самые тяжёлые дефекты — не падения, а когда пользователь тихо видит чужие данные. Их находят, проверяя область видимости данных, а не меню.",
      es: "Los peores defectos no son caídas — es un usuario viendo en silencio datos de otro. Se encuentran probando el alcance de los datos, no los menús.",
    },
    body: [
      {
        heading: {
          en: "Menus lie; data scope tells the truth",
          zh: "菜单会骗人,数据范围才是实情",
          ar: "القوائم تكذب؛ نطاق البيانات يقول الحقيقة",
          fr: "Les menus mentent ; la portée des données dit vrai",
          ru: "Меню лгут; правду говорит область данных",
          es: "Los menús mienten; el alcance de los datos dice la verdad",
        },
        paragraphs: [
          {
            en: "Hiding a button is not access control. I test permissions at the data layer: log in as a low-privilege user, then call the same endpoints and pass the same record IDs a privileged user would. If the server returns the row, the hidden menu was theatre.",
            zh: "隐藏按钮不是访问控制。我在数据层测试权限:以低权限用户登录,再调用高权限用户会用的同一批接口、传入同样的记录 ID。如果服务端把那条数据返回了,那个藏起来的菜单只是做做样子。",
            ar: "إخفاء زر ليس تحكماً في الوصول. أختبر الصلاحيات في طبقة البيانات: أسجّل الدخول كمستخدم منخفض الصلاحية، ثم أستدعي نفس المسارات وأمرّر نفس معرّفات السجلات التي يستخدمها مستخدم ذو صلاحية. إن أعاد الخادم الصف، فالقائمة المخفية مجرد تمثيل.",
            fr: "Cacher un bouton n'est pas du contrôle d'accès. Je teste les permissions au niveau des données : je me connecte en utilisateur peu privilégié, puis j'appelle les mêmes endpoints avec les mêmes IDs d'enregistrement qu'un utilisateur privilégié. Si le serveur renvoie la ligne, le menu caché n'était que du décor.",
            ru: "Спрятать кнопку — не контроль доступа. Я проверяю права на уровне данных: вхожу как пользователь с низкими правами и вызываю те же эндпоинты с теми же ID записей, что и привилегированный пользователь. Если сервер вернул строку, скрытое меню было бутафорией.",
            es: "Ocultar un botón no es control de acceso. Pruebo permisos en la capa de datos: entro como usuario de bajo privilegio y llamo a los mismos endpoints con los mismos IDs de registro que usaría uno privilegiado. Si el servidor devuelve la fila, el menú oculto era puro teatro.",
          },
        ],
      },
      {
        heading: {
          en: "Probe for escalation across tenants",
          zh: "跨租户探测越权",
          ar: "اختبر التصعيد عبر المستأجرين",
          fr: "Sonder l'escalade entre tenants",
          ru: "Ищи эскалацию между тенантами",
          es: "Sondea la escalada entre tenants",
        },
        paragraphs: [
          {
            en: "In a multi-tenant system the sharp question is: can tenant A read or write tenant B's data? I take a valid ID from one account and replay it while authenticated as another — horizontal escalation. A single leak here outweighs a hundred cosmetic bugs, so these cases get written down and run every release.",
            zh: "在多租户系统里,最尖锐的问题是:租户 A 能否读写租户 B 的数据?我拿一个账户的合法 ID,在另一账户登录态下重放——横向越权。这里一个泄露,胜过一百个外观缺陷,所以这些用例都要记录下来,每次发版都跑。",
            ar: "في نظام متعدد المستأجرين، السؤال الحاد: هل يستطيع المستأجر (أ) قراءة أو كتابة بيانات المستأجر (ب)؟ آخذ معرّفاً صحيحاً من حساب وأعيد تشغيله وأنا مُصادَق كحساب آخر — تصعيد أفقي. تسريب واحد هنا يفوق مئة علة شكلية، لذا تُوثَّق هذه الحالات وتُشغَّل كل إصدار.",
            fr: "Dans un système multi-tenant, la vraie question est : le tenant A peut-il lire ou écrire les données du tenant B ? Je prends un ID valide d'un compte et le rejoue authentifié en tant qu'un autre — escalade horizontale. Une seule fuite ici pèse plus que cent bugs cosmétiques, alors ces cas sont consignés et rejoués à chaque release.",
            ru: "В мультитенантной системе острый вопрос: может ли тенант A читать или изменять данные тенанта B? Я беру валидный ID одного аккаунта и воспроизвожу его под аутентификацией другого — горизонтальная эскалация. Одна такая утечка весомее сотни косметических багов, поэтому эти случаи записываются и прогоняются каждый релиз.",
            es: "En un sistema multi-tenant la pregunta clave es: ¿puede el tenant A leer o escribir datos del tenant B? Tomo un ID válido de una cuenta y lo reproduzco autenticado como otra — escalada horizontal. Una sola fuga aquí pesa más que cien bugs cosméticos, así que estos casos se anotan y se corren en cada release.",
          },
        ],
      },
    ],
  },
  {
    slug: "ai-in-qa",
    title: {
      en: "Where AI actually helps in QA",
      zh: "AI 在 QA 中到底能帮上什么",
      ar: "أين يساعد الذكاء الاصطناعي فعلاً في ضمان الجودة",
      fr: "Où l'IA aide vraiment en QA",
      ru: "Где ИИ действительно помогает в QA",
      es: "Dónde ayuda realmente la IA en QA",
    },
    date: "2026-06-21",
    readingTime: MIN(7),
    category: CAT.ai,
    excerpt: {
      en: "AI is good at the first draft of a test suite and bad at deciding what matters. The workflow should reflect that.",
      zh: "AI 擅长写测试集的初稿,却不擅长判断什么才重要。工作流应当体现这一点。",
      ar: "الذكاء الاصطناعي بارع في المسودة الأولى لمجموعة الاختبارات، وضعيف في تقرير ما يهمّ. وينبغي لسير العمل أن يعكس ذلك.",
      fr: "L'IA est bonne pour le premier jet d'une suite de tests et mauvaise pour décider ce qui compte. Le flux de travail doit le refléter.",
      ru: "ИИ хорош в первом черновике набора тестов и плох в решении, что важно. Процесс должен это учитывать.",
      es: "La IA es buena en el primer borrador de una suite y mala para decidir qué importa. El flujo de trabajo debe reflejarlo.",
    },
    body: [
      {
        heading: {
          en: "Draft, then review",
          zh: "先起草,再评审",
          ar: "اكتب مسودة ثم راجِع",
          fr: "Rédiger, puis relire",
          ru: "Сначала черновик, потом проверка",
          es: "Redactar, luego revisar",
        },
        paragraphs: [
          {
            en: "Reading a requirement and drafting structured cases is work AI does well. Deciding coverage, risk, and priority is a judgment call that stays with people.",
            zh: "读懂需求、起草结构化用例,是 AI 做得好的工作。而决定覆盖度、风险与优先级,是留给人的判断。",
            ar: "قراءة المتطلب وصياغة حالات منظّمة عمل يتقنه الذكاء الاصطناعي. أما تقرير التغطية والمخاطر والأولوية فحكمٌ يبقى للبشر.",
            fr: "Lire une exigence et rédiger des cas structurés, l'IA le fait bien. Décider de la couverture, du risque et de la priorité est un jugement qui reste humain.",
            ru: "Прочитать требование и набросать структурированные кейсы — это ИИ делает хорошо. Решать о покрытии, риске и приоритете — суждение, остающееся за людьми.",
            es: "Leer un requisito y redactar casos estructurados es algo que la IA hace bien. Decidir cobertura, riesgo y prioridad es un juicio que queda en las personas.",
          },
          {
            en: "A scored review — coverage, logic, executability, clarity, security — keeps the human in the loop and makes the AI output auditable instead of trusted blindly.",
            zh: "一套打分评审——覆盖度、逻辑、可执行性、清晰度、安全——让人始终在环内,也让 AI 的产出可审计,而非盲目信任。",
            ar: "مراجعة مُقيَّمة — التغطية والمنطق وقابلية التنفيذ والوضوح والأمان — تُبقي الإنسان ضمن الحلقة وتجعل مخرجات الذكاء الاصطناعي قابلة للتدقيق بدل الثقة العمياء.",
            fr: "Une revue notée — couverture, logique, exécutabilité, clarté, sécurité — garde l'humain dans la boucle et rend la sortie de l'IA auditable plutôt que crue aveuglément.",
            ru: "Оценочная проверка — покрытие, логика, исполнимость, ясность, безопасность — держит человека в контуре и делает вывод ИИ проверяемым, а не слепо принимаемым.",
            es: "Una revisión puntuada — cobertura, lógica, ejecutabilidad, claridad, seguridad — mantiene a la persona en el bucle y hace auditable la salida de la IA en vez de confiar a ciegas.",
          },
        ],
      },
    ],
  },
];

export function getNote(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}
