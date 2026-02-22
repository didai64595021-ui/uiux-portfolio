'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { quizQuestions, calculateQuizResults, type QuizResult } from '@/data/quiz';
import { breeds } from '@/data/breeds';
import Image from 'next/image';

export default function PuppyMatchQuiz() {
  const [started, setStarted] = useState(false);
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
    setStarted(false);
    setCurrentQ(0);
    setAnswers({});
    setResults(null);
  };

  const progress = ((currentQ + (answers[quizQuestions[currentQ]?.id] ? 1 : 0)) / quizQuestions.length) * 100;

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-sage-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-mint/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-500/8 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
            AI Puppy Match
          </span>
          <h2 className="korean-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
            나에게 딱 맞는 강아지는?
          </h2>
          <p className="korean-text text-sage/60 text-base sm:text-lg max-w-2xl mx-auto">
            5가지 질문으로 당신의 라이프스타일에 완벽한 품종을 찾아드립니다
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!started && !results && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="bg-white rounded-3xl shadow-xl shadow-sage/5 p-8 sm:p-12 max-w-xl mx-auto">
                <div className="text-6xl mb-6">🐾</div>
                <h3 className="text-xl sm:text-2xl font-bold text-sage mb-3 korean-text">
                  퍼피 매칭 퀴즈
                </h3>
                <p className="text-sage/60 mb-8 korean-text">
                  약 1분 소요 / 5가지 질문
                </p>
                <button
                  onClick={() => setStarted(true)}
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-mint to-emerald-500 text-white rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-mint/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  시작하기
                </button>
              </div>
            </motion.div>
          )}

          {started && !results && (
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
                    {currentQ + 1} / {quizQuestions.length}
                  </span>
                  <span className="text-sm text-mint font-medium">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="progress-track h-2">
                  <div className="progress-fill h-full" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <span className="text-4xl mb-4 block">{quizQuestions[currentQ].emoji}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-sage korean-text">
                  {quizQuestions[currentQ].question}
                </h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {quizQuestions[currentQ].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(quizQuestions[currentQ].id, option.value)}
                    className={`quiz-option p-4 sm:p-5 rounded-2xl text-left flex items-center gap-4 ${
                      answers[quizQuestions[currentQ].id] === option.value ? 'selected' : ''
                    }`}
                  >
                    <span className="text-2xl flex-shrink-0">{option.icon}</span>
                    <span className="text-sage font-medium korean-text">{option.text}</span>
                  </button>
                ))}
              </div>

              {/* Back button */}
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
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-sage korean-text">
                  매칭 결과
                </h3>
              </div>

              {results.map((result, i) => {
                const breed = breeds.find((b) => b.id === result.breedId);
                if (!breed) return null;
                return (
                  <motion.div
                    key={result.breedId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className={`bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 ${
                      i === 0 ? 'ring-2 ring-mint shadow-mint/10' : ''
                    }`}
                  >
                    {i === 0 && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 px-3 py-1 bg-mint text-white text-xs font-bold rounded-full">
                        BEST MATCH
                      </div>
                    )}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image src={breed.image} alt={breed.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                        <h4 className="text-lg font-bold text-sage">{breed.name}</h4>
                        <span className="text-mint font-bold text-lg">{result.matchScore}%</span>
                      </div>
                      <p className="text-sage/60 text-sm korean-text">{result.reason}</p>
                    </div>
                    <Link
                      href={`/breeds?id=${breed.id}`}
                      className="px-5 py-2.5 bg-sage-50 text-sage rounded-xl text-sm font-medium hover:bg-mint/10 hover:text-mint transition-colors flex-shrink-0"
                    >
                      자세히 보기
                    </Link>
                  </motion.div>
                );
              })}

              <div className="text-center pt-4">
                <button
                  onClick={reset}
                  className="text-sage/40 hover:text-sage/60 text-sm transition-colors"
                >
                  다시 해보기 →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
