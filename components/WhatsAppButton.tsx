
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useApp } from '../AppContext';

const WhatsAppButton: React.FC = () => {
  const { language } = useApp();
  
  return (
    <a 
      href="https://wa.me/905528663998" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`fixed bottom-8 ${language === 'ar' ? 'left-8' : 'right-8'} z-50 group flex items-center gap-3`}
    >
      <span className="hidden group-hover:block px-4 py-2 bg-white text-[#0F52BA] rounded-full text-sm font-bold shadow-xl animate-fade-in">
        WhatsApp
      </span>
      <div className="w-14 h-14 bg-[#0F52BA] text-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95">
        <MessageCircle size={28} />
      </div>
    </a>
  );
};

export default WhatsAppButton;
