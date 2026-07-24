"use client";

import { useEffect, useState } from "react";
import { Play, Loader2 } from "lucide-react";

type Props = {
  videoId: string;
  username: string;
  videoUrl: string;
  title: string;
  channel: string;
};

export default function TikTokVideoCard({ videoId, username, videoUrl, title, channel }: Props) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [thumbLoading, setThumbLoading] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    fetch(`/api/tiktok-oembed?url=${encodeURIComponent(videoUrl)}`)
      .then((r) => r.json())
      .then((d) => { if (d.thumbnailUrl) setThumbnail(d.thumbnailUrl); })
      .catch(() => {})
      .finally(() => setThumbLoading(false));
  }, [videoUrl]);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">

      {/* ① iframe — 항상 렌더링되어 미리 로드됨 */}
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}?autoplay=1`}
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
      />

      {/* ② 썸네일 오버레이 — playing=true 가 되면 opacity-0 + pointer-events-none */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          playing ? "opacity-0 pointer-events-none" : "opacity-100 cursor-pointer"
        }`}
        onClick={() => setPlaying(true)}
      >
        {/* 배경 이미지 */}
        {thumbLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <Loader2 size={24} className="animate-spin text-gray-600" />
          </div>
        ) : thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbnail} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-gray-800 to-gray-900">
            <span className="text-[#69C9D0] text-3xl font-black">♪</span>
            <span className="text-gray-500 text-xs">@{username}</span>
          </div>
        )}

        {/* 재생 버튼 */}
        <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-black/55 border-2 border-white/80 flex items-center justify-center hover:scale-110 transition-transform backdrop-blur-sm">
            <Play size={22} className="text-white ml-1" fill="white" />
          </div>
        </div>

        {/* 하단 채널/제목 */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white text-xs font-bold drop-shadow">{channel}</p>
          <p className="text-gray-300 text-[10px] line-clamp-2 mt-0.5 leading-relaxed drop-shadow">{title}</p>
        </div>
      </div>

    </div>
  );
}
