import React, { useState, useEffect } from 'react';
import { 
  Zap, LayoutDashboard, BookOpen, BarChart3, Settings, 
  Bell, Search, Menu, X, Play, Clock, MoreVertical, 
  ChevronRight, CheckCircle2, ArrowLeft, RotateCcw,
  User, Shield, Moon, BellRing, LogOut, Trophy, Target
} from 'lucide-react';
import { HeatmapWidget, RadarChartWidget, RankingWidget, GoalWidget } from './Features';

interface AppPrototypeProps {
  onBack: () => void;
}

type Tab = 'dashboard' | 'study' | 'analytics' | 'settings';

export const AppPrototype: React.FC<AppPrototypeProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default open on desktop
  const [activeCourse, setActiveCourse] = useState<any>(null); // If set, show Study View
  
  // Mobile responsive sidebar handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const courses = [
    { id: 1, title: '민법총칙 핵심요약', progress: 75, total: 20, done: 15, color: 'bg-brand-purple', desc: '법률행위의 목적과 의사표시 집중 공략' },
    { id: 2, title: '형법 판례 기출문제', progress: 30, total: 50, done: 15, color: 'bg-blue-500', desc: '최신 3개년 판례 위주 문제 풀이' },
    { id: 3, title: '헌법 조문 암기', progress: 0, total: 30, done: 0, color: 'bg-emerald-500', desc: '기본권 조항 빈칸 채우기 테스트' },
    { id: 4, title: '행정법 기출 100선', progress: 10, total: 100, done: 10, color: 'bg-orange-500', desc: '국가직/지방직 빈출 문제 엄선' },
  ];

  const handleCourseClick = (course: any) => {
    setActiveCourse(course);
  };

  const handleBackToDashboard = () => {
    setActiveCourse(null);
  };

  // --- Render Content based on Active Tab ---
  const renderContent = () => {
    if (activeCourse) {
       // --- Study View (Flashcards) ---
       return (
        <div className="max-w-4xl mx-auto h-full flex flex-col animate-fade-in-up">
            <button onClick={handleBackToDashboard} className="flex items-center gap-2 text-gray-500 hover:text-brand-purple mb-6 w-fit">
                <ArrowLeft size={16} /> 목록으로 돌아가기
            </button>

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold mb-1">{activeCourse.title}</h2>
                    <div className="text-sm text-gray-500">진도율 {activeCourse.progress}% • 25문제 남음</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Timer</div>
                        <div className="text-xl font-mono font-bold text-brand-purple">00:12:45</div>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 dark:bg-zinc-800 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-brand-purple transition-all duration-500" style={{ width: `${activeCourse.progress}%` }}></div>
            </div>

            {/* Flashcard Area */}
            <div className="flex-1 flex items-center justify-center min-h-[400px]">
                <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-[2rem] shadow-xl border border-gray-200 dark:border-zinc-800 p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple to-purple-400"></div>
                        
                        <div className="mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-brand-purple text-xs font-bold mb-4">OX 퀴즈</span>
                            <h3 className="text-xl md:text-2xl font-bold leading-relaxed">
                            "형법상 <span className="text-brand-purple underline decoration-2 underline-offset-4">중지미수</span>는 자의로 실행에 착수한 행위를 중지하거나 그 행위로 인한 결과의 발생을 방지한 때에 한하여 성립한다."
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="py-6 rounded-xl border-2 border-gray-200 dark:border-zinc-700 hover:border-brand-purple hover:bg-purple-50 dark:hover:bg-purple-900/20 text-xl font-bold text-gray-600 dark:text-gray-300 transition-all flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 rounded-full border-2 border-gray-300 group-hover:border-brand-purple flex items-center justify-center text-gray-400 group-hover:text-brand-purple">O</div>
                                <span className="text-sm font-normal">맞다</span>
                            </button>
                            <button className="py-6 rounded-xl border-2 border-gray-200 dark:border-zinc-700 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 text-xl font-bold text-gray-600 dark:text-gray-300 transition-all flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 rounded-full border-2 border-gray-300 group-hover:border-red-500 flex items-center justify-center text-gray-400 group-hover:text-red-500">X</div>
                                <span className="text-sm font-normal">틀리다</span>
                            </button>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button className="text-gray-400 text-sm hover:text-gray-600 flex items-center gap-2">
                                <RotateCcw size={14} /> 문제 건너뛰기
                            </button>
                        </div>
                </div>
            </div>
        </div>
       );
    }

    switch (activeTab) {
      case 'dashboard':
        return (
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">안녕하세요, 수험생님! 👋</h2>
                        <p className="text-gray-500 dark:text-gray-400">오늘도 합격에 한 걸음 더 가까워졌네요.</p>
                    </div>
                    <div className="flex gap-3">
                            <div className="bg-white dark:bg-zinc-900 px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-bold">현재 학습중</span>
                            </div>
                            <button 
                                onClick={() => handleCourseClick(courses[0])}
                                className="bg-brand-purple text-white px-4 py-2 rounded-xl shadow-lg shadow-purple-500/30 flex items-center gap-2 font-bold cursor-pointer hover:bg-purple-600 transition-colors"
                            >
                                <Play size={16} fill="currentColor" /> 학습 시작
                            </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Row 1 */}
                    
                    {/* 1. Timer Widget (2x) */}
                    <div className="col-span-1 md:col-span-2 bg-slate-900 text-white rounded-[2rem] p-6 relative overflow-hidden flex flex-col justify-between shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent"></div>
                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <div className="text-sm opacity-70 mb-1">Total Focus Time</div>
                                <div className="text-4xl font-mono font-bold">04:20:15</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Clock size={20} />
                            </div>
                        </div>
                        <div className="relative z-10 mt-6">
                            <div className="flex gap-2 mb-2">
                                {[1,2,3,4,5,6,7].map(i => (
                                    <div key={i} className={`h-1 flex-1 rounded-full ${i <= 5 ? 'bg-brand-purple' : 'bg-white/10'}`}></div>
                                ))}
                            </div>
                            <div className="text-xs opacity-50 text-right">Daily Goal: 80%</div>
                        </div>
                    </div>

                    {/* 2. Ranking Widget (2x) */}
                    <div className="col-span-1 md:col-span-2 bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-200 dark:border-zinc-800 p-6 shadow-sm flex flex-col">
                         <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 flex items-center justify-center text-yellow-600">
                                <Trophy size={18} />
                            </div>
                            <h3 className="font-bold text-lg">실시간 랭킹</h3>
                         </div>
                         <RankingWidget />
                    </div>

                    {/* Row 2 */}

                    {/* 3. Weakness Radar (1x) */}
                    <div className="col-span-1 bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-200 dark:border-zinc-800 p-4 flex flex-col shadow-sm">
                        <h3 className="text-sm font-bold text-gray-500 mb-2 pl-2 pt-2">취약점 분석</h3>
                        <div className="flex-1 flex items-center justify-center">
                           <RadarChartWidget />
                        </div>
                    </div>

                     {/* 4. Goal Widget (1x) */}
                    <div className="col-span-1 bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-200 dark:border-zinc-800 p-6 flex flex-col shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/10 flex items-center justify-center text-green-600">
                                <Target size={18} />
                            </div>
                            <h3 className="font-bold text-lg">목표</h3>
                        </div>
                        <GoalWidget />
                    </div>

                    {/* 5. Streak Heatmap (2x) */}
                    <div className="col-span-1 md:col-span-2 bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-200 dark:border-zinc-800 p-6 shadow-sm overflow-hidden">
                            <div className="scale-100 origin-top-left h-full">
                                <HeatmapWidget />
                            </div>
                    </div>
                </div>

                {/* Today's Schedule (Course List) */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            오늘의 학습 스케줄 <span className="bg-gray-100 dark:bg-zinc-800 text-xs px-2 py-1 rounded text-gray-500">3개 남음</span>
                        </h3>
                        <button onClick={() => setActiveTab('study')} className="text-sm text-brand-purple font-bold hover:underline">전체 보기</button>
                    </div>

                    <div className="grid gap-4">
                        {courses.slice(0, 3).map((course) => (
                            <div 
                                key={course.id} 
                                onClick={() => handleCourseClick(course)}
                                className="group bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-gray-200 dark:border-zinc-800 hover:border-brand-purple dark:hover:border-brand-purple cursor-pointer transition-all shadow-sm hover:shadow-md flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${course.color} bg-opacity-10 flex items-center justify-center text-brand-purple`}>
                                        <BookOpen size={24} className={course.color.replace('bg-', 'text-')} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 group-hover:text-brand-purple transition-colors">{course.title}</h4>
                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                            <span className="flex items-center gap-1"><Clock size={14}/> 45분 소요</span>
                                            <span>•</span>
                                            <span>{course.done}/{course.total} 완료</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="w-32 hidden sm:block">
                                        <div className="flex justify-between text-xs mb-1 font-bold">
                                            <span>{course.progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <div className={`h-full ${course.color}`} style={{ width: `${course.progress}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-zinc-800 flex items-center justify-center text-gray-400 group-hover:bg-brand-purple group-hover:text-white transition-all">
                                        <Play size={18} fill="currentColor" className="ml-0.5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );

      case 'study':
        return (
            <div className="max-w-6xl mx-auto animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8">나의 학습 코스</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((course) => (
                         <div 
                             key={course.id} 
                             className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-gray-200 dark:border-zinc-800 hover:border-brand-purple transition-all shadow-sm hover:shadow-lg flex flex-col justify-between h-64 cursor-pointer group"
                             onClick={() => handleCourseClick(course)}
                         >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${course.color} bg-opacity-10 flex items-center justify-center text-brand-purple`}>
                                        <BookOpen size={24} className={course.color.replace('bg-', 'text-')} />
                                    </div>
                                    <div className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs font-bold text-gray-500">
                                        D-24
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-purple transition-colors">{course.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{course.desc}</p>
                            </div>
                            
                            <div>
                                <div className="flex justify-between text-sm mb-2 font-bold text-gray-600 dark:text-gray-300">
                                    <span>진행률</span>
                                    <span>{course.progress}%</span>
                                </div>
                                <div className="w-full h-3 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className={`h-full ${course.color}`} style={{ width: `${course.progress}%` }}></div>
                                </div>
                                <button className="w-full mt-4 py-3 bg-gray-50 dark:bg-zinc-800 hover:bg-brand-purple hover:text-white rounded-xl text-sm font-bold transition-all">
                                    이어하기
                                </button>
                            </div>
                         </div>
                    ))}
                     {/* Add New Course Placeholder */}
                     <div className="bg-gray-50 dark:bg-zinc-900/50 rounded-3xl p-6 border-2 border-dashed border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-center h-64 text-gray-400 hover:text-brand-purple hover:border-brand-purple hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all cursor-pointer gap-4">
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm">
                            <PlusIcon />
                        </div>
                        <span className="font-bold">새 코스 추가하기</span>
                     </div>
                </div>
            </div>
        );

      case 'analytics':
        return (
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
                 <h2 className="text-3xl font-bold mb-2">학습 분석 리포트</h2>
                 <p className="text-gray-500 mb-8">지난 30일간의 학습 데이터를 분석했습니다.</p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {/* Radar Chart */}
                     <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col items-center justify-center aspect-square md:aspect-auto">
                        <h3 className="text-lg font-bold mb-6 self-start w-full border-b border-gray-100 dark:border-zinc-800 pb-4">과목별 취약점 분석</h3>
                        <div className="w-full max-w-sm">
                             <RadarChartWidget />
                        </div>
                     </div>

                     {/* Bar Chart (Custom SVG) */}
                     <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-gray-200 dark:border-zinc-800 shadow-sm">
                        <h3 className="text-lg font-bold mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4">주간 학습 시간</h3>
                        <div className="flex items-end justify-between h-64 gap-2 px-2">
                             {[40, 65, 30, 85, 50, 90, 20].map((h, i) => (
                                 <div key={i} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                                     <div className="relative w-full bg-gray-100 dark:bg-zinc-800 rounded-t-xl overflow-hidden h-full flex items-end">
                                         <div 
                                            className="w-full bg-brand-purple opacity-80 group-hover:opacity-100 transition-all duration-500 rounded-t-xl" 
                                            style={{ height: `${h}%` }}
                                         ></div>
                                         <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-1.5 py-0.5 rounded">
                                             {h}m
                                         </div>
                                     </div>
                                     <span className="text-xs text-gray-400 font-bold">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                                 </div>
                             ))}
                        </div>
                        <div className="mt-6 flex justify-between items-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-xl">
                            <div className="text-sm text-gray-500">이번 주 총 학습</div>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">32시간 15분</div>
                        </div>
                     </div>
                 </div>
            </div>
        );

      case 'settings':
        return (
            <div className="max-w-2xl mx-auto animate-fade-in-up">
                 <h2 className="text-3xl font-bold mb-8">설정</h2>
                 
                 <div className="space-y-6">
                     {/* Section 1: Profile */}
                     <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-gray-200 dark:border-zinc-800 shadow-sm">
                         <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">내 프로필</h3>
                         <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-zinc-700 overflow-hidden">
                                <img src="https://i.pravatar.cc/100?img=12" alt="User" />
                            </div>
                            <div>
                                <div className="font-bold text-lg">김수험</div>
                                <div className="text-sm text-gray-500">passlab_user@gmail.com</div>
                            </div>
                            <button className="ml-auto px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs font-bold hover:bg-gray-200 transition-colors">편집</button>
                         </div>
                     </div>

                     {/* Section 2: Preferences */}
                     <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-gray-200 dark:border-zinc-800 shadow-sm">
                        <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">앱 설정</h3>
                        <div className="space-y-1">
                            {[
                                { icon: BellRing, label: '학습 알림', desc: '정해진 시간에 알림을 받습니다.' },
                                { icon: Moon, label: '다크 모드', desc: '눈이 편안한 화면을 사용합니다.' },
                                { icon: Shield, label: '개인정보 보호', desc: '데이터 수집을 최소화합니다.' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/10 flex items-center justify-center text-brand-purple">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">{item.label}</div>
                                            <div className="text-xs text-gray-400">{item.desc}</div>
                                        </div>
                                    </div>
                                    <div className="w-10 h-6 bg-gray-200 dark:bg-zinc-700 rounded-full relative">
                                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>

                     <button onClick={onBack} className="w-full py-4 text-red-500 font-bold bg-red-50 dark:bg-red-900/10 rounded-2xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                        <LogOut size={18} /> 로그아웃
                     </button>
                 </div>
            </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-20 xl:w-64'
        }`}
      >
        <div className="h-full flex flex-col">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-gray-100 dark:border-zinc-800">
                <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white shrink-0">
                    <Zap size={18} fill="currentColor" />
                </div>
                <span className="ml-3 font-bold text-xl lg:hidden xl:block">PassLab</span>
            </div>

            {/* Nav */}
            <nav className="flex-1 p-4 space-y-2">
                {[
                    { id: 'dashboard', icon: LayoutDashboard, label: '대시보드' },
                    { id: 'study', icon: BookOpen, label: '나의 학습' },
                    { id: 'analytics', icon: BarChart3, label: '분석 리포트' },
                    { id: 'settings', icon: Settings, label: '설정' },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => { setActiveTab(item.id as Tab); setActiveCourse(null); }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                            activeTab === item.id 
                            ? 'bg-brand-purple text-white shadow-lg shadow-purple-500/30' 
                            : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                        <item.icon size={20} />
                        <span className="font-medium lg:hidden xl:block">{item.label}</span>
                    </button>
                ))}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-gray-100 dark:border-zinc-800">
                <button onClick={onBack} className="w-full flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 text-red-500 transition-colors">
                     <ArrowLeft size={20} />
                     <span className="font-medium text-sm lg:hidden xl:block">로그아웃</span>
                </button>
                <div className="mt-4 flex items-center gap-3 px-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-700 overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=12" alt="User" />
                    </div>
                    <div className="lg:hidden xl:block">
                        <div className="text-sm font-bold">김수험</div>
                        <div className="text-xs text-gray-500">Free Plan</div>
                    </div>
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full relative">
        
        {/* Header */}
        <header className="h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 -ml-2 text-gray-500">
                    <Menu size={24} />
                </button>
                <h1 className="text-lg font-bold">
                    {activeCourse ? '학습하기' : 
                     activeTab === 'dashboard' ? '대시보드' : 
                     activeTab === 'study' ? '나의 학습' : 
                     activeTab === 'analytics' ? '분석 리포트' : '설정'}
                </h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center bg-gray-100 dark:bg-zinc-800 rounded-full px-4 py-2">
                    <Search size={16} className="text-gray-400 mr-2" />
                    <input type="text" placeholder="검색..." className="bg-transparent border-none outline-none text-sm w-48" />
                </div>
                <button className="relative p-2 text-gray-500 hover:text-brand-purple transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
                </button>
            </div>
        </header>

        {/* Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
            {renderContent()}
        </main>
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && window.innerWidth < 1024 && (
        <div 
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </div>
  );
};

// Simple Icon for placeholder
const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5v14"/>
    </svg>
);