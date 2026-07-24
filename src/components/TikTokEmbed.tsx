"use client";

import { ExternalLink, Play } from "lucide-react";

type Props = {
  videoId: string;
  username: string;
  videoUrl: string;
  title: string;
};

export default function TikTokEmbed({ username, videoUrl, title }: Props) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-transparent to-violet-900/15 pointer-events-none" />

      {/* 상단: TikTok 로고 */}
      <div className="relative w-full flex items-center justify-between px-4 pt-4 pb-2">
        <div className="flex items-center gap-1">
          <span className="text-[#69C9D0] text-lg font-black leading-none">♪</span>
          <span className="text-white text-base font-black tracking-tight leading-none">TikTok</span>
        </div>
        <span className="text-gray-500 text-xs">@{username}</span>
      </div>

      {/* 중앙: 재생 버튼 영역 */}
      <div className="relative flex-1 flex flex-col items-center justify-center gap-4 px-4">
        {/* 재생 버튼 */}
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200 backdrop-blur-sm"
        >
          <Play size={24} className="text-white ml-1" fill="white" />
        </a>

        {/* 제목 */}
        <p className="text-white text-xs text-center leading-relaxed line-clamp-3 px-2 opacity-80">
          {title}
        </p>
      </div>

      {/* 하단: TikTok에서 보기 버튼 */}
      <div className="relative w-full px-4 pb-4">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          <ExternalLink size={12} />
          TikTok에서 보기
        </a>
      </div>
    </div>
  );
}
