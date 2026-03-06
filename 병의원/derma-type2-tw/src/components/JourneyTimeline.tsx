"use client";

import { useRef } from "react";
import type { JourneyStep } from "@/data/treatments";
import { useLanguage } from "@/i18n/LanguageContext";

interface JourneyTimelineProps {
  steps: JourneyStep[];
  treatmentName: string;
  className?: string;
}

export default function JourneyTimeline({
  steps,
  treatmentName,
  className = "",
}: JourneyTimelineProps) {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className={className}>
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-1 snap-x snap-mandatory"
      >
        {steps.map((step, index) => (
          <div
            key={step.session}
            className="flex-shrink-0 w-[260px] sm:w-[300px] snap-start"
          >
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-warm/50 h-full relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 -right-2 sm:-right-3 w-4 sm:w-6 h-0.5 bg-accent/30" />
              )}

              {/* Step Number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {t(step.label, step.labelZh)}
                  </p>
                  <p className="text-xs text-gray-cool">{treatmentName}</p>
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="w-full aspect-[16/10] rounded-xl bg-gradient-to-br from-accent-light/30 to-accent/10 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary/80">
                    {step.improvement}%
                  </div>
                  <p className="text-[10px] text-gray-cool mt-1">
                    {t('개선 진행도', '改善進度')}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm korean-text text-gray-cool">
                {t(step.description, step.descriptionZh)}
              </p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-2 bg-gray-warm/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${step.improvement}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator for mobile */}
      <div className="flex justify-center mt-4 gap-1.5 sm:hidden">
        {steps.map((_, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 rounded-full bg-gray-warm"
          />
        ))}
      </div>
    </div>
  );
}
