import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Bot, ArrowRight, CheckCircle,
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
    propuesta: {
      titulo: 'Nuestras Propuestas',
      intro: 'Dos soluciones independientes para el crecimiento de tu negocio',
      web: {
        titulo: 'Propuesta 1: Desarrollo de Sitio Web',
        intro: 'Crear una presencia digital profesional para la marca TUMI que permita mostrar sus productos, transmitir confianza a los clientes y facilitar el contacto con el negocio. El sitio web funcionará como una vitrina digital profesional donde los clientes puedan conocer la marca, explorar el catálogo de ropa y ponerse en contacto fácilmente.',
        objetivos: {
          title: 'Objetivos del proyecto',
          item1: 'Crear una presencia digital profesional para la marca',
          item2: 'Permitir que los clientes puedan ver los productos antes de visitar el local',
          item3: 'Organizar el catálogo de ropa de manera clara y visual',
          item4: 'Facilitar el contacto con potenciales clientes',
          item5: 'Mejorar la visibilidad del negocio en internet',
        },
        alcance: {
          title: 'Alcance del proyecto',
          item1: 'Diseño y desarrollo de un sitio web profesional',
          item2: 'Diseño moderno adaptado a celulares, tablets y computadoras',
          item3: 'Catálogo digital de productos para mostrar la ropa',
          item4: 'Panel de administración para gestionar productos',
          item5: 'Integración con botón de WhatsApp para contacto directo',
          item6: 'Estructura optimizada para navegación clara',
          item7: 'Optimización básica SEO para buscadores',
          item8: 'Configuración inicial del sistema de gestión',
          item9: 'Preparación para futuras integraciones o expansiones',
        },
        noIncluye: {
          title: 'Qué NO incluye el proyecto',
          item1: 'Gestión o administración de redes sociales',
          item2: 'Campañas de publicidad paga',
          item3: 'Producción profesional de fotos o videos',
          item4: 'Creación constante de contenido',
          item5: 'Mantenimiento técnico ilimitado',
          item6: 'Nuevas funcionalidades fuera del alcance inicial',
          item7: 'E-commerce completo con pagos online',
        },
        proceso: {
          title: 'Proceso de trabajo',
          fase1: 'Reunión inicial para comprender el negocio y definir la estructura',
          fase2: 'Definición de secciones y arquitectura del sitio',
          fase3: 'Construcción del sitio web y panel de administración',
          fase4: 'Configuración de contacto y optimización SEO',
          fase5: 'Entrega del sitio y explicación de gestión',
        },
        beneficios: {
          title: 'Beneficios para el negocio',
          item1: 'Tener una presencia digital profesional',
          item2: 'Mostrar los productos de forma organizada y visual',
          item3: 'Facilitar que los clientes conozcan la marca antes de visitar',
          item4: 'Mejorar la credibilidad del negocio',
          item5: 'Contar con una plataforma propia para gestionar el catálogo',
        },
        precio: {
          label: 'Inversión',
          precio: '$400.000',
          formaPago: 'Forma de pago',
          pago1: '50% al inicio del proyecto',
          pago2: '50% al finalizar, antes de la entrega',
          mantenimiento: 'Mantenimiento',
          mantenimientoDesc: 'Se define posteriormente según necesidades del cliente',
          cta: 'Contratar Web',
        },
      },
      auto: {
        titulo: 'Propuesta 2: Automatizaciones y Sistemas Inteligentes',
        intro: 'Las automatizaciones permiten optimizar procesos del negocio, mejorar la interacción con clientes y organizar la información de manera más eficiente. Estas soluciones pueden ayudar a ahorrar tiempo, mejorar la atención y facilitar la gestión del negocio.',
        objetivos: {
          title: 'Objetivos',
          item1: 'Optimizar procesos internos',
          item2: 'Mejorar la gestión de consultas de clientes',
          item3: 'Automatizar tareas repetitivas',
          item4: 'Organizar mejor la información del negocio',
          item5: 'Crear sistemas digitales que trabajen de forma continua',
        },
        alcance: {
          title: 'Posibles automatizaciones',
          item1: 'Sistemas automáticos de respuesta para consultas',
          item2: 'Organización de información de clientes',
          item3: 'Automatización de procesos de contacto',
          item4: 'Integraciones entre herramientas digitales',
          item5: 'Sistemas que faciliten la gestión del negocio',
          item6: 'Las automatizaciones específicas se definen tras analizar los procesos del negocio',
        },
        incluye: {
          title: 'Qué incluye esta etapa',
          item1: 'Análisis del negocio y procesos actuales',
          item2: 'Identificación de oportunidades de automatización',
          item3: 'Diseño de soluciones adaptadas al negocio',
          item4: 'Implementación técnica de las automatizaciones',
          item5: 'Configuración y pruebas del sistema',
        },
        noIncluye: {
          title: 'Qué NO incluye',
          item1: 'Desarrollo de software completamente personalizado desde cero',
          item2: 'Automatizaciones no definidas previamente',
          item3: 'Integraciones con herramientas que requieran licencias pagas',
        },
        proceso: {
          title: 'Proceso de trabajo',
          fase1: 'Diagnóstico del negocio',
          fase2: 'Identificación de procesos automatizables',
          fase3: 'Diseño de la solución',
          fase4: 'Implementación técnica',
          fase5: 'Pruebas y ajustes',
        },
        precio: {
          label: 'Inversión',
          precio: 'A definir',
          desc: 'El valor se definirá luego de analizar los procesos del negocio y determinar el alcance, ya que cada sistema puede variar según la complejidad y necesidades específicas.',
          cta: 'Solicitar Cotización',
        },
      },
      cierre: 'El objetivo es construir una base digital sólida para acompañar el crecimiento del negocio.',
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
    hook: {
      eyebrow:   'Reality check',
      headline:  'Still operating with spreadsheets and copy-paste?',
      body:      'Every hour your team spends on manual, repetitive work is an hour not spent on growth. The companies winning today have replaced that friction with intelligent systems that run around the clock — without errors, without fatigue.',
      cta:       'See our services',
    },
    process: {
      title:    'How We Work',
      subtitle: 'A proven 4-step process to build systems that compound',
      step1t: 'Discovery',    step1d: 'We map your current processes and identify exactly where AI, automation and web engineering will have the highest impact.',
      step2t: 'Design',      step2d: 'We architect the system: data flows, integrations, AI models and success metrics — before writing a single line of code.',
      step3t: 'Build',       step3d: 'We develop and deploy without disrupting your current operations, shipping in iterations so you see results fast.',
      step4t: 'Scale',       step4d: 'We measure, optimize and expand what works. Your system compounds in value over time, not just at launch.',
    },
    toolbox: {
      title:    'Built With the Best Tools',
      subtitle: 'We choose tools based on results, not hype.',
    },
    faq: {
      title:    'Frequently Asked Questions',
      subtitle: 'Everything you need to know before starting.',
      q1: 'How long does it take to see real results?',
      a1: 'Most clients see measurable results within the first 30 days of implementation. We focus on high-impact automations first — the ones that free up the most time or generate the most revenue.',
      q2: 'Do I need an internal technical team to get started?',
      a2: 'Not at all. We act as your technical team. You bring the business context; we handle architecture, development, deployment and maintenance.',
      q3: 'What if my company is not ready for AI yet?',
      a3: 'We\'ll tell you honestly. If your processes aren\'t stable enough for automation, we\'ll start there first. We don\'t sell AI for the sake of it — we solve business problems.',
      q4: 'Can you integrate with our existing CRM or ERP?',
      a4: 'Yes. We have experience integrating with HubSpot, Salesforce, Pipedrive, SAP, Zoho and most major platforms. If it has an API, we can connect it.',
      q5: 'How do you protect the privacy of our data?',
      a5: 'We operate under strict data handling policies. Where possible, we use private model deployments so your data never trains public AI models. NDAs are standard.',
      q6: 'Do you work with small companies or only large enterprises?',
      a6: 'Both. We\'ve worked with solo founders and multi-national teams. What matters is that you have a real problem and a commitment to solving it properly.',
      q7: 'How much does a typical project cost?',
      a7: 'Projects range from €1,500 for focused automations to €15,000+ for full digital systems. We provide a detailed breakdown after a free discovery call — no surprises.',
    },
    finalcta: {
      headline: 'Ready to compete with intelligence?',
      sub:      'Book a free 30-minute strategy call. No sales pitch — just clarity on what\'s possible for your business.',
      cta1:     'Book Free Strategy Call',
      cta2:     'Explore Services',
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
    propuesta: {
      titulo: 'Our Proposals',
      intro: 'Two independent solutions for your business growth',
      web: {
        titulo: 'Proposal 1: Website Development',
        intro: 'Create a professional digital presence for the TUMI brand to showcase products, build customer trust, and facilitate business contact. The website will serve as a professional digital showcase where customers can learn about the brand, browse the clothing catalog, and get in touch easily.',
        objetivos: {
          title: 'Project objectives',
          item1: 'Create a professional digital presence for the brand',
          item2: 'Allow customers to view products before visiting the store',
          item3: 'Organize the clothing catalog clearly and visually',
          item4: 'Facilitate contact with potential customers',
          item5: 'Improve business visibility on the internet',
        },
        alcance: {
          title: 'Project scope',
          item1: 'Professional website design and development',
          item2: 'Modern design adapted to mobile, tablets and computers',
          item3: 'Digital product catalog to display clothing',
          item4: 'Admin panel to manage products',
          item5: 'WhatsApp button integration for direct contact',
          item6: 'Optimized structure for clear navigation',
          item7: 'Basic SEO optimization for search engines',
          item8: 'Initial content management system setup',
          item9: 'Prepared for future integrations or expansions',
        },
        noIncluye: {
          title: 'What the project does NOT include',
          item1: 'Social media management or administration',
          item2: 'Paid advertising campaigns',
          item3: 'Professional photo or video production',
          item4: 'Constant content creation',
          item5: 'Unlimited technical maintenance',
          item6: 'New features outside initial scope',
          item7: 'Complete e-commerce with online payments',
        },
        proceso: {
          title: 'Work process',
          fase1: 'Initial meeting to understand the business and define site structure',
          fase2: 'Section definition and site architecture',
          fase3: 'Website construction and admin panel development',
          fase4: 'Contact configuration and SEO optimization',
          fase5: 'Site delivery and management explanation',
        },
        beneficios: {
          title: 'Benefits for the business',
          item1: 'Have a professional digital presence',
          item2: 'Display products in an organized and visual way',
          item3: 'Help customers learn about the brand before visiting',
          item4: 'Improve business credibility',
          item5: 'Own platform to manage the catalog',
        },
        precio: {
          label: 'Investment',
          precio: '$400.000',
          formaPago: 'Payment terms',
          pago1: '50% at the start of the project',
          pago2: '50% upon completion, before delivery',
          mantenimiento: 'Maintenance',
          mantenimientoDesc: 'Defined later according to client needs',
          cta: 'Hire Web',
        },
      },
      auto: {
        titulo: 'Proposal 2: Automations and Intelligent Systems',
        intro: 'Automations optimize business processes, improve customer interaction, and organize information more efficiently. These solutions can help save time, improve service, and facilitate business management.',
        objetivos: {
          title: 'Objectives',
          item1: 'Optimize internal processes',
          item2: 'Improve customer query management',
          item3: 'Automate repetitive tasks',
          item4: 'Organize business information better',
          item5: 'Create digital systems that work continuously',
        },
        alcance: {
          title: 'Possible automations',
          item1: 'Automatic response systems for inquiries',
          item2: 'Customer information organization',
          item3: 'Contact process automation',
          item4: 'Integrations between digital tools',
          item5: 'Systems that facilitate business management',
          item6: 'Specific automations defined after analyzing business processes',
        },
        incluye: {
          title: 'What this stage includes',
          item1: 'Business and current processes analysis',
          item2: 'Automation opportunity identification',
          item3: 'Custom solution design for the business',
          item4: 'Technical implementation of automations',
          item5: 'System configuration and testing',
        },
        noIncluye: {
          title: 'What does NOT include',
          item1: 'Completely custom software development from scratch',
          item2: 'Undefined automations beforehand',
          item3: 'Integrations with tools requiring paid licenses',
        },
        proceso: {
          title: 'Work process',
          fase1: 'Business diagnosis',
          fase2: 'Identification of automatable processes',
          fase3: 'Solution design',
          fase4: 'Technical implementation',
          fase5: 'Testing and adjustments',
        },
        precio: {
          label: 'Investment',
          precio: 'To be defined',
          desc: 'The value will be defined after analyzing business processes and determining scope, as each system may vary according to complexity and specific needs.',
          cta: 'Request Quote',
        },
      },
      cierre: 'The goal is to build a solid digital foundation to support business growth.',
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
    hook: {
      eyebrow:   'La realidad del mercado',
      headline:  '¿Todavía operando con planillas y copiar-pegar?',
      body:      'Cada hora que tu equipo dedica a trabajo manual y repetitivo es una hora que no se invierte en crecer. Las empresas que ganan hoy reemplazaron esa fricción con sistemas inteligentes que funcionan las 24 horas — sin errores, sin cansancio.',
      cta:       'Ver servicios',
    },
    process: {
      title:    'Cómo Trabajamos',
      subtitle: 'Un proceso probado en 4 pasos para construir sistemas que se acumulan',
      step1t: 'Diagnóstico',     step1d: 'Mapeamos tus procesos actuales e identificamos dónde la IA, la automatización y el desarrollo web generarán mayor impacto.',
      step2t: 'Diseño',          step2d: 'Diseñamos el sistema: flujos de datos, integraciones, modelos de IA y métricas de éxito — antes de escribir una línea de código.',
      step3t: 'Implementación',  step3d: 'Desarrollamos y desplegamos sin interrumpir tu operación actual, lanzando en iteraciones para que veas resultados rápido.',
      step4t: 'Escala',          step4d: 'Medimos, optimizamos y expandimos lo que funciona. Tu sistema crece en valor con el tiempo, no solo en el lanzamiento.',
    },
    toolbox: {
      title:    'Construimos con las Mejores Herramientas',
      subtitle: 'Elegimos herramientas por resultados, no por hype.',
    },
    faq: {
      title:    'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitás saber antes de empezar.',
      q1: '¿Cuánto tiempo tarda en verse el resultado?',
      a1: 'La mayoría de los clientes ven resultados medibles en los primeros 30 días de implementación. Priorizamos las automatizaciones de mayor impacto: las que liberan más tiempo o generan más ingresos.',
      q2: '¿Necesito un equipo técnico interno para empezar?',
      a2: 'Para nada. Nosotros somos tu equipo técnico. Vos traés el contexto del negocio; nosotros nos encargamos de la arquitectura, el desarrollo, el despliegue y el mantenimiento.',
      q3: '¿Qué pasa si mi empresa todavía no está lista para la IA?',
      a3: 'Te lo decimos con honestidad. Si tus procesos no están lo suficientemente estables, empezamos por ahí primero. No vendemos IA por venderla — resolvemos problemas reales.',
      q4: '¿Pueden integrarse con nuestro CRM o ERP actual?',
      a4: 'Sí. Tenemos experiencia integrando con HubSpot, Salesforce, Pipedrive, SAP, Zoho y la mayoría de las plataformas líderes. Si tiene API, lo conectamos.',
      q5: '¿Cómo protegen la privacidad de nuestros datos?',
      a5: 'Operamos bajo estrictas políticas de manejo de datos. Donde es posible, usamos modelos desplegados de forma privada para que tus datos nunca entrenen modelos de IA públicos. Los NDAs son estándar.',
      q6: '¿Trabajan con empresas pequeñas o solo con grandes corporaciones?',
      a6: 'Con ambas. Hemos trabajado con emprendedores individuales y equipos multinacionales. Lo que importa es que tengas un problema real y el compromiso de resolverlo bien.',
      q7: '¿Cuánto cuesta un proyecto típico?',
      a7: 'Los proyectos van desde €1.500 para automatizaciones específicas hasta €15.000+ para sistemas digitales completos. Damos un desglose detallado tras una llamada gratuita de descubrimiento.',
    },
    finalcta: {
      headline: '¿Listo para competir con inteligencia?',
      sub:      'Agendá una llamada estratégica gratuita de 30 minutos. Sin ventas — solo claridad sobre lo que es posible para tu negocio.',
      cta1:     'Agendar Llamada Gratuita',
      cta2:     'Ver Servicios',
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations.es;
    for (const k of keys) value = value?.[k];
    return value ?? '';
  };

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

      {/* ===== VALUE HOOK ===== */}
      <section className="value-hook section-alt">
        <div className="container">
          <p className="hook-eyebrow">{t('hook.eyebrow')}</p>
          <h2 className="hook-headline">
            {t('hook.headline').split('copy-paste').length > 1 ? (
              <>{t('hook.headline').split('copy-paste')[0]}<em>copy-paste</em>{t('hook.headline').split('copy-paste')[1]}</>
            ) : (
              <>{t('hook.headline').split('copiar-pegar').length > 1
                ? <>{t('hook.headline').split('copiar-pegar')[0]}<em>copiar-pegar</em>{t('hook.headline').split('copiar-pegar')[1]}</>
                : t('hook.headline')
              }</>
            )}
          </h2>
          <p className="hook-body">{t('hook.body')}</p>
          <a href="#services" className="btn btn-secondary">{t('hook.cta')} →</a>
        </div>
      </section>

      {/* ===== PROCESS STEPS ===== */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-tag">Proceso</span>
            <h2 style={{ marginTop: '0.75rem' }}>{t('process.title')}</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto' }}>{t('process.subtitle')}</p>
            <div className="section-divider" />
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-title">{t('process.step1t')}</div>
              <p className="step-desc">{t('process.step1d')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-title">{t('process.step2t')}</div>
              <p className="step-desc">{t('process.step2d')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-title">{t('process.step3t')}</div>
              <p className="step-desc">{t('process.step3d')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-title">{t('process.step4t')}</div>
              <p className="step-desc">{t('process.step4d')}</p>
            </div>
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

      {/* ===== PROPUESTA ===== */}
      <section className="propuesta-section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-tag">Propuestas</span>
            <h2>{t('propuesta.titulo')}</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
              {t('propuesta.intro')}
            </p>
          </div>

          {/* PROPUESTA 1: WEB */}
          <div className="propuesta-solution">
            <div className="propuesta-solution-header">
              <span className="propuesta-solution-num">01</span>
              <h3>{t('propuesta.web.titulo')}</h3>
            </div>
            <p className="propuesta-solution-intro">{t('propuesta.web.intro')}</p>

            <div className="propuesta-block">
              <h4 className="propuesta-block-title">{t('propuesta.web.objetivos.title')}</h4>
              <div className="propuesta-features">
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.objetivos.item1')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.objetivos.item2')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.objetivos.item3')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.objetivos.item4')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.objetivos.item5')}</span></div>
              </div>
            </div>

            <div className="propuesta-block">
              <h4 className="propuesta-block-title">{t('propuesta.web.alcance.title')}</h4>
              <div className="propuesta-features">
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.alcance.item1')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.alcance.item2')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.alcance.item3')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.alcance.item4')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.alcance.item5')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.alcance.item6')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.alcance.item7')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.alcance.item8')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.web.alcance.item9')}</span></div>
              </div>
            </div>

            <div className="propuesta-block propuesta-no-incluye">
              <h4 className="propuesta-block-title">{t('propuesta.web.noIncluye.title')}</h4>
              <div className="propuesta-no-list">
                <span>✕ {t('propuesta.web.noIncluye.item1')}</span>
                <span>✕ {t('propuesta.web.noIncluye.item2')}</span>
                <span>✕ {t('propuesta.web.noIncluye.item3')}</span>
                <span>✕ {t('propuesta.web.noIncluye.item4')}</span>
                <span>✕ {t('propuesta.web.noIncluye.item5')}</span>
                <span>✕ {t('propuesta.web.noIncluye.item6')}</span>
                <span>✕ {t('propuesta.web.noIncluye.item7')}</span>
              </div>
            </div>

            <div className="propuesta-block">
              <h4 className="propuesta-block-title">{t('propuesta.web.proceso.title')}</h4>
              <div className="propuesta-proceso-grid">
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">01</div><p>{t('propuesta.web.proceso.fase1')}</p></div>
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">02</div><p>{t('propuesta.web.proceso.fase2')}</p></div>
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">03</div><p>{t('propuesta.web.proceso.fase3')}</p></div>
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">04</div><p>{t('propuesta.web.proceso.fase4')}</p></div>
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">05</div><p>{t('propuesta.web.proceso.fase5')}</p></div>
              </div>
            </div>

            <div className="propuesta-precio">
              <div className="propuesta-precio-label">{t('propuesta.web.precio.label')}</div>
              <div className="propuesta-precio-valor">{t('propuesta.web.precio.precio')}</div>
              <div className="propuesta-forma-pago">
                <div className="propuesta-forma-pago-label">{t('propuesta.web.precio.formaPago')}</div>
                <div className="propuesta-pagos">
                  <span>{t('propuesta.web.precio.pago1')}</span>
                  <span>{t('propuesta.web.precio.pago2')}</span>
                </div>
              </div>
              <div className="propuesta-mantenimiento">
                <div className="propuesta-mantenimiento-label">{t('propuesta.web.precio.mantenimiento')}</div>
                <div className="propuesta-mantenimiento-desc">{t('propuesta.web.precio.mantenimientoDesc')}</div>
              </div>
              <a href="#contact" className="btn btn-primary propuesta-cta">
                <span>{t('propuesta.web.precio.cta')}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* PROPUESTA 2: AUTOMATIZACIONES */}
          <div className="propuesta-solution">
            <div className="propuesta-solution-header">
              <span className="propuesta-solution-num">02</span>
              <h3>{t('propuesta.auto.titulo')}</h3>
            </div>
            <p className="propuesta-solution-intro">{t('propuesta.auto.intro')}</p>

            <div className="propuesta-block">
              <h4 className="propuesta-block-title">{t('propuesta.auto.objetivos.title')}</h4>
              <div className="propuesta-features">
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.objetivos.item1')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.objetivos.item2')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.objetivos.item3')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.objetivos.item4')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.objetivos.item5')}</span></div>
              </div>
            </div>

            <div className="propuesta-block">
              <h4 className="propuesta-block-title">{t('propuesta.auto.alcance.title')}</h4>
              <div className="propuesta-features">
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.alcance.item1')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.alcance.item2')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.alcance.item3')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.alcance.item4')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.alcance.item5')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.alcance.item6')}</span></div>
              </div>
            </div>

            <div className="propuesta-block">
              <h4 className="propuesta-block-title">{t('propuesta.auto.incluye.title')}</h4>
              <div className="propuesta-features">
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.incluye.item1')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.incluye.item2')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.incluye.item3')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.incluye.item4')}</span></div>
                <div className="propuesta-feature"><CheckCircle size={16} /><span>{t('propuesta.auto.incluye.item5')}</span></div>
              </div>
            </div>

            <div className="propuesta-block propuesta-no-incluye">
              <h4 className="propuesta-block-title">{t('propuesta.auto.noIncluye.title')}</h4>
              <div className="propuesta-no-list">
                <span>✕ {t('propuesta.auto.noIncluye.item1')}</span>
                <span>✕ {t('propuesta.auto.noIncluye.item2')}</span>
                <span>✕ {t('propuesta.auto.noIncluye.item3')}</span>
              </div>
            </div>

            <div className="propuesta-block">
              <h4 className="propuesta-block-title">{t('propuesta.auto.proceso.title')}</h4>
              <div className="propuesta-proceso-grid">
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">01</div><p>{t('propuesta.auto.proceso.fase1')}</p></div>
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">02</div><p>{t('propuesta.auto.proceso.fase2')}</p></div>
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">03</div><p>{t('propuesta.auto.proceso.fase3')}</p></div>
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">04</div><p>{t('propuesta.auto.proceso.fase4')}</p></div>
                <div className="propuesta-proceso-card"><div className="propuesta-proceso-num">05</div><p>{t('propuesta.auto.proceso.fase5')}</p></div>
              </div>
            </div>

            <div className="propuesta-precio">
              <div className="propuesta-precio-label">{t('propuesta.auto.precio.label')}</div>
              <div className="propuesta-precio-valor propuesta-precio-valor-lg">{t('propuesta.auto.precio.precio')}</div>
              <p className="propuesta-auto-desc">{t('propuesta.auto.precio.desc')}</p>
              <a href="#contact" className="btn btn-primary propuesta-cta">
                <span>{t('propuesta.auto.precio.cta')}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <p className="propuesta-cierre">{t('propuesta.cierre')}</p>
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

      {/* ===== TOOLBOX ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Stack</span>
            <h2 style={{ marginTop: '0.75rem' }}>{t('toolbox.title')}</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 460, margin: '0 auto' }}>{t('toolbox.subtitle')}</p>
          </div>
          <div className="toolbox-grid">
            {['n8n','Make','OpenAI GPT','Claude','LangChain','Next.js','Vercel','Supabase','HubSpot','Zapier','Airtable','WhatsApp API'].map(tech => (
              <span key={tech} className="tech-badge">
                <span className="tech-dot" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
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

      {/* ===== FAQ ===== */}
      <section id="faq" className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-tag">FAQ</span>
            <h2 style={{ marginTop: '0.75rem' }}>{t('faq.title')}</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 460, margin: '0 auto' }}>{t('faq.subtitle')}</p>
            <div className="section-divider" />
          </div>
          <FaqAccordion items={[
            { q: t('faq.q1'), a: t('faq.a1') },
            { q: t('faq.q2'), a: t('faq.a2') },
            { q: t('faq.q3'), a: t('faq.a3') },
            { q: t('faq.q4'), a: t('faq.a4') },
            { q: t('faq.q5'), a: t('faq.a5') },
            { q: t('faq.q6'), a: t('faq.a6') },
            { q: t('faq.q7'), a: t('faq.a7') },
          ]} />
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

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-inner">
            <h2 className="final-cta-headline">{t('finalcta.headline')}</h2>
            <p className="final-cta-sub">{t('finalcta.sub')}</p>
            <div className="final-cta-actions">
              <a href="#contact" className="btn btn-primary">
                <span>{t('finalcta.cta1')}</span>
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn btn-secondary">{t('finalcta.cta2')}</a>
            </div>
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
   FAQ ACCORDION COMPONENT
   ============================================================ */
function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => toggle(i)}>
            <span className="faq-question-text">{item.q}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
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