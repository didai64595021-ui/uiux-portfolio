import ExperienceQuiz from "@/components/ExperienceQuiz";
import SeasonWidget from "@/components/SeasonWidget";
import AreaMap from "@/components/AreaMap";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-brown py-14 sm:py-20">
        <div className="container-custom text-center">
          <p className="text-gold font-display text-sm tracking-[0.2em] mb-3">EXPERIENCE</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white korean-text">
            체험 & 즐길거리
          </h1>
          <p className="text-white/50 mt-4 korean-text">계절마다 달라지는 특별한 체험 프로그램</p>
        </div>
      </div>

      <SeasonWidget />

      {/* Activities Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-brown text-center mb-10 korean-text">
            온다 스테이 체험 프로그램
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "♨️", title: "전용 노천탕", desc: "별빛 아래 즐기는 프라이빗 온천. 소나무채, 편백나무채 객실에서 이용 가능합니다." },
              { icon: "🔥", title: "프리미엄 BBQ", desc: "한우 세트, 해물 세트 등 엄선된 식재료로 준비된 바비큐를 전용 데크에서 즐기세요." },
              { icon: "🌲", title: "편백 숲 산책", desc: "펜션 뒤편 500m 편백 숲 산책로. 피톤치드 가득한 힐링 코스입니다." },
              { icon: "🔭", title: "별 관측 체험", desc: "망원경 대여 서비스. 가을~겨울 맑은 날에는 은하수도 관측할 수 있습니다." },
              { icon: "🎨", title: "원목 공예 체험", desc: "편백 원목으로 나만의 소품을 만드는 체험 (주말 한정, 예약 필요)." },
              { icon: "🧘", title: "숲속 요가", desc: "아침 숲속 요가 클래스 (주말 07:00, 무료 참여). 매트 제공됩니다." },
            ].map((item) => (
              <div key={item.title} className="bg-cream rounded-2xl p-6 hover:shadow-md transition-all">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-brown mb-2">{item.title}</h3>
                <p className="text-text/50 text-sm korean-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceQuiz />
      <AreaMap />

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-brown mb-4 korean-text">
            특별한 체험을 예약하세요
          </h2>
          <p className="text-text/50 mb-6 korean-text">체험 프로그램은 객실 예약 시 함께 신청할 수 있습니다</p>
          <Link href="/booking" className="btn-primary">예약하기</Link>
        </div>
      </section>
    </div>
  );
}
