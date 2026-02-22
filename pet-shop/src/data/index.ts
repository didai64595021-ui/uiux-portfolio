export interface Puppy {
  id: string;
  name: string;
  breed: string;
  breedKr: string;
  gender: '남아' | '여아';
  age: string;
  status: '분양중' | '예약중' | '분양완료';
  image: string;
  description: string;
  weight?: string;
  color?: string;
}

export interface Breed {
  id: string;
  name: string;
  nameKr: string;
  description: string;
  traits: string[];
  size: string;
  weight: string;
  lifespan: string;
  image: string;
  gallery: string[];
}

export interface Review {
  id: string;
  author: string;
  puppyName: string;
  breed: string;
  rating: number;
  text: string;
  image: string;
  date: string;
}

export const puppies: Puppy[] = [
  {
    id: 'mongi',
    name: '몽이',
    breed: 'Maltipoo',
    breedKr: '말티푸',
    gender: '여아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba0c36a?w=800&q=80',
    description: '사랑스러운 눈망울의 말티푸 몽이입니다. 밝고 활발한 성격으로 가족 모두에게 사랑받을 아이예요.',
    weight: '0.8kg',
    color: '크림',
  },
  {
    id: 'somi',
    name: '솜이',
    breed: 'Pomeranian',
    breedKr: '포메라니안',
    gender: '남아',
    age: '2개월',
    status: '예약중',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    description: '솜사탕처럼 부드러운 포메라니안 솜이입니다. 영리하고 충성스러운 성격의 아이예요.',
    weight: '0.6kg',
    color: '오렌지',
  },
  {
    id: 'gureum',
    name: '구름',
    breed: 'Mini Bichon',
    breedKr: '미니 비숑',
    gender: '남아',
    age: '3개월',
    status: '분양완료',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80',
    description: '하얀 구름 같은 미니 비숑 구름이입니다. 온순하고 사교적인 성격으로 누구와도 잘 어울려요.',
    weight: '1.2kg',
    color: '화이트',
  },
  {
    id: 'maru',
    name: '마루',
    breed: 'Golden Retriever',
    breedKr: '리트리버',
    gender: '남아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&q=80',
    description: '골든 리트리버 마루입니다. 충직하고 따뜻한 성격으로 가족견으로 최고예요.',
    weight: '3.5kg',
    color: '골드',
  },
  {
    id: 'dubu',
    name: '두부',
    breed: 'Coton de Tulear',
    breedKr: '꼬똥 드 뚤레아',
    gender: '여아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80',
    description: '두부처럼 하얀 꼬똥 드 뚤레아 두부입니다. 밝고 명랑한 성격의 프리미엄 견종이에요.',
    weight: '0.9kg',
    color: '화이트',
  },
  {
    id: 'luna',
    name: '루나',
    breed: 'Pomsky',
    breedKr: '폼스키',
    gender: '여아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=800&q=80',
    description: '폼스키 루나입니다. 허스키의 매력과 포메라니안의 사랑스러움을 모두 갖춘 아이예요.',
    weight: '1.1kg',
    color: '그레이&화이트',
  },
  {
    id: 'choco',
    name: '초코',
    breed: 'Poodle',
    breedKr: '푸들',
    gender: '남아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1616149776860-7960bcffe47f?w=800&q=80',
    description: '초콜릿 컬러의 토이 푸들 초코입니다. 지적이고 우아한 성격의 아이예요.',
    weight: '0.7kg',
    color: '브라운',
  },
  {
    id: 'mandu',
    name: '만두',
    breed: 'Yorkshire Terrier',
    breedKr: '요크셔테리어',
    gender: '남아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1583337130417-13571a247212?w=800&q=80',
    description: '요크셔테리어 만두입니다. 작지만 용감한 성격으로 매력이 넘치는 아이예요.',
    weight: '0.5kg',
    color: '탄&블루',
  },
];

