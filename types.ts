
export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface TranslationStrings {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
    stats: {
      solutions: string;
      support: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      web: { title: string; desc: string };
      student: { title: string; desc: string };
      consulting: { title: string; desc: string };
      uiux: { title: string; desc: string };
      maintenance: { title: string; desc: string };
      aiAgents: { title: string; desc: string };
    };
  };
  portfolio: {
    title: string;
    filters: {
      all: string;
      web: string;
      student: string;
      consulting: string;
      uiux: string;
    };
    caseStudy: string;
  };
  process: {
    title: string;
    steps: {
      discovery: { title: string; desc: string };
      design: { title: string; desc: string };
      build: { title: string; desc: string };
      launch: { title: string; desc: string };
    };
  };
  about: {
    title: string;
    content: string;
    founders: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      phone: string;
      service: string;
      budget: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      protection: string;
    };
    info: {
      call: string;
      email: string;
      whatsapp: string;
    };
  };
  faq: {
    title: string;
    q1: { q: string; a: string };
    q2: { q: string; a: string };
    q3: { q: string; a: string };
  };
  footer: {
    rights: string;
    links: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    powered: string;
    est: string;
    description: string;
  };
}
