"use client";

import { useState } from "react";
import { AppStep, Country, Guideline, MockVideo, ProductInfo } from "@/types";
import { CATEGORIES, COUNTRIES, MOCK_VIDEOS_BY_CATEGORY } from "@/data/categories";
import { DEMO_GUIDELINE } from "@/data/demoGuideline";
import StepIndicator from "@/components/StepIndicator";
import SetupStep from "@/components/SetupStep";
import VideoStep from "@/components/VideoStep";
import ProductStep from "@/components/ProductStep";
import GuidelineStep from "@/components/GuidelineStep";
import SearchingScreen from "@/components/SearchingScreen";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [step, setStep] = useState<AppStep>("setup");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [videos, setVideos] = useState<MockVideo[]>([]);
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [guideline, setGuideline] = useState<Guideline | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchingCountries, setSearchingCountries] = useState<string[]>([]);

  const handleSetupNext = (data: {
    countries: Country[];
    categoryId: string;
    subcategoryId: string;
  }) => {
    setSelectedCountries(data.countries);
    setCategoryId(data.categoryId);
    setSubcategoryId(data.subcategoryId);

    setSearchingCountries(data.countries.map((c) => `${c.flag} ${c.label}`));
    setIsSearching(true);

    const mockPool =
      MOCK_VIDEOS_BY_CATEGORY[data.subcategoryId] ??
      MOCK_VIDEOS_BY_CATEGORY[data.categoryId] ??
      MOCK_VIDEOS_BY_CATEGORY["default"];
    setVideos(mockPool.map((v) => ({ ...v, selected: true })));
  };

  const handleSearchDone = () => {
    setIsSearching(false);
    setStep("videos");
  };

  const handleVideoToggle = (id: string) => {
    setVideos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, selected: !v.selected } : v))
    );
  };

  const handleProductNext = async (productInfo: ProductInfo) => {
    setProduct(productInfo);
    setLoading(true);
    setError(null);

    // 데모: API 없이 하드코딩된 가이드라인 표시
    await new Promise((r) => setTimeout(r, 1800));
    setGuideline({
      ...DEMO_GUIDELINE,
      productName: productInfo.name || DEMO_GUIDELINE.productName,
    });
    setLoading(false);
    setStep("guideline");
  };

  const handleReset = () => {
    setStep("setup");
    setSelectedCountries([]);
    setCategoryId("");
    setSubcategoryId("");
    setVideos([]);
    setProduct(null);
    setGuideline(null);
    setError(null);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {isSearching && (
        <SearchingScreen
          countries={searchingCountries}
          onDone={handleSearchDone}
        />
      )}
      {/* 헤더 */}
      <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">
              <span className="text-violet-400">Slam</span>Guide
            </h1>
            <p className="text-xs text-gray-500">뷰티 TikTok 콘텐츠 가이드라인 제작기</p>
          </div>
          <StepIndicator current={step} />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8">
          {step === "setup" && (
            <>
              <h2 className="text-2xl font-bold text-white">조사 조건 설정</h2>
              <p className="text-gray-400 mt-1">
                타겟 국가와 카테고리를 선택하면 대표 TikTok 영상을 찾아드립니다.
              </p>
            </>
          )}
          {step === "videos" && (
            <>
              <h2 className="text-2xl font-bold text-white">대표 영상 선택</h2>
              <p className="text-gray-400 mt-1">가이드라인 기반이 될 TikTok 영상을 선택하세요. (최소 1개)</p>
            </>
          )}
          {step === "product" && (
            <>
              <h2 className="text-2xl font-bold text-white">제품 정보 입력</h2>
              <p className="text-gray-400 mt-1">
                제품명, 사진, 핵심 소구점을 입력하면 AI가 가이드라인을 생성합니다.
              </p>
            </>
          )}
          {step === "guideline" && (
            <>
              <h2 className="text-2xl font-bold text-white">콘텐츠 가이드라인</h2>
              <p className="text-gray-400 mt-1">TikTok 60초 숏폼 영상 제작 가이드라인이 완성되었습니다.</p>
            </>
          )}
        </div>

        {error && (
          <div className="mb-6 bg-red-950/60 border border-red-800 text-red-400 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {loading && (
          <div className="fixed inset-0 bg-gray-950/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-4">
            <Loader2 size={40} className="animate-spin text-violet-400" />
            <p className="text-gray-200 font-medium">AI가 가이드라인을 제작하고 있습니다...</p>
            <p className="text-gray-500 text-sm">대표 영상과 제품 정보를 분석 중</p>
          </div>
        )}

        <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl p-6 md:p-8">
          {step === "setup" && <SetupStep onNext={handleSetupNext} />}
          {step === "videos" && (
            <VideoStep
              videos={videos}
              onToggle={handleVideoToggle}
              onNext={() => setStep("product")}
              onBack={() => setStep("setup")}
              countries={selectedCountries.map((c) => `${c.flag} ${c.label}`)}
            />
          )}
          {step === "product" && (
            <ProductStep onNext={handleProductNext} onBack={() => setStep("videos")} />
          )}
          {step === "guideline" && guideline && (
            <GuidelineStep
              guideline={guideline}
              productImageUrl={product?.imageUrl ?? null}
              onReset={handleReset}
            />
          )}
        </div>
      </main>
    </div>
  );
}
