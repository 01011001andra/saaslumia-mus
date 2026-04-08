"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import NextImage from "next/image";
import { useRef } from "react";

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef} 
      className="py-24 bg-slate-950 relative overflow-hidden min-h-150 flex items-center"
    >
      {/* Immersive Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 h-[120%]"
      >
        <NextImage
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
          alt="Collaborative SaaS Team"
          fill
          className="object-cover opacity-30"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/20 to-slate-950" />
        <div className="absolute inset-0 bg-slate-950/40" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-8 font-bold tracking-wider uppercase text-xs backdrop-blur-md">
            <Sparkles className="w-4 h-4" /> Ready to scale?
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.05]">
            Ready to redefine your <br />
            <span className="italic text-primary">productivity?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
            Join thousands of forward-thinking teams already using Lumina to build the future of their workflows. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer">
                Get Started Free <ArrowRight className="w-6 h-6" />
             </button>
             <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 active:scale-95 transition-all cursor-pointer">
                Contact Sales
             </button>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all pointer-events-none">
             <div className="text-xs font-bold tracking-widest uppercase">Trusted by</div>
             <div className="h-6 w-24 bg-white/20 rounded-md" />
             <div className="h-6 w-20 bg-white/20 rounded-md" />
             <div className="h-6 w-28 bg-white/20 rounded-md" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
