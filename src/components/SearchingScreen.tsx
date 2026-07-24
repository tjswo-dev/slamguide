"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { ms: 0,    icon: "🔌", text: "TikTok에 접속하는 중..." },
  { ms: 1200, icon: "🔍", text: "키워드로 영상 검색 중..." },
  { ms: 2600, icon: "📊", text: "상위 영상 데이터 수집 중..." },
  { ms: 4000, icon: "❤️", text: "조회수 · 좋아요 분석 중..." },
  { ms: 5400, icon: "🎬", text: "영상 콘텐츠 패턴 분석 중..." },
  { ms: 6800, icon: "✅", text: "대표 영상 3개 선별 완료!" },
];

const TOTAL_MS = 8000;

type Props = {
  keywords: string[];
  countries: string[];
  onDone: () => void;
};

export default function SearchingScreen({ keywords, countries, onDone }: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // 단계별 텍스트 전환
    const timers: ReturnType<typeof setTimeout>[] = [];
    STEPS.forEach((step, i) => {
      timers.push(setTimeout(() => setActiveStep(i), step.ms));
    });

    // 가짜 영상 카운터 (2~5초 사이에 1→2→3 증가)
    timers.push(setTimeout(() => setVideoCount(1), 2800));
    timers.push(setTimeout(() => setVideoCount(2), 4400));
    timers.push(setTimeout(() => setVideoCount(3), 5800));

    // 완료 후 콜백
    timers.push(
      setTimeout(() => {
        setDone(true);
        setTimeout(onDone, 700); // 완료 표시 잠깐 보여주고 전환
      }, TOTAL_MS)
    );

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  // 프로그레스바 — requestAnimationFrame으로 부드럽게
  useEffect(() => {
    const start = Date.now();
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / TOTAL_MS) * 100, 100);
      setProgress(pct);
      if (elapsed < TOTAL_MS) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-950 flex flex-col items-center justify-center transition-opacity duration-500 ${
        done ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* TikTok 로고 스피너 */}
      <div className="relative mb-10">
        <div className="w-20 h-20 rounded-full border-4 border-gray-800 border-t-violet-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          ♪
        </div>
      </div>

      {/* 검색 조건 태그 */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-sm">
        {countries.map((c) => (
          <span key={c} className="px-2.5 py-1 rounded-full text-xs bg-gray-800 text-gray-400 border border-gray-700">
            {c}
          </span>
        ))}
        {keywords.slice(0, 4).map((kw) => (
          <span key={kw} className="px-2.5 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300 border border-violet-500/40">
            {kw}
          </span>
        ))}
      </div>

      {/* 단계 목록 */}
      <div className="w-full max-w-xs space-y-2.5 mb-8">
        {STEPS.map((step, i) => {
          const isActive = i === activeStep;
          const isDone = i < activeStep || (i === activeStep && done);
          const isPending = i > activeStep;
          return (
            <div
              key={i}
              className={`flex items-center gap-3 transition-all duration-300 ${
                isPending ? "opacity-25" : "opacity-100"
              }`}
            >
              {/* 상태 아이콘 */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-all ${
                  isDone
                    ? "bg-violet-500 text-white"
                    : isActive
                    ? "bg-gray-700 animate-pulse"
                    : "bg-gray-800"
                }`}
              >
                {isDone ? "✓" : step.icon}
              </div>

              {/* 텍스트 */}
              <span
                className={`text-sm font-medium transition-colors ${
                  isDone
                    ? "text-violet-400"
                    : isActive
                    ? "text-white"
                    : "text-gray-600"
                }`}
              >
                {step.text}
              </span>

              {/* 현재 단계 점 애니메이션 */}
              {isActive && !done && (
                <span className="ml-auto flex gap-0.5">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-1 h-1 rounded-full bg-violet-400 animate-bounce"
                      style={{ animationDelay: `${d * 150}ms` }}
                    />
                  ))}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* 가짜 영상 발견 카운터 */}
      <div className="mb-6 h-7 flex items-center">
        {videoCount > 0 && (
          <p className="text-sm text-gray-400 animate-fade-in">
            <span className="text-violet-400 font-bold text-lg">{videoCount}</span>
            <span className="text-gray-500">개 영상 발견</span>
          </p>
        )}
      </div>

      {/* 프로그레스 바 */}
      <div className="w-72 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-600 to-pink-500 rounded-full transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-600 mt-2">{Math.round(progress)}%</p>
    </div>
  );
}
