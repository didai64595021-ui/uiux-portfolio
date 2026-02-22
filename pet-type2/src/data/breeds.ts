export interface BreedStats {
  size: number;
  activity: number;
  shedding: number;
  trainability: number;
  sociability: number;
}

export interface Breed {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  origin: string;
  lifespan: string;
  weightRange: string;
  stats: BreedStats;
  image: string;
  characteristics: string[];
  monthlyCost: {
    food: number;
    grooming: number;
    medical: number;
    supplies: number;
  };
}

export const breeds: Breed[] = [
  {
    id: 'coton-de-tulear',
    name: '코튼 드 튈레아',
    nameEn: 'Coton de Tulear',
    description: '마다가스카르 왕실의 사랑을 받던 품종으로, 솜처럼 부드러운 피모와 밝은 성격이 특징입니다.',
    origin: '마다가스카르',
    lifespan: '14-16년',
    weightRange: '3.5-6kg',
    stats: { size: 2, activity: 3, shedding: 1, trainability: 4, sociability: 5 },
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80',
    characteristics: ['저자극성', '솜같은 피모', '친화력 최고', '소형견'],
    monthlyCost: { food: 80000, grooming: 60000, medical: 30000, supplies: 40000 },
  },
  {
    id: 'maltipoo',
    name: '말티푸',
    nameEn: 'Maltipoo',
    description: '말티즈와 푸들의 장점을 결합한 디자이너 품종으로, 똑똑하고 애교가 넘칩니다.',
    origin: '미국',
    lifespan: '12-15년',
    weightRange: '2.5-5kg',
    stats: { size: 2, activity: 3, shedding: 1, trainability: 5, sociability: 5 },
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    characteristics: ['저자극성', '지능 높음', '애교 만점', '다양한 모색'],
    monthlyCost: { food: 70000, grooming: 50000, medical: 30000, supplies: 35000 },
  },
  {
    id: 'poodle',
    name: '푸들',
    nameEn: 'Poodle',
    description: '세계에서 가장 똑똑한 견종 중 하나로, 우아한 외모와 뛰어난 훈련성을 자랑합니다.',
    origin: '프랑스/독일',
    lifespan: '12-15년',
    weightRange: '3-4kg (토이)',
    stats: { size: 2, activity: 4, shedding: 1, trainability: 5, sociability: 4 },
    image: 'https://images.unsplash.com/photo-1616149247821-ea4e6f31f8a8?w=800&q=80',
    characteristics: ['최고 지능', '저자극성', '다재다능', '우아한 외모'],
    monthlyCost: { food: 70000, grooming: 70000, medical: 30000, supplies: 35000 },
  },
  {
    id: 'maltese',
    name: '말티즈',
    nameEn: 'Maltese',
    description: '순백의 실크 같은 피모를 가진 고대 품종으로, 사랑스럽고 온순한 성격입니다.',
    origin: '몰타',
    lifespan: '12-15년',
    weightRange: '1.8-3.2kg',
    stats: { size: 1, activity: 2, shedding: 1, trainability: 3, sociability: 5 },
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&q=80',
    characteristics: ['실크 피모', '온순함', '실내견 적합', '저자극성'],
    monthlyCost: { food: 60000, grooming: 60000, medical: 35000, supplies: 30000 },
  },
  {
    id: 'pomeranian',
    name: '포메라니안',
    nameEn: 'Pomeranian',
    description: '작지만 대담한 성격의 품종으로, 풍성한 이중모와 여우 같은 얼굴이 매력적입니다.',
    origin: '독일/폴란드',
    lifespan: '12-16년',
    weightRange: '1.5-3.5kg',
    stats: { size: 1, activity: 4, shedding: 4, trainability: 3, sociability: 3 },
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80',
    characteristics: ['풍성한 모량', '대담한 성격', '경계심 강함', '여우상'],
    monthlyCost: { food: 60000, grooming: 55000, medical: 30000, supplies: 30000 },
  },
  {
    id: 'mini-bichon',
    name: '미니 비숑',
    nameEn: 'Mini Bichon',
    description: '곰돌이 같은 외모와 밝고 사교적인 성격으로 모두의 사랑을 받는 품종입니다.',
    origin: '프랑스',
    lifespan: '12-15년',
    weightRange: '3-5kg',
    stats: { size: 2, activity: 3, shedding: 1, trainability: 4, sociability: 5 },
    image: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?w=800&q=80',
    characteristics: ['곰돌이 외모', '밝은 성격', '저자극성', '사교적'],
    monthlyCost: { food: 70000, grooming: 65000, medical: 30000, supplies: 35000 },
  },
  {
    id: 'pomsky',
    name: '폼스키',
    nameEn: 'Pomsky',
    description: '허스키의 외모와 포메라니안의 크기를 합친 디자이너 품종으로, 유니크한 매력이 넘칩니다.',
    origin: '미국',
    lifespan: '13-15년',
    weightRange: '4-12kg',
    stats: { size: 3, activity: 4, shedding: 4, trainability: 3, sociability: 4 },
    image: 'https://images.unsplash.com/photo-1583337130417-13571f57e42f?w=800&q=80',
    characteristics: ['허스키 외모', '중소형', '활동적', '유니크'],
    monthlyCost: { food: 90000, grooming: 50000, medical: 35000, supplies: 40000 },
  },
  {
    id: 'yorkshire',
    name: '요크셔 테리어',
    nameEn: 'Yorkshire Terrier',
    description: '실크처럼 빛나는 피모와 당당한 성격의 소형견으로, 활기차고 용감합니다.',
    origin: '영국',
    lifespan: '13-16년',
    weightRange: '1.5-3.2kg',
    stats: { size: 1, activity: 3, shedding: 1, trainability: 3, sociability: 3 },
    image: 'https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?w=800&q=80',
    characteristics: ['실크 피모', '용감한 성격', '소형견', '저자극성'],
    monthlyCost: { food: 55000, grooming: 55000, medical: 30000, supplies: 30000 },
  },
];

export const statLabels: Record<keyof BreedStats, string> = {
  size: '크기',
  activity: '활동량',
  shedding: '털빠짐',
  trainability: '훈련용이성',
  sociability: '사회성',
};
