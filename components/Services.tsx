
import React from 'react';
import { useApp } from '../AppContext';
import { Layout, GraduationCap, Server, Palette, ShieldCheck, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  const { t, theme } = useApp();

  const services = [
    { key: 'web', icon: <Layout size={32} /> },
    { key: 'student', icon: <GraduationCap size={32} /> },
    { key: 'consulting', icon: <Server size={32} /> },
    { key: 'uiux', icon: <Palette size={32} /> },
    { key: 'maintenance', icon: <ShieldCheck size={32} /> },
    { key: 'aiAgents', icon: <Cpu size={32} /> },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>
            {t.services.title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-800'}`}>
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const data = (t.services.items as any)[service.key];
            return (
              <div 
                key={service.key}
                className={`group p-8 rounded-3xl transition-all duration-300 hover:translate-y-[-5px] border ${
                  theme === 'dark' 
                    ? 'glass-dark border-white/5 hover:bg-white/5' 
                    : 'glass border-blue-200/50 hover:bg-white/60'
                }`}
              >
                <div className="w-16 h-16 bg-[#0F52BA]/10 text-[#0F52BA] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>
                  {data.title}
                </h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-800'}`}>
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
