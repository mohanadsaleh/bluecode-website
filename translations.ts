
import { TranslationStrings } from './types';

export const translations: Record<'en' | 'ar', TranslationStrings> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      cta: 'Get a Quote',
    },
    hero: {
      title: 'Crafting the Future of Digital Excellence.',
      subtitle: 'Premium software engineering and high-end digital solutions launched in 2026. We bridge the gap between complex engineering and elegant design.',
      ctaPrimary: 'Start a Project',
      ctaSecondary: 'View Our Work',
      badge: 'Launched by Visionary Engineers',
      stats: {
        solutions: 'Solutions',
        support: 'Support',
      },
    },
    services: {
      title: 'Our Expertise',
      subtitle: 'Comprehensive digital solutions tailored for your growth.',
      items: {
        web: { title: 'Web Development', desc: 'From enterprise-scale corporate sites to high-converting e-commerce platforms.' },
        student: { title: 'Student Solutions', desc: 'Expert guidance on graduation projects, technical consultations, and academic support.' },
        consulting: { title: 'Tech Consulting', desc: 'Security audits, performance optimization, and technical infrastructure by certified engineers.' },
        uiux: { title: 'UI/UX Design', desc: 'Creating intuitive, premium experiences that prioritize usability and brand identity.' },
        maintenance: { title: 'Maintenance', desc: 'Reliable 24/7 support, security patches, and periodic feature updates.' },
        aiAgents: { title: 'AI Agent Building & Task Automation', desc: 'Building AI agents and automating daily tasks using Artificial Intelligence solutions.' },
      },
    },
    portfolio: {
      title: 'Featured Projects',
      filters: {
        all: 'All Work',
        web: 'Web',
        student: 'Student',
        consulting: 'Consulting',
        uiux: 'UI/UX',
      },
      caseStudy: 'Project View',
    },
    process: {
      title: 'Our Method',
      steps: {
        discovery: { title: 'Discovery', desc: 'Deep diving into your goals and technical requirements.' },
        design: { title: 'Design', desc: 'Prototyping high-fidelity visual and structural blueprints.' },
        build: { title: 'Build', desc: 'Agile development with clean, scalable, and secure code.' },
        launch: { title: 'Launch', desc: 'Deploying with precision followed by dedicated support.' },
      },
    },
    about: {
      title: 'About Blue Code',
      content: 'Founded in 2026 by a Software Engineer and a Computer Engineer, Blue Code represents the intersection of technical rigor and creative innovation. We don\'t just build software; we architect digital legacies.',
      founders: 'Engineering Led since 2026',
    },
    contact: {
      title: 'Let\'s Create Something Great',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone (Optional)',
        service: 'Service Type',
        budget: 'Budget Range',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Processing...',
        success: 'Message sent successfully! We will contact you shortly.',
        protection: 'Protected by secure enterprise validation. Your data is never shared.',
      },
      info: {
        call: 'Call Us',
        email: 'Email Us',
        whatsapp: 'WhatsApp',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: { q: 'What is your typical project timeline?', a: 'Timelines vary by scope. Landing pages can take 2 weeks, while complex platforms may require 2-3 months.' },
      q2: { q: 'Do you offer fixed pricing?', a: 'We believe in flexible packages tailored to each project\'s specific needs and complexity.' },
      q3: { q: 'Can you help with student graduation projects?', a: 'Yes, we provide full technical support, coding, and consultations for academic engineering projects.' },
    },
    footer: {
      rights: '© 2026 Blue Code. All rights reserved.',
      links: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Settings',
      powered: 'Powered by Vision',
      est: 'Est. 2026',
      description: 'Premier engineering-led digital solutions. Transforming ideas into world-class software since 2026.'
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      about: 'من نحن',
      contact: 'اتصل بنا',
      cta: 'احصل على عرض سعر',
    },
    hero: {
      title: 'نصنع مستقبل التميز الرقمي.',
      subtitle: 'هندسة برمجيات متميزة وحلول رقمية راقية انطلقت في عام 2026. نسد الفجوة بين الهندسة المعقدة والتصميم الأنيق.',
      ctaPrimary: 'ابدأ مشروعك',
      ctaSecondary: 'شاهد أعمالنا',
      badge: 'بقيادة مهندسين طموحين',
      stats: {
        solutions: 'حلول رقمية',
        support: 'دعم فني',
      },
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول رقمية شاملة مصممة لنمو أعمالك.',
      items: {
        web: { title: 'تطوير المواقع', desc: 'من المواقع المؤسسية الكبرى إلى منصات التجارة الإلكترونية عالية التحويل.' },
        student: { title: 'خدمات الطلاب', desc: 'توجيه خبير في مشاريع التخرج، الاستشارات التقنية، والدعم الأكاديمي.' },
        consulting: { title: 'الاستشارات التقنية', desc: 'تدقيق الأمان، تحسين الأداء، وتطوير البنية التحتية من قبل مهندسين معتمدين.' },
        uiux: { title: 'تصميم واجهة المستخدم', desc: 'إنشاء تجارب بديهية وراقية تعطي الأولوية لسهولة الاستخدام وهوية العلامة التجارية.' },
        maintenance: { title: 'الصيانة', desc: 'دعم موثوق على مدار الساعة، تحديثات الأمان، وتحديثات الميزات الدورية.' },
        aiAgents: { title: 'بناء وكلاء الذكاء الاصطناعي واتمته المهام اليوميه بالذكاء الاصطناعي', desc: 'تطوير وكلاء ذكاء اصطناعي مخصصين وأتمتة المهام اليومية باستخدام حلول الذكاء الاصطناعي المتقدمة لزيادة الإنتاجية.' },
      },
    },
    portfolio: {
      title: 'أبرز المشاريع',
      filters: {
        all: 'الكل',
        web: 'ويب',
        student: 'طلاب',
        consulting: 'استشارات',
        uiux: 'تصميم',
      },
      caseStudy: 'عرض المشروع',
    },
    process: {
      title: 'منهجيتنا',
      steps: {
        discovery: { title: 'الاكتشاف', desc: 'الغوص العميق في أهدافك ومتطلباتك التقنية.' },
        design: { title: 'التصميم', desc: 'بناء نماذج أولية عالية الدقة للمخططات البصرية والهيكلية.' },
        build: { title: 'البناء', desc: 'تطوير رشيق بأكواد نظيفة، قابلة للتطوير، وآمنة.' },
        launch: { title: 'الإطلاق', desc: 'النشر بدقة متناهية متبوعاً بدعم فني مخصص.' },
      },
    },
    about: {
      title: 'حول بلو كود',
      content: 'تأسست بلو كود في عام 2026 من قبل مهندس برمجيات ومهندس حاسوب، وهي تمثل نقطة التقاء الدقة التقنية والابتكار الإبداعي. نحن لا نبني برامج فقط؛ بل نصمم إرثاً رقمياً.',
      founders: 'بقيادة هندسية منذ 2026',
    },
    contact: {
      title: 'لنصنع شيئاً رائعاً معاً',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف (اختياري)',
        service: 'نوع الخدمة',
        budget: 'ميزانية المشروع',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
        sending: 'جاري المعالجة...',
        success: 'تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.',
        protection: 'محمي بواسطة تحقق مؤسسي آمن. لا يتم مشاركة بياناتك أبداً.',
      },
      info: {
        call: 'اتصل بنا',
        email: 'راسلنا',
        whatsapp: 'واتساب',
      },
    },
    faq: {
      title: 'الأسئلة الشائعة',
      q1: { q: 'ما هو الجدول الزمني النموذجي للمشروع؟', a: 'تختلف الجداول الزمنية حسب النطاق. قد تستغرق صفحات الهبوط أسبوعين، بينما تتطلب المنصات المعقدة 2-3 أشهر.' },
      q2: { q: 'هل تقدمون أسعاراً ثابتة؟', a: 'نؤمن بتقديم حزم مرنة مصممة خصيصاً لاحتياجات كل مشروع وتعقيده.' },
      q3: { q: 'هل يمكنكم المساعدة في مشاريع تخرج الطلاب؟', a: 'نعم، نقدم دعماً تقنياً كامل، برمجة، واستشارات للمشاريع الهندسية الأكاديمية.' },
    },
    footer: {
      rights: '© 2026 بلو كود. جميع الحقوق محفوظة.',
      links: 'روابط سريعة',
      legal: 'قانوني',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookies: 'إعدادات الكوكيز',
      powered: 'بدعم من الرؤية',
      est: 'تأسست 2026',
      description: 'حلول رقمية رائدة بقيادة هندسية. تحويل الأفكار إلى برمجيات عالمية المستوى منذ عام 2026.'
    },
  },
};
