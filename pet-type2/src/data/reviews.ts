export interface Review {
  id: string;
  author: string;
  breed: string;
  puppyName: string;
  content: string;
  rating: number;
  beforeImage: string;
  afterImage: string;
  adoptedDate: string;
  location: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    author: '김지현',
    breed: '말티푸',
    puppyName: '보리',
    content: '시그니처펍스에서 보리를 만난 건 정말 행운이에요. 건강 검진부터 사후 관리까지 완벽했습니다. 지금은 우리 가족의 영원한 보물이 되었어요.',
    rating: 5,
    beforeImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&q=80',
    adoptedDate: '2025.08',
    location: '서울 송파구',
  },
  {
    id: '2',
    author: '박서준',
    breed: '비숑 프리제',
    puppyName: '뭉치',
    content: '첫 반려견이라 걱정이 많았는데, 상담부터 분양 후 관리까지 세심하게 챙겨주셔서 정말 감사합니다. 뭉치가 건강하게 잘 자라고 있어요!',
    rating: 5,
    beforeImage: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1598134493179-69506a235cef?w=800&q=80',
    adoptedDate: '2025.06',
    location: '경기 위례',
  },
  {
    id: '3',
    author: '이하은',
    breed: '포메라니안',
    puppyName: '콩이',
    content: '매장 방문했을 때 깨끗한 환경과 건강한 아이들을 보고 신뢰가 갔어요. 콩이와 함께한 6개월, 매일이 행복합니다.',
    rating: 5,
    beforeImage: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=800&q=80',
    adoptedDate: '2025.04',
    location: '서울 강남구',
  },
  {
    id: '4',
    author: '정민수',
    breed: '푸들',
    puppyName: '달이',
    content: '해외 분양 서비스를 이용했는데, 모든 과정이 투명하고 안전하게 진행되었습니다. 달이는 지금 가장 건강하고 행복한 강아지예요.',
    rating: 5,
    beforeImage: 'https://images.unsplash.com/photo-1616149247821-ea4e6f31f8a8?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1594149929911-78975a43d4f5?w=800&q=80',
    adoptedDate: '2025.09',
    location: '부산 해운대구',
  },
];
