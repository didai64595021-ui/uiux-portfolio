"use client";

import { useState } from "react";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";
import ScrollAnimator from "@/components/ScrollAnimator";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function BookingPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    concerns: [] as string[],
    preferredTreatment: "",
    preferredDoctor: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    agreement: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleConcernToggle = (concern: string) => {
    setFormData((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[100svh] flex items-center justify-center pt-20 px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-accent-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl text-primary mb-3">
            {t('예약 신청 완료', '預約申請完成')}
          </h1>
          <p className="text-sm korean-text text-gray-cool mb-2">
            {t('예약 신청이 접수되었습니다.', '您的預約申請已受理。')}
          </p>
          <p className="text-sm korean-text text-gray-cool mb-6">
            {t('영업시간 내에 확인 후 연락드리겠습니다.', '我們將在營業時間內確認後與您聯繫。')}
          </p>
          <div className="bg-white rounded-2xl p-5 border border-gray-warm/50 mb-6 text-left">
            <h3 className="text-sm font-medium text-primary mb-3">
              {t('예약 정보', '預約資訊')}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-cool">{t('성함', '姓名')}</span>
                <span className="text-text">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-cool">{t('연락처', '聯絡方式')}</span>
                <span className="text-text">{formData.phone}</span>
              </div>
              {formData.preferredDate && (
                <div className="flex justify-between">
                  <span className="text-gray-cool">{t('희망일', '希望日期')}</span>
                  <span className="text-text">{formData.preferredDate}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors active:scale-[0.98] min-h-[48px]"
            >
              {t('메인으로 돌아가기', '返回首頁')}
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  concerns: [],
                  preferredTreatment: "",
                  preferredDoctor: "",
                  preferredDate: "",
                  preferredTime: "",
                  message: "",
                  agreement: false,
                });
              }}
              className="text-sm text-gray-cool hover:text-primary transition-colors min-h-[44px]"
            >
              {t('다른 예약하기', '其他預約')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const concerns = [
    t("기미/색소", "斑點/色素"),
    t("주름/탄력", "皺紋/彈性"),
    t("여드름/트러블", "痘痘/問題肌"),
    t("모공/피부결", "毛孔/膚質"),
    t("볼륨/윤곽", "豐盈/輪廓"),
    t("전반적 노화", "整體老化"),
    t("피부 재생", "肌膚再生"),
    t("기타", "其他"),
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Reservation
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            {t('예약 상담', '預約諮詢')}
          </h1>
          <p className="mt-4 text-white/60 text-sm sm:text-base korean-text max-w-lg mx-auto">
            {t(
              '간단한 정보를 입력해주시면, 전문 상담팀이 빠르게 연락드립니다.',
              '請填寫簡單資訊，專業諮詢團隊將盡速與您聯繫。'
            )}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info */}
              <div>
                <h2 className="font-serif text-xl text-primary mb-5">
                  {t('기본 정보', '基本資訊')}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-cool mb-1.5">
                      {t('성함 *', '姓名 *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-warm/50 bg-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[48px]"
                      placeholder={t('이름을 입력하세요', '請輸入姓名')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-cool mb-1.5">
                      {t('연락처 *', '聯絡方式 *')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-warm/50 bg-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[48px]"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Concerns */}
              <div>
                <h2 className="font-serif text-xl text-primary mb-2">
                  {t('피부 고민', '膚質困擾')}
                </h2>
                <p className="text-xs text-gray-cool mb-4">
                  {t('해당하는 고민을 모두 선택해주세요', '請選擇所有相關的困擾')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {concerns.map((concern) => (
                    <button
                      key={concern}
                      type="button"
                      onClick={() => handleConcernToggle(concern)}
                      className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                        formData.concerns.includes(concern)
                          ? "bg-primary text-white"
                          : "bg-white text-gray-cool border border-gray-warm/50 hover:border-accent/50"
                      }`}
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Treatment */}
              <div>
                <h2 className="font-serif text-xl text-primary mb-5">
                  {t('희망 시술 & 의료진', '希望療程 & 醫療團隊')}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-cool mb-1.5">
                      {t('관심 시술', '感興趣的療程')}
                    </label>
                    <select
                      value={formData.preferredTreatment}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredTreatment: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-warm/50 bg-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[48px] appearance-none"
                    >
                      <option value="">{t('선택하세요', '請選擇')}</option>
                      {treatments.map((tr) => (
                        <option key={tr.id} value={tr.id}>
                          {t(tr.name, tr.nameZh)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-cool mb-1.5">
                      {t('선호 의료진', '偏好醫師')}
                    </label>
                    <select
                      value={formData.preferredDoctor}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredDoctor: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-warm/50 bg-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[48px] appearance-none"
                    >
                      <option value="">{t('무관', '不限')}</option>
                      {doctors.map((d) => (
                        <option key={d.id} value={d.id}>
                          {t(d.name, d.nameZh)} {t(d.title, d.titleZh)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date/Time */}
              <div>
                <h2 className="font-serif text-xl text-primary mb-5">
                  {t('희망 일시', '希望日期時間')}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-cool mb-1.5">
                      {t('희망 날짜', '希望日期')}
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredDate: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-warm/50 bg-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-cool mb-1.5">
                      {t('희망 시간', '希望時間')}
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredTime: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-warm/50 bg-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[48px] appearance-none"
                    >
                      <option value="">{t('선택하세요', '請選擇')}</option>
                      <option value="10:00">{t('오전', '上午')} 10:00</option>
                      <option value="11:00">{t('오전', '上午')} 11:00</option>
                      <option value="12:00">{t('오후', '下午')} 12:00</option>
                      <option value="13:00">{t('오후', '下午')} 1:00</option>
                      <option value="14:00">{t('오후', '下午')} 2:00</option>
                      <option value="15:00">{t('오후', '下午')} 3:00</option>
                      <option value="16:00">{t('오후', '下午')} 4:00</option>
                      <option value="17:00">{t('오후', '下午')} 5:00</option>
                      <option value="18:00">{t('오후', '下午')} 6:00</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-gray-cool mb-1.5">
                  {t('추가 메시지 (선택)', '附加訊息（選填）')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-warm/50 bg-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none"
                  placeholder={t('궁금하신 사항이나 전달사항을 적어주세요', '請填寫您的疑問或需要傳達的事項')}
                />
              </div>

              {/* Agreement */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreement"
                  required
                  checked={formData.agreement}
                  onChange={(e) =>
                    setFormData({ ...formData, agreement: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 rounded border-gray-warm accent-primary"
                />
                <label
                  htmlFor="agreement"
                  className="text-xs text-gray-cool korean-text"
                >
                  {t(
                    '개인정보 수집 및 이용에 동의합니다. 수집된 정보는 예약 상담 목적으로만 사용되며, 상담 완료 후 안전하게 파기됩니다.',
                    '同意收集及使用個人資料。收集的資料僅用於預約諮詢目的，諮詢結束後將安全銷毀。'
                  )}
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-sm sm:text-base hover:bg-primary-dark transition-colors active:scale-[0.98] min-h-[48px]"
              >
                {t('예약 신청하기', '提交預約申請')}
              </button>
            </form>
          </ScrollAnimator>

          {/* Contact Info */}
          <ScrollAnimator>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-gray-warm/50">
                <h3 className="text-sm font-medium text-primary mb-3">
                  {t('전화 상담', '電話諮詢')}
                </h3>
                <a
                  href="tel:02-1234-5678"
                  className="text-lg font-serif text-accent-dark hover:text-primary transition-colors"
                >
                  02-1234-5678
                </a>
                <p className="text-xs text-gray-cool mt-2">
                  {t('평일 10:00 ~ 19:00 | 토 10:00 ~ 15:00', '週一至週五 10:00~19:00 | 週六 10:00~15:00')}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-warm/50">
                <h3 className="text-sm font-medium text-primary mb-3">
                  {t('오시는 길', '交通指南')}
                </h3>
                <p className="text-sm text-gray-cool korean-text">
                  {t(
                    '서울특별시 강남구 테헤란로 123',
                    '首爾特別市江南區德黑蘭路123號'
                  )}
                  <br />
                  {t('온다빌딩 4층', 'ONDA大樓4樓')}
                </p>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
}
