export interface Doctor {
  id: string;
  name: string;
  nameZh: string;
  title: string;
  titleZh: string;
  specialty: string;
  specialtyZh: string;
  philosophy: string;
  philosophyZh: string;
  bio: string;
  bioZh: string;
  education: string[];
  educationZh: string[];
  certifications: string[];
  certificationsZh: string[];
  image: string;
  specialties: string[];
  specialtiesZh: string[];
}

export const doctors: Doctor[] = [
  {
    id: "dr-kim",
    name: "김서연",
    nameZh: "金瑞妍",
    title: "대표원장",
    titleZh: "代表院長",
    specialty: "레이저 색소치료 / 피부재생",
    specialtyZh: "雷射色素治療 / 皮膚再生",
    philosophy:
      "피부는 과학이자 예술입니다. 정확한 진단에 기반한 맞춤 치료로, 환자 고유의 아름다움을 끌어냅니다.",
    philosophyZh:
      "皮膚既是科學也是藝術。透過基於精確診斷的客製化治療，引出每位患者獨有的美麗。",
    bio: "서울대학교 의과대학을 졸업하고 삼성서울병원 피부과 전문의 과정을 수료한 후, 10년 이상의 레이저 색소치료 경험을 쌓았습니다. 특히 난치성 기미 치료와 복합 색소 치료에서 독보적인 노하우를 보유하고 있으며, 매년 국제 피부과 학회에서 연구 성과를 발표하고 있습니다.",
    bioZh: "畢業於首爾大學醫學院，完成三星首爾醫院皮膚科專科醫師訓練後，累積超過10年的雷射色素治療經驗。尤其在難治性肝斑治療與複合色素治療方面擁有獨到的技術，每年在國際皮膚科學會發表研究成果。",
    education: [
      "서울대학교 의과대학 졸업",
      "삼성서울병원 피부과 전임의 수료",
      "대한피부과학회 정회원",
      "미국피부과학회(AAD) 정회원",
    ],
    educationZh: [
      "首爾大學醫學院畢業",
      "三星首爾醫院皮膚科住院醫師結業",
      "大韓皮膚科學會正式會員",
      "美國皮膚科學會（AAD）正式會員",
    ],
    certifications: [
      "피부과 전문의",
      "레이저학회 인증의",
      "대한미용피부과학회 정회원",
      "국제피부외과학회 펠로우",
    ],
    certificationsZh: [
      "皮膚科專科醫師",
      "雷射學會認證醫師",
      "大韓美容皮膚科學會正式會員",
      "國際皮膚外科學會會士",
    ],
    image: "/images/doctors/dr-kim.jpg",
    specialties: ["레이저토닝", "피코레이저", "피부재생"],
    specialtiesZh: ["雷射淨膚", "皮秒雷射", "皮膚再生"],
  },
  {
    id: "dr-park",
    name: "박지훈",
    nameZh: "朴志勳",
    title: "부원장",
    titleZh: "副院長",
    specialty: "보톡스 / 필러 / 리프팅",
    specialtyZh: "肉毒桿菌 / 玻尿酸填充 / 拉提",
    philosophy:
      "자연스러움이 곧 아름다움입니다. 과하지 않은 정밀한 시술로 본래의 아름다움을 한 단계 높여드립니다.",
    philosophyZh:
      "自然就是美。透過恰到好處的精密療程，將您與生俱來的美提升一個層次。",
    bio: "연세대학교 의과대학 졸업 후 세브란스병원 피부과에서 수련을 마쳤습니다. 해부학적 지식을 바탕으로 한 정밀 주입 기술이 강점이며, 특히 자연스러운 안티에이징 시술로 높은 재방문율을 자랑합니다. 필러/보톡스 시술 누적 10,000건 이상의 풍부한 경험을 보유합니다.",
    bioZh: "延世大學醫學院畢業後於世福蘭斯醫院皮膚科完成訓練。以解剖學知識為基礎的精密注射技術為其優勢，尤其以自然的抗衰老療程著稱，回診率極高。累積超過10,000例玻尿酸/肉毒桿菌治療的豐富經驗。",
    education: [
      "연세대학교 의과대학 졸업",
      "세브란스병원 피부과 전임의 수료",
      "대한피부과학회 정회원",
      "미국레이저학회(ASLMS) 정회원",
    ],
    educationZh: [
      "延世大學醫學院畢業",
      "世福蘭斯醫院皮膚科住院醫師結業",
      "大韓皮膚科學會正式會員",
      "美國雷射學會（ASLMS）正式會員",
    ],
    certifications: [
      "피부과 전문의",
      "대한미용피부과학회 인증의",
      "필러/보톡스 어드밴스 과정 수료",
      "실 리프팅 마스터 과정 수료",
    ],
    certificationsZh: [
      "皮膚科專科醫師",
      "大韓美容皮膚科學會認證醫師",
      "玻尿酸/肉毒桿菌進階課程結業",
      "埋線拉提大師課程結業",
    ],
    image: "/images/doctors/dr-park.jpg",
    specialties: ["보톡스", "필러", "리프팅"],
    specialtiesZh: ["肉毒桿菌", "玻尿酸填充", "拉提"],
  },
  {
    id: "dr-lee",
    name: "이하은",
    nameZh: "李荷恩",
    title: "진료원장",
    titleZh: "診療院長",
    specialty: "여드름 / 모공 / 피부질환",
    specialtyZh: "痘痘 / 毛孔 / 皮膚疾病",
    philosophy:
      "피부 문제의 근본 원인을 찾아 치료합니다. 일시적 개선이 아닌, 건강한 피부로의 본질적 변화를 추구합니다.",
    philosophyZh:
      "找出皮膚問題的根本原因進行治療。追求的不是暫時性改善，而是邁向健康肌膚的本質性改變。",
    bio: "고려대학교 의과대학을 졸업하고 고대안암병원에서 피부과 수련 과정을 마쳤습니다. 여드름, 모공, 흉터 치료의 전문가로서 체계적인 복합 치료 프로토콜을 개발하여 적용하고 있습니다. 난치성 피부 질환에 대한 깊은 이해를 바탕으로, 환자 맞춤 치료를 설계합니다.",
    bioZh: "畢業於高麗大學醫學院，並在高大安岩醫院完成皮膚科訓練。身為痘痘、毛孔、疤痕治療的專家，開發並應用系統化的複合治療方案。以對難治性皮膚疾病的深入理解為基礎，設計患者客製化治療。",
    education: [
      "고려대학교 의과대학 졸업",
      "고대안암병원 피부과 전임의 수료",
      "대한피부과학회 정회원",
      "대한피부외과학회 정회원",
    ],
    educationZh: [
      "高麗大學醫學院畢業",
      "高大安岩醫院皮膚科住院醫師結業",
      "大韓皮膚科學會正式會員",
      "大韓皮膚外科學會正式會員",
    ],
    certifications: [
      "피부과 전문의",
      "여드름학회 인증 전문의",
      "프락셔널 레이저 전문 과정 수료",
      "피부장벽 복구 연구회 정회원",
    ],
    certificationsZh: [
      "皮膚科專科醫師",
      "痘痘學會認證專科醫師",
      "飛梭雷射專業課程結業",
      "皮膚屏障修復研究會正式會員",
    ],
    image: "/images/doctors/dr-lee.jpg",
    specialties: ["여드름치료", "모공치료", "피부재생"],
    specialtiesZh: ["痘痘治療", "毛孔治療", "皮膚再生"],
  },
];

export function getDoctorById(id: string): Doctor | undefined {
  return doctors.find((d) => d.id === id);
}
