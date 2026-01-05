import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 pt-20 pb-10 border-t border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
            {/* Brand */}
            <div className="max-w-xs">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white">
                    <Zap size={18} fill="currentColor" />
                  </div>
                  <span className="font-bold text-xl text-slate-900 dark:text-white">
                    PassLab
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    최신 수험 트렌드와 합격 노하우를 뉴스레터로 받아보세요.
                </p>
                <div className="mt-6 flex gap-2">
                    <input type="email" placeholder="이메일 주소 입력" className="bg-gray-50 dark:bg-zinc-800 border-none rounded-full px-4 py-3 text-sm flex-1 focus:ring-2 focus:ring-brand-purple outline-none dark:text-white" />
                    <button className="bg-brand-purple text-white rounded-full px-6 py-3 text-sm font-bold">구독하기</button>
                </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6">바로가기</h4>
                    <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                        <li><a href="#" className="hover:text-brand-purple">홈</a></li>
                        <li><a href="#" className="hover:text-brand-purple">주요 기능</a></li>
                        <li><a href="#" className="hover:text-brand-purple">요금제</a></li>
                        <li><a href="#" className="hover:text-brand-purple">문의하기</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6">기타</h4>
                    <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                        <li><a href="#" className="hover:text-brand-purple">서비스 소개</a></li>
                        <li><a href="#" className="hover:text-brand-purple">블로그</a></li>
                        <li><a href="#" className="hover:text-brand-purple">개인정보처리방침</a></li>
                        <li><a href="#" className="hover:text-brand-purple">이용약관</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6">지원</h4>
                    <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                        <li><a href="#" className="hover:text-brand-purple">자주 묻는 질문</a></li>
                        <li><a href="#" className="hover:text-brand-purple">고객센터</a></li>
                        <li><a href="#" className="hover:text-brand-purple">업데이트 로그</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-zinc-800 flex justify-between items-center">
            <div className="text-xs text-gray-400">
                &copy; 2024 Pass Research Lab. All rights reserved.
            </div>
            <div className="flex gap-4">
                 {/* Social Icons would go here */}
            </div>
        </div>

      </div>
    </footer>
  );
};