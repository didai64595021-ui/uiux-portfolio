"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const doctors = [
  {
    name: "김온다",
    role: "대표원장",
    specialty: "피부과 전문의",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop",
    greeting:
      "환자 한 분 한 분의 피부를 소중히 여기며, 과학적 근거에 기반한 정직한 진료를 약속드립니다. 불필요한 시술은 권하지 않으며, 꼭 필요한 치료만을 제안합니다.",
    education: [
      "서울대학교 의과대학 졸업",
      "서울대학교 의학대학원 석사",
      "서울대학교병원 인턴 수료",
      "서울대학교병원 피부과 전공의 수료",
    ],
    certifications: [
      "피부과 전문의 자격",
      "대한피부과학회 정회원",
      "대한레이저의학회 정회원",
      "대한미용피부외과학회 정회원",
    ],
    specialties: [
      "레이저 피부시술 (피코, 프락셀)",
      "리프팅 (울쎄라, 써마지)",
      "피부질환 (여드름, 아토피)",
      "탈모 치료",
    ],
  },
  {
    name: "이수진",
    role: "진료원장",
    specialty: "피부과 전문의",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop",
    greeting:
      "자연스러움이 가장 아름답다고 생각합니다. 환자분의 얼굴 비율과 피부 특성을 섬세하게 분석하여, 티나지 않으면서도 확실한 변화를 만들어 드립니다.",
    education: [
      "연세대학교 의과대학 졸업",
      "연세대학교 의학대학원 석사",
      "세브란스병원 인턴 수료",
      "세브란스병원 피부과 전공의 수료",
    ],
    certifications: [
      "피부과 전문의 자격",
      "대한피부과학회 정회원",
      "대한미용피부외과학회 정회원",
      "보톡스/필러 공인 인증의",
    ],
    specialties: [
      "보톡스 & 필러",
      "스킨보톡스 & 물광주사",
      "피부관리 (수분, 미백)",
      "안면 윤곽 시술",
    ],
  },
];

export default function DoctorsPage() {
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
                Doctors
              </span>
              <h1 className="section-title mt-2 korean-text">의료진 소개</h1>
              <p className="section-subtitle max-w-2xl korean-text">
                풍부한 임상 경험과 전문성을 갖춘 의료진이
                <br className="hidden sm:block" />
                최선의 진료를 약속합니다
              </p>
            </motion.div>
          </div>
        </section>

        {/* Doctors */}
        <section className="section-padding">
          <div className="container-base space-y-16 sm:space-y-24">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                  {/* Photo */}
                  <div className="relative">
                    <div className="aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center bg-muted"
                        style={{ backgroundImage: `url('${doc.image}')` }}
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl shadow-lg">
                      <span className="text-sm sm:text-base font-bold">
                        {doc.name}
                      </span>
                      <span className="text-xs sm:text-sm text-white/80 ml-2">
                        {doc.role}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="pt-4 lg:pt-8">
                    <div className="mb-6 sm:mb-8">
                      <span className="text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                        {doc.specialty}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold mt-3 korean-text">
                        {doc.name} {doc.role}
                      </h2>
                    </div>

                    <blockquote className="text-sm sm:text-base text-secondary korean-text leading-relaxed mb-8 pl-4 border-l-2 border-primary/30 italic">
                      &ldquo;{doc.greeting}&rdquo;
                    </blockquote>

                    {/* Education */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-sm sm:text-base">
                          학력 & 경력
                        </h3>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {doc.education.map((e) => (
                          <li
                            key={e}
                            className="text-sm text-secondary korean-text list-disc"
                          >
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-sm sm:text-base">
                          자격 & 학회
                        </h3>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {doc.certifications.map((c) => (
                          <li
                            key={c}
                            className="text-sm text-secondary korean-text list-disc"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specialties */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-sm sm:text-base">
                          전문 진료분야
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-7">
                        {doc.specialties.map((s) => (
                          <span
                            key={s}
                            className="text-xs sm:text-sm px-3 py-1.5 bg-muted rounded-full text-secondary korean-text"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {i < doctors.length - 1 && (
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
