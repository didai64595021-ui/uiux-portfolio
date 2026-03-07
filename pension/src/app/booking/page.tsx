"use client";

import { useState } from "react";
import { rooms } from "@/data/rooms";

export default function BookingPage() {
  const [form, setForm] = useState({
    room: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    name: "",
    phone: "",
    addons: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const addons = [
    { id: "bbq-hanwoo", label: "한우 BBQ 세트", price: "89,000원" },
    { id: "bbq-seafood", label: "해물 BBQ 세트", price: "79,000원" },
    { id: "flower-bath", label: "꽃 욕탕 세트", price: "35,000원" },
    { id: "telescope", label: "망원경 대여", price: "20,000원" },
    { id: "cake", label: "기념일 케이크", price: "45,000원" },
    { id: "late-checkout", label: "레이트 체크아웃 (13시)", price: "30,000원" },
  ];

  const toggleAddon = (id: string) => {
    setForm((prev) => ({
      ...prev,
      addons: prev.addons.includes(id)
        ? prev.addons.filter((a) => a !== id)
        : [...prev.addons, id],
    }));
  };

  const selectedRoom = rooms.find((r) => r.id === form.room);

  if (submitted) {
    return (
      <div className="pt-20 min-h-[100svh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-brown mb-4 korean-text">예약 신청이 완료되었습니다</h1>
          <p className="text-text/50 korean-text mb-8">
            확인 후 카카오톡 또는 전화로 안내드리겠습니다.<br/>빠른 문의: 031-000-0000
          </p>
          <a href="/" className="btn-primary active:scale-[0.98]">홈으로 돌아가기</a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-[100svh]">
      <div className="bg-brown py-14 sm:py-20">
        <div className="container-custom text-center">
          <p className="text-gold font-display text-sm tracking-[0.2em] mb-3">RESERVATION</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white korean-text">예약하기</h1>
          <p className="text-white/50 mt-4 korean-text">원하시는 객실과 날짜를 선택해 주세요</p>
        </div>
      </div>

      <div className="container-custom py-10 sm:py-16">
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="max-w-3xl mx-auto space-y-8">

          {/* Room Selection */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-display font-bold text-brown text-lg mb-4">객실 선택</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {rooms.map((room) => (
                <button key={room.id} type="button" onClick={() => setForm({ ...form, room: room.id })}
                  className={`text-left p-4 rounded-2xl border-2 transition-all min-h-[80px] ${
                    form.room === room.id ? "border-gold bg-gold/5" : "border-gray-100 hover:border-gold/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={room.image} alt={room.name} className="w-16 h-12 object-cover rounded-lg" loading="lazy" />
                    <div>
                      <p className="font-bold text-brown text-sm">{room.name}</p>
                      <p className="text-text/40 text-xs">최대 {room.capacity}인 · {room.price.toLocaleString()}원~</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dates */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-display font-bold text-brown text-lg mb-4">날짜 & 인원</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-brown mb-2">체크인 *</label>
                <input type="date" required value={form.checkIn}
                  onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                  className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 min-h-[48px]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brown mb-2">체크아웃 *</label>
                <input type="date" required value={form.checkOut}
                  onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                  className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 min-h-[48px]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brown mb-2">인원</label>
                <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 min-h-[48px]"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                    <option key={n} value={n}>{n}명</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-display font-bold text-brown text-lg mb-4">추가 옵션</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {addons.map((addon) => (
                <button key={addon.id} type="button" onClick={() => toggleAddon(addon.id)}
                  className={`text-left p-4 rounded-xl border-2 transition-all min-h-[56px] ${
                    form.addons.includes(addon.id) ? "border-gold bg-gold/5" : "border-gray-100 hover:border-gold/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-brown">{addon.label}</span>
                    <span className="text-xs text-gold-dark font-semibold">{addon.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-display font-bold text-brown text-lg mb-4">예약자 정보</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-brown mb-2">이름 *</label>
                <input type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 min-h-[48px]" placeholder="홍길동"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brown mb-2">연락처 *</label>
                <input type="tel" required value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 min-h-[48px]" placeholder="010-0000-0000"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-brown mb-2">요청사항</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3} className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 resize-none"
                placeholder="특별한 요청사항이 있으시면 적어주세요"
              />
            </div>
          </div>

          {/* Summary */}
          {selectedRoom && (
            <div className="bg-gold/10 rounded-3xl p-6 border border-gold/20">
              <h3 className="font-display font-bold text-brown mb-3">예약 요약</h3>
              <div className="text-sm space-y-1 text-text/60">
                <p>객실: <span className="text-brown font-semibold">{selectedRoom.name}</span></p>
                {form.checkIn && <p>체크인: {form.checkIn}</p>}
                {form.checkOut && <p>체크아웃: {form.checkOut}</p>}
                <p>인원: {form.guests}명</p>
                {form.addons.length > 0 && (
                  <p>추가: {form.addons.map((id) => addons.find((a) => a.id === id)?.label).join(", ")}</p>
                )}
              </div>
            </div>
          )}

          <button type="submit" className="btn-primary w-full text-lg active:scale-[0.98]">예약 신청하기</button>
          <p className="text-text/30 text-xs text-center korean-text">
            * 본 사이트는 포트폴리오 데모입니다. 실제 예약이 진행되지 않습니다.
          </p>
        </form>
      </div>
    </div>
  );
}
