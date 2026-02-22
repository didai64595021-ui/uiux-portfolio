export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  color: string;
  image: string;
  specs: {
    engine: string;
    power: string;
    torque: string;
    fuelEconomy: string;
  };
  features: string[];
  badge?: "인기" | "신규" | "특가";
}

export const cars: Car[] = [
  {
    id: "grandeur-ig",
    brand: "현대",
    model: "그랜저 IG",
    year: 2022,
    price: 3200,
    mileage: 28000,
    fuel: "가솔린",
    transmission: "자동",
    color: "어비스 블랙",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    specs: {
      engine: "2.5L GDi",
      power: "198마력",
      torque: "25.3kg·m",
      fuelEconomy: "10.2km/L",
    },
    features: ["스마트 크루즈", "통풍시트", "HUD", "서라운드 뷰"],
    badge: "인기",
  },
  {
    id: "k5-dl3",
    brand: "기아",
    model: "K5 DL3",
    year: 2023,
    price: 2800,
    mileage: 15000,
    fuel: "가솔린",
    transmission: "자동",
    color: "스노우 화이트 펄",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
    specs: {
      engine: "2.0L GDi",
      power: "160마력",
      torque: "20.0kg·m",
      fuelEconomy: "12.4km/L",
    },
    features: ["네비게이션", "후방카메라", "열선시트", "무선충전"],
    badge: "신규",
  },
  {
    id: "bmw-520i",
    brand: "BMW",
    model: "520i",
    year: 2021,
    price: 3500,
    mileage: 42000,
    fuel: "가솔린",
    transmission: "자동",
    color: "알파인 화이트",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    specs: {
      engine: "2.0L 터보",
      power: "184마력",
      torque: "30.6kg·m",
      fuelEconomy: "11.8km/L",
    },
    features: ["M 스포츠 패키지", "하만카돈", "헤드업 디스플레이", "레이저 라이트"],
    badge: "특가",
  },
  {
    id: "benz-c200",
    brand: "벤츠",
    model: "C200",
    year: 2022,
    price: 4100,
    mileage: 21000,
    fuel: "가솔린",
    transmission: "자동",
    color: "옵시디언 블랙",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    specs: {
      engine: "1.5L 터보 + 48V",
      power: "204마력",
      torque: "30.6kg·m",
      fuelEconomy: "12.1km/L",
    },
    features: ["AMG 라인", "부르메스터", "파노라마 선루프", "디지털 라이트"],
    badge: "인기",
  },
  {
    id: "tesla-model3",
    brand: "테슬라",
    model: "모델3",
    year: 2023,
    price: 3900,
    mileage: 12000,
    fuel: "전기",
    transmission: "자동",
    color: "펄 화이트",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    specs: {
      engine: "듀얼 모터",
      power: "351마력",
      torque: "51.0kg·m",
      fuelEconomy: "5.6km/kWh",
    },
    features: ["오토파일럿", "15인치 터치스크린", "OTA 업데이트", "유리 루프"],
    badge: "신규",
  },
  {
    id: "genesis-g80",
    brand: "제네시스",
    model: "G80",
    year: 2022,
    price: 4500,
    mileage: 30000,
    fuel: "가솔린",
    transmission: "자동",
    color: "마틴 그레이",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    specs: {
      engine: "2.5L 터보",
      power: "304마력",
      torque: "43.0kg·m",
      fuelEconomy: "9.8km/L",
    },
    features: ["어드밴스드 에어백", "렉시콘 사운드", "전동 트렁크", "원격 주차"],
  },
  {
    id: "vw-golf",
    brand: "폭스바겐",
    model: "골프 8세대",
    year: 2021,
    price: 2200,
    mileage: 55000,
    fuel: "가솔린",
    transmission: "자동",
    color: "딥 블랙 펄",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    specs: {
      engine: "1.4L TSI",
      power: "150마력",
      torque: "25.5kg·m",
      fuelEconomy: "13.2km/L",
    },
    features: ["디지털 콕핏", "트래블 어시스트", "무선 앱커넥트", "LED 매트릭스"],
    badge: "특가",
  },
  {
    id: "ioniq5",
    brand: "현대",
    model: "아이오닉5",
    year: 2023,
    price: 4200,
    mileage: 8000,
    fuel: "전기",
    transmission: "자동",
    color: "디지털 틸 그린",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    specs: {
      engine: "듀얼 모터 AWD",
      power: "325마력",
      torque: "61.7kg·m",
      fuelEconomy: "5.1km/kWh",
    },
    features: ["V2L", "비전 루프", "증강현실 HUD", "릴렉션 시트"],
    badge: "신규",
  },
];

export const brands = Array.from(new Set(cars.map((c) => c.brand)));
export const fuelTypes = Array.from(new Set(cars.map((c) => c.fuel)));
