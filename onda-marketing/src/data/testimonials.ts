export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  metric: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "김성호",
    role: "원장",
    company: "강남 프리미엄 치과",
    content:
      "이전 대행사 3곳에서 효과를 못 봤는데, 온다마케팅은 달랐습니다. 첫 달부터 문의가 늘기 시작했고, 3개월 만에 신환이 4배가 됐습니다. 리포트도 매주 정확하게 오고, 무엇보다 안되는 건 안된다고 솔직하게 말해주는 점이 신뢰가 갔습니다.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    metric: "신환 380% 증가",
  },
  {
    id: "t2",
    name: "이지은",
    role: "대표",
    company: "모브 패션",
    content:
      "인스타 팔로워만 늘리는 대행사가 많은데, 온다는 처음부터 매출 전환에 집중했어요. 릴스 콘텐츠 전략이 정확히 맞아떨어졌고, 6개월 만에 월 매출이 4배 넘게 성장했습니다. 진짜 실력 있는 팀이에요.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    metric: "월 매출 340% 성장",
  },
  {
    id: "t3",
    name: "박준영",
    role: "사장",
    company: "홍대 브런치 카페",
    content:
      "플레이스 72위에서 1위까지 올려주셨습니다. 주말에는 웨이팅이 생길 정도예요. 리뷰 관리 전략도 체계적이고, 매주 보내주시는 분석 리포트 덕분에 어떤 부분이 좋아지고 있는지 한눈에 파악됩니다.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    metric: "플레이스 1위 달성",
  },
  {
    id: "t4",
    name: "최민수",
    role: "CMO",
    company: "판교 IT 스타트업",
    content:
      "B2B 마케팅을 이렇게 잘 하는 곳은 처음 봤습니다. 키워드 하나하나에 대한 이해도가 남다르고, 리드 제네레이션 파이프라인을 체계적으로 설계해주셨습니다. CPA가 74% 줄었어요.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    metric: "CPA 74% 절감",
  },
  {
    id: "t5",
    name: "정하나",
    role: "원장",
    company: "역삼 필라테스",
    content:
      "다른 대행사는 보고서만 예쁘게 만들고 성과는 없었는데, 온다는 정반대였어요. 보고서는 심플한데 매출은 확실하게 올려주셨습니다. 체험 신청이 5배 넘게 늘었어요.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    metric: "체험 신청 430% 증가",
  },
];
