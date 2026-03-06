"use client";

import { treatments } from "@/data/treatments";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

interface ComparisonMatrixProps {
  treatmentIds: string[];
  className?: string;
}

export default function ComparisonMatrix({
  treatmentIds,
  className = "",
}: ComparisonMatrixProps) {
  const { t } = useLanguage();

  const items = treatmentIds
    .map((id) => treatments.find((tr) => tr.id === id))
    .filter(Boolean);

  if (items.length < 2) return null;

  const painLabels = ["", t("매우 약함", "極輕微"), t("약함", "輕微"), t("보통", "中等"), t("강함", "明顯"), t("매우 강함", "強烈")];

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((treatment) => {
          if (!treatment) return null;
          return (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl p-6 border border-gray-warm/50 hover:border-accent/50 hover:shadow-lg transition-all group"
            >
              {/* Header */}
              <div className="mb-5">
                <span className="text-2xl mb-2 block">{treatment.icon}</span>
                <h3 className="font-serif text-xl text-primary">
                  {t(treatment.name, treatment.nameZh)}
                </h3>
                <p className="text-xs text-gray-cool mt-1">
                  {treatment.nameEn}
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                {/* Duration */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-cool">{t('시술 시간', '療程時間')}</span>
                    <span className="text-text font-medium">
                      {t(treatment.duration, treatment.durationZh)}
                    </span>
                  </div>
                </div>

                {/* Sessions */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-cool">{t('권장 횟수', '建議次數')}</span>
                    <span className="text-text font-medium">
                      {t(treatment.sessions, treatment.sessionsZh)}
                    </span>
                  </div>
                </div>

                {/* Downtime */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-cool">{t('다운타임', '恢復期')}</span>
                    <span className="text-text font-medium">
                      {t(treatment.downtime, treatment.downtimeZh)}
                    </span>
                  </div>
                </div>

                {/* Pain Level */}
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-cool">{t('통증 정도', '疼痛程度')}</span>
                    <span className="text-text font-medium">
                      {painLabels[treatment.painLevel]}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 flex-1 rounded-full ${
                          level <= treatment.painLevel
                            ? "bg-accent"
                            : "bg-gray-warm"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="pt-2 border-t border-gray-warm/50">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-cool">{t('가격대', '價格帶')}</span>
                    <span className="text-accent-dark font-semibold">
                      {t(treatment.priceRange, treatment.priceRangeZh)}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/treatments/${treatment.id}`}
                className="block mt-5 py-3 text-center rounded-xl bg-primary/5 text-primary text-sm font-medium hover:bg-primary hover:text-white transition-colors min-h-[44px]"
              >
                {t('상세 보기', '查看詳情')}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
