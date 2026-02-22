"use client";

import { Car } from "@/data/cars";
import Link from "next/link";

interface CompareBarProps {
  selectedCars: Car[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function CompareBar({ selectedCars, onRemove, onClear }: CompareBarProps) {
  if (selectedCars.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 safe-area-bottom animate-slide-up">
      <div className="bg-navy/95 backdrop-blur-md border-t border-white/10 py-3 px-4">
        <div className="container-custom flex items-center gap-4">
          {/* Selected Cars */}
          <div className="flex items-center gap-3 flex-1 overflow-x-auto scrollbar-hide">
            <span className="text-white/60 text-xs whitespace-nowrap flex-shrink-0">
              비교 ({selectedCars.length}/3)
            </span>
            {selectedCars.map((car) => (
              <div key={car.id} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5 flex-shrink-0">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-10 h-7 object-cover rounded"
                />
                <span className="text-white text-xs whitespace-nowrap">
                  {car.brand} {car.model}
                </span>
                <button
                  onClick={() => onRemove(car.id)}
                  className="text-white/50 hover:text-white ml-1"
                  aria-label="제거"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            {/* Empty Slots */}
            {Array.from({ length: 3 - selectedCars.length }).map((_, i) => (
              <div key={`empty-${i}`} className="w-28 h-10 border border-dashed border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white/30 text-xs">+ 추가</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={onClear}
              className="text-white/50 hover:text-white text-xs px-3 py-2 min-h-[44px]"
            >
              초기화
            </button>
            <Link
              href={`/compare?ids=${selectedCars.map((c) => c.id).join(",")}`}
              className={`btn-primary !py-2 !px-4 text-sm ${
                selectedCars.length < 2 ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              비교하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
