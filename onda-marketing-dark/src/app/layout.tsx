import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "온다마케팅 | 실행사 출신의 진짜 마케팅 - ONDA Marketing",
  description:
    "영업사원이 아닌 5년차 기술자가 직접 운영합니다. 파워링크 광고, 플레이스 최적화, 인스타그램 마케팅, 셀프 광고 툴. 불가능한 건 거절하고, 가능한 건 확실히 성과를 냅니다.",
  keywords:
    "마케팅대행사, 파워링크광고, 플레이스최적화, 인스타그램마케팅, 네이버광고, 온다마케팅",
  openGraph: {
    title: "온다마케팅 | 실행사 출신의 진짜 마케팅",
    description:
      "영업사원이 아닌 5년차 기술자가 직접 운영합니다. 500+ 클라이언트, 97% 재계약률.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-dark text-gray-200 font-sans antialiased overflow-x-hidden">
        <Header />
        <main className="min-h-[100svh]">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
