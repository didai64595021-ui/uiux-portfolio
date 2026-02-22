import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '시그니처펍스 | Premium Life with Signature',
  description: '프리미엄 강아지 분양 전문 - 시그니처펍스 위례점. 코튼 드 튈레아, 말티푸, 푸들, 말티즈, 포메라니안 등 프리미엄 품종을 만나보세요.',
  keywords: '강아지 분양, 프리미엄 펫샵, 시그니처펍스, 위례 강아지, 말티푸, 포메라니안, 비숑',
  openGraph: {
    title: '시그니처펍스 | Premium Life with Signature',
    description: '프리미엄 강아지 분양 전문 - 시그니처펍스 위례점',
    type: 'website',
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
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
