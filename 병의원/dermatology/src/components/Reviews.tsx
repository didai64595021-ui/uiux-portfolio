"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "김*영",
    age: "30대",
    treatment: "여드름 흉터 치료",
    rating: 5,
    text: "10년 넘게 고민했던 여드름 흉터가 프락셀 치료 후 눈에 띄게 개선되었어요. 원장님이 꼼꼼하게 설명해주시고, 치료 과정도 편안했습니다.",
  },
  {
    name: "박*서",
    age: "40대",
    treatment: "울쎄라 리프팅",
    rating: 5,
    text: "처진 볼살과 턱선이 고민이었는데, 울쎄라 시술 후 자연스럽게 올라붙었어요. 주변에서 살 빠졌냐고 물어봐요. 정말 만족합니다!",
  },
  {
    name: "이*은",
    age: "20대",
    treatment: "피코레이저",
    rating: 5,
    text: "잡티와 기미 때문에 고민이 많았는데, 피코레이저 시술 받고 피부톤이 확 좋아졌어요. 시술 후 관리 방법도 자세히 알려주셔서 좋았습니다.",
  },
  {
    name: "최*현",
    age: "50대",
    treatment: "보톡스 & 필러",
    rating: 5,
    text: "자연스러움이 가장 중요했는데, 원장님이 제 얼굴 비율에 맞게 섬세하게 시술해주셨어요. 티나지 않으면서 확실한 변화가 느껴집니다.",
  },
];

export default function Reviews() {
  return (
    <section className="section-padding bg-white">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-serif text-lg sm:text-xl italic">
            Reviews
          </span>
          <h2 className="section-title mt-2 korean-text">
            환자 후기
          </h2>
          <p className="section-subtitle korean-text">
            온다 피부과를 경험한 환자분들의 진솔한 이야기
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-foreground/80 korean-text leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-accent/30">
                <div>
                  <span className="text-sm font-semibold">{review.name}</span>
                  <span className="text-xs text-secondary ml-2">
                    {review.age}
                  </span>
                </div>
                <span className="text-xs text-primary font-medium bg-primary/5 px-2 py-1 rounded-full">
                  {review.treatment}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
