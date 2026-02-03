import os

def create_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {path}")

def main():
    root_dir = "c:/Users/benja/OneDrive/Desktop/Aitane Web"
    
    # Update App.tsx with i18n and logo fix
    app_tsx = """
import React, { useState, useEffect } from 'react';
import { Bot, Workflow, BarChart3, Mail, ChevronRight, CheckCircle2, Menu, X, ArrowRight, Globe } from 'lucide-react';

// Translation dictionary
const translations = {
  en: {
    nav: {
      mission: 'Mission',
      services: 'Services',
      impact: 'Impact',
      bookConsultation: 'Book Consultation',
    },
    hero: {
      subtitle: 'Next-Gen Automation Agency',
      title1: 'Transform Manual Work',
      title2: 'into',
      titleAccent: 'Intelligent Growth.',
      description: 'We architect autonomous systems that scale your business. Stop trading time for money—leverage AI to operate with precision and speed 24/7.',
      cta1: 'Start Automating',
      cta2: 'View Solutions',
    },
    about: {
      label: 'WHO WE ARE',
      title1: 'The Future of Work is',
      title2: 'Automated.',
      description: "AITANE isn't just an agency; we are your strategic technology partner. We believe that human potential should be focused on creativity and strategy, not repetitive data entry or customer triage.",
      feature1: 'Reduce Operational Costs by 40%+',
      feature2: 'Zero-Error Data Processing',
      feature3: 'Scalable Infrastructure for Growth',
      philosophy: 'Our Philosophy',
      quote: '"To stay competitive in 2026, companies must adopt AI not as a tool, but as a team member. We build that digital workforce for you."',
      founder: 'Founder Name',
      ceo: 'AITANE CEO',
    },
    services: {
      title: 'Enterprise-Grade Solutions',
      description: "End-to-end implementation of the world's most powerful automation tools.",
      workflow: {
        title: 'Custom Workflows',
        desc: 'We engineer complex logic flows using n8n and Make to connect your disjointed software ecosystem seamlessly.',
      },
      ai: {
        title: 'AI Agents',
        desc: 'Deploy autonomous agents that handle customer support, internal knowledge retrieval, and booking.',
      },
      crm: {
        title: 'CRM Architecture',
        desc: 'Keep your CRM spotless with automated data enrichment, lead scoring, and pipeline movement.',
      },
      marketing: {
        title: 'Smart Outreach',
        desc: 'Hyper-personalized email and LinkedIn campaigns that run on autopilot while maintaining a human touch.',
      },
    },
    testimonials: {
      title: 'Trusted by Innovators',
      quote1: "AITANE didn't just save us time; they fundamentally changed how we operate. We now process 10x the volume with the same team size.",
      author1: 'Sarah Jenkins, CTO at NovaTech',
      quote2: 'The ROI was immediate. The AI chatbot they built handles 80% of our support queries instantly. Best investment of the year.',
      author2: 'Michael Ross, Founder of ScaleUp',
    },
    contact: {
      label: '04. WHAT\\'S NEXT?',
      title: 'Get In Touch',
      description: 'Ready to modernize your infrastructure? Book a discovery call to see if your business qualifies for our automation program.',
      nameLabel: 'NAME',
      namePlaceholder: 'John Doe',
      emailLabel: 'EMAIL',
      emailPlaceholder: 'john@company.com',
      messageLabel: 'MESSAGE',
      messagePlaceholder: 'Tell us about your bottlenecks...',
      submit: 'Send Request',
    },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms',
    },
  },
  es: {
    nav: {
      mission: 'Misión',
      services: 'Servicios',
      impact: 'Impacto',
      bookConsultation: 'Reservar Consulta',
    },
    hero: {
      subtitle: 'Agencia de Automatización de Nueva Generación',
      title1: 'Transforma el Trabajo Manual',
      title2: 'en',
      titleAccent: 'Crecimiento Inteligente.',
      description: 'Diseñamos sistemas autónomos que escalan tu negocio. Deja de intercambiar tiempo por dinero—aprovecha la IA para operar con precisión y velocidad 24/7.',
      cta1: 'Comenzar a Automatizar',
      cta2: 'Ver Soluciones',
    },
    about: {
      label: 'QUIÉNES SOMOS',
      title1: 'El Futuro del Trabajo es',
      title2: 'Automatizado.',
      description: 'AITANE no es solo una agencia; somos tu socio tecnológico estratégico. Creemos que el potencial humano debe enfocarse en la creatividad y estrategia, no en tareas repetitivas o clasificación de clientes.',
      feature1: 'Reduce Costos Operativos en +40%',
      feature2: 'Procesamiento de Datos Sin Errores',
      feature3: 'Infraestructura Escalable para Crecimiento',
      philosophy: 'Nuestra Filosofía',
      quote: '"Para mantenerse competitivo en 2026, las empresas deben adoptar la IA no como una herramienta, sino como un miembro del equipo. Nosotros construimos esa fuerza laboral digital para ti."',
      founder: 'Nombre del Fundador',
      ceo: 'CEO de AITANE',
    },
    services: {
      title: 'Soluciones de Nivel Empresarial',
      description: 'Implementación integral de las herramientas de automatización más poderosas del mundo.',
      workflow: {
        title: 'Flujos Personalizados',
        desc: 'Diseñamos flujos de lógica compleja usando n8n y Make para conectar tu ecosistema de software desarticulado de manera fluida.',
      },
      ai: {
        title: 'Agentes de IA',
        desc: 'Despliega agentes autónomos que manejan soporte al cliente, recuperación de conocimiento interno y reservas.',
      },
      crm: {
        title: 'Arquitectura CRM',
        desc: 'Mantén tu CRM impecable con enriquecimiento automático de datos, puntuación de leads y movimiento de pipeline.',
      },
      marketing: {
        title: 'Alcance Inteligente',
        desc: 'Campañas de email y LinkedIn hiper-personalizadas que funcionan en piloto automático manteniendo un toque humano.',
      },
    },
    testimonials: {
      title: 'Confiado por Innovadores',
      quote1: 'AITANE no solo nos ahorró tiempo; cambiaron fundamentalmente cómo operamos. Ahora procesamos 10x el volumen con el mismo tamaño de equipo.',
      author1: 'Sarah Jenkins, CTO en NovaTech',
      quote2: 'El ROI fue inmediato. El chatbot de IA que construyeron maneja el 80% de nuestras consultas de soporte al instante. Mejor inversión del año.',
      author2: 'Michael Ross, Fundador de ScaleUp',
    },
    contact: {
      label: '04. ¿QUÉ SIGUE?',
      title: 'Ponte en Contacto',
      description: '¿Listo para modernizar tu infraestructura? Reserva una llamada de descubrimiento para ver si tu negocio califica para nuestro programa de automatización.',
      nameLabel: 'NOMBRE',
      namePlaceholder: 'Juan Pérez',
      emailLabel: 'CORREO',
      emailPlaceholder: 'juan@empresa.com',
      messageLabel: 'MENSAJE',
      messagePlaceholder: 'Cuéntanos sobre tus cuellos de botella...',
      submit: 'Enviar Solicitud',
    },
    footer: {
      privacy: 'Privacidad',
      terms: 'Términos',
    },
  },
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      value = value[k];
    }
    return value;
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="blob" style={{top: '-10%', left: '-10%'}}></div>
      <div className="blob" style={{bottom: '10%', right: '-10%', background: 'radial-gradient(circle, rgba(100, 255, 218, 0.08) 0%, rgba(0,0,0,0) 70%)'}}></div>

      {/* Navigation */}
      <nav className={`glass-nav ${scrolled ? 'py-4 shadow-lg' : 'py-6'}`}>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Aitane Logo" className="h-8" />
            <span className="font-bold text-2xl text-white tracking-wider">AITANE</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <NavLink href="#about">{t('nav.mission')}</NavLink>
            <NavLink href="#services">{t('nav.services')}</NavLink>
            <NavLink href="#testimonials">{t('nav.impact')}</NavLink>
            <button onClick={toggleLang} className="text-muted hover:text-accent transition flex items-center gap-2">
              <Globe size={18} />
              {lang.toUpperCase()}
            </button>
            <a href="#contact" className="btn btn-primary text-sm py-2 px-4">
              {t('nav.bookConsultation')}
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="container text-center animate-in">
          <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">{t('hero.subtitle')}</p>
          <h1 className="mb-6 leading-tight">
            {t('hero.title1')} <br />
            {t('hero.title2')} <span className="text-accent">{t('hero.titleAccent')}</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg">
            {t('hero.description')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="btn btn-solid text-lg">
              {t('hero.cta1')} <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-primary text-lg border-0 hover:bg-transparent hover:text-white">
              {t('hero.cta2')}
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="h-px w-10 bg-accent"></div>
                 <span className="text-accent font-mono text-sm">{t('about.label')}</span>
              </div>
              <h2 className="mb-6">{t('about.title1')} <br/>{t('about.title2')}</h2>
              <p className="mb-6">
                {t('about.description')}
              </p>
              <div className="grid grid-cols-1 gap-4">
                <FeatureItem text={t('about.feature1')} />
                <FeatureItem text={t('about.feature2')} />
                <FeatureItem text={t('about.feature3')} />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent opacity-20 blur-3xl rounded-full"></div>
              <div className="card relative z-10 border-accent border-opacity-20 bg-opacity-80 backdrop-blur-sm">
                 <h3 className="text-accent mb-4">{t('about.philosophy')}</h3>
                 <p className="text-sm">
                   {t('about.quote')}
                 </p>
                 <div className="mt-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                    <div>
                       <div className="text-white font-bold text-sm">{t('about.founder')}</div>
                       <div className="text-xs text-muted">{t('about.ceo')}</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[var(--bg-card)]/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">{t('services.title')}</h2>
            <p>{t('services.description')}</p>
          </div>
          <div className="grid grid-4">
            <ServiceCard 
              icon={<Workflow size={32}/>} 
              title={t('services.workflow.title')} 
              desc={t('services.workflow.desc')} 
            />
            <ServiceCard 
              icon={<Bot size={32}/>} 
              title={t('services.ai.title')} 
              desc={t('services.ai.desc')} 
            />
            <ServiceCard 
              icon={<BarChart3 size={32}/>} 
              title={t('services.crm.title')} 
              desc={t('services.crm.desc')} 
            />
            <ServiceCard 
              icon={<Mail size={32}/>} 
              title={t('services.marketing.title')} 
              desc={t('services.marketing.desc')} 
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32">
        <div className="container">
          <h2 className="text-center mb-16">{t('testimonials.title')}</h2>
          <div className="grid grid-2">
            <TestimonialCard 
              quote={t('testimonials.quote1')}
              author={t('testimonials.author1')}
            />
            <TestimonialCard 
              quote={t('testimonials.quote2')}
              author={t('testimonials.author2')}
            />
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="contact" className="py-32">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-mono mb-2">{t('contact.label')}</p>
            <h2 className="text-4xl">{t('contact.title')}</h2>
            <p className="max-w-xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
          
          <div className="card border-accent/20">
             <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-2 gap-6">
                 <div className="input-group">
                   <label className="text-sm font-bold text-muted">{t('contact.nameLabel')}</label>
                   <input type="text" placeholder={t('contact.namePlaceholder')} />
                 </div>
                 <div className="input-group">
                   <label className="text-sm font-bold text-muted">{t('contact.emailLabel')}</label>
                   <input type="email" placeholder={t('contact.emailPlaceholder')} />
                 </div>
               </div>
               <div className="input-group">
                  <label className="text-sm font-bold text-muted">{t('contact.messageLabel')}</label>
                  <textarea rows={4} className="w-full p-4 mt-2 bg-white/5 border border-[var(--bg-card)] rounded text-white focus:border-accent outline-none" placeholder={t('contact.messagePlaceholder')}></textarea>
               </div>
               <button className="btn btn-solid justify-center py-4 mt-4">
                 {t('contact.submit')}
               </button>
             </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted border-t border-white/5 bg-[var(--bg-card)]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="font-mono text-accent">AITANE &copy; 2026</div>
             <div className="flex gap-4">
               <a href="#" className="hover:text-accent transition">{t('footer.privacy')}</a>
               <a href="#" className="hover:text-accent transition">{t('footer.terms')}</a>
               <a href="#" className="hover:text-accent transition">LinkedIn</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({href, children}) {
  return (
    <a href={href} className="text-muted hover:text-accent transition relative group">
      <span className="group-hover:text-accent transition duration-300">{children}</span>
    </a>
  );
}

function FeatureItem({text}) {
  return (
    <div className="flex items-center gap-3 text-muted">
       <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
       <span>{text}</span>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="card group">
      <div className="text-accent mb-6 transform group-hover:scale-110 transition duration-300">{icon}</div>
      <h3 className="text-xl mb-4 text-white group-hover:text-accent transition">{title}</h3>
      <p className="text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ quote, author }) {
  return (
    <div className="card border-l-4 border-l-accent border-r-0 border-t-0 border-b-0 rounded-none bg-[var(--bg-card)]/50">
       <p className="italic text-lg mb-6 text-white leading-relaxed">"{quote}"</p>
       <div className="font-mono text-accent text-sm">- {author}</div>
    </div>
  );
}

export default App;
"""
    create_file(os.path.join(root_dir, "src/App.tsx"), app_tsx.strip())

if __name__ == "__main__":
    main()
