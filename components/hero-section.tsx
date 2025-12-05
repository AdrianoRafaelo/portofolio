"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Github, Linkedin, Download } from "lucide-react"

export default function HeroSection() {
  const cvUrl = "/cv.pdf" // Update with actual CV path
  const avatarUrl = "/images/profile.jpg"

  return (
    <section className="relative flex-1 flex items-center justify-center px-6 py-24 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-shimmer"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

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
             And I'm a <span className="gradient-text-animated font-bold animated-border px-4 py-2 rounded-xl">Web Developer</span>
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
                  alt="Adriano – Backend Developer"
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
  )
}
