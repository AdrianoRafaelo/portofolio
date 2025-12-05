"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import {
  Download, Facebook, Twitter, Github, Linkedin,
  ArrowRight, Star, Award, Zap, Users, Code2, Sparkles
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

// Ganti path ini sesuai gambar kamu
const avatarUrl = "/images/ppcis.jpg"
const cvUrl = "https://drive.google.com/file/d/12KNx_1cRtz_pEy14JYM1ntglEvSBEDnh/view?usp=drive_link"           // CV link

export default function Home() {
  const [dataPackets, setDataPackets] = useState<Array<{
    top: string;
    left: string;
    delay: string;
    duration: string;
    rotation: number;
  }>>([])
  const [binaryPositions, setBinaryPositions] = useState<Array<{
    left: string;
    delay: string;
    duration: string;
    isOne: boolean;
  }>>([])

  const [fallingColumns, setFallingColumns] = useState<Array<{
    left: string;
    delay: string;
    duration: string;
    characters: Array<{ char: string; color: string; delay: string }>;
  }>>([])

  const [scrollY, setScrollY] = useState(0)

  const [binaryStreams, setBinaryStreams] = useState<Array<{
    left: string;
    top: string;
    delay: string;
    duration: string;
    bits: string[];
  }>>([])

  const [floatingParticles, setFloatingParticles] = useState<Array<{
    left: string;
    top: string;
    delay: string;
    duration: string;
  }>>([])

  useEffect(() => {
    // Generate random positions for data packets only on client side
    const packets = [...Array(8)].map((_, i) => ({
      top: `${20 + Math.random() * 60}%`,
      left: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${1 + Math.random() * 2}s`,
      rotation: Math.random() * 360
    }))
    setDataPackets(packets)

    // Generate random positions for binary rain
    const binaries = [...Array(15)].map((_, i) => ({
      left: `${i * 6 + Math.random() * 5}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${3 + Math.random() * 2}s`,
      isOne: Math.random() > 0.5
    }))
    setBinaryPositions(binaries)

    // Generate falling columns for Matrix Rain
    const columns = [...Array(15)].map((_, col) => ({
      left: `${col * 6.5 + 1}%`,
      delay: `${col * 0.2}s`,
      duration: `${6 + Math.random() * 3}s`,
      characters: [...Array(25)].map((_, row) => ({
        char: Math.random() > 0.5 ? '1' : '0',
        color: Math.random() > 0.5 ? 'text-blue-400' : 'text-cyan-400',
        delay: `${row * 0.08}s`
      }))
    }))
    setFallingColumns(columns)

    // Generate binary streams
    const streams = [...Array(8)].map((_, i) => ({
      left: `${12 + i * 10}%`,
      top: `${10 + (i % 2) * 70}%`,
      delay: `${i * 0.3}s`,
      duration: `${3 + (i % 2)}s`,
      bits: [...Array(15)].map(() => Math.random() > 0.5 ? '1' : '0')
    }))
    setBinaryStreams(streams)

    // Generate floating particles
    const particles = [...Array(8)].map((_, i) => ({
      left: `${15 + (i * 11) % 70}%`,
      top: `${25 + (i * 13) % 50}%`,
      delay: `${i * 0.7}s`,
      duration: `${5 + (i % 2) * 2}s`
    }))
    setFloatingParticles(particles)

    // Add scroll listener for parallax effect
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Full Page Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Server Rack Data Center Animation */}
        <div className="absolute inset-0">
          {/* Server Racks */}
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
            <linearGradient id="home-cable-flow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="1"/>
              <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0.8"/>
            </linearGradient>
          </defs>

          {/* Cable connections */}
          <path d="M15 30 Q35 25 50 40 T85 35" stroke="url(#home-cable-flow)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDuration: '3s'}}>
            <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M15 70 Q35 75 50 60 T85 65" stroke="url(#home-cable-flow)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>
            <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="4s" repeatCount="indefinite"/>
          </path>
          <path d="M50 20 Q50 35 50 50 Q50 65 50 80" stroke="url(#home-cable-flow)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}>
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

        {/* Database Tables */}
        <div className="absolute inset-0">
          {[
            { name: 'portfolio', x: 2, y: 5, columns: ['id', 'title', 'tech', 'status'] },
            { name: 'skills', x: 88, y: 10, columns: ['id', 'name', 'level', 'type'] },
            { name: 'contacts', x: 5, y: 85, columns: ['id', 'name', 'email', 'message'] },
            { name: 'projects', x: 85, y: 80, columns: ['id', 'name', 'desc', 'link'] }
          ].map((table, i) => (
            <div
              key={i}
              className="absolute bg-slate-800/50 border border-slate-600 rounded-lg shadow-lg animate-float"
              style={{
                left: `${table.x}%`,
                top: `${table.y}%`,
                animationDelay: `${i * 1.8}s`,
                animationDuration: `${9 + (i % 2) * 2}s`
              }}
            >
              {/* Table Header */}
              <div className="bg-slate-700 px-2 py-1 rounded-t-lg">
                <div className="text-xs text-cyan-400 font-mono font-bold">{table.name}</div>
              </div>

              {/* Table Columns */}
              <div className="p-1 space-y-0.5">
                {table.columns.map((column, j) => (
                  <div key={j} className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <div className="text-xs text-gray-300 font-mono">{column}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Database Tables */}
        <div className="absolute inset-0">
          {[
            { name: 'portfolio', x: 15, y: 25, columns: ['id', 'title', 'tech', 'status'] },
            { name: 'skills', x: 70, y: 30, columns: ['id', 'name', 'level', 'type'] },
            { name: 'contacts', x: 20, y: 65, columns: ['id', 'name', 'email', 'message'] },
            { name: 'projects', x: 65, y: 70, columns: ['id', 'name', 'desc', 'link'] }
          ].map((table, i) => (
            <div
              key={i}
              className="absolute bg-slate-800/60 border border-slate-600 rounded-lg shadow-lg animate-float"
              style={{
                left: `${table.x}%`,
                top: `${table.y}%`,
                animationDelay: `${i * 1.8}s`,
                animationDuration: `${9 + (i % 2) * 2}s`
              }}
            >
              {/* Table Header */}
              <div className="bg-slate-700 px-2 py-1 rounded-t-lg">
                <div className="text-xs text-cyan-400 font-mono font-bold">{table.name}</div>
              </div>

              {/* Table Columns */}
              <div className="p-1 space-y-0.5">
                {table.columns.map((column, j) => (
                  <div key={j} className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <div className="text-xs text-gray-300 font-mono">{column}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80"></div>
      </div>

      {/* Content Wrapper with z-index */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* HERO – EXACTLY SEPERTI GAMBAR */}
        <section className="relative flex-1 flex items-center justify-center px-6 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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
               <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-white bg-clip-text text-transparent px-6 py-3 rounded-2xl drop-shadow-lg" style={{filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))'}}>Adriano</span>
             </h1>

             <h2 className="text-4xl md:text-6xl font-medium text-muted-foreground fade-in-up opacity-0 delay-600">
               And I'm a <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-white bg-clip-text text-transparent font-bold px-4 py-2 rounded-xl drop-shadow-lg" style={{filter: 'drop-shadow(0 0 15px rgba(34, 211, 238, 0.4))'}}>Web Developer</span>
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
                    width={400}
                    height={500}
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
   <section className="relative py-24 md:py-32 border-y border-border overflow-hidden">
     {/* Subtle complementary background with gentle animation */}
     <div className="absolute inset-0 -z-10">
       <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-900/20 to-blue-950/30 animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>

       {/* Very subtle floating particles */}
       <div className="absolute inset-0">
         {[...Array(8)].map((_, i) => (
           <div
             key={i}
             className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-bounce"
             style={{
               left: `${20 + (i * 8)}%`,
               top: `${30 + (i % 3) * 20}%`,
               animationDelay: `${i * 1.5}s`,
               animationDuration: `${3 + (i % 2)}s`
             }}
           />
         ))}
       </div>
     </div>
    <div className="container mx-auto px-6 max-w-6xl relative z-10">
    
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
          <div className="p-6 bg-transparent rounded-3xl border-2 border-cyan-400/30 backdrop-blur-sm
                          group-hover:border-cyan-400/60 group-hover:shadow-2xl group-hover:shadow-cyan-400/30
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
<section className="relative py-24 md:py-32 overflow-hidden">
  {/* Modern gradient background with subtle animation */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-900/25 to-cyan-950/30 animate-pulse" style={{animationDuration: '10s'}}></div>

    {/* Modern geometric accents */}
    <div className="absolute top-10 right-10 w-20 h-20 border border-cyan-400/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
    <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
    <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-blue-400/15 rotate-12 animate-pulse" style={{animationDuration: '4s'}}></div>
  </div>
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
            className="p-8 rounded-3xl border-2 border-cyan-400/30 bg-transparent hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all group backdrop-blur-sm"
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
                View Project
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
