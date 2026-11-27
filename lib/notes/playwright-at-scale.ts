import { CAT, MIN, loc, type Note } from "./shared";

export const playwrightAtScale: Note = {
  slug: "playwright-at-scale",
  title: loc(
    "Keeping Playwright fast when the suite grows",
    "用例集变大时,如何让 Playwright 保持快速",
    "الحفاظ على سرعة Playwright مع نمو مجموعة الاختبارات",
    "Garder Playwright rapide quand la suite grossit",
    "Как сохранить скорость Playwright, когда набор растёт",
    "Mantener Playwright rápido cuando la suite crece",
  ),
  date: "2026-09-18",
  readingTime: MIN(14),
  category: CAT.automation,
  excerpt: loc(
    "A large suite stays useful only while it stays fast and honest. The moment people rerun red jobs until green, Playwright is theatre. I learned that the hard way when a green desktop pass shipped a site that did nothing on iPhone 11 Chrome.",
    "一套大用例只有又快又可信才有用。有人把红构建重跑到绿,Playwright 就成了演出。桌面绿灯把 iPhone 11 Chrome 上点不动的站发出去的时候,我把这事记死了。",
    "مجموعة كبيرة تبقى مفيدة ما دامت سريعة وصادقة. حين يُعاد الأحمر حتى الأخضر يصير Playwright مسرحاً. تعلّمت ذلك حين مرّر نجاح أخضر على سطح المكتب موقعاً لا يستجيب على كروم آيفون 11.",
    "Une grande suite n'est utile que rapide et honnête. Relancer le rouge jusqu'au vert, c'est du théâtre. Un pass desktop vert a livré un site mort sur Chrome iPhone 11 — je ne l'oublie pas.",
    "Большой набор полезен, пока быстр и честен. Перезапуск красного до зелёного — театр. Зелёный десктоп выкатил мёртвый сайт на Chrome iPhone 11. Это я запомнил.",
    "Una suite grande solo sirve si es rápida y honesta. Relanzar el rojo hasta el verde es teatro. Un pass verde de escritorio publicó un sitio muerto en Chrome iPhone 11. No se me olvida.",
  ),
  body: [
    {
      heading: loc(
        "Green is not the same as “the phone works”",
        "绿灯不等于「手机上能用」",
        "الأخضر ليس «الهاتف يعمل»",
        "Vert n'est pas « le téléphone marche »",
        "Зелёный ≠ «телефон работает»",
        "Verde no es “el teléfono funciona”",
      ),
      paragraphs: [
        loc(
          "This site has a Playwright loop over the main routes: HTTP 200, a heading, nav, screenshot, no hard console errors. It is a useful smoke. It also used `networkidle` and a desktop Chromium. That combination went green the week an iPhone 11 opened a white overlay, then a correct layout with every metric at 0 and taps that did nothing. Chromium with an iPhone viewport is not WebKit. It will not fail to parse a Safari 16.4 bundle, and it will not reproduce a compositor that swallows taps.",
          "这个站有一套 Playwright 巡主路径:HTTP 200、标题、导航、截图、没有硬控制台错误。当 smoke 够用。它也用了 `networkidle` 和桌面 Chromium。iPhone 11 先白屏、再版面对了但指标全 0、按钮没反应的那一周,这套仍然是绿的。带 iPhone 视口的 Chromium 不是 WebKit。它不会让 Safari 16.4 的包解析失败,也不会复现吞掉 tap 的合成层。",
          "لهذا الموقع حلقة Playwright على المسارات: 200، عنوان، تنقّل، لقطة، بلا أخطاء كونسول قاسية. دخان مفيد. استخدمت أيضاً `networkidle` وكروميوم سطح المكتب. ظلّت خضراء في الأسبوع الذي فتح فيه آيفون 11 طبقة بيضاء ثم تخطيطاً صحيحاً بمقاييس صفر ونقر بلا رد. كروميوم بمنفذ آيفون ليس WebKit.",
          "Ce site a une boucle Playwright sur les routes : 200, titre, nav, screenshot, pas d'erreurs console dures. Bon smoke. Elle utilisait aussi `networkidle` et Chromium desktop. Elle est restée verte la semaine où un iPhone 11 a vu un overlay blanc, puis une page juste à 0 avec des taps morts. Chromium + viewport iPhone n'est pas WebKit.",
          "У сайта цикл Playwright по маршрутам: 200, заголовок, нав, скрин, без жёстких console error. Нормальный smoke. Ещё `networkidle` и десктопный Chromium. Он был зелёным в неделю, когда iPhone 11 открыл белый оверлей, потом верную вёрстку с нулями и мёртвыми tap. Chromium с вьюпортом iPhone — не WebKit.",
          "Este sitio tiene un bucle Playwright por las rutas: 200, heading, nav, captura, sin errores duros de consola. Buen smoke. También usaba `networkidle` y Chromium de escritorio. Siguió verde la semana en que un iPhone 11 vio un overlay blanco y luego un layout correcto con ceros y toques muertos. Chromium con viewport iPhone no es WebKit.",
        ),
        loc(
          "I did not throw the smoke away. I stopped treating it as the release oracle. The suite answers “did the static pages render in Chromium?”. “Did the first tap on language work on iPhone 11 Chrome?” is a different test, on a different engine, and I write it down as such so nobody pads the green with a viewport lie.",
          "smoke 我没扔。我不再把它当发版预言。这套回答的是「静态页在 Chromium 里是否渲出来了」。「iPhone 11 Chrome 上第一次点语言有没有用」是另一个测试、另一个引擎,我把它写成另一条,免得有人拿视口撒谎把绿灯撑满。",
          "لم أرمِ الدخان. توقفت عن معاملته كنبوءة إصدار. المجموعة تجيب «هل رُسمت الصفحات في كروميوم؟». «هل عملت أول نقرة لغة على كروم آيفون 11؟» اختبار آخر على محرّك آخر، وأكتبه كذلك.",
          "Je n'ai pas jeté le smoke. J'ai cessé d'en faire l'oracle de release. La suite dit « les pages statiques se rendent-elles dans Chromium ? ». « Le premier tap langue marche-t-il sur Chrome iPhone 11 ? » est un autre test, un autre moteur.",
          "Smoke не выбросил. Перестал считать его оракулом релиза. Набор отвечает: «статические страницы рисуются в Chromium?». «Первый tap по языку на Chrome iPhone 11 сработал?» — другой тест, другой движок.",
          "No tiré el smoke. Dejé de tratarlo como oráculo de release. La suite responde “¿las páginas estáticas pintan en Chromium?”. “¿El primer toque de idioma funcionó en Chrome iPhone 11?” es otro test, otro motor.",
        ),
      ],
    },
    {
      heading: loc(
        "Flake is a taxonomy",
        "不稳定要先分类",
        "التذبذب تصنيف",
        "L'instabilité est une taxonomie",
        "Флак — таксономия",
        "El flake es una taxonomía",
      ),
      paragraphs: [
        loc(
          "I label flake before I “fix” it. Race: clicked before the row existed. Leaked state: yesterday's order still in the cart. Third-party: analytics or a captcha blinked. Time: `new Date()` in one timezone. Animation: a 300 ms fade ate the click — that is the same family as the opacity-0 overlay. Infra: the runner starved CPU and every wait stretched. `networkidle` on a page that keeps a stats beacon open is infra flake dressed as a product failure.",
          "先分类再谈修。竞态:行还没出来就点了。泄漏状态:昨天的订单还在购物车。第三方:统计或验证码闪了一下。时间:套件假定了某个时区的 `new Date()`。动画:300 ms 淡入吃掉点击——和 opacity-0 遮罩是一家。基础设施:跑手 CPU 饿了,等待被拉长。页面上一直挂着统计 beacon,却等 `networkidle`,是基础设施不稳定穿了产品失败的衣服。",
          "أصنّف التذبذب قبل الإصلاح. سباق: نقر قبل الصف. حالة متسرّبة. طرف ثالث. وقت. حركة: تلاشٍ 300 ms — عائلة الطبقة الشفافة. بنية: جاع المعالج. `networkidle` على صفحة تبقي منارة إحصاء مفتوحة تذبذب بنية في ثوب فشل منتج.",
          "Je classe avant de “corriger”. Course, état fuité, tiers, fuseau, animation (même famille que l'overlay opacity-0), infra. `networkidle` sur une page qui garde un beacon stats ouvert, c'est de l'infra habillée en échec produit.",
          "Сначала классифицирую. Гонка, утечка состояния, третья сторона, часовой пояс, анимация (та же семья, что overlay opacity-0), инфра. `networkidle` на странице с вечным stats-маяком — инфровый флак в одежде продуктового падения.",
          "Clasifico antes de “arreglar”. Carrera, estado filtrado, terceros, zona horaria, animación (la misma familia que el overlay opacity-0), infra. `networkidle` en una página que deja un beacon de stats abierto es flake de infra vestido de fallo de producto.",
        ),
        loc(
          "Retries on pull requests hide the taxonomy. Nightly may retry an infra blip. On PR I want the first failure, with a trace. A test that is red 1 in 10 is not “mostly passing”. It is unowned. I will not retry-until-green a blank iPhone and call it flake — that was a real bug.",
          "PR 上的重试会把分类藏起来。夜间全量可以对基础设施毛刺重试;PR 上我要第一次失败,并带 trace。十次红一次不是「基本能过」,是没人认领。我不会把 iPhone 白屏重跑到绿再叫偶发——那是真缺陷。",
          "إعادة المحاولة على الطلب تخفي التصنيف. الليل قد يعيد ومضة بنية. على الطلب أريد الفشل الأول مع تتبع. أحمر 1 من 10 بلا مالك. لن أعيد شاشة آيفون فارغة حتى تخضرّ وأسمّيها تذبذباً.",
          "Les retries sur PR masquent la taxonomie. Nightly : retry d'un blip d'infra. PR : premier échec + trace. Rouge 1/10 = sans owner. Je ne retry-until-green pas un iPhone blanc pour crier à l'instabilité.",
          "Ретраи на PR прячут таксономию. На ночном — ретрай инфры. На PR — первый провал с трейсом. Красный 1 из 10 — бесхозный. Не буду крутить белый iPhone до зелёного и звать это флаком.",
          "Los reintentos en el PR esconden la taxonomía. Nightly: reintento de un tirón de infra. PR: primer fallo con traza. Rojo 1 de 10 no tiene dueño. No voy a retry-until-green un iPhone en blanco para llamarlo flake.",
        ),
      ],
    },
    {
      heading: loc(
        "Every test owns its data",
        "每个测试自己管数据",
        "كل اختبار يملك بياناته",
        "Chaque test possède ses données",
        "Каждый тест владеет своими данными",
        "Cada test es dueño de sus datos",
      ),
      paragraphs: [
        loc(
          "Order-dependent suites are a design smell. Each test gets a factory (unique email, tenant, SKU) and a teardown that does not assume the last assertion passed. Shared mutable users — “login as demo@…” — collide the moment you shard. `storageState` per role is cheaper than logging in every time, and safer than one cookie jar for the file. I never `waitForTimeout` for “the job to finish”. I wait for the row, the email, or the API — the thing a person would wait for.",
          "依赖执行顺序的套件是设计味。每个测试有工厂(唯一邮箱、租户、SKU),清理不假设上一条断言过了。「用 demo@ 登录」一分片就撞。按角色存 `storageState`,比每次登录便宜,也比整文件一个 cookie 罐安全。从不为「等任务跑完」写 `waitForTimeout`。等那一行、那封邮件、或接口说完——人会等的那个东西。",
          "المجموعات حسب الترتيب رائحة تصميم. لكل اختبار مصنع وتنظيف لا يفترض نجاح التأكيد السابق. `storageState` لكل دور. لا `waitForTimeout` حتى تنتهي المهمة — أنتظر ما ينتظره إنسان.",
          "Une suite ordonnée sent le défaut. Factory + teardown qui n'assume pas le dernier assert. `storageState` par rôle. Jamais `waitForTimeout` « que le job finisse » — j'attends ce qu'une personne attendrait.",
          "Набор от порядка — запах. Фабрика и teardown без допущения, что прошлый assert прошёл. `storageState` на роль. Никакого `waitForTimeout` «пока джоба закончится» — жду то, чего ждал бы человек.",
          "Una suite que depende del orden huele mal. Factory y teardown que no asume el último assert. `storageState` por rol. Nunca `waitForTimeout` a que “termine el job”: espero lo que esperaría una persona.",
        ),
      ],
    },
    {
      heading: loc(
        "Assert what a person can see",
        "断言人能看见的东西",
        "أكّد ما يراه إنسان",
        "Asserter ce qu'une personne voit",
        "Проверяй то, что видит человек",
        "Afirma lo que una persona puede ver",
      ),
      paragraphs: [
        loc(
          "CSS chains break when a designer renames a class. I default to `getByRole`, `getByLabel`, and `getByText` for copy that is a contract. The oracle is the user-visible outcome: “Order #1842 confirmed”, or on this site, that the language control's `aria-expanded` flipped and `document.documentElement.lang` changed — not “spinner detached from DOM”. Web-first assertions already retry; wrapping them in extra sleeps adds flake, not safety.",
          "设计师一改 class,CSS 链就断。默认 `getByRole`、`getByLabel`,合同文案用 `getByText`。预言是人看得见的结果:「订单 #1842 已确认」,在这个站上则是语言按钮的 `aria-expanded` 翻了、`document.documentElement.lang` 变了——不是「spinner 从 DOM 卸掉」。Web-first 断言自己会重试;再套 sleep 是加不稳定。",
          "سلاسل CSS تنكسر عند إعادة تسمية فئة. `getByRole` و`getByLabel` و`getByText`. النبوءة نتيجة مرئية — لا «انفصل الspinner». تأكيدات web-first تعيد المحاولة؛ النوم حولها تذبذب.",
          "Les chaînes CSS cassent. `getByRole`, `getByLabel`, `getByText`. L'oracle est visible : « Commande #1842 confirmée », ou `lang` qui change — pas « le spinner a quitté le DOM ». Les assertions web-first retrient déjà.",
          "CSS-цепочки ломаются. `getByRole`, `getByLabel`, `getByText`. Оракул видимый: «Заказ #1842 подтверждён» или смена `lang` — не «спиннер ушёл из DOM». Web-first и так ретраит.",
          "Las cadenas CSS se rompen. `getByRole`, `getByLabel`, `getByText`. El oráculo es visible: “Pedido #1842 confirmado” o que cambie `lang` — no “el spinner salió del DOM”. Las aserciones web-first ya reintentan.",
        ),
      ],
    },
    {
      heading: loc(
        "Shard and tag; do not delete coverage",
        "分片、打标,不要删覆盖",
        "جزّئ وسِم ولا تحذف التغطية",
        "Shard et taguer ; ne pas couper la couverture",
        "Шард и тег; покрытие не резать",
        "Fragmenta y etiqueta; no borres cobertura",
      ),
      paragraphs: [
        loc(
          "When the suite crosses ten minutes on PR, people want to delete tests. I tag first: `@smoke` on money paths (login, pay, permission denial, and now “primary control works on the supported phone”), `@slow` on imports and reports, `@p1` for the rest. PR runs smoke; nightly runs everything, sharded. Coverage stays; the wait does not.",
          "PR 上一超过十分钟,人手就痒想删用例。我先打标:`@smoke` 给钱相关路径(登录、支付、权限拒绝,以及现在的「支持机型上主控件能点」),`@slow` 给导入和报表,其余 `@p1`。PR 跑 smoke;夜间全量分片。覆盖留下,等待不留下。",
          "حين تتجاوز المجموعة عشر دقائق يغري الحذف. أسم أوّلاً: `@smoke` لمسارات المال و«السيطرة الأساسية على الهاتف المدعوم»، `@slow` للاستيراد، `@p1` للباقي. الطلب يشغّل smoke؛ الليل الكل مجزّأ.",
          "Au-delà de dix minutes sur PR, on veut couper. Je tague : `@smoke` (argent + « le contrôle principal marche sur le téléphone supporté »), `@slow`, `@p1`. PR = smoke ; nightly = tout, shardé.",
          "Больше десяти минут на PR — хочется резать. Теги: `@smoke` (деньги + «главный контроль на заявленном телефоне»), `@slow`, `@p1`. PR — smoke; ночной — всё, с шардами.",
          "Cuando pasa de diez minutos en el PR, tienta borrar. Etiqueto: `@smoke` (dinero y “el control principal funciona en el teléfono soportado”), `@slow`, `@p1`. PR corre smoke; nightly todo, fragmentado.",
        ),
      ],
      bullets: [
        loc(
          "PR budget I defend: smoke under 10 minutes wall clock, `trace: on-first-retry`, no retry-until-green.",
          "我守的 PR 预算:smoke 墙钟 < 10 分钟,`trace: on-first-retry`,禁止重跑到绿。",
          "ميزانية الطلب: smoke تحت 10 دقائق، `trace: on-first-retry`، بلا إعادة حتى الأخضر.",
          "Budget PR : smoke < 10 min, `trace: on-first-retry`, pas de retry-until-green.",
          "PR-бюджет: smoke < 10 мин, `trace: on-first-retry`, без retry-until-green.",
          "Presupuesto PR: smoke < 10 min, `trace: on-first-retry`, nada de retry-until-green.",
        ),
        loc(
          "A quarantined test has an owner and a date. After two weeks it is fixed or deleted. Silent skip is how coverage dies.",
          "隔离的用例有责任人和日期。两周后修好或删掉。默默 skip 是覆盖死掉的方式。",
          "اختبار الحجر له مالك وتاريخ. بعد أسبوعين يُصلح أو يُحذف.",
          "Quarantaine : owner + date. Deux semaines : corrigé ou supprimé.",
          "Карантин: владелец и дата. Через две недели — починен или удалён.",
          "Cuarentena: dueño y fecha. A las dos semanas, arreglado o borrado.",
        ),
      ],
    },
    {
      heading: loc(
        "The trace is the contract; mock the edge",
        "trace 是合同;只 mock 边界",
        "التتبع عقد؛ حاكِ الحافة فقط",
        "La trace est le contrat ; moquer le bord",
        "Трейс — контракт; мокай только край",
        "La traza es el contrato; mockea solo el borde",
      ),
      paragraphs: [
        loc(
          "A red X without a trace trains people to rerun. I want `trace: on-first-retry`, last actions, network, and the snapshot the assertion saw. If I cannot diagnose from the artifact, the test is under-instrumented — my bug, not CI's. I stub payments, captcha, and analytics. I do not stub our own API on a user journey: then I am testing the stub. Contract tests live one layer down; E2E still crosses the stack we ship.",
          "没有 trace 的红叉会训练人去重跑。我要 `trace: on-first-retry`、最后几步、网络、断言当时看见的快照。工件里看不出原因,是测试仪器不够——我的缺陷,不是 CI 的。支付、验证码、统计打桩。用户旅程里不打自己的 API 桩,那是在测桩。契约测试放下一层;E2E 仍穿过我们发出去的那一栈。",
          "علامة حمراء بلا تتبع تعلّم إعادة التشغيل. أريد التتبع عند أول إعادة. أُثبّت الدفع وcaptcha والتحليلات لا API الخاص بنا في رحلة مستخدم.",
          "Une croix rouge sans trace apprend à relancer. `trace: on-first-retry`. Je stub paiements, captcha, analytics — pas notre API sur un parcours utilisateur.",
          "Красный крест без трейса учит перезапускать. `trace: on-first-retry`. Стабы на платежи, капчу, аналитику — не на своё API в пользовательском сценарии.",
          "Una X roja sin traza entrena a relanzar. `trace: on-first-retry`. Stub de pagos, captcha y analytics — no de nuestra API en un viaje de usuario.",
        ),
      ],
    },
    {
      heading: loc("Copy-paste examples", "可直接抄的示例", "أمثلة جاهزة للنسخ", "Exemples à copier", "Примеры для копирования", "Ejemplos para copiar"),
      paragraphs: [
        loc("The config and CI wiring that keep a growing suite fast and honest: bounded retries, trace only on retry, sharding across machines, and a stable-tag gate so people stop rerunning red until green.", "让越来越大的套件保持又快又诚实的配置与 CI 接线:有限重试、只在重试时抓 trace、按机器分片,以及用 stable 标签把关,免得大家把红的重跑到绿。", "الإعداد وأسلاك CI التي تبقي المجموعة المتنامية سريعة وصادقة: إعادات محدودة، trace عند الإعادة فقط، تقسيم عبر الأجهزة، وبوابة بوسم stable كي يتوقف الناس عن إعادة التشغيل حتى الأخضر.", "La config et le câblage CI qui gardent une suite grandissante rapide et honnête : retries bornés, trace seulement au retry, sharding entre machines, et un gate par tag stable pour arrêter de relancer le rouge jusqu'au vert.", "Конфиг и CI-обвязка, которые держат растущий набор быстрым и честным: ограниченные ретраи, trace только при ретрае, шардинг по машинам и гейт по тегу stable, чтобы перестали перезапускать до зелёного.", "La config y el cableado de CI que mantienen una suite creciente rápida y honesta: reintentos acotados, trace solo en reintento, sharding entre máquinas y un gate por etiqueta stable para dejar de relanzar hasta el verde."),
      ],
      code: [
        { lang: "ts", label: "playwright.config.ts", code: "import { defineConfig } from \"@playwright/test\";\n\nexport default defineConfig({\n  retries: process.env.CI ? 1 : 0,       // one retry, not ten\n  workers: process.env.CI ? 4 : \"50%\",\n  use: {\n    trace: \"on-first-retry\",             // a flake you can replay, not guess\n    screenshot: \"only-on-failure\",\n  },\n  reporter: [[\"html\"], [\"github\"]],\n});" },
        { lang: "yaml", label: ".github/workflows/e2e.yml", code: "jobs:\n  e2e:\n    strategy:\n      fail-fast: false\n      matrix:\n        shard: [1, 2, 3, 4]\n    steps:\n      - run: npx playwright test --shard=${{ matrix.shard }}/4" },
        { lang: "ts", label: "checkout.spec.ts", code: "// stable selectors (test-id), and a tag the CI gate greps for\ntest(\"checkout\", { tag: \"@stable\" }, async ({ page }) => {\n  await page.getByTestId(\"pay\").click();        // not text, not nth-child\n  await expect(page.getByTestId(\"receipt\")).toBeVisible();\n});\n\n// gate: npx playwright test --grep @stable\n// flaky-but-useful tests live behind --grep-invert @stable, off the merge path" },
      ],
    },
  ],
};
