import React, { useState, useEffect } from 'react';
import { Bot, Workflow, BarChart3, Mail, ArrowRight, CheckCircle, Globe, Menu, X } from 'lucide-react';

const translations = {
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    hero: {
      subtitle: 'AI Automation Agency',
      title: 'Transform Your Business with Intelligent Automation',
      description: 'Stop wasting time on repetitive tasks. Let AI handle the heavy lifting while you focus on growth and strategy.',
      cta1: 'Book Free Consultation',
      cta2: 'Learn More',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Enterprise solutions designed to scale your operations',
      workflow: {
        title: 'Workflow Automation',
        desc: 'Streamline your operations with intelligent process automation using n8n and Make.',
      },
      ai: {
        title: 'AI Chatbots',
        desc: 'Deploy smart assistants that handle customer support and internal queries 24/7.',
      },
      crm: {
        title: 'CRM Integration',
        desc: 'Automate your sales pipeline with intelligent data enrichment and lead scoring.',
      },
      marketing: {
        title: 'Marketing Automation',
        desc: 'Launch personalized campaigns at scale with AI-driven insights.',
      },
    },
    about: {
      title: 'Why Choose AITANE',
      subtitle: 'We build automation systems that actually work',
      description: 'AITANE specializes in creating custom AI automation solutions for modern businesses. Our mission is to help companies operate more efficiently by eliminating manual, repetitive work.',
      feature1: 'Reduce operational costs by 40%+',
      feature2: 'Scale without hiring more staff',
      feature3: 'Zero-error automated processing',
    },
    testimonials: {
      title: 'Trusted by Industry Leaders',
      quote1: 'AITANE transformed how we operate. We now process 10x more leads with the same team size. Game-changing.',
      author1: 'Sarah Chen, VP of Operations',
      quote2: 'The AI chatbot handles 80% of our support tickets automatically. Our team finally has time for complex issues.',
      author2: 'Marcus Rodriguez, Customer Success Director',
    },
    contact: {
      title: 'Ready to Automate?',
      description: 'Book a free consultation to discuss your automation needs',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      messageLabel: 'Tell us about your business',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@company.com',
      messagePlaceholder: 'Describe your current challenges...',
      submit: 'Send Message',
    },
    footer: {
      copyright: '© 2026 AITANE. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
      getStarted: 'Comenzar',
    },
    hero: {
      subtitle: 'Agencia de Automatización con IA',
      title: 'Transforma Tu Negocio con Automatización Inteligente',
      description: 'Deja de perder tiempo en tareas repetitivas. Deja que la IA haga el trabajo pesado mientras te enfocas en el crecimiento.',
      cta1: 'Consulta Gratuita',
      cta2: 'Saber Más',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones empresariales diseñadas para escalar tus operaciones',
      workflow: {
        title: 'Automatización de Flujos',
        desc: 'Optimiza tus operaciones con automatización inteligente usando n8n y Make.',
      },
      ai: {
        title: 'Chatbots de IA',
        desc: 'Despliega asistentes inteligentes que manejan soporte y consultas internas 24/7.',
      },
      crm: {
        title: 'Integración CRM',
        desc: 'Automatiza tu pipeline de ventas con enriquecimiento de datos y scoring de leads.',
      },
      marketing: {
        title: 'Automatización de Marketing',
        desc: 'Lanza campañas personalizadas a escala con insights impulsados por IA.',
      },
    },
    about: {
      title: 'Por Qué Elegir AITANE',
      subtitle: 'Construimos sistemas de automatización que realmente funcionan',
      description: 'AITANE se especializa en crear soluciones de automatización con IA personalizadas para empresas modernas. Nuestra misión es ayudar a las empresas a operar más eficientemente eliminando el trabajo manual y repetitivo.',
      feature1: 'Reduce costos operativos en +40%',
      feature2: 'Escala sin contratar más personal',
      feature3: 'Procesamiento automatizado sin errores',
    },
    testimonials: {
      title: 'Confiado por Líderes de la Industria',
      quote1: 'AITANE transformó cómo operamos. Ahora procesamos 10x más leads con el mismo tamaño de equipo. Un cambio radical.',
      author1: 'Sarah Chen, VP de Operaciones',
      quote2: 'El chatbot de IA maneja el 80% de nuestros tickets de soporte automáticamente. Nuestro equipo finalmente tiene tiempo para problemas complejos.',
      author2: 'Marcus Rodriguez, Director de Éxito del Cliente',
    },
    contact: {
      title: '¿Listo para Automatizar?',
      description: 'Reserva una consulta gratuita para discutir tus necesidades de automatización',
      nameLabel: 'Nombre Completo',
      emailLabel: 'Correo Electrónico',
      messageLabel: 'Cuéntanos sobre tu negocio',
      namePlaceholder: 'Juan Pérez',
      emailPlaceholder: 'juan@empresa.com',
      messagePlaceholder: 'Describe tus desafíos actuales...',
      submit: 'Enviar Mensaje',
    },
    footer: {
      copyright: '© 2026 AITANE. Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos',
    },
  },
};

