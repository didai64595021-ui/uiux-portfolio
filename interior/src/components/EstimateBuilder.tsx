"use client";

import { useState, useMemo } from "react";

const roomOptions = [
  { id: "living", label: "거실", icon: "🛋️" },
  { id: "kitchen", label: "주방", icon: "🍳" },
  { id: "bedroom", label: "안방", icon: "🛏️" },
  { id: "kids", label: "아이방", icon: "🧸" },
  { id: "bathroom", label: "욕실", icon: "🚿" },
  { id: "entrance", label: "현관", icon: "🚪" },
];

const tiers = [
  { id: "standard", label: "스탠다드", desc: "합리적 가격의 기본 자재", multiplier: 1, color: "bg-gray-100 border-gray-200" },
  { id: "premium", label: "프리미엄", desc: "국내 브랜드 고급 자재", multiplier: 1.6, color: "bg-caramel/10 border-caramel/30" },
  { id: "luxury", label: "럭셔리", desc: "수입 자재 + 맞춤 시공", multiplier: 2.5, color: "bg-charcoal/5 border-charcoal/20" },
];

const basePricePerPyeong: Record<string, number> = {
  living: 80, kitchen: 120, bedroom: 60, kids: 70, bathroom: 150, entrance: 90,
};

export default function EstimateBuilder() {
  const [step, setStep] = useState(0);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [size, setSize] = useState(25);
  const [tier, setTier] = useState("premium");
  const [addons, setAddons] = useState<string[]>([]);

  const addonOptions = [
    { id: "lighting", label: "조명 디자인", price: 200 },
    { id: "storage", label: "빌트인 수납", price: 350 },
    { id: "smarthome", label: "스마트홈 시스템", price: 500 },
    { id: "wallpaper", label: "아트월 & 포인트월", price: 150 },
  ];

  const estimate = useMemo(() => {
    const tierObj = tiers.find((t) => t.id === tier)!;
    let base = 0;
    selectedRooms.forEach((room) => {
      base += (basePricePerPyeong[room] || 80) * size / selectedRooms.length;
    });
    base *= tierObj.multiplier;
    const addonTotal = addons.reduce((sum, id) => sum + (addonOptions.find((a) => a.id === id)?.price || 0), 0);
    const total = base + addonTotal;
    return { base: Math.round(base), addons: addonTotal, total: Math.round(total) };
  }, [selectedRooms, size, tier, addons]);

  const toggleRoom = (id: string) => {
    setSelectedRooms((prev) => prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]);
  };

  const toggleAddon = (id: string) => {
    setAddons((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-caramel text-sm tracking-widest font-semibold mb-3">ESTIMATE</p>
          <h2 className="heading-responsive text-charcoal font-display korean-text mb-4">
            인테리어 견적 시뮬레이터
          </h2>
          <p className="text-text/50 max-w-md mx-auto korean-text">
            공간과 조건을 선택하면 예상 견적을 바로 확인할 수 있습니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Configurator */}
          <div className="lg:col-span-3 space-y-8">
            {/* Step 1: Rooms */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-caramel text-white rounded-full text-xs flex items-center justify-center">1</span>
                시공 공간 선택
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {roomOptions.map((room) => (
                  <button key={room.id} onClick={() => toggleRoom(room.id)}
                    className={`p-3 rounded-xl text-center transition-all min-h-[72px] border-2 ${
                      selectedRooms.includes(room.id)
                        ? "border-caramel bg-caramel/5"
                        : "border-gray-100 hover:border-caramel/30"
                    }`}
                  >
                    <span className="text-2xl block">{room.icon}</span>
                    <span className="text-xs mt-1 block text-charcoal/70">{room.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Size */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-caramel text-white rounded-full text-xs flex items-center justify-center">2</span>
                평수
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text/50">면적</span>
                <span className="text-caramel font-bold text-lg">{size}평</span>
              </div>
              <input type="range" min={10} max={60} value={size}
                onChange={(e) => setSize(Number(e.target.value))} className="w-full"
              />
              <div className="flex justify-between text-xs text-text/30 mt-1">
                <span>10평</span><span>60평</span>
              </div>
            </div>

            {/* Step 3: Tier */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-caramel text-white rounded-full text-xs flex items-center justify-center">3</span>
                자재 등급
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tiers.map((t) => (
                  <button key={t.id} onClick={() => setTier(t.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all min-h-[80px] ${
                      tier === t.id ? t.color + " border-caramel" : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <p className="font-bold text-charcoal text-sm">{t.label}</p>
                    <p className="text-text/40 text-xs mt-1 korean-text">{t.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-ons */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-caramel text-white rounded-full text-xs flex items-center justify-center">4</span>
                추가 옵션
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {addonOptions.map((addon) => (
                  <button key={addon.id} onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border-2 text-left transition-all min-h-[56px] ${
                      addons.includes(addon.id) ? "border-caramel bg-caramel/5" : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <p className="text-sm font-medium text-charcoal">{addon.label}</p>
                    <p className="text-xs text-caramel">+{addon.price}만원</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimate Result */}
          <div className="lg:col-span-2">
            <div className="bg-charcoal rounded-2xl p-6 shadow-lg sticky top-24 text-white">
              <h3 className="font-display text-lg mb-6">예상 견적</h3>

              {selectedRooms.length === 0 ? (
                <p className="text-white/30 text-sm korean-text text-center py-8">
                  왼쪽에서 시공 공간을 선택해 주세요
                </p>
              ) : (
                <>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">시공 공간</span>
                      <span>{selectedRooms.map((r) => roomOptions.find((o) => o.id === r)?.label).join(", ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">면적</span>
                      <span>{size}평</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">자재 등급</span>
                      <span>{tiers.find((t) => t.id === tier)?.label}</span>
                    </div>
                    {addons.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-white/50">추가 옵션</span>
                        <span className="text-right">{addons.map((a) => addonOptions.find((o) => o.id === a)?.label).join(", ")}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">시공비</span>
                      <span>{estimate.base.toLocaleString()}만원</span>
                    </div>
                    {estimate.addons > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">추가 옵션</span>
                        <span>{estimate.addons.toLocaleString()}만원</span>
                      </div>
                    )}
                    <div className="border-t border-white/10 pt-3 flex justify-between">
                      <span className="font-semibold">총 예상 견적</span>
                      <span className="text-caramel font-display text-2xl font-bold">
                        {estimate.total.toLocaleString()}<span className="text-sm">만원</span>
                      </span>
                    </div>
                  </div>

                  <a href="/consult" className="btn-accent w-full mt-6 text-center">
                    이 견적으로 상담 신청
                  </a>
                  <p className="text-white/20 text-[10px] text-center mt-3 korean-text">
                    * 실제 견적은 현장 실측 후 확정됩니다
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
