"use client";

import { useState } from "react";

export default function ConsultPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    propertyType: "",
    rooms: [] as string[],
    size: "",
    budget: "",
    style: "",
    timeline: "",
    consultType: "",
    name: "",
    phone: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleRoom = (room: string) => {
    setForm((prev) => ({
      ...prev,
      rooms: prev.rooms.includes(room) ? prev.rooms.filter((r) => r !== room) : [...prev.rooms, room],
    }));
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-[100svh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-caramel/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-display font-bold text-charcoal mb-4 korean-text">상담 신청이 완료되었습니다</h1>
          <p className="text-text/50 korean-text mb-8">담당 디자이너가 1영업일 이내에 연락드리겠습니다.</p>
          <a href="/" className="btn-primary active:scale-[0.98]">홈으로 돌아가기</a>
        </div>
      </div>
    );
  }

  const steps = [
    // Step 1: Property
    <div key="1" className="space-y-6 animate-fade-in">
      <h3 className="font-bold text-charcoal text-lg">어떤 공간을 시공하시나요?</h3>
      <div className="grid grid-cols-2 gap-3">
        {[
          { value: "apartment", label: "아파트", icon: "🏢" },
          { value: "villa", label: "주택/빌라", icon: "🏡" },
          { value: "office", label: "사무실", icon: "🏗️" },
          { value: "commercial", label: "상업공간", icon: "🏪" },
        ].map((opt) => (
          <button key={opt.value} type="button"
            onClick={() => setForm({ ...form, propertyType: opt.value })}
            className={`p-5 rounded-xl border-2 text-center transition-all min-h-[80px] ${
              form.propertyType === opt.value ? "border-caramel bg-caramel/5" : "border-gray-100 hover:border-caramel/30"
            }`}
          >
            <span className="text-2xl block">{opt.icon}</span>
            <span className="text-sm font-medium text-charcoal mt-1 block">{opt.label}</span>
          </button>
        ))}
      </div>

      <h3 className="font-bold text-charcoal text-lg">시공 공간 (복수 선택)</h3>
      <div className="flex flex-wrap gap-2">
        {["거실", "주방", "안방", "아이방", "욕실", "현관", "서재", "드레스룸", "전체"].map((room) => (
          <button key={room} type="button" onClick={() => toggleRoom(room)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all min-h-[40px] ${
              form.rooms.includes(room) ? "bg-caramel text-white" : "bg-warm text-text/50 hover:bg-caramel/10"
            }`}
          >{room}</button>
        ))}
      </div>
    </div>,

    // Step 2: Details
    <div key="2" className="space-y-6 animate-fade-in">
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">평수</label>
        <select value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })}
          className="w-full bg-warm border border-gray-200 rounded-lg px-4 py-3 min-h-[48px]"
        >
          <option value="">선택</option>
          <option>10평 이하</option><option>10~20평</option><option>20~30평</option>
          <option>30~40평</option><option>40~50평</option><option>50평 이상</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">예산</label>
        <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
          className="w-full bg-warm border border-gray-200 rounded-lg px-4 py-3 min-h-[48px]"
        >
          <option value="">선택</option>
          <option>2,000만원 이하</option><option>2,000~4,000만원</option>
          <option>4,000~6,000만원</option><option>6,000~8,000만원</option>
          <option>8,000만원~1억</option><option>1억 이상</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">선호 스타일</label>
        <div className="flex flex-wrap gap-2">
          {["미니멀 모던", "내추럴 우드", "북유럽", "모던 클래식", "인더스트리얼", "미정"].map((s) => (
            <button key={s} type="button" onClick={() => setForm({ ...form, style: s })}
              className={`px-4 py-2 rounded-full text-sm min-h-[40px] ${
                form.style === s ? "bg-caramel text-white" : "bg-warm text-text/50"
              }`}
            >{s}</button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">희망 시공 시기</label>
        <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}
          className="w-full bg-warm border border-gray-200 rounded-lg px-4 py-3 min-h-[48px]"
        >
          <option value="">선택</option>
          <option>1개월 이내</option><option>1~3개월</option>
          <option>3~6개월</option><option>6개월 이후</option><option>미정</option>
        </select>
      </div>
    </div>,

    // Step 3: Contact
    <div key="3" className="space-y-6 animate-fade-in">
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">상담 방식</label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "visit", label: "현장 방문" },
            { value: "video", label: "화상 상담" },
            { value: "showroom", label: "쇼룸 방문" },
          ].map((opt) => (
            <button key={opt.value} type="button"
              onClick={() => setForm({ ...form, consultType: opt.value })}
              className={`py-3 rounded-lg text-sm font-medium transition-all min-h-[44px] ${
                form.consultType === opt.value ? "bg-charcoal text-white" : "bg-warm text-text/50"
              }`}
            >{opt.label}</button>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">이름 *</label>
          <input type="text" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-warm border border-gray-200 rounded-lg px-4 py-3 min-h-[48px]" placeholder="홍길동"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">연락처 *</label>
          <input type="tel" required value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-warm border border-gray-200 rounded-lg px-4 py-3 min-h-[48px]" placeholder="010-0000-0000"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">시공 주소</label>
        <input type="text" value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full bg-warm border border-gray-200 rounded-lg px-4 py-3 min-h-[48px]" placeholder="서울시 강남구 ..."
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">추가 요청사항</label>
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={3} className="w-full bg-warm border border-gray-200 rounded-lg px-4 py-3 resize-none"
          placeholder="참고할 이미지나 요청사항을 적어주세요"
        />
      </div>
    </div>,
  ];

  return (
    <div className="pt-20 min-h-[100svh]">
      <div className="bg-charcoal py-14 sm:py-20">
        <div className="container-custom text-center">
          <p className="text-caramel text-sm tracking-widest font-semibold mb-3">CONSULTATION</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white korean-text">무료 상담 신청</h1>
          <p className="text-white/40 mt-4 korean-text">3단계로 간편하게 상담을 신청하세요</p>
        </div>
      </div>

      <div className="container-custom py-10 max-w-2xl mx-auto">
        {/* Progress */}
        <div className="flex items-center justify-between mb-10">
          {["공간 선택", "세부 사항", "연락처"].map((label, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= i ? "bg-caramel text-white" : "bg-warm text-text/30"
              }`}>
                {step > i ? "✓" : i + 1}
              </div>
              <span className={`hidden sm:block ml-2 text-xs ${step >= i ? "text-charcoal" : "text-text/30"}`}>{label}</span>
              {i < 2 && <div className={`w-8 sm:w-20 h-0.5 mx-2 ${step > i ? "bg-caramel" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); if (step < 2) setStep(step + 1); else setSubmitted(true); }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          {steps[step]}

          <div className="flex gap-3 mt-8">
            {step > 0 && (
              <button type="button" onClick={() => setStep(step - 1)} className="btn-outline flex-1">이전</button>
            )}
            <button type="submit" className="btn-accent flex-1 active:scale-[0.98]">
              {step < 2 ? "다음" : "상담 신청하기"}
            </button>
          </div>
        </form>

        <p className="text-text/25 text-xs text-center mt-4 korean-text">
          * 본 사이트는 포트폴리오 데모입니다. 실제 상담이 진행되지 않습니다.
        </p>
      </div>
    </div>
  );
}
