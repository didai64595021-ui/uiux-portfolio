export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  beforeMetrics: { label: string; value: string }[];
  afterMetrics: { label: string; value: string }[];
  duration: string;
  tags: string[];
}

export const categories = [
  { id: "all", label: "전체" },
  { id: "powerlink", label: "파워링크" },
  { id: "place", label: "플레이스" },
  { id: "instagram", label: "인스타그램" },
  { id: "integrated", label: "통합 마케팅" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "case-1",
    title: "강남 프리미엄 치과",
    category: "integrated",
    categoryLabel: "통합 마케팅",
    description:
      "파워링크 + 플레이스 통합 마케팅으로 신규 환자 유입 380% 증가. 월 광고비 대비 ROI 12배 달성.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    beforeMetrics: [
      { label: "월 문의", value: "23건" },
      { label: "플레이스 순위", value: "47위" },
      { label: "월 광고비", value: "500만원" },
    ],
    afterMetrics: [
      { label: "월 문의", value: "110건" },
      { label: "플레이스 순위", value: "3위" },
      { label: "ROI", value: "1,200%" },
    ],
    duration: "3개월",
    tags: ["파워링크", "플레이스", "치과"],
  },
  {
    id: "case-2",
    title: "서초 인테리어 스튜디오",
    category: "powerlink",
    categoryLabel: "파워링크",
    description:
      "고단가 키워드 시장에서 정밀한 롱테일 키워드 전략으로 클릭당 비용 62% 절감, 전환율 4배 상승.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    beforeMetrics: [
      { label: "CPC", value: "3,200원" },
      { label: "전환율", value: "1.2%" },
      { label: "월 전환", value: "8건" },
    ],
    afterMetrics: [
      { label: "CPC", value: "1,200원" },
      { label: "전환율", value: "4.8%" },
      { label: "월 전환", value: "45건" },
    ],
    duration: "2개월",
    tags: ["파워링크", "인테리어", "키워드"],
  },
  {
    id: "case-3",
    title: "홍대 브런치 카페",
    category: "place",
    categoryLabel: "플레이스",
    description:
      "네이버 플레이스 72위에서 1위 달성. 리뷰 관리와 키워드 최적화로 월 방문자 3배 증가, 주말 웨이팅 발생.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    beforeMetrics: [
      { label: "플레이스 순위", value: "72위" },
      { label: "월 방문자", value: "450명" },
      { label: "리뷰 수", value: "23개" },
    ],
    afterMetrics: [
      { label: "플레이스 순위", value: "1위" },
      { label: "월 방문자", value: "1,350명" },
      { label: "리뷰 수", value: "180개" },
    ],
    duration: "4개월",
    tags: ["플레이스", "카페", "리뷰관리"],
  },
  {
    id: "case-4",
    title: "패션 이커머스 'MOUVE'",
    category: "instagram",
    categoryLabel: "인스타그램",
    description:
      "인스타그램 중심의 브랜딩 전략으로 팔로워 2만 달성. 릴스 콘텐츠가 바이럴되며 월 매출 340% 성장.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    beforeMetrics: [
      { label: "팔로워", value: "800명" },
      { label: "월 매출", value: "1,200만원" },
      { label: "참여율", value: "1.1%" },
    ],
    afterMetrics: [
      { label: "팔로워", value: "20,000명" },
      { label: "월 매출", value: "5,280만원" },
      { label: "참여율", value: "6.8%" },
    ],
    duration: "6개월",
    tags: ["인스타그램", "패션", "릴스"],
  },
  {
    id: "case-5",
    title: "판교 IT 스타트업",
    category: "integrated",
    categoryLabel: "통합 마케팅",
    description:
      "B2B SaaS 스타트업의 리드 제네레이션. 파워링크 + 콘텐츠 마케팅으로 월 리드 15건에서 120건으로 성장.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    beforeMetrics: [
      { label: "월 리드", value: "15건" },
      { label: "CPA", value: "85,000원" },
      { label: "브랜드 검색량", value: "120회" },
    ],
    afterMetrics: [
      { label: "월 리드", value: "120건" },
      { label: "CPA", value: "22,000원" },
      { label: "브랜드 검색량", value: "2,400회" },
    ],
    duration: "5개월",
    tags: ["파워링크", "B2B", "리드젠"],
  },
  {
    id: "case-6",
    title: "역삼 필라테스 스튜디오",
    category: "place",
    categoryLabel: "플레이스",
    description:
      "플레이스 + 인스타그램 동시 운영으로 체험 신청 430% 증가. 3개월 만에 지역 1위 달성.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    beforeMetrics: [
      { label: "월 체험 신청", value: "12건" },
      { label: "플레이스 순위", value: "38위" },
      { label: "인스타 팔로워", value: "340명" },
    ],
    afterMetrics: [
      { label: "월 체험 신청", value: "63건" },
      { label: "플레이스 순위", value: "1위" },
      { label: "인스타 팔로워", value: "5,200명" },
    ],
    duration: "3개월",
    tags: ["플레이스", "인스타그램", "필라테스"],
  },
];
