
import React from 'react';
import { AppProvider, useApp } from './AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Code2, Cpu, Globe2, Sparkles, TrendingUp, Users, Terminal, Database, Layers } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { theme, t, language } = useApp();
  
  const techStack = [
    { name: "React / Next.js", icon: <Code2 size={14} /> },
    { name: "Node.js", icon: <Terminal size={14} /> },
    { name: "SQL / NoSQL", icon: <Database size={14} /> },
    { name: "AI Agents", icon: <Cpu size={14} /> },
    { name: "Tailwind", icon: <Layers size={14} /> }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-700 relative ${theme === 'dark' ? 'bg-[#020617] text-white' : 'bg-[#F8FAFC] text-slate-900'}`}>
      <Header />
      
      <main className="relative z-20">
        <Hero />
        
        <Services />
        
        {/* Bento DNA Section - Mobile Optimized */}
        <section id="about" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-6">
            
            <div className="text-center mb-16 md:mb-24 reveal">
              <h2 className={`text-3xl md:text-7xl font-black mb-4 md:mb-8 tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {language === 'ar' ? 'بصمتنا الهندسية' : 'Our Engineering DNA'}
              </h2>
              <p className={`text-base md:text-xl max-w-2xl mx-auto opacity-60 font-medium`}>
                {language === 'ar' 
                  ? 'نحن لا نصمم فقط، بل نهندس حلولاً برمجية معقدة بدقة متناهية.' 
                  : 'We architect complex software systems with mathematical precision and elegant simplicity.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
              
              <div className="md:col-span-8 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bento-card reveal overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity hidden md:block">
                   <Users size={120} className="text-[#0F52BA]" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#0F52BA] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8">
                      {language === 'ar' ? 'القيادة الهندسية' : 'Engineering Vision'}
                    </div>
                    <h3 className="text-2xl md:text-5xl font-black mb-4 md:mb-8 leading-tight">
                      {t.about.title}
                    </h3>
                    <p className="text-sm md:text-xl opacity-70 leading-relaxed font-medium max-w-2xl">
                      {t.about.content}
                    </p>
                  </div>
                  <div className="mt-8 md:mt-16 flex flex-wrap gap-2 md:gap-4">
                    {techStack.map((tech, i) => (
                      <span key={i} className={`flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold border transition-colors ${
                        theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800'
                      }`}>
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bento-card flex flex-col items-center text-center justify-center reveal relative overflow-hidden group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600/10 text-[#0F52BA] rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-6 md:mb-8 shadow-inner">
                  <TrendingUp size={36} />
                </div>
                <h4 className="text-xl md:text-3xl font-black mb-2">{language === 'ar' ? 'أداء فائق' : 'Extreme Speed'}</h4>
                <p className="text-[10px] opacity-50 font-bold uppercase tracking-widest">
                  {language === 'ar' ? 'حلول محسنة 100%' : '100% Core Web Vitals'}
                </p>
              </div>

              <div className="md:col-span-5 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bento-card reveal group relative overflow-hidden">
                <Sparkles className="absolute -bottom-4 -right-4 text-blue-500/10 group-hover:scale-125 transition-transform hidden md:block" size={120} />
                <h4 className="text-xl md:text-2xl font-black mb-4 flex items-center gap-3">
                  <Globe2 className="text-blue-500" />
                  {language === 'ar' ? 'ابتكار مستمر' : 'Innovation'}
                </h4>
                <p className="text-sm md:text-lg opacity-60 leading-relaxed">
                  {language === 'ar' 
                    ? 'نواكب أحدث التطورات في الذكاء الاصطناعي وهندسة البيانات لخدمة رؤيتك.' 
                    : 'Leveraging next-gen AI and data engineering to power your business growth.'}
                </p>
              </div>

              <div className="md:col-span-7 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bento-card reveal flex items-center justify-between group">
                <div className="max-w-md">
                  <h4 className="text-xl md:text-3xl font-black mb-2 md:mb-4">
                    {language === 'ar' ? 'جودة برمجية لا تضاهى' : 'Unrivaled Code Quality'}
                  </h4>
                  <p className="text-sm md:text-lg opacity-60">
                    {language === 'ar' ? 'نكتب أكواداً تعيش طويلاً وتتوسع مع نمو أعمالك.' : 'Writing clean, scalable code architecture that evolves with you.'}
                  </p>
                </div>
                <div className="hidden lg:flex w-24 h-24 rounded-full border-4 border-[#0F52BA]/20 items-center justify-center text-4xl font-black text-[#0F52BA]">
                   A+
                </div>
              </div>

            </div>
          </div>
        </section>

        <Portfolio />
        
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
};

export default App;
