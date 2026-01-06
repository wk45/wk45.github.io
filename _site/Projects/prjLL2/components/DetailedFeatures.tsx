import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowUpRight, FileText, Check, Bot, Cloud, UploadCloud, FolderOpen, ChevronRight } from 'lucide-react';

interface DetailedFeaturesProps {
    onStart: () => void;
}

// Visual 1: Flashcard / Note Review UI
const FlashcardVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-10 bg-gray-50 dark:bg-zinc-900/50">
        <div className="w-full max-w-[500px] aspect-[4/5] relative">
            {/* Card Stack Effect */}
            <div className="absolute top-4 left-4 w-full h-full bg-white dark:bg-zinc-800 rounded-3xl shadow-xl opacity-40 scale-95 origin-bottom"></div>
            <div className="absolute top-2 left-2 w-full h-full bg-white dark:bg-zinc-800 rounded-3xl shadow-xl opacity-70 scale-[0.98] origin-bottom"></div>
            
            {/* Main Card */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-700 flex flex-col p-8 md:p-10">
                <div className="flex justify-between items-center mb-8">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-brand-purple rounded-full text-xs font-bold uppercase">Smart Review</span>
                    <span className="text-gray-400 text-sm">3/20</span>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">비진의 표시</span>의 효력에 대한 설명으로 옳은 것은?
                    </h3>
                    <div className="space-y-3">
                         <div className="p-4 rounded-xl border-2 border-transparent hover:border-brand-purple bg-gray-50 dark:bg-zinc-900 transition-all cursor-pointer flex items-start gap-3 group">
                             <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-zinc-600 group-hover:border-brand-purple mt-0.5"></div>
                             <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">원칙적으로 무효이다.</span>
                         </div>
                         <div className="p-4 rounded-xl border-2 border-brand-purple bg-purple-50 dark:bg-purple-900/10 transition-all cursor-pointer flex items-start gap-3">
                             <div className="w-5 h-5 rounded-full border-[5px] border-brand-purple mt-0.5"></div>
                             <span className="text-sm md:text-base text-slate-900 dark:text-white font-bold">원칙적으로 유효하나, 상대방이 알았을 경우 무효이다.</span>
                         </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-700 flex justify-between items-center">
                    <button className="text-sm text-gray-400 font-medium hover:text-gray-600">해설 보기</button>
                    <button className="px-6 py-3 bg-brand-purple text-white rounded-xl font-bold hover:opacity-90 transition-opacity">다음 문제</button>
                </div>
            </div>
        </div>
    </div>
);

// Visual 2: AI Coach Chat UI
const AICoachVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-10 bg-gray-50 dark:bg-zinc-900/50">
        <div className="w-full max-w-[500px] h-[600px] bg-white dark:bg-zinc-950 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-zinc-800 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-6 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 flex items-center gap-4 sticky top-0 z-10">
                <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                    <Bot size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">PassLab AI 코치</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs text-gray-500">Online</span>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-hidden flex flex-col gap-6 bg-dots">
                {/* Bot Message */}
                <div className="flex gap-4 items-start animate-fade-in-up">
                    <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple flex-shrink-0 mt-1">
                        <Bot size={16} />
                    </div>
                    <div className="flex flex-col gap-2 max-w-[85%]">
                        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-sm md:text-base text-slate-700 dark:text-gray-200 leading-relaxed shadow-sm">
                            지난 주 모의고사 분석 결과, <span className="font-bold text-brand-purple">형법 판례</span> 파트가 취약합니다. 맞춤 커리큘럼을 생성할까요?
                        </div>
                    </div>
                </div>

                {/* User Message */}
                <div className="flex gap-4 items-start flex-row-reverse animate-fade-in-up delay-100">
                    <div className="bg-brand-purple p-4 rounded-2xl rounded-tr-none text-sm md:text-base text-white shadow-md shadow-purple-500/20">
                        네, 추천 커리큘럼 보여줘.
                    </div>
                </div>

                {/* Bot Response with Roadmap */}
                <div className="flex gap-4 items-start animate-fade-in-up delay-200">
                     <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple flex-shrink-0 mt-1">
                        <Bot size={16} />
                    </div>
                    <div className="flex flex-col gap-2 max-w-[90%]">
                        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none shadow-sm">
                            <p className="text-sm text-slate-700 dark:text-gray-200 mb-3">3주 단기 완성 플랜입니다.</p>
                            <div className="space-y-3 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-gray-200 dark:border-zinc-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs"><Check size={12}/></div>
                                    <span className="text-xs md:text-sm text-gray-500 line-through">재산죄 기초 이론</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-purple text-white flex items-center justify-center text-xs">2</div>
                                    <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">최신 3개년 판례 특강</span>
                                </div>
                                <div className="flex items-center gap-3 opacity-50">
                                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500">3</div>
                                    <span className="text-xs md:text-sm text-gray-500">고난도 사례형 풀이</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Mock */}
            <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="h-12 bg-gray-50 dark:bg-zinc-800 rounded-full flex items-center px-4 justify-between">
                    <span className="text-gray-400 text-sm">메시지 보내기...</span>
                    <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white"><ArrowUpRight size={16}/></div>
                </div>
            </div>
        </div>
    </div>
);

