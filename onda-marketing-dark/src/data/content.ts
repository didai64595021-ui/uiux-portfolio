export const siteConfig = {
  name: "온다마케팅",
  nameEn: "ONDA Marketing",
  tagline: "실행사 출신의 진짜 마케팅",
  description:
    "영업사원이 아닌 5년차 기술자가 직접 운영합니다. 불가능한 건 솔직히 말하고, 가능한 건 확실히 성과를 냅니다.",
  email: "ondadaad@google.com",
  address: "서울 강남구 테헤란로82길 15 디아이타워 3층",
  brand: "ONDA",
};

export const stats = [
  {
    number: 5,
    suffix: "년+",
    label: "실행사 운영",
    description: "직접 광고를 집행한 실전 경험",
  },
  {
    number: 500,
    suffix: "+",
    label: "클라이언트",
    description: "다양한 업종의 광고 운영 경험",
  },
  {
    number: 100,
    suffix: "+",
    label: "대행사 대행",
    description: "대행사도 믿고 맡기는 실력",
  },
  {
    number: 97,
    suffix: "%",
    label: "재계약률",
    description: "성과로 증명하는 신뢰",
  },
];

export const services = [
  {
    id: "powerlink",
    title: "파워링크 광고",
    subtitle: "Naver Power Link",
    description:
      "키워드 선정부터 입찰 관리, 광고 소재 최적화까지. 클릭당 비용은 줄이고 전환율은 높이는 데이터 기반 운영.",
    features: [
      "키워드 분석 & 경쟁사 조사",
      "입찰가 자동 최적화",
      "광고 소재 A/B 테스트",
      "실시간 성과 리포팅",
    ],
    icon: "search",
    metric: "평균 ROAS 350%",
  },
  {
    id: "place",
    title: "플레이스 최적화",
    subtitle: "Naver Place SEO",
    description:
      "네이버 지도 상위노출은 시작일 뿐. 실제 방문과 매출로 이어지는 플레이스 마케팅 전략.",
    features: [
      "플레이스 프로필 최적화",
      "리뷰 관리 전략",
      "키워드 기반 콘텐츠",
      "경쟁업체 분석 리포트",
    ],
    icon: "map",
    metric: "상위 3위 달성 89%",
  },
  {
    id: "instagram",
    title: "인스타그램 마케팅",
    subtitle: "Instagram Growth",
    description:
      "팔로워 수가 아닌 매출에 집중합니다. 콘텐츠 기획부터 광고 운영, 인플루언서 협업까지.",
    features: [
      "콘텐츠 기획 & 제작",
      "타겟 광고 운영",
      "인플루언서 매칭",
      "성과 분석 대시보드",
    ],
    icon: "instagram",
    metric: "평균 참여율 4.2%",
  },
  {
    id: "selftool",
    title: "셀프 광고 툴",
    subtitle: "Self-Service Tool",
    description:
      "대행비 없이 직접 광고를 운영하고 싶은 분들을 위한 쉬운 도구와 교육 프로그램.",
    features: [
      "원클릭 광고 세팅",
      "실시간 성과 모니터링",
      "1:1 운영 교육",
      "광고 템플릿 제공",
    ],
    icon: "tool",
    metric: "월 평균 30% 비용 절감",
  },
];

export const values = [
  {
    title: "Identity",
    titleKo: "기술자 출신",
    description:
      "영업사원이 광고를 팔지 않습니다. 5년간 직접 광고를 집행해온 기술자가 운영합니다. 현장 경험에서 나온 실전 노하우가 다릅니다.",
    icon: "code",
  },
  {
    title: "Honesty",
    titleKo: "불가능은 거절",
    description:
      "모든 의뢰를 수락하지 않습니다. 성과가 나오기 어려운 조건이라면 솔직하게 말씀드립니다. 그래서 맡은 일은 반드시 결과를 냅니다.",
    icon: "shield",
  },
  {
    title: "Performance",
    titleKo: "성과가 전부",
    description:
      "상위노출은 수단이지 목적이 아닙니다. 실제 매출과 전환으로 이어지는 마케팅, 숫자로 증명합니다.",
    icon: "chart",
  },
];

export const caseStudies = [
  {
    id: 1,
    client: "강남 S 피부과",
    industry: "의료",
    period: "6개월",
    description: "네이버 파워링크 + 플레이스 통합 마케팅으로 신규 환자 유입 극대화",
    metrics: {
      before: { visitors: "1일 8명", cost: "CPA 45,000원", conversion: "1.2%" },
      after: { visitors: "1일 32명", cost: "CPA 12,000원", conversion: "4.8%" },
    },
    improvement: "+300%",
    tags: ["파워링크", "플레이스"],
  },
  {
    id: 2,
    client: "H 인테리어",
    industry: "인테리어",
    period: "4개월",
    description: "인스타그램 콘텐츠 마케팅으로 고급 인테리어 브랜드 포지셔닝 성공",
    metrics: {
      before: { visitors: "월 문의 12건", cost: "광고비 200만원", conversion: "0.8%" },
      after: { visitors: "월 문의 67건", cost: "광고비 150만원", conversion: "3.5%" },
    },
    improvement: "+458%",
    tags: ["인스타그램", "콘텐츠"],
  },
  {
    id: 3,
    client: "J 법률사무소",
    industry: "법률",
    period: "8개월",
    description: "파워링크 키워드 전략 재설계로 상담 전환율 대폭 개선",
    metrics: {
      before: { visitors: "월 상담 23건", cost: "CPC 3,200원", conversion: "2.1%" },
      after: { visitors: "월 상담 89건", cost: "CPC 1,800원", conversion: "5.7%" },
    },
    improvement: "+287%",
    tags: ["파워링크", "키워드"],
  },
  {
    id: 4,
    client: "M 카페 프랜차이즈",
    industry: "F&B",
    period: "5개월",
    description: "전국 15개 매장 플레이스 최적화 및 지역 타겟 광고 운영",
    metrics: {
      before: { visitors: "매장당 리뷰 23개", cost: "월 방문 450명", conversion: "1.5%" },
      after: { visitors: "매장당 리뷰 187개", cost: "월 방문 1,200명", conversion: "4.1%" },
    },
    improvement: "+167%",
    tags: ["플레이스", "로컬"],
  },
];

