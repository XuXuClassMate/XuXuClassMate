import { CAT, MIN, loc, type Note } from "./shared";

export const disposableTestDatabases: Note = {
  slug: "disposable-test-databases",
  title: loc(
    "Disposable test databases with Docker",
    "用 Docker 打造用完即弃的测试数据库",
    "قواعد بيانات اختبار قابلة للتخلّص مع Docker",
    "Des bases de test jetables avec Docker",
    "Одноразовые тестовые базы данных с Docker",
    "Bases de datos de prueba desechables con Docker",
  ),
  date: "2026-08-02",
  readingTime: MIN(13),
  category: CAT.infra,
  excerpt: loc(
    "The fastest way to kill a test environment is one shared schema. I package Dameng, Highgo, Kingbase, and TiDB so a run is `docker pull` + seed + throw away — not a Friday argument about who migrated staging.",
    "毁掉测试环境最快的方式,就是共用一份 schema。我把达梦、Highgo、人大金仓、TiDB 打成镜像:一次运行就是 pull、种子、扔掉——而不是周五吵谁在 staging 跑了迁移。",
    "أسرع قتل لبيئة اختبار مخطط مشترك. أغلف Dameng وHighgo وKingbase وTiDB حتى يكون التشغيل سحباً وبذرة ورميّاً — لا جدال جمعة عمّن رحّل staging.",
    "Le plus vite pour tuer un env de test : un schéma partagé. J'emballe Dameng, Highgo, Kingbase, TiDB : pull, seed, jeter — pas une dispute vendredi sur qui a migré le staging.",
    "Быстрее всего убить тестовую среду — общая схема. Пакую Dameng, Highgo, Kingbase, TiDB: pull, сид, выбросить — не пятничный спор, кто накатил миграцию на staging.",
    "Lo más rápido para matar un entorno de prueba es un esquema compartido. Empaqueto Dameng, Highgo, Kingbase y TiDB: pull, semilla, tirar — no una pelea el viernes sobre quién migró staging.",
  ),
  body: [
    {
      heading: loc(
        "“Who touched staging?” is a flake report",
        "「谁动了 staging?」就是一份不稳定报告",
        "«من لمس staging؟» تقرير تذبذب",
        "« Qui a touché au staging ? » est un rapport d'instabilité",
        "«Кто трогал staging?» — отчёт о флаке",
        "“¿Quién tocó staging?” es un informe de flake",
      ),
      paragraphs: [
        loc(
          "Two testers, one staging schema, and every unique constraint becomes a race. Tests fail because a SKU already exists, a tenant flag drifted, or someone applied a Dameng migration by hand at 2 a.m. because the vendor client took the afternoon to install. That is not product flake. That is environment coupling, and it trains the team to ignore red. The Docker suite exists because I got tired of that conversation.",
          "两个人测,一份 staging schema,所有唯一约束都变成竞态。失败是因为 SKU 已存在、租户开关被人拨过、或者有人凌晨两点手跑了达梦迁移——厂商客户端装一下午。这不是产品不稳定,是环境和用例耦在一起,会训练团队无视红灯。Docker 套件就是我烦了这场对话之后做的。",
          "مختبران، مخطط staging واحد، فيصير كل قيد فريد سباقاً. تفشل الاختبارات لأن SKU موجود أو انحرف علم أو طُبّق ترحيل Dameng يدوياً لأن عميل البائع أخذ بعد الظهر. هذا اقتران بيئة. حزمة Docker وُجدت لأنّي سئمت ذلك الحوار.",
          "Deux testeurs, un schéma, chaque unique devient une course. Ça rougit parce qu'un SKU existe, qu'un flag a dérivé, ou qu'une migration Dameng a été appliquée à 2 h — le client vendeur a pris l'après-midi. Couplage d'environnement. La suite Docker existe parce que j'en avais assez de cette conversation.",
          "Два тестировщика, одна схема — unique становится гонкой. Краснеет, потому что SKU уже есть, флаг уехал, или миграцию Dameng накатили в 2 ночи: клиент вендора ставился полдня. Связка со средой. Docker-набор появился, потому что этот разговор меня достал.",
          "Dos testers, un esquema, cada unique es una carrera. Falla porque el SKU existe, un flag se desvió o alguien aplicó una migración Dameng a las 2 a.m. — el cliente del vendor se llevó la tarde. Acoplamiento de entorno. La suite Docker existe porque me cansé de esa conversación.",
        ),
      ],
    },
    {
      heading: loc(
        "Seed is a fixture, versioned with the schema",
        "种子是夹具,和 schema 一起版本化",
        "البذرة تثبيت مع المخطط",
        "Le seed est une fixture, versionnée avec le schéma",
        "Сид — фикстура со схемой",
        "La semilla es un fixture con el esquema",
      ),
      paragraphs: [
        loc(
          "An empty database is not a test environment. The seed I ship has to cover the matrix I actually run: two tenants, an admin, a read-only user, a row the other tenant must never see, and one dirty-but-valid edge (expired token, leftover cart). It lives next to migrations. If the schema moves and the seed does not, CI fails closed — not a silent empty run.",
          "空库不是测试环境。我发出去的种子要覆盖我真正跑的矩阵:两个租户、一个管理员、一个只读、一条另一租户绝不该看见的数据、一个脏但合法的边(过期 token、残留购物车)。和迁移放一起。schema 动了种子没动,CI 直接失败,不默默空转。",
          "قاعدة فارغة ليست بيئة. البذرة تغطي المصفوفة التي أشغّلها: مستأجران، مدير، قراءة فقط، صف لا يراه الآخر، حافة قذرة صالحة. بجانب الترحيلات. تحرّك المخطط دون البذرة: CI تفشل مغلقة.",
          "Une base vide n'est pas un env. Le seed couvre la matrice que je joue vraiment : deux tenants, admin, lecture seule, une ligne interdite à l'autre, un bord sale mais valide. À côté des migrations. Schéma bougé, seed non : CI fermée.",
          "Пустая база — не среда. Сид покрывает матрицу, которую я реально гоняю: два тенанта, админ, read-only, строка для другого запрещена, грязная-но-валидная кромка. Рядом с миграциями. Схема уехала, сид нет — CI падает закрыто.",
          "Una base vacía no es un entorno. La semilla cubre la matriz que de verdad corro: dos tenants, admin, solo lectura, una fila que el otro no debe ver, un borde sucio-pero-válido. Junto a las migraciones. Si el esquema se mueve y la semilla no, CI falla cerrado.",
        ),
        loc(
          "A production dump is not a seed. It carries PII, it is huge, and it is not deterministic. I sample shapes from production (how many line items, how wide a JSON blob) and rebuild them as fixtures. Dameng, Highgo, Kingbase, and TiDB each get the same shape with the type quirks written down — JSON, sequences, `varchar` vs `nvarchar` — as expected differences, not Friday incidents.",
          "生产 dump 不是种子。带着 PII、体积大、还不确定。我会从生产采样形状(一行多少明细、JSON 有多宽),再做成夹具。达梦、Highgo、人大金仓、TiDB 同一种子形状,类型差异写下来——JSON、序列、`varchar` 对 `nvarchar`——当预期,不当周五事故。",
          "تفريغ الإنتاج ليس بذرة. بيانات شخصية وضخم وغير حتمي. أعيّن الأشكال من الإنتاج وأعيد بناءها. Dameng وHighgo وKingbase وTiDB تحصل على الشكل نفسه مع فروق الأنواع مكتوبة كمتوقّع.",
          "Un dump prod n'est pas un seed. PII, énorme, non déterministe. Je prélève des formes et je reconstruis. Dameng, Highgo, Kingbase, TiDB : même forme, écarts de types écrits comme attendus.",
          "Дамп прода — не сид. PII, огромный, недетерминированный. Сэмплирую формы и собираю фикстуры. Dameng, Highgo, Kingbase, TiDB — та же форма, расхождения типов как ожидаемые.",
          "Un dump de prod no es semilla. PII, enorme, no determinista. Muestreo formas y reconstruyo. Dameng, Highgo, Kingbase, TiDB: misma forma, diferencias de tipos escritas como esperadas.",
        ),
      ],
    },
    {
      heading: loc(
        "Ready, not sleep 30",
        "就绪探测,不要 sleep 30",
        "جاهز لا نوم 30",
        "Ready, pas un sleep 30",
        "Ready, не sleep 30",
        "Ready, no un sleep 30",
      ),
      paragraphs: [
        loc(
          "A container that “started” is not accepting connections. Vendor engines are worse: Dameng in particular will listen, then still reject a client until the seed job finishes. I wait on a real probe: `SELECT 1`, migrations table at the expected version, sometimes a `/ready` that only flips after seed. `sleep 30` passes on a fast laptop and fails in CI when the image is cold. That flake gets blamed on Playwright. It was the database.",
          "容器「启动了」不等于在接受连接。厂商库更甚:达梦经常已经在听端口,种子没跑完客户端照样被拒。我等真正的探针:`SELECT 1`、migrations 到预期版本、有时是种子跑完才翻绿的 `/ready`。`sleep 30` 在快笔记本上能过,镜像冷启动的 CI 上就挂。这不稳定会被怪到 Playwright 头上,其实是数据库。",
          "حاوية «بدأت» لا تقبل الاتصالات. محرّكات البائع أسوأ: Dameng يستمع ثم يرفض حتى تنتهي البذرة. أنتظر `SELECT 1` وجدول الترحيلات وأحياناً `/ready`. `sleep 30` ينجح على حاسوب سريع ويفشل في CI الباردة. يُلام Playwright. كانت القاعدة.",
          "Un conteneur “démarré” n'accepte pas encore. Les moteurs vendeur sont pires : Dameng écoute puis refuse tant que le seed n'a pas fini. Sonde réelle : `SELECT 1`, version de migrations, parfois `/ready`. `sleep 30` passe sur un laptop, échoue en CI à froid. On blâme Playwright. C'était la base.",
          "Контейнер «запустился» ещё не принимает. Вендорские движки хуже: Dameng уже слушает, но отвергает клиент, пока сид не закончился. Зонд: `SELECT 1`, версия миграций, иногда `/ready`. `sleep 30` проходит на ноуте и падает в холодной CI. Винят Playwright. Виновата база.",
          "Un contenedor que “arrancó” no acepta conexiones. Los motores de vendor son peores: Dameng escucha y luego rechaza hasta que termina la semilla. Sonda real: `SELECT 1`, versión de migraciones, a veces `/ready`. `sleep 30` pasa en el portátil y falla en CI en frío. Culpan a Playwright. Era la base.",
        ),
      ],
    },
    {
      heading: loc(
        "The engine matrix is the QA matrix",
        "引擎矩阵就是 QA 矩阵",
        "مصفوفة المحرّك مصفوفة ضمان جودة",
        "La matrice de moteurs est la matrice QA",
        "Матрица движков — матрица QA",
        "La matriz de motores es la matriz QA",
      ),
      paragraphs: [
        loc(
          "“It works on Postgres” is not a release statement if customers run Dameng, Highgo, Kingbase, or TiDB. Each engine is a compatibility row: same migrations, same seed shape, known differences written down. Ready images exist so a new person does not spend a day installing a vendor client. The public images on Docker Hub are the contract: pull, run, seed, throw away.",
          "客户在达梦、Highgo、人大金仓或 TiDB 上跑,「Postgres 上能过」就不是发版结论。每个引擎是兼容性矩阵里的一行:同一套迁移、同一种子形状,已知差异写下来。现成镜像是为了让新人不用花一天装厂商客户端。Docker Hub 上的公开镜像就是合同:拉取、运行、种子、扔掉。",
          "«يعمل على Postgres» ليس بيان إصدار إن كان العملاء على Dameng أو Highgo أو Kingbase أو TiDB. كل محرّك صف توافق. الصور الجاهزة حتى لا يقضي وافد يوماً في عميل البائع. صور Docker Hub هي العقد.",
          "« Ça marche sur Postgres » n'est pas une phrase de release si les clients tournent Dameng, Highgo, Kingbase, TiDB. Chaque moteur est une ligne. Les images prêtes évitent un jour sur le client vendeur. Les images publiques sur Docker Hub sont le contrat.",
          "«На Postgres работает» — не релиз, если у клиентов Dameng, Highgo, Kingbase, TiDB. Каждый движок — строка. Готовые образы — чтобы новичок не ставил клиент целый день. Публичные образы на Docker Hub — контракт.",
          "“Funciona en Postgres” no es frase de release si los clientes corren Dameng, Highgo, Kingbase o TiDB. Cada motor es una fila. Las imágenes listas evitan un día instalando el cliente del vendor. Las públicas en Docker Hub son el contrato.",
        ),
      ],
      bullets: [
        loc(
          "Before I call an image test-ready: tagged version, healthcheck, seed checksum, documented ports, and a one-line `docker run` in the README that a stranger can paste.",
          "叫「测试可用」之前:有版本标签、healthcheck、种子校验和、写清端口、README 里一行陌生人能粘贴的 `docker run`。",
          "قبل أن أسمّي صورة جاهزة: إصدار موسوم، فحص صحة، مجموع تحقق للبذرة، منافذ، و`docker run` بسطر يلصقه غريب.",
          "Test-ready : version taguée, healthcheck, checksum du seed, ports, `docker run` d'une ligne qu'un inconnu peut coller.",
          "Test-ready: тег, healthcheck, checksum сида, порты, однострочный `docker run` в README.",
          "Test-ready: versión con tag, healthcheck, checksum de la semilla, puertos y un `docker run` de una línea que un extraño pueda pegar.",
        ),
      ],
    },
    {
      heading: loc(
        "CI is drop-in, and it always tears down",
        "CI 即插即用,而且一定拆掉",
        "CI قابل للإدراج ويُفكّك دائماً",
        "La CI est drop-in, et elle démonte toujours",
        "CI вставляется как есть и всегда разбирается",
        "CI es drop-in y siempre desmonta",
      ),
      paragraphs: [
        loc(
          "Fixed ports are fine on a laptop. In CI I prefer ephemeral ports injected as env, so two jobs on one runner do not fight — even if the published images default to fixed ports for the “paste this” story. The finally block always `docker rm -f`. Leftover volumes fill Friday's disk and make Monday's suite look random. If the image is slow to pull, cache it. If seed takes 40 seconds, that is a published budget, not a surprise in the Playwright report. The environment must not be why a build is red.",
          "笔记本上固定端口没问题。CI 里我更想要临时端口当环境变量打进去,免得同一跑手上两个 job 抢——即便公开镜像为了「粘贴就能跑」默认固定端口。finally 里一定 `docker rm -f`。残留 volume 会让周五磁盘满、周一的套件看起来像随机失败。镜像拉得慢就缓存。种子要 40 秒,那是公开预算,不是 Playwright 报告里的意外。构建变红不该是因为环境。",
          "المنافذ الثابتة للحاسوب. في CI أفضل منافذ زائلة. finally دائماً `docker rm -f`. إن بَطؤ السحب فخزّن. إن استغرقت البذرة 40 ثانية فتلك ميزانية منشورة. يجب ألا تكون البيئة سبب الاحمرار.",
          "Ports fixes pour le laptop. En CI : ports éphémères. Le finally fait `docker rm -f`. Image lente : cache. Seed à 40 s : budget publié. L'environnement ne doit pas rougir le build.",
          "Фиксированные порты — для ноута. В CI — эфемерные. В finally всегда `docker rm -f`. Образ медленный — кэш. Сид 40 с — опубликованный бюджет. Среда не должна красить сборку.",
          "Puertos fijos en el portátil. En CI, efímeros. El finally siempre hace `docker rm -f`. Si la imagen tarda, caché. Si la semilla tarda 40 s, presupuesto publicado. El entorno no debe poner rojo el build.",
        ),
      ],
    },
  ],
};
