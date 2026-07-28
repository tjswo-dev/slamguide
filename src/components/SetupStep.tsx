"use client";

import { useState } from "react";
import { CATEGORIES, COUNTRIES } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { Country, Subcategory } from "@/types";
import { Search } from "lucide-react";

type Props = {
  onNext: (data: {
    countries: Country[];
    categoryId: string;
    subcategoryId: string;
  }) => void;
};

export default function SetupStep({ onNext }: Props) {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([COUNTRIES[0]]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string>("");

  const selectedCategory = CATEGORIES.find((c) => c.id === selectedCategoryId);

  const toggleCountry = (country: Country) => {
    const next = selectedCountries.find((c) => c.code === country.code)
      ? selectedCountries.filter((c) => c.code !== country.code)
      : [...selectedCountries, country];
    setSelectedCountries(next);
  };

  const selectCategory = (id: string) => {
    setSelectedCategoryId(id);
    setSelectedSubcategoryId("");
  };

  const selectSubcategory = (sub: Subcategory) => {
    setSelectedSubcategoryId(sub.id);
  };

  const canProceed =
    selectedCountries.length > 0 &&
    selectedCategoryId &&
    selectedSubcategoryId;

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

      {/* CTA */}
      <div className="pt-2">
        <Button
          size="lg"
          onClick={() =>
            onNext({
              countries: selectedCountries,
              categoryId: selectedCategoryId,
              subcategoryId: selectedSubcategoryId,
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
            국가와 카테고리를 모두 선택해주세요.
          </p>
        )}
      </div>
    </div>
  );
}