export const testimonials = [
  {
    name: "김OO 원장",
    company: "강남 S 피부과",
    text: "다른 대행사 3곳을 거쳐서 온다에 맡겼는데, 처음으로 숫자가 보였습니다. 영업이 아닌 기술로 일하는 팀이라 신뢰가 갑니다.",
    rating: 5,
  },
  {
    name: "박OO 대표",
    company: "H 인테리어",
    text: "솔직히 처음에 인스타 마케팅에 회의적이었는데, 3개월 만에 문의량이 5배 늘었습니다. 콘텐츠 퀄리티가 다릅니다.",
    rating: 5,
  },
  {
    name: "이OO 변호사",
    company: "J 법률사무소",
    text: "불가능한 키워드는 솔직히 안 된다고 말해주고, 대안을 제시해주는 점이 좋았습니다. 신뢰할 수 있는 파트너입니다.",
    rating: 5,
  },
  {
    name: "최OO 대표",
    company: "M 카페",
    text: "15개 매장 플레이스를 한 번에 관리해주시는데, 각 매장별 전략이 다 달라요. 진짜 분석하고 운영하는 곳입니다.",
    rating: 5,
  },
  {
    name: "정OO 실장",
    company: "K 성형외과",
    text: "리포트가 정말 상세합니다. 어디에 돈이 쓰이고 어떤 효과가 있는지 투명하게 보여줘서 경영 판단에 큰 도움이 됩니다.",
    rating: 5,
  },
  {
    name: "한OO 대표",
    company: "D 쇼핑몰",
    text: "셀프 광고 툴로 직접 운영하는데 월 비용을 40% 줄였습니다. 교육도 친절하고 도구도 직관적이에요.",
    rating: 5,
  },
];

export const faqItems = [
  {
    question: "최소 계약 기간이 있나요?",
    answer:
      "최소 3개월 계약을 권장드립니다. 마케팅 성과는 최소 2~3개월의 데이터 축적이 필요하며, 1개월 단위로는 정확한 최적화가 어렵습니다. 다만, 성과가 나지 않으면 위약금 없이 해지 가능합니다.",
  },
  {
    question: "대행 비용은 어떻게 되나요?",
    answer:
      "광고비와 별도로 월 대행료가 발생합니다. 업종과 규모에 따라 월 50만원~200만원 선이며, 정확한 견적은 무료 상담 후 제안드립니다. 광고비는 100% 투명하게 리포팅됩니다.",
  },
  {
    question: "어떤 업종이 효과가 좋나요?",
    answer:
      "의료(피부과, 치과, 성형외과), 법률, 인테리어, F&B, 교육 업종에서 특히 높은 성과를 내고 있습니다. 다만, 모든 업종이 동일한 전략으로 되지는 않으며, 업종별 맞춤 전략을 수립합니다.",
  },
  {
    question: "성과 리포트는 어떻게 받나요?",
    answer:
      "주간 요약 리포트와 월간 상세 리포트를 제공합니다. 실시간 대시보드 접근 권한도 드리며, 카카오톡/이메일로 주요 지표 변동 알림도 발송됩니다.",
  },
  {
    question: "다른 대행사와 뭐가 다른가요?",
    answer:
      "영업팀이 없습니다. 상담부터 운영까지 실제 광고를 집행하는 기술자가 직접 합니다. 또한, 불가능한 약속은 하지 않으며, 100개 이상의 대행사가 우리에게 재하청을 맡길 만큼 실력으로 인정받고 있습니다.",
  },
  {
    question: "셀프 광고 툴은 무료인가요?",
    answer:
      "기본 기능은 무료로 사용 가능합니다. 프리미엄 기능(AI 키워드 추천, 자동 입찰, 경쟁사 분석)은 월 9,900원부터 이용 가능하며, 대행 고객은 무료로 제공됩니다.",
  },
];

export const techStack = [
  { name: "Google Ads", category: "광고" },
  { name: "Naver Ads", category: "광고" },
  { name: "Meta Ads", category: "광고" },
  { name: "Google Analytics", category: "분석" },
  { name: "Naver Analytics", category: "분석" },
  { name: "Google Tag Manager", category: "분석" },
  { name: "Semrush", category: "SEO" },
  { name: "Ahrefs", category: "SEO" },
  { name: "Figma", category: "디자인" },
  { name: "Canva Pro", category: "디자인" },
  { name: "ChatGPT", category: "AI" },
  { name: "Zapier", category: "자동화" },
];

export const navLinks = [
  { href: "/", label: "홈" },
  { href: "/services", label: "서비스" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/about", label: "어바웃" },
  { href: "/contact", label: "문의" },
];
