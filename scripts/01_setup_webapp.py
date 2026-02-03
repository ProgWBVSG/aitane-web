import os
import shutil
import subprocess
import json

def create_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created {path}")

def run_command(command, cwd=None):
    try:
        result = subprocess.run(command, shell=True, check=True, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        print(f"Command '{command}' succeeded.")
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Command '{command}' failed.")
        print(e.stderr)
        raise

def main():
    root_dir = "c:/Users/benja/OneDrive/Desktop/Aitane Web"
    logo_source = "C:/Users/benja/.gemini/antigravity/brain/15f7d8b5-1840-465c-88ae-2938289acf74/uploaded_media_1770103705705.png"
    
    # 1. Package.json
    package_json = {
        "name": "aitane-web",
        "private": True,
        "version": "0.0.0",
        "type": "module",
        "scripts": {
            "dev": "vite",
            "build": "tsc -b && vite build",
            "preview": "vite preview"
        },
        "dependencies": {
            "lucide-react": "^0.344.0",
            "react": "^18.3.1",
            "react-dom": "^18.3.1"
        },
        "devDependencies": {
            "@types/react": "^18.3.3",
            "@types/react-dom": "^18.3.0",
            "@vitejs/plugin-react": "^4.3.1",
            "typescript": "^5.5.3",
            "vite": "^5.4.1"
        }
    }
    
    if not os.path.exists(os.path.join(root_dir, "package.json")):
        create_file(os.path.join(root_dir, "package.json"), json.dumps(package_json, indent=2))
    
    # 2. tsconfig.json
    tsconfig_content = """
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
"""
    if not os.path.exists(os.path.join(root_dir, "tsconfig.json")):
        create_file(os.path.join(root_dir, "tsconfig.json"), tsconfig_content.strip())
        
    # 3. vite.config.ts
    vite_config_content = """
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
"""
    create_file(os.path.join(root_dir, "vite.config.ts"), vite_config_content.strip())

    # 4. Directories
    os.makedirs(os.path.join(root_dir, "src"), exist_ok=True)
    os.makedirs(os.path.join(root_dir, "public"), exist_ok=True)

    # 5. index.html
    index_html = """<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AITANE - AI & Automation Agency</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
"""
    create_file(os.path.join(root_dir, "index.html"), index_html.strip())

    # 6. src/index.css
    css_content = """
:root {
  --color-primary: #0A192F; /* Deep Navy Blue */
  --color-secondary: #FFFFFF;
  --color-accent: #64FFDA; /* Tech cyan for highlights */
  --font-main: 'Montserrat', sans-serif;
}

body {
  margin: 0;
  font-family: var(--font-main);
  background-color: var(--color-secondary);
  color: var(--color-primary);
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}

button {
  font-family: inherit;
}
"""
    create_file(os.path.join(root_dir, "src/index.css"), css_content.strip())

    # 7. src/main.tsx
    main_tsx = """
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
"""
    create_file(os.path.join(root_dir, "src/main.tsx"), main_tsx.strip())

    # 8. src/App.tsx (Skeleton)
    app_tsx = """
import React from 'react';
import { Bot, Workflow, BarChart3, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
           <img src="/logo.png" alt="Aitane Logo" className="h-10" />
           <span className="font-bold text-xl tracking-wider">AITANE</span>
        </div>
        <div className="hidden md:flex gap-6 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">Success Stories</a>
        </div>
        <button className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full hover:opacity-90 transition">
          Book Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Transforming Manual Workflows into <span className="text-blue-800">Smart Automation</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          We help businesses achieve efficiency and growth through AI-driven automation. 
          Stop wasting time on repetitive tasks.
        </p>
        <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition">
          Schedule Your Free Consultation
        </button>
      </header>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<Workflow />} title="Workflow Automation" desc="Streamline operations with n8n and custom scripts." />
            <ServiceCard icon={<Bot />} title="AI Chatbots" desc="24/7 customer support and internal assistants." />
            <ServiceCard icon={<BarChart3 />} title="CRM Solutions" desc="Integrated systems to manage relationships effectively." />
            <ServiceCard icon={<Mail />} title="Marketing Automation" desc="Personalized campaigns at scale." />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-white py-10 text-center">
        <p>© 2026 AITANE. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-left">
      <div className="text-blue-800 mb-4 w-10 h-10">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default App;
"""
    create_file(os.path.join(root_dir, "src/App.tsx"), app_tsx.strip())

    # 9. Copy Logo
    if os.path.exists(logo_source):
        shutil.copy(logo_source, os.path.join(root_dir, "public/logo.png"))
        print("Copied logo to public/logo.png")
    else:
        print(f"Warning: Logo not found at {logo_source}")

    # 10. Install Dependencies
    print("Installing dependencies...")
    run_command("npm install", cwd=root_dir)

if __name__ == "__main__":
    main()