function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      value = value[k];
    }
    return value;
  };

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-brand">
            <img src="/logo.png" alt="AITANE" className="nav-logo" />
            <span className="nav-name">AITANE</span>
          </a>

          <ul className="nav-links">
            <li><a href="#services" className="nav-link">{t('nav.services')}</a></li>
            <li><a href="#about" className="nav-link">{t('nav.about')}</a></li>
            <li><a href="#contact" className="nav-link">{t('nav.contact')}</a></li>
            <li>
              <button onClick={toggleLang} className="lang-toggle">
                <Globe size={18} />
                <span>{lang.toUpperCase()}</span>
              </button>
            </li>
            <li><a href="#contact" className="btn btn-primary">{t('nav.getStarted')}</a></li>
          </ul>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              {t('hero.cta1')} <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-secondary">
              {t('hero.cta2')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>{t('services.title')}</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-gray)' }}>{t('services.subtitle')}</p>
          </div>
          <div className="grid grid-4">
            <ServiceCard
              icon={<Workflow size={32} />}
              title={t('services.workflow.title')}
              description={t('services.workflow.desc')}
            />
            <ServiceCard
              icon={<Bot size={32} />}
              title={t('services.ai.title')}
              description={t('services.ai.desc')}
            />
            <ServiceCard
              icon={<BarChart3 size={32} />}
              title={t('services.crm.title')}
              description={t('services.crm.desc')}
            />
            <ServiceCard
              icon={<Mail size={32} />}
              title={t('services.marketing.title')}
              description={t('services.marketing.desc')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2>{t('about.title')}</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>{t('about.description')}</p>
              <ul className="feature-list">
                <li className="feature-item">
                  <CheckCircle size={24} className="feature-icon" />
                  <span>{t('about.feature1')}</span>
                </li>
                <li className="feature-item">
                  <CheckCircle size={24} className="feature-icon" />
                  <span>{t('about.feature2')}</span>
                </li>
                <li className="feature-item">
                  <CheckCircle size={24} className="feature-icon" />
                  <span>{t('about.feature3')}</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Team collaboration"
                style={{ width: '100%', borderRadius: '1rem', boxShadow: 'var(--shadow-xl)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">{t('testimonials.title')}</h2>
          <div className="grid grid-2">
            <div className="testimonial-card">
              <p className="testimonial-quote">{t('testimonials.quote1')}</p>
              <div className="testimonial-author">— {t('testimonials.author1')}</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">{t('testimonials.quote2')}</p>
              <div className="testimonial-author">— {t('testimonials.author2')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="text-center mb-4">
            <h2>{t('contact.title')}</h2>
            <p style={{ fontSize: '1.125rem' }}>{t('contact.description')}</p>
          </div>
          <div className="card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">{t('contact.nameLabel')}</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('contact.emailLabel')}</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">{t('contact.messageLabel')}</label>
                <textarea
                  className="form-textarea"
                  rows={5}
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>{t('footer.copyright')}</div>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">{t('footer.privacy')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.terms')}</a></li>
              <li><a href="#" className="footer-link">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default App;