"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Connect Your Apps",
    description: "Link your existing tech stack to Lumina in seconds with one-click integrations.",
  },
  {
    step: "02",
    title: "Define Workflows",
    description: "Map out your ideal processes or let our AI suggest optimized paths based on your data.",
  },
  {
    step: "03",
    title: "Scale Productivity",
    description: "Watch as routine tasks vanish, giving your team the space to do their best creative work.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">How it Works</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Three simple steps to <span className="text-primary italic">efficiency.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-26 left-[10%] right-[10%] h-1 bg-primary/10 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative text-center"
              >
                <div className="inline-flex w-24 h-24 rounded-full border-4 border-primary text-primary text-3xl font-black items-center justify-center shadow-xl bg-white mb-8">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-foreground/70 leading-relaxed px-4">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 p-8 rounded-4xl bg-primary shadow-2xl skew-y-1 relative max-w-4xl mx-auto">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 -skew-y-1">
              <div className="text-white text-center md:text-left">
                 <h4 className="text-2xl font-bold mb-2">Ready to see it in action?</h4>
                 <p className="opacity-80">Join over 2,000 teams who streamlined their processes this month.</p>
              </div>
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors shrink-0">
                 Book a Live Demo
              </button>
           </div>
        </div>
      </div>
    </section>
  )
}
