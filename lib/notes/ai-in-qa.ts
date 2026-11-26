import { CAT, MIN, loc, type Note } from "./shared";

export const aiInQa: Note = {
  slug: "ai-in-qa",
  title: loc(
    "Where AI actually helps in QA",
    "AI 在 QA 中到底能帮上什么",
    "أين يساعد الذكاء الاصطناعي فعلاً في ضمان الجودة",
    "Où l'IA aide vraiment en QA",
    "Где ИИ действительно помогает в QA",
    "Dónde ayuda realmente la IA en QA",
  ),
  date: "2026-06-21",
  readingTime: MIN(13),
  category: CAT.ai,
  excerpt: loc(
    "The generator will happily assert 200 on an endpoint that never existed. AI multiplies the first draft; judgment stays with people. The workflow I shipped makes that visible: generate, score out of 100, export only what clears 90.",
    "生成器会很乐意给一个根本不存在的接口写预期 200。AI 放大初稿,判断留给人。我做出来的流程把这点做可见:生成、百分制打分,只有过 90 的才导出。",
    "المولّد سيؤكّد 200 على مسار لم يوجد قط. الذكاء الاصطناعي يضاعف المسودة؛ الحكم للبشر. سير العمل الذي شحنته يُظهر ذلك: ولّد، قيّم من 100، صدّر فقط ما يتجاوز 90.",
    "Le générateur affirmera un 200 sur un endpoint qui n'a jamais existé. L'IA multiplie le premier jet ; le jugement reste humain. Le flux que j'ai livré le rend visible : générer, noter sur 100, n'exporter que ce qui passe 90.",
    "Генератор с радостью поставит 200 на эндпоинт, которого не было. ИИ умножает черновик; суждение у людей. Процесс, который я выкатил, это показывает: сгенерировать, оценить из 100, экспортировать только то, что взяло 90.",
    "El generador afirmará un 200 en un endpoint que nunca existió. La IA multiplica el primer borrador; el juicio se queda en personas. El flujo que envié lo hace visible: generar, puntuar sobre 100, exportar solo lo que supera 90.",
  ),
  body: [
    {
      heading: loc(
        "The case that named a route we do not have",
        "那条写了我们根本没有的路由的用例",
        "الحالة التي سمّت مساراً لا نملكه",
        "Le cas qui a nommé une route que nous n'avons pas",
        "Кейс, который назвал маршрут, которого у нас нет",
        "El caso que nombró una ruta que no tenemos",
      ),
      paragraphs: [
        loc(
          "I fed the generator a login-flow PDF. It returned a tidy suite: preconditions, steps, expected results, priority. One case said `POST /api/v2/auth/refresh` should return 200 and a new cookie. We have never had `/api/v2/auth/refresh`. The draft was internally consistent — every step followed from the last — and completely untrue. That is the failure mode I built the scored review for. Coverage, logic, and clarity; default bar 90 out of 100; QA, dev, and product all mark it. Under 90 does not export to Excel, Markdown, or XMind. “Clean it up later” does not happen.",
          "我把一份登录流程 PDF 丢进生成器。它吐出一套整齐的用例:前置、步骤、预期、优先级。有一条写 `POST /api/v2/auth/refresh` 应返回 200 和新 cookie。我们从来没有 `/api/v2/auth/refresh`。初稿内部自洽——每一步都从上一步来——而且完全不是真的。所以才做量化评审。覆盖、逻辑、清晰度;默认 90/100;QA、研发、产品都打。不到 90 不导出 Excel、Markdown、XMind。「以后再洗」不会来。",
          "أسقطت PDF تدفق دخول في المولّد. أعاد مجموعة مرتّبة. حالة قالت إن `POST /api/v2/auth/refresh` يعيد 200 وكوكياً جديداً. لم يكن لدينا هذا المسار قط. المسودة متسقة داخلياً وغير صحيحة. لذلك بُنيت المراجعة المُقيَّمة. الحدّ 90 من 100. تحت 90 لا يُصدَّر.",
          "J'ai jeté un PDF de login dans le générateur. Suite propre. Un cas : `POST /api/v2/auth/refresh` → 200 et un nouveau cookie. Cette route n'a jamais existé. Le jet était cohérent et faux. D'où la revue notée. Seuil 90/100. En dessous : pas d'export Excel, Markdown, XMind.",
          "Закинул в генератор PDF логина. Аккуратный набор. Кейс: `POST /api/v2/auth/refresh` вернёт 200 и новую cookie. Такого маршрута у нас не было. Черновик внутренне связный и ложный. Поэтому оценочное ревью. Порог 90/100. Ниже — без Excel, Markdown, XMind.",
          "Eché un PDF de login al generador. Suite ordenada. Un caso: `POST /api/v2/auth/refresh` debe devolver 200 y una cookie nueva. Esa ruta nunca existió. El borrador era coherente y falso. Por eso la revisión puntuada. Umbral 90/100. Por debajo no se exporta a Excel, Markdown ni XMind.",
        ),
      ],
    },
    {
      heading: loc(
        "Draft is a multiplier, not a replacement",
        "初稿是乘数,不是替身",
        "المسودة مضاعف لا بديل",
        "Le brouillon est un multiplicateur, pas un remplaçant",
        "Черновик — множитель, не замена",
        "El borrador es un multiplicador, no un reemplazo",
      ),
      paragraphs: [
        loc(
          "Reading a requirement — PDF, screenshot, or a short spec — and producing structured cases is work models do well, especially on volume: extra boundaries, extra locales, the boring sibling of a happy path. Deciding coverage, residual risk, and what we will not test this release stays with people. Relay, the workflow I run as one engineer, makes that split a rule: the lead dispatches, it does not write cases; the generator drafts; I score. If that split is not explicit, the suite becomes whatever the model felt like listing.",
          "读需求——PDF、截图、短文档——写成结构化用例,模型做得好,尤其是在量上:多几条边界、多几个语言、快乐路径旁边那些乏味的兄弟。覆盖度、剩余风险、这次发版不测什么,留给人。我一个人跑的 relay 把这层分工写成规则:主管只调度,不写用例;生成器出初稿;我打分。分工若不写明,套件就会变成模型当时想列什么就列什么。",
          "قراءة متطلب وإنتاج حالات منظّمة عمل تجيده النماذج بالحجم. تقرير التغطية والمخاطر يبقى للبشر. relay يجعل هذا الانقسام قاعدة: المشرف يوزّع ولا يكتب؛ المولّد يصوغ؛ أنا أقيّم.",
          "Lire une exigence et produire des cas structurés, les modèles le font bien en volume. Couverture et risque résiduel : aux humains. relay en fait une règle : le lead dispatch, n'écrit pas ; le générateur jette ; je note.",
          "Прочитать требование и выдать структурированные кейсы модели делают хорошо в объёме. Покрытие и остаточный риск — людям. relay делает раскол правилом: руководитель распределяет, не пишет; генератор черновит; я оцениваю.",
          "Leer un requisito y producir casos estructurados los modelos lo hacen bien en volumen. Cobertura y riesgo residual: personas. relay convierte esa división en regla: el lead reparte, no escribe; el generador borra; yo puntúo.",
        ),
      ],
    },
    {
      heading: loc(
        "Score it, or you are trusting blindly",
        "要打分,否则就是盲目信任",
        "قيّمه وإلا فأنت تثق عمياء",
        "Notez, ou vous croyez aveuglément",
        "Оцени, иначе веришь вслепую",
        "Puntúalo, o estás confiando a ciegas",
      ),
      paragraphs: [
        loc(
          "The rubric on the generator is not a vibe: coverage against the requirement, internal logic (no step contradicts another), executability (a stranger can run it), clarity, security and permission gaps. I write the bar next to the product — 90/100 — so “good enough” cannot drift per reviewer. Low scores go back into the model with the failing dimension named. They do not enter the suite to be cleaned later.",
          "生成器上的量规不是感觉:相对需求的覆盖、内部逻辑(步骤不自相矛盾)、可执行性(陌生人能跑)、清晰度、安全和权限缺口。门槛写在产品旁边——90/100——免得「够好了」跟着评审人漂。低分打回去,并写明挂在哪一维。不进套件「以后再洗」。",
          "المقياس على المولّد ليس إحساساً: التغطية والمنطق وقابلية التنفيذ والوضوح وفجوات الأمن. الحدّ 90/100 بجانب المنتج. الدرجات المنخفضة تعود باسم البُعد الراسب.",
          "La rubrique n'est pas une impression : couverture, logique, exécutabilité, clarté, trous sécu. Barre 90/100 à côté du produit. Les bas scores retournent avec la dimension en échec.",
          "Рубрика не ощущение: покрытие, логика, исполнимость, ясность, дыры в безопасности. Порог 90/100 рядом с продуктом. Низкие оценки возвращаются с названным провальным измерением.",
          "La rúbrica no es una sensación: cobertura, lógica, ejecutabilidad, claridad, huecos de seguridad. Umbral 90/100 junto al producto. Las notas bajas vuelven con la dimensión que falló.",
        ),
      ],
      bullets: [
        loc(
          "Typical misses on review: no logged-out path, no expired token, no empty state, no second tenant, no idempotent retry, happy-path-only data, an expected status on a route that is not in the spec. If those are absent, the draft is not a suite yet.",
          "评审时盯的漏项:没有未登录路径、没有过期 token、没有空态、没有第二租户、没有幂等重试、数据只有快乐路径、给规格里不存在的路由写了预期状态。这些没有,初稿还不能叫套件。",
          "نواقص المراجعة: لا مسار بلا دخول، لا رمز منتهٍ، لا حالة فارغة، لا مستأجر ثانٍ، لا إعادة محاولة متكافئة، حالة متوقّعة على مسار ليس في المواصفة.",
          "Trous en revue : pas de chemin déconnecté, pas de token expiré, pas d'état vide, pas de second tenant, pas de retry idempotent, un statut attendu sur une route absente de la spec.",
          "Дыры на ревью: нет пути без логина, нет истекшего токена, нет пустого состояния, нет второго тенанта, нет идемпотентного ретрая, ожидаемый статус на маршруте не из спецификации.",
          "Huecos en revisión: no hay camino sin sesión, ni token caducado, ni vacío, ni segundo tenant, ni reintento idempotente, un estado esperado en una ruta que no está en la spec.",
        ),
      ],
    },
    {
      heading: loc(
        "The generator does not grade its own suite",
        "生成器不能给自己的套件打分",
        "المولّد لا يقيّم مجموعته",
        "Le générateur ne note pas sa propre suite",
        "Генератор не оценивает свой набор",
        "El generador no puntúa su propia suite",
      ),
      paragraphs: [
        loc(
          "Every expected result is hostile until it traces to a sentence in the requirement or an existing automated oracle. If the model wrote the case, a person or an independent script checks the assertion. A generated case without a requirement ID is an orphan. I keep requirement → case → automation → last result on one line, including the model and prompt version that drafted it. When production breaks I want to know whether we never generated the case, we generated it and failed the review, or we shipped it and the oracle was wrong.",
          "每条预期都当敌意的,直到能追溯到需求里的一句话或已有自动化预言。用例是模型写的,断言就要由人或另一套独立脚本检查。没有需求 ID 的生成用例是孤儿。需求 → 用例 → 自动化 → 最近一次结果放一行,包括模型和提示词版本。生产出事时,要能分清:根本没生成、生成了但评审没过、还是发出去了但预言写错了。",
          "كل نتيجة متوقّعة عدائية حتى تُربَط بجملة متطلب أو نبوءة مؤتمتة. إن كتب النموذج الحالة يفحص التأكيد إنسان أو سكربت مستقل. حالة بلا معرّف متطلب يتيم. أبقي المتطلب → الحالة → الأتمتة → آخر نتيجة في سطر.",
          "Chaque résultat attendu est hostile jusqu'à une phrase d'exigence ou un oracle déjà là. Si le modèle a écrit le cas, une personne ou un script indépendant tient l'assertion. Sans ID d'exigence : orphelin. Exigence → cas → automation → dernier résultat sur une ligne.",
          "Каждое ожидаемое враждебно, пока не трассируется к требованию или авто-оракулу. Кейс написала модель — assert проверяет человек или независимый скрипт. Без ID требования — сирота. Требование → кейс → автоматизация → последний результат в одной строке.",
          "Cada esperado es hostil hasta trazarlo a una frase del requisito o a un oráculo ya automatizado. Si el modelo escribió el caso, una persona o un script independiente mira el assert. Sin ID de requisito: huérfano. Requisito → caso → automatización → último resultado en una línea.",
        ),
      ],
    },
    {
      heading: loc(
        "What I still write by hand",
        "哪些我仍然手写",
        "ما أكتبه بعد بيدي",
        "Ce que j'écris encore à la main",
        "Что я по-прежнему пишу руками",
        "Qué sigo escribiendo a mano",
      ),
      paragraphs: [
        loc(
          "I do not let a model be the first author on money movement, permission matrices, migrations, or incident regressions — including the iPhone 11 blank page and the dead nav taps. Those cases are few, expensive when wrong, and already have a human story. AI can propose extra boundaries around them. It does not get to invent the oracle. Used this way, it buys back the hours that used to go into typing the obvious cases, and spends them on review, risk, and the tests that actually fail in production. Used the other way, it produces a large green suite that has never seen a deny, and has never opened the product on the phone you claim to support.",
          "资金流动、权限矩阵、迁移、事故回归——包括 iPhone 11 白屏和导航点不动——我不让模型当第一作者。这些用例少、写错代价大、已经有人的故事。AI 可以在旁边提额外边界,但不能发明预言。这么用,买回打显式用例的小时,花在评审、风险、生产上真会挂的测试。反过来用,它会产出一大套从没见过拒绝、也从没在你声称支持的手机上打开过产品的绿灯套件。",
          "لا أدع نموذجاً يكون المؤلف الأول لحركة المال ومصفوفات الصلاحية والترحيلات وارتدادات الحوادث — بما فيها شاشة الآيفون 11 الفارغة. ما زال له أن يقترح حدوداً. لا يخترع النبوءة. على النحو الآخر ينتج مجموعة خضراء كبيرة لم تر رفضاً ولم تُفتح على الهاتف الذي ندّعي دعمه.",
          "Pas de modèle en premier auteur sur l'argent, les matrices de permissions, les migrations, les régressions d'incident — y compris l'écran blanc iPhone 11. L'IA propose des bornes. Elle n'invente pas l'oracle. Dans l'autre sens : une grande suite verte qui n'a jamais vu un deny, ni ouvert le produit sur le téléphone qu'on dit supporter.",
          "Не отдаю модели первое авторство на деньгах, матрицах прав, миграциях и регрессах инцидентов — включая белый iPhone 11. ИИ может предложить границы. Оракул не выдумывает. Иначе — большой зелёный набор без единого deny, ни разу не открывший продукт на заявленном телефоне.",
          "No dejo que un modelo sea el primer autor en dinero, matrices de permisos, migraciones o regresiones de incidente — incluida la pantalla en blanco del iPhone 11. La IA puede proponer límites. No inventa el oráculo. Al revés: una suite verde enorme que nunca vio un deny ni abrió el producto en el teléfono que decimos soportar.",
        ),
      ],
    },
  ],
};
