import os

def create_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {path}")

def main():
    root_dir = "c:/Users/benja/OneDrive/Desktop/Aitane Web"
    
    # 1. PREMIUM CSS SYSTEM
    css_content = """
:root {
  --bg-dark: #020c1b;
  --bg-card: #112240;
  --text-main: #ccd6f6;
  --text-muted: #8892b0;
  --accent: #64ffda;
  --accent-glow: rgba(100, 255, 218, 0.1);
  --white: #e6f1ff;
  --blue-glow: rgba(29, 78, 216, 0.15);
  --font-main: 'Montserrat', sans-serif;
  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-main);
  background-color: var(--bg-dark);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 1rem 0;
  color: var(--white);
  font-weight: 700;
  line-height: 1.1;
}

h1 { font-size: clamp(2.5rem, 5vw, 4.5rem); letter-spacing: -0.02em; }
h2 { font-size: clamp(2rem, 3vw, 3rem); }
h3 { font-size: 1.5rem; }

p { margin: 0 0 1.5rem 0; color: var(--text-muted); font-size: 1.1rem; }

/* Utilities */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-8 { gap: 2rem; }

.grid { display: grid; gap: 2rem; }
.grid-2 { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
.grid-4 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }

.text-center { text-align: center; }
.text-accent { color: var(--accent); }
.font-bold { font-weight: 700; }

/* Components */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
}

.btn-primary {
  background-color: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.btn-primary:hover {
  background-color: var(--accent-glow);
  transform: translateY(-2px);
}

.btn-solid {
  background-color: var(--accent);
  color: var(--bg-dark);
  border: 1px solid var(--accent);
}

.btn-solid:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.card {
  background-color: var(--bg-card);
  padding: 2rem;
  border-radius: 8px;
  transition: var(--transition);
  height: 100%;
  border: 1px solid transparent;
}

.card:hover {
  transform: translateY(-7px);
  border-color: var(--accent);
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
}

.glass-nav {
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: var(--transition);
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-in {
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }

/* Background Blobs */
.blob {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, rgba(0,0,0,0) 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}

/* Inputs */
.input-group input {
  width: 100%;
  padding: 1rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--bg-card);
  color: var(--white);
  border-radius: 4px;
  margin-top: 0.5rem;
}
.input-group input:focus {
  outline: none;
  border-color: var(--accent);
}
"""
    create_file(os.path.join(root_dir, "src/index.css"), css_content.strip())

    # 2. PREMIUM APP COMPONENT
    app_tsx = """
import React, { useState, useEffect } from 'react';
import { Bot, Workflow, BarChart3, Mail, ChevronRight, CheckCircle2, Menu, X, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            <img src="/logo.png" alt="Aitane Logo" className="h-10" style={{filter: 'invert(1) brightness(2)'}} />
            <span className="font-bold text-2xl text-white tracking-wider">AITANE</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <NavLink href="#about">Mission</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#testimonials">Impact</NavLink>
            <a href="#contact" className="btn btn-primary text-sm py-2 px-4">
              Book Consultation
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
          <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">Next-Gen Automation Agency</p>
          <h1 className="mb-6 leading-tight">
            Transform Manual Work <br />
            into <span className="text-accent">Intelligent Growth.</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg">
            We architect autonomous systems that scale your business. 
            Stop trading time for money—leverage AI to operate with precision and speed 24/7.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="btn btn-solid text-lg">
              Start Automating <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-primary text-lg border-0 hover:bg-transparent hover:text-white">
              View Solutions
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
                 <span className="text-accent font-mono text-sm">WHO WE ARE</span>
              </div>
              <h2 className="mb-6">The Future of Work is <br/>Automated.</h2>
              <p className="mb-6">
                AITANE isn't just an agency; we are your strategic technology partner. 
                We believe that human potential should be focused on creativity and strategy, 
                not repetitive data entry or customer triage.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <FeatureItem text="Reduce Operational Costs by 40%+" />
                <FeatureItem text="Zero-Error Data Processing" />
                <FeatureItem text="Scalable Infrastructure for Growth" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent opacity-20 blur-3xl rounded-full"></div>
              <div className="card relative z-10 border-accent border-opacity-20 bg-opacity-80 backdrop-blur-sm">
                 <h3 className="text-accent mb-4">Our Philosophy</h3>
                 <p className="text-sm">
                   "To stay competitive in 2026, companies must adopt AI not as a tool, but as a team member. 
                   We build that digital workforce for you."
                 </p>
                 <div className="mt-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                    <div>
                       <div className="text-white font-bold text-sm">Founder Name</div>
                       <div className="text-xs text-muted">AITANE CEO</div>
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
            <h2 className="mb-4">Enterprise-Grade Solutions</h2>
            <p>End-to-end implementation of the world's most powerful automation tools.</p>
          </div>
          <div className="grid grid-4">
            <ServiceCard 
              icon={<Workflow size={32}/>} 
              title="Custom Workflows" 
              desc="We engineer complex logic flows using n8n and Make to connect your disjointed software ecosystem seamlessly." 
            />
            <ServiceCard 
              icon={<Bot size={32}/>} 
              title="AI Agents" 
              desc="Deploy autonomous agents that handle customer support, internal knowledge retrieval, and booking." 
            />
            <ServiceCard 
              icon={<BarChart3 size={32}/>} 
              title="CRM Architecture" 
              desc="Keep your CRM spotless with automated data enrichment, lead scoring, and pipeline movement." 
            />
            <ServiceCard 
              icon={<Mail size={32}/>} 
              title="Smart Outreach" 
              desc="Hyper-personalized email and LinkedIn campaigns that run on autopilot while maintaining a human touch." 
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32">
        <div className="container">
          <h2 className="text-center mb-16">Trusted by Innovators</h2>
          <div className="grid grid-2">
            <TestimonialCard 
              quote="AITANE didn't just save us time; they fundamentally changed how we operate. We now process 10x the volume with the same team size."
              author="Sarah Jenkins, CTO at NovaTech"
            />
            <TestimonialCard 
              quote="The ROI was immediate. The AI chatbot they built handles 80% of our support queries instantly. Best investment of the year."
              author="Michael Ross, Founder of ScaleUp"
            />
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="contact" className="py-32">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-mono mb-2">04. WHAT'S NEXT?</p>
            <h2 className="text-4xl">Get In Touch</h2>
            <p className="max-w-xl mx-auto">
              Ready to modernize your infrastructure? Book a discovery call to see if your business qualifies for our automation program.
            </p>
          </div>
          
          <div className="card border-accent/20">
             <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-2 gap-6">
                 <div className="input-group">
                   <label className="text-sm font-bold text-muted">NAME</label>
                   <input type="text" placeholder="John Doe" />
                 </div>
                 <div className="input-group">
                   <label className="text-sm font-bold text-muted">EMAIL</label>
                   <input type="email" placeholder="john@company.com" />
                 </div>
               </div>
               <div className="input-group">
                  <label className="text-sm font-bold text-muted">MESSAGE</label>
                  <textarea rows={4} className="w-full p-4 mt-2 bg-white/5 border border-[var(--bg-card)] rounded text-white focus:border-accent outline-none" placeholder="Tell us about your bottlenecks..."></textarea>
               </div>
               <button className="btn btn-solid justify-center py-4 mt-4">
                 Send Request
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
               <a href="#" className="hover:text-accent transition">Privacy</a>
               <a href="#" className="hover:text-accent transition">Terms</a>
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
