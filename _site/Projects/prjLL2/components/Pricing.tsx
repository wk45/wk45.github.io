import React, { useState } from 'react';
import { Check, X, Sparkles, Zap } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      desc: '가볍게 체험해보는 단계',
      price: 0,
      priceAnnual: 0,
      features: [
        '기본 타이머 제공',
        '과목 1개 등록 가능',
        '지난 3일간의 리포트 조회',
        '기본 통계 제공'
      ],
      notIncluded: [
        'AI 약점 분석',
        '스마트 복습 알림',
        '클라우드 동기화',
        '1:1 AI 튜터'
      ],
      cta: '무료로 시작하기',
      highlight: false
    },
    {
      name: 'Pass Mate',
      desc: '합격을 위한 필수 코스',
      price: 9900,
      priceAnnual: 7900,
      features: [
        '무제한 과목 등록',
        'AI 약점 정밀 분석 무제한',
        '스마트 복습 주기 알림',
        '클라우드 동기화 (2기기)',
        '상세 학습 통계 리포트',
        '실시간 랭킹 참여'
      ],
      notIncluded: [
        '1:1 AI 튜터 챗봇',
        '오답 노트 PDF 내보내기'
      ],
      cta: '합격 패스 시작하기',
      highlight: true,
      badge: 'Best Value'
    },
    {
      name: 'AI Master',
      desc: '1:1 과외를 대체하는 풀 패키지',
      price: 19900,
      priceAnnual: 15900,
      features: [
        'Pass Mate의 모든 기능',
        '1:1 AI 튜터 챗봇 무제한',
        '오답 노트 자동 생성 & PDF',
        '무제한 기기 연동',
        '우선 고객 지원',
        '신규 기능 얼리 액세스'
      ],
      notIncluded: [],
      cta: 'AI 마스터 되기',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            합리적인 가격으로 <br/>
            <span className="text-brand-purple">합격을 앞당기세요</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            커피 두 잔 값이면 충분합니다. <br/>
            가장 효율적인 학습 도구로 경쟁자보다 앞서 나가세요.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-sm font-bold ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-gray-400'}`}>월간 결제</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 bg-gray-200 dark:bg-zinc-800 rounded-full p-1 relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-purple"
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8 bg-brand-purple' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-sm font-bold ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-gray-400'}`}>
            연간 결제 <span className="text-brand-purple text-xs ml-1">(최대 20% 할인)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-zinc-900 rounded-3xl p-8 border transition-all duration-300 flex flex-col h-full
                ${plan.highlight 
                  ? 'border-brand-purple shadow-xl shadow-purple-500/10 scale-105 z-10' 
                  : 'border-gray-200 dark:border-zinc-800 hover:border-brand-purple/50'
                }
              `}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 h-10">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                    {isAnnual ? plan.priceAnnual.toLocaleString() : plan.price.toLocaleString()}
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">원</span>
                  <span className="text-gray-400 mb-1">/월</span>
                </div>
                {isAnnual && plan.price > 0 && (
                  <div className="text-xs text-gray-400 line-through mt-1">
                    월 {plan.price.toLocaleString()}원
                  </div>
                )}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-all duration-300 flex items-center justify-center gap-2
                ${plan.highlight 
                  ? 'bg-brand-purple hover:bg-purple-600 text-white shadow-lg shadow-purple-500/30 hover:scale-105' 
                  : 'bg-gray-100 dark:bg-zinc-800 text-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-700'
                }
              `}>
                {plan.highlight && <Zap size={18} fill="currentColor" />}
                {plan.cta}
              </button>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-gray-300">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-purple-100 dark:bg-purple-900/30 text-brand-purple' : 'bg-gray-100 dark:bg-zinc-800 text-gray-500'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-400 dark:text-gray-600">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-transparent flex items-center justify-center flex-shrink-0">
                      <X size={14} />
                    </div>
                    <span className="line-through decoration-gray-300 dark:decoration-zinc-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};