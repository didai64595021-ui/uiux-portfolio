export interface Room {
  id: string;
  name: string;
  nameEn: string;
  type: "couple" | "family" | "group";
  capacity: number;
  price: number;
  weekendPrice: number;
  size: number;
  image: string;
  images: string[];
  amenities: string[];
  description: string;
  highlight: string;
}

export const rooms: Room[] = [
  {
    id: "pine",
    name: "소나무채",
    nameEn: "Pine House",
    type: "couple",
    capacity: 2,
    price: 150000,
    weekendPrice: 200000,
    size: 33,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    amenities: ["킹베드", "노천탕", "테라스", "커피머신", "블루투스 스피커"],
    description: "소나무 숲에 둘러싸인 프라이빗 커플 객실. 전용 노천탕에서 별을 보며 온천을 즐기세요.",
    highlight: "전용 노천탕",
  },
  {
    id: "birch",
    name: "자작나무채",
    nameEn: "Birch House",
    type: "couple",
    capacity: 2,
    price: 180000,
    weekendPrice: 250000,
    size: 40,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    ],
    amenities: ["킹베드", "월풀 욕조", "벽난로", "프로젝터", "미니 키친"],
    description: "자작나무 원목으로 마감한 따뜻한 공간. 벽난로와 프로젝터로 로맨틱한 밤을.",
    highlight: "실내 벽난로",
  },
  {
    id: "oak",
    name: "참나무채",
    nameEn: "Oak House",
    type: "family",
    capacity: 4,
    price: 250000,
    weekendPrice: 350000,
    size: 60,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    amenities: ["킹베드+싱글2", "BBQ 데크", "키즈존", "넷플릭스", "세탁기"],
    description: "아이와 함께하는 가족 여행에 최적화. 넓은 거실과 전용 BBQ 데크가 있습니다.",
    highlight: "전용 BBQ 데크",
  },
  {
    id: "cedar",
    name: "편백나무채",
    nameEn: "Cedar House",
    type: "family",
    capacity: 6,
    price: 350000,
    weekendPrice: 450000,
    size: 85,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
    ],
    amenities: ["방2개", "편백탕", "정원", "그릴", "보드게임", "프로젝터"],
    description: "편백나무 반신욕과 넓은 정원이 있는 프리미엄 패밀리 스위트. 최대 6인 숙박 가능.",
    highlight: "편백나무 반신욕",
  },
  {
    id: "maple",
    name: "단풍나무채",
    nameEn: "Maple House",
    type: "group",
    capacity: 10,
    price: 500000,
    weekendPrice: 700000,
    size: 120,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ],
    amenities: ["방3개", "대형 거실", "야외 화덕", "바비큐장", "노래방기기", "탁구대"],
    description: "단체 모임과 워크숍에 최적. 대형 거실과 야외 화덕, 다양한 레크레이션 시설을 갖췄습니다.",
    highlight: "야외 화덕 & 노래방",
  },
];

export interface Attraction {
  id: string;
  name: string;
  type: "nature" | "food" | "activity" | "culture";
  distance: string;
  time: string;
  description: string;
  recommendation: string;
  icon: string;
}

export const attractions: Attraction[] = [
  { id: "trail", name: "숲속 산책로", type: "nature", distance: "0.2km", time: "도보 3분", description: "편백 숲을 따라 걷는 힐링 산책로", recommendation: "아침 7시 안개 낀 숲이 최고예요", icon: "🌲" },
  { id: "lake", name: "청평호수", type: "nature", distance: "2km", time: "차 5분", description: "카약, 낚시를 즐길 수 있는 호수", recommendation: "일몰 때 호수 위 노을이 장관입니다", icon: "🏞️" },
  { id: "cafe", name: "숲속 카페 '나무'", type: "food", distance: "1.5km", time: "차 3분", description: "자가 로스팅 드립 커피 전문점", recommendation: "시그니처 '숲향 라떼' 꼭 드셔보세요", icon: "☕" },
  { id: "restaurant", name: "산골 한정식", type: "food", distance: "3km", time: "차 7분", description: "제철 산나물 코스 한정식", recommendation: "예약 필수! 더덕구이가 일품입니다", icon: "🍽️" },
  { id: "zipline", name: "숲 짚라인", type: "activity", distance: "5km", time: "차 10분", description: "800m 숲 위를 나는 짚라인 코스", recommendation: "가족 단위 체험 코스도 있어요", icon: "🏄" },
  { id: "market", name: "가평 아침시장", type: "culture", distance: "8km", time: "차 15분", description: "로컬 농산물과 먹거리 장터", recommendation: "토요일 오전이 가장 활발해요", icon: "🛒" },
  { id: "temple", name: "용문사", type: "culture", distance: "12km", time: "차 20분", description: "천년 은행나무가 있는 고찰", recommendation: "가을 은행나무 단풍이 압도적이에요", icon: "🏛️" },
  { id: "ski", name: "스키장 (겨울)", type: "activity", distance: "20km", time: "차 30분", description: "겨울 시즌 스키 & 스노보드", recommendation: "12~2월만 운영, 야간 스키 추천", icon: "⛷️" },
];

export const seasonalActivities = {
  spring: { label: "봄 (3~5월)", activities: ["벚꽃 산책", "봄나물 채취 체험", "카약 시즌 오픈", "별꽃 축제"], color: "#F8BBD0" },
  summer: { label: "여름 (6~8월)", activities: ["계곡 물놀이", "반딧불이 관찰", "숲속 바비큐", "별밤 캠프파이어"], color: "#81D4FA" },
  autumn: { label: "가을 (9~11월)", activities: ["단풍 트레킹", "은행나무길 산책", "수확 체험", "숲속 독서"], color: "#FFCC02" },
  winter: { label: "겨울 (12~2월)", activities: ["벽난로 & 핫초코", "눈꽃 산책", "스키/보드", "온천 힐링"], color: "#B3E5FC" },
};

export const guestReviews = [
  { name: "김지영", room: "소나무채", season: "autumn", date: "2025.10", rating: 5, text: "노천탕에서 보는 단풍이 정말 환상적이었어요. 남편과 둘이 조용히 쉬기 완벽한 곳!", avatar: "KJ", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" },
  { name: "박서준", room: "참나무채", season: "summer", date: "2025.07", rating: 5, text: "아이들이 BBQ 데크에서 너무 좋아했어요. 키즈존도 잘 되어 있고 청결했습니다.", avatar: "PS", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80" },
  { name: "이하은", room: "자작나무채", season: "winter", date: "2025.12", rating: 5, text: "벽난로 앞에서 프로젝터로 영화 보는 게 최고의 겨울 데이트였어요.", avatar: "LH", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80" },
  { name: "정민호", room: "단풍나무채", season: "spring", date: "2025.04", rating: 5, text: "회사 워크숍으로 왔는데 시설이 너무 좋았어요. 야외 화덕에서 고기 구워먹은 게 하이라이트!", avatar: "JM", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80" },
  { name: "최수아", room: "편백나무채", season: "summer", date: "2025.08", rating: 5, text: "편백탕 향이 진짜 힐링이에요. 정원에서 아이들 뛰어놀고 어른들은 차 마시고. 재방문 확정!", avatar: "CS", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
  { name: "윤서연", room: "소나무채", season: "winter", date: "2026.01", rating: 5, text: "눈 오는 날 노천탕에 들어가니 천국이 따로 없더라고요. 커피머신도 좋았어요.", avatar: "YS", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80" },
];
