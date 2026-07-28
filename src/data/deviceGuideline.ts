import { Guideline } from "@/types";

export const DEVICE_GUIDELINE: Guideline = {
  productName: "EOA 디바이스",
  country: "🇺🇸 미국",
  category: "스킨케어",
  subcategory: "디바이스",
  sections: [
    {
      timeRange: "0 – 3초",
      title: "훅 — 노출 훔치기",
      imageUrl: "/device-hook.png",
      script:
        "Everyone's obsessed with the Medicube Booster Pro. But before you buy — let me show you what you're actually paying for.",
      shotTips: [
        "메디큐브 부스터프로 + EOA 디바이스를 나란히 든 클로즈업 — 보라색 EOA를 오른쪽에 강조",
        "메디큐브를 먼저 크게 보여준 뒤 EOA로 시선 전환 — 검색 유입을 끌어오는 구간",
        "#medicube #boosterpro 해시태그 필수 삽입",
        "텍스트 오버레이: 'Before you buy this…' → EOA 클로즈업으로 전환",
      ],
      captionTip:
        "'Everyone's obsessed with Medicube' → EOA 보라색 강조 컷 전환. #medicube #boosterpro 태그 필수",
    },
    {
      timeRange: "3 – 9초",
      title: "브릿지 — 공통점 인정",
      imageUrl: "/device-bridge.png",
      script:
        "Both use EMS — those tiny electric pulses that help your serum actually sink in instead of sitting on top. Both feel amazing. So what's the real difference?",
      shotTips: [
        "두 기기를 얼굴에 각각 대는 병렬 컷 — 좌: 메디큐브, 우: EOA",
        "메디큐브를 깎아내리지 말 것 — 공통점을 인정하는 담백한 톤 유지",
        "EMS가 뭔지 한 줄 그래픽으로 설명 — 초보 시청자도 이해할 수 있게",
        "텍스트 오버레이: 'EMS = absorption boost' 간단하게",
      ],
      captionTip:
        "'Both use EMS' 공통점 자막 → 'So what's the real difference?' 질문으로 궁금증 유발",
    },
    {
      timeRange: "9 – 18초",
      title: "설명 ① — EMS의 한계",
      imageUrl: "/device-ems.png",
      script:
        "Here's the thing. EMS mostly works on the surface — it boosts absorption. But it doesn't do much for firmness or lifting. That's where most devices stop.",
      shotTips: [
        "서럼 흡수 애니메이션 또는 그래픽 삽입 — 'EMS = surface only' 시각화",
        "텍스트 오버레이: 'EMS = absorption only' 크게",
        "메디큐브의 약점을 '비방'이 아니라 '기술의 한계'로 설명 — 톤이 핵심",
        "차분하고 교육적인 말투 — 설득하는 느낌이 아닌 정보 전달 톤",
      ],
      captionTip:
        "'EMS = absorption. That's it.' 강조 자막 — 단정적이고 심플하게",
    },
    {
      timeRange: "18 – 28초",
      title: "설명 ② — EOA의 차별 기술",
      imageUrl: "/device-rf.png",
      script:
        "EOA adds RF and HIFU-style energy. RF warms the deeper layers to support a firmer look, and the lifting energy targets your jawline and cheeks. That's the part Medicube leaves out.",
      shotTips: [
        "EOA 단독 클로즈업 — RF/HIFU 작동 부위(턱선·볼)에 대는 손 동작",
        "열·파동 그래픽 삽입 — RF는 깊은 층, 리프팅은 턱선·볼 부위 강조",
        "RF가 뭘 하는지, HIFU가 뭘 하는지 각 한 줄씩 자막으로 설명",
        "'deeper layers', 'firmer look' 등 규제 안전 표현만 사용 — '시술', '치료' 표현 금지",
      ],
      captionTip:
        "'RF + Lifting = the upgrade' 강조 자막 — EOA 차별점을 한 줄로",
    },
    {
      timeRange: "28 – 38초",
      title: "데모 — Half-Face 증거",
      imageUrl: "/device-demo.png",
      script:
        "I used it on one side only for two weeks. Look at the lift on this side versus this one.",
      shotTips: [
        "얼굴 반쪽만 EOA 사용한 Before/After 비교 — 턱선·리프팅 룩 차이 클로즈업",
        "조명·각도 반드시 통일 — Before와 After 환경 동일하게",
        "'치료', '시술' 단어 금지 — 'look', 'appearance' 표현만 사용",
        "과장 보정 없이 있는 그대로 — 미국 틱톡샵 광고 규정 준수",
      ],
      captionTip:
        "필수 법적 자막: 'Firmer-looking skin · cosmetic use only · results may vary · not medical advice'",
    },
    {
      timeRange: "38 – 45초",
      title: "클로즈 — CTA",
      imageUrl: "/device-cta.png",
      script:
        "Same daily routine. One device that does more. If you're gonna invest, invest once. Link in bio.",
      shotTips: [
        "EOA 제품샷 단독 클로즈업 + 기능 비교 텍스트 오버레이",
        "틱톡샵 어필리에이트 링크 하단 고정",
        "CTA는 짧고 강하게 — 'Link in bio' 한 줄로 마무리",
        "배경음악 볼륨 살짝 올려 에너지 있는 마무리",
      ],
      captionTip:
        "'EOA — the upgrade your routine was missing' + '→ Link in bio' 하단 CTA",
    },
  ],
};
