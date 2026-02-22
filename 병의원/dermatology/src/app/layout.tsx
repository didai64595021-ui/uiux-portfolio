import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/PretendardVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ONDA 피부과의원 | 아름다운 피부, 온다에서 시작됩니다",
  description:
    "피부과 전문의가 직접 진료하는 프리미엄 피부과. 레이저, 보톡스, 리프팅, 피부질환 치료까지 원스톱 피부 솔루션을 제공합니다.",
  keywords: "피부과, 레이저, 보톡스, 필러, 리프팅, 여드름, 아토피, 탈모치료",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
