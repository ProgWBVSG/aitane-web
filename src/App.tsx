import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Bot, ArrowRight, CheckCircle, Globe,
  Menu, X, Network, Code2, Search, Zap
} from 'lucide-react';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  en: {
    nav: {
      webDev:    'Web Dev',
      aiAuto:    'AI Automation',
      seo:       'SEO',
      projects:  'Projects',
      cta:       'Start Project',
    },
    hero: {
      badge:       'Next-Gen Digital Agency',
      titleLine1:  'Build Systems That',
      titleLine2:  'Generate Clients',
      description: 'We engineer high-performance websites, intelligent AI automations, and SEO-optimized digital systems that work for your business around the clock.',
      cta1:        'Start a Project',
      cta2:        'Explore Services',
    },
    logos: {
      label: 'Powered by world-class tools',
    },
    services: {
      title:    'What We Build',
      subtitle: 'End-to-end digital systems engineered for results',
      webDev: {
        title: 'Web Development',
        desc:  'Lightning-fast Next.js sites and web apps designed for performance, conversion, and long-term scalability.',
      },
      ai: {
        title: 'AI Automations',
        desc:  'Smart workflows with n8n, Make, and custom GPT agents that eliminate repetitive work and reduce operational costs.',
      },
      seo: {
        title: 'SEO Systems',
        desc:  'Technical SEO and content strategy that compounds over time—driving qualified organic traffic 24/7.',
      },
      integrations: {
        title: 'Integrations & APIs',
        desc:  'Connect your stack. We build seamless integrations between CRMs, ERPs, and any third-party service.',
      },
    },
    about: {
      title:       'Why Agencies Choose AITANE',
      subtitle:    'We build automation systems that actually work',
      description: 'AITANE combines deep technical expertise in web engineering, AI, and SEO to deliver digital systems that run on autopilot. Every solution is built to measure, scale, and compound over time.',
      feature1:    'Reduce operational costs by 40%+',
      feature2:    'Scale without hiring more staff',
      feature3:    'Zero-error automated processing',
      stat1n: '40%+',  stat1l: 'Cost Reduction',
      stat2n: '10×',   stat2l: 'Lead Volume',
      stat3n: '24/7',  stat3l: 'System Uptime',
      stat4n: '98%',   stat4l: 'Client Retention',
    },
    testimonials: {
      title:   'Trusted by Industry Leaders',
      quote1:  'AITANE transformed how we operate. We now process 10× more leads with the same team. Game-changing.',
      author1: 'Sarah Chen — VP of Operations',
      quote2:  'The AI workflow handles 80% of our support tickets automatically. Our team finally has time for what matters.',
      author2: 'Marcus Rodriguez — Customer Success Director',
    },
    contact: {
      title:              'Ready to Build?',
      description:        'Tell us about your project and we\'ll get back to you within 24 hours.',
      nameLabel:          'Full Name',
      emailLabel:         'Email Address',
      messageLabel:       'Tell us about your project',
      namePlaceholder:    'John Doe',
      emailPlaceholder:   'john@company.com',
      messagePlaceholder: 'Describe your current challenges and goals...',
      submit:             'Send Message',
    },
    footer: {
      copyright: '© 2026 AITANE. All rights reserved.',
      privacy:   'Privacy',
      terms:     'Terms',
    },
  },
  es: {
    nav: {
      webDev:    'Web',
      aiAuto:    'Automatizaciones IA',
      seo:       'SEO',
      projects:  'Proyectos',
      cta:       'Iniciar Proyecto',
    },
    hero: {
      badge:       'Agencia Digital de Nueva Generación',
      titleLine1:  'Sistemas Digitales que',
      titleLine2:  'Generan Clientes',
      description: 'Desarrollamos sitios web de alto rendimiento, automatizaciones con inteligencia artificial y sistemas optimizados para SEO que trabajan por tu negocio las 24 horas.',
      cta1:        'Iniciar Proyecto',
      cta2:        'Ver Servicios',
    },
    logos: {
      label: 'Con tecnología de los mejores',
    },
    services: {
      title:    'Lo que Construimos',
      subtitle: 'Sistemas digitales de extremo a extremo, diseñados para resultados',
      webDev: {
        title: 'Desarrollo Web',
        desc:  'Sitios Next.js ultrarrápidos y apps web diseñadas para rendimiento, conversión y escalabilidad a largo plazo.',
      },
      ai: {
        title: 'Automatizaciones IA',
        desc:  'Flujos inteligentes con n8n, Make y agentes GPT personalizados que eliminan el trabajo repetitivo y reducen costos.',
      },
      seo: {
        title: 'Sistemas SEO',
        desc:  'SEO técnico y estrategia de contenido que se acumula con el tiempo, generando tráfico orgánico calificado 24/7.',
      },
      integrations: {
        title: 'Integraciones y APIs',
        desc:  'Conectamos tu stack. Creamos integraciones sin fricciones entre CRMs, ERPs y cualquier servicio de terceros.',
      },
    },
    about: {
      title:       'Por Qué las Empresas Eligen AITANE',
      subtitle:    'Construimos sistemas de automatización que realmente funcionan',
      description: 'AITANE combina experiencia técnica profunda en desarrollo web, IA y SEO para entregar sistemas digitales que funcionan en piloto automático. Cada solución está diseñada para medir, escalar y crecer con el tiempo.',
      feature1:    'Reduce costos operativos en más del 40%',
      feature2:    'Escala sin contratar más personal',
      feature3:    'Procesamiento automatizado sin errores',
      stat1n: '40%+',  stat1l: 'Reducción de Costos',
      stat2n: '10×',   stat2l: 'Volumen de Leads',
      stat3n: '24/7',  stat3l: 'Uptime del Sistema',
      stat4n: '98%',   stat4l: 'Retención de Clientes',
    },
    testimonials: {
      title:   'Elegido por Líderes de la Industria',
      quote1:  'AITANE transformó cómo operamos. Ahora procesamos 10× más leads con el mismo equipo. Un cambio radical.',
      author1: 'Sarah Chen — VP de Operaciones',
      quote2:  'El flujo de IA maneja el 80% de nuestros tickets automáticamente. Nuestro equipo tiene tiempo para lo que importa.',
      author2: 'Marcus Rodriguez — Director de Éxito del Cliente',
    },
    contact: {
      title:              '¿Listo para Construir?',
      description:        'Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.',
      nameLabel:          'Nombre Completo',
      emailLabel:         'Correo Electrónico',
      messageLabel:       'Cuéntanos sobre tu proyecto',
      namePlaceholder:    'Juan Pérez',
      emailPlaceholder:   'juan@empresa.com',
      messagePlaceholder: 'Describe tus desafíos y objetivos actuales...',
      submit:             'Enviar Mensaje',
    },
    footer: {
      copyright: '© 2026 AITANE. Todos los derechos reservados.',
      privacy:   'Privacidad',
      terms:     'Términos',
    },
  },
};

