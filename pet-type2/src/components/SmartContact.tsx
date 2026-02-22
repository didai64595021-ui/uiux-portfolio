'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    options: ['분양 상담', '매장 방문 예약', '견종 추천', '가격 문의', '기타 문의'],
  },
];

const responses: Record<string, { text: string; options?: string[] }> = {
  '분양 상담': {
    text: '분양 상담을 원하시는군요! 관심있는 품종이 있으신가요?',
    options: ['말티푸', '포메라니안', '푸들', '비숑', '아직 고민중이에요'],
  },
  '매장 방문 예약': {
    text: '매장 방문을 환영합니다! 😊\n\n📍 위례중앙타워 1층\n🕐 매일 10:00 - 22:00\n\n원하시는 방문 시간대를 알려주세요.',
    options: ['오전 (10-13시)', '오후 (13-18시)', '저녁 (18-22시)'],
  },
  '견종 추천': {
    text: '퍼피 매칭 퀴즈를 통해 나에게 딱 맞는 품종을 찾아보시는 건 어떨까요? 5가지 질문으로 최적의 품종을 추천해드려요!',
    options: ['퀴즈 해볼래요', '직접 상담 원해요'],
  },
  '가격 문의': {
    text: '품종과 조건에 따라 분양가가 달라질 수 있어요. 정확한 안내를 위해 전화 상담을 추천드립니다.\n\n📞 010-2395-7347',
    options: ['전화 연결', '다른 문의'],
  },
  '기타 문의': {
    text: '어떤 내용이 궁금하신가요? 아래에 직접 메시지를 남겨주시면 빠르게 답변드리겠습니다!',
  },
};

const defaultResponse = {
  text: '감사합니다! 상담사가 확인 후 빠르게 연락드리겠습니다.\n\n📞 긴급 문의: 010-2395-7347\n📍 방문: 위례중앙타워 1층',
  options: ['처음으로'],
};

export default function SmartContact() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const addMessage = (text: string, sender: 'bot' | 'user', options?: string[]) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), text, sender, options },
    ]);
  };

  const handleOption = (option: string) => {
    addMessage(option, 'user');

    if (option === '처음으로') {
      setTimeout(() => {
        setMessages(initialMessages);
      }, 300);
      return;
    }

    if (option === '퀴즈 해볼래요') {
      setTimeout(() => {
        addMessage('퍼피 매칭 퀴즈 페이지로 이동합니다! 🎯', 'bot');
        window.location.href = '/quiz';
      }, 500);
      return;
    }

    if (option === '전화 연결') {
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
        '메시지가 접수되었습니다! 상담사가 확인 후 빠르게 연락드리겠습니다. 감사합니다! 🙏',
        'bot',
        ['처음으로']
      );
    }, 800);
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-sage-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
            Smart Contact
          </span>
          <h2 className="korean-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
            스마트 상담
          </h2>
          <p className="korean-text text-sage/60 text-base sm:text-lg">
            빠르고 편리한 채팅 상담을 시작하세요
          </p>
        </motion.div>

        {/* Chat window */}
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
          <div className="h-[420px] overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-hide">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] ${msg.sender === 'user' ? '' : ''}`}>
                    <div
                      className={`px-4 py-3 text-sm leading-relaxed whitespace-pre-line korean-text ${
                        msg.sender === 'user'
                          ? 'chat-bubble-right bg-mint text-white'
                          : 'chat-bubble bg-sage/5 text-sage'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Quick reply buttons */}
                    {msg.options && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {msg.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleOption(option)}
                            className="px-3 py-1.5 bg-white border border-mint/30 text-mint text-xs sm:text-sm rounded-full font-medium hover:bg-mint/5 transition-colors"
                          >
                            {option}
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

        {/* Direct contact info */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <a
            href="tel:01023957347"
            className="flex items-center gap-3 p-4 bg-white rounded-2xl ring-1 ring-sage/8 hover:ring-mint/30 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center text-mint text-lg group-hover:bg-mint group-hover:text-white transition-all">
              📞
            </div>
            <div>
              <div className="text-xs text-sage/50">전화 상담</div>
              <div className="text-sm font-semibold text-sage">010-2395-7347</div>
            </div>
          </a>
          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl ring-1 ring-sage/8">
            <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center text-mint text-lg">
              🕐
            </div>
            <div>
              <div className="text-xs text-sage/50">영업시간</div>
              <div className="text-sm font-semibold text-sage">매일 10-22시</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl ring-1 ring-sage/8">
            <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center text-mint text-lg">
              📍
            </div>
            <div>
              <div className="text-xs text-sage/50">위치</div>
              <div className="text-sm font-semibold text-sage">위례중앙타워 1층</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
