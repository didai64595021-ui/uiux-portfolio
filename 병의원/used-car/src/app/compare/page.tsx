"use client";

import { useState } from "react";
import { cars, Car, brands } from "@/data/cars";
import Link from "next/link";

export default function ComparePage() {
  const [selectedCars, setSelectedCars] = useState<(Car | null)[]>([null, null]);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const selectCar = (index: number, car: Car) => {
    setSelectedCars((prev) => {
      const next = [...prev];
      next[index] = car;
      return next;
    });
    setDropdownOpen(null);
  };

  const addSlot = () => {
    if (selectedCars.length < 3) {
      setSelectedCars((prev) => [...prev, null]);
    }
  };

  const removeSlot = (index: number) => {
    if (selectedCars.length > 2) {
      setSelectedCars((prev) => prev.filter((_, i) => i !== index));
    } else {
      setSelectedCars((prev) => {
        const next = [...prev];
        next[index] = null;
        return next;
      });
    }
  };

  const allSelected = selectedCars.filter(Boolean) as Car[];
  const canCompare = allSelected.length >= 2;

  const specRows = [
    { label: "가격", key: "price", format: (c: Car) => `${(c.price / 100).toFixed(1)}만원` },
    { label: "연식", key: "year", format: (c: Car) => `${c.year}년` },
    { label: "주행거리", key: "mileage", format: (c: Car) => `${(c.mileage / 10000).toFixed(1)}만km` },
    { label: "연료", key: "fuel", format: (c: Car) => c.fuel },
    { label: "변속기", key: "transmission", format: (c: Car) => c.transmission },
    { label: "색상", key: "color", format: (c: Car) => c.color },
    { label: "엔진", key: "engine", format: (c: Car) => c.specs.engine },
    { label: "최대출력", key: "power", format: (c: Car) => c.specs.power },
    { label: "최대토크", key: "torque", format: (c: Car) => c.specs.torque },
    { label: "연비", key: "fuelEconomy", format: (c: Car) => c.specs.fuelEconomy },
  ];

  return (
    <div className="pt-20 min-h-[100svh]">
      {/* Header */}
      <div className="bg-navy py-12 sm:py-16">
        <div className="container-custom">
          <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
            COMPARE
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white korean-text">
            차량 비교
          </h1>
          <p className="text-white/60 mt-3 korean-text">
            최대 3대까지 스펙을 나란히 비교해 보세요
          </p>
        </div>
      </div>

      <div className="container-custom py-8 sm:py-12">
        {/* Car Selector Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {selectedCars.map((car, idx) => (
            <div key={idx} className="relative">
              {car ? (
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border-2 border-accent/20">
                  <div className="relative h-40 sm:h-48">
                    <img src={car.image} alt={car.model} className="w-full h-full object-cover" loading="lazy" />
                    <button
                      onClick={() => removeSlot(idx)}
                      className="absolute top-2 right-2 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                      aria-label="제거"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-xs text-text/50">{car.brand}</p>
                    <p className="font-bold text-navy">{car.model}</p>
                    <p className="text-accent font-display font-bold text-lg">{(car.price / 100).toFixed(1)}만원</p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(dropdownOpen === idx ? null : idx)}
                    className="w-full h-64 sm:h-72 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-accent hover:bg-accent/5 transition-all"
                  >
                    <div className="w-12 h-12 bg-bg rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <p className="text-text/40 text-sm">차량 {idx + 1} 선택</p>
                  </button>

                  {/* Dropdown */}
                  {dropdownOpen === idx && (
                    <>
                      <div className="fixed inset-0 z-30" onClick={() => setDropdownOpen(null)} />
                      <div className="absolute top-full left-0 right-0 z-40 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-72 overflow-y-auto">
                        {cars
                          .filter((c) => !allSelected.some((s) => s.id === c.id))
                          .map((c) => (
                            <button
                              key={c.id}
                              onClick={() => selectCar(idx, c)}
                              className="w-full flex items-center gap-3 p-3 hover:bg-bg transition-colors text-left min-h-[56px]"
                            >
                              <img src={c.image} alt={c.model} className="w-14 h-10 object-cover rounded" loading="lazy" />
                              <div>
                                <p className="text-sm font-semibold text-navy">{c.brand} {c.model}</p>
                                <p className="text-xs text-text/50">{c.year}년 · {(c.price / 100).toFixed(1)}만원</p>
                              </div>
                            </button>
                          ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Add Slot */}
          {selectedCars.length < 3 && (
            <button
              onClick={addSlot}
              className="h-64 sm:h-72 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center hover:border-accent/40 transition-all"
            >
              <span className="text-text/30 text-sm">+ 차량 추가 (최대 3대)</span>
            </button>
          )}
        </div>

        {/* Comparison Table */}
        {canCompare && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy">
                    <th className="text-left text-white/80 text-sm font-semibold py-4 px-6 w-32">항목</th>
                    {allSelected.map((car) => (
                      <th key={car.id} className="text-center text-white text-sm font-semibold py-4 px-4">
                        {car.brand} {car.model}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specRows.map((row, i) => (
                    <tr key={row.key} className={i % 2 === 0 ? "bg-bg/50" : "bg-white"}>
                      <td className="py-3.5 px-6 text-sm font-semibold text-navy">{row.label}</td>
                      {allSelected.map((car) => {
                        const value = row.format(car);
                        const isBest =
                          row.key === "price"
                            ? car.price === Math.min(...allSelected.map((c) => c.price))
                            : row.key === "mileage"
                            ? car.mileage === Math.min(...allSelected.map((c) => c.mileage))
                            : row.key === "year"
                            ? car.year === Math.max(...allSelected.map((c) => c.year))
                            : false;
                        return (
                          <td key={car.id} className={`py-3.5 px-4 text-center text-sm ${isBest ? "text-accent font-bold" : "text-text/70"}`}>
                            {value}
                            {isBest && <span className="ml-1 text-[10px]">BEST</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  {/* Features Row */}
                  <tr className="bg-bg/50">
                    <td className="py-3.5 px-6 text-sm font-semibold text-navy">주요 사양</td>
                    {allSelected.map((car) => (
                      <td key={car.id} className="py-3.5 px-4 text-center">
                        <div className="flex flex-wrap justify-center gap-1">
                          {car.features.map((f) => (
                            <span key={f} className="bg-navy/5 text-text/60 text-[10px] px-2 py-0.5 rounded">{f}</span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!canCompare && (
          <div className="text-center py-12">
            <p className="text-text/40 korean-text">위에서 차량을 2대 이상 선택하면 비교표가 생성됩니다</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text/50 text-sm mb-4 korean-text">마음에 드는 차량을 찾으셨나요?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary text-center active:scale-[0.98]">무료 상담 신청</Link>
            <Link href="/inventory" className="btn-outline text-center">전체 재고 보기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
