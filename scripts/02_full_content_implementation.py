import os

def create_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {path}")

def main():
    root_dir = "c:/Users/benja/OneDrive/Desktop/Aitane Web"
    
    # 1. Update src/index.css for better utility classes or styles
    css_content = """
:root {
  --color-primary: #0a192f;
  --color-secondary: #ffffff;
  --color-accent: #64ffda;
  --color-text-light: #8892b0;
  --color-text-heading: #ccd6f6;
  --font-main: 'Montserrat', sans-serif;
}

body {
  margin: 0;
  font-family: var(--font-main);
  background-color: var(--color-secondary);
  color: #333;
  line-height: 1.6;
}

h1, h2, h3, h4 {
  color: var(--color-primary);
  font-weight: 700;
  margin-top: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--color-primary);
  display: inline-block;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--color-primary);
}

.section {
  padding: 5rem 0;
}

.bg-light {
  background-color: #f8f9fa;
}

.grid-cols-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.grid-cols-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }

.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.testimonial-card {
  border-left: 4px solid var(--color-primary);
  background: #f8f9fa;
  padding: 1.5rem;
  font-style: italic;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}
"""
    create_file(os.path.join(root_dir, "src/index.css"), css_content.strip())

    # 2. Update src/App.tsx
    app_tsx = """
import React, { useState } from 'react';
import { Bot, Workflow, BarChart3, Mail, ChevronRight, CheckCircle2, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Aitane Logo" className="h-10" />
            <span className="font-bold text-2xl text-[var(--color-primary)] tracking-wide">AITANE</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wide text-gray-600 items-center">
            <a href="#about" className="hover:text-[var(--color-primary)] transition">About</a>
            <a href="#services" className="hover:text-[var(--color-primary)] transition">Services</a>
            <a href="#testimonials" className="hover:text-[var(--color-primary)] transition">Testimonials</a>
            <a href="#contact" className="btn-primary">Get Started</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg">
             <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
             <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
             <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
             <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 text-center bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[var(--color-primary)]">
            Transforming Manual Workflows <br/>into <span style={{color: '#2563eb'}}>Smart Automation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            AITANE helps forward-thinking businesses unlock efficiency and growth through cutting-edge AI automation. 
            Focus on what matters; let us handle the rest.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg px-8 py-3">
              Schedule Your Free Consultation
            </a>
            <a href="#services" className="px-8 py-3 font-semibold text-[var(--color-primary)] hover:bg-gray-100 rounded transition flex items-center justify-center gap-2">
              Explore Our Services <ChevronRight size={20}/>
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Driven by a Mission to Innovate</h2>
              <p className="text-gray-600 mb-6 text-lg">
                At AITANE, our vision is a world where businesses operate at their peak potential, free from the bottlenecks of repetitive manual labor. 
                We are committed to delivering superior results by integrating the latest in Artificial Intelligence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600"/> Data-Driven Decision Making</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600"/> Scalable Automation Frameworks</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600"/> Continuous Innovation & Support</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
               <div className="bg-[var(--color-primary)] text-white p-8 rounded-xl shadow-xl">
                 <h3 className="text-2xl font-bold mb-4">Why Trust Us?</h3>
                 <p className="mb-4">
                   In the rapidly evolving landscape of AI, staying ahead is not just an advantage—it's a necessity. 
                   AITANE bridges the gap between complex technology and practical business application.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end automation solutions tailored to your unique business needs.
            </p>
          </div>
          <div className="grid-cols-4">
            <ServiceCard 
              icon={<Workflow size={40}/>} 
              title="Workflow Automation" 
              desc="Seamlessly connect your apps using n8n and Make. Automate complex processes without writing code." 
            />
            <ServiceCard 
              icon={<Bot size={40}/>} 
              title="AI Chatbots" 
              desc="Intelligent agents that handle customer support, internal queries, and lead qualification 24/7." 
            />
            <ServiceCard 
              icon={<BarChart3 size={40}/>} 
              title="CRM Solutions" 
              desc="Optimize your customer relationship management with automated data entry and follow-ups." 
            />
            <ServiceCard 
              icon={<Mail size={40}/>} 
              title="Marketing Automation" 
              desc="Launch personalized campaigns at scale using AI-driven insights and automated triggers." 
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid-cols-2">
            <div className="testimonial-card">
              <p className="mb-4 text-gray-700">"AITANE transformed our lead generation process. We went from processing 50 leads a week manually to 500 automatically. The ROI has been incredible."</p>
              <div className="font-bold">- Sarah J., CEO of TechFlow</div>
            </div>
            <div className="testimonial-card">
              <p className="mb-4 text-gray-700">"The AI chatbot they implemented reduced our support ticket volume by 60%. Our team can finally focus on complex issues."</p>
              <div className="font-bold">- Mark T., Operations Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="contact" className="section" style={{backgroundColor: 'var(--color-primary)', color: 'white'}}>
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Automate?</h2>
              <p className="mb-8 text-gray-300">
                Book a free 15-minute consultation with our experts. We'll analyze your current workflows and identify the best opportunities for automation.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
                   <span>Schedule a call</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
                   <span>Get a custom automation plan</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
                   <span>Start saving time & money</span>
                 </div>
              </div>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Book Your Session</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">Work Email</label>
                  <input type="email" placeholder="john@company.com" />
                </div>
                <button className="w-full btn-primary text-center">Confirm Booking</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="container">
          <p>&copy; 2026 AITANE Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="card text-left">
      <div className="text-[var(--color-primary)] mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-3 text-[var(--color-primary)]">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default App;
"""
    create_file(os.path.join(root_dir, "src/App.tsx"), app_tsx.strip())

if __name__ == "__main__":
    main()
