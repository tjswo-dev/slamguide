"use client";

import { Guideline } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Copy, RotateCcw, ImagePlus, Check } from "lucide-react";
import { useState } from "react";

const SECTION_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  "0 – 5초":  { bg: "bg-red-500",    border: "border-red-500",    text: "text-red-400" },
  "5 – 15초": { bg: "bg-orange-500", border: "border-orange-500", text: "text-orange-400" },
  "15 – 40초":{ bg: "bg-blue-500",   border: "border-blue-500",   text: "text-blue-400" },
  "40 – 55초":{ bg: "bg-emerald-500",border: "border-emerald-500",text: "text-emerald-400" },
  "55 – 60초":{ bg: "bg-violet-500", border: "border-violet-500", text: "text-violet-400" },
};

type Props = {
  guideline: Guideline;
  productImageUrl: string | null;
  onReset: () => void;
};

export default function GuidelineStep({ guideline, productImageUrl, onReset }: Props) {
  const [copied, setCopied] = useState(false);
  const [sectionImages, setSectionImages] = useState<Record<number, string>>({});

  const handleCopy = () => {
    const text = guideline.sections
      .map(
        (s) =>
          `[${s.timeRange}] ${s.title}\n스크립트: ${s.script}\n촬영 팁: ${s.shotTips.join(", ")}\n자막 팁: ${s.captionTip}`
      )
      .join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSectionImage = (idx: number, file: File) => {
    setSectionImages((prev) => ({ ...prev, [idx]: URL.createObjectURL(file) }));
  };

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">{guideline.productName}</h2>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <Badge className="text-xs bg-gray-800 text-gray-400 border border-gray-700">{guideline.country}</Badge>
            <Badge className="text-xs bg-gray-800 text-gray-400 border border-gray-700">{guideline.category}</Badge>
            <Badge className="text-xs bg-gray-800 text-gray-400 border border-gray-700">{guideline.subcategory}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-1.5 text-sm border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            {copied ? "복사됨!" : "텍스트 복사"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 text-sm border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
          >
            <Download size={14} />
            PDF
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="gap-1.5 text-sm text-gray-600 hover:text-gray-400 hover:bg-gray-800"
          >
            <RotateCcw size={14} />
            처음부터
          </Button>
        </div>
      </div>

      {/* 타임라인 범례 */}
      <div className="flex flex-wrap gap-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
        {guideline.sections.map((s) => {
          const color = SECTION_COLORS[s.timeRange];
          return (
            <div key={s.timeRange} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${color?.bg ?? "bg-gray-500"}`} />
              <span className={`text-xs font-medium ${color?.text ?? "text-gray-400"}`}>
                {s.timeRange} {s.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* 섹션들 */}
      <div className="space-y-4">
        {guideline.sections.map((section, idx) => {
          const color = SECTION_COLORS[section.timeRange] ?? { bg: "bg-gray-600", border: "border-gray-600", text: "text-gray-400" };
          return (
            <div key={idx} className={`rounded-xl overflow-hidden border ${color.border}/40 bg-gray-800/60 shadow-lg`}>
              {/* 섹션 헤더 */}
              <div className={`${color.bg} px-4 py-2.5 flex items-center gap-3`}>
                <span className="text-white text-sm font-bold tracking-wide">
                  ⏱ {section.timeRange}
                </span>
                <span className="text-white font-semibold text-base">{section.title}</span>
              </div>

              {/* 좌우 레이아웃 */}
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
                {/* 왼쪽: 이미지 슬롯 */}
                <div className="border-r border-gray-700/50 bg-gray-900/50 flex flex-col items-center justify-center p-4 min-h-[180px]">
                  {sectionImages[idx] ? (
                    <div className="relative w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={sectionImages[idx]}
                        alt={`${section.title} 이미지`}
                        className="w-full rounded-lg object-contain max-h-48"
                      />
                      <button
                        className="absolute top-1 right-1 w-5 h-5 bg-gray-800 rounded-full shadow text-gray-400 flex items-center justify-center text-xs hover:text-white"
                        onClick={() =>
                          setSectionImages((prev) => {
                            const n = { ...prev };
                            delete n[idx];
                            return n;
                          })
                        }
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center gap-2 cursor-pointer text-gray-600 hover:text-violet-400 transition-colors w-full">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          e.target.files?.[0] && handleSectionImage(idx, e.target.files[0])
                        }
                      />
                      {idx === 0 && productImageUrl ? (
                        <div className="relative w-full">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={productImageUrl}
                            alt="제품"
                            className="w-full rounded-lg object-contain max-h-40"
                          />
                          <p className="text-xs text-gray-600 mt-1 text-center">클릭하여 교체</p>
                        </div>
                      ) : (
                        <>
                          <ImagePlus size={28} className="text-gray-700" />
                          <span className="text-xs text-center text-gray-600">
                            사진 추가<br />(선택사항)
                          </span>
                        </>
                      )}
                    </label>
                  )}
                </div>

                {/* 오른쪽: 스크립트 + 촬영팁 */}
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      📝 스크립트
                    </p>
                    <p className="text-gray-200 text-sm leading-relaxed bg-gray-900/70 border border-gray-700/50 rounded-lg p-3">
                      &ldquo;{section.script}&rdquo;
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      🎬 촬영 구성 팁
                    </p>
                    <ul className="space-y-1">
                      {section.shotTips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className={`mt-0.5 flex-shrink-0 ${color.text}`}>•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      💬 자막 팁
                    </p>
                    <p className="text-sm text-gray-400 bg-gray-900/50 border border-gray-700/50 rounded-lg px-3 py-2">
                      {section.captionTip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center pt-4">
        <Button
          onClick={onReset}
          variant="outline"
          className="gap-2 border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
        >
          <RotateCcw size={14} />
          새로운 가이드라인 제작
        </Button>
      </div>
    </div>
  );
}
