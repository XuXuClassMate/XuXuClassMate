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
} satisfies Record<string, Localized>;

export const NOTES: Note[] = [
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