export const breeds: Breed[] = [
  {
    id: 'coton-de-tulear',
    name: 'Coton de Tulear',
    nameKr: '꼬똥 드 뚤레아',
    description: '마다가스카르 원산의 희귀 프리미엄 견종으로, "면화 같은 털"이라는 이름처럼 부드럽고 풍성한 피모가 특징입니다. 밝고 사교적인 성격으로 가족견에 최적화된 견종입니다.',
    traits: ['사교적', '밝은 성격', '저알레르기', '충성스러움'],
    size: '소형',
    weight: '3.5-6kg',
    lifespan: '14-16년',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
      'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&q=80',
    ],
  },
  {
    id: 'maltipoo',
    name: 'Maltipoo',
    nameKr: '말티푸',
    description: '말티즈와 푸들의 장점을 결합한 인기 디자이너 견종입니다. 털 빠짐이 적고 영리하며, 사랑스러운 외모로 전 세계적으로 사랑받고 있습니다.',
    traits: ['영리함', '애교 많음', '저알레르기', '활발함'],
    size: '소형',
    weight: '2.5-5kg',
    lifespan: '12-15년',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba0c36a?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591160690555-5debfba0c36a?w=600&q=80',
      'https://images.unsplash.com/photo-1583337130417-13571a247212?w=600&q=80',
      'https://images.unsplash.com/photo-1616149776860-7960bcffe47f?w=600&q=80',
    ],
  },
  {
    id: 'poodle',
    name: 'Poodle',
    nameKr: '푸들',
    description: '세계에서 가장 지적인 견종 중 하나로, 우아한 외모와 뛰어난 학습 능력을 겸비하고 있습니다. 다양한 크기(스탠다드, 미니어처, 토이)로 만나보실 수 있습니다.',
    traits: ['높은 지능', '우아함', '저알레르기', '훈련 용이'],
    size: '소형~대형',
    weight: '2-32kg',
    lifespan: '12-15년',
    image: 'https://images.unsplash.com/photo-1616149776860-7960bcffe47f?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616149776860-7960bcffe47f?w=600&q=80',
      'https://images.unsplash.com/photo-1591160690555-5debfba0c36a?w=600&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    ],
  },
  {
    id: 'maltese',
    name: 'Maltese',
    nameKr: '말티즈',
    description: '순백의 실크 같은 피모가 매력적인 견종입니다. 온순하고 다정한 성격으로 반려견 초보자에게도 추천하는 견종입니다.',
    traits: ['온순함', '다정함', '적응력 좋음', '작고 귀여움'],
    size: '소형',
    weight: '1.8-3.2kg',
    lifespan: '12-15년',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
      'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80',
      'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&q=80',
    ],
  },
  {
    id: 'pomeranian',
    name: 'Pomeranian',
    nameKr: '포메라니안',
    description: '풍성한 더블 코트와 여우 같은 얼굴이 매력적인 소형견입니다. 활발하고 영리하며, 작은 체구에 비해 용감한 성격을 가지고 있습니다.',
    traits: ['활발함', '용감함', '영리함', '충성스러움'],
    size: '소형',
    weight: '1.5-3.5kg',
    lifespan: '12-16년',
    image: 'https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=600&q=80',
      'https://images.unsplash.com/photo-1583337130417-13571a247212?w=600&q=80',
      'https://images.unsplash.com/photo-1591160690555-5debfba0c36a?w=600&q=80',
    ],
  },
  {
    id: 'mini-bichon',
    name: 'Mini Bichon',
    nameKr: '미니 비숑',
    description: '하얀 솜사탕 같은 외모가 매력적인 비숑 프리제의 미니 버전입니다. 쾌활하고 사교적인 성격으로 누구와도 잘 어울립니다.',
    traits: ['쾌활함', '사교적', '저알레르기', '온순함'],
    size: '소형',
    weight: '3-5kg',
    lifespan: '12-15년',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
      'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80',
    ],
  },
  {
    id: 'pomsky',
    name: 'Pomsky',
    nameKr: '폼스키',
    description: '시베리안 허스키와 포메라니안의 교배종으로, 허스키의 아름다운 외모를 작은 체구에 담은 매력적인 견종입니다.',
    traits: ['영리함', '활발함', '사랑스러움', '독립적'],
    size: '소형~중형',
    weight: '5-14kg',
    lifespan: '13-15년',
    image: 'https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=600&q=80',
      'https://images.unsplash.com/photo-1591160690555-5debfba0c36a?w=600&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    ],
  },
  {
    id: 'yorkshire',
    name: 'Yorkshire Terrier',
    nameKr: '요크셔테리어',
    description: '실크처럼 부드러운 피모가 특징인 소형견으로, "움직이는 보석"이라 불립니다. 작은 체구에 비해 자신감 넘치고 활발한 성격입니다.',
    traits: ['자신감', '활발함', '용감함', '애교 많음'],
    size: '소형',
    weight: '1.5-3.2kg',
    lifespan: '13-16년',
    image: 'https://images.unsplash.com/photo-1583337130417-13571a247212?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-13571a247212?w=600&q=80',
      'https://images.unsplash.com/photo-1616149776860-7960bcffe47f?w=600&q=80',
      'https://images.unsplash.com/photo-1591160690555-5debfba0c36a?w=600&q=80',
    ],
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    author: '김서연',
    puppyName: '뽀삐',
    breed: '말티푸',
    rating: 5,
    text: '시그니처펍스에서 뽀삐를 만났어요. 건강하고 밝은 아이를 데려올 수 있어서 정말 감사합니다. 분양 후에도 꼼꼼한 케어 안내를 해주셔서 초보 보호자인 저도 안심하고 키울 수 있었어요.',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba0c36a?w=400&q=80',
    date: '2025.12',
  },
  {
    id: '2',
    author: '이준혁',
    puppyName: '코코',
    breed: '꼬똥 드 뚤레아',
    rating: 5,
    text: '프리미엄 분양답게 모든 과정이 체계적이었습니다. 건강 검진부터 백신 기록까지 꼼꼼하게 관리되어 있었고, 코코는 지금 가족 모두의 사랑을 독차지하고 있어요!',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&q=80',
    date: '2025.11',
  },
  {
    id: '3',
    author: '박민지',
    puppyName: '몽실',
    breed: '포메라니안',
    rating: 5,
    text: '위례점 매장 분위기가 정말 깔끔하고 좋았어요. 강아지들도 모두 건강하고 관리가 잘 되어 있었습니다. 몽실이 덕분에 매일매일이 행복해요.',
    image: 'https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=400&q=80',
    date: '2025.10',
  },
  {
    id: '4',
    author: '최영수',
    puppyName: '별이',
    breed: '미니 비숑',
    rating: 5,
    text: '아이가 반려견을 간절히 원했는데, 시그니처펍스에서 건강한 별이를 만나게 되었습니다. 사후 관리 서비스까지 완벽하고, 아이도 별이도 모두 행복합니다.',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&q=80',
    date: '2025.09',
  },
  {
    id: '5',
    author: '정하늘',
    puppyName: '초코볼',
    breed: '푸들',
    rating: 5,
    text: '해외 분양도 가능하다고 해서 해외에 계신 부모님께 선물했어요. 안전한 운송과 건강 보증까지 완벽하게 관리해주셔서 감동이었습니다.',
    image: 'https://images.unsplash.com/photo-1616149776860-7960bcffe47f?w=400&q=80',
    date: '2025.08',
  },
  {
    id: '6',
    author: '한소윤',
    puppyName: '콩이',
    breed: '요크셔테리어',
    rating: 5,
    text: '여러 곳을 비교해봤는데 시그니처펍스가 가장 전문적이었어요. 견종별 특성 설명부터 입양 후 교육 가이드까지 정말 세심했습니다.',
    image: 'https://images.unsplash.com/photo-1583337130417-13571a247212?w=400&q=80',
    date: '2025.07',
  },
];

