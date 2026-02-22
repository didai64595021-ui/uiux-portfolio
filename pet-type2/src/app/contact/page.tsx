'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  options?: string[];
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: '안녕하세요! 시그니처펍스입니다 🐾\n무엇을 도와드릴까요?',
    sender: 'bot',
    options: ['분양 상담', '매장 방문 예약', '견종 추천', '가격 문의', '해외 분양', '기타 문의'],
  },
];

const responses: Record<string, { text: string; options?: string[] }> = {
  '분양 상담': {
    text: '분양 상담을 원하시는군요! 관심있는 품종이 있으신가요?',
    options: ['말티푸', '포메라니안', '푸들', '비숑', '코튼 드 튈레아', '폼스키', '요크셔', '아직 고민중이에요'],
  },
  '매장 방문 예약': {
    text: '매장 방문을 환영합니다! 😊\n\n📍 경기도 성남시 수정구 위례광장로 300\n   위례중앙타워 1층\n🕐 매일 10:00 - 22:00\n\n원하시는 방문 시간대를 알려주세요.',
    options: ['오전 (10-13시)', '오후 (13-18시)', '저녁 (18-22시)'],
  },
  '견종 추천': {
    text: '퍼피 매칭 퀴즈를 통해 나에게 딱 맞는 품종을 찾아보시는 건 어떨까요? 5가지 질문으로 최적의 품종을 추천해드려요!',
    options: ['퀴즈 해볼래요', '직접 상담 원해요'],
  },
  '가격 문의': {
    text: '품종과 조건에 따라 분양가가 달라질 수 있어요.\n\n정확한 안내를 위해 전화 상담을 추천드립니다.\n📞 010-2395-7347\n\n또는 아래에 연락처를 남겨주시면 상담사가 연락드립니다.',
    options: ['전화 연결', '연락처 남기기', '다른 문의'],
  },
  '해외 분양': {
    text: '해외 분양 서비스도 운영하고 있습니다!\n\n✈️ 검역 서류 준비\n📋 항공 운송 대행\n🏥 출국 전 건강검진\n\n자세한 내용은 전문 상담이 필요합니다.',
    options: ['전화 상담', '이메일 문의'],
  },
  '기타 문의': {
    text: '어떤 내용이 궁금하신가요?\n아래에 직접 메시지를 남겨주시면 빠르게 답변드리겠습니다!',
  },
};

const defaultResponse = {
  text: '감사합니다! 상담사가 확인 후 빠르게 연락드리겠습니다.\n\n📞 긴급 문의: 010-2395-7347\n📍 방문: 위례중앙타워 1층\n🕐 영업시간: 매일 10:00 - 22:00',
  options: ['처음으로'],
};

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const addMessage = (text: string, sender: 'bot' | 'user', options?: string[]) => {
    setMessages((prev) => [...prev, { id: Date.now() + Math.random(), text, sender, options }]);
  };

  const handleOption = (option: string) => {
    addMessage(option, 'user');

    if (option === '처음으로') {
      setTimeout(() => setMessages(initialMessages), 300);
      return;
    }
    if (option === '퀴즈 해볼래요') {
      setTimeout(() => {
        addMessage('퍼피 매칭 퀴즈 페이지로 이동합니다!', 'bot');
        window.location.href = '/quiz';
      }, 500);
      return;
    }
    if (option === '전화 연결' || option === '전화 상담') {
      window.location.href = 'tel:01023957347';
      return;
    }

    setTimeout(() => {
      const resp = responses[option] || defaultResponse;
      addMessage(resp.text, 'bot', resp.options || defaultResponse.options);
    }, 600);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    addMessage(inputValue, 'user');
    setInputValue('');
    setTimeout(() => {
      addMessage(
        '메시지가 접수되었습니다! 상담사가 확인 후 빠르게 연락드리겠습니다. 감사합니다!',
        'bot',
        ['처음으로'],
      );
    }, 800);
  };

  return (
    <main className="min-h-screen bg-sage-50">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 bg-sage relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,214,143,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-mint/15 text-mint text-sm font-medium mb-4">
              Smart Contact
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 korean-text">
              상담하기
            </h1>
            <p className="text-white/50 text-base sm:text-lg korean-text">
              편하게 질문하세요, 빠르게 답변드리겠습니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chat + Info */}
      <section className="py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chat */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl shadow-sage/5 overflow-hidden">
                {/* Chat header */}
                <div className="bg-sage p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mint to-emerald-500 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                      <path d="M4.5 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm15 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM12 21c-4.5 0-8-3-8-7.5 0-3 2-5.5 4-6.5.5-.25 1 .1 1 .65v1.5c0 .35.15.65.4.85L12 12l2.6-2.5c.25-.2.4-.5.4-.85v-1.5c0-.55.5-.9 1-.65 2 1 4 3.5 4 6.5 0 4.5-3.5 7.5-8 7.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">시그니처펍스 상담</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                      <span className="text-white/50 text-xs">온라인</span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="h-[500px] overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-hide">
                  <AnimatePresence>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className="max-w-[85%]">
                          <div className={`px-4 py-3 text-sm leading-relaxed whitespace-pre-line korean-text ${
                            msg.sender === 'user'
                              ? 'chat-bubble-right bg-mint text-white'
                              : 'chat-bubble bg-sage/5 text-sage'
                          }`}>
                            {msg.text}
                          </div>
                          {msg.options && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {msg.options.map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleOption(opt)}
                                  className="px-3 py-1.5 bg-white border border-mint/30 text-mint text-xs sm:text-sm rounded-full font-medium hover:bg-mint/5 transition-colors"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Input */}
                <div className="border-t border-sage/10 p-3 sm:p-4 flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 px-4 py-3 bg-sage/5 rounded-xl text-sm text-sage placeholder:text-sage/30 focus:outline-none focus:ring-2 focus:ring-mint/30"
                  />
                  <button
                    onClick={handleSend}
                    className="w-11 h-11 flex-shrink-0 bg-mint rounded-xl flex items-center justify-center hover:bg-emerald-500 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 ring-1 ring-sage/8">
                <h3 className="font-bold text-sage mb-4">매장 정보</h3>
                <div className="space-y-4">
                  <a href="tel:01023957347" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center text-lg group-hover:bg-mint group-hover:text-white transition-all">📞</div>
                    <div>
                      <div className="text-xs text-sage/50">전화</div>
                      <div className="text-sm font-semibold text-sage">010-2395-7347</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center text-lg">🕐</div>
                    <div>
                      <div className="text-xs text-sage/50">영업시간</div>
                      <div className="text-sm font-semibold text-sage">매일 10:00 - 22:00</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center text-lg flex-shrink-0">📍</div>
                    <div>
                      <div className="text-xs text-sage/50">주소</div>
                      <div className="text-sm font-semibold text-sage korean-text">
                        경기도 성남시 수정구 위례광장로 300, 위례중앙타워 1층
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden ring-1 ring-sage/8">
                <div className="aspect-[4/3] bg-sage-50 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5!2d127.1!3d37.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7JyE66GA!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '200px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="시그니처펍스 위치"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-sage/50 korean-text">
                    위례역 3번 출구에서 도보 5분 / 주차 가능
                  </p>
                </div>
              </div>

              {/* Quick actions */}
              <a
                href="tel:01023957347"
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-mint to-emerald-500 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-mint/30 transition-all"
              >
                전화 상담 바로 연결
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
