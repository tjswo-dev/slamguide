import { Category, Country, LangCode } from "@/types";

export const COUNTRIES: Country[] = [
  { code: "US", label: "미국", flag: "🇺🇸" },
  { code: "SEA", label: "동남아", flag: "🌏" },
  { code: "CN", label: "중국", flag: "🇨🇳" },
  { code: "JP", label: "일본", flag: "🇯🇵" },
  { code: "KR", label: "한국", flag: "🇰🇷" },
  { code: "EU", label: "유럽", flag: "🇪🇺" },
];

// 국가 코드 → 검색 언어 매핑
export const COUNTRY_LANG_MAP: Record<string, LangCode[]> = {
  US:  ["en"],
  EU:  ["en"],
  SEA: ["en"],
  CN:  ["zh"],
  JP:  ["ja"],
  KR:  ["ko"],
};

export const CATEGORIES: Category[] = [
  {
    id: "skincare",
    label: "스킨케어",
    subcategories: [
      {
        id: "ampoule",
        label: "앰플 / 세럼",
        keywords: {
          en: ["ampoule", "serum", "essence", "skin serum"],
          zh: ["精华液", "安瓶", "美容液", "精华"],
          ja: ["美容液", "アンプル", "セラム", "エッセンス"],
          ko: ["앰플", "세럼", "에센스", "피부 앰플"],
        },
      },
      {
        id: "toner",
        label: "토너 / 스킨",
        keywords: {
          en: ["toner", "face toner", "skin toner", "softener"],
          zh: ["化妆水", "爽肤水", "柔肤水", "收缩毛孔"],
          ja: ["化粧水", "トナー", "スキンケア化粧水"],
          ko: ["토너", "스킨", "화장수", "토닝"],
        },
      },
      {
        id: "lotion",
        label: "로션 / 에멀전",
        keywords: {
          en: ["lotion", "emulsion", "face lotion", "moisturizing lotion"],
          zh: ["乳液", "保湿乳", "润肤乳", "面部乳液"],
          ja: ["乳液", "エマルジョン", "ローション", "保湿乳液"],
          ko: ["로션", "에멀전", "수분로션", "보습로션"],
        },
      },
      {
        id: "cream",
        label: "크림",
        keywords: {
          en: ["face cream", "moisturizer", "barrier cream", "skin cream"],
          zh: ["面霜", "保湿霜", "修护霜", "乳霜"],
          ja: ["クリーム", "フェイスクリーム", "保湿クリーム", "スキンクリーム"],
          ko: ["크림", "수분크림", "보습크림", "페이스크림"],
        },
      },
      {
        id: "eye_cream",
        label: "아이크림",
        keywords: {
          en: ["eye cream", "under eye cream", "eye serum", "dark circle"],
          zh: ["眼霜", "眼部精华", "去黑眼圈", "眼部护理"],
          ja: ["アイクリーム", "目元クリーム", "アイセラム", "目のくま"],
          ko: ["아이크림", "눈가크림", "다크서클", "눈주름"],
        },
      },
      {
        id: "sunscreen",
        label: "선크림 / SPF",
        keywords: {
          en: ["sunscreen", "SPF", "UV protection", "sun cream"],
          zh: ["防晒霜", "防晒乳", "SPF", "隔离霜"],
          ja: ["日焼け止め", "サンスクリーン", "SPF", "UVケア"],
          ko: ["선크림", "자외선차단제", "SPF", "선스크린"],
        },
      },
      {
        id: "sheet_mask",
        label: "시트마스크",
        keywords: {
          en: ["sheet mask", "face mask", "skin mask", "K-beauty mask"],
          zh: ["面膜", "贴片面膜", "补水面膜", "美白面膜"],
          ja: ["シートマスク", "フェイスマスク", "パック", "シートパック"],
          ko: ["시트마스크", "마스크팩", "페이스마스크", "보습마스크"],
        },
      },
      {
        id: "sleep_pack",
        label: "수면팩 / 클레이마스크",
        keywords: {
          en: ["sleeping mask", "overnight mask", "clay mask", "peel-off mask"],
          zh: ["睡眠面膜", "泥膜", "清洁面膜", "去角质面膜"],
          ja: ["スリーピングマスク", "泥パック", "クレイマスク", "ピールオフ"],
          ko: ["수면팩", "슬리핑마스크", "클레이마스크", "필오프"],
        },
      },
      {
        id: "cleansing",
        label: "클렌징",
        keywords: {
          en: ["cleansing oil", "foam cleanser", "micellar water", "makeup remover"],
          zh: ["卸妆油", "洗面奶", "卸妆水", "温和洁面"],
          ja: ["クレンジングオイル", "洗顔フォーム", "メイク落とし", "クレンジング"],
          ko: ["클렌징오일", "폼클렌저", "클렌징워터", "메이크업리무버"],
        },
      },
    ],
  },
  {
    id: "scalp_hair",
    label: "두피 / 헤어케어",
    subcategories: [
      {
        id: "scalp_ampoule",
        label: "두피 앰플 / 에센스",
        keywords: {
          en: ["scalp serum", "scalp ampoule", "hair growth serum", "scalp treatment"],
          zh: ["头皮精华", "头皮安瓶", "生发精华", "头皮护理"],
          ja: ["スカルプ美容液", "頭皮セラム", "育毛エッセンス", "スカルプケア"],
          ko: ["두피앰플", "두피에센스", "두피세럼", "두피케어"],
        },
      },
      {
        id: "hair_loss",
        label: "탈모케어",
        keywords: {
          en: ["hair loss", "hair thinning", "anti-hairfall", "hair regrowth"],
          zh: ["脱发", "防脱发", "生发", "护发止脱"],
          ja: ["抜け毛", "薄毛ケア", "育毛", "脱毛防止"],
          ko: ["탈모", "탈모케어", "발모", "모발강화"],
        },
      },
      {
        id: "shampoo",
        label: "샴푸",
        keywords: {
          en: ["shampoo", "scalp shampoo", "clarifying shampoo", "hair care shampoo"],
          zh: ["洗发水", "去屑洗发", "护发洗发水", "头皮洗发"],
          ja: ["シャンプー", "スカルプシャンプー", "ヘアケアシャンプー"],
          ko: ["샴푸", "두피샴푸", "모발샴푸", "클렌징샴푸"],
        },
      },
      {
        id: "conditioner",
        label: "컨디셔너 / 트리트먼트",
        keywords: {
          en: ["conditioner", "hair mask", "hair treatment", "deep conditioner"],
          zh: ["护发素", "发膜", "护发治疗", "滋养发膜"],
          ja: ["コンディショナー", "ヘアマスク", "トリートメント", "ヘアパック"],
          ko: ["컨디셔너", "헤어마스크", "트리트먼트", "헤어팩"],
        },
      },
      {
        id: "hair_oil",
        label: "헤어오일 / 미스트",
        keywords: {
          en: ["hair oil", "hair mist", "shine serum", "hair gloss"],
          zh: ["发油", "护发精油", "头发喷雾", "护发油"],
          ja: ["ヘアオイル", "ヘアミスト", "ヘアセラム", "アウトバストリートメント"],
          ko: ["헤어오일", "헤어미스트", "헤어세럼", "아웃바스트리트먼트"],
        },
      },
    ],
  },
  {
    id: "body",
    label: "바디케어",
    subcategories: [
      {
        id: "body_lotion",
        label: "바디로션 / 크림",
        keywords: {
          en: ["body lotion", "body cream", "body moisturizer", "skin lotion"],
          zh: ["身体乳", "保湿身体乳", "润体乳", "身体霜"],
          ja: ["ボディローション", "ボディクリーム", "ボディミルク", "保湿ローション"],
          ko: ["바디로션", "바디크림", "보습로션", "바디보습"],
        },
      },
      {
        id: "body_oil",
        label: "바디오일",
        keywords: {
          en: ["body oil", "dry oil", "body glow oil", "skin oil"],
          zh: ["身体精油", "护肤油", "滋养精油", "光泽身体油"],
          ja: ["ボディオイル", "ドライオイル", "ボディグロウ", "スキンオイル"],
          ko: ["바디오일", "드라이오일", "바디글로우", "피부오일"],
        },
      },
      {
        id: "body_scrub",
        label: "바디스크럽",
        keywords: {
          en: ["body scrub", "exfoliator", "sugar scrub", "body exfoliant"],
          zh: ["磨砂膏", "身体去角质", "沐浴磨砂", "去死皮"],
          ja: ["ボディスクラブ", "エクスフォリエーター", "スクラブ", "角質ケア"],
          ko: ["바디스크럽", "각질제거", "스크럽", "바디필링"],
        },
      },
      {
        id: "body_wash",
        label: "바디워시",
        keywords: {
          en: ["body wash", "shower gel", "bath gel", "cleansing body wash"],
          zh: ["沐浴露", "沐浴啫喱", "洗澡乳", "香氛沐浴"],
          ja: ["ボディウォッシュ", "シャワージェル", "ボディソープ", "沐浴料"],
          ko: ["바디워시", "샤워젤", "바디클렌저", "바디솝"],
        },
      },
      {
        id: "hand_cream",
        label: "핸드크림",
        keywords: {
          en: ["hand cream", "hand lotion", "hand moisturizer", "nail cream"],
          zh: ["护手霜", "手部乳液", "滋润护手", "手霜"],
          ja: ["ハンドクリーム", "ハンドローション", "ネイルケア", "手の保湿"],
          ko: ["핸드크림", "핸드로션", "손크림", "네일크림"],
        },
      },
    ],
  },
  {
    id: "makeup_base",
    label: "메이크업 - 베이스",
    subcategories: [
      {
        id: "cushion",
        label: "쿠션 / 파운데이션",
        keywords: {
          en: ["cushion foundation", "foundation", "BB cushion", "full coverage foundation"],
          zh: ["气垫", "粉底", "气垫BB", "遮瑕粉底"],
          ja: ["クッションファンデ", "ファンデーション", "クッションBB", "リキッドファンデ"],
          ko: ["쿠션", "파운데이션", "쿠션팩트", "리퀴드파운데이션"],
        },
      },
      {
        id: "bb_cc",
        label: "비비 / CC크림",
        keywords: {
          en: ["BB cream", "CC cream", "tinted moisturizer", "skin tint"],
          zh: ["BB霜", "CC霜", "素颜霜", "裸妆霜"],
          ja: ["BBクリーム", "CCクリーム", "スキンティント", "素肌感"],
          ko: ["비비크림", "CC크림", "스킨틴트", "톤업크림"],
        },
      },
      {
        id: "primer",
        label: "프라이머",
        keywords: {
          en: ["primer", "pore primer", "makeup primer", "skin primer"],
          zh: ["妆前乳", "毛孔隔离", "妆前底", "隔离霜"],
          ja: ["プライマー", "化粧下地", "毛穴プライマー", "メイクベース"],
          ko: ["프라이머", "모공프라이머", "메이크업베이스", "화장전처리"],
        },
      },
      {
        id: "concealer",
        label: "컨실러",
        keywords: {
          en: ["concealer", "color corrector", "under eye concealer", "full coverage concealer"],
          zh: ["遮瑕膏", "遮瑕液", "眼部遮瑕", "全遮瑕"],
          ja: ["コンシーラー", "カラーコレクター", "目元コンシーラー", "スティックコンシーラー"],
          ko: ["컨실러", "커버컨실러", "다크서클컨실러", "스틱컨실러"],
        },
      },
      {
        id: "setting",
        label: "세팅 / 파우더",
        keywords: {
          en: ["setting powder", "loose powder", "translucent powder", "baking powder"],
          zh: ["散粉", "定妆粉", "蜜粉", "无瑕散粉"],
          ja: ["セッティングパウダー", "ルースパウダー", "フィックスパウダー", "仕上げパウダー"],
          ko: ["세팅파우더", "루스파우더", "픽싱파우더", "고정파우더"],
        },
      },
    ],
  },
  {
    id: "makeup_point",
    label: "메이크업 - 포인트",
    subcategories: [
      {
        id: "lip",
        label: "립 (틴트 / 립스틱)",
        keywords: {
          en: ["lip tint", "lipstick", "lip gloss", "lip liner"],
          zh: ["口红", "唇釉", "唇彩", "唇膏"],
          ja: ["リップ", "口紅", "リップティント", "リップグロス"],
          ko: ["립틴트", "립스틱", "립글로스", "립라이너"],
        },
      },
      {
        id: "eyeshadow",
        label: "아이섀도우",
        keywords: {
          en: ["eyeshadow", "eye shadow palette", "glitter eyeshadow", "smoky eye"],
          zh: ["眼影", "眼影盘", "闪片眼影", "烟熏妆"],
          ja: ["アイシャドウ", "アイシャドウパレット", "グリッターアイ", "スモーキーアイ"],
          ko: ["아이섀도우", "아이섀도우팔레트", "글리터섀도우", "스모키"],
        },
      },
      {
        id: "eyeliner",
        label: "아이라이너",
        keywords: {
          en: ["eyeliner", "liquid eyeliner", "gel eyeliner", "wing liner"],
          zh: ["眼线笔", "眼线液", "眼线膏", "卧蚕线"],
          ja: ["アイライナー", "リキッドアイライナー", "ジェルアイライナー", "インサイドライン"],
          ko: ["아이라이너", "리퀴드라이너", "젤라이너", "눈밑라이너"],
        },
      },
      {
        id: "mascara",
        label: "마스카라",
        keywords: {
          en: ["mascara", "volumizing mascara", "lengthening mascara", "waterproof mascara"],
          zh: ["睫毛膏", "增密睫毛膏", "拉长睫毛", "防水睫毛膏"],
          ja: ["マスカラ", "ボリュームマスカラ", "ロングマスカラ", "ウォータープルーフ"],
          ko: ["마스카라", "볼륨마스카라", "롱래쉬마스카라", "워터프루프마스카라"],
        },
      },
      {
        id: "blush",
        label: "블러셔 / 하이라이터",
        keywords: {
          en: ["blush", "highlighter", "bronzer", "cheek tint"],
          zh: ["腮红", "高光", "修容", "脸颊染色"],
          ja: ["チーク", "ハイライター", "ブロンザー", "チークティント"],
          ko: ["블러셔", "하이라이터", "치크", "브론저"],
        },
      },
    ],
  },
  {
    id: "fragrance",
    label: "향수 / 미스트",
    subcategories: [
      {
        id: "perfume",
        label: "향수",
        keywords: {
          en: ["perfume", "fragrance", "eau de parfum", "cologne"],
          zh: ["香水", "淡香水", "浓香水", "古龙水"],
          ja: ["香水", "パフューム", "オードパルファン", "コロン"],
          ko: ["향수", "퍼퓸", "오드퍼퓸", "코롱"],
        },
      },
      {
        id: "body_mist",
        label: "바디 / 헤어 미스트",
        keywords: {
          en: ["body mist", "hair perfume", "body spray", "fragrance mist"],
          zh: ["香体喷雾", "身体喷雾", "头发香水", "清香喷雾"],
          ja: ["ボディミスト", "ヘアパフューム", "ボディスプレー", "フレグランスミスト"],
          ko: ["바디미스트", "헤어퍼퓸", "바디스프레이", "향기미스트"],
        },
      },
    ],
  },
];

