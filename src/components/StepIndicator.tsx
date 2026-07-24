"use client";

import { AppStep } from "@/types";
import { Check } from "lucide-react";

const STEPS: { id: AppStep; label: string }[] = [
  { id: "setup", label: "조건 설정" },
  { id: "videos", label: "대표 영상" },
  { id: "product", label: "제품 정보" },
  { id: "guideline", label: "가이드라인" },
];

const ORDER: AppStep[] = ["setup", "videos", "product", "guideline"];

export default function StepIndicator({ current }: { current: AppStep }) {
  const currentIdx = ORDER.indexOf(current);

  return (
    <div className="flex items-center gap-0">
      {STEPS.map((step, i) => {
        const done = i < currentIdx;
        const active = i === currentIdx;
        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all ${
                  done
                    ? "bg-violet-500 border-violet-500 text-white"
                    : active
                    ? "bg-gray-900 border-violet-400 text-violet-400"
                    : "bg-gray-800 border-gray-700 text-gray-600"
                }`}
              >
                {done ? <Check size={14} /> : i + 1}
              </div>
              <span
                className={`mt-1 text-xs whitespace-nowrap ${
                  active
                    ? "text-violet-400 font-semibold"
                    : done
                    ? "text-violet-500"
                    : "text-gray-600"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-16 h-0.5 mb-4 mx-1 transition-all ${
                  done ? "bg-violet-500" : "bg-gray-800"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
