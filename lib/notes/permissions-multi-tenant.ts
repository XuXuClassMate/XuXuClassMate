import { CAT, MIN, loc, type Note } from "./shared";

export const permissionsMultiTenant: Note = {
  slug: "permissions-multi-tenant",
  title: loc(
    "Where bugs hide: permissions and multi-tenant",
    "缺陷藏身之处:权限与多租户",
    "حيث تختبئ العلل: الصلاحيات وتعدّد المستأجرين",
    "Où se cachent les bugs : permissions et multi-tenant",
    "Где прячутся баги: права и мультитенантность",
    "Dónde se esconden los bugs: permisos y multi-tenant",
  ),
  date: "2026-07-15",
  readingTime: MIN(13),
  category: CAT.security,
  excerpt: loc(
    "The hardest defects are not crashes. They are a user quietly reading someone else's row. I find them by replaying IDs across tenants and verbs — not by walking the menu until a button disappears.",
    "最难的缺陷不是崩溃,而是一个用户悄悄读到别人的行。靠把 ID 在租户和动词上重放找到它们,不是靠点菜单看到按钮消失。",
    "أصعب العلل ليست الأعطال. بل أن يقرأ مستخدم صف غيره بهدوء. أجدها بإعادة تشغيل المعرّفات عبر المستأجرين والأفعال — لا بالمشي في القائمة حتى يختفي زر.",
    "Les pires défauts ne sont pas des plantages. C'est un utilisateur qui lit la ligne d'un autre. Je les trouve en rejouant des ID entre tenants et verbes — pas en marchant dans le menu jusqu'à ce qu'un bouton disparaisse.",
    "Самые тяжёлые дефекты — не падения. Это пользователь, читающий чужую строку. Ищу, прогоняя ID по тенантам и глаголам — не гуляя по меню, пока кнопка не исчезнет.",
    "Los peores defectos no son caídas. Es un usuario leyendo la fila de otro. Los encuentro re reproduciendo IDs entre tenants y verbos — no recorriendo el menú hasta que desaparezca un botón.",
  ),
  body: [
    {
      heading: loc(
        "The 200 I filed last year",
        "去年我提的那条 200",
        "الـ 200 التي بلّغتها العام الماضي",
        "Le 200 que j'ai file l'an dernier",
        "Тот 200, который я завёл в прошлом году",
        "El 200 que archivé el año pasado",
      ),
      paragraphs: [
        loc(
          "The UI was fine. Viewer role, tenant B: the order from tenant A was not in the list, the export button was gone, the admin nav item was missing. I logged in as that viewer, copied an order ID I had created as tenant A, and `GET /api/orders/{id}`. 200, full payload, including the other company's email. Same ID on `PATCH` changed the address. The screenshot of a greyed-out button would have gone green. That ticket outranked every visual polish in the sprint, and it should.",
          "界面没问题。查看者、租户 B:列表里没有租户 A 的订单,导出按钮没了,管理导航也没了。我用这个查看者登录,把租户 A 建的订单 ID 拿来 `GET /api/orders/{id}`。200,完整载荷,带着对方公司的邮箱。同一 ID 打 `PATCH`,地址改掉了。按钮灰掉的截图会是绿灯。那张单压过同一迭代里所有视觉打磨,本来就该如此。",
          "الواجهة كانت سليمة. دور العارض، المستأجر ب: طلب أ ليس في القائمة، زر التصدير غاب، بند الإدارة غاب. دخلت كذاك العارض ونسخت معرّف طلب أنشأته كـ أ و`GET /api/orders/{id}`. 200، حمولة كاملة، بريد الشركة الأخرى. نفس المعرّف على `PATCH` غيّر العنوان. لقطة الزر الرمادي كانت ستخضرّ.",
          "L'UI était correcte. Rôle lecteur, tenant B : la commande de A absente, export disparu, nav admin absente. Connecté en lecteur, j'ai rejoué un ID créé en A : `GET /api/orders/{id}` → 200, payload complet, email de l'autre société. `PATCH` a changé l'adresse. Le bouton grisé aurait été vert.",
          "UI была в порядке. Viewer, тенант B: заказа A в списке нет, экспорта нет, админки в нави нет. Залогинился этим viewer, взял ID заказа, созданного под A: `GET /api/orders/{id}` — 200, полное тело, email чужой компании. Тот же ID на `PATCH` сменил адрес. Скрин серой кнопки был бы зелёным.",
          "La UI estaba bien. Rol viewer, tenant B: el pedido de A no estaba en la lista, el export desapareció, el admin no estaba en la nav. Entré como ese viewer, copié un ID creado como A y `GET /api/orders/{id}`. 200, payload completo, el email de la otra empresa. El mismo ID en `PATCH` cambió la dirección. La captura del botón gris habría salido verde.",
        ),
      ],
    },
    {
      heading: loc(
        "Hiding a button is not access control",
        "隐藏按钮不是访问控制",
        "إخفاء زر ليس تحكماً في الوصول",
        "Cacher un bouton n'est pas du contrôle d'accès",
        "Спрятать кнопку — не контроль доступа",
        "Ocultar un botón no es control de acceso",
      ),
      paragraphs: [
        loc(
          "UI tests that assert a menu item is absent go green while the API still returns the row. I log in as the low-privilege user, then call the same endpoints a privileged user would, with the same record IDs. If the server returns 200 and a body, the hidden menu was theatre. That is the test. I apply the same discipline to my own surfaces: a watch dashboard that only “hides” charts from the wrong email is not an allowlist. The check belongs on the request, not on the nav.",
          "断言菜单项不存在的 UI 测试会绿灯,接口却照样返回那一行。用低权限登录,再打高权限会打的同一批接口、同一批 ID。服务端 200 带 body,藏起来的菜单只是做戏。那才是测试。自己的面也一样:监控台只对错误邮箱「藏图表」,那不是白名单。检查在请求上,不在导航上。",
          "اختبارات الواجهة التي تؤكد غياب بند تخضرّ والـ API يعيد الصف. أسجّل منخفض الصلاحية ثم أستدعي نفس المسارات ونفس المعرّفات. 200 مع جسم = تمثيل. الأمر نفسه لسطوحي: لوحة تخفي الرسوم عن بريد خاطئ ليست قائمة سماح. الفحص على الطلب لا على التنقّل.",
          "Des tests UI « item absent » passent au vert pendant que l'API renvoie la ligne. Peu privilégié, mêmes endpoints, mêmes IDs. 200 + corps = décor. Pareil sur mes surfaces : un dashboard qui « cache » des graphes au mauvais email n'est pas une allowlist. Le contrôle est sur la requête, pas sur la nav.",
          "UI-тесты «пункта нет» зеленеют, пока API отдаёт строку. Низкая привилегия, те же эндпоинты, те же ID. 200 и тело — бутафория. Так же на своих поверхностях: дашборд, который «прячет» графики от чужого email, не allowlist. Проверка на запросе, не в нави.",
          "Los tests de UI que afirman que falta un ítem se ponen verdes mientras la API sigue devolviendo la fila. Bajo privilegio, mismos endpoints, mismos IDs. 200 y cuerpo = teatro. Igual en mis superficies: un dashboard que “esconde” gráficos al email equivocado no es una allowlist. El chequeo va en la petición, no en la nav.",
        ),
      ],
    },
    {
      heading: loc(
        "Matrix first, then cases",
        "先矩阵,再用例",
        "المصفوفة أولاً ثم الحالات",
        "La matrice d'abord, puis les cas",
        "Сначала матрица, потом кейсы",
        "Primero la matriz, luego los casos",
      ),
      paragraphs: [
        loc(
          "I draw Role × Tenant × Resource × Verb before I automate. Viewer / editor / admin. Tenant A / tenant B. Order, attachment, export. GET, POST, PATCH, DELETE. Each cell is allow or deny, copied from the spec, not reverse-engineered from today's UI. Automation fills cells; it does not invent journeys. Negative cells are first-class. A suite of happy-path allows with no denies is how IDOR survives code review. I want the 403 (or empty list) on the page and in the report, with the request ID.",
          "自动化之前先画 角色 × 租户 × 资源 × 动词。查看者 / 编辑 / 管理员。租户 A / B。订单、附件、导出。GET、POST、PATCH、DELETE。每个格子允许或拒绝,从规格抄,不从当天 UI 反推。自动化是填格子,不是发明旅程。拒绝格是一等公民。只有快乐路径允许的套件,是 IDOR 活过 code review 的方式。我要页面上和报告里都是 403(或空列表),带 request ID。",
          "أرسم الدور × المستأجر × المورد × الفعل قبل الأتمتة. كل خلية سماح أو رفض من المواصفة. خلايا الرفض من الدرجة الأولى. أريد 403 أو قائمة فارغة مع معرّف الطلب.",
          "Je trace Rôle × Tenant × Ressource × Verbe avant d'automatiser. Chaque cellule allow/deny vient de la spec. Les deny sont de première classe. Je veux le 403 (ou la liste vide) avec l'ID de requête.",
          "Рисую Роль × Тенант × Ресурс × Глагол до автоматизации. Ячейка — allow или deny из спецификации. Deny — первого класса. Хочу 403 или пустой список с request ID.",
          "Dibujo Rol × Tenant × Recurso × Verbo antes de automatizar. Cada celda allow/deny sale de la spec. Las deny son de primera. Quiero el 403 o la lista vacía con el request ID.",
        ),
      ],
    },
    {
      heading: loc(
        "Horizontal replay is the sharp test",
        "横向重放才是尖的那一刀",
        "إعادة التشغيل الأفقية هي الاختبار الحاد",
        "Le rejeu horizontal est le test tranchant",
        "Горизонтальный replay — острый тест",
        "La repetición horizontal es el test afilado",
      ),
      paragraphs: [
        loc(
          "In a multi-tenant system the question is simple: can tenant A read or write tenant B? I take a valid ID from account A (order, document, presigned URL) and replay it while authenticated as B. GET is enough to leak; PATCH/DELETE is enough to destroy. One hit outweighs a hundred cosmetic bugs, so these cases are named, owned, and run every release. Vertical escalation is the sibling: a member calls an admin route with their own token. “Admin UI is not linked in the nav” is not a deny.",
          "多租户里问题很简单:租户 A 能否读写租户 B?从账户 A 拿一个合法 ID(订单、文档、预签名 URL),用 B 的登录态重放。GET 就够泄露,PATCH/DELETE 就够破坏。一次命中胜过一百个外观缺陷,所以这些用例要有名字、有人认、每次发版都跑。纵向越权是兄弟:成员拿自己的 token 打管理员路由。「导航里没挂管理后台」不是拒绝。",
          "السؤال: هل يستطيع أ قراءة أو كتابة ب؟ أعيد تشغيل معرّف صالح من أ مصادقاً كـ ب. GET يكفي للتسريب. «واجهة المدير ليست في التنقّل» ليس رفضاً.",
          "La question : A peut-il lire ou écrire B ? Je rejoue un ID valide de A authentifié en B. GET suffit à fuiter. « L'UI admin n'est pas dans la nav » n'est pas un deny.",
          "Вопрос: может ли A читать или писать B? Валидный ID у A, воспроизвожу под B. GET достаточно для утечки. «Админки нет в нави» — не deny.",
          "La pregunta: ¿puede A leer o escribir B? Reproduzco un ID válido de A autenticado como B. GET basta para filtrar. “La UI admin no está en la nav” no es un deny.",
        ),
      ],
    },
    {
      heading: loc(
        "Side channels leak the same row",
        "旁路会漏同一行",
        "القنوات الجانبية تسرّب الصف نفسه",
        "Les canaux latéraux fuient la même ligne",
        "Боковые каналы текут той же строкой",
        "Los canales laterales filtran la misma fila",
      ),
      paragraphs: [
        loc(
          "Search, notifications, CSV export, GraphQL aliases, object-storage URLs, and “share” links often skip the check the main handler remembered. I replay the stolen ID through each of those. If export includes tenant B's email, a correct GET on the resource does not matter. Generated test cases miss this constantly: they walk the menu and stop. The review bar on the generator has to fail a suite that never tries a second tenant.",
          "搜索、通知、CSV 导出、GraphQL 别名、对象存储 URL、「分享」链接,常常绕过主 handler 记得做的检查。偷来的 ID 我在这些面上各打一遍。导出里带了租户 B 的邮箱,主 GET 写对了也没用。生成的用例经常漏这一刀:它们走完菜单就停。生成器的评审门槛必须让「从没试过第二租户」的套件不及格。",
          "البحث والإشعارات وتصدير CSV وروابط المشاركة تتخطى فحص المعالج الرئيسي. أعيد تشغيل المعرّف المسروق عبرها. الحالات المولَّدة تفوّت هذا: تمشي القائمة وتتوقف. شريط مراجعة المولّد يجب أن يسقط مجموعة لم تجرّب مستأجراً ثانياً.",
          "Recherche, notifications, export CSV, liens « partager » sautent le contrôle du handler principal. Je rejoue l'ID volé. Les cas générés ratent ça : ils marchent le menu et s'arrêtent. La barre de revue du générateur doit rater une suite qui n'a jamais essayé un second tenant.",
          "Поиск, уведомления, CSV, ссылки «поделиться» обходят проверку основного handler. Украденный ID гоняю по ним. Сгенерированные кейсы это пропускают: прошли меню и остановились. Плашка ревью генератора должна валить набор без второго тенанта.",
          "Búsqueda, notificaciones, export CSV y enlaces “compartir” se saltan el chequeo del handler principal. Reproduzco el ID robado. Los casos generados se lo pierden: recorren el menú y paran. El umbral de revisión del generador tiene que tumbar una suite que nunca probó un segundo tenant.",
        ),
      ],
    },
    {
      heading: loc(
        "How I file it so it gets fixed",
        "怎么报,才会有人修",
        "كيف أبلّغ حتى يُصلَح",
        "Comment je le file pour qu'on le corrige",
        "Как завести, чтобы починили",
        "Cómo lo archivo para que se arregle",
      ),
      paragraphs: [
        loc(
          "Security bugs die in vague tickets. Two accounts, the exact request (method, path, ID), expected deny, actual 200 + payload (redacted), class: IDOR, vertical escalation, or missing tenant predicate. I say whether the UI hid it. I do not paste production PII. I do say this outranks visual polish in the same sprint — the greyed-out button is not the evidence, the 200 is.",
          "含糊工单里安全缺陷会死。两个账户、精确请求(方法、路径、ID)、预期拒绝、实际 200 + 载荷(脱敏)、类别:IDOR、纵向越权、或缺少租户谓词。写 UI 有没有藏。不贴生产 PII。写它压过同一迭代的视觉打磨——灰按钮不是证据,200 才是。",
          "تموت علل الأمن في التذاكر الغامضة. حسابان، الطلب الدقيق، الرفض المتوقّع، 200 الفعلي، الصنف. الزر الرمادي ليس الدليل؛ الـ 200 هو.",
          "Les bugs sécu meurent dans les tickets vagues. Deux comptes, requête exacte, deny attendu, 200 réel, classe. Le bouton grisé n'est pas la preuve ; le 200 l'est.",
          "ИБ-баги умирают в туманных тикетах. Два аккаунта, точный запрос, ожидаемый deny, фактический 200, класс. Серая кнопка — не доказательство. 200 — да.",
          "Los bugs de seguridad mueren en tickets vagos. Dos cuentas, petición exacta, deny esperado, 200 real, clase. El botón gris no es la evidencia; el 200 sí.",
        ),
      ],
    },
    {
      heading: loc("Copy-paste examples", "可直接抄的示例", "أمثلة جاهزة للنسخ", "Exemples à copier", "Примеры для копирования", "Ejemplos para copiar"),
      paragraphs: [
        loc("The negative tests that actually catch IDOR: replay one tenant's id as another and expect a deny, driven by a role × verb matrix where the 403s are first-class, not an afterthought.", "真正能抓到越权(IDOR)的负向测试:把一个租户的 id 当成另一个去 replay,并期望被拒;由一张「角色 × 动词」矩阵驱动,其中 403 是一等公民,不是补充。", "الاختبارات السلبية التي تمسك IDOR فعلاً: أعد تشغيل معرّف مستأجر كمستأجر آخر وتوقّع الرفض، مدفوعة بمصفوفة دور × فعل تكون فيها الـ403 من الدرجة الأولى.", "Les tests négatifs qui attrapent vraiment l'IDOR : rejouer l'id d'un tenant en tant qu'un autre et attendre un refus, pilotés par une matrice rôle × verbe où les 403 sont de première classe.", "Негативные тесты, которые реально ловят IDOR: повторить id одного арендатора от имени другого и ждать отказа, по матрице роль × глагол, где 403 — первоклассные.", "Las pruebas negativas que de verdad cazan IDOR: reproducir el id de un tenant como otro y esperar un deny, guiadas por una matriz rol × verbo donde los 403 son de primera clase."),
      ],
      code: [
        { lang: "ts", label: "idor.spec.ts", code: "test(\"tenant B cannot read tenant A's order\", async ({ request }) => {\n  const a = await login(request, \"user-a\");            // tenant A\n  const created = await a.post(\"/api/orders\", { data: order });\n  const { id } = await created.json();\n\n  const b = await login(request, \"user-b\");            // tenant B\n  const res = await b.get(`/api/orders/${id}`);        // replay A's id as B\n  expect(res.status()).toBe(403);                       // the deny IS the test\n});" },
        { lang: "ts", label: "matrix.ts", code: "// copied from the spec, not reverse-engineered from today's UI\nexport const MATRIX = [\n  { role: \"viewer\",       verb: \"GET\",    path: \"/api/orders/:id\", expect: 200 },\n  { role: \"viewer\",       verb: \"DELETE\", path: \"/api/orders/:id\", expect: 403 },\n  { role: \"editor\",       verb: \"PATCH\",  path: \"/api/orders/:id\", expect: 200 },\n  { role: \"other-tenant\", verb: \"GET\",    path: \"/api/orders/:id\", expect: 403 },\n  { role: \"anon\",         verb: \"GET\",    path: \"/api/orders/:id\", expect: 401 },\n];\n// every deny row is a test; a suite of only 200s is how IDOR passes review" },
      ],
    },
  ],
};
