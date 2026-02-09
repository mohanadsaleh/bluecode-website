
import React, { useState } from 'react';
import { useApp } from '../AppContext';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, ChevronDown } from 'lucide-react';

const ContactForm: React.FC = () => {
  const { t, theme, language } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const serviceOptions = [
    { value: 'web', label: t.services.items.web.title },
    { value: 'student', label: t.services.items.student.title },
    { value: 'consulting', label: t.services.items.consulting.title },
    { value: 'uiux', label: t.services.items.uiux.title },
    { value: 'maintenance', label: t.services.items.maintenance.title },
    { value: 'aiAgents', label: t.services.items.aiAgents.title },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>
              {t.contact.title}
            </h2>
            
            <div className="space-y-6 mt-12">
              {[
                { icon: <Phone />, label: t.contact.info.call, value: '+90 552 866 39 98', href: 'tel:+905528663998' },
                { icon: <Mail />, label: t.contact.info.email, value: 'llc.bluecode@gmail.com', href: 'mailto:llc.bluecode@gmail.com' },
                { icon: <MessageSquare />, label: t.contact.info.whatsapp, value: '+90 552 866 39 98', href: 'https://wa.me/905528663998' }
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  className={`flex items-center gap-6 p-6 rounded-3xl border transition-all hover:translate-x-2 ${theme === 'dark' ? 'glass-dark border-white/5 hover:bg-white/5' : 'glass border-blue-200 hover:bg-white/60'}`}
                >
                  <div className="w-12 h-12 bg-[#0F52BA]/10 text-[#0F52BA] rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider opacity-60 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.label}</p>
                    <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={`p-8 md:p-12 rounded-[2.5rem] border ${theme === 'dark' ? 'glass-dark border-white/10' : 'bg-[#D6E6F3] border-blue-200 shadow-xl shadow-blue-500/5'}`}>
            {isSuccess ? (
              <div className="text-center py-12 animate-fade-in">
                <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>{t.contact.form.success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{t.contact.form.name}</label>
                    <input type="text" required placeholder={t.contact.form.name} className={`w-full px-5 py-4 rounded-2xl outline-none transition-all shadow-sm ${theme === 'dark' ? 'bg-white/5 border border-white/10 text-white focus:border-blue-500' : 'bg-white border-transparent text-[#000926] focus:ring-2 focus:ring-[#0F52BA]/20'}`} />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{t.contact.form.email}</label>
                    <input type="email" required placeholder={t.contact.form.email} className={`w-full px-5 py-4 rounded-2xl outline-none transition-all shadow-sm ${theme === 'dark' ? 'bg-white/5 border border-white/10 text-white focus:border-blue-500' : 'bg-white border-transparent text-[#000926] focus:ring-2 focus:ring-[#0F52BA]/20'}`} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{t.contact.form.phone}</label>
                    <input type="tel" placeholder={t.contact.form.phone} className={`w-full px-5 py-4 rounded-2xl outline-none transition-all shadow-sm ${theme === 'dark' ? 'bg-white/5 border border-white/10 text-white focus:border-blue-500' : 'bg-white border-transparent text-[#000926] focus:ring-2 focus:ring-[#0F52BA]/20'}`} />
                  </div>
                  <div className="space-y-2 relative">
                    <label className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{t.contact.form.service}</label>
                    <div className="relative">
                      <select 
                        required 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className={`w-full px-5 py-4 rounded-2xl outline-none transition-all shadow-sm appearance-none cursor-pointer ${
                          theme === 'dark' 
                            ? 'bg-[#000926] border border-white/10 text-white focus:border-blue-500' 
                            : 'bg-white border-transparent text-[#000926] focus:ring-2 focus:ring-[#0F52BA]/20'
                        }`}
                      >
                        <option value="" disabled>{t.contact.form.service}</option>
                        {serviceOptions.map(option => (
                          <option key={option.value} value={option.value} className={theme === 'dark' ? 'bg-[#000926] text-white' : 'bg-white text-[#000926]'}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className={`absolute inset-y-0 ${language === 'ar' ? 'left-4' : 'right-4'} flex items-center pointer-events-none opacity-50`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{t.contact.form.message}</label>
                  <textarea rows={4} required placeholder={t.contact.form.message} className={`w-full px-5 py-4 rounded-2xl outline-none transition-all shadow-sm resize-none ${theme === 'dark' ? 'bg-white/5 border border-white/10 text-white focus:border-blue-500' : 'bg-white border-transparent text-[#000926] focus:ring-2 focus:ring-[#0F52BA]/20'}`}></textarea>
                </div>

                {/* Enhanced Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="group relative w-full py-5 bg-[#0F52BA] text-white rounded-2xl font-black text-lg overflow-hidden transition-all duration-500 ease-out hover:bg-white hover:text-[#000926] shadow-[0_10px_30px_-10px_rgba(15,82,186,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(15,82,186,0.3)] disabled:opacity-50 active:scale-[0.97] flex items-center justify-center gap-3"
                >
                  <span className="relative z-10 transition-colors duration-500">
                    {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                  </span>
                  
                  <div className={`relative z-10 transition-all duration-500 group-hover:scale-110 
                    ${language === 'ar' ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} 
                    group-hover:-translate-y-1`}
                  >
                    <Send size={22} className={language === 'ar' ? 'rotate-180' : ''} />
                  </div>

                  {/* Subtle Background Glow Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-blue-400 to-[#0F52BA]" />
                </button>

                <p className={`text-[10px] text-center opacity-50 mt-4 ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>
                  {t.contact.form.protection}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
