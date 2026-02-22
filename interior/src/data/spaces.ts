export interface SpaceDetail {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  heroImage: string;
  features: { title: string; desc: string; icon: string }[];
  gallery: { image: string; caption: string }[];
  tips: string[];
  priceRange: string;
  popularStyles: string[];
  timeline: string;
}

export const spaces: Record<string, SpaceDetail> = {
  living: {
    id: "living",
    name: "거실",
    nameEn: "LIVING ROOM",
    description: "가족이 함께 모이는 거실은 집의 첫인상을 결정합니다. 넓은 개방감과 동선, 조명 설계까지 — 온다 리빙만의 거실 설계 노하우를 만나보세요.",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80",
    features: [
      { title: "개방형 설계", desc: "LDK 통합 설계로 넓은 시야와 동선을 확보합니다", icon: "📐" },
      { title: "맞춤 조명 플랜", desc: "간접조명, 다운라이트, 펜던트의 3중 레이어 조명 설계", icon: "💡" },
      { title: "수납 최적화", desc: "벽면 붙박이장, 히든 수납으로 깔끔한 공간 유지", icon: "🗄️" },
      { title: "바닥재 선택", desc: "원목, 강마루, SPC 등 용도와 예산에 맞는 바닥재 제안", icon: "🪵" },
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", caption: "미니멀 모던 거실 — 화이트&우드 톤" },
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", caption: "내추럴 우드 거실 — 따뜻한 원목 감성" },
      { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", caption: "모던 클래식 거실 — 몰딩과 간접조명" },
      { image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", caption: "북유럽 스타일 거실 — 파스텔 포인트" },
    ],
    tips: [
      "TV 벽면은 간접조명 + 포인트 마감재로 포컬포인트를 만드세요",
      "소파 배치는 동선을 고려해 벽에서 30cm 이상 떼는 것을 추천합니다",
      "커튼박스를 설치하면 천장이 높아 보이는 효과가 있습니다",
      "거실 조명은 3000K~4000K 사이가 가장 편안한 분위기를 연출합니다",
    ],
    priceRange: "평당 80~150만원",
    popularStyles: ["미니멀 모던", "내추럴 우드", "모던 클래식"],
    timeline: "15~25일",
  },
  kitchen: {
    id: "kitchen",
    name: "주방",
    nameEn: "KITCHEN",
    description: "주방은 단순한 조리 공간을 넘어 가족의 소통이 이루어지는 곳입니다. 효율적인 동선과 아름다운 디자인이 조화를 이루는 주방을 설계합니다.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    features: [
      { title: "ㄱ자/아일랜드 설계", desc: "공간에 맞는 최적의 주방 배치를 제안합니다", icon: "🏗️" },
      { title: "프리미엄 상판", desc: "쿼츠, 세라믹, 천연석 등 다양한 상판 옵션", icon: "💎" },
      { title: "스마트 수납", desc: "슬라이딩 서랍, 회전 코너장, 리프트업 수납", icon: "🗃️" },
      { title: "최신 가전 연동", desc: "빌트인 가전 배치와 콘센트 계획까지 통합 설계", icon: "⚡" },
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", caption: "아일랜드 주방 — 화이트 쿼츠 상판" },
      { image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", caption: "ㄱ자 주방 — 월넛 캐비닛" },
      { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", caption: "오픈형 주방 — LDK 통합 공간" },
      { image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80", caption: "미니멀 주방 — 매트 블랙 포인트" },
    ],
    tips: [
      "작업 삼각형(싱크-레인지-냉장고) 동선은 총 3.6~6.6m가 이상적입니다",
      "아일랜드 식탁은 최소 90cm 이상의 통로 폭을 확보해야 합니다",
      "상부장 대신 오픈선반을 사용하면 공간이 넓어 보입니다",
      "조리대 조명은 4000K 백색등이 식재료 색감을 잘 보여줍니다",
    ],
    priceRange: "평당 120~200만원",
    popularStyles: ["미니멀 모던", "내추럴 우드", "모던 클래식"],
    timeline: "10~20일",
  },
  bedroom: {
    id: "bedroom",
    name: "안방",
    nameEn: "MASTER BEDROOM",
    description: "하루의 시작과 끝을 함께하는 안방. 편안한 수면 환경과 개인 공간으로서의 프라이버시를 동시에 만족시키는 맞춤 설계를 제안합니다.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    features: [
      { title: "수면 최적화", desc: "방음, 차광, 온도까지 고려한 수면 환경 설계", icon: "🌙" },
      { title: "드레스룸 연계", desc: "워크인 클로짓과 화장대 공간 통합 설계", icon: "👗" },
      { title: "간접조명 설계", desc: "침대 헤드보드 간접조명으로 아늑한 분위기", icon: "✨" },
      { title: "벽면 마감", desc: "패브릭, 우드 슬랫, 몰딩 등 포인트 벽면 제안", icon: "🎨" },
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", caption: "모던 안방 — 우드 헤드보드" },
      { image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", caption: "클래식 안방 — 패브릭 벽면" },
      { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", caption: "미니멀 안방 — 화이트&그레이" },
      { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", caption: "내추럴 안방 — 원목 톤" },
    ],
    tips: [
      "침대 헤드 방향은 창문 반대편이 수면의 질에 좋습니다",
      "안방 조명은 2700K 이하의 따뜻한 색온도를 추천합니다",
      "침대 양쪽 콘센트는 USB-C 겸용으로 설치하면 편리합니다",
      "방음을 위해 이중창 + 흡음 커튼의 조합을 추천합니다",
    ],
    priceRange: "평당 70~130만원",
    popularStyles: ["내추럴 우드", "모던 클래식", "미니멀 모던"],
    timeline: "10~15일",
  },
  bathroom: {
    id: "bathroom",
    name: "욕실",
    nameEn: "BATHROOM",
    description: "욕실은 가장 개인적인 공간입니다. 호텔급 마감과 실용적인 수납, 방수와 환기까지 — 오래도록 쾌적한 욕실을 만들어 드립니다.",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    features: [
      { title: "방수 시공", desc: "바닥·벽면 이중 방수로 누수 걱정 제로", icon: "💧" },
      { title: "프리미엄 타일", desc: "포세린, 마블룩, 테라조 등 다양한 타일 제안", icon: "🔲" },
      { title: "스마트 욕실", desc: "비데, 환풍기, 조명 통합 스마트 컨트롤", icon: "📱" },
      { title: "건습 분리", desc: "유리 파티션으로 건조/습식 공간 완벽 분리", icon: "🚿" },
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", caption: "호텔식 욕실 — 마블 타일" },
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", caption: "모던 욕실 — 매트 블랙 수전" },
      { image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80", caption: "내추럴 욕실 — 우드&화이트" },
      { image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", caption: "미니멀 욕실 — 심플한 디자인" },
    ],
    tips: [
      "욕실 방수는 반드시 바닥 + 벽면 150cm 이상까지 시공해야 합니다",
      "환풍기는 습기 센서 자동 작동 모델이 곰팡이 예방에 효과적입니다",
      "욕실 타일 줄눈은 에폭시 타입이 변색에 강합니다",
      "세면대 하부 수납은 습기 방지를 위해 통풍형을 추천합니다",
    ],
    priceRange: "평당 150~250만원",
    popularStyles: ["호텔식 모던", "미니멀", "내추럴"],
    timeline: "7~14일",
  },
  kids: {
    id: "kids",
    name: "아이방",
    nameEn: "KIDS ROOM",
    description: "아이의 성장과 함께하는 공간. 안전한 소재, 수납 중심 설계, 학습과 놀이 공간의 분리까지 — 아이의 연령대에 맞는 맞춤 인테리어를 제안합니다.",
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
    features: [
      { title: "안전 소재", desc: "친환경 E0등급 자재, 라운드 엣지 마감", icon: "🛡️" },
      { title: "성장형 가구", desc: "높이 조절 책상, 확장 가능한 침대 시스템", icon: "📏" },
      { title: "학습 공간", desc: "집중력을 높이는 조명과 책상 배치 설계", icon: "📚" },
      { title: "수납 시스템", desc: "장난감, 책, 옷을 분류하는 체계적 수납", icon: "🧸" },
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", caption: "북유럽 아이방 — 파스텔 톤" },
      { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", caption: "모던 아이방 — 화이트 베이스" },
      { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", caption: "학습 중심 아이방" },
      { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", caption: "2인 아이방 — 이층침대 활용" },
    ],
    tips: [
      "아이방 페인트는 KC 인증 친환경 제품을 사용해야 합니다",
      "침대는 창가에서 떨어뜨려 외풍과 빛 노출을 줄이세요",
      "조명은 공부할 때 4000K, 수면 시 2700K로 전환 가능한 타입 추천",
      "벽면 한쪽을 칠판 페인트로 마감하면 아이 창의성에 도움됩니다",
    ],
    priceRange: "평당 60~120만원",
    popularStyles: ["북유럽", "내추럴", "파스텔 모던"],
    timeline: "7~12일",
  },
};
