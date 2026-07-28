"use client";

import { MockVideo } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Eye, Heart, RefreshCw, ChevronRight } from "lucide-react";
import TikTokVideoCard from "@/components/TikTokVideoCard";

type Props = {
  videos: MockVideo[];
  onToggle: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
  countries: string[];
};

export default function VideoStep({
  videos,
  onToggle,
  onNext,
  onBack,
  countries,
}: Props) {
  const selectedCount = videos.filter((v) => v.selected).length;

  return (
    <div className="space-y-6">
      {/* 검색 조건 */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-gray-500">검색 조건:</span>
        {countries.map((c) => (
          <Badge key={c} className="text-xs bg-gray-800 text-gray-400 border border-gray-700">
            {c}
          </Badge>
        ))}
      </div>

      {/* 영상 그리드 */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-200">
            대표 영상{" "}
            <span className="text-violet-400">{selectedCount}개 선택됨</span>
          </h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-500 gap-1 text-xs hover:text-gray-300 hover:bg-gray-800"
          >
            <RefreshCw size={12} />
            영상 재검색
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`rounded-2xl border-2 overflow-hidden transition-all flex flex-col ${
                video.selected
                  ? "border-violet-500 shadow-xl shadow-violet-900/40"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              {/* 썸네일 + 재생 영역 — 9:16 비율 */}
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <div className="absolute inset-0">
                  {video.videoUrl && video.username ? (
                    <TikTokVideoCard
                      videoId={video.tiktokId}
                      username={video.username}
                      videoUrl={video.videoUrl}
                      title={video.title}
                      channel={video.channel}
                    />
                  ) : (
                    /* 목업 플레이스홀더 */
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-gray-800 to-gray-900">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-pink-900/20" />
                      <div className="relative flex items-center gap-1">
                        <span className="text-[#69C9D0] text-3xl font-black">♪</span>
                        <span className="text-white text-2xl font-black">TikTok</span>
                      </div>
                      <span className="relative text-gray-500 text-xs">목업</span>
                      <div className="absolute right-3 bottom-16 flex flex-col items-center gap-1">
                        <Heart size={20} className="text-white drop-shadow" />
                        <span className="text-white text-[10px]">{video.likes}</span>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="text-white text-xs font-semibold">{video.channel}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 하단 정보 + 선택 버튼 */}
              <div className="bg-gray-800 px-3 py-3 flex flex-col gap-2">
                <div>
                  <p className="text-xs font-semibold text-gray-300">{video.channel}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-0.5 leading-relaxed">
                    {video.title}
                  </p>
                </div>

                {(video.views !== "—" || video.likes !== "—") && (
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-0.5 text-[11px] text-gray-500">
                      <Eye size={9} />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-0.5 text-[11px] text-pink-500">
                      <Heart size={9} />
                      {video.likes}
                    </span>
                  </div>
                )}

                {/* 선택 버튼 */}
                <button
                  onClick={() => onToggle(video.id)}
                  className={`flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-semibold border-2 transition-all mt-1 ${
                    video.selected
                      ? "border-violet-500 bg-violet-500 text-white"
                      : "border-gray-600 bg-gray-700 text-gray-400 hover:border-violet-500 hover:text-violet-300"
                  }`}
                >
                  {video.selected ? (
                    <>
                      <Check size={11} />
                      선택됨
                    </>
                  ) : (
                    "선택"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 이동 버튼 */}
      <div className="flex items-center gap-3 pt-2">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
        >
          이전
        </Button>
        <Button
          size="lg"
          onClick={onNext}
          disabled={selectedCount === 0}
          className="bg-violet-600 hover:bg-violet-500 text-white gap-2 disabled:opacity-40"
        >
          제품 정보 입력하기
          <ChevronRight size={16} />
        </Button>
        {selectedCount === 0 && (
          <span className="text-xs text-gray-600">영상을 1개 이상 선택해주세요.</span>
        )}
      </div>
    </div>
  );
}