// Visual 3: Cloud Sync / File Manager UI
const CloudSyncVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-10 bg-gray-50 dark:bg-zinc-900/50">
        <div className="w-full max-w-[500px] aspect-[4/3] bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden flex flex-col">
            {/* Toolbar */}
            <div className="h-14 border-b border-gray-100 dark:border-zinc-800 flex items-center px-6 gap-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-6 w-px bg-gray-200 dark:bg-zinc-700 mx-2"></div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Cloud size={16} />
                    <span className="font-medium">PassLab Drive</span>
                </div>
                <div className="ml-auto flex items-center gap-2 text-green-500 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                    <CheckCircle2 size={12} /> 동기화 완료
                </div>
            </div>

            {/* File List */}
            <div className="flex-1 p-6 bg-gray-50/50 dark:bg-zinc-950/50">
                <div className="space-y-3">
                    {/* Folder */}
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <FolderOpen size={20} />
                        </div>
                        <div className="flex-1">
                            <div className="font-bold text-slate-900 dark:text-white text-sm">2024 민법 오답노트</div>
                            <div className="text-xs text-gray-400">32개 항목 • 2분 전 수정됨</div>
                        </div>
                        <ChevronRight size={16} className="text-gray-300" />
                    </div>

                    {/* File Uploading */}
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm relative overflow-hidden">
                        <div className="absolute left-0 bottom-0 h-1 bg-brand-purple w-[70%] z-10 animate-pulse"></div>
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-brand-purple">
                            <FileText size={20} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <span className="font-bold text-slate-900 dark:text-white text-sm">형법 판례.pdf</span>
                                <span className="text-xs text-brand-purple font-bold">Uploading 70%...</span>
                            </div>
                            <div className="text-xs text-gray-400">1.2MB</div>
                        </div>
                         <UploadCloud size={16} className="text-brand-purple animate-bounce" />
                    </div>

                    {/* File Done */}
                     <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm opacity-60">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-gray-500">
                            <FileText size={20} />
                        </div>
                        <div className="flex-1">
                            <div className="font-bold text-slate-900 dark:text-white text-sm">헌법 조문.pdf</div>
                            <div className="text-xs text-gray-400">800KB • 1시간 전</div>
                        </div>
                         <Check size={16} className="text-gray-300" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const features = [
  {
    id: 0,
    tag: '스마트 복습',
    title: <>반복되는 오답, <br/><span className="text-gray-400">AI가 확실하게 잡습니다</span></>,
    desc: '틀린 문제만 모아 자동으로 플래시카드를 생성합니다. 에빙하우스 망각곡선 이론을 적용하여, 기억이 희미해질 때쯤 알림을 보내드립니다.',
    points: ['자동 생성 오답 노트', '스마트 플래시카드 모드', '최적 복습 주기 알림'],
    visual: <FlashcardVisual />
  },
  {
    id: 1,
    tag: '1:1 AI 튜터',
    title: <>나만을 위한 <br/><span className="text-gray-400">맞춤형 학습 전략</span></>,
    desc: '단순히 문제만 푸는 것이 아닙니다. AI 튜터가 학습 패턴을 분석하여 부족한 파트를 족집게처럼 찾아내고, 합격 커리큘럼을 제시합니다.',
    points: ['취약점 정밀 분석 리포트', '개인화된 커리큘럼 추천', '실시간 Q&A 챗봇'],
    visual: <AICoachVisual />
  },
  {
    id: 2,
    tag: '클라우드 동기화',
    title: <>언제 어디서나 <br/><span className="text-gray-400">끊김 없는 학습</span></>,
    desc: '이동 중에는 폰으로, 독서실에서는 태블릿으로. 모든 학습 데이터와 자료가 실시간으로 동기화되어 기기를 바꿔도 흐름이 끊기지 않습니다.',
    points: ['PC, 태블릿, 모바일 완벽 연동', '학습 자료 클라우드 백업', '오프라인 모드 지원'],
    visual: <CloudSyncVisual />
  }
];

