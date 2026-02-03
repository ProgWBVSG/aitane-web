import os

def create_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {path}")

def main():
    root_dir = "c:/Users/benja/OneDrive/Desktop/Aitane Web"
    
    # 1. MODERN CLEAN CSS SYSTEM
    css_content = """
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --primary-navy: #0A192F;
  --accent-cyan: #00D9FF;
  --accent-orange: #FF6B35;
  --white: #FFFFFF;
  --light-gray: #F7F9FC;
  --text-gray: #64748B;
  --dark-text: #1E293B;
  --border-light: #E2E8F0;
  
  --font-main: 'Montserrat', sans-serif;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-main);
  background-color: var(--white);
  color: var(--text-gray);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  color: var(--dark-text);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.025em;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

p {
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.75;
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 5rem 0;
}

.section-alt {
  background-color: var(--light-gray);
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--white);
  transition: var(--transition);
}

.navbar.scrolled {
  box-shadow: var(--shadow-md);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.nav-logo {
  height: 2.5rem;
}

.nav-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary-navy);
  letter-spacing: 0.05em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  color: var(--text-gray);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  font-size: 0.95rem;
}

.nav-link:hover {
  color: var(--primary-navy);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--primary-navy);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition);
  cursor: pointer;
  border: none;
  font-family: inherit;
}

.btn-primary {
  background-color: var(--primary-navy);
  color: var(--white);
}

.btn-primary:hover {
  background-color: #0d2438;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background-color: transparent;
  color: var(--primary-navy);
  border: 2px solid var(--primary-navy);
}

.btn-secondary:hover {
  background-color: var(--primary-navy);
  color: var(--white);
}

.btn-accent {
  background-color: var(--accent-cyan);
  color: var(--white);
}

.btn-accent:hover {
  background-color: #00c4e6;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--light-gray);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--text-gray);
  font-weight: 500;
  transition: var(--transition);
}

.lang-toggle:hover {
  background: var(--border-light);
  color: var(--primary-navy);
}

/* Hero */
.hero {
  padding-top: 8rem;
  padding-bottom: 6rem;
  text-align: center;
}

.hero-subtitle {
  color: var(--accent-cyan);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero-title {
  margin-bottom: 1.5rem;
}

.hero-description {
  max-width: 600px;
  margin: 0 auto 2.5rem;
  font-size: 1.25rem;
  color: var(--text-gray);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Cards */
.card {
  background: var(--white);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  height: 100%;
  border: 1px solid var(--border-light);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.card-icon {
  width: 3.5rem;
  height: 3.5rem;
  background: var(--light-gray);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-cyan);
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-text);
  margin-bottom: 1rem;
}

.card-description {
  font-size: 1rem;
  line-height: 1.6;
}

/* Grid */
.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Features */
.feature-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
}

.feature-icon {
  color: var(--accent-cyan);
  flex-shrink: 0;
}

/* Testimonials */
.testimonial-card {
  background: var(--white);
  padding: 2rem;
  border-radius: 1rem;
  border-left: 4px solid var(--accent-cyan);
  box-shadow: var(--shadow-md);
}

.testimonial-quote {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--dark-text);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  font-weight: 600;
  color: var(--text-gray);
  font-size: 0.95rem;
}

/* Form */
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--dark-text);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid var(--border-light);
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);
  background: var(--white);
  color: var(--dark-text);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-cyan);
  box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.1);
}

/* Footer */
.footer {
  background: var(--primary-navy);
  color: var(--white);
  padding: 2.5rem 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.footer-link {
  color: var(--white);
  text-decoration: none;
  opacity: 0.8;
  transition: var(--transition);
  font-size: 0.95rem;
}

.footer-link:hover {
  opacity: 1;
  color: var(--accent-cyan);
}

/* Utilities */
.text-center { text-align: center; }
.text-accent { color: var(--accent-cyan); }
.mb-2 { margin-bottom: 2rem; }
.mb-4 { margin-bottom: 4rem; }

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .section {
    padding: 3rem 0;
  }
  
  .hero {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .grid-2,
  .grid-4 {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
"""
    create_file(os.path.join(root_dir, "src/index.css"), css_content.strip())

    # 2. MODERN APP COMPONENT
    app_tsx = """
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
  const [lang, setLang] = useState('en');
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
            <p style={{fontSize: '1.125rem', color: 'var(--text-gray)'}}>{t('services.subtitle')}</p>
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
          <div className="grid grid-2" style={{alignItems: 'center'}}>
            <div>
              <h2>{t('about.title')}</h2>
              <p style={{fontSize: '1.125rem', marginBottom: '2rem'}}>{t('about.description')}</p>
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
                style={{width: '100%', borderRadius: '1rem', boxShadow: 'var(--shadow-xl)'}}
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
        <div className="container" style={{maxWidth: '700px'}}>
          <div className="text-center mb-4">
            <h2>{t('contact.title')}</h2>
            <p style={{fontSize: '1.125rem'}}>{t('contact.description')}</p>
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
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
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
"""
    create_file(os.path.join(root_dir, "src/App.tsx"), app_tsx.strip())

if __name__ == "__main__":
    main()
