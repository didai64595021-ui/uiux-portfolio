"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { quizSteps, getQuizResult } from "@/data/quiz";
import { getTreatmentById } from "@/data/treatments";
import { useLanguage } from "@/i18n/LanguageContext";

export default function QuizPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [showResult, setShowResult] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const step = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  const handleSelect = useCallback(
    (optionId: string) => {
      const stepId = step.id;

      if (step.type === "single") {
        setAnswers((prev) => ({ ...prev, [stepId]: [optionId] }));
      } else {
        setAnswers((prev) => {
          const current = prev[stepId] || [];
          if (optionId === "none") {
            return { ...prev, [stepId]: ["none"] };
          }
          const filtered = current.filter((id) => id !== "none");
          if (filtered.includes(optionId)) {
            return {
              ...prev,
              [stepId]: filtered.filter((id) => id !== optionId),
            };
          }
          if (filtered.length >= 3 && stepId === "concern") {
            return prev;
          }
          return { ...prev, [stepId]: [...filtered, optionId] };
        });
      }
    },
    [step]
  );

  const canProceed = (answers[step?.id] || []).length > 0;

  const handleNext = useCallback(() => {
    if (!canProceed) return;

    setTransitioning(true);
    setTimeout(() => {
      if (currentStep < quizSteps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
      setTransitioning(false);
    }, 300);
  }, [canProceed, currentStep]);

  const handleBack = useCallback(() => {
    if (showResult) {
      setShowResult(false);
      return;
    }
    if (currentStep > 0) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev - 1);
        setTransitioning(false);
      }, 300);
    }
  }, [currentStep, showResult]);

  const result = showResult ? getQuizResult(answers) : null;

  if (showResult && result) {
    const primaryTreatments = result.primaryTreatments
      .map(getTreatmentById)
      .filter(Boolean);
    const secondaryTreatments = result.secondaryTreatments
      .map(getTreatmentById)
      .filter(Boolean);

    return (
      <div className="min-h-screen bg-bg pt-20 sm:pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Result Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-accent-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary mb-3">
              {t('분석 결과', '分析結果')}
            </h1>
            <p className="text-sm sm:text-base korean-text text-gray-cool max-w-lg mx-auto">
              {t(result.summary, result.summaryZh)}
            </p>
          </div>

          {/* Primary Recommendations */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                1
              </span>
              {t('핵심 추천 시술', '核心推薦療程')}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {primaryTreatments.map((tr) => {
                if (!tr) return null;
                return (
                  <Link
                    key={tr.id}
                    href={`/treatments/${tr.id}`}
                    className="bg-white rounded-2xl p-5 border border-accent/30 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{tr.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg text-primary">
                          {t(tr.name, tr.nameZh)}
                        </h3>
                        <p className="text-xs text-gray-cool mt-0.5">
                          {tr.nameEn}
                        </p>
                        <p className="text-sm korean-text text-gray-cool mt-2">
                          {t(tr.shortDesc, tr.shortDescZh)}
                        </p>
                        <div className="mt-3 flex gap-4 text-xs">
                          <span className="text-gray-cool">
                            {t(tr.duration, tr.durationZh)}
                          </span>
                          <span className="text-gray-cool">
                            {t(tr.sessions, tr.sessionsZh)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-accent-dark font-medium">
                      {t('상세 보기', '查看詳情')}
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Secondary Recommendations */}
          {secondaryTreatments.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-warm text-primary flex items-center justify-center text-xs">
                  2
                </span>
                {t('보완 추천 시술', '輔助推薦療程')}
              </h2>
              <div className="space-y-3">
                {secondaryTreatments.map((tr) => {
                  if (!tr) return null;
                  return (
                    <Link
                      key={tr.id}
                      href={`/treatments/${tr.id}`}
                      className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-warm/50 hover:border-accent/30 hover:shadow-md transition-all min-h-[48px]"
                    >
                      <span className="text-xl">{tr.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-primary">
                          {t(tr.name, tr.nameZh)}
                        </h3>
                        <p className="text-xs text-gray-cool">
                          {t(tr.shortDesc, tr.shortDescZh)}
                        </p>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-cool"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
              {t('맞춤 상담 예약', '預約專屬諮詢')}
            </h3>
            <p className="text-sm text-white/60 korean-text mb-5">
              {t(
                '분석 결과를 바탕으로 전문의가 직접 상담해 드립니다.',
                '根據分析結果，由專科醫師親自為您諮詢。'
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-accent text-primary font-semibold text-sm hover:bg-accent-dark hover:text-white transition-all min-h-[48px]"
              >
                {t('예약 상담하기', '預約諮詢')}
              </Link>
              <Link
                href={`/routine`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all min-h-[48px]"
              >
                {t('스킨케어 루틴 확인', '查看護膚流程')}
              </Link>
            </div>
          </div>

          {/* Restart */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setAnswers({});
                setCurrentStep(0);
                setShowResult(false);
              }}
              className="text-sm text-gray-cool hover:text-primary transition-colors min-h-[44px]"
            >
              {t('다시 진단받기', '重新檢測')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg pt-20 sm:pt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-cool">
              {currentStep + 1} / {quizSteps.length}
            </span>
            <span className="text-xs text-accent-dark font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1.5 bg-gray-warm rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div
          className={`transition-all duration-300 ${
            transitioning
              ? "opacity-0 translate-x-4"
              : "opacity-100 translate-x-0"
          }`}
        >
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl text-primary mb-2">
            {t(step.question, step.questionZh)}
          </h1>
          {step.subtitle && (
            <p className="text-sm text-gray-cool korean-text">{t(step.subtitle, step.subtitleZh || '')}</p>
          )}

          {/* Options */}
          <div className="mt-8 space-y-3">
            {step.options.map((option) => {
              const isSelected = (answers[step.id] || []).includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all min-h-[48px] ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-gray-warm/50 bg-white hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? "border-primary bg-primary"
                          : "border-gray-warm"
                      }`}
                    >
                      {isSelected && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-sm sm:text-base font-medium ${
                          isSelected ? "text-primary" : "text-text"
                        }`}
                      >
                        {option.icon && (
                          <span className="mr-2">{option.icon}</span>
                        )}
                        {t(option.label, option.labelZh)}
                      </p>
                      {option.description && (
                        <p className="text-xs text-gray-cool mt-0.5">
                          {t(option.description, option.descriptionZh || '')}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-[48px] ${
              currentStep === 0
                ? "text-gray-warm cursor-not-allowed"
                : "text-gray-cool hover:text-primary hover:bg-gray-warm/30"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t('이전', '上一步')}
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all min-h-[48px] ${
              canProceed
                ? "bg-primary text-white hover:bg-primary-dark"
                : "bg-gray-warm text-gray-cool cursor-not-allowed"
            }`}
          >
            {currentStep === quizSteps.length - 1 ? t("결과 보기", "查看結果") : t("다음", "下一步")}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