export const DetailedFeatures: React.FC<DetailedFeaturesProps> = ({ onStart }) => {
    const [activeFeature, setActiveFeature] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setActiveFeature(index);
                    }
                });
            },
            {
                rootMargin: '-40% 0px -40% 0px', // Adjusted for better centering
                threshold: 0.5
            }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="details" className="bg-white dark:bg-zinc-950 py-32 relative">
             <div className="max-w-[1600px] mx-auto px-6">
                
                {/* Desktop Sticky Layout */}
                <div className="hidden lg:flex gap-24">
                    
                    {/* Left: Sticky Visual Column (Expanded Width) */}
                    <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center py-10">
                         <div className="relative w-full h-full max-h-[800px] flex items-center justify-center">
                             {features.map((feature, index) => (
                                 <div 
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform ${
                                        activeFeature === index 
                                        ? 'opacity-100 translate-y-0 scale-100 blur-0 z-10' 
                                        : activeFeature > index 
                                            ? 'opacity-0 -translate-y-24 scale-95 blur-md z-0 pointer-events-none' 
                                            : 'opacity-0 translate-y-24 scale-95 blur-md z-0 pointer-events-none'
                                    }`}
                                 >
                                     {feature.visual}
                                 </div>
                             ))}
                        </div>
                    </div>

                    {/* Right: Scrolling Text Column */}
                    <div className="w-1/2 py-20">
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                data-index={index}
                                ref={el => { sectionRefs.current[index] = el }}
                                className={`min-h-[80vh] flex flex-col justify-center pl-10 transition-opacity duration-500 ${
                                    activeFeature === index ? 'opacity-100' : 'opacity-20 blur-[2px]'
                                }`}
                            >
                                <div className="inline-flex items-center gap-3 text-brand-purple text-sm font-bold mb-8 uppercase tracking-widest">
                                    <span className="flex w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 items-center justify-center text-sm border border-purple-200 dark:border-purple-800">
                                        0{index + 1}
                                    </span>
                                    {feature.tag}
                                </div>
                                <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.1] break-keep">
                                    {feature.title}
                                </h2>
                                <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed break-keep max-w-xl">
                                    {feature.desc}
                                </p>
                                
                                {feature.points && (
                                    <ul className="space-y-4">
                                        {feature.points.map((point, i) => (
                                            <li key={i} className="flex items-center gap-4 text-slate-700 dark:text-gray-300 font-medium text-lg p-4 rounded-2xl bg-gray-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-gray-100 dark:hover:border-zinc-700 transition-all shadow-sm group cursor-default">
                                                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-brand-purple flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <CheckCircle2 size={16} />
                                                </div>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout (Stacked) */}
                <div className="lg:hidden space-y-32">
                     {features.map((feature, index) => (
                         <div key={index} className="flex flex-col gap-10">
                             {/* Visual Box */}
                             <div className="w-full aspect-[4/5] flex items-center justify-center">
                                 {feature.visual}
                             </div>
                             
                             {/* Content */}
                             <div className="px-4">
                                <div className="inline-flex items-center gap-2 text-brand-purple text-sm font-bold mb-6">
                                    <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                                    {feature.tag}
                                </div>
                                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight break-keep">
                                    {feature.title}
                                </h2>
                                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 break-keep">
                                    {feature.desc}
                                </p>
                                {feature.points && (
                                    <ul className="space-y-4">
                                        {feature.points.map((point, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-gray-300 text-base font-medium">
                                                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-brand-purple flex-shrink-0">
                                                    <CheckCircle2 size={14} />
                                                </div>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                             </div>
                         </div>
                     ))}
                </div>

                {/* CTA */}
                <div className="mt-40 pt-20 pb-20 text-center relative">
                     {/* Gradient Overlay from bottom */}
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-purple-100/50 via-transparent to-transparent dark:from-purple-900/20 dark:to-transparent blur-3xl -z-10 pointer-events-none"></div>

                     <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
                                합격으로 가는 길, <br/>
                                <span className="text-brand-purple">PassLab</span>이 동행합니다.
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-12 text-xl lg:text-2xl">
                                더 이상 혼자 고민하지 마세요. 데이터가 알려주는 확실한 길을 따라가세요.
                            </p>
                            <button 
                                onClick={onStart}
                                className="px-12 py-6 bg-brand-purple hover:bg-purple-600 text-white rounded-full text-xl font-bold transition-all hover:scale-105 shadow-2xl shadow-purple-900/30 flex items-center gap-3 mx-auto"
                            >
                                시작하기 <ArrowUpRight size={24} />
                            </button>
                    </div>
                </div>

             </div>
        </section>
    );
};