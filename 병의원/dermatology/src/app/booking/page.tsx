"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  CheckCircle2,
  User,
  FileText,
} from "lucide-react";

const treatmentOptions = [
  "피부질환 (여드름, 아토피 등)",
  "레이저 시술",
  "보톡스/필러",
  "리프팅 (울쎄라, 써마지)",
  "피부관리",
  "탈모치료",
  "기타 상담",
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-muted">
          <div className="container-base">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-primary font-serif text-lg italic">
                Reservation
              </span>
              <h1 className="section-title mt-2 korean-text">예약 & 상담</h1>
              <p className="section-subtitle max-w-2xl korean-text">
                편한 시간에 방문하실 수 있도록
                <br className="hidden sm:block" />
                온라인 예약과 전화 상담을 운영합니다
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-base">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {submitted ? (
                  <div className="card text-center py-12 sm:py-16">
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 korean-text">
                      예약 신청이 완료되었습니다
                    </h2>
                    <p className="text-sm sm:text-base text-secondary korean-text leading-relaxed">
                      확인 후 영업일 기준 1일 이내에
                      <br />
                      연락드리겠습니다.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline mt-6"
                    >
                      새 예약 신청
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="card">
                    <h2 className="text-lg sm:text-xl font-bold mb-6 korean-text">
                      온라인 예약 신청
                    </h2>

                    <div className="space-y-4 sm:space-y-5">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2 korean-text">
                          <User className="w-4 h-4 text-primary" />
                          이름
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="홍길동"
                          className="w-full px-4 py-3 rounded-xl border border-accent/50
                            focus:border-primary focus:ring-2 focus:ring-primary/20
                            outline-none transition-all text-sm min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2 korean-text">
                          <Phone className="w-4 h-4 text-primary" />
                          연락처
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="010-0000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-accent/50
                            focus:border-primary focus:ring-2 focus:ring-primary/20
                            outline-none transition-all text-sm min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2 korean-text">
                          <Calendar className="w-4 h-4 text-primary" />
                          희망 날짜
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-accent/50
                            focus:border-primary focus:ring-2 focus:ring-primary/20
                            outline-none transition-all text-sm min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2 korean-text">
                          <FileText className="w-4 h-4 text-primary" />
                          관심 시술
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-xl border border-accent/50
                            focus:border-primary focus:ring-2 focus:ring-primary/20
                            outline-none transition-all text-sm min-h-[44px] bg-white"
                        >
                          <option value="">선택해주세요</option>
                          {treatmentOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2 korean-text">
                          <MessageCircle className="w-4 h-4 text-primary" />
                          상담 내용
                        </label>
                        <textarea
                          rows={4}
                          placeholder="궁금하신 점이나 피부 고민을 자유롭게 적어주세요"
                          className="w-full px-4 py-3 rounded-xl border border-accent/50
                            focus:border-primary focus:ring-2 focus:ring-primary/20
                            outline-none transition-all text-sm resize-none"
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full text-center">
                        예약 신청하기
                      </button>

                      <p className="text-xs text-secondary/60 text-center korean-text">
                        * 예약 확정은 병원 확인 후 개별 연락드립니다
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Quick Contact */}
                <div className="card">
                  <h3 className="font-bold text-base sm:text-lg mb-4 korean-text">
                    빠른 상담
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:02-1234-5678"
                      className="flex items-center gap-3 p-3 sm:p-4 bg-muted rounded-xl
                        hover:bg-primary/5 transition-colors min-h-[48px]"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">전화 예약</p>
                        <p className="text-xs text-secondary">02-1234-5678</p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 sm:p-4 bg-muted rounded-xl
                        hover:bg-primary/5 transition-colors min-h-[48px]"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">카카오톡 상담</p>
                        <p className="text-xs text-secondary">
                          @온다피부과
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="card">
                  <h3 className="font-bold text-base sm:text-lg mb-4 korean-text">
                    진료시간
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between text-sm">
                          <span className="korean-text">평일</span>
                          <span className="font-medium">09:00 - 19:00</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between text-sm">
                          <span className="korean-text">토요일</span>
                          <span className="font-medium">09:00 - 15:00</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-secondary/50 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between text-sm text-secondary/50">
                          <span className="korean-text">점심시간</span>
                          <span>13:00 - 14:00</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-secondary/50 mt-2 korean-text">
                      * 일요일 및 공휴일 휴진
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="card">
                  <h3 className="font-bold text-base sm:text-lg mb-4 korean-text">
                    오시는 길
                  </h3>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-sm korean-text">
                      <p className="font-medium">
                        서울시 강남구 테헤란로 123 온다빌딩 3층
                      </p>
                      <p className="text-secondary mt-1">
                        강남역 2번 출구에서 도보 3분
                      </p>
                    </div>
                  </div>
                  <div className="aspect-[16/9] rounded-xl bg-muted overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-secondary/50 text-sm korean-text">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 mx-auto mb-2 text-primary/30" />
                        <p>지도 영역</p>
                        <p className="text-xs mt-1">강남역 2번 출구 도보 3분</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
