import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useApp } from '../AppContext';
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink, ZoomIn, Loader2 } from 'lucide-react';

type ProjectType = 'web' | 'student' | 'consulting' | 'uiux';

interface Project {
  id: number;
  title: string;
  client: string;
  type: ProjectType;
  image: string;           // base name WITHOUT -thumb/-full and WITHOUT extension (we will map)
  gallery: string[];       // base names same rule
  description: string;
  tags: string[];
  fallbackImage: string;
  url?: string;
}

const Portfolio: React.FC = () => {
  const { t, theme, language } = useApp();
  const [filter, setFilter] = useState<'all' | ProjectType>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isImgLoading, setIsImgLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Base URL for local images
  const getAssetUrl = (name: string) => {
    if (!name) return '';
    if (name.startsWith('http') || name.startsWith('/')) return name;
    return `/images/${name}`;
  };

  /**
   * Convert a base name to thumb/full webp path.
   * Example base: "FM_HOME" => "/images/FM_HOME-thumb.webp"
   */
  const getProjectImage = (baseName: string, size: 'thumb' | 'full') => {
    if (!baseName) return '';
    // if it's already a URL/path, return as-is (for safety)
    if (baseName.startsWith('http') || baseName.startsWith('/')) return baseName;
    return getAssetUrl(`${baseName}-${size}.webp`);
  };

  // Preload helper
  const preloadImage = useCallback((url: string) => {
    if (!url) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
  }, []);

  // IMPORTANT: Now we store base names only (no extension)
  const projects: Project[] = [
    {
      id: 1,
      title: language === 'ar' ? 'متجر Flare Mug' : 'Flare Mug E-commerce',
      client: 'Flare Mug Studio',
      type: 'web',
      image: 'FM_PRODUCT',
      gallery: ['FM_HOME', 'FM_CART', 'FM_CART_DETAL', 'FM_ODEME'],
      fallbackImage: 'https://images.unsplash.com/photo-1556742049-13e73ce3a789?q=80&w=1200&auto=format&fit=crop',
      description: language === 'ar'
        ? 'تجربة تسوق رقمية فاخرة للأكواب المصنوعة يدوياً مع واجهة دفع سريعة.'
        : 'A luxury digital shopping experience for handcrafted mugs.',
      tags: ['E-commerce', 'Next.js', 'React', 'Node.js'],
    },
    {
      id: 3,
      title: language === 'ar' ? 'موقع تعريفي شخصي' : 'Personal Brand Portfolio',
      client: 'Mohanad Code',
      type: 'web',
      image: 'MD_HOME',
      url: 'https://mohanad-code.netlify.app/',
      gallery: ['MD_HOME', 'MC_ED', 'MC_SER_dARK', 'MC_SERVICE', 'MC_CONCAT'],
      fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      description: language === 'ar'
        ? 'برمجة مواقع تعريفية متطورة تمكن الأفراد من عرض خدماتهم والتعريف بأنفسهم بطريقة ذكية وجذابة.'
        : 'Developing sophisticated personal portfolio websites for individuals to showcase their services intelligently.',
      tags: ['Personal Brand', 'UI/UX'],
    },
    {
      id: 2,
      title: language === 'ar' ? 'خدمات ومشاريع الطلاب' : 'Student Academic Services',
      client: 'Academic Support',
      type: 'student',
      image: 'Student',
      gallery: ['Student'],
      fallbackImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      description: language === 'ar'
        ? 'تقديم كافة الخدمات والاستشارات التقنية وعمل المشاريع الطلابية بسرعة وكفاءة عالية لمساعدة الطلاب ورفع كفاءتهم الأكاديمية.'
        : 'Providing comprehensive technical services, consultations, and student projects with high efficiency.',
      tags: ['Academic', 'Projects'],
    },
    {
      id: 4,
      title: language === 'ar' ? 'استشارات وحلول تقنية للأعمال' : 'Business Tech Consulting',
      client: 'Business Solutions',
      type: 'consulting',
      image: 'business-meeting-over-coffee',
      gallery: ['business-meeting-over-coffee'],
      fallbackImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
      description: language === 'ar'
        ? 'تقديم استشارات وحلول تقنية متكاملة تهدف إلى رفع المبيعات وتحسين جودة العمل وتسهيله.'
        : 'Providing integrated technical consulting and solutions aimed at increasing sales and improving work quality.',
      tags: ['Consulting', 'Sales Boost'],
    },
    {
      id: 5,
      title: language === 'ar' ? 'تصميم واجهات المستخدم' : 'UI/UX Design',
      client: 'Creative Vision',
      type: 'uiux',
      image: 'ds_home',
      gallery: ['ds_home', 'ds_upload', 'setting'],
      fallbackImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1200&auto=format&fit=crop',
      description: language === 'ar'
        ? 'تصميم واجهات مبدئية لشكل المواقع بما يتناسب مع متطلبات العميل ولضمان سهولة الاستخدام.'
        : 'Designing initial interfaces for websites tailored to client requirements.',
      tags: ['UI/UX', 'Visual Design'],
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter);

  // SmartImage now supports thumb/full and loading strategy
  const SmartImage = ({
    srcBase,
    size = 'thumb',
    fallback,
    alt,
    className,
    onClick,
    loading = 'lazy',
  }: {
    srcBase: string;
    size?: 'thumb' | 'full';
    fallback: string;
    alt: string;
    className: string;
    onClick?: () => void;
    loading?: 'lazy' | 'eager';
  }) => {
    const [imgSrc, setImgSrc] = useState<string>('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const url = getProjectImage(srcBase, size);
      setImgSrc(url);
      setIsLoaded(false);
    }, [srcBase, size]);

    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`} onClick={onClick}>
        {!isLoaded && <div className="absolute inset-0 bg-slate-800 animate-pulse" />}
        <img
          src={imgSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          onError={() => setImgSrc(fallback)}
          onLoad={() => setIsLoaded(true)}
          loading={loading}
          decoding="async"
        />
      </div>
    );
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.7;
    container.scrollTo({
      left: direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!activeProject || lightboxIndex === null) return;
    setIsImgLoading(true);

    const gallery = activeProject.gallery;
    if (direction === 'prev') {
      setLightboxIndex(lightboxIndex === 0 ? gallery.length - 1 : lightboxIndex - 1);
    } else {
      setLightboxIndex(lightboxIndex === gallery.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  // ✅ Prefetch next/prev FULL images whenever lightboxIndex changes
  useEffect(() => {
    if (!activeProject || lightboxIndex === null) return;

    const g = activeProject.gallery;
    if (!g.length) return;

    const nextIndex = (lightboxIndex + 1) % g.length;
    const prevIndex = (lightboxIndex - 1 + g.length) % g.length;

    const nextUrl = getProjectImage(g[nextIndex], 'full');
    const prevUrl = getProjectImage(g[prevIndex], 'full');

    preloadImage(nextUrl);
    preloadImage(prevUrl);
  }, [activeProject, lightboxIndex, preloadImage]);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="reveal">
            <h2 className={`text-3xl md:text-5xl font-black mb-4 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>
              {t.portfolio.title}
            </h2>
            <p className="opacity-50 font-medium max-w-xl text-sm md:text-base">
              {language === 'ar'
                ? 'معرض لأحدث أعمالنا التي تجمع بين القوة الهندسية والجمال البصري.'
                : 'A showcase of our latest works combining engineering power and visual aesthetics.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 reveal">
            {(['all', 'web', 'student', 'consulting', 'uiux'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-xl text-[10px] md:text-xs font-black transition-all uppercase tracking-widest ${
                  filter === key
                    ? 'bg-[#0F52BA] text-white shadow-lg shadow-blue-500/30'
                    : theme === 'dark'
                      ? 'bg-white/5 text-slate-400 hover:bg-white/10'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
                }`}
              >
                {(t.portfolio.filters as any)[key]}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              onMouseEnter={() => {
                // Optional: prefetch first FULL image on hover for super fast open
                if (project.gallery?.[0]) {
                  preloadImage(getProjectImage(project.gallery[0], 'full'));
                }
              }}
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] cursor-pointer bento-card border-0 reveal bg-slate-900/10 shadow-xl"
            >
              <SmartImage
                srcBase={project.image}
                size="thumb"
                fallback={project.fallbackImage}
                alt={project.title}
                className="w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000926] via-[#000926]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-10">
                <h3 className="text-lg font-black text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">
                    {t.portfolio.caseStudy}
                  </span>
                  <Maximize2 size={12} className="text-blue-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-[#020617]/98 backdrop-blur-2xl animate-fade-in"
            onClick={() => setActiveProject(null)}
          />

          <div className={`relative w-full max-w-5xl h-full md:h-auto md:max-h-[85vh] md:rounded-[2.5rem] overflow-hidden flex flex-col border-0 shadow-2xl animate-scale-up ${theme === 'dark' ? 'bg-[#000926]' : 'bg-white'}`}>
            <div className={`flex items-center justify-between p-6 md:p-8 border-b shrink-0 ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
              <div>
                <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-1 block">
                  {activeProject.client}
                </span>
                <h3 className={`text-xl md:text-2xl font-black ${theme === 'dark' ? 'text-white' : 'text-[#000926]'}`}>
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-500/10 hover:bg-red-500/20 hover:text-red-500 flex items-center justify-center transition-all group"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <p className={`text-sm md:text-lg mb-8 opacity-70 font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>
                {activeProject.description}
              </p>

              {/* Gallery Thumbs inside modal */}
              <div className="relative group/gallery-section mb-8">
                {activeProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => scrollGallery('left')}
                      className={`absolute ${language === 'ar' ? 'right-2' : 'left-2'} top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-all opacity-0 group-hover/gallery-section:opacity-100 shadow-lg`}
                    >
                      <ChevronLeft size={20} className={language === 'ar' ? 'rotate-180' : ''} />
                    </button>
                    <button
                      onClick={() => scrollGallery('right')}
                      className={`absolute ${language === 'ar' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-all opacity-0 group-hover/gallery-section:opacity-100 shadow-lg`}
                    >
                      <ChevronRight size={20} className={language === 'ar' ? 'rotate-180' : ''} />
                    </button>
                  </>
                )}

                <div
                  ref={scrollRef}
                  className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
                >
                  {activeProject.gallery.map((imgBase, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setIsImgLoading(true); setLightboxIndex(idx); }}
                      onMouseEnter={() => preloadImage(getProjectImage(imgBase, 'full'))}
                      className="min-w-[90%] md:min-w-[60%] aspect-video rounded-2xl overflow-hidden snap-center bg-slate-900/10 relative group/img cursor-zoom-in border border-white/5"
                    >
                      <SmartImage
                        srcBase={imgBase}
                        size="thumb"
                        fallback={activeProject.fallbackImage}
                        alt={`${activeProject.title} ${idx}`}
                        className="w-full h-full"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn size={32} className="text-white drop-shadow-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-between items-center border-t pt-6 border-slate-500/10">
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-blue-500/5 text-blue-500 text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {activeProject.url && (
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#0F52BA] text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                  >
                    <ExternalLink size={16} />
                    {language === 'ar' ? 'معاينة الموقع' : 'Visit Site'}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && activeProject && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/98 animate-fade-in overflow-hidden">

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className={`absolute ${language === 'ar' ? 'right-4 md:right-12' : 'left-4 md:left-12'} top-1/2 -translate-y-1/2 z-[100005] w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-blue-600 transition-all border border-white/10 shadow-2xl active:scale-90`}
          >
            <ChevronLeft size={32} className={language === 'ar' ? 'rotate-180' : ''} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className={`absolute ${language === 'ar' ? 'left-4 md:left-12' : 'right-4 md:right-12'} top-1/2 -translate-y-1/2 z-[100005] w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-blue-600 transition-all border border-white/10 shadow-2xl active:scale-90`}
          >
            <ChevronRight size={32} className={language === 'ar' ? 'rotate-180' : ''} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-8 md:p-24" onClick={() => setLightboxIndex(null)}>
            <div className="relative max-w-full max-h-full flex items-center justify-center">
              {isImgLoading && (
                <div className="absolute flex flex-col items-center gap-4 text-white/20">
                  <Loader2 size={48} className="animate-spin" />
                </div>
              )}

              {!isImgLoading && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
                  className="absolute -top-3 -right-3 md:-top-5 md:-right-5 z-[100010] w-10 h-10 md:w-14 md:h-14 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-all border-2 border-white/40 shadow-[0_0_25px_rgba(220,38,38,0.6)] active:scale-90 animate-fade-in"
                >
                  <X size={28} />
                </button>
              )}

              <img
                src={getProjectImage(activeProject.gallery[lightboxIndex], 'full')}
                alt="Expanded project view"
                className={`max-w-full max-h-[70vh] object-contain shadow-[0_0_100px_rgba(0,0,0,0.8)] rounded-xl transition-all duration-500 border border-white/10 ${isImgLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                onError={(e) => { (e.target as HTMLImageElement).src = activeProject.fallbackImage; setIsImgLoading(false); }}
                onLoad={() => setIsImgLoading(false)}
                onClick={(e) => e.stopPropagation()}
                decoding="async"
                fetchpriority="high"
              />

              {!isImgLoading && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 whitespace-nowrap animate-fade-in">
                  <span className="text-white/40 text-[10px] font-black tracking-[0.4em] uppercase">
                    {lightboxIndex + 1} / {activeProject.gallery.length}
                  </span>
                  <span className="text-white/80 text-xs font-bold">{activeProject.title}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(15, 82, 186, 0.4); border-radius: 10px; }

        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Portfolio;