export const adoptionProcess = [
  {
    step: 1,
    title: '상담 예약',
    titleEn: 'Consultation',
    description: '전화 또는 카카오톡으로 상담을 예약하세요. 원하시는 견종, 성별, 생활 환경 등을 상세히 안내해 드립니다.',
    icon: 'phone',
  },
  {
    step: 2,
    title: '매장 방문',
    titleEn: 'Visit',
    description: '위례점에 직접 방문하여 아이들을 만나보세요. 편안한 환경에서 충분한 시간을 갖고 교감할 수 있습니다.',
    icon: 'store',
  },
  {
    step: 3,
    title: '건강 체크',
    titleEn: 'Health Check',
    description: '분양 전 전문 수의사의 종합 건강 검진을 진행합니다. 유전자 검사, 백신 접종 기록을 확인합니다.',
    icon: 'health',
  },
  {
    step: 4,
    title: '입양 계약',
    titleEn: 'Adoption',
    description: '투명한 계약 절차를 진행합니다. 건강 보증서, 백신 기록, 혈통서 등 모든 서류를 전달해 드립니다.',
    icon: 'contract',
  },
  {
    step: 5,
    title: '사후 관리',
    titleEn: 'Aftercare',
    description: '입양 후에도 평생 건강 관리를 지원합니다. 사료, 미용, 건강 상담 등 프리미엄 사후 서비스를 제공합니다.',
    icon: 'care',
  },
];
