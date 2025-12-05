"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import { config } from "@/lib/site-config"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const projects = config.projects

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Development Workflow Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Git Branch Visualization */}
        <div className="absolute inset-0">
          {/* Main Branch */}
          <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full">
            <div className="absolute -left-2 -top-2 w-5 h-5 bg-cyan-400 rounded-full animate-pulse border-2 border-cyan-300"></div>
            <div className="absolute -left-2 top-8 w-4 h-4 bg-blue-400 rounded-full animate-ping border border-blue-300"></div>
            <div className="absolute -left-2 top-16 w-5 h-5 bg-cyan-400 rounded-full animate-pulse border-2 border-cyan-300"></div>
            <div className="absolute -left-2 bottom-8 w-4 h-4 bg-blue-400 rounded-full animate-ping border border-blue-300"></div>
          </div>

          {/* Feature Branch */}
          <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <div className="absolute -top-2 right-0 w-4 h-4 bg-purple-400 rounded-full animate-bounce border border-purple-300"></div>
          </div>
          <div className="absolute left-1/2 top-1/4 transform translate-x-8 w-1 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full">
            <div className="absolute -left-2 top-4 w-5 h-5 bg-pink-400 rounded-full animate-pulse border-2 border-pink-300"></div>
          </div>

          {/* Branch Labels */}
          <div className="absolute left-1/2 top-1/4 transform -translate-x-16 -translate-y-8">
            <div className="text-xs text-cyan-400 font-mono bg-slate-800 px-2 py-1 rounded">main</div>
          </div>
          <div className="absolute left-1/2 top-1/4 transform translate-x-16 -translate-y-8">
            <div className="text-xs text-purple-400 font-mono bg-slate-800 px-2 py-1 rounded">feature</div>
          </div>
        </div>

        {/* Development Pipeline */}
        <div className="absolute top-8 left-8 right-8 h-2 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-pulse" style={{width: '75%', animationDuration: '3s'}}></div>
        </div>
        <div className="absolute top-12 left-8 flex space-x-8 text-xs text-cyan-400 font-mono">
          <span>Planning</span>
          <span>Design</span>
          <span>Development</span>
          <span>Testing</span>
          <span>Deploy</span>
        </div>

        {/* Code Compilation Progress */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="text-xs text-green-400 font-mono mb-2">Compiling... 87%</div>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full animate-pulse" style={{width: '87%', animationDuration: '2s'}}></div>
          </div>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0">
          {[
            { code: 'git commit -m "Add new feature"', x: 10, y: 30, color: 'text-green-400' },
            { code: 'npm run build', x: 75, y: 25, color: 'text-blue-400' },
            { code: 'docker push myapp:v1.0', x: 20, y: 70, color: 'text-cyan-400' },
            { code: 'CREATE TABLE projects', x: 80, y: 75, color: 'text-yellow-400' }
          ].map((snippet, i) => (
            <div
              key={i}
              className={`absolute ${snippet.color} font-mono text-sm opacity-60 animate-float`}
              style={{
                left: `${snippet.x}%`,
                top: `${snippet.y}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + (i % 2) * 2}s`,
                textShadow: '0 0 8px currentColor'
              }}
            >
              {snippet.code}
            </div>
          ))}
        </div>

        {/* Project Status Indicators */}
        <div className="absolute top-20 right-8 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400 font-mono">Backend API</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <span className="text-xs text-blue-400 font-mono">Frontend UI</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <span className="text-xs text-yellow-400 font-mono">Database</span>
          </div>
        </div>

        {/* Creative Design Elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 rounded-full animate-bounce ${
                i % 4 === 0 ? 'bg-cyan-400/40' :
                i % 4 === 1 ? 'bg-blue-400/40' :
                i % 4 === 2 ? 'bg-purple-400/40' : 'bg-pink-400/40'
              }`}
              style={{
                left: `${15 + (i * 8) % 70}%`,
                top: `${40 + (i * 11) % 40}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </div>

        {/* Workflow Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="workflow-flow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6"/>
            </linearGradient>
          </defs>

          {/* Workflow paths */}
          <path d="M10 20 Q30 15 50 25 T90 20" stroke="url(#workflow-flow)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDuration: '4s'}}>
            <animate attributeName="stroke-dasharray" values="0,80;80,0" dur="4s" repeatCount="indefinite"/>
          </path>
          <path d="M10 80 Q30 85 50 75 T90 80" stroke="url(#workflow-flow)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}>
            <animate attributeName="stroke-dasharray" values="0,80;80,0" dur="5s" repeatCount="indefinite"/>
          </path>
        </svg>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80"></div>
      </div>
        <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border bg-card/10 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">My Projects</h1>
              <p className="text-lg text-muted-foreground">
                A collection of work that showcases my skills in building modern web applications, solving complex
                problems, and delivering exceptional user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  )
}
