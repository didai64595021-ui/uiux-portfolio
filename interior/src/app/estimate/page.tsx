import EstimateBuilder from "@/components/EstimateBuilder";
import MaterialLibrary from "@/components/MaterialLibrary";
import Link from "next/link";

export default function EstimatePage() {
  return (
    <div className="pt-20 min-h-[100svh]">
      <div className="bg-charcoal py-14 sm:py-20">
        <div className="container-custom text-center">
          <p className="text-caramel text-sm tracking-widest font-semibold mb-3">ESTIMATE</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white korean-text">견적 시뮬레이션</h1>
          <p className="text-white/40 mt-4 korean-text">공간과 자재를 선택하고 예상 비용을 확인하세요</p>
        </div>
      </div>

      <EstimateBuilder />
      <MaterialLibrary />

      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-charcoal mb-4 korean-text">
            정확한 견적이 필요하신가요?
          </h2>
          <p className="text-text/50 korean-text mb-6">
            온라인 시뮬레이션은 참고용입니다. 정확한 견적은 현장 실측 후 무료로 제공해 드립니다.
          </p>
          <Link href="/consult" className="btn-accent active:scale-[0.98]">무료 현장 실측 신청</Link>
        </div>
      </section>
    </div>
  );
}
