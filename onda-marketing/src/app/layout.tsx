import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "온다마케팅 | ONDA Marketing - 실행사 출신의 진짜 마케팅",
  description:
    "5년차 실행사 출신 기술자가 직접 운영하는 디지털 마케팅 에이전시. 파워링크 광고, 플레이스 최적화, 인스타그램 마케팅, 셀프 광고 툴까지. 500+ 클라이언트와 함께한 성과 중심 마케팅.",
  keywords: "디지털마케팅, 온다마케팅, 네이버광고, 파워링크, 플레이스최적화, 인스타마케팅, 마케팅대행",
  openGraph: {
    title: "온다마케팅 | ONDA Marketing",
    description: "실행사 출신의 진짜 마케팅. 영업사원이 아닌 기술자가 직접.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body className="font-pretendard antialiased text-gray-900 bg-white overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