// 두피/헤어케어 — 카테고리 전체 공통 대표 영상 (실제 TikTok 공식 embed)
const SCALP_HAIR_VIDEOS = [
  {
    id: "1",
    title: "scalp anti-aging routine that actually works 🧖‍♀️✨",
    channel: "@jasminnlily_",
    username: "jasminnlily_",
    views: "—",
    likes: "—",
    tiktokId: "7629019993669127446",
    videoUrl: "https://www.tiktok.com/@jasminnlily_/video/7629019993669127446",
  },
  {
    id: "2",
    title: "my scalp anti-aging secret 💆‍♀️",
    channel: "@theneelajolenee",
    username: "theneelajolenee",
    views: "—",
    likes: "—",
    tiktokId: "7649860932830629150",
    videoUrl: "https://www.tiktok.com/@theneelajolenee/video/7649860932830629150",
  },
  {
    id: "3",
    title: "scalp care routine you need to try 🌿",
    channel: "@whatislada",
    username: "whatislada",
    views: "—",
    likes: "—",
    tiktokId: "7653109924385410325",
    videoUrl: "https://www.tiktok.com/@whatislada/video/7653109924385410325",
  },
];

export const MOCK_VIDEOS_BY_CATEGORY: Record<string, Array<{
  id: string;
  title: string;
  channel: string;
  views: string;
  likes: string;
  tiktokId: string;
}>> = {
  ampoule: [
    { id: "1", title: "POV: I used this Korean ampoule every night for 30 days 🫧", channel: "@glowwithsera", views: "8.2M", likes: "612K", tiktokId: "mock1" },
    { id: "2", title: "the serum that literally changed my skin texture 😭✨ #kbeauty #skincare", channel: "@chloeskincarediary", views: "4.7M", likes: "389K", tiktokId: "mock2" },
    { id: "3", title: "dermatologist reacts: is this ampoule worth the hype?? #skincaretips", channel: "@dr.skin.tiktok", views: "3.1M", likes: "241K", tiktokId: "mock3" },
  ],
  eye_cream: [
    { id: "1", title: "i put eye cream under my eyes for 2 weeks and… 👁️ #antiaging", channel: "@beautybyjenny", views: "6.4M", likes: "501K", tiktokId: "mock1" },
    { id: "2", title: "dark circles are GONE?? 😱 this eye cream actually works #skincare", channel: "@glowup.routine", views: "3.9M", likes: "298K", tiktokId: "mock2" },
    { id: "3", title: "rating every eye cream i've tried this year (brutal honesty) 👀", channel: "@skincareranker", views: "2.8M", likes: "187K", tiktokId: "mock3" },
  ],
  // 두피/헤어케어 전체 서브카테고리 → 동일 대표 영상
  scalp_hair:    SCALP_HAIR_VIDEOS,
  scalp_ampoule: SCALP_HAIR_VIDEOS,
  hair_loss:     SCALP_HAIR_VIDEOS,
  shampoo:       SCALP_HAIR_VIDEOS,
  conditioner:   SCALP_HAIR_VIDEOS,
  hair_oil:      SCALP_HAIR_VIDEOS,
  toner: [
    { id: "1", title: "this toner changed my entire skin routine 💧 #kbeauty #toner", channel: "@skincareobsessed", views: "5.1M", likes: "412K", tiktokId: "mock1" },
    { id: "2", title: "glass skin routine: toner method that actually works ✨", channel: "@glassskingoal", views: "7.3M", likes: "561K", tiktokId: "mock2" },
    { id: "3", title: "i tested 8 toners in 8 days — here's the winner 🏆", channel: "@beautytestreport", views: "2.9M", likes: "198K", tiktokId: "mock3" },
  ],
  cream: [
    { id: "1", title: "this moisturizer gave me the glass skin i always wanted 😭✨", channel: "@glowskinroutine", views: "9.8M", likes: "752K", tiktokId: "mock1" },
    { id: "2", title: "barrier cream review: my dry skin is GONE after 1 week 🙌", channel: "@dryskinclub", views: "4.4M", likes: "321K", tiktokId: "mock2" },
    { id: "3", title: "dermatologist's fav drugstore moisturizers of 2024 #skincaretips", channel: "@dr.skin.tiktok", views: "6.1M", likes: "489K", tiktokId: "mock3" },
  ],
  default: [
    { id: "1", title: "kbeauty routine that went viral for a reason 🇰🇷✨ #skincare", channel: "@kbeautyobsessed", views: "12.5M", likes: "934K", tiktokId: "mock1" },
    { id: "2", title: "i tested 10 beauty products so you don't have to 😅 #beautyreview", channel: "@honestybeauty", views: "6.8M", likes: "521K", tiktokId: "mock2" },
    { id: "3", title: "does the viral skincare product actually work? brutal review 👀", channel: "@skincaretruth", views: "4.2M", likes: "318K", tiktokId: "mock3" },
  ],
};

export const DEFAULT_SELLING_POINTS = [
  "탄력 강화",
  "주름 개선",
  "24시간 보습",
  "미백 효과",
  "모공 관리",
  "피부 장벽 강화",
  "항산화",
  "진정 효과",
];

/** 선택된 국가들을 기반으로 언어 목록 추출 (중복 제거) */
export function getLangsFromCountries(countryCodes: string[]): LangCode[] {
  const langs = new Set<LangCode>();
  for (const code of countryCodes) {
    for (const lang of COUNTRY_LANG_MAP[code] ?? ["en"]) {
      langs.add(lang);
    }
  }
  return Array.from(langs);
}

/** 국가에 맞는 키워드만 추출 */
export function getKeywordsForCountries(
  keywords: Record<LangCode, string[]>,
  countryCodes: string[]
): string[] {
  const langs = getLangsFromCountries(countryCodes);
  const result: string[] = [];
  for (const lang of langs) {
    result.push(...(keywords[lang] ?? []));
  }
  return result;
}
