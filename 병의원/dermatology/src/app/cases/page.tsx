"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "전체",
  "여드름/흉터",
  "색소/기미",
  "리프팅",
  "보톡스/필러",
  "탈모",
];

const cases = [
  {
    category: "여드름/흉터",
    title: "여드름 흉터 개선",
    treatment: "프락셀 레이저 4회",
    period: "3개월",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b8?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=500&h=400&fit=crop",
    note: "박스형, 빙산형 여드름 흉터 복합 치료",
  },
  {
    category: "색소/기미",
    title: "기미/잡티 제거",
    treatment: "피코레이저 5회 + 미백관리",
    period: "4개월",
    before: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500&h=400&fit=crop",
    note: "양측 관골부 기미 및 전체적 잡티 개선",
  },
  {
    category: "리프팅",
    title: "얼굴 리프팅",
    treatment: "울쎄라 + 써마지 병행",
    period: "1회 시술 후 2개월",
    before: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=400&fit=crop",
    note: "턱선 처짐, 팔자주름 개선",
  },
  {
    category: "보톡스/필러",
    title: "자연스러운 동안 시술",
    treatment: "보톡스 + 필러 복합",
    period: "시술 직후 2주",
    before: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=500&h=400&fit=crop",
    note: "이마 주름 + 볼 볼륨 보충",
  },
  {
    category: "여드름/흉터",
    title: "활동성 여드름 치료",
    treatment: "PDT + 스케일링 + 약물치료",
    period: "2개월",
    before: "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=400&fit=crop",
    note: "염증성 여드름 및 농포성 병변 치료",
  },
  {
    category: "탈모",
    title: "남성 탈모 치료",
    treatment: "메조테라피 + PRP 8회",
    period: "6개월",
    before: "https://images.unsplash.com/photo-1585747860019-eaf76ab30c8c?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
    note: "정수리 부위 모발 밀도 증가",
  },
];

export default function CasesPage() {
  const [selected, setSelected] = useState("전체");

  const filtered =
    selected === "전체"
      ? cases
      : cases.filter((c) => c.category === selected);

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
                Before &amp; After
              </span>
              <h1 className="section-title mt-2 korean-text">
                시술 전후 사례
              </h1>
              <p className="section-subtitle max-w-2xl korean-text">
                실제 환자분들의 시술 결과를 카테고리별로 확인하세요
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-6 sm:py-8 border-b border-accent/30 sticky top-16 sm:top-20 bg-background/95 backdrop-blur-sm z-30">
          <div className="container-base">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium
                    whitespace-nowrap transition-all min-h-[40px]
                    ${
                      selected === cat
                        ? "bg-primary text-white shadow-md"
                        : "bg-white text-secondary hover:bg-muted border border-accent/30"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="section-padding">
          <div className="container-base">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8"
              >
                {filtered.map((item, i) => (
                  <motion.div
                    key={`${item.title}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="card !p-0 overflow-hidden"
                  >
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <div
                          className="aspect-[4/3] bg-cover bg-center bg-muted"
                          style={{
                            backgroundImage: `url('${item.before}')`,
                          }}
                        />
                        <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-foreground/70 backdrop-blur-sm px-2.5 py-1 rounded">
                          BEFORE
                        </span>
                      </div>
                      <div className="relative">
                        <div
                          className="aspect-[4/3] bg-cover bg-center bg-muted"
                          style={{
                            backgroundImage: `url('${item.after}')`,
                          }}
                        />
                        <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-primary/80 backdrop-blur-sm px-2.5 py-1 rounded">
                          AFTER
                        </span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs text-secondary">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="font-bold text-base sm:text-lg mb-1 korean-text">
                        {item.title}
                      </h3>
                      <p className="text-sm text-secondary korean-text">
                        {item.treatment}
                      </p>
                      <p className="text-xs text-secondary/70 mt-2 korean-text">
                        {item.note}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <p className="text-xs text-secondary/50 text-center mt-10 korean-text">
              * 시술 결과는 개인에 따라 차이가 있을 수 있습니다.
              <br />* 모든 사진은 환자 동의 하에 게시되었습니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
