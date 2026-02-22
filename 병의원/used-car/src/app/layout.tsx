import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "ONDA MOTORS | 온다 모터스 - 인증 중고차 전문",
  description:
    "믿을 수 있는 인증 중고차 전문. AI 시세 분석, 150항목 정밀 점검, 3년 품질 보증. 합리적 가격의 중고차를 만나보세요.",
  keywords: "중고차, 인증중고차, 온다모터스, AI시세, 할부계산기",
  openGraph: {
    title: "ONDA MOTORS | 온다 모터스",
    description: "믿을 수 있는 인증 중고차 전문. AI 시세 분석으로 합리적인 가격에.",
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
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
