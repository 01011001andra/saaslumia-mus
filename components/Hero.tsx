"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Background blobs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Introducing Lumina 2.0
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Productivity, <span className="text-primary italic">simplified.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed">
            Centralize your workflow, automate your tasks, and focus on what matters. 
            Lumina is the AI-powered hub for modern high-performance teams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="btn-flat bg-accent text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center gap-2 shadow-xl shadow-accent/20">
              Start Building Free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-flat bg-white border-2 border-foreground/5 text-foreground px-8 py-4 rounded-2xl text-lg font-bold flex items-center gap-2 hover:bg-foreground/5">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Play className="w-4 h-4 text-primary fill-primary" />
              </div>
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-white">
            <Image
              src="/images/hero-mockup.png"
              alt="Lumina Dashboard Mockup"
              width={1200}
              height={675}
              priority
              className="w-full h-auto"
            />
          </div>
          
          {/* Floating accent elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 glass rounded-3xl shadow-xl hidden md:flex items-center justify-center p-4">
             <div className="text-left">
                <div className="text-xs font-bold text-foreground/50 uppercase mb-1">Efficiency</div>
                <div className="text-2xl font-bold text-primary">+45%</div>
             </div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-20 glass rounded-2xl shadow-xl hidden md:flex items-center gap-3 px-6">
             <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full" />
             </div>
             <div className="text-left leading-tight">
                <div className="text-sm font-bold">Syncing...</div>
                <div className="text-xs text-foreground/50">All apps connected</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
