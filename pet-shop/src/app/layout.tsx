import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '시그니처펍스 Signature Pups | 프리미엄 강아지 분양',
  description: '시그니처펍스 위례점 - Premium Life with Signature. 꼬똥 드 뚤레아, 말티푸, 푸들, 포메라니안 등 프리미엄 강아지 분양 전문.',
  keywords: '강아지 분양, 프리미엄 분양, 시그니처펍스, 위례, 꼬똥 드 뚤레아, 말티푸, 푸들, 포메라니안',
  openGraph: {
    title: '시그니처펍스 Signature Pups | 프리미엄 강아지 분양',
    description: '시그니처펍스 위례점 - Premium Life with Signature',
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
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
