
import React from 'react';
import { useApp } from '../AppContext';
import { Instagram, Github, Facebook, MessageCircle } from 'lucide-react';

const LogoIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path d="M7 5C7 5 3 6 3 12C3 18 7 19 7 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M17 5C17 5 21 6 21 12C21 18 17 19 17 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M9 15L15 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="9" cy="15" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="9" r="1.5" fill="currentColor"/>
    <circle cx="11.5" cy="11.5" r="1" fill="currentColor" opacity="0.6"/>
  </svg>
);

const Footer: React.FC = () => {
  const { t, theme, language } = useApp();

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
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/llc.bluecode?igsh=MXVxOGtvb2hvOHJydQ==" },
    { icon: Facebook, href: "https://www.facebook.com/share/14Ucgvkwp5J/" },
    { icon: MessageCircle, href: "https://wa.me/905528663998" }
  ];

  const quickLinks = ['home', 'services', 'portfolio', 'about', 'contact'];

  return (
    <footer className={`py-16 ${theme === 'dark' ? 'bg-[#000926] border-t border-white/5' : 'bg-[#D6E6F3] border-t border-blue-200'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-[#0F52BA] flex items-center justify-center transition-transform group-hover:scale-110">
                <LogoIcon size={18} />
              </div>
              <span className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>
                Blue<span className="text-[#0F52BA]">Code</span>
              </span>
            </div>
            <p className={`text-sm leading-relaxed mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 ${theme === 'dark' ? 'bg-white/5 text-slate-300 hover:text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/20' : 'bg-[#0F52BA]/5 text-[#0F52BA] hover:bg-[#0F52BA] hover:text-white shadow-md'}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full md:w-auto">
            <h4 className={`text-sm font-black uppercase tracking-[0.2em] mb-8 ${theme === 'dark' ? 'text-white/50' : 'text-[#000926]/50'}`}>
              {t.footer.links}
            </h4>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-5">
              {quickLinks.map(key => (
                <li key={key} className="group/item">
                  <a 
                    href={`#${key}`} 
                    onClick={(e) => handleNavClick(e, `#${key}`)}
                    className={`relative flex items-center gap-2 text-sm font-bold transition-all duration-500 ease-out 
                      ${language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2'}
                      ${theme === 'dark' ? 'text-slate-400 hover:text-blue-400' : 'text-slate-700 hover:text-[#0F52BA]'}`}
                  >
                    {/* Subtle Dot Indicator */}
                    <span className={`w-1.5 h-1.5 rounded-full bg-[#0F52BA] scale-0 transition-transform duration-500 group-hover/item:scale-100 shadow-[0_0_8px_rgba(15,82,186,0.6)]`} />
                    
                    {(t.nav as any)[key]}
                    
                    {/* Hover Line Effect */}
                    <span className={`absolute bottom-[-4px] left-0 w-0 h-[1px] bg-current transition-all duration-500 group-hover/item:w-full opacity-20`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t ${theme === 'dark' ? 'border-white/5' : 'border-blue-200'} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className="text-xs text-slate-500 font-medium">{t.footer.rights}</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500/60">
            <span>{t.footer.powered}</span>
            <span>{t.footer.est}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
