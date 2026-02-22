export type PuppyStatus = '분양중' | '예약중' | '분양완료';
export type Gender = '남아' | '여아';

export interface Puppy {
  id: string;
  name: string;
  breed: string;
  breedEn: string;
  gender: Gender;
  age: string;
  status: PuppyStatus;
  image: string;
  personality: string[];
  weight: string;
  color: string;
}

export const puppies: Puppy[] = [
  {
    id: 'mongi',
    name: '몽이',
    breed: '말티푸',
    breedEn: 'Maltipoo',
    gender: '여아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    personality: ['활발한', '애교많은', '영리한'],
    weight: '0.8kg',
    color: '크림',
  },
  {
    id: 'somi',
    name: '솜이',
    breed: '포메라니안',
    breedEn: 'Pomeranian',
    gender: '남아',
    age: '2개월',
    status: '예약중',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80',
    personality: ['용감한', '호기심많은', '충성스러운'],
    weight: '0.6kg',
    color: '오렌지',
  },
  {
    id: 'gureum',
    name: '구름',
    breed: '미니 비숑',
    breedEn: 'Mini Bichon',
    gender: '남아',
    age: '3개월',
    status: '분양완료',
    image: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?w=800&q=80',
    personality: ['온순한', '사교적인', '장난꾸러기'],
    weight: '1.2kg',
    color: '화이트',
  },
  {
    id: 'maru',
    name: '마루',
    breed: '리트리버',
    breedEn: 'Retriever',
    gender: '남아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&q=80',
    personality: ['순한', '활동적인', '충성스러운'],
    weight: '3.5kg',
    color: '골드',
  },
  {
    id: 'dubu',
    name: '두부',
    breed: '코튼 드 튈레아',
    breedEn: 'Coton de Tulear',
    gender: '여아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80',
    personality: ['부드러운', '밝은', '다정한'],
    weight: '0.7kg',
    color: '화이트',
  },
  {
    id: 'luna',
    name: '루나',
    breed: '폼스키',
    breedEn: 'Pomsky',
    gender: '여아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1583337130417-13571f57e42f?w=800&q=80',
    personality: ['활발한', '영리한', '독립적인'],
    weight: '1.0kg',
    color: '그레이&화이트',
  },
  {
    id: 'choco',
    name: '초코',
    breed: '푸들',
    breedEn: 'Poodle',
    gender: '남아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1616149247821-ea4e6f31f8a8?w=800&q=80',
    personality: ['똑똑한', '우아한', '장난꾸러기'],
    weight: '0.9kg',
    color: '브라운',
  },
  {
    id: 'mandu',
    name: '만두',
    breed: '요크셔',
    breedEn: 'Yorkshire',
    gender: '남아',
    age: '2개월',
    status: '분양중',
    image: 'https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?w=800&q=80',
    personality: ['대담한', '애정어린', '활기찬'],
    weight: '0.5kg',
    color: '탄&블루',
  },
];

export const statusColor: Record<PuppyStatus, { bg: string; text: string; dot: string }> = {
  '분양중': { bg: 'bg-emerald-500/20', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  '예약중': { bg: 'bg-amber-500/20', text: 'text-amber-400', dot: 'bg-amber-400' },
  '분양완료': { bg: 'bg-gray-500/20', text: 'text-gray-400', dot: 'bg-gray-400' },
};
