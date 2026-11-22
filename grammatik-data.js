window.NW_GRAMMAR = {chapters:[
{id:"ch1",n:1,title:"发音与拼读",sub:"元音长短 · 字母组合 · 重音",blocks:[
 {t:"p",x:"德语“怎么写就怎么读”，规则比英语稳定得多。先记住长音/短音和几个固定组合，后面所有单词都能自己念出来。"},
 {t:"h",x:"元音长短"},
 {t:"p",x:"长音：元音后只有一个辅音，或元音后跟 h，或双写元音（aa, ee, oo）。短音：元音后跟两个或以上辅音。"},
 {t:"table",head:["拼写","读音","例词"],rows:[
   ["a / aa / ah","长 [aː]","Tag, Saal, fahren"],
   ["a + 双辅音","短 [a]","Stadt, Mann, Klasse"],
   ["ie","长 [iː]","Liebe, vier, spielen"],
   ["i + 双辅音","短 [ɪ]","Kind, Tisch, immer"],
   ["e (词尾)","[ə]","bitte, Frage, kommen"],
   ["ä","[ɛː] / [ɛ]","Käse, Mädchen"]
 ]},
 {t:"h",x:"固定字母组合"},
 {t:"table",head:["组合","读音","例词"],rows:[
   ["ei / ai","[aɪ]","ein, zwei, Mai"],
   ["eu / äu","[ɔʏ]","neun, heute, Häuser"],
   ["au","[aʊ]","Haus, kaufen, auch"],
   ["sch","[ʃ]","Schule, Fisch, Tisch"],
   ["sp- (词首)","[ʃp]","Sport, sprechen, Spaß"],
   ["st- (词首)","[ʃt]","Stadt, Student, stehen"],
   ["ch (a/o/u 后)","[x]","Buch, Nacht, Koch"],
   ["ch (其余)","[ç]","ich, Licht, Mädchen"],
   ["z","[ts]","Zeit, Zug, zehn"],
   ["v","[f]","Vater, viel, von"],
   ["s (词首元音前)","[z]","sagen, sehen, Sonne"],
   ["ß","[s]","Straße, heißen, groß"],
   ["-er (词尾)","[ɐ]","Vater, Lehrer, Kinder"],
   ["-tion","[tsi̯oːn]","Information, Nation"]
 ]},
 {t:"h",x:"重音"},
 {t:"p",x:"本土词重音一般在第一个音节：`Árbeit`、`Léhrer`、`Múttern`。但以 `be- ver- er- ge- ent- zer-` 开头的词，重音在后面的词干上：`besUchen`、`verstEhen`、`erzÄhlen`。以 `-ieren` 结尾的词重音在 `ie`：`studIeren`、`telefOnieren`。"},
 {t:"warn",x:"`ch` 有两个音，别混：a/o/u 后面是“喝”的摩擦音（Buch），i/e/ä/ö/ü 后面是“希”的音（ich）。`ich` 不读“伊克”，`Buch` 不读“布希”。"},
 {t:"quiz",items:[
   {q:"`Straße` 中的 ß 读什么？",a:"[s]，和 ss 一样。stra-SE。"},
   {q:"`Student` 开头的 st 读什么？",a:"[ʃt]，词首 st/sp 一律读 [ʃ]。"},
   {q:"`Telefon` 和 `telefonieren` 重音在哪？",a:"TelefOn 在 o；telefonIeren 在 ie（-ieren 结尾）。"}
 ]}
]},
{id:"ch2",n:2,title:"动词现在时（规则变位）",sub:"Präsens · 词尾 -e -st -t -en -t -en",blocks:[
 {t:"p",x:"德语动词变位就是“词干 + 词尾”。以 `machen` 为例，去掉 -en 得到词干 `mach-`，再加人称词尾。"},
 {t:"table",head:["人称","词尾","machen","wohnen","arbeiten"],rows:[
   ["ich","-e","mache","wohne","arbeite"],
   ["du","-st","machst","wohnst","arbeitest"],
   ["er/sie/es","-t","macht","wohnt","arbeitet"],
   ["wir","-en","machen","wohnen","arbeiten"],
   ["ihr","-t","macht","wohnt","arbeitet"],
   ["sie/Sie","-en","machen","wohnen","arbeiten"]
 ]},
 {t:"tip",x:"`wir` 和 `sie/Sie` 的词尾都是 -en，和动词原形一样。`ihr` 和 `er/sie/es` 都是 -t，靠主语区分。"},
 {t:"h",x:"什么时候要多加一个 e"},
 {t:"p",x:"词干以 `-t`、`-d`、`-ffn`、`-chn`、`-tm` 结尾时，`du` 和 `er/sie/es`、`ihr` 要加 e，否则念不出来：`arbeiten → du arbeitest, er arbeitet, ihr arbeitet`；`finden → du findest, er findet`；`öffnen → du öffnest, er öffnet`。"},
 {t:"warn",x:"`heißen` 的 du 形式是 `du heißt`（不是 heißst）。词干本身以 ß/s 结尾时，-st 只加 -t。"},
 {t:"quiz",items:[
   {q:"wohnen → du ___",a:"wohnst"},
   {q:"arbeiten → er ___",a:"arbeitet"},
   {q:"heißen → du ___",a:"heißt"},
   {q:"kommen → ihr ___",a:"kommt"}
 ]}
]},
{id:"ch3",n:3,title:"sein 和 haben",sub:"两个最重要的不规则动词",blocks:[
 {t:"p",x:"这两个动词必须背下来，它们既是独立动词，也是构成时态的助动词。"},
 {t:"table",head:["人称","sein","haben"],rows:[
   ["ich","bin","habe"],
   ["du","bist","hast"],
   ["er/sie/es","ist","hat"],
   ["wir","sind","haben"],
   ["ihr","seid","habt"],
   ["sie/Sie","sind","haben"]
 ]},
 {t:"h",x:"sein 用来做什么"},
 {t:"ex",items:[
   {de:"Ich bin Lehrerin.",zh:"我是老师。（身份/职业）"},
   {de:"Das ist mein Bruder.",zh:"这是我哥哥。（指认）"},
   {de:"Mir ist kalt.",zh:"我觉得冷。（状态，用 Dativ 人 + sein）"},
   {de:"Es ist acht Uhr.",zh:"现在八点。（时间）"},
   {de:"Ich bin müde.",zh:"我累了。（状态）"}
 ]},
 {t:"h",x:"haben 用来做什么"},
 {t:"ex",items:[
   {de:"Ich habe einen Hund.",zh:"我有一只狗。（拥有）"},
   {de:"Hast du Zeit?",zh:"你有时间吗？"},
   {de:"Ich habe Hunger / Durst.",zh:"我饿了 / 渴了。（固定搭配，不用 sein）"},
   {de:"Ich habe die Hausaufgaben gemacht.",zh:"我把作业做完了。（构成完成时）"}
 ]},
 {t:"warn",x:"中文说“我饿了”，德语是 `Ich habe Hunger`，不是 `Ich bin Hunger`。同理 `Ich habe Angst / Zeit / Lust / Recht`。"},
 {t:"quiz",items:[
   {q:"Ich ___ 25 Jahre alt.",a:"bin（年龄用 sein）"},
   {q:"___ du Geschwister?",a:"Hast"},
   {q:"Wir ___ heute keine Zeit.",a:"haben"},
   {q:"Er ___ sehr müde.",a:"ist"}
 ]}
]},
{id:"ch4",n:4,title:"强变化动词",sub:"只有 du 和 er/sie/es 变元音",blocks:[
 {t:"p",x:"一部分常用动词在人称变位时词干元音会变（a→ä, e→i, e→ie, au→äu），但**只有 du 和 er/sie/es 变**，其他形式照常。"},
 {t:"table",head:["原形","du","er/sie/es","变化"],rows:[
   ["fahren","fährst","fährt","a → ä"],
   ["schlafen","schläfst","schläft","a → ä"],
   ["laufen","läufst","läuft","au → äu"],
   ["essen","isst","isst","e → i"],
   ["sprechen","sprichst","spricht","e → i"],
   ["nehmen","nimmst","nimmt","e → i（双写 m）"],
   ["treffen","triffst","trifft","e → i"],
   ["geben","gibst","gibt","e → i"],
   ["helfen","hilfst","hilft","e → i"],
   ["lesen","liest","liest","e → ie"],
   ["sehen","siehst","sieht","e → ie"],
   ["empfehlen","empfiehlst","empfiehlt","e → ie"]
 ]},
 {t:"tip",x:"规律：a/au 变音（加两点），e 变 i 或 ie。`wir` 和 `sie/Sie` 永远用原形词干：`wir fahren`、`sie sprechen`。"},
 {t:"warn",x:"`essen` 的 du 是 `du isst`（不是 esst，那是 ihr）；`ihr` 形式仍是 `ihr esst`。`nehmen` 的 du 是 `du nimmst`，双写 m。"},
 {t:"quiz",items:[
   {q:"fahren → du ___",a:"fährst"},
   {q:"lesen → er ___",a:"liest"},
   {q:"essen → du ___",a:"isst"},
   {q:"sprechen → sie (复数) ___",a:"sprechen（不变）"}
 ]}
]},
{id:"ch5",n:5,title:"名词的性、数与冠词",sub:"der / die / das · 复数词尾",blocks:[
 {t:"p",x:"德语每个名词都有语法性别，必须和冠词一起记：`der Tisch`、`die Frau`、`das Kind`。光记 Tisch 没用。"},
 {t:"h",x:"性别线索（只是倾向，不是铁律）"},
 {t:"table",head:["阳性 der","阴性 die","中性 das"],rows:[
   ["-er（职业/工具）：Lehrer, Computer","-ung：Wohnung, Zeitung","-chen / -lein：Mädchen, Brötchen"],
   ["-ling：Frühling, Schmetterling","-heit / -keit：Freiheit, Möglichkeit","-ment：Medikament, Dokument"],
   ["-or / -ant / -ist：Motor, Praktikant, Tourist","-schaft：Freundschaft","-um / -ma：Museum, Thema"],
   ["-ismus：Tourismus","-tion / -tät / -ik：Information, Universität, Musik","Ge- 开头：Gebäude, Gespräch"],
   ["天/月/季：Montag, Januar, Sommer","-ie：Familie, Industrie","动词不定式名词化：Essen, Lernen"]
 ]},
 {t:"h",x:"复数词尾"},
 {t:"table",head:["类型","单数","复数","说明"],rows:[
   ["-e","der Tisch","die Tische","最常见，多阳性"],
   ["-en / -n","die Frau","die Frauen","多阴性，-e 结尾加 -n"],
   ["-er","das Kind","die Kinder","多中性"],
   ["-s","das Auto","die Autos","外来词"],
   ["无词尾（可能变音）","der Lehrer","die Lehrer","-er/-en/-el 结尾"],
   ["-nen","die Lehrerin","die Lehrerinnen","阴性 -in 变 -innen"]
 ]},
 {t:"warn",x:"复数冠词永远是 `die`，没有 der/das 复数。`die Kinder` 不分性别。"},
 {t:"quiz",items:[
   {q:"die Wohnung → 复数？",a:"die Wohnungen（-ung 一律 -en）"},
   {q:"das Mädchen → 为什么是 das？",a:"-chen 结尾一律中性。"},
   {q:"der Lehrer → 复数？",a:"die Lehrer（-er 结尾，无词尾）"}
 ]}
]},
{id:"ch6",n:6,title:"冠词体系（第一格）",sub:"定冠词 · 不定冠词 · 否定冠词 · 物主冠词",blocks:[
 {t:"p",x:"第一格（Nominativ）就是“谁/什么在做动作”。四种冠词在第一格的变化如下："},
 {t:"table",head:["","阳性","阴性","中性","复数"],rows:[
   ["定冠词","der","die","das","die"],
   ["不定冠词","ein","eine","ein","—（不加）"],
   ["否定冠词","kein","keine","kein","keine"],
   ["物主（mein-）","mein","meine","mein","meine"]
 ]},
 {t:"h",x:"怎么选"},
 {t:"ex",items:[
   {de:"Das ist ein Tisch.",zh:"这是一张桌子。（第一次提到，用不定冠词）"},
   {de:"Der Tisch ist neu.",zh:"这张桌子是新的。（已知，用定冠词）"},
   {de:"Das ist kein Tisch, das ist ein Stuhl.",zh:"这不是桌子，这是椅子。（否定带不定冠词的名词）"},
   {de:"Mein Vater ist Arzt.",zh:"我父亲是医生。（物主冠词）"},
   {de:"Ich habe keine Zeit.",zh:"我没时间。（Zeit 不可数，也用 keine）"}
 ]},
 {t:"tip",x:"物主冠词词尾跟 `ein` 一样：ich→mein, du→dein, er/es→sein, sie→ihr, wir→unser, ihr→euer, sie/Sie→ihr/Ihr。注意 `euer` 遇到词尾会缩成 `eure`。"},
 {t:"warn",x:"职业前一般**不加冠词**：`Ich bin Lehrer.`（不是 ein Lehrer）。但 `Ich bin ein guter Lehrer.` 有形容词时要加。"},
 {t:"quiz",items:[
   {q:"Das ist ___ Buch. (ein, 中性)",a:"ein"},
   {q:"___ Mutter ist Lehrerin. (我的)",a:"Meine"},
   {q:"Ich habe ___ Hund. (否定)",a:"keinen（Akkusativ，第 7 章）"}
 ]}
]},
{id:"ch7",n:7,title:"第四格 Akkusativ",sub:"只有阳性会变：der → den",blocks:[
 {t:"p",x:"第四格是动作的直接承受者（宾语）。德语里**只有阳性单数**的冠词会变，阴性和中性跟第一格一样。"},
 {t:"table",head:["","阳性","阴性","中性","复数"],rows:[
   ["第一格","der / ein","die / eine","das / ein","die"],
   ["第四格","**den / einen**","die / eine","das / ein","die"]
 ]},
 {t:"table",head:["物主/否定","阳性","阴性","中性","复数"],rows:[
   ["mein-","meinen","meine","mein","meine"],
   ["kein-","keinen","keine","kein","keine"],
   ["ihr-/Ihr-","ihren","ihre","ihr","ihre"]
 ]},
 {t:"h",x:"哪些动词常带第四格"},
 {t:"p",x:"haben, brauchen, kaufen, essen, trinken, sehen, suchen, finden, lesen, nehmen, besuchen, verstehen, mögen, kennen, fragen, bezahlen, möchten。"},
 {t:"ex",items:[
   {de:"Ich habe einen Bruder.",zh:"我有一个哥哥。（der Bruder → einen）"},
   {de:"Ich kaufe ein Buch.",zh:"我买一本书。（das Buch 不变）"},
   {de:"Wir suchen die Wohnung.",zh:"我们在找那套房子。（die 不变）"},
   {de:"Siehst du den Mann?",zh:"你看见那个男人了吗？（der Mann → den）"},
   {de:"Ich brauche keinen Kaffee.",zh:"我不需要咖啡。（der Kaffee → keinen）"}
 ]},
 {t:"tip",x:"一句话记住：**只有阳性的 der/ein/kein/mein 要变，全部变成 -en**。阴性、中性、复数原样不动。"},
 {t:"quiz",items:[
   {q:"Ich habe ___ (ein) Bruder.",a:"einen"},
   {q:"Er kauft ___ (der) Computer.",a:"den"},
   {q:"Wir brauchen ___ (kein) Stuhl.",a:"keinen"},
   {q:"Ich sehe ___ (die) Frau.",a:"die（不变）"}
 ]}
]},
{id:"ch8",n:8,title:"第三格 Dativ",sub:"dem / der / dem / den (+n)",blocks:[
 {t:"p",x:"第三格是“给谁 / 对谁”。它比第四格规则整齐：阳性、中性都是 `dem`，阴性 `der`，复数 `den` 且名词加 -n。"},
 {t:"table",head:["","阳性","阴性","中性","复数"],rows:[
   ["定冠词","dem","der","dem","den (+n)"],
   ["不定冠词","einem","einer","einem","—"],
   ["否定冠词","keinem","keiner","keinem","keinen (+n)"],
   ["物主冠词","meinem","meiner","meinem","meinen (+n)"]
 ]},
 {t:"h",x:"哪些动词要第三格"},
 {t:"p",x:"helfen, danken, antworten, gefallen, gehören, passen, schmecken, gratulieren, zuhören, folgen, glauben（信任某人）。这些动词**不**带第四格。"},
 {t:"ex",items:[
   {de:"Ich helfe dem Mann.",zh:"我帮那个男人。（der → dem）"},
   {de:"Das Buch gehört meiner Schwester.",zh:"这本书是我妹妹的。（die → der）"},
   {de:"Der Mantel gefällt mir.",zh:"我喜欢这件大衣。（mir，第三格代词）"},
   {de:"Wie geht es dir?",zh:"你好吗？（dir）"},
   {de:"Ich danke den Kindern.",zh:"我谢谢孩子们。（复数加 -n）"}
 ]},
 {t:"h",x:"第三格介词"},
 {t:"p",x:"固定带第三格的介词：`aus, bei, mit, nach, seit, von, zu, gegenüber`。背成口诀：**aus-bei-mit-nach-seit-von-zu**。另外 in/an/auf 表**位置**时也用第三格（见第 17 章）。"},
 {t:"warn",x:"`helfen` 只带第三格：`Ich helfe dir`，不是 `Ich helfe dich`。同理 `Ich danke dir`、`Das passt mir`。"},
 {t:"quiz",items:[
   {q:"Ich helfe ___ (der) Mann.",a:"dem"},
   {q:"Das gehört ___ (mein) Bruder.",a:"meinem"},
   {q:"Wie geht es ___ (du)?",a:"dir"},
   {q:"Wir fahren mit ___ (der) Bus.",a:"dem（mit 永远第三格）"}
 ]}
]},
{id:"ch9",n:9,title:"人称代词三格表",sub:"ich → mich → mir",blocks:[
 {t:"table",head:["","第一格","第四格","第三格"],rows:[
   ["我","ich","mich","mir"],
   ["你","du","dich","dir"],
   ["他","er","ihn","ihm"],
   ["她","sie","sie","ihr"],
   ["它","es","es","ihm"],
   ["我们","wir","uns","uns"],
   ["你们","ihr","euch","euch"],
   ["他们/您","sie/Sie","sie/Sie","ihnen/Ihnen"]
 ]},
 {t:"ex",items:[
   {de:"Kennst du ihn?",zh:"你认识他吗？（第四格）"},
   {de:"Ich gebe ihm das Buch.",zh:"我把书给他。（第三格）"},
   {de:"Ich liebe sie.",zh:"我爱她。（第四格，和第一格同形）"},
   {de:"Kannst du mir helfen?",zh:"你能帮我吗？（第三格）"},
   {de:"Ich sehe euch.",zh:"我看见你们。（第四格）"}
 ]},
 {t:"warn",x:"`sie`（她，第四格）和 `sie`（他们，第四格）同形；但第三格不同：她 = `ihr`，他们 = `ihnen`。这是最容易错的一处。"},
 {t:"quiz",items:[
   {q:"Ich gebe ___ (er) das Buch.",a:"ihm"},
   {q:"Kennst du ___ (sie, 她)?",a:"sie"},
   {q:"Kannst du ___ (wir) helfen?",a:"uns"},
   {q:"Das ist für ___ (du).",a:"dich"}
 ]}
]},
{id:"ch10",n:10,title:"语序与疑问句",sub:"动词第二位 · Ja/Nein 问句 · W 问句",blocks:[
 {t:"p",x:"德语陈述句有一条铁律：**变位动词永远在第二位**。第一位可以是主语，也可以是时间、地点，但动词不能动。"},
 {t:"h",x:"陈述句"},
 {t:"table",head:["1","2（动词）","3","…"],rows:[
   ["Ich","fahre","morgen","nach Berlin."],
   ["Morgen","fahre","ich","nach Berlin."],
   ["Nach Berlin","fahre","ich","morgen."]
 ]},
 {t:"tip",x:"动词占第二位时，如果句首不是主语，主语就挪到动词后面 —— 这叫**倒装**。`Morgen fahre ich` 不是 `Morgen ich fahre`。"},
 {t:"h",x:"Ja/Nein 疑问句"},
 {t:"p",x:"把动词直接提到第一位，句末加问号。回答用 `Ja` / `Nein` / `Doch`。"},
 {t:"ex",items:[
   {de:"Kommst du aus China?",zh:"你来自中国吗？"},
   {de:"Hast du Zeit?",zh:"你有时间吗？"},
   {de:"Ist das dein Buch?",zh:"这是你的书吗？"},
   {de:"Nein, das ist nicht mein Buch.",zh:"不，这不是我的书。"}
 ]},
 {t:"h",x:"W 疑问句"},
 {t:"p",x:"疑问词放第一位，动词第二位。常用：`wer, was, wo, wann, warum, wie, woher, wohin, wie viel, welche`。"},
 {t:"ex",items:[
   {de:"Woher kommst du?",zh:"你从哪里来？"},
   {de:"Wohin fährst du?",zh:"你去哪里？"},
   {de:"Wie heißt du?",zh:"你叫什么名字？"},
   {de:"Wann beginnt der Kurs?",zh:"课程什么时候开始？"},
   {de:"Warum lernst du Deutsch?",zh:"你为什么学德语？"}
 ]},
 {t:"warn",x:"`wo`（在哪里，静态）和 `wohin`（去哪里，动态）必须分开：`Wo wohnst du?` 不是 `Wohin wohnst du?`。`woher` 是“从哪里来”。"},
 {t:"quiz",items:[
   {q:"Morgen ___ ich nach Hamburg. (fahren)",a:"fahre（动词第二位，主语后置）"},
   {q:"___ kommst du? — Aus China.",a:"Woher"},
   {q:"___ du Deutsch? (sprechen)",a:"Sprichst（问句动词第一位）"}
 ]}
]},
{id:"ch11",n:11,title:"命令式",sub:"du / ihr / Sie 三种对象",blocks:[
 {t:"table",head:["对象","构成","machen","arbeiten","sein"],rows:[
   ["du","词干（+e）","Mach!","Arbeite!","Sei!"],
   ["ihr","动词 ihr 形式","Macht!","Arbeitet!","Seid!"],
   ["Sie","原形 + Sie","Machen Sie!","Arbeiten Sie!","Seien Sie!"]
 ]},
 {t:"h",x:"三条要点"},
 {t:"p",x:"1) 强变化动词的 e→i/ie **保留**：`essen → Iss!`、`sprechen → Sprich!`、`nehmen → Nimm!`、`lesen → Lies!`，但 a→ä **不保留**：`fahren → Fahr!`。\n2) 词干以 -t/-d 结尾要加 e：`arbeite!`、`warte!`。\n3) 可分动词的前缀放到句末：`Steh auf!`、`Mach die Tür zu!`。"},
 {t:"ex",items:[
   {de:"Komm bitte herein!",zh:"请进来！"},
   {de:"Sprich langsamer!",zh:"说慢一点！"},
   {de:"Nehmen Sie Platz!",zh:"您请坐！"},
   {de:"Seid leise!",zh:"你们安静点！"},
   {de:"Ruf mich morgen an!",zh:"明天给我打电话！（anrufen 可分）"}
 ]},
 {t:"tip",x:"加 `bitte` 会礼貌很多：`Gib mir bitte das Buch.` 命令式不一定粗鲁，日常很常用。"},
 {t:"warn",x:"`Sie` 的命令式语序是“动词 + Sie”，不能倒过来：`Machen Sie!` ✔ / `Sie machen!` ✘。"},
 {t:"quiz",items:[
   {q:"essen → (du) ___!",a:"Iss"},
   {q:"aufstehen → (du) ___!",a:"Steh auf"},
   {q:"sein → (Sie) ___!",a:"Seien Sie"}
 ]}
]},
{id:"ch12",n:12,title:"情态动词",sub:"können · müssen · wollen · dürfen · sollen · mögen",blocks:[
 {t:"p",x:"情态动词表达“能/必须/想/可以/应该/喜欢”。它们的变位很特别：**ich 和 er/sie/es 同形，都没有词尾**。"},
 {t:"table",head:["","können","müssen","wollen","dürfen","sollen","mögen"],rows:[
   ["ich","kann","muss","will","darf","soll","mag"],
   ["du","kannst","musst","willst","darfst","sollst","magst"],
   ["er/sie/es","kann","muss","will","darf","soll","mag"],
   ["wir","können","müssen","wollen","dürfen","sollen","mögen"],
   ["ihr","könnt","müsst","wollt","dürft","sollt","mögt"],
   ["sie/Sie","können","müssen","wollen","dürfen","sollen","mögen"]
 ]},
 {t:"h",x:"句子框结构"},
 {t:"p",x:"情态动词占第二位，**实义动词的原形放到句末**，中间夹其他成分。这个结构叫“句子框（Satzklammer）”。"},
 {t:"table",head:["1","2（情态）","3","…","句末（原形）"],rows:[
   ["Ich","kann","heute","nicht","kommen."],
   ["Wir","müssen","morgen","früh","aufstehen."],
   ["Du","darfst","hier","nicht","rauchen."]
 ]},
 {t:"h",x:"语义区别"},
 {t:"ex",items:[
   {de:"Ich kann schwimmen.",zh:"我会游泳。（能力）"},
   {de:"Kann ich hier rauchen?",zh:"我可以在这里抽烟吗？（许可）"},
   {de:"Ich muss jetzt gehen.",zh:"我现在必须走了。（必要）"},
   {de:"Du darfst nicht rauchen.",zh:"你不许抽烟。（禁止）"},
   {de:"Ich will nach Berlin fahren.",zh:"我想去柏林。（强烈意愿）"},
   {de:"Du sollst mehr schlafen.",zh:"你应该多睡点。（别人的要求/建议）"},
   {de:"Ich mag Kaffee.",zh:"我喜欢咖啡。（喜好，带第四格）"}
 ]},
 {t:"tip",x:"`möchten`（想要）其实是 `mögen` 的虚拟式，但 A1 当作独立词用：`ich möchte, du möchtest, er möchte, wir möchten, ihr möchtet, sie möchten`。点餐、购物最常用。"},
 {t:"warn",x:"`müssen` 的 du 是 `musst`（一个 s），`können` 的 du 是 `kannst`（两个 n）。`ich muss` 不是 `ich müsse`。"},
 {t:"quiz",items:[
   {q:"Ich ___ heute nicht kommen. (können)",a:"kann"},
   {q:"Du ___ hier nicht rauchen. (dürfen)",a:"darfst"},
   {q:"Wir ___ früh aufstehen. (müssen)",a:"müssen"},
   {q:"Ich ___ einen Kaffee, bitte. (möchten)",a:"möchte"}
 ]}
]},
{id:"ch13",n:13,title:"可分动词",sub:"trennbare Verben",blocks:[
 {t:"p",x:"很多动词带前缀（auf-, an-, aus-, ein-, mit-, zu-, ab-, vor-, nach-, zurück-, fern-）。在现在时和过去时里，**前缀要拆下来放到句末**。"},
 {t:"ex",items:[
   {de:"Ich stehe um sieben Uhr auf.",zh:"我七点起床。（aufstehen）"},
   {de:"Wann fängt der Film an?",zh:"电影什么时候开始？（anfangen）"},
   {de:"Ruf mich bitte an!",zh:"请给我打电话！（anrufen）"},
   {de:"Ich kaufe im Supermarkt ein.",zh:"我在超市买东西。（einkaufen）"},
   {de:"Er sieht abends fern.",zh:"他晚上看电视。（fernsehen）"},
   {de:"Kommst du mit?",zh:"你一起来吗？（mitkommen）"}
 ]},
 {t:"h",x:"什么时候不拆"},
 {t:"p",x:"1) 有情态动词时，动词回句末用原形，**不拆**：`Ich muss früh aufstehen.`\n2) 完成时里也不拆：`Ich bin früh aufgestanden.`\n3) 从句里动词去句末，也不拆：`..., weil ich früh aufstehe.`"},
 {t:"table",head:["常见可分动词","意思","常见不可分前缀"],rows:[
   ["aufstehen","起床","be- (besuchen)"],
   ["anfangen","开始","ver- (verstehen)"],
   ["anrufen","打电话","er- (erzählen)"],
   ["einkaufen","购物","ge- (gefallen)"],
   ["aufmachen / zumachen","打开 / 关上","ent- (entschuldigen)"],
   ["mitkommen / mitbringen","一起来 / 带来","zer- (zerstören)"],
   ["fernsehen","看电视",""],
   ["einladen","邀请",""]
 ]},
 {t:"warn",x:"`be- ver- er- ent- ge- zer-` 开头的动词**永远不可分**，重音也不在前缀上：`besUchen`、`verstEhen`、`erzÄhlen`。"},
 {t:"quiz",items:[
   {q:"aufstehen → Ich ___ um 6 Uhr ___.",a:"stehe … auf"},
   {q:"anrufen → Ich muss dich ___.",a:"anrufen（有情态动词，不拆）"},
   {q:"einkaufen → Wann ___ du ___?",a:"kaufst … ein"}
 ]}
]},
{id:"ch14",n:14,title:"否定：nicht 与 kein",sub:"否定什么，就用哪个",blocks:[
 {t:"p",x:"`nicht` 否定**动词、形容词、副词、专有名词、带定冠词的名词**；`kein` 否定**带不定冠词或不带冠词的名词**。"},
 {t:"table",head:["要否定的","用","例句"],rows:[
   ["动词","nicht","Ich arbeite nicht."],
   ["形容词","nicht","Das ist nicht teuer."],
   ["带定冠词的名词","nicht","Das ist nicht der Chef."],
   ["带不定冠词的名词","kein-","Das ist kein Chef."],
   ["不带冠词的名词","kein-","Ich habe keine Zeit."]
 ]},
 {t:"h",x:"nicht 放哪里"},
 {t:"p",x:"一般放在**句末**，或者放在它所否定的词前面：`Ich komme heute nicht.`（否定整个动作）/ `Ich komme nicht heute, sondern morgen.`（否定时间）"},
 {t:"ex",items:[
   {de:"Ich verstehe das nicht.",zh:"我不明白这个。"},
   {de:"Das ist nicht mein Buch.",zh:"这不是我的书。"},
   {de:"Ich habe kein Auto.",zh:"我没有车。"},
   {de:"Er hat keine Zeit.",zh:"他没有时间。"},
   {de:"Das ist keine gute Idee.",zh:"这不是个好主意。"}
 ]},
 {t:"tip",x:"回答否定问句时，肯定用 `doch`：`Kommst du nicht? — Doch, ich komme.`（不，我来的）。`ja` 在这里会让人误解。"},
 {t:"quiz",items:[
   {q:"Ich habe ___ Geld. (否定)",a:"kein（Geld 无冠词）"},
   {q:"Das ist ___ mein Bruder. (否定)",a:"nicht（带物主冠词）"},
   {q:"Ich kann heute ___ kommen.",a:"nicht"}
 ]}
]},
{id:"ch15",n:15,title:"现在完成时 Perfekt",sub:"haben/sein + 第二分词",blocks:[
 {t:"p",x:"口语里说过去的事，几乎都用现在完成时：`Ich habe gegessen.` 结构是 **助动词（haben/sein）+ 第二分词（Partizip II）**，分词放句末。"},
 {t:"h",x:"第二分词怎么造"},
 {t:"table",head:["类型","规则","例子"],rows:[
   ["规则动词","ge- + 词干 + -t","machen → gemacht, kaufen → gekauft"],
   ["-ieren 结尾","无 ge-，直接 -t","studieren → studiert, telefonieren → telefoniert"],
   ["不可分前缀","无 ge-","besuchen → besucht, verstehen → verstanden"],
   ["可分动词","前缀 + ge- + 词干 + -t","aufstehen → aufgestanden, einkaufen → eingekauft"],
   ["强变化","ge- + 特殊形式","essen → gegessen, gehen → gegangen"]
 ]},
 {t:"h",x:"用 haben 还是 sein"},
 {t:"p",x:"绝大多数动词用 `haben`。用 `sein` 的只有三类：**位置移动**（gehen, fahren, fliegen, kommen, reisen）、**状态变化**（aufstehen, einschlafen, aufwachen, sterben, werden）、以及 `sein` 和 `bleiben` 本身。"},
 {t:"table",head:["常见不规则分词","",""],rows:[
   ["essen → gegessen","trinken → getrunken","sehen → gesehen"],
   ["lesen → gelesen","schreiben → geschrieben","sprechen → gesprochen"],
   ["nehmen → genommen","geben → gegeben","finden → gefunden"],
   ["fahren → gefahren","gehen → gegangen","kommen → gekommen"],
   ["fliegen → geflogen","bleiben → geblieben","sein → gewesen"],
   ["haben → gehabt","arbeiten → gearbeitet","verstehen → verstanden"]
 ]},
 {t:"ex",items:[
   {de:"Ich habe einen Kaffee getrunken.",zh:"我喝了一杯咖啡。"},
   {de:"Wir sind nach Berlin gefahren.",zh:"我们去了柏林。（fahren 用 sein）"},
   {de:"Er ist um sieben Uhr aufgestanden.",zh:"他七点起床了。"},
   {de:"Hast du schon gegessen?",zh:"你已经吃了吗？"},
   {de:"Ich habe zwei Jahre in Wien gelebt.",zh:"我在维也纳住过两年。"}
 ]},
 {t:"warn",x:"分词一定要放**句末**：`Ich habe gestern im Restaurant gegessen.` ✔ / `Ich habe gegessen gestern im Restaurant.` ✘"},
 {t:"quiz",items:[
   {q:"machen → 第二分词？",a:"gemacht"},
   {q:"studieren → 第二分词？",a:"studiert（-ieren 不加 ge-）"},
   {q:"gehen → Ich ___ nach Hause ___.",a:"bin … gegangen"},
   {q:"besuchen → 第二分词？",a:"besucht"}
 ]}
]},
{id:"ch16",n:16,title:"过去时 war / hatte",sub:"唯一必须会的两个过去式",blocks:[
 {t:"p",x:"A1 阶段只需要掌握 `sein` 和 `haben` 的过去时。其他动词说过去一律用现在完成时。"},
 {t:"table",head:["人称","sein (war)","haben (hatte)"],rows:[
   ["ich","war","hatte"],
   ["du","warst","hattest"],
   ["er/sie/es","war","hatte"],
   ["wir","waren","hatten"],
   ["ihr","wart","hattet"],
   ["sie/Sie","waren","hatten"]
 ]},
 {t:"ex",items:[
   {de:"Ich war gestern zu Hause.",zh:"我昨天在家。"},
   {de:"Wir waren in Berlin.",zh:"我们当时在柏林。"},
   {de:"Er hatte keine Zeit.",zh:"他当时没时间。"},
   {de:"Wie war der Film?",zh:"电影怎么样？"},
   {de:"Ich hatte einen Hund.",zh:"我以前养过一只狗。"}
 ]},
 {t:"tip",x:"`war` 和 `hatte` 在口语里比 `bin gewesen` / `habe gehabt` 更常用，直接背这两张表就行。"},
 {t:"quiz",items:[
   {q:"Gestern ___ ich krank.",a:"war"},
   {q:"Wir ___ keine Lust.",a:"hatten"},
   {q:"___ du schon in Wien?",a:"Warst"}
 ]}
]},
{id:"ch17",n:17,title:"介词：方位与时间",sub:"Wo? / Wohin? · am, um, im",blocks:[
 {t:"h",x:"方位介词：九大wechselpräpositionen"},
 {t:"p",x:"`in, an, auf, über, unter, vor, hinter, neben, zwischen` 这九个介词，**表示“在哪里”（Wo?）用第三格，表示“去哪里”（Wohin?）用第四格**。"},
 {t:"table",head:["","Wo?（第三格）","Wohin?（第四格）"],rows:[
   ["in","Ich bin in der Schule.","Ich gehe in die Schule."],
   ["an","Das Bild hängt an der Wand.","Ich hänge das Bild an die Wand."],
   ["auf","Das Buch liegt auf dem Tisch.","Ich lege das Buch auf den Tisch."],
   ["neben","Er sitzt neben mir.","Setz dich neben mich."],
   ["zwischen","Die Bank ist zwischen den Häusern.","Ich stelle mich zwischen die Häuser."]
 ]},
 {t:"tip",x:"记忆口诀：**静止 → 第三格，移动 → 第四格**。问 `Wo?` 答第三格，问 `Wohin?` 答第四格。"},
 {t:"h",x:"时间介词"},
 {t:"table",head:["介词","用于","例子"],rows:[
   ["um","钟点","um 8 Uhr, um halb neun"],
   ["am","星期、日期、一天中的时段","am Montag, am 3. Mai, am Abend"],
   ["im","月份、季节、年","im Januar, im Sommer, im Jahr 2024"],
   ["in","时间段内","in der Nacht, in einer Woche"],
   ["von … bis","从…到…","von 9 bis 17 Uhr"],
   ["vor / nach","之前 / 之后","vor dem Essen, nach der Arbeit"],
   ["seit","自从（持续到现在）","seit einem Jahr, seit Montag"],
   ["für","持续多久（计划）","für zwei Wochen"]
 ]},
 {t:"ex",items:[
   {de:"Der Kurs beginnt am Montag um neun Uhr.",zh:"课程周一九点开始。"},
   {de:"Im Sommer fahren wir ans Meer.",zh:"夏天我们去海边。"},
   {de:"Ich lerne seit drei Monaten Deutsch.",zh:"我学德语三个月了。"},
   {de:"Nach dem Frühstück gehe ich zur Arbeit.",zh:"早饭后我去上班。"}
 ]},
 {t:"warn",x:"`am` 只用于“天”这一级（星期、日期、Morgen/Abend），月份季节用 `im`。`am Januar` 是错的，要 `im Januar`。"},
 {t:"quiz",items:[
   {q:"___ Montag habe ich einen Termin.",a:"Am"},
   {q:"___ Sommer fahren wir nach Italien.",a:"Im"},
   {q:"Ich gehe ___ die Schule. (Wohin?)",a:"in"},
   {q:"Das Buch liegt ___ dem Tisch. (Wo?)",a:"auf"}
 ]}
]},
{id:"ch18",n:18,title:"连词与从句语序",sub:"位置0 还是动词末位",blocks:[
 {t:"p",x:"连词分两类，语序完全不同：**并列连词**不改变语序（占“第 0 位”），**从属连词**把动词赶到句末。"},
 {t:"table",head:["类型","连词","语序","例子"],rows:[
   ["并列（0 位）","und, oder, aber, denn, sondern","语序不变","Ich bin müde, aber ich arbeite weiter."],
   ["从属（动词末位）","weil, dass, wenn, ob, als, obwohl","变位动词放最后","Ich bleibe zu Hause, weil ich krank bin."]
 ]},
 {t:"h",x:"对比：denn 和 weil"},
 {t:"ex",items:[
   {de:"Ich bleibe zu Hause, denn ich bin krank.",zh:"我待在家，因为我病了。（denn + 正常语序）"},
   {de:"Ich bleibe zu Hause, weil ich krank bin.",zh:"同上，但 weil 把 bin 推到句末。"},
   {de:"Ich weiß, dass du Recht hast.",zh:"我知道你是对的。（dass + 动词末位）"},
   {de:"Wenn es regnet, bleiben wir zu Hause.",zh:"如果下雨，我们就待在家。（从句在前，主句动词紧跟逗号）"}
 ]},
 {t:"tip",x:"从句在前时，整个从句算“第一位”，所以主句动词要立刻跟上：`Wenn es regnet, **bleiben** wir zu Hause.` 这跟第 10 章的倒装是同一条规则。"},
 {t:"warn",x:"`weil` 后面不能接正常语序。`..., weil ich bin krank.` ✘ 必须 `..., weil ich krank bin.` ✔"},
 {t:"quiz",items:[
   {q:"Ich komme nicht, ___ ich keine Zeit habe.",a:"weil"},
   {q:"Ich komme nicht, ___ ich habe keine Zeit.",a:"denn"},
   {q:"Ich glaube, ___ er kommt.",a:"dass（动词末位：dass er kommt）"}
 ]}
]},
{id:"ch19",n:19,title:"比较级与最高级",sub:"-er · am -sten · als / wie",blocks:[
 {t:"table",head:["原级","比较级","最高级"],rows:[
   ["schnell","schneller","am schnellsten"],
   ["schön","schöner","am schönsten"],
   ["teuer","teurer","am teuersten"],
   ["alt","älter","am ältesten"],
   ["groß","größer","am größten"],
   ["gut","besser","am besten"],
   ["viel","mehr","am meisten"],
   ["gern","lieber","am liebsten"],
   ["hoch","höher","am höchsten"]
 ]},
 {t:"h",x:"比较：als 还是 wie"},
 {t:"p",x:"**不同**用 `als`（比…更），**相同**用 `wie`（和…一样）。"},
 {t:"ex",items:[
   {de:"Ich bin größer als mein Bruder.",zh:"我比我哥哥高。"},
   {de:"Du bist so groß wie ich.",zh:"你和我一样高。"},
   {de:"Der Zug ist schneller als das Auto.",zh:"火车比汽车快。"},
   {de:"Ich trinke lieber Tee als Kaffee.",zh:"比起咖啡我更喜欢喝茶。"},
   {de:"Das ist am besten.",zh:"这是最好的。"}
 ]},
 {t:"tip",x:"`gern – lieber – am liebsten` 是“喜欢”的三级，日常极常用。`gut – besser – am besten` 也是不规则，必须背。"},
 {t:"quiz",items:[
   {q:"gut → 比较级？",a:"besser"},
   {q:"Ich bin älter ___ du.",a:"als"},
   {q:"Er ist so alt ___ ich.",a:"wie"}
 ]}
]},
{id:"ch20",n:20,title:"数字、时间与日期",sub:"0–100 · 钟点 · 日期",blocks:[
 {t:"h",x:"数字"},
 {t:"p",x:"0 null, 1 eins, 2 zwei, 3 drei, 4 vier, 5 fünf, 6 sechs, 7 sieben, 8 acht, 9 neun, 10 zehn, 11 elf, 12 zwölf。13–19 = 个位 + zehn（dreizehn, vierzehn…，但 16 sechzehn、17 siebzehn）。20 zwanzig, 30 dreißig, 40 vierzig, 50 fünfzig…\n**21–99 是“个位 + und + 十位”，并且连写**：21 einundzwanzig、45 fünfundvierzig、99 neunundneunzig。"},
 {t:"h",x:"钟点"},
 {t:"table",head:["时间","说法","说明"],rows:[
   ["8:00","Es ist acht Uhr.","整点"],
   ["8:15","Viertel nach acht","八点一刻"],
   ["8:30","halb neun","**半点说“下一个小时”**"],
   ["8:45","Viertel vor neun","差一刻九点"],
   ["8:10","zehn nach acht","八点过十分"],
   ["8:50","zehn vor neun","差十分九点"],
   ["14:30","vierzehn Uhr dreißig","官方/交通用 24 小时制"]
 ]},
 {t:"warn",x:"`halb neun` 是 **8:30**，不是 9:30！德语“半点”指向即将到来的整点，这是中文母语者最常错的一处。"},
 {t:"h",x:"日期"},
 {t:"p",x:"问日期：`Der Wievielte ist heute?` 答：`Heute ist der dritte Mai.` 写：`3. Mai`。序数词 1. erste, 2. zweite, 3. dritte, 4. vierte, 5. fünfte, 6. sechste, 7. siebte, 8. achte。"},
 {t:"ex",items:[
   {de:"Wie viel Uhr ist es? — Es ist halb acht.",zh:"几点了？——七点半。"},
   {de:"Der Termin ist am Dienstag um Viertel nach zehn.",zh:"预约在周二十点一刻。"},
   {de:"Ich bin am 3. Mai geboren.",zh:"我出生在五月三日。"},
   {de:"Wann fährt der Zug? — Um vierzehn Uhr zwanzig.",zh:"火车什么时候开？——14:20。"}
 ]},
 {t:"quiz",items:[
   {q:"8:30 用德语怎么说？",a:"halb neun"},
   {q:"21 怎么写？",a:"einundzwanzig"},
   {q:"8:45 怎么说？",a:"Viertel vor neun"}
 ]}
]}
]};