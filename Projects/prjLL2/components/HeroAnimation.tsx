import React from 'react';
import { ArrowRight, CheckCircle2, Monitor, Smartphone, Tablet, ChevronRight, Play, Pause, Square } from 'lucide-react';

interface HeroProps {
    onStart: () => void;
}

export const HeroAnimation: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-[1600px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
              </span>
              <span className="text-sm font-semibold text-brand-purple dark:text-purple-300 tracking-wide">AI 기반 수험 최적화 솔루션</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.1] animate-fade-in-up delay-100 break-keep">
              합격의 기준을 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">새롭게 정의하다</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-xl mb-12 animate-fade-in-up delay-200 leading-relaxed break-keep">
              단절된 학습 경험을 하나로 잇습니다. <br className="hidden lg:block"/>
              PC, 태블릿, 모바일 어디서나 끊김 없는 학습 환경을 경험하세요.
            </p>

            {/* Buttons (Microcopy removed) */}
            <div className="flex flex-col items-start gap-4 animate-fade-in-up delay-300">
              <button 
                onClick={onStart}
                className="px-10 py-5 rounded-full bg-gradient-to-r from-brand-purple to-purple-600 hover:from-purple-600 hover:to-brand-purple text-white font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-purple-600/40 flex items-center gap-3 justify-center"
              >
                시작하기 <ArrowRight size={24} />
              </button>
            </div>

            {/* User Stats */}
            <div className="mt-12 flex items-center gap-4 animate-fade-in-up delay-500">
                <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-zinc-950 bg-gray-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <div>
                    <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400 text-sm">★★★★★</div>
                        <span className="font-bold text-slate-900 dark:text-white ml-1">4.9/5</span>
                    </div>
                    <p className="text-sm text-gray-500">23만 명의 수험생이 선택했습니다</p>
                </div>
            </div>
        </div>

        {/* Right Column: Visual (Platform Theme) */}
        <div className="relative h-[600px] lg:h-[800px] w-full flex items-center justify-center animate-fade-in-up delay-300 perspective-2000">
            
            {/* Background Blob/Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-blue-50/50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-[3rem] blur-3xl -z-10"></div>
            
            {/* Laptop (Center) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-[90vw] z-20">
                 <div className="bg-slate-900 rounded-[1.5rem] p-3 shadow-2xl border border-slate-700 ring-1 ring-white/10">
                     {/* Screen */}
                     <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden aspect-[16/10] relative flex flex-col">
                        {/* App Header */}
                        <div className="h-10 bg-gray-50 dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between px-4">
                             <div className="flex gap-2">
                                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
                             </div>
                             <div className="h-4 w-64 bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
                        </div>
                        {/* App Body - Focused on List/Content, minimal charts */}
                        <div className="flex-1 flex">
                            {/* Sidebar */}
                            <div className="w-64 bg-gray-50 dark:bg-zinc-900 border-r border-gray-100 dark:border-zinc-800 p-4 hidden md:block">
                                <div className="space-y-4">
                                    <div className="h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg w-full mb-6"></div>
                                    {[1,2,3,4,5].map(i => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded bg-gray-200 dark:bg-zinc-800"></div>
                                            <div className="h-2 bg-gray-200 dark:bg-zinc-800 rounded w-2/3"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Main Content: Course List / Dashboard */}
                            <div className="flex-1 p-6 lg:p-10 bg-white dark:bg-zinc-950">
                                <div className="flex justify-between items-end mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">오늘의 학습 스케줄</h3>
                                        <p className="text-gray-400">10월 24일, 목요일</p>
                                    </div>
                                    <button className="px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-bold">학습 시작</button>
                                </div>
                                
                                {/* Content List Items */}
                                <div className="space-y-4">
                                    {[
                                        { title: "민법총칙 핵심요약", prog: 75, time: "45m" },
                                        { title: "형법 판례 기출문제", prog: 30, time: "20m" },
                                        { title: "헌법 조문 암기 테스트", prog: 0, time: "15m" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 border border-gray-100 dark:border-zinc-800 rounded-xl flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                                                    <Monitor size={20} className="text-gray-400"/>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 dark:text-white">{item.title}</div>
                                                    <div className="text-xs text-gray-400">{item.time} left</div>
                                                </div>
                                            </div>
                                            <div className="w-24">
                                                <div className="w-full h-1.5 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-brand-purple" style={{width: `${item.prog}%`}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>

            {/* Tablet (Left - 나의 노트) */}
            <div className="absolute bottom-20 -left-10 lg:-left-20 z-30 w-[300px] lg:w-[400px] transform rotate-[-12deg] hover:rotate-0 hover:scale-105 transition-all duration-500 hover:z-40">
                <div className="bg-slate-900 rounded-[2rem] p-2 shadow-2xl border border-slate-700">
                    <div className="bg-white dark:bg-zinc-900 rounded-[1.5rem] overflow-hidden aspect-[3/4] p-6 relative flex flex-col">
                         {/* Header */}
                         <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-zinc-800 pb-3">
                             <div>
                                <div className="text-[10px] font-bold text-brand-purple uppercase tracking-wider">Chapter 01</div>
                                <div className="font-bold text-base text-slate-900 dark:text-white">민법총칙</div>
                             </div>
                             <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-400">
                                <span className="text-[10px]">12</span>
                             </div>
                         </div>
                         
                         {/* Note Content */}
                         <div className="space-y-4 flex-1 overflow-hidden font-medium">
                             <div className="text-[10px] leading-relaxed text-gray-600 dark:text-gray-300">
                                <strong className="block text-slate-900 dark:text-white mb-1.5">1. 법률행위의 목적</strong>
                                법률행위가 유효하기 위해서는 그 목적이 <span className="bg-yellow-100 dark:bg-yellow-900/30 px-0.5 rounded text-slate-900 dark:text-white font-bold mx-0.5">확정 가능</span>하고, <span className="bg-yellow-100 dark:bg-yellow-900/30 px-0.5 rounded text-slate-900 dark:text-white font-bold mx-0.5">실현 가능</span>하며, 적법하고, 사회적 타당성이 있어야 한다.
                             </div>
                             
                             <div className="text-[10px] leading-relaxed text-gray-600 dark:text-gray-300">
                                <strong className="block text-slate-900 dark:text-white mb-1.5">2. 목적의 불능</strong>
                                <ul className="list-disc pl-3 space-y-1.5 marker:text-brand-purple">
                                    <li>
                                        <span className="text-slate-900 dark:text-white underline decoration-brand-purple/50 decoration-2 underline-offset-2">원시적 불능</span>: 당연 무효. 단, 계약체결상의 과실책임 문제 발생.
                                    </li>
                                    <li>
                                        <span className="text-slate-900 dark:text-white underline decoration-brand-purple/50 decoration-2 underline-offset-2">후발적 불능</span>: 법률행위 자체는 유효. 채무불이행(이행불능) 또는 위험부담의 문제.
                                    </li>
                                </ul>
                             </div>
                             
                             <div className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-100 dark:border-purple-800/30 mt-auto">
                                 <div className="text-[9px] text-brand-purple font-bold mb-1">💡 핵심 판례</div>
                                 <div className="text-[9px] text-gray-600 dark:text-gray-400 leading-normal">
                                    부동산 이중매매가 반사회적 법률행위에 해당하는 경우, 절대적 무효이다.
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Mobile (Right - Total Study) */}
            <div className="absolute -bottom-10 right-0 lg:-right-10 z-40 w-[200px] transform rotate-[15deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl border border-slate-700">
                    <div className="bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden aspect-[9/19] relative flex flex-col">
                        <div className="p-6 pt-10 bg-brand-purple text-white relative">
                             {/* Background pattern */}
                             <div className="absolute inset-0 bg-white opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]"></div>
                             
                            <div className="relative z-10 text-center">
                                <div className="text-xs opacity-80 mb-1 font-medium tracking-wide">Total Study</div>
                                <div className="text-4xl font-extrabold tracking-tight tabular-nums">04:20:15</div>
                            </div>
                            
                            {/* Controls */}
                            <div className="relative z-10 flex justify-center gap-6 mt-6">
                                <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all">
                                    <Pause size={20} fill="currentColor" className="text-white" />
                                </button>
                                <button className="w-12 h-12 rounded-full bg-white text-brand-purple hover:bg-gray-100 flex items-center justify-center transition-all shadow-lg">
                                    <Square size={18} fill="currentColor" />
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex-1 p-4 bg-gray-50 dark:bg-zinc-950 overflow-hidden flex flex-col gap-2">
                             <div className="text-xs font-bold text-gray-400 mb-1 px-1">Today's Session</div>
                             
                             {[
                                 { sub: "헌법 판례 암기", time: "01:30:00", color: "bg-blue-400" },
                                 { sub: "행정법 기출", time: "00:45:15", color: "bg-green-400" },
                                 { sub: "형법 모의고사", time: "02:05:00", color: "bg-orange-400" },
                             ].map((item, i) => (
                                 <div key={i} className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm flex items-center justify-between">
                                     <div className="flex items-center gap-3">
                                         <div className={`w-2 h-8 rounded-full ${item.color}`}></div>
                                         <div>
                                             <div className="text-xs font-bold text-slate-900 dark:text-white">{item.sub}</div>
                                             <div className="text-[10px] text-gray-400">집중도 95%</div>
                                         </div>
                                     </div>
                                     <div className="text-xs font-bold font-mono text-slate-700 dark:text-gray-300">{item.time}</div>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        
        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};