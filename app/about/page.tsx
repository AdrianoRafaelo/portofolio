"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import {
  Server, Database, Cloud, Code2, BookOpen, Github, Coffee, Zap
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {

  const achievements = [
    { number: "50K+", text: "Lines of Code" },
    { number: "99.9%", text: "Uptime Record" },
    { number: "2M+", text: "Users Served" },
    { number: "15+", text: "Countries Reached" },
  ]

  const skills = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Nyaman bikin REST API pake Laravel & Node.js. Udah biasa handle CRUD, authentication, sama relasi database.",
      skills: ["Laravel 10/11", "Eloquent ORM", "Node.js + Express", "REST API", "JWT Auth", "Middleware"],
      level: 78,
      projects: 11,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Database & Query",
      description: "Bisa desain ERD, migration, seeder, dan nulis query yang cukup optimal (join, index, dll).",
      skills: ["MySQL", "PostgreSQL", "Migration & Seeder", "Eloquent Relationship", "Raw Query", "Basic Indexing"],
      level: 75,
      projects: 14,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Deployment",
      description: "Udah pernah deploy ke shared hosting, Railway, Render, sama VPS pake Laravel Forge / manual.",
      skills: ["Railway.app", "Render.com", "Shared Hosting", "cPanel", "Git Deploy", "Env Configuration"],
      level: 72,
      projects: 9,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Lagi Dalemin",
      description: "Sedang serius belajar biar siap magang / junior backend tahun depan.",
      skills: ["Redis & Caching", "Queue (Laravel Horizon)", "Docker Dasar", "Unit Testing", "API Documentation", "Clean Code"],
      level: 45,
      projects: 4,
      color: "from-green-500 to-emerald-500"
    },
  ]

  const favoriteStack = [
    { name: "Laravel", logo: "https://laravel.com/img/logomark.min.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "MySQL", logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
    { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
    { name: "Postman", logo: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg" },
    { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Server Rack Data Center Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Server Racks */}
        <div className="absolute inset-0">
          {/* Left Server Rack */}
          <div className="absolute left-4 top-1/4 w-16 h-64 bg-slate-800 border-2 border-slate-600 rounded-lg shadow-2xl">
            <div className="p-2 space-y-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-green-400 animate-pulse' : i % 3 === 1 ? 'bg-blue-400 animate-ping' : 'bg-yellow-400 animate-bounce'}`}></div>
                  <div className="flex-1 h-1 bg-slate-700 rounded"></div>
                </div>
              ))}
            </div>
            {/* Rack Label */}
            <div className="absolute -bottom-6 left-0 right-0 text-center">
              <div className="text-xs text-cyan-400 font-mono bg-slate-900 px-2 py-1 rounded">SRV-01</div>
            </div>
          </div>

          {/* Right Server Rack */}
          <div className="absolute right-4 top-1/3 w-16 h-64 bg-slate-800 border-2 border-slate-600 rounded-lg shadow-2xl">
            <div className="p-2 space-y-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${i % 4 === 0 ? 'bg-red-400 animate-pulse' : i % 4 === 1 ? 'bg-green-400 animate-ping' : i % 4 === 2 ? 'bg-blue-400 animate-bounce' : 'bg-purple-400 animate-pulse'}`}></div>
                  <div className="flex-1 h-1 bg-slate-700 rounded"></div>
                </div>
              ))}
            </div>
            {/* Rack Label */}
            <div className="absolute -bottom-6 left-0 right-0 text-center">
              <div className="text-xs text-cyan-400 font-mono bg-slate-900 px-2 py-1 rounded">DB-01</div>
            </div>
          </div>

          {/* Center Server Rack */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-80 bg-slate-800 border-2 border-slate-600 rounded-lg shadow-2xl">
            <div className="p-3 space-y-2">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${i % 5 === 0 ? 'bg-cyan-400 animate-pulse' : i % 5 === 1 ? 'bg-blue-400 animate-ping' : i % 5 === 2 ? 'bg-green-400 animate-bounce' : i % 5 === 3 ? 'bg-yellow-400 animate-pulse' : 'bg-purple-400 animate-ping'}`}></div>
                  <div className="flex-1 h-2 bg-slate-700 rounded"></div>
                  <div className="w-2 h-2 bg-slate-600 rounded"></div>
                </div>
              ))}
            </div>
            {/* Rack Label */}
            <div className="absolute -bottom-8 left-0 right-0 text-center">
              <div className="text-xs text-cyan-400 font-mono bg-slate-900 px-3 py-1 rounded">API-SERVER</div>
            </div>
          </div>
        </div>

        {/* Data Cables */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cable-flow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="1"/>
              <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0.8"/>
            </linearGradient>
          </defs>

          {/* Cable connections */}
          <path d="M15 30 Q35 25 50 40 T85 35" stroke="url(#cable-flow)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDuration: '3s'}}>
            <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M15 70 Q35 75 50 60 T85 65" stroke="url(#cable-flow)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>
            <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="4s" repeatCount="indefinite"/>
          </path>
          <path d="M50 20 Q50 35 50 50 Q50 65 50 80" stroke="url(#cable-flow)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}>
            <animate attributeName="stroke-dasharray" values="0,60;60,0" dur="5s" repeatCount="indefinite"/>
          </path>
        </svg>

        {/* Network Activity Indicators */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"
              style={{
                left: `${10 + (i * 7) % 80}%`,
                top: `${20 + (i * 9) % 60}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Cooling Fans */}
        <div className="absolute top-8 right-8 w-12 h-12 border-2 border-slate-600 rounded-full">
          <div className="absolute inset-1 border border-cyan-400/30 rounded-full animate-spin" style={{animationDuration: '2s'}}></div>
          <div className="absolute inset-2 border border-blue-400/20 rounded-full animate-spin" style={{animationDuration: '1.5s', animationDirection: 'reverse'}}></div>
        </div>

        <div className="absolute bottom-8 left-8 w-10 h-10 border-2 border-slate-600 rounded-full">
          <div className="absolute inset-1 border border-green-400/30 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
          <div className="absolute inset-2 border border-blue-400/20 rounded-full animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
        </div>

        {/* Status LEDs */}
        <div className="absolute top-16 left-16 flex space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>

        {/* Data Flow Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Database Tables */}
        <div className="absolute inset-0">
          {[
            { name: 'users', x: 5, y: 10, columns: ['id', 'username', 'email', 'role'] },
            { name: 'projects', x: 85, y: 15, columns: ['id', 'name', 'status', 'deadline'] },
            { name: 'skills', x: 10, y: 80, columns: ['id', 'name', 'level', 'category'] },
            { name: 'experiences', x: 80, y: 75, columns: ['id', 'company', 'position', 'years'] }
          ].map((table, i) => (
            <div
              key={i}
              className="absolute bg-slate-800/70 border border-slate-600 rounded-lg shadow-lg animate-float"
              style={{
                left: `${table.x}%`,
                top: `${table.y}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${8 + (i % 2) * 2}s`
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
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <marker id="db-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="rgb(34, 211, 238)" opacity="0.8"/>
            </marker>
          </defs>

          {/* Relationship lines */}
          <line x1="10" y1="20" x2="15" y2="85" stroke="rgb(34, 211, 238)" strokeWidth="1" opacity="0.6" markerEnd="url(#db-arrow)" className="animate-pulse" style={{animationDuration: '4s'}}>
            <animate attributeName="stroke-dasharray" values="0,25;25,0" dur="4s" repeatCount="indefinite"/>
          </line>
          <line x1="90" y1="25" x2="85" y2="80" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.6" markerEnd="url(#db-arrow)" className="animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}>
            <animate attributeName="stroke-dasharray" values="0,25;25,0" dur="5s" repeatCount="indefinite"/>
          </line>
        </svg>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">

        {/* HERO — TETAP 100% SEPERTI GAMBAR (NGGAK DIUBAH) */}
        <section className="py-24 md:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/40 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start animate-fade-in">
                <div className="relative group">
                  {/* Multiple glow rings for depth */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-blue-500/30 to-purple-500/30 rounded-full blur-2xl opacity-50 animate-pulse delay-300"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-blue-500/40 to-purple-500/40 rounded-full blur-xl opacity-40 animate-pulse delay-500"></div>

                  {/* Main image container with enhanced effects */}
                  <div className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-primary via-accent to-green-500 p-1 shadow-2xl animate-float group-hover:scale-105 transition-transform duration-500">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-green-500 animate-spin opacity-75" style={{animationDuration: '6s'}}>
                      <div className="w-full h-full rounded-3xl bg-background"></div>
                    </div>
                    <div className="absolute inset-1 rounded-3xl bg-background"></div>

                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                      {/* Background with enhanced overlay */}
                      <Image
                        src="/images/background.jpg"
                        alt="Background"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover rounded-3xl"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-green-500/30 rounded-3xl"></div>

                      {/* Floating particles around the image */}
                      <div className="absolute -inset-4 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-bounce delay-100"></div>
                        <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-bounce delay-300"></div>
                        <div className="absolute bottom-0 left-1/3 w-2.5 h-2.5 bg-purple-400/60 rounded-full animate-bounce delay-500"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-cyan-300/60 rounded-full animate-bounce delay-700"></div>
                        <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-blue-300/60 rounded-full animate-bounce delay-900"></div>
                      </div>

                      {/* Profile image container with enhanced effects */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative group">
                          {/* Profile glow */}
                          <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>

                          <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                            <div className="w-full h-full rounded-full bg-background overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                              <Image
                                src="/images/profile.jpg"
                                alt="Adriano - Backend Developer"
                                width={192}
                                height={192}
                                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                                priority
                              />
                              {/* Inner glow on hover */}
                              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Rotating border effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-spin opacity-0 group-hover:opacity-100 transition-opacity" style={{animationDuration: '4s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced status badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary via-accent to-green-500 text-white px-6 py-3 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-sm font-bold">Available for Work</span>
                    </div>
                  </div>

                  {/* Additional decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full opacity-60 animate-pulse delay-1000"></div>
                  <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-gradient-to-br from-accent to-green-500 rounded-full opacity-50 animate-pulse delay-1500"></div>
                </div>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-flex px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
                >
                  <span className="text-sm font-semibold text-primary">Hello, I'm Adriano</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-5xl md:text-6xl font-bold leading-tight"
                >
                  <span className="text-foreground">Backend</span>
                  <span className="gradient-text block">Developer</span>
                  <span className="text-foreground text-2xl md:text-3xl mt-4 block">From Tarutung, Indonesia</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                  Passionate developer dengan 2+ tahun experience dalam membangun digital solutions.
                  Spesialisasi di backend development, API design, dan database management untuk menciptakan aplikasi yang scalable dan efisien.
                </motion.p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {achievements.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all cursor-pointer group"
                    >
                      <motion.div
                        className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                      >
                        {a.number}
                      </motion.div>
                      <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{a.text}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILL SECTION — JUJUR SESUAI SEMESTER 5 */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Current Skills
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-muted-foreground"
              >
                Mahasiswa semester 5 yang lagi serius belajar backend
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, i) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="p-8 rounded-3xl bg-transparent border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all group hover:shadow-2xl hover:shadow-cyan-400/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold">{skill.title}</h3>
                        <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">{skill.projects} projects</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{skill.description}</p>

                    <div className="w-full bg-border/30 rounded-full h-3 mb-6 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: i * 0.3, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((s, skillIndex) => (
                        <motion.span
                          key={s}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (i * 0.2) + (skillIndex * 0.1), duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAVORITE STACK */}
        <section className="py-20 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-40 animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 max-w-5xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              Daily Tools
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-10">
              {favoriteStack.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{
                    scale: 1.2,
                    y: -10,
                    rotate: 5
                  }}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative w-24 h-24 rounded-2xl bg-card p-5 shadow-xl border border-border group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
                    </div>
                  </div>

                  <motion.p
                    className="mt-3 font-medium text-muted-foreground group-hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.p>

                  {/* Floating particles */}
                  <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary/60 rounded-full animate-ping"></div>
                    <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-accent/60 rounded-full animate-ping delay-300"></div>
                  </div>
                </motion.div>
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