"use client";

import { useState } from "react";
import { CATEGORIES, COUNTRIES, getKeywordsForCountries } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Country, Subcategory } from "@/types";
import { Search, X, Plus } from "lucide-react";

type Props = {
  onNext: (data: {
    countries: Country[];
    categoryId: string;
    subcategoryId: string;
    keywords: string[];
  }) => void;
};

export default function SetupStep({ onNext }: Props) {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([COUNTRIES[0]]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState("");

  const selectedCategory = CATEGORIES.find((c) => c.id === selectedCategoryId);
  const selectedSubcategory = selectedCategory?.subcategories.find(
    (s) => s.id === selectedSubcategoryId
  );

  const toggleCountry = (country: Country) => {
    const next = selectedCountries.find((c) => c.code === country.code)
      ? selectedCountries.filter((c) => c.code !== country.code)
      : [...selectedCountries, country];
    setSelectedCountries(next);

    // 국가 변경 시 현재 선택된 서브카테고리의 키워드 재계산
    if (selectedSubcategoryId) {
      const cat = CATEGORIES.find((c) => c.id === selectedCategoryId);
      const sub = cat?.subcategories.find((s) => s.id === selectedSubcategoryId);
      if (sub) {
        setKeywords(getKeywordsForCountries(sub.keywords, next.map((c) => c.code)));
      }
    }
  };

  const selectCategory = (id: string) => {
    setSelectedCategoryId(id);
    setSelectedSubcategoryId("");
    setKeywords([]);
  };

  const selectSubcategory = (sub: Subcategory) => {
    setSelectedSubcategoryId(sub.id);
    setKeywords(getKeywordsForCountries(sub.keywords, selectedCountries.map((c) => c.code)));
  };

  const addKeyword = () => {
    const trimmed = keywordInput.trim();
    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords((prev) => [...prev, trimmed]);
    }
    setKeywordInput("");
  };

  const removeKeyword = (kw: string) => {
    setKeywords((prev) => prev.filter((k) => k !== kw));
  };

  const canProceed =
    selectedCountries.length > 0 &&
    selectedCategoryId &&
    selectedSubcategoryId &&
    keywords.length > 0;

  return (
    <div className="space-y-8">
      {/* 국가 선택 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          타겟 국가 <span className="text-violet-400">(복수 선택 가능)</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {COUNTRIES.map((country) => {
            const active = selectedCountries.find((c) => c.code === country.code);
            return (
              <button
                key={country.code}
                onClick={() => toggleCountry(country)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                  active
                    ? "border-violet-500 bg-violet-500/20 text-violet-300"
                    : "border-gray-700 bg-gray-800 text-gray-400 hover:border-violet-600 hover:text-gray-200"
                }`}
              >
                <span>{country.flag}</span>
                <span>{country.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 카테고리 선택 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          카테고리
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => selectCategory(cat.id)}
              className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                selectedCategoryId === cat.id
                  ? "border-violet-500 bg-violet-500 text-white"
                  : "border-gray-700 bg-gray-800 text-gray-400 hover:border-violet-600 hover:text-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 서브카테고리 */}
        {selectedCategory && (
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">세부 카테고리</p>
            <div className="flex flex-wrap gap-2">
              {selectedCategory.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => selectSubcategory(sub)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                    selectedSubcategoryId === sub.id
                      ? "border-violet-500 bg-violet-500/30 text-violet-300"
                      : "border-gray-600 bg-gray-700 text-gray-400 hover:border-violet-600 hover:text-gray-200"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 키워드 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          검색 키워드
          {selectedSubcategory && (
            <span className="ml-2 text-xs text-violet-500 normal-case font-normal">
              (서브카테고리 선택 시 자동 추천)
            </span>
          )}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3 min-h-[36px]">
          {keywords.map((kw) => (
            <Badge
              key={kw}
              className="flex items-center gap-1 px-3 py-1 text-sm bg-violet-500/20 text-violet-300 border border-violet-500/40 hover:bg-violet-500/30"
            >
              {kw}
              <button onClick={() => removeKeyword(kw)}>
                <X size={12} />
              </button>
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="키워드 직접 입력 후 Enter"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addKeyword()}
            className="max-w-xs bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-600 focus:border-violet-500"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={addKeyword}
            className="gap-1 border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
          >
            <Plus size={14} /> 추가
          </Button>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Button
          size="lg"
          onClick={() =>
            onNext({
              countries: selectedCountries,
              categoryId: selectedCategoryId,
              subcategoryId: selectedSubcategoryId,
              keywords,
            })
          }
          disabled={!canProceed}
          className="bg-violet-600 hover:bg-violet-500 text-white gap-2 px-8 disabled:opacity-40"
        >
          <Search size={16} />
          대표 영상 검색하기
        </Button>
        {!canProceed && (
          <p className="text-xs text-gray-600 mt-2">
            국가, 카테고리, 키워드를 모두 선택해주세요.
          </p>
        )}
      </div>
    </div>
  );
}
