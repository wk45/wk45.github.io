import React, { useEffect, useState } from 'react';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';

interface NavbarProps {
    onStart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme: 'light' | 'dark' = 'light';
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (systemPrefersDark) {
      initialTheme = 'dark';
    }

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Scroll Handler for Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const sections = ['home', 'features', 'details', 'pricing'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px', // Trigger when section is near the middle/top
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: '홈' },
    { id: 'features', label: '주요 기능' },
    { id: 'details', label: '소개' },
    { id: 'pricing', label: '요금제' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md py-4 border-b border-gray-100 dark:border-zinc-800'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => scrollToSection(e as any, 'home')}>
          <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            Pass<span className="text-brand-purple">Lab</span>
          </span>
        </div>

        {/* Center Menu (Pill) */}
        <div className="hidden md:flex items-center bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700 rounded-full px-6 py-2 gap-8 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-brand-purple font-bold'
                  : 'text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
                onClick={onStart}
                className="px-6 py-2.5 rounded-full bg-brand-purple hover:bg-purple-700 text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/30"
            >
                시작하기
            </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
          >
             {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-slate-900 dark:text-white" /> : <Menu className="text-slate-900 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 p-6 flex flex-col gap-6 shadow-xl h-screen">
           {navLinks.map((link) => (
             <a
               key={link.id}
               href={`#${link.id}`}
               onClick={(e) => scrollToSection(e, link.id)}
               className={`text-lg font-medium ${
                 activeSection === link.id
                   ? 'text-brand-purple'
                   : 'text-slate-900 dark:text-white'
               }`}
             >
               {link.label}
             </a>
           ))}
           <button 
                onClick={() => { setIsMobileMenuOpen(false); onStart(); }}
                className="w-full py-3 rounded-full bg-brand-purple text-white font-bold mt-4"
           >
            시작하기
          </button>
        </div>
      )}
    </nav>
  );
};