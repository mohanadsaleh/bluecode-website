
import React, { useState, useEffect } from 'react';
import { useApp } from '../AppContext';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';

const LogoIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-white transition-transform duration-500 group-hover:rotate-12"
  >
    {/* Braces */}
    <path d="M7 5C7 5 3 6 3 12C3 18 7 19 7 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M17 5C17 5 21 6 21 12C21 18 17 19 17 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Inner Connection Links */}
    <path d="M9 15L15 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="9" cy="15" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="9" r="1.5" fill="currentColor"/>
    <circle cx="11.5" cy="11.5" r="1" fill="currentColor" opacity="0.6"/>
  </svg>
);

const Header: React.FC = () => {
  const { t, language, setLanguage, theme, toggleTheme } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b ${
          isScrolled 
            ? theme === 'dark' 
              ? 'glass-dark border-white/5 py-3' 
              : 'glass border-blue-200/50 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0F52BA] flex items-center justify-center shadow-lg shadow-blue-500/20 transition-all duration-500 group-hover:scale-110">
              <LogoIcon size={22} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>
              Blue<span className="text-[#0F52BA]">Code</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-bold transition-colors hover:text-[#0F52BA] ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/5 text-slate-800 hover:bg-black/10'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button 
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/5 text-slate-800 hover:bg-black/10'
              }`}
            >
              <Globe size={16} />
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2.5 bg-[#0F52BA] text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-black/5'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[70] transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#000926]/95' : 'bg-[#D6E6F3]/95'} backdrop-blur-xl`} />
        
        <div className="absolute top-6 right-6 z-[80]">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`p-3 rounded-2xl shadow-xl transition-transform active:scale-90 ${
              theme === 'dark' ? 'bg-white/10 text-white' : 'bg-[#0F52BA] text-white'
            }`}
          >
            <X size={32} />
          </button>
        </div>

        <div className="relative z-[75] h-full flex flex-col justify-center items-center p-8">
          <nav className="flex flex-col gap-8 items-center text-center">
            {navItems.map((item, idx) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-4xl font-black transition-all ${
                  theme === 'dark' ? 'text-white' : 'text-[#000926]'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            
            <div className="w-24 h-1 bg-[#0F52BA]/20 rounded-full my-4" />

            <div className="flex gap-4">
              <button 
                onClick={toggleTheme}
                className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all ${
                  theme === 'dark' ? 'bg-white/10 text-white' : 'bg-[#0F52BA]/10 text-[#0F52BA]'
                }`}
              >
                {theme === 'dark' ? <Sun size={28} /> : <Moon size={28} />}
              </button>
              <button 
                onClick={() => {
                  setLanguage(language === 'en' ? 'ar' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className={`px-8 h-16 rounded-3xl flex items-center gap-3 font-black text-lg transition-all ${
                  theme === 'dark' ? 'bg-white/10 text-white' : 'bg-[#0F52BA]/10 text-[#0F52BA]'
                }`}
              >
                <Globe size={24} />
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>

            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-6 px-12 py-5 bg-[#0F52BA] text-white rounded-3xl font-black text-xl shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
