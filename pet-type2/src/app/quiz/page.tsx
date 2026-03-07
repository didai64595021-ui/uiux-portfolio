'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { quizQuestions, calculateQuizResults, type QuizResult } from '@/data/quiz';
import { breeds } from '@/data/breeds';

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<QuizResult[] | null>(null);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQ < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 400);
    } else {
      setTimeout(() => {
        const quizResults = calculateQuizResults(newAnswers);
        setResults(quizResults);
      }, 600);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers({});
    setResults(null);
  };

  const progress = ((currentQ + (answers[quizQuestions[currentQ]?.id] ? 1 : 0)) / quizQuestions.length) * 100;

  return (
    <main className="min-h-[100svh] bg-sage-50">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 bg-sage relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,214,143,0.1),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-mint/15 text-mint text-sm font-medium mb-4">
              Puppy Match Quiz
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 korean-text">
              나에게 딱 맞는 강아지 찾기
            </h1>
            <p className="text-white/50 text-base sm:text-lg korean-text">
              5가지 질문으로 최적의 품종을 추천해드립니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            {!results && (
              <motion.div
                key={`q-${currentQ}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl shadow-xl shadow-sage/5 p-6 sm:p-10"
              >
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-sage/50">
                      질문 {currentQ + 1} / {quizQuestions.length}
                    </span>
                    <span className="text-sm text-mint font-medium">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="progress-track h-2">
                    <div className="progress-fill h-full" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <span className="text-5xl mb-4 block">{quizQuestions[currentQ].emoji}</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-sage korean-text">
                    {quizQuestions[currentQ].question}
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {quizQuestions[currentQ].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(quizQuestions[currentQ].id, option.value)}
                      className={`quiz-option p-5 rounded-2xl text-left flex items-center gap-4 ${
                        answers[quizQuestions[currentQ].id] === option.value ? 'selected' : ''
                      }`}
                    >
                      <span className="text-2xl flex-shrink-0">{option.icon}</span>
                      <span className="text-sage font-medium korean-text">{option.text}</span>
                    </button>
                  ))}
                </div>

                {currentQ > 0 && (
                  <button
                    onClick={() => setCurrentQ(currentQ - 1)}
                    className="mt-6 text-sage/40 hover:text-sage/60 text-sm transition-colors"
                  >
                    ← 이전 질문
                  </button>
                )}
              </motion.div>
            )}

            {results && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-sage korean-text mb-2">
                    매칭 결과가 나왔어요!
                  </h2>
                  <p className="text-sage/50 text-sm">당신에게 가장 잘 맞는 품종 TOP 3</p>
                </div>

                <div className="space-y-4">
                  {results.map((result, i) => {
                    const breed = breeds.find((b) => b.id === result.breedId);
                    if (!breed) return null;
                    return (
                      <motion.div
                        key={result.breedId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                          i === 0 ? 'ring-2 ring-mint' : ''
                        }`}
                      >
                        {i === 0 && (
                          <div className="bg-gradient-to-r from-mint to-emerald-500 text-white text-center py-2 text-xs font-bold tracking-wider">
                            BEST MATCH
                          </div>
                        )}
                        <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                          <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                            <Image src={breed.image} alt={breed.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                              <h3 className="text-lg font-bold text-sage">{breed.name}</h3>
                              <span className="text-2xl font-bold gradient-text">{result.matchScore}%</span>
                            </div>
                            <p className="text-sage/60 text-sm korean-text mb-3">{result.reason}</p>
                            <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                              {breed.characteristics.slice(0, 3).map((c) => (
                                <span key={c} className="px-2.5 py-1 bg-sage-50 text-sage/60 text-xs rounded-full">
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={reset}
                    className="flex-1 px-6 py-4 bg-white text-sage border border-sage/10 rounded-2xl font-semibold hover:bg-sage/5 transition-colors"
                  >
                    다시 해보기
                  </button>
                  <Link
                    href="/puppies"
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-mint to-emerald-500 text-white rounded-2xl font-semibold text-center hover:shadow-lg hover:shadow-mint/30 transition-all active:scale-[0.98]"
                  >
                    분양 중인 아이들 보기
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
