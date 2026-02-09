
import React, { useState, useEffect } from 'react';
import { useApp } from '../AppContext';
import { ChevronRight, Sparkles, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, theme, language } = useApp();
  const isAr = language === 'ar';
  const [displayText, setDisplayText] = useState('');
  
  const fullText = t.hero.title;

  useEffect(() => {
    let current = 0;
    setDisplayText('');
    const timer = setInterval(() => {
      if (current <= fullText.length) {
        setDisplayText(fullText.substring(0, current));
        current++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [fullText, language]);

  return (
    <section id="home" className={`relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-20 overflow-hidden transition-colors duration-700 ${theme === 'dark' ? 'bg-[#020617]' : 'bg-white'}`}>
      
      {/* Background Glow */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none transition-all duration-1000 ${
        isAr ? '-right-20' : '-left-20'
      } ${theme === 'dark' ? 'bg-[#0F52BA]' : 'bg-blue-200'}`}></div>

      <div className="container mx-auto relative z-10">
        {/* Main Content Wrapper - Uses logical start alignment */}
        <div className={`flex flex-col items-start text-start max-w-4xl`}>
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 reveal shadow-sm ${
            theme === 'dark' 
              ? 'bg-blue-500/5 border-white/5 text-blue-400' 
              : 'bg-slate-50 border-slate-200 text-slate-500'
          }`}>
            <Sparkles size={12} className="text-blue-500" />
            <span className="text-[10px] font-black tracking-widest uppercase">{t.hero.badge}</span>
          </div>

          {/* Heading */}
          <h1 className={`hero-title text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] reveal min-h-[1.2em] ${
            theme === 'dark' ? 'text-white' : 'text-[#000926]'
          }`}>
            <span className="relative">
              {displayText}
              <span className="inline-block w-[2px] md:w-[4px] h-[0.8em] bg-[#0F52BA] mx-1 animate-pulse align-middle glow-blue"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl mb-12 max-w-2xl font-medium leading-relaxed reveal opacity-60 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t.hero.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 reveal w-full justify-start">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-[#0F52BA] text-white rounded-xl font-bold text-base hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
            >
              {t.hero.ctaPrimary}
              <ChevronRight size={18} className={`transition-transform ${isAr ? 'rotate-180' : ''}`} />
            </a>
            
            <a 
              href="#portfolio" 
              className={`px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:scale-105 flex items-center gap-2 ${
                theme === 'dark' 
                  ? 'text-white border-white/10 bg-white/5 hover:bg-white/10' 
                  : 'text-slate-900 border-slate-200 bg-white hover:border-blue-100'
              }`}
            >
              <ExternalLink size={18} />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Stats Section - Fixed to always use start-aligned flex container */}
        <div className={`mt-24 pt-10 border-t flex gap-8 md:gap-16 reveal justify-start border-slate-500/10`}>
          <div className="text-start">
            <div className={`text-3xl md:text-5xl font-black mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>24/7</div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">{t.hero.stats.support}</div>
          </div>
          <div className="w-px h-12 bg-slate-500/20"></div>
          <div className="text-start">
            <div className={`text-3xl md:text-5xl font-black mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>+100</div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">{t.hero.stats.solutions}</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
