import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "ONDA 피부과의원 | 프리미엄 스킨 클리닉",
  description:
    "AI 피부 진단부터 맞춤 시술까지. ONDA 피부과의원은 과학적 진단과 프리미엄 시술로 당신만의 아름다움을 완성합니다.",
  keywords:
    "피부과, 레이저토닝, 피코레이저, 보톡스, 필러, 리프팅, 여드름치료, 모공치료, 피부재생",
  openGraph: {
    title: "ONDA 피부과의원 | 프리미엄 스킨 클리닉",
    description:
      "AI 피부 진단부터 맞춤 시술까지. 과학적 진단과 프리미엄 시술로 당신만의 아름다움을 완성합니다.",
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
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
