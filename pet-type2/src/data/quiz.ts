export interface QuizQuestion {
  id: string;
  question: string;
  emoji: string;
  options: {
    text: string;
    value: string;
    icon: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'space',
    question: '현재 거주 공간은 어떤가요?',
    emoji: '🏠',
    options: [
      { text: '원룸/오피스텔', value: 'small', icon: '🏢' },
      { text: '아파트 (20평대)', value: 'medium', icon: '🏠' },
      { text: '아파트 (30평 이상)', value: 'large', icon: '🏡' },
      { text: '단독주택/마당있음', value: 'house', icon: '🌳' },
    ],
  },
  {
    id: 'lifestyle',
    question: '평소 생활 패턴은 어떤가요?',
    emoji: '🕐',
    options: [
      { text: '집에서 재택근무', value: 'home', icon: '💻' },
      { text: '낮에 외출, 저녁 귀가', value: 'office', icon: '🏢' },
      { text: '불규칙한 스케줄', value: 'irregular', icon: '🔄' },
      { text: '주로 집에 있음', value: 'stay', icon: '🛋️' },
    ],
  },
  {
    id: 'experience',
    question: '반려견 경험이 있으신가요?',
    emoji: '🐕',
    options: [
      { text: '처음 키워요', value: 'none', icon: '🌱' },
      { text: '어릴 때 키워본 적 있어요', value: 'childhood', icon: '📖' },
      { text: '현재/최근 키우고 있어요', value: 'current', icon: '🐾' },
      { text: '전문적으로 관리 가능해요', value: 'expert', icon: '🎓' },
    ],
  },
  {
    id: 'activity',
    question: '원하는 활동 수준은?',
    emoji: '🏃',
    options: [
      { text: '조용히 함께 쉬고 싶어요', value: 'low', icon: '😴' },
      { text: '가벼운 산책 정도', value: 'moderate', icon: '🚶' },
      { text: '활발한 놀이 & 산책', value: 'active', icon: '🏃' },
      { text: '함께 운동하고 싶어요', value: 'high', icon: '⛰️' },
    ],
  },
  {
    id: 'priority',
    question: '가장 중요하게 생각하는 것은?',
    emoji: '💎',
    options: [
      { text: '털빠짐이 적은 것', value: 'shedding', icon: '✨' },
      { text: '훈련이 쉬운 것', value: 'training', icon: '🎯' },
      { text: '아이/다른 반려동물과 잘 지내는 것', value: 'social', icon: '👨‍👩‍👧' },
      { text: '독특한 외모', value: 'unique', icon: '💫' },
    ],
  },
];

export interface QuizResult {
  breedId: string;
  matchScore: number;
  reason: string;
}

export function calculateQuizResults(answers: Record<string, string>): QuizResult[] {
  const scores: Record<string, number> = {
    'coton-de-tulear': 0,
    'maltipoo': 0,
    'poodle': 0,
    'maltese': 0,
    'pomeranian': 0,
    'mini-bichon': 0,
    'pomsky': 0,
    'yorkshire': 0,
  };

  // Space scoring
  if (answers.space === 'small') {
    scores['maltese'] += 3;
    scores['yorkshire'] += 3;
    scores['maltipoo'] += 2;
    scores['pomeranian'] += 2;
  } else if (answers.space === 'medium') {
    scores['maltipoo'] += 3;
    scores['poodle'] += 3;
    scores['mini-bichon'] += 3;
    scores['coton-de-tulear'] += 2;
  } else if (answers.space === 'large' || answers.space === 'house') {
    scores['pomsky'] += 3;
    scores['poodle'] += 2;
    scores['coton-de-tulear'] += 2;
    scores['mini-bichon'] += 2;
  }

  // Lifestyle scoring
  if (answers.lifestyle === 'home' || answers.lifestyle === 'stay') {
    scores['maltese'] += 2;
    scores['coton-de-tulear'] += 3;
    scores['maltipoo'] += 2;
    scores['mini-bichon'] += 2;
  } else if (answers.lifestyle === 'office') {
    scores['poodle'] += 2;
    scores['maltipoo'] += 2;
    scores['yorkshire'] += 2;
  }

  // Experience scoring
  if (answers.experience === 'none') {
    scores['maltipoo'] += 3;
    scores['mini-bichon'] += 3;
    scores['coton-de-tulear'] += 2;
    scores['maltese'] += 2;
  } else if (answers.experience === 'expert') {
    scores['pomsky'] += 3;
    scores['poodle'] += 2;
    scores['pomeranian'] += 2;
  }

  // Activity scoring
  if (answers.activity === 'low') {
    scores['maltese'] += 3;
    scores['yorkshire'] += 2;
    scores['coton-de-tulear'] += 2;
  } else if (answers.activity === 'moderate') {
    scores['maltipoo'] += 3;
    scores['mini-bichon'] += 3;
    scores['poodle'] += 2;
  } else if (answers.activity === 'active' || answers.activity === 'high') {
    scores['pomsky'] += 3;
    scores['pomeranian'] += 2;
    scores['poodle'] += 2;
  }

  // Priority scoring
  if (answers.priority === 'shedding') {
    scores['maltipoo'] += 3;
    scores['poodle'] += 3;
    scores['coton-de-tulear'] += 3;
    scores['maltese'] += 2;
    scores['yorkshire'] += 2;
  } else if (answers.priority === 'training') {
    scores['poodle'] += 3;
    scores['maltipoo'] += 3;
    scores['coton-de-tulear'] += 2;
  } else if (answers.priority === 'social') {
    scores['coton-de-tulear'] += 3;
    scores['mini-bichon'] += 3;
    scores['maltipoo'] += 2;
  } else if (answers.priority === 'unique') {
    scores['pomsky'] += 3;
    scores['pomeranian'] += 2;
    scores['yorkshire'] += 2;
  }

  const reasons: Record<string, string> = {
    'coton-de-tulear': '사교적이고 저자극성 피모로 온 가족이 함께하기 좋아요',
    'maltipoo': '똑똑하고 애교 넘치며 관리가 비교적 쉬워요',
    'poodle': '최고의 지능과 훈련성으로 초보자도 쉽게 교감할 수 있어요',
    'maltese': '온순하고 실내 생활에 최적화된 사랑스러운 품종이에요',
    'pomeranian': '대담하고 활기찬 성격으로 매일이 즐거워져요',
    'mini-bichon': '밝고 사교적인 성격으로 누구와도 잘 어울려요',
    'pomsky': '유니크한 외모와 활동적인 성격으로 특별한 하루를 선사해요',
    'yorkshire': '작지만 용감하며 실내 생활에 잘 적응해요',
  };

  const maxScore = Math.max(...Object.values(scores));

  return Object.entries(scores)
    .map(([breedId, score]) => ({
      breedId,
      matchScore: Math.round((score / maxScore) * 100),
      reason: reasons[breedId],
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
}
