"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Communication Network Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Message Bubbles */}
        <div className="absolute inset-0">
          {[
            { message: "Hello!", x: 15, y: 20, color: 'bg-cyan-500', align: 'left' },
            { message: "Let's connect!", x: 70, y: 15, color: 'bg-blue-500', align: 'right' },
            { message: "Available for work", x: 25, y: 60, color: 'bg-purple-500', align: 'left' },
            { message: "Open to opportunities", x: 75, y: 70, color: 'bg-indigo-500', align: 'right' }
          ].map((bubble, i) => (
            <div
              key={i}
              className={`absolute ${bubble.color} text-white px-4 py-2 rounded-2xl shadow-lg animate-float max-w-xs`}
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${6 + (i % 2) * 2}s`,
                transform: bubble.align === 'right' ? 'translateX(-100%)' : 'translateX(0)'
              }}
            >
              <div className="text-sm font-medium">{bubble.message}</div>
              {/* Speech bubble tail */}
              <div className={`absolute top-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                bubble.align === 'right'
                  ? 'right-0 border-l-blue-500 transform translate-x-1'
                  : 'left-0 border-r-cyan-500 transform -translate-x-1'
              }`} style={{
                borderTopColor: bubble.color.replace('bg-', '').replace('-500', ''),
                borderBottom: 'none'
              }}></div>
            </div>
          ))}
        </div>

        {/* Social Network Connections */}
        <div className="absolute inset-0">
          {/* Connection Nodes */}
          {[
            { platform: 'GitHub', x: 20, y: 30, color: 'bg-gray-800' },
            { platform: 'LinkedIn', x: 80, y: 25, color: 'bg-blue-600' },
            { platform: 'Email', x: 30, y: 70, color: 'bg-red-500' },
            { platform: 'WhatsApp', x: 70, y: 75, color: 'bg-green-500' }
          ].map((node, i) => (
            <div
              key={i}
              className={`absolute ${node.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-pulse`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              <div className="text-white text-xs font-bold">{node.platform[0]}</div>
            </div>
          ))}
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="contact-flow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6"/>
            </linearGradient>
          </defs>

          {/* Network connections */}
          <path d="M20 30 Q50 20 80 25" stroke="url(#contact-flow)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDuration: '4s'}}>
            <animate attributeName="stroke-dasharray" values="0,60;60,0" dur="4s" repeatCount="indefinite"/>
          </path>
          <path d="M30 70 Q50 60 70 75" stroke="url(#contact-flow)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}>
            <animate attributeName="stroke-dasharray" values="0,60;60,0" dur="5s" repeatCount="indefinite"/>
          </path>
          <path d="M20 30 Q25 50 30 70" stroke="url(#contact-flow)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDuration: '3s', animationDelay: '2s'}}>
            <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>

        {/* Email Icons */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 animate-bounce"
              style={{
                left: `${10 + (i * 15) % 80}%`,
                top: `${35 + (i * 12) % 30}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${2 + (i % 2)}s`,
                fontSize: '1.5rem'
              }}
            >
              ✉️
            </div>
          ))}
        </div>

        {/* Communication Signals */}
        <div className="absolute top-16 left-16">
          <div className="relative">
            <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute inset-0 w-6 h-6 border-2 border-cyan-400/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Contact Form Interactions */}
        <div className="absolute bottom-16 right-16">
          <div className="text-xs text-green-400 font-mono bg-slate-800 px-3 py-2 rounded-lg shadow-lg animate-pulse">
            Message sent successfully! ✓
          </div>
        </div>

        {/* Database Tables */}
        <div className="absolute inset-0">
          {[
            { name: 'users', x: 10, y: 40, columns: ['id', 'name', 'email', 'created_at'] },
            { name: 'projects', x: 75, y: 35, columns: ['id', 'title', 'description', 'status'] },
            { name: 'messages', x: 20, y: 75, columns: ['id', 'sender_id', 'content', 'sent_at'] },
            { name: 'contacts', x: 80, y: 70, columns: ['id', 'name', 'email', 'message'] }
          ].map((table, i) => (
            <div
              key={i}
              className="absolute bg-slate-800/80 border border-slate-600 rounded-lg shadow-lg animate-float"
              style={{
                left: `${table.x}%`,
                top: `${table.y}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${7 + (i % 2) * 2}s`
              }}
            >
              {/* Table Header */}
              <div className="bg-slate-700 px-3 py-2 rounded-t-lg">
                <div className="text-xs text-cyan-400 font-mono font-bold">{table.name}</div>
              </div>

              {/* Table Columns */}
              <div className="p-2 space-y-1">
                {table.columns.map((column, j) => (
                  <div key={j} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="text-xs text-gray-300 font-mono">{column}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Database Relationships */}
        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <marker id="relation-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="rgb(34, 211, 238)" opacity="0.8"/>
            </marker>
          </defs>

          {/* Relationship lines */}
          <line x1="15" y1="50" x2="25" y2="80" stroke="rgb(34, 211, 238)" strokeWidth="1" opacity="0.6" markerEnd="url(#relation-arrow)" className="animate-pulse" style={{animationDuration: '3s'}}>
            <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="85" y1="45" x2="75" y2="75" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.6" markerEnd="url(#relation-arrow)" className="animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>
            <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="4s" repeatCount="indefinite"/>
          </line>
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-float ${
                i % 4 === 0 ? 'bg-cyan-400/50' :
                i % 4 === 1 ? 'bg-blue-400/50' :
                i % 4 === 2 ? 'bg-purple-400/50' : 'bg-pink-400/50'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80"></div>
      </div>
      
      {/* Content Wrapper with z-index */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Let's connect and explore how we can work together. I'm always open to new opportunities and interesting
                projects.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
