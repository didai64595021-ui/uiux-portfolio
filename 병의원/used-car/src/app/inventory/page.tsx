"use client";

import { useState, useMemo } from "react";
import { cars, brands, fuelTypes, Car } from "@/data/cars";
import CompareBar from "@/components/CompareBar";
import Link from "next/link";

type ViewMode = "grid" | "list";
type SortOption = "price-asc" | "price-desc" | "year-desc" | "mileage-asc";

export default function InventoryPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [yearRange, setYearRange] = useState<[number, number]>([2019, 2024]);
  const [mileageMax, setMileageMax] = useState(200000);
  const [fuelFilter, setFuelFilter] = useState<string>("");
  const [sort, setSort] = useState<SortOption>("price-asc");
  const [view, setView] = useState<ViewMode>("grid");
  const [compareCars, setCompareCars] = useState<Car[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = cars.filter((c) => {
      if (selectedBrand && c.brand !== selectedBrand) return false;
      if (c.price < priceRange[0] || c.price > priceRange[1]) return false;
      if (c.year < yearRange[0] || c.year > yearRange[1]) return false;
      if (c.mileage > mileageMax) return false;
      if (fuelFilter && c.fuel !== fuelFilter) return false;
      return true;
    });

    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "year-desc": result.sort((a, b) => b.year - a.year); break;
      case "mileage-asc": result.sort((a, b) => a.mileage - b.mileage); break;
    }
    return result;
  }, [selectedBrand, priceRange, yearRange, mileageMax, fuelFilter, sort]);

  const toggleCompare = (car: Car) => {
    setCompareCars((prev) => {
      if (prev.find((c) => c.id === car.id)) return prev.filter((c) => c.id !== car.id);
      if (prev.length >= 3) return prev;
      return [...prev, car];
    });
  };

  return (
    <div className="pt-20 min-h-[100svh]">
      {/* Header */}
      <div className="bg-navy py-12 sm:py-16">
        <div className="container-custom">
          <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
            INVENTORY
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white korean-text">
            전체 재고 차량
          </h1>
          <p className="text-white/60 mt-3 korean-text">
            총 <span className="text-accent font-bold">{filtered.length}</span>대의 인증 차량
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden btn-outline w-full flex items-center justify-center gap-2"
            aria-label="필터 토글"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            필터 {showFilters ? "닫기" : "열기"}
          </button>

          {/* Sidebar Filters */}
          <aside className={`lg:w-72 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6 sticky top-24">
              <h3 className="font-bold text-navy text-lg">필터</h3>

              {/* Brand */}
              <div>
                <label className="text-sm font-semibold text-navy block mb-2">브랜드</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedBrand("")}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all min-h-[36px] ${
                      !selectedBrand ? "bg-navy text-white" : "bg-bg text-text/60 hover:bg-gray-200"
                    }`}
                  >
                    전체
                  </button>
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => setSelectedBrand(selectedBrand === b ? "" : b)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all min-h-[36px] ${
                        selectedBrand === b ? "bg-navy text-white" : "bg-bg text-text/60 hover:bg-gray-200"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-sm font-semibold text-navy block mb-2">
                  가격대 <span className="text-accent font-display">{priceRange[0].toLocaleString()} ~ {priceRange[1].toLocaleString()}만원</span>
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min={0}
                    max={10000}
                    step={100}
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Math.min(Number(e.target.value), priceRange[1] - 100), priceRange[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min={0}
                    max={10000}
                    step={100}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0] + 100)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Year */}
              <div>
                <label className="text-sm font-semibold text-navy block mb-2">
                  연식 <span className="text-accent font-display">{yearRange[0]} ~ {yearRange[1]}년</span>
                </label>
                <input
                  type="range"
                  min={2019}
                  max={2024}
                  step={1}
                  value={yearRange[0]}
                  onChange={(e) => setYearRange([Number(e.target.value), yearRange[1]])}
                  className="w-full"
                />
              </div>

              {/* Mileage */}
              <div>
                <label className="text-sm font-semibold text-navy block mb-2">
                  주행거리 <span className="text-accent font-display">{(mileageMax / 10000).toFixed(0)}만km 이하</span>
                </label>
                <input
                  type="range"
                  min={10000}
                  max={200000}
                  step={10000}
                  value={mileageMax}
                  onChange={(e) => setMileageMax(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Fuel */}
              <div>
                <label className="text-sm font-semibold text-navy block mb-2">연료</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFuelFilter("")}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all min-h-[36px] ${
                      !fuelFilter ? "bg-navy text-white" : "bg-bg text-text/60"
                    }`}
                  >
                    전체
                  </button>
                  {fuelTypes.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFuelFilter(fuelFilter === f ? "" : f)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all min-h-[36px] ${
                        fuelFilter === f ? "bg-navy text-white" : "bg-bg text-text/60"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setSelectedBrand("");
                  setPriceRange([0, 10000]);
                  setYearRange([2019, 2024]);
                  setMileageMax(200000);
                  setFuelFilter("");
                }}
                className="w-full py-2.5 text-sm text-text/50 hover:text-accent transition-colors min-h-[44px]"
              >
                필터 초기화
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm min-h-[44px]"
              >
                <option value="price-asc">낮은 가격순</option>
                <option value="price-desc">높은 가격순</option>
                <option value="year-desc">최신 연식순</option>
                <option value="mileage-asc">낮은 주행거리순</option>
              </select>

              <div className="flex bg-bg rounded-lg p-1">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2.5 rounded-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                    view === "grid" ? "bg-white shadow-sm" : ""
                  }`}
                  aria-label="그리드 뷰"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2.5 rounded-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                    view === "list" ? "bg-white shadow-sm" : ""
                  }`}
                  aria-label="리스트 뷰"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Results */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-text/40 text-lg korean-text">조건에 맞는 차량이 없습니다</p>
                <button
                  onClick={() => {
                    setSelectedBrand("");
                    setPriceRange([0, 10000]);
                    setYearRange([2019, 2024]);
                    setMileageMax(200000);
                    setFuelFilter("");
                  }}
                  className="btn-outline mt-4"
                >
                  필터 초기화
                </button>
              </div>
            ) : view === "grid" ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((car) => {
                  const isCompare = compareCars.some((c) => c.id === car.id);
                  return (
                    <div key={car.id} className="card group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={car.image}
                          alt={`${car.brand} ${car.model}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {car.badge && (
                          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white ${
                            car.badge === "인기" ? "bg-accent" : car.badge === "신규" ? "bg-green-500" : "bg-red-500"
                          }`}>
                            {car.badge}
                          </span>
                        )}
                        <button
                          onClick={() => toggleCompare(car)}
                          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                            isCompare ? "bg-accent text-white" : "bg-white/80 text-text/60 hover:bg-accent hover:text-white"
                          }`}
                          aria-label="비교 추가"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-5">
                        <p className="text-xs text-text/50">{car.brand} · {car.year}년</p>
                        <h3 className="font-bold text-navy text-lg">{car.model}</h3>
                        <div className="flex items-center gap-2 text-xs text-text/50 mt-1 mb-3">
                          <span>{(car.mileage / 10000).toFixed(1)}만km</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>{car.fuel}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>{car.color}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {car.features.slice(0, 3).map((f) => (
                            <span key={f} className="bg-bg text-text/60 text-[10px] px-2 py-0.5 rounded">{f}</span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-accent font-display font-bold text-xl">{(car.price / 100).toFixed(1)}<span className="text-sm text-text/50 ml-0.5">만원</span></p>
                          <Link href="/contact" className="text-sm text-navy font-semibold hover:text-accent transition-colors min-h-[44px] flex items-center">
                            상담하기 →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="space-y-3">
                {filtered.map((car) => {
                  const isCompare = compareCars.some((c) => c.id === car.id);
                  return (
                    <div key={car.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col sm:flex-row gap-4">
                      <div className="sm:w-48 h-32 sm:h-auto rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={car.image}
                          alt={`${car.brand} ${car.model}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-xs text-text/50">{car.brand}</p>
                              <h3 className="font-bold text-navy text-lg">{car.model}</h3>
                            </div>
                            <p className="text-accent font-display font-bold text-xl">{(car.price / 100).toFixed(1)}<span className="text-sm text-text/50">만원</span></p>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-text/50 mt-1">
                            <span>{car.year}년</span>
                            <span>{(car.mileage / 10000).toFixed(1)}만km</span>
                            <span>{car.fuel}</span>
                            <span>{car.color}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {car.features.map((f) => (
                              <span key={f} className="bg-bg text-text/60 text-[10px] px-2 py-0.5 rounded">{f}</span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => toggleCompare(car)}
                            className={`text-xs px-3 py-1.5 rounded-full transition-all min-h-[36px] ${
                              isCompare ? "bg-accent text-white" : "bg-bg text-text/60 hover:bg-accent/10"
                            }`}
                          >
                            {isCompare ? "비교 선택됨" : "비교 추가"}
                          </button>
                          <Link href="/contact" className="text-sm text-navy font-semibold hover:text-accent transition-colors ml-auto min-h-[44px] flex items-center">
                            상담하기 →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <CompareBar
        selectedCars={compareCars}
        onRemove={(id) => setCompareCars((prev) => prev.filter((c) => c.id !== id))}
        onClear={() => setCompareCars([])}
      />
    </div>
  );
}
