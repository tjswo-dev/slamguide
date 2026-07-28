import { Category, Country } from "@/types";

export const COUNTRIES: Country[] = [
  { code: "US", label: "미국", flag: "🇺🇸" },
  { code: "SEA", label: "동남아", flag: "🌏" },
  { code: "CN", label: "중국", flag: "🇨🇳" },
  { code: "JP", label: "일본", flag: "🇯🇵" },
  { code: "KR", label: "한국", flag: "🇰🇷" },
  { code: "EU", label: "유럽", flag: "🇪🇺" },
];

export const CATEGORIES: Category[] = [
  {
    id: "skincare",
    label: "스킨케어",
    subcategories: [
      { id: "ampoule", label: "앰플 / 세럼" },
      { id: "toner", label: "토너 / 스킨" },
      { id: "lotion", label: "로션 / 에멀전" },
      { id: "cream", label: "크림" },
      { id: "eye_cream", label: "아이크림" },
      { id: "sunscreen", label: "선크림 / SPF" },
      { id: "mask_pack", label: "마스크팩" },
      { id: "cleansing", label: "클렌징" },
    ],
  },
  {
    id: "scalp_hair",
    label: "두피 / 헤어케어",
    subcategories: [
      { id: "scalp_ampoule", label: "두피 앰플 / 에센스" },
      { id: "hair_loss", label: "탈모케어" },
      { id: "shampoo", label: "샴푸" },
      { id: "conditioner", label: "컨디셔너 / 트리트먼트" },
      { id: "hair_oil", label: "헤어오일 / 미스트" },
    ],
  },
  {
    id: "body",
    label: "바디케어",
    subcategories: [
      { id: "body_lotion", label: "바디로션 / 크림" },
      { id: "body_oil", label: "바디오일" },
      { id: "body_scrub", label: "바디스크럽" },
      { id: "body_wash", label: "바디워시" },
      { id: "hand_cream", label: "핸드크림" },
    ],
  },
  {
    id: "makeup_base",
    label: "메이크업 - 베이스",
    subcategories: [
      { id: "cushion", label: "쿠션 / 파운데이션" },
      { id: "bb_cc", label: "비비 / CC크림" },
      { id: "primer", label: "프라이머" },
      { id: "concealer", label: "컨실러" },
      { id: "setting", label: "세팅 / 파우더" },
    ],
  },
  {
    id: "makeup_point",
    label: "메이크업 - 포인트",
    subcategories: [
      { id: "lip", label: "립 (틴트 / 립스틱)" },
      { id: "eyeshadow", label: "아이섀도우" },
      { id: "eyeliner", label: "아이라이너" },
      { id: "mascara", label: "마스카라" },
      { id: "blush", label: "블러셔 / 하이라이터" },
    ],
  },
  {
    id: "fragrance",
    label: "향수 / 미스트",
    subcategories: [
      { id: "perfume", label: "향수" },
      { id: "body_mist", label: "바디 / 헤어 미스트" },
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
  mask_pack: [
    { id: "1", title: "this sheet mask gave me glass skin overnight 🫧✨ #kbeauty #maskskin", channel: "@glowskinroutine", views: "7.1M", likes: "548K", tiktokId: "mock1" },
    { id: "2", title: "clay mask + sleeping mask combo that actually works 😭🙌 #skincare", channel: "@chloeskincarediary", views: "4.2M", likes: "312K", tiktokId: "mock2" },
    { id: "3", title: "i tried every k-beauty mask pack so you don't have to 👀 #kbeautyreview", channel: "@skincareranker", views: "3.5M", likes: "261K", tiktokId: "mock3" },
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
