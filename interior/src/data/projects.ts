export interface Project {
  id: string;
  title: string;
  location: string;
  type: "apartment" | "villa" | "office" | "commercial";
  size: number;
  budget: string;
  duration: string;
  style: string;
  rooms: string[];
  image: string;
  images: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: "gangnam-raemian",
    title: "강남 래미안 34평 리모델링",
    location: "서울 강남구 래미안 아파트",
    type: "apartment",
    size: 34,
    budget: "5,500만원",
    duration: "45일",
    style: "미니멀 모던",
    rooms: ["거실", "주방", "안방", "아이방"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    description: "화이트와 우드 톤 중심의 미니멀 모던. 수납공간을 극대화한 실용적 설계.",
  },
  {
    id: "pangyo-townhouse",
    title: "판교 타운하우스 전체 리모델링",
    location: "경기 성남시 판교",
    type: "villa",
    size: 55,
    budget: "1.2억원",
    duration: "60일",
    style: "내추럴 우드",
    rooms: ["거실", "주방", "안방", "서재", "욕실2"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
    description: "따뜻한 원목과 자연석을 활용한 내추럴 감성. 2층 서재 공간이 특징.",
  },
  {
    id: "yongsan-hellio",
    title: "용산 헬리오시티 25평 신혼집",
    location: "서울 용산구 헬리오시티",
    type: "apartment",
    size: 25,
    budget: "3,800만원",
    duration: "30일",
    style: "따뜻한 북유럽",
    rooms: ["거실", "주방", "안방"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
    ],
    description: "컴팩트한 평수를 넓게 활용한 신혼부부 맞춤 디자인. 파스텔 포인트 컬러.",
  },
  {
    id: "startup-office",
    title: "강남 스타트업 사무실",
    location: "서울 강남구 테헤란로",
    type: "office",
    size: 40,
    budget: "4,200만원",
    duration: "25일",
    style: "인더스트리얼 모던",
    rooms: ["오픈 오피스", "회의실", "라운지", "폰부스"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80",
    ],
    description: "노출 콘크리트와 금속 소재로 연출한 모던 사무 공간. 집중과 협업의 균형.",
  },
  {
    id: "songpa-lotte",
    title: "송파 롯데캐슬 42평 리노베이션",
    location: "서울 송파구 롯데캐슬",
    type: "apartment",
    size: 42,
    budget: "7,800만원",
    duration: "50일",
    style: "모던 클래식",
    rooms: ["거실", "주방", "안방", "아이방2", "드레스룸"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ],
    description: "클래식한 몰딩과 모던 조명의 조화. 넓은 드레스룸과 고급 키친이 포인트.",
  },
  {
    id: "cafe-interior",
    title: "성수동 카페 인테리어",
    location: "서울 성동구 성수동",
    type: "commercial",
    size: 30,
    budget: "6,500만원",
    duration: "35일",
    style: "레트로 인더스트리얼",
    rooms: ["홀", "바", "테라스", "화장실"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
      "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80",
    ],
    description: "빈티지 벽돌과 현대적 조명의 만남. 인스타그래머블한 공간 연출.",
  },
];

export const styles = ["미니멀 모던", "내추럴 우드", "북유럽", "인더스트리얼", "모던 클래식", "자파니", "레트로"];
export const roomTypes = ["거실", "주방", "안방", "아이방", "서재", "욕실", "드레스룸"];

export interface Material {
  id: string;
  name: string;
  category: "flooring" | "tile" | "countertop" | "paint" | "cabinet";
  brand: string;
  tier: "standard" | "premium" | "luxury";
  priceRange: string;
  image: string;
  color: string;
}

export const materials: Material[] = [
  { id: "oak-flooring", name: "내추럴 오크", category: "flooring", brand: "LG하우시스", tier: "premium", priceRange: "8~12만/㎡", image: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=400&q=80", color: "#D4A574" },
  { id: "walnut-flooring", name: "월넛 원목", category: "flooring", brand: "한화 L&C", tier: "luxury", priceRange: "15~20만/㎡", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80", color: "#654321" },
  { id: "marble-tile", name: "칼라카타 마블", category: "tile", brand: "이탈리아 수입", tier: "luxury", priceRange: "20~30만/㎡", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80", color: "#F5F5F0" },
  { id: "subway-tile", name: "서브웨이 타일", category: "tile", brand: "국내산", tier: "standard", priceRange: "3~5만/㎡", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80", color: "#FFFFFF" },
  { id: "quartz-counter", name: "실크스톤 쿼츠", category: "countertop", brand: "삼성 스타론", tier: "premium", priceRange: "30~50만/m", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80", color: "#E8E4DF" },
  { id: "benjamin-paint", name: "그레이 아울", category: "paint", brand: "벤자민무어", tier: "premium", priceRange: "15만/갤런", image: "https://images.unsplash.com/photo-1562184552-997c461abbe6?w=400&q=80", color: "#8B8B83" },
  { id: "wood-cabinet", name: "월넛 무광 도장", category: "cabinet", brand: "한샘", tier: "premium", priceRange: "견적 별도", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80", color: "#8B6914" },
];
