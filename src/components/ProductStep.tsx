"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ProductInfo } from "@/types";
import { DEFAULT_SELLING_POINTS } from "@/data/categories";
import { ImagePlus, X, Plus, Wand2 } from "lucide-react";

type Props = {
  onNext: (product: ProductInfo) => void;
  onBack: () => void;
};

export default function ProductStep({ onNext, onBack }: Props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedPoints, setSelectedPoints] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState("");
  const [customPoints, setCustomPoints] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) handleFile(file);
  };

  const togglePoint = (point: string) => {
    setSelectedPoints((prev) =>
      prev.includes(point) ? prev.filter((p) => p !== point) : [...prev, point]
    );
  };

  const addCustomPoint = () => {
    const trimmed = customInput.trim();
    if (trimmed && !customPoints.includes(trimmed) && !selectedPoints.includes(trimmed)) {
      setCustomPoints((prev) => [...prev, trimmed]);
      setSelectedPoints((prev) => [...prev, trimmed]);
    }
    setCustomInput("");
  };

  const allPoints = [...DEFAULT_SELLING_POINTS, ...customPoints];
  const canProceed = name.trim() && selectedPoints.length > 0;

  return (
    <div className="space-y-8">
      {/* 제품명 */}
      <div>
        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          제품명
        </label>
        <Input
          placeholder="예: 텔로엑트 멀티 앰플"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="max-w-sm text-base bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-600 focus:border-violet-500"
        />
      </div>

      {/* 제품 사진 */}
      <div>
        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          제품 사진
        </label>
        <div
          className={`relative border-2 border-dashed rounded-xl transition-all cursor-pointer ${
            dragging
              ? "border-violet-500 bg-violet-500/10"
              : "border-gray-700 hover:border-violet-600 hover:bg-gray-800/50"
          }`}
          style={{ maxWidth: 320, minHeight: 180 }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileRef.current?.click()}
        >
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          {imageUrl ? (
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="제품 사진"
                className="w-full rounded-xl object-contain max-h-60"
              />
              <button
                className="absolute top-2 right-2 w-6 h-6 bg-gray-800 rounded-full shadow flex items-center justify-center text-gray-400 hover:text-white"
                onClick={(e) => { e.stopPropagation(); setImageUrl(null); setImageFile(null); }}
              >
                <X size={12} />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-44 gap-2 text-gray-600">
              <ImagePlus size={32} className="text-gray-700" />
              <p className="text-sm">사진을 드래그하거나 클릭하여 업로드</p>
              <p className="text-xs text-gray-700">JPG, PNG, WEBP</p>
            </div>
          )}
        </div>
      </div>

      {/* 소구점 */}
      <div>
        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
          핵심 소구점 <span className="text-violet-400">(복수 선택)</span>
        </label>
        <p className="text-xs text-gray-600 mb-3">선택된 소구점을 기반으로 가이드라인 스크립트가 생성됩니다.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {allPoints.map((point) => {
            const active = selectedPoints.includes(point);
            return (
              <button
                key={point}
                onClick={() => togglePoint(point)}
                className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                  active
                    ? "border-violet-500 bg-violet-500/20 text-violet-300"
                    : "border-gray-700 bg-gray-800 text-gray-400 hover:border-violet-600 hover:text-gray-200"
                }`}
              >
                {active && <span className="mr-1">✓</span>}
                {point}
              </button>
            );
          })}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="소구점 직접 입력"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomPoint()}
            className="max-w-xs text-sm bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-600 focus:border-violet-500"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={addCustomPoint}
            className="gap-1 border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
          >
            <Plus size={14} /> 추가
          </Button>
        </div>

        {selectedPoints.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="text-xs text-gray-600">선택됨:</span>
            {selectedPoints.map((p) => (
              <Badge key={p} className="text-xs bg-violet-500/20 text-violet-300 border border-violet-500/40">
                {p}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* 버튼 */}
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
          onClick={() => onNext({ name, imageUrl, imageFile, sellingPoints: selectedPoints })}
          disabled={!canProceed}
          className="bg-violet-600 hover:bg-violet-500 text-white gap-2 px-8 disabled:opacity-40"
        >
          <Wand2 size={16} />
          콘텐츠 가이드라인 제작하기
        </Button>
      </div>
    </div>
  );
}
