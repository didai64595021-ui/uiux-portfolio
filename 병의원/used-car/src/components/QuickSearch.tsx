"use client";

import { useState } from "react";
import { brands } from "@/data/cars";
import Link from "next/link";

export default function QuickSearch() {
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [yearRange, setYearRange] = useState("");

  return (
    <section className="relative -mt-12 z-20 container-custom">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row items-end gap-4">
          {/* Brand */}
          <div className="w-full md:flex-1">
            <label className="block text-sm font-semibold text-navy mb-2">브랜드</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full bg-bg border border-gray-200 rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[48px]"
            >
              <option value="">전체 브랜드</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="w-full md:flex-1">
            <label className="block text-sm font-semibold text-navy mb-2">가격대</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full bg-bg border border-gray-200 rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[48px]"
            >
              <option value="">전체 가격</option>
              <option value="0-2500">2,500만원 이하</option>
              <option value="2500-3500">2,500 ~ 3,500만원</option>
              <option value="3500-4500">3,500 ~ 4,500만원</option>
              <option value="4500-">4,500만원 이상</option>
            </select>
          </div>

          {/* Year */}
          <div className="w-full md:flex-1">
            <label className="block text-sm font-semibold text-navy mb-2">연식</label>
            <select
              value={yearRange}
              onChange={(e) => setYearRange(e.target.value)}
              className="w-full bg-bg border border-gray-200 rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[48px]"
            >
              <option value="">전체 연식</option>
              <option value="2023">2023년</option>
              <option value="2022">2022년</option>
              <option value="2021">2021년</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto">
            <Link
              href={`/inventory?brand=${brand}&price=${priceRange}&year=${yearRange}`}
              className="btn-primary w-full md:w-auto whitespace-nowrap"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              검색
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
