import React, { useState, useEffect, useRef } from 'react';
import { Target, Zap, TrendingUp, Trophy, ArrowUp, Brain, Calendar, MoreHorizontal, Medal, Users, Activity, CheckCircle2, ChevronRight, AlertCircle, BarChart2, Clock } from 'lucide-react';

export const BentoCard = ({ children, className, title, subtitle, icon: Icon, delay = 0 }: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "50px" }
        );

        if (cardRef.current) observer.observe(cardRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-lg hover:shadow-2xl hover:shadow-purple-500/5 dark:hover:shadow-purple-900/10 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Background Texture & Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            
            <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
                 {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-brand-purple group-hover:scale-110 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-sm">
                            {Icon && <Icon size={18} />}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                            {title}
                        </h3>
                    </div>
                </div>
                {subtitle && <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-6 leading-relaxed break-keep font-medium">{subtitle}</p>}
                
                <div className="flex-1 min-h-0 flex flex-col justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

// --- Widgets ---

export const RadarChartWidget = () => {
    // 3-Axis Radar Chart (Triangle)
    const size = 200;
    const center = size / 2;
    const radius = size * 0.35; // Slightly smaller to fit labels
    const angleStep = (Math.PI * 2) / 3;
    
    // Data
    const myData = [0.85, 0.6, 0.9]; // 민법, 형사법, 공법
    const avgData = [0.65, 0.7, 0.55]; // Average
    const labels = ["민법", "형사법", "공법"];

    const getPoints = (data: number[]) => {
        return data.map((val, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const r = radius * val;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
        }).join(" ");
    };
    
    const getLabelPos = (i: number) => {
         const angle = i * angleStep - Math.PI / 2;
         const r = radius * 1.35;
         return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full max-h-[250px] overflow-visible">
                {/* Background Grid (Triangles) */}
                {[0.2, 0.4, 0.6, 0.8, 1].map(scale => (
                    <polygon 
                        key={scale} 
                        points={getPoints([scale, scale, scale])} 
                        fill="none" 
                        stroke="currentColor" 
                        strokeOpacity="0.1" 
                        className="text-gray-500" 
                    />
                ))}
                
                {/* Axes Lines */}
                {[0, 1, 2].map(i => {
                     const angle = i * angleStep - Math.PI / 2;
                     return <line key={i} x1={center} y1={center} x2={center + radius * Math.cos(angle)} y2={center + radius * Math.sin(angle)} stroke="currentColor" strokeOpacity="0.1" className="text-gray-500" />
                })}
                
                {/* Average Data (Gray, Dashed) */}
                <polygon 
                    points={getPoints(avgData)} 
                    fill="rgba(156, 163, 175, 0.2)" 
                    stroke="#9CA3AF" 
                    strokeWidth="2" 
                    strokeDasharray="4 2"
                />
                
                {/* My Data (Purple) */}
                <polygon 
                    points={getPoints(myData)} 
                    fill="rgba(149, 117, 205, 0.3)" 
                    stroke="#9575CD" 
                    strokeWidth="2" 
                />
                
                {/* Data Points (My Data) */}
                {myData.map((val, i) => {
                     const angle = i * angleStep - Math.PI / 2;
                     const r = radius * val;
                     return <circle key={i} cx={center + r * Math.cos(angle)} cy={center + r * Math.sin(angle)} r="4" fill="#9575CD" className="stroke-white dark:stroke-zinc-900" strokeWidth="2" />
                })}

                {/* Labels */}
                {labels.map((label, i) => {
                    const pos = getLabelPos(i);
                    return <text key={i} x={pos.x} y={pos.y} textAnchor="middle" dominantBaseline="middle" className="text-[11px] font-bold fill-slate-500 dark:fill-gray-400">{label}</text>
                })}
            </svg>
            
            {/* Legend */}
            <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                    <span className="text-[10px] text-gray-500 font-bold">나의 점수</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-gray-400/50 border border-gray-400 border-dashed"></div>
                    <span className="text-[10px] text-gray-500 font-bold">전체 평균</span>
                </div>
            </div>
        </div>
    );
}

export const RankingWidget = () => {
    return (
        <div className="w-full space-y-2">
            {[
                {rank: 1, name: 'User_99**', score: 98},
                {rank: 2, name: 'Pass**12', score: 97},
                {rank: 3, name: 'Law**88', score: 96},
                {rank: 12, name: 'Me (나)', score: 92, me: true},
            ].map((u, i) => (
                <div key={i} className={`flex items-center justify-between p-3 rounded-xl text-sm transition-all ${u.me ? 'bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 shadow-sm' : 'hover:bg-gray-50 dark:hover:bg-zinc-800'}`}>
                    <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 flex items-center justify-center rounded-lg text-xs font-bold ${u.rank <= 3 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500' : 'text-gray-400 bg-gray-100 dark:bg-zinc-800'}`}>{u.rank}</span>
                        <span className={u.me ? 'font-bold text-brand-purple' : 'text-slate-700 dark:text-gray-300 font-medium'}>{u.name}</span>
                    </div>
                    <span className={`font-bold ${u.me ? 'text-brand-purple' : 'text-gray-500'}`}>{u.score}점</span>
                </div>
            ))}
        </div>
    );
}

export const GoalWidget = () => {
    return (
        <div className="flex flex-col gap-4 h-full justify-center w-full">
            <div className="flex items-center justify-between px-2">
                <div className="relative w-24 h-24 flex-shrink-0">
                   <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-100 dark:text-zinc-800" />
                       <circle cx="50" cy="50" r="40" fill="none" stroke="#9575CD" strokeWidth="8" strokeDasharray="251" strokeDashoffset="50" strokeLinecap="round" />
                   </svg>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="font-bold text-xl text-slate-900 dark:text-white">78%</span>
                   </div>
                </div>
                <div className="text-right flex-1 pl-4">
                    <div className="text-xs text-gray-400 font-medium mb-1">Current Goal</div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1">민법 정복</div>
                    <div className="inline-block px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-brand-purple text-xs font-bold">D-24</div>
                </div>
            </div>
            
            <div className="space-y-2 mt-2">
                <div className="flex justify-between text-xs text-gray-500 font-medium px-1">
                    <span>기출 1회독</span>
                    <span>60%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-full w-3/5 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}

export const HeatmapWidget = () => {
    return (
        <div className="h-full flex flex-col justify-between w-full">
            <div className="flex items-end gap-2 mb-6">
                <span className="text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">128</span>
                <span className="text-base font-bold text-brand-purple mb-2">일 연속 학습</span>
            </div>
            <div className="flex gap-1.5 w-full justify-between overflow-hidden mask-fade-right">
                {Array.from({length: 16}).map((_, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                        {Array.from({length: 5}).map((_, j) => {
                            const active = Math.random() > 0.4;
                            const opacity = active ? Math.random() * 0.6 + 0.4 : 0.1;
                            return (
                                <div key={j} className="w-4 h-4 rounded-[4px] bg-brand-purple" style={{ opacity: active ? opacity : 0.1 }}></div>
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-6 p-4 bg-gray-50 dark:bg-zinc-800 rounded-2xl">
                 <div className="flex items-center gap-2">
                     <Clock size={16} className="text-gray-400"/>
                     <div className="text-xs font-bold text-gray-500">오늘 학습 시간</div>
                 </div>
                 <div className="text-sm font-bold text-slate-900 dark:text-white">6h 12m</div>
            </div>
        </div>
    )
}

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50/50 dark:bg-zinc-950/50 border-t border-gray-100 dark:border-zinc-900">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                데이터로 증명하는 <span className="text-brand-purple">합격 솔루션</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                감에 의존하는 공부는 끝났습니다. 수십만 건의 데이터를 분석하여 당신에게 가장 필요한 학습 전략을 제시합니다.
            </p>
        </div>

        {/* 4-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 grid-rows-[minmax(300px,auto)_minmax(300px,auto)]">
            
            {/* 1. Weakness Analysis (Large Square: 2x2) */}
            <BentoCard 
                className="lg:col-span-2 lg:row-span-2 bg-white dark:bg-zinc-900"
                title="AI 약점 정밀 진단"
                subtitle="나의 취약점을 시각화하여 우선순위를 제안합니다."
                icon={Brain}
            >
                <RadarChartWidget />
            </BentoCard>

            {/* 2. Heatmap (Wide: 2x1) */}
            <BentoCard 
                className="lg:col-span-2"
                title="학습 루틴 트래커"
                subtitle="매일의 노력이 쌓여 합격을 만듭니다."
                icon={Activity}
                delay={100}
            >
                <HeatmapWidget />
            </BentoCard>

            {/* 3. Goals (Small: 1x1) */}
            <BentoCard 
                className="lg:col-span-1"
                title="목표 관리"
                icon={Target}
                delay={200}
            >
                 <GoalWidget />
            </BentoCard>

            {/* 4. Ranking (Small: 1x1) */}
            <BentoCard 
                className="lg:col-span-1"
                title="실시간 랭킹"
                icon={Trophy}
                delay={300}
            >
                <RankingWidget />
            </BentoCard>

        </div>
      </div>
    </section>
  );
};