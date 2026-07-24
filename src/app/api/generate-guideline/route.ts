import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const { productName, sellingPoints, country, category, subcategory, videoTitles } =
    await req.json();

  const prompt = `당신은 뷰티 브랜드의 숏폼 콘텐츠 전략가입니다.
아래 정보를 바탕으로 TikTok 60초 숏폼 영상 콘텐츠 가이드라인을 JSON으로 작성해주세요.

**제품 정보**
- 제품명: ${productName}
- 핵심 소구점: ${sellingPoints.join(", ")}
- 타겟 국가: ${country}
- 카테고리: ${category} > ${subcategory}

**벤치마크 영상 제목 (참고)**
${videoTitles.map((t: string, i: number) => `${i + 1}. ${t}`).join("\n")}

**출력 형식 (JSON만 출력, 설명 없음)**
{
  "sections": [
    {
      "timeRange": "0 – 5초",
      "title": "후킹",
      "script": "...",
      "shotTips": ["...", "...", "..."],
      "captionTip": "..."
    },
    {
      "timeRange": "5 – 15초",
      "title": "제품 소개",
      "script": "...",
      "shotTips": ["...", "...", "..."],
      "captionTip": "..."
    },
    {
      "timeRange": "15 – 40초",
      "title": "사용 과정",
      "script": "...",
      "shotTips": ["...", "...", "..."],
      "captionTip": "..."
    },
    {
      "timeRange": "40 – 55초",
      "title": "효과 / 결과",
      "script": "...",
      "shotTips": ["...", "...", "..."],
      "captionTip": "..."
    },
    {
      "timeRange": "55 – 60초",
      "title": "CTA",
      "script": "...",
      "shotTips": ["...", "...", "..."],
      "captionTip": "..."
    }
  ]
}

**지침**
- 스크립트는 실제 크리에이터가 말하는 자연스러운 구어체로 작성 (타겟 국가 언어 감안)
- 각 섹션은 연결이 자연스럽게
- 촬영 팁은 구체적이고 실행 가능하게 (카메라 앵글, 조명, 동작 포함)
- 자막 팁은 시각적 임팩트를 위한 텍스트 스타일/이모지 포함
- 소구점(${sellingPoints.join(", ")})이 자연스럽게 녹아들도록`;

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "JSON 파싱 실패" }, { status: 500 });
    }
    const data = JSON.parse(jsonMatch[0]);
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "가이드라인 생성 실패" }, { status: 500 });
  }
}
