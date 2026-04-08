"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-svh flex items-center pt-44 pb-32 overflow-hidden bg-slate-950"
    >
      {/* High-Impact Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Minimalist Office"
          fill
          priority
          className="object-cover opacity-50"
        />
        {/* Dark Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-transparent to-transparent opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 text-white">
            Introducing Lumina 2.0
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
            Productivity,{" "}
            <span className="text-primary italic">simplified.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
            Centralize your workflow, automate your tasks, and focus on what
            matters. Lumina is the AI-powered hub for modern high-performance
            teams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto btn-flat bg-primary text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-2 shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Start Building Free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto btn-flat bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 active:scale-95 transition-all cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Play className="w-4 h-4 text-primary fill-primary" />
              </div>
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-2xl mx-auto mt-12"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-900/50 backdrop-blur-xl">
            <Image
              src="/images/hero-mockup.png"
              alt="Lumina Dashboard Mockup"
              width={1200}
              height={675}
              priority
              className="w-full h-auto opacity-90"
            />
          </div>

          {/* Floating primary elements */}
          <motion.div
            style={{ y: y1 }}
            className="absolute -top-10 -right-10 w-36 h-36 glass-dark rounded-4xl shadow-2xl hidden md:flex items-center justify-center p-6 border border-white/20"
          >
            <div className="text-left">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-widest">
                Efficiency
              </div>
              <div className="text-3xl font-black text-primary">+45%</div>
            </div>
          </motion.div>
          <motion.div
            style={{ y: y3 }}
            className="absolute -bottom-10 -left-12 w-60 h-28 glass-dark rounded-4xl shadow-2xl hidden md:flex items-center gap-5 px-8 border border-white/20"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="text-primary w-6 h-6" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-lg font-black text-white">Connected</div>
              <div className="text-sm text-slate-400 font-bold uppercase tracking-tighter">
                All apps connected
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
