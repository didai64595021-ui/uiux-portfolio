export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  image: string;
  stats: { label: string; value: string }[];
}

export const services: Service[] = [
  {
    id: "powerlink",
    title: "파워링크 광고",
    subtitle: "Naver Power Link",
    description:
      "네이버 검색 광고의 핵심, 파워링크. 키워드 분석부터 입찰 전략, 광고문안 최적화, 랜딩페이지 설계까지. 클릭당 비용은 낮추고, 전환율은 높이는 정교한 운영을 합니다.",
    features: [
      "키워드 리서치 & 경쟁 분석",
      "입찰가 최적화 전략",
      "광고문안 A/B 테스트",
      "전환 추적 & ROI 분석",
      "랜딩페이지 최적화",
      "월간 성과 리포트",
    ],
    icon: "Search",
    color: "#00C853",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    stats: [
      { label: "평균 CTR 개선", value: "340%" },
      { label: "전환 비용 절감", value: "45%" },
    ],
  },
  {
    id: "place",
    title: "플레이스 최적화",
    subtitle: "Naver Place SEO",
    description:
      "네이버 플레이스 상위 노출은 오프라인 매장의 생명선. 리뷰 관리, 키워드 최적화, 사진 관리, 영업 정보 최적화 등 플레이스 순위를 올리는 모든 요소를 체계적으로 관리합니다.",
    features: [
      "플레이스 순위 분석",
      "키워드 맵핑 & 최적화",
      "리뷰 관리 전략",
      "고퀄리티 사진 촬영 가이드",
      "경쟁업체 모니터링",
      "주간 순위 리포트",
    ],
    icon: "MapPin",
    color: "#2E7D32",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    stats: [
      { label: "상위 3위 달성율", value: "89%" },
      { label: "방문자 수 증가", value: "260%" },
    ],
  },
  {
    id: "instagram",
    title: "인스타그램 마케팅",
    subtitle: "Instagram Marketing",
    description:
      "팔로워 수가 아닌 실제 전환이 일어나는 인스타그램 마케팅. 콘텐츠 기획, 피드 디자인, 릴스 제작, 해시태그 전략, 인플루언서 협업까지 풀 패키지로 운영합니다.",
    features: [
      "콘텐츠 캘린더 기획",
      "피드 디자인 & 브랜딩",
      "릴스 & 스토리 제작",
      "해시태그 전략 수립",
      "인플루언서 섭외 & 관리",
      "인사이트 분석 리포트",
    ],
    icon: "Instagram",
    color: "#00C853",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    stats: [
      { label: "평균 도달률 향상", value: "420%" },
      { label: "참여율 개선", value: "180%" },
    ],
  },
  {
    id: "self-tool",
    title: "셀프 광고 툴",
    subtitle: "Self-Service Ad Tool",
    description:
      "대행사 없이도 스스로 광고를 운영할 수 있도록 설계된 자체 개발 툴. 키워드 자동 추천, 입찰가 자동 조절, 성과 대시보드 등 실무에 바로 적용 가능한 도구를 제공합니다.",
    features: [
      "키워드 자동 추천 엔진",
      "입찰가 자동 최적화",
      "실시간 성과 대시보드",
      "경쟁사 분석 도구",
      "광고문안 AI 생성",
      "비용 예측 시뮬레이터",
    ],
    icon: "Wrench",
    color: "#1B5E20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stats: [
      { label: "운영 시간 절감", value: "70%" },
      { label: "사용 기업 수", value: "200+" },
    ],
  },
];
