"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { motion } from "framer-motion";
import {
  Droplets,
  Zap,
  Syringe,
  ArrowUpRight,
  Sparkles,
  Scissors,
  CheckCircle2,
} from "lucide-react";

const treatments = [
  {
    id: "skin-disease",
    icon: Droplets,
    title: "피부질환 치료",
    subtitle: "Skin Disease Treatment",
    desc: "정확한 진단을 바탕으로 피부질환의 근본 원인을 치료합니다. 단순 증상 완화가 아닌, 재발 방지까지 고려한 체계적인 치료 프로토콜을 제공합니다.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    items: [
      {
        name: "여드름/여드름 흉터",
        desc: "피지 조절, 항염 치료, 레이저 복합 치료로 여드름과 흉터를 동시에 개선합니다.",
      },
      {
        name: "아토피 피부염",
        desc: "피부 장벽 회복과 면역 조절을 통해 아토피의 만성적 재발을 관리합니다.",
      },
      {
        name: "건선/습진",
        desc: "광선치료, 외용제, 면역조절제를 활용한 맞춤형 건선 치료를 진행합니다.",
      },
      {
        name: "두드러기/알레르기",
        desc: "원인 물질 검사와 함께 급성/만성 두드러기를 체계적으로 치료합니다.",
      },
    ],
  },
  {
    id: "laser",
    icon: Zap,
    title: "레이저 시술",
    subtitle: "Laser Treatment",
    desc: "최신 FDA 승인 레이저 장비를 사용하여 색소, 홍조, 모공, 흉터 등 다양한 피부 고민을 해결합니다.",
    color: "bg-rose-50 text-rose-600 border-rose-100",
    items: [
      {
        name: "피코레이저",
        desc: "초단위 레이저로 색소를 미세하게 분해하여 기미, 잡티, 문신을 효과적으로 제거합니다.",
      },
      {
        name: "프락셀 레이저",
        desc: "미세 열 손상을 통해 콜라겐 재생을 유도, 여드름 흉터와 모공을 개선합니다.",
      },
      {
        name: "혈관레이저",
        desc: "모세혈관확장, 안면홍조, 혈관종 등 혈관성 피부질환을 선택적으로 치료합니다.",
      },
      {
        name: "제모레이저",
        desc: "다이오드 레이저로 통증을 최소화하면서 영구 제모 효과를 제공합니다.",
      },
    ],
  },
  {
    id: "botox-filler",
    icon: Syringe,
    title: "보톡스 & 필러",
    subtitle: "Botox & Filler",
    desc: "얼굴 비율과 근육의 움직임을 정밀 분석하여, 자연스러우면서도 확실한 변화를 만들어냅니다.",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    items: [
      {
        name: "보톡스",
        desc: "이마, 미간, 눈가 주름 개선과 턱 축소, 승모근 보톡스까지 다양하게 적용합니다.",
      },
      {
        name: "필러",
        desc: "이마, 코, 팔자, 입술 등 볼륨 보충으로 자연스러운 동안 효과를 만듭니다.",
      },
      {
        name: "스킨보톡스",
        desc: "피부 표면에 미세 주입하여 모공 축소, 피부결 개선, 탄력 증가 효과를 줍니다.",
      },
      {
        name: "윤곽주사",
        desc: "지방 분해 주사로 이중턱, 볼살 등 부위별 소량 지방을 효과적으로 제거합니다.",
      },
    ],
  },
  {
    id: "lifting",
    icon: ArrowUpRight,
    title: "리프팅",
    subtitle: "Lifting",
    desc: "비수술적 리프팅으로 처진 피부를 끌어올리고, 콜라겐 생성을 촉진하여 탄력 있는 피부로 개선합니다.",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    items: [
      {
        name: "울쎄라",
        desc: "초음파 에너지로 SMAS층까지 도달하여 근본적인 리프팅 효과를 제공합니다.",
      },
      {
        name: "써마지",
        desc: "고주파 에너지로 진피층 콜라겐을 수축·재생시켜 피부 탄력을 회복합니다.",
      },
      {
        name: "실 리프팅",
        desc: "녹는 실을 피부 아래에 삽입하여 즉각적인 리프팅과 장기적 콜라겐 생성을 유도합니다.",
      },
      {
        name: "인모드",
        desc: "RF 에너지로 피부 탄력과 지방 감소를 동시에 달성하는 복합 리프팅 시술입니다.",
      },
    ],
  },
  {
    id: "skincare",
    icon: Sparkles,
    title: "피부관리",
    subtitle: "Skin Care",
    desc: "전문 피부관리 프로그램으로 시술 효과를 극대화하고, 건강한 피부 컨디션을 유지합니다.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    items: [
      {
        name: "수분관리",
        desc: "히알루론산 등 보습 성분을 깊숙이 전달하여 촉촉하고 건강한 피부를 만듭니다.",
      },
      {
        name: "미백관리",
        desc: "비타민C, 글루타치온 등 미백 유효성분으로 피부톤을 균일하게 개선합니다.",
      },
      {
        name: "모공관리",
        desc: "아쿠아필, 스케일링으로 모공 속 노폐물을 제거하고 모공을 축소합니다.",
      },
      {
        name: "재생관리",
        desc: "시술 후 빠른 회복과 피부 재생을 돕는 전문 관리 프로그램입니다.",
      },
    ],
  },
  {
    id: "hair-loss",
    icon: Scissors,
    title: "탈모치료",
    subtitle: "Hair Loss Treatment",
    desc: "정밀 두피 진단을 기반으로 탈모 원인을 파악하고, 맞춤형 복합 치료로 모발 건강을 회복합니다.",
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    items: [
      {
        name: "두피진단",
        desc: "고배율 두피 카메라와 혈액검사로 탈모 원인과 진행 단계를 정확히 파악합니다.",
      },
      {
        name: "메조테라피",
        desc: "모발 성장 인자와 영양 성분을 두피에 직접 주입하여 모근을 강화합니다.",
      },
      {
        name: "PRP 치료",
        desc: "자가 혈소판 풍부 혈장을 활용하여 자연적인 모발 재생을 촉진합니다.",
      },
      {
        name: "저출력 레이저",
        desc: "두피 혈류를 개선하고 모낭 세포 활성화를 통해 탈모 진행을 억제합니다.",
      },
    ],
  },
];

export default function TreatmentsPage() {
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
                Treatments
              </span>
              <h1 className="section-title mt-2 korean-text">전문 진료과목</h1>
              <p className="section-subtitle max-w-2xl korean-text">
                온다 피부과는 피부질환부터 미용시술까지,
                <br className="hidden sm:block" />
                피부에 관한 모든 고민을 해결합니다
              </p>
            </motion.div>
          </div>
        </section>

        {/* Treatment List */}
        <section className="section-padding">
          <div className="container-base space-y-16 sm:space-y-24">
            {treatments.map((treatment, i) => (
              <motion.div
                key={treatment.id}
                id={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-4 sm:gap-5 mb-8">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${treatment.color}
                      flex items-center justify-center flex-shrink-0 border`}
                  >
                    <treatment.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold korean-text">
                      {treatment.title}
                    </h2>
                    <span className="text-sm text-secondary font-serif italic">
                      {treatment.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-secondary korean-text leading-relaxed mb-8 max-w-3xl">
                  {treatment.desc}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                  {treatment.items.map((item) => (
                    <div
                      key={item.name}
                      className="card !p-5 sm:!p-6 flex gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base mb-1 korean-text">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-secondary korean-text leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {i < treatments.length - 1 && (
                  <div className="mt-12 sm:mt-16 border-b border-accent/50" />
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
