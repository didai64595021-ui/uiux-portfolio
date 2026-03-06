export interface QuizOption {
  id: string;
  label: string;
  labelZh: string;
  description?: string;
  descriptionZh?: string;
  icon?: string;
}

export interface QuizStep {
  id: string;
  question: string;
  questionZh: string;
  subtitle?: string;
  subtitleZh?: string;
  type: "single" | "multiple";
  options: QuizOption[];
}

export const quizSteps: QuizStep[] = [
  {
    id: "skin-type",
    question: "현재 피부 타입은 어떤가요?",
    questionZh: "您目前的膚質類型是？",
    subtitle: "평소 세안 후 2시간 뒤 피부 상태를 기준으로 선택해주세요",
    subtitleZh: "請以平時洗臉後2小時的膚況為基準選擇",
    type: "single",
    options: [
      { id: "dry", label: "건성", labelZh: "乾性", description: "당김, 각질, 건조함", descriptionZh: "緊繃、脫屑、乾燥", icon: "💧" },
      { id: "oily", label: "지성", labelZh: "油性", description: "번들거림, 유분 과다", descriptionZh: "泛油光、油脂過多", icon: "✨" },
      { id: "combination", label: "복합성", labelZh: "混合性", description: "T존 유분, 볼 건조", descriptionZh: "T字部位出油、兩頰乾燥", icon: "🔄" },
      { id: "sensitive", label: "민감성", labelZh: "敏感性", description: "쉽게 빨개짐, 자극 예민", descriptionZh: "容易泛紅、對刺激敏感", icon: "🌸" },
    ],
  },
  {
    id: "concern",
    question: "가장 고민되는 피부 문제는?",
    questionZh: "最困擾的皮膚問題是？",
    subtitle: "최대 3개까지 선택 가능합니다",
    subtitleZh: "最多可選擇3項",
    type: "multiple",
    options: [
      { id: "pigment", label: "기미 / 색소", labelZh: "肝斑 / 色素", description: "기미, 잡티, 과색소침착", descriptionZh: "肝斑、色斑、色素沉澱" },
      { id: "wrinkle", label: "주름 / 탄력", labelZh: "皺紋 / 彈力", description: "눈가, 이마, 팔자주름", descriptionZh: "眼周、額頭、法令紋" },
      { id: "acne", label: "여드름 / 트러블", labelZh: "痘痘 / 問題肌", description: "반복 여드름, 염증", descriptionZh: "反覆長痘、發炎" },
      { id: "pore", label: "모공 / 피부결", labelZh: "毛孔 / 膚質", description: "넓은 모공, 거친 피부결", descriptionZh: "毛孔粗大、膚質粗糙" },
      { id: "volume", label: "볼륨 / 윤곽", labelZh: "豐盈 / 輪廓", description: "꺼진 볼, 무턱, 윤곽선", descriptionZh: "凹陷臉頰、短下巴、輪廓線" },
      { id: "aging", label: "전반적 노화", labelZh: "整體老化", description: "처짐, 탄력 저하, 칙칙함", descriptionZh: "鬆弛、彈力下降、暗沉" },
    ],
  },
  {
    id: "history",
    question: "이전 피부과 시술 경험이 있으신가요?",
    questionZh: "您之前有皮膚科療程經驗嗎？",
    subtitle: "해당하는 항목을 모두 선택해주세요",
    subtitleZh: "請選擇所有符合的項目",
    type: "multiple",
    options: [
      { id: "none", label: "없음", labelZh: "無", description: "처음 방문합니다", descriptionZh: "第一次來訪" },
      { id: "laser", label: "레이저 시술", labelZh: "雷射療程", description: "레이저토닝, 피코 등", descriptionZh: "雷射淨膚、皮秒等" },
      { id: "injection", label: "주사 시술", labelZh: "注射療程", description: "보톡스, 필러 등", descriptionZh: "肉毒桿菌、玻尿酸等" },
      { id: "peel", label: "필링 / 관리", labelZh: "煥膚 / 護理", description: "화학 필링, 피부 관리", descriptionZh: "化學煥膚、皮膚護理" },
      { id: "surgery", label: "수술적 시술", labelZh: "手術療程", description: "실 리프팅, 지방이식 등", descriptionZh: "埋線拉提、脂肪移植等" },
    ],
  },
  {
    id: "preference",
    question: "시술 선호도를 알려주세요",
    questionZh: "請告訴我們您的療程偏好",
    subtitle: "시술 선택에 참고하겠습니다",
    subtitleZh: "我們會作為療程選擇的參考",
    type: "single",
    options: [
      { id: "minimal", label: "최소 다운타임", labelZh: "最短恢復期", description: "일상에 지장 없는 시술 선호", descriptionZh: "偏好不影響日常的療程" },
      { id: "balanced", label: "균형 잡힌 접근", labelZh: "均衡的方式", description: "효과와 회복 기간의 균형", descriptionZh: "效果與恢復期的平衡" },
      { id: "aggressive", label: "적극적 치료", labelZh: "積極治療", description: "다운타임이 있어도 효과 우선", descriptionZh: "即使有恢復期也以效果優先" },
    ],
  },
  {
    id: "age-range",
    question: "연령대를 선택해주세요",
    questionZh: "請選擇您的年齡層",
    subtitle: "연령에 따른 맞춤 치료를 제안드립니다",
    subtitleZh: "我們將根據年齡提供客製化治療建議",
    type: "single",
    options: [
      { id: "20s", label: "20대", labelZh: "20多歲", description: "예방적 관리 & 트러블 케어", descriptionZh: "預防性管理 & 問題肌護理" },
      { id: "30s", label: "30대", labelZh: "30多歲", description: "초기 노화 방지 & 톤 관리", descriptionZh: "初期抗老化 & 膚色管理" },
      { id: "40s", label: "40대", labelZh: "40多歲", description: "탄력 관리 & 색소 치료", descriptionZh: "彈力管理 & 色素治療" },
      { id: "50plus", label: "50대 이상", labelZh: "50歲以上", description: "집중 안티에이징", descriptionZh: "密集抗衰老" },
    ],
  },
];