/* ============================================================
   APP
   ============================================================ */
function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) value = value?.[k];
    return value ?? '';
  };

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <div>

      {/* ===== NAVIGATION ===== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          {/* Logo */}
          <a href="#" className="nav-brand">
            <div className="nav-logo-icon">
              <Network size={16} strokeWidth={2} />
            </div>
            <span className="nav-name">AITANE</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li><a href="#services"  className="nav-link">{t('nav.webDev')}</a></li>
            <li><a href="#services"  className="nav-link">{t('nav.aiAuto')}</a></li>
            <li><a href="#services"  className="nav-link">{t('nav.seo')}</a></li>
            <li><a href="#about"     className="nav-link">{t('nav.projects')}</a></li>
            <li>
              <button onClick={toggleLang} className="lang-toggle">
                <Globe size={14} />
                <span>{lang.toUpperCase()}</span>
              </button>
            </li>
            <li>
              <a href="#contact" className="btn btn-nav">
                {t('nav.cta')}
              </a>
            </li>
          </ul>

          {/* Mobile Burger */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobile}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="nav-name">AITANE</span>
          <button className="mobile-menu-close" onClick={closeMobile}>
            <X size={22} />
          </button>
        </div>
        <ul className="mobile-menu-links">
          <li><a href="#services" onClick={closeMobile}>{t('nav.webDev')}</a></li>
          <li><a href="#services" onClick={closeMobile}>{t('nav.aiAuto')}</a></li>
          <li><a href="#services" onClick={closeMobile}>{t('nav.seo')}</a></li>
          <li><a href="#about"    onClick={closeMobile}>{t('nav.projects')}</a></li>
        </ul>
        <div className="mobile-menu-lang">
          <button onClick={toggleLang} className="lang-toggle">
            <Globe size={14} />
            <span>{lang.toUpperCase()}</span>
          </button>
        </div>
        <div className="mobile-menu-cta">
          <a href="#contact" className="btn btn-primary" onClick={closeMobile}>
            {t('nav.cta')}
          </a>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero section">
        <AnimatedGrid />
        <div className="container">
          <p className="hero-subtitle">{t('hero.badge')}</p>

          <h1 className="hero-title">
            {t('hero.titleLine1')}{' '}
            <span className="gradient-text">{t('hero.titleLine2')}</span>
          </h1>

          <p className="hero-description">{t('hero.description')}</p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <span>{t('hero.cta1')}</span>
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary">
              {t('hero.cta2')}
            </a>
          </div>
        </div>
      </section>

      {/* ===== LOGOS / TRUST STRIP ===== */}
      <section className="logos-section">
        <div className="container">
          <p className="logos-label">{t('logos.label')}</p>
          <div className="logos-grid">
            <span className="logo-item">OpenAI</span>
            <span className="logo-item">Vercel</span>
            <span className="logo-item">Stripe</span>
            <span className="logo-item">HubSpot</span>
            <span className="logo-item">Notion</span>
            <span className="logo-item">Zapier</span>
            <span className="logo-item">n8n</span>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-tag">Servicios</span>
            <h2>{t('services.title')}</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto' }}>
              {t('services.subtitle')}
            </p>
            <div className="section-divider" />
          </div>
          <div className="grid grid-4">
            <ServiceCard icon={<Code2 size={24} />}    title={t('services.webDev.title')}      description={t('services.webDev.desc')} />
            <ServiceCard icon={<Bot size={24} />}       title={t('services.ai.title')}           description={t('services.ai.desc')} />
            <ServiceCard icon={<Search size={24} />}   title={t('services.seo.title')}          description={t('services.seo.desc')} />
            <ServiceCard icon={<Zap size={24} />}      title={t('services.integrations.title')} description={t('services.integrations.desc')} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>

            {/* Left: text */}
            <div>
              <span className="section-tag">Nosotros</span>
              <h2 style={{ marginTop: '0.75rem' }}>{t('about.title')}</h2>
              <p style={{ fontSize: '1rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                {t('about.description')}
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-icon" />
                  <span>{t('about.feature1')}</span>
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-icon" />
                  <span>{t('about.feature2')}</span>
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-icon" />
                  <span>{t('about.feature3')}</span>
                </li>
              </ul>
            </div>

            {/* Right: stats grid */}
            <div className="stats-grid">
              <div className="stat-block">
                <div className="stat-number">{t('about.stat1n')}</div>
                <div className="stat-label">{t('about.stat1l')}</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">{t('about.stat2n')}</div>
                <div className="stat-label">{t('about.stat2l')}</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">{t('about.stat3n')}</div>
                <div className="stat-label">{t('about.stat3l')}</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">{t('about.stat4n')}</div>
                <div className="stat-label">{t('about.stat4l')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-tag">Testimonios</span>
            <h2 style={{ marginTop: '0.75rem' }}>{t('testimonials.title')}</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-2">
            <div className="testimonial-card">
              <p className="testimonial-quote">{t('testimonials.quote1')}</p>
              <div className="testimonial-author">{t('testimonials.author1')}</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">{t('testimonials.quote2')}</p>
              <div className="testimonial-author">{t('testimonials.author2')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section">
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="text-center mb-4">
            <span className="section-tag">Contacto</span>
            <h2 style={{ marginTop: '0.75rem' }}>{t('contact.title')}</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '-0.5rem' }}>{t('contact.description')}</p>
            <div className="section-divider" />
          </div>
          <div className="card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">{t('contact.nameLabel')}</label>
                  <input type="text"  className="form-input" placeholder={t('contact.namePlaceholder')} />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('contact.emailLabel')}</label>
                  <input type="email" className="form-input" placeholder={t('contact.emailPlaceholder')} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">{t('contact.messageLabel')}</label>
                <textarea className="form-textarea" rows={5} placeholder={t('contact.messagePlaceholder')} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>{t('contact.submit')}</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-brand">AITANE</div>
              <div style={{ fontSize: '0.8125rem', marginTop: '0.375rem', color: 'var(--text-faint)' }}>
                {t('footer.copyright')}
              </div>
            </div>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">{t('footer.privacy')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.terms')}</a></li>
              <li><a href="#" className="footer-link">LinkedIn</a></li>
              <li><a href="#" className="footer-link">Twitter/X</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* ============================================================
   ANIMATED GRID BACKGROUND
   ============================================================ */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const particles = useRef<Particle[]>([]);

  const PARTICLE_COUNT = 70;
  const MAX_DIST        = 160;
  const SPEED           = 0.28;

  // Palette: purple, indigo, blue
  const COLORS = [
    'rgba(139, 92, 246,',
    'rgba(99,  102, 241,',
    'rgba(59,  130, 246,',
    'rgba(167, 139, 250,',
  ];

  const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

  const init = useCallback((canvas: HTMLCanvasElement) => {
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      vx:      (Math.random() - 0.5) * SPEED,
      vy:      (Math.random() - 0.5) * SPEED,
      radius:  Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init(canvas);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pts = particles.current;

      // Update positions with wrap
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0)             p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0)             p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      // Draw connecting lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx   = pts[i].x - pts[j].x;
          const dy   = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth   = 0.7;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${randomColor()} ${p.opacity})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:   'absolute',
        inset:       0,
        width:      '100%',
        height:     '100%',
        opacity:     0.65,
        zIndex:      1,
        pointerEvents: 'none',
      }}
    />
  );
}

/* ============================================================
   SERVICE CARD COMPONENT
   ============================================================ */
function ServiceCard({
  icon, title, description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default App;