"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import {
  Download, Facebook, Twitter, Github, Linkedin,
  ArrowRight, Star, Award, Zap, Users, Code2, Sparkles
} from "lucide-react"
import Image from "next/image"

// Ganti path ini sesuai gambar kamu
const avatarUrl = "/images/ppcis.jpg"  
const cvUrl = "/cv-Adriano.pdf"           // taruh di folder public

export default function Home() {
  const features = [
    { icon: Code2, title: "Full Stack Development", description: "End-to-end web development dengan teknologi modern dan best practices", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, title: "High Performance", description: "Optimized applications dengan loading cepat dan user experience terbaik", color: "from-green-500 to-emerald-500" },
    { icon: Users, title: "User Centric", description: "Design yang intuitif dan responsive untuk semua device dan platform", color: "from-purple-500 to-pink-500" },
    { icon: Award, title: "Quality Code", description: "Clean, maintainable code dengan testing dan documentation lengkap", color: "from-orange-500 to-red-500" }
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "25+", label: "Technologies Mastered" }
  ]

  return (
    <div className="min-h-screen flex flex-col animated-backend-bg">
      {/* Floating Code Snippets */}
      <div className="floating-code">{"const backend = () => { return 'awesome' }"}</div>
      <div className="floating-code">{"SELECT * FROM users WHERE active = true;"}</div>
      <div className="floating-code">{"app.get('/api/data', async (req, res) => {})"}</div>
      <div className="floating-code">{"<?php echo 'Hello World'; ?>"}</div>
      <div className="floating-code">{"npm install express mongoose"}</div>
      
      {/* Floating Particles */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      
      {/* Floating Shapes */}
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      
      {/* Floating Database Tables */}
      <div className="floating-db-table"></div>
      <div className="floating-db-table"></div>
      <div className="floating-db-table"></div>
      <div className="floating-db-table"></div>
      <div className="floating-db-table"></div>
      
      {/* Floating Database Relations */}
      <div className="floating-db-relation"></div>
      <div className="floating-db-relation"></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content Wrapper with z-index */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* HERO – EXACTLY SEPERTI GAMBAR */}
        <section className="flex-1 flex items-center justify-center px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <p className="text-muted-foreground text-lg tracking-wider fade-in-up opacity-0 delay-200">
              Hello, It's Me
            </p>

             <h1 className="text-6xl md:text-8xl font-bold leading-tight fade-in-up opacity-0 delay-400">
              <span className="gradient-text-animated px-6 py-3 rounded-2xl">Adriano</span>
             </h1>

             <h2 className="text-4xl md:text-6xl font-medium text-muted-foreground fade-in-up opacity-0 delay-600">
               And I'm a <span className="gradient-text-animated font-bold animated-border px-4 py-2 rounded-xl">Backend Developer</span>
             </h2>

            {/* Social Icons */}
            <div className="flex gap-5 justify-center lg:justify-start">
              {[Facebook, Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card rounded-full hover:bg-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              href={cvUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition text-lg shadow-xl"
            >
              Download CV
              <Download className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Foto Karakter Kanan - Enhanced with Modern Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Multiple glow rings for depth */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full blur-2xl opacity-50 animate-pulse delay-300"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-purple-500/40 rounded-full blur-xl opacity-40 animate-pulse delay-500"></div>

              {/* Main image container with enhanced effects */}
              <div className="relative rounded-full overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin opacity-75" style={{animationDuration: '6s'}}>
                  <div className="w-full h-full rounded-full bg-background"></div>
                </div>

                {/* Inner rotating border */}
                <div className="absolute inset-2 rounded-full border-2 border-cyan-500/50 animate-spin opacity-0 group-hover:opacity-100 transition-opacity" style={{animationDuration: '4s'}}></div>

                {/* Floating particles around the image */}
                <div className="absolute -inset-4 pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-bounce delay-100"></div>
                  <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-0 left-1/3 w-2.5 h-2.5 bg-purple-400/60 rounded-full animate-bounce delay-500"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-cyan-300/60 rounded-full animate-bounce delay-700"></div>
                  <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-blue-300/60 rounded-full animate-bounce delay-900"></div>
                </div>

                {/* Main image with hover effects */}
                <div className="relative rounded-full overflow-hidden">
                  <Image
                    src={avatarUrl}
                    alt="Adriano – Backendtend Developer"
                    width={550}
                    height={700}
                    className="drop-shadow-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter group-hover:brightness-110"
                    priority
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-50 animate-pulse delay-1500"></div>
              </div>

            </div>
          </motion.div>
        </div>
        </section>

        {/* TECH STACK / SKILLS SECTION – GANTI DARI STATS KE LOGO */}
  <section className="py-24 md:py-32 border-y border-border bg-gradient-to-b from-background to-card/30">
  <div className="container mx-auto px-6 max-w-6xl">
    
    {/* Judul Optional (bisa dihapus kalau mau full logo only) */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Technologies I <span className="text-primary">Master</span>
      </h2>
      <p className="text-muted-foreground">Tools & languages yang saya pernah gunakan</p>
    </motion.div>

    {/* Grid Logo */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center">
      {[
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "PHP",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "MySQL",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Dart",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }
      ].map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="group flex flex-col items-center"
        >
          <div className="p-6 bg-card/50 rounded-3xl border border-border backdrop-blur-sm
                          group-hover:border-primary group-hover:shadow-2xl group-hover:shadow-primary/30
                          transition-all duration-300">
            <Image
              src={tech.logo}
              alt={tech.name}
              width={80}
              height={80}
              className="drop-shadow-lg group-hover:drop-shadow-2xl transition-all"
            />
          </div>
          <p className="mt-4 text-muted-foreground text-sm font-medium group-hover:text-primary transition-colors">
            {tech.name}
          </p>
        </motion.div>
      ))}
    </div>

<div className="mt-20 px-8">
  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-70">
    {[
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase" }
    ].map((tech, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.7, y: 0 }}
        transition={{ delay: i * 0.05, duration: 0.5 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1.3, 
          y: -8 
        }}
        className="transition-all duration-300"
      >
        <Image
          src={tech.src}
          alt={tech.alt}
          width={56}
          height={56}
          className="grayscale hover:grayscale-0 drop-shadow-md hover:drop-shadow-xl transition-all"
        />
      </motion.div>
    ))}
  </div>
</div>

  </div>
        </section>

        {/* FEATURES */}
      {/* WHY CHOOSE MY SERVICES → DIUBAH JADI VERSI JUJUR MAHASISWA BACKEND PEMULA */}
<section className="py-24 md:py-32">
  <div className="container mx-auto px-6 max-w-6xl">
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      className="text-center mb-16"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        why choose <span className="text-primary">my service</span>?
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Mahasiswa yang serius belajar backend, cepat adaptasi, dan selalu kasih 100% effort
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          icon: Code2, 
          title: "Backend Enthusiast", 
          description: "Passion banget sama Laravel & Node.js — udah bikin 10+ API sendiri", 
          color: "from-blue-500 to-cyan-500" 
        },
        { 
          icon: Zap, 
          title: "Fast Learner", 
          description: "Bisa langsung nyambung sama codebase baru dalam 1-2 hari", 
          color: "from-green-500 to-emerald-500" 
        },
        { 
          icon: Users, 
          title: "Team Player", 
          description: "Seneng kolaborasi, nggak takut nanya, dan suka bantu temen debug", 
          color: "from-purple-500 to-pink-500" 
        },
        { 
          icon: Award, 
          title: "Jujur & Bertanggung Jawab", 
          description: "Kalau stuck bilang stuck, kalau bisa langsung kerjain sampe beres", 
          color: "from-orange-500 to-red-500" 
        }
      ].map((f, i) => {
        const Icon = f.icon
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl border border-border bg-gradient-to-br from-card/50 to-card/30 hover:shadow-2xl hover:shadow-primary/20 transition-all backdrop-blur-sm group"
          >
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${f.color} mb-6 group-hover:scale-110 transition-transform`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        )
      })}
    </div>
  </div>
        </section>

        {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5 -z-10" />
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold">
              Ready to <span className="text-primary">Start Your Project</span>?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Mari berkolaborasi untuk menghadirkan ide Anda menjadi kenyataan dengan solusi web yang modern, scalable, dan impactful.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all text-lg"
              >
                Start Conversation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-primary-foreground transition-all text-lg"
              >
                View Portfolio
              </motion.a>
            </div>

            <p className="text-sm text-muted-foreground">
              Response dalam 24 jam • Free consultation • No commitment required
            </p>
          </motion.div>
        </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}