export interface QuizResult {
  primaryTreatments: string[];
  secondaryTreatments: string[];
  routineType: string;
  summary: string;
  summaryZh: string;
}

export function getQuizResult(answers: Record<string, string[]>): QuizResult {
  const concerns = answers["concern"] || [];
  const preference = (answers["preference"] || [])[0] || "balanced";

  const treatmentMap: Record<string, string[]> = {
    pigment: ["laser-toning", "pico-laser"],
    wrinkle: ["botox", "lifting"],
    acne: ["acne-treatment", "skin-regen"],
    pore: ["pore-treatment", "skin-regen"],
    volume: ["filler", "botox"],
    aging: ["lifting", "skin-regen", "botox"],
  };

  const primary: string[] = [];
  const secondary: string[] = [];

  concerns.forEach((concern, index) => {
    const treatments = treatmentMap[concern] || [];
    if (index < 2) {
      primary.push(...treatments.slice(0, 1));
      secondary.push(...treatments.slice(1));
    } else {
      secondary.push(...treatments);
    }
  });

  const uniquePrimary = Array.from(new Set(primary));
  const uniqueSecondary = Array.from(new Set(secondary)).filter(
    (t) => !uniquePrimary.includes(t)
  );

  let summary = "";
  let summaryZh = "";
  if (preference === "minimal") {
    summary =
      "다운타임이 최소화된 편안한 시술 위주로 구성했습니다. 일상에 지장 없이 꾸준한 관리로 피부를 개선해 나갈 수 있습니다.";
    summaryZh =
      "以恢復期最短的舒適療程為主進行規劃。可以在不影響日常的情況下，透過持續管理來改善肌膚。";
  } else if (preference === "aggressive") {
    summary =
      "빠르고 확실한 효과를 위한 적극적인 시술 플랜입니다. 단기간 집중 치료로 최대의 결과를 기대할 수 있습니다.";
    summaryZh =
      "為追求快速且確實的效果而制定的積極療程計畫。透過短期集中治療可期待最大效果。";
  } else {
    summary =
      "효과와 일상 편의성을 균형 있게 고려한 맞춤 치료 플랜입니다. 단계적으로 피부를 개선해 나갑니다.";
    summaryZh =
      "兼顧效果與日常便利性的均衡客製化治療計畫。逐步改善您的肌膚狀態。";
  }

  return {
    primaryTreatments: uniquePrimary,
    secondaryTreatments: uniqueSecondary.slice(0, 3),
    routineType:
      concerns.includes("acne") || concerns.includes("pore")
        ? "trouble"
        : concerns.includes("aging") || concerns.includes("wrinkle")
        ? "antiaging"
        : "brightening",
    summary,
    summaryZh,
  };
}
