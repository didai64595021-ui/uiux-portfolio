export interface ProductCard {
  name: string;
  nameZh: string;
  type: string;
  typeZh: string;
  description: string;
  descriptionZh: string;
  keyIngredient: string;
  keyIngredientZh: string;
  timing: "AM" | "PM" | "BOTH";
  order: number;
}

export interface RoutineSet {
  id: string;
  concern: string;
  concernZh: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  am: ProductCard[];
  pm: ProductCard[];
}

export const routines: RoutineSet[] = [
  {
    id: "brightening",
    concern: "기미 / 색소 / 미백",
    concernZh: "肝斑 / 色素 / 美白",
    title: "브라이트닝 루틴",
    titleZh: "亮白保養程序",
    description: "색소침착을 방지하고 맑고 균일한 피부 톤을 만들어주는 루틴입니다.",
    descriptionZh: "預防色素沉澱，打造明亮均勻膚色的保養程序。",
    am: [
      { name: "저자극 클렌저", nameZh: "低刺激潔面乳", type: "클렌징", typeZh: "潔面", description: "약산성 폼 클렌저로 부드럽게 세안", descriptionZh: "以弱酸性泡沫潔面乳溫和洗臉", keyIngredient: "나이아신아마이드", keyIngredientZh: "菸鹼醯胺", timing: "AM", order: 1 },
      { name: "비타민C 세럼", nameZh: "維他命C精華", type: "세럼", typeZh: "精華液", description: "항산화 + 미백 효과의 고농축 비타민C", descriptionZh: "高濃度維他命C，兼具抗氧化與美白功效", keyIngredient: "아스코르빅애시드 15%", keyIngredientZh: "抗壞血酸 15%", timing: "AM", order: 2 },
      { name: "수분 크림", nameZh: "保濕霜", type: "모이스처라이저", typeZh: "保濕", description: "가벼운 텍스처의 수분 보호 크림", descriptionZh: "質地輕盈的保濕防護霜", keyIngredient: "히알루론산", keyIngredientZh: "玻尿酸", timing: "AM", order: 3 },
      { name: "자외선 차단제 SPF50+", nameZh: "防曬乳 SPF50+", type: "선크림", typeZh: "防曬", description: "미백 관리의 필수! 자외선 차단", descriptionZh: "美白護理必備！紫外線防護", keyIngredient: "무기자차 + 유기자차", keyIngredientZh: "物理防曬 + 化學防曬", timing: "AM", order: 4 },
    ],
    pm: [
      { name: "오일 클렌저", nameZh: "卸妝油", type: "1차 클렌징", typeZh: "第一步潔面", description: "선크림과 메이크업을 녹여내는 오일 클렌징", descriptionZh: "溶解防曬與彩妝的油性潔面", keyIngredient: "호호바 오일", keyIngredientZh: "荷荷巴油", timing: "PM", order: 1 },
      { name: "약산성 폼", nameZh: "弱酸性潔面乳", type: "2차 클렌징", typeZh: "第二步潔面", description: "잔여물을 깨끗하게 세정", descriptionZh: "徹底清潔殘留物", keyIngredient: "살리실산 0.5%", keyIngredientZh: "水楊酸 0.5%", timing: "PM", order: 2 },
      { name: "나이아신아마이드 토너", nameZh: "菸鹼醯胺化妝水", type: "토너", typeZh: "化妝水", description: "멜라닌 전이를 억제하는 미백 토너", descriptionZh: "抑制黑色素轉移的美白化妝水", keyIngredient: "나이아신아마이드 5%", keyIngredientZh: "菸鹼醯胺 5%", timing: "PM", order: 3 },
      { name: "알부틴 세럼", nameZh: "熊果素精華", type: "세럼", typeZh: "精華液", description: "집중 미백 케어 세럼", descriptionZh: "集中美白護理精華", keyIngredient: "알파알부틴 2%", keyIngredientZh: "α-熊果素 2%", timing: "PM", order: 4 },
      { name: "레티놀 크림", nameZh: "A醇乳霜", type: "크림", typeZh: "乳霜", description: "세포 턴오버 촉진으로 색소 배출", descriptionZh: "促進細胞代謝以排出色素", keyIngredient: "레티놀 0.3%", keyIngredientZh: "A醇 0.3%", timing: "PM", order: 5 },
    ],
  },
  {
    id: "trouble",
    concern: "여드름 / 모공 / 피지",
    concernZh: "痘痘 / 毛孔 / 皮脂",
    title: "트러블 케어 루틴",
    titleZh: "問題肌護理程序",
    description: "과잉 피지를 조절하고 여드름을 예방하며 모공을 관리하는 루틴입니다.",
    descriptionZh: "調節過多皮脂、預防痘痘並管理毛孔的保養程序。",
    am: [
      { name: "살리실산 클렌저", nameZh: "水楊酸潔面乳", type: "클렌징", typeZh: "潔面", description: "모공 속 피지까지 깨끗하게 세안", descriptionZh: "深入清潔毛孔內的皮脂", keyIngredient: "살리실산 2%", keyIngredientZh: "水楊酸 2%", timing: "AM", order: 1 },
      { name: "BHA 토너", nameZh: "BHA化妝水", type: "토너", typeZh: "化妝水", description: "각질 제거 + 모공 케어 토너", descriptionZh: "去角質 + 毛孔護理化妝水", keyIngredient: "BHA 0.5%", keyIngredientZh: "BHA 0.5%", timing: "AM", order: 2 },
      { name: "시카 세럼", nameZh: "積雪草精華", type: "세럼", typeZh: "精華液", description: "진정 + 피부 장벽 강화", descriptionZh: "鎮靜 + 強化皮膚屏障", keyIngredient: "센텔라아시아티카", keyIngredientZh: "積雪草萃取", timing: "AM", order: 3 },
      { name: "논코메도제닉 선크림", nameZh: "不致粉刺防曬乳", type: "선크림", typeZh: "防曬", description: "모공을 막지 않는 가벼운 자외선 차단", descriptionZh: "不堵塞毛孔的輕盈紫外線防護", keyIngredient: "무기자차", keyIngredientZh: "物理防曬", timing: "AM", order: 4 },
    ],
    pm: [
      { name: "티트리 클렌저", nameZh: "茶樹潔面乳", type: "클렌징", typeZh: "潔面", description: "항균 작용의 약산성 클렌저", descriptionZh: "具抗菌作用的弱酸性潔面乳", keyIngredient: "티트리 오일", keyIngredientZh: "茶樹精油", timing: "PM", order: 1 },
      { name: "AHA/BHA 토너", nameZh: "AHA/BHA化妝水", type: "토너", typeZh: "化妝水", description: "주 2~3회 각질 케어 (나머지는 순한 토너)", descriptionZh: "每週2~3次角質護理（其餘使用溫和化妝水）", keyIngredient: "글리콜산 + BHA", keyIngredientZh: "甘醇酸 + BHA", timing: "PM", order: 2 },
      { name: "나이아신아마이드 세럼", nameZh: "菸鹼醯胺精華", type: "세럼", typeZh: "精華液", description: "피지 조절 + 모공 축소", descriptionZh: "皮脂調節 + 毛孔縮小", keyIngredient: "나이아신아마이드 10%", keyIngredientZh: "菸鹼醯胺 10%", timing: "PM", order: 3 },
      { name: "아연 세럼", nameZh: "鋅精華", type: "타겟 세럼", typeZh: "局部精華", description: "여드름 부위에 스팟 케어", descriptionZh: "針對痘痘部位的局部護理", keyIngredient: "징크 PCA", keyIngredientZh: "PCA鋅", timing: "PM", order: 4 },
      { name: "수분 젤 크림", nameZh: "保濕凝膠霜", type: "모이스처라이저", typeZh: "保濕", description: "유수분 밸런스를 맞추는 가벼운 젤 크림", descriptionZh: "平衡油水的輕盈凝膠霜", keyIngredient: "히알루론산", keyIngredientZh: "玻尿酸", timing: "PM", order: 5 },
    ],
  },
  {
    id: "antiaging",
    concern: "주름 / 탄력 / 안티에이징",
    concernZh: "皺紋 / 彈力 / 抗衰老",
    title: "안티에이징 루틴",
    titleZh: "抗衰老保養程序",
    description: "콜라겐 생성을 촉진하고 탄력을 회복시키는 집중 안티에이징 루틴입니다.",
    descriptionZh: "促進膠原蛋白生成並恢復彈力的密集抗衰老保養程序。",
    am: [
      { name: "펩타이드 클렌저", nameZh: "胜肽潔面乳", type: "클렌징", typeZh: "潔面", description: "탄력 성분이 함유된 부드러운 세안제", descriptionZh: "含彈力成分的溫和潔面乳", keyIngredient: "콜라겐 펩타이드", keyIngredientZh: "膠原蛋白胜肽", timing: "AM", order: 1 },
      { name: "비타민C 세럼", nameZh: "維他命C精華", type: "세럼", typeZh: "精華液", description: "항산화 + 콜라겐 합성 촉진", descriptionZh: "抗氧化 + 促進膠原蛋白合成", keyIngredient: "아스코르빅애시드 20%", keyIngredientZh: "抗壞血酸 20%", timing: "AM", order: 2 },
      { name: "펩타이드 아이크림", nameZh: "胜肽眼霜", type: "아이크림", typeZh: "眼霜", description: "눈가 주름 집중 케어", descriptionZh: "眼周皺紋集中護理", keyIngredient: "아세틸헥사펩타이드", keyIngredientZh: "乙醯基六胜肽", timing: "AM", order: 3 },
      { name: "탄력 크림", nameZh: "彈力霜", type: "모이스처라이저", typeZh: "保濕", description: "리프팅 + 수분 보호 크림", descriptionZh: "拉提 + 保濕防護霜", keyIngredient: "레티놀 + 펩타이드", keyIngredientZh: "A醇 + 胜肽", timing: "AM", order: 4 },
      { name: "자외선 차단제 SPF50+", nameZh: "防曬乳 SPF50+", type: "선크림", typeZh: "防曬", description: "광노화 방지의 필수 단계", descriptionZh: "預防光老化的必備步驟", keyIngredient: "무기자차 + 유기자차", keyIngredientZh: "物理防曬 + 化學防曬", timing: "AM", order: 5 },
    ],
    pm: [
      { name: "클렌징 밤", nameZh: "卸妝膏", type: "1차 클렌징", typeZh: "第一步潔面", description: "풍부한 텍스처로 부드럽게 세안", descriptionZh: "以豐潤質地溫和潔面", keyIngredient: "쉐어버터", keyIngredientZh: "乳木果油", timing: "PM", order: 1 },
      { name: "약산성 폼", nameZh: "弱酸性潔面乳", type: "2차 클렌징", typeZh: "第二步潔面", description: "잔여물 제거", descriptionZh: "去除殘留物", keyIngredient: "아미노산", keyIngredientZh: "胺基酸", timing: "PM", order: 2 },
      { name: "레티놀 세럼", nameZh: "A醇精華", type: "세럼", typeZh: "精華液", description: "세포 재생 + 콜라겐 합성 촉진", descriptionZh: "細胞再生 + 促進膠原蛋白合成", keyIngredient: "레티놀 0.5%", keyIngredientZh: "A醇 0.5%", timing: "PM", order: 3 },
      { name: "펩타이드 앰플", nameZh: "胜肽安瓶", type: "앰플", typeZh: "安瓶", description: "6종 펩타이드 복합 탄력 앰플", descriptionZh: "6種胜肽複合彈力安瓶", keyIngredient: "매트릭실 + 아르지렐린", keyIngredientZh: "Matrixyl + 六胜肽", timing: "PM", order: 4 },
      { name: "나이트 크림", nameZh: "晚霜", type: "크림", typeZh: "乳霜", description: "밤사이 집중 영양 + 탄력 케어", descriptionZh: "夜間集中滋養 + 彈力護理", keyIngredient: "세라마이드 + 스쿠알란", keyIngredientZh: "神經醯胺 + 角鯊烷", timing: "PM", order: 5 },
    ],
  },
  {
    id: "hydration",
    concern: "건조 / 민감 / 장벽 강화",
    concernZh: "乾燥 / 敏感 / 屏障強化",
    title: "수분 장벽 루틴",
    titleZh: "保濕屏障保養程序",
    description: "손상된 피부 장벽을 복구하고 깊은 수분감을 유지하는 루틴입니다.",
    descriptionZh: "修復受損皮膚屏障並維持深層保濕感的保養程序。",
    am: [
      { name: "마일드 밀크 클렌저", nameZh: "溫和乳狀潔面乳", type: "클렌징", typeZh: "潔面", description: "피부 장벽을 해치지 않는 부드러운 세안", descriptionZh: "不傷害皮膚屏障的溫和潔面", keyIngredient: "세라마이드", keyIngredientZh: "神經醯胺", timing: "AM", order: 1 },
      { name: "히알루론산 토너", nameZh: "玻尿酸化妝水", type: "토너", typeZh: "化妝水", description: "다층 수분 보충 토너", descriptionZh: "多層保濕補水化妝水", keyIngredient: "히알루론산 3종", keyIngredientZh: "3種玻尿酸", timing: "AM", order: 2 },
      { name: "판테놀 세럼", nameZh: "泛醇精華", type: "세럼", typeZh: "精華液", description: "진정 + 보습 + 장벽 강화", descriptionZh: "鎮靜 + 保濕 + 屏障強化", keyIngredient: "판테놀 5%", keyIngredientZh: "泛醇 5%", timing: "AM", order: 3 },
      { name: "세라마이드 크림", nameZh: "神經醯胺乳霜", type: "모이스처라이저", typeZh: "保濕", description: "장벽 복구 크림", descriptionZh: "屏障修復乳霜", keyIngredient: "세라마이드 NP", keyIngredientZh: "神經醯胺 NP", timing: "AM", order: 4 },
      { name: "마일드 선크림", nameZh: "溫和防曬乳", type: "선크림", typeZh: "防曬", description: "무자극 물리 자외선 차단", descriptionZh: "無刺激物理性紫外線防護", keyIngredient: "징크옥사이드", keyIngredientZh: "氧化鋅", timing: "AM", order: 5 },
    ],
    pm: [
      { name: "마일드 밀크 클렌저", nameZh: "溫和乳狀潔面乳", type: "클렌징", typeZh: "潔面", description: "이중 세안 없이 한 번에 깨끗하게", descriptionZh: "無需二次潔面，一次即可徹底清潔", keyIngredient: "세라마이드", keyIngredientZh: "神經醯胺", timing: "PM", order: 1 },
      { name: "진정 토너", nameZh: "鎮靜化妝水", type: "토너", typeZh: "化妝水", description: "알로에 + 판테놀 진정 토너", descriptionZh: "蘆薈 + 泛醇鎮靜化妝水", keyIngredient: "알로에베라", keyIngredientZh: "蘆薈", timing: "PM", order: 2 },
      { name: "마데카소사이드 앰플", nameZh: "積雪草苷安瓶", type: "앰플", typeZh: "安瓶", description: "집중 진정 + 재생 앰플", descriptionZh: "集中鎮靜 + 再生安瓶", keyIngredient: "마데카소사이드", keyIngredientZh: "積雪草苷", timing: "PM", order: 3 },
      { name: "장벽 강화 크림", nameZh: "屏障強化乳霜", type: "크림", typeZh: "乳霜", description: "콜레스테롤 + 세라마이드 + 지방산 3:1:1 밸런스", descriptionZh: "膽固醇 + 神經醯胺 + 脂肪酸 3:1:1平衡", keyIngredient: "세라마이드 복합체", keyIngredientZh: "神經醯胺複合體", timing: "PM", order: 4 },
      { name: "슬리핑 마스크", nameZh: "睡眠面膜", type: "마스크", typeZh: "面膜", description: "주 2~3회 오버나이트 집중 보습", descriptionZh: "每週2~3次過夜集中保濕", keyIngredient: "시카 + 히알루론산", keyIngredientZh: "積雪草 + 玻尿酸", timing: "PM", order: 5 },
    ],
  },
];

export function getRoutineById(id: string): RoutineSet | undefined {
  return routines.find((r) => r.id === id);
}
