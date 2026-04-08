"use client"

import { motion } from "framer-motion"
import { Users, Rocket, Target } from "lucide-react"

const aboutMetrics = [
  { label: "Founded", value: "2024", icon: Rocket },
  { label: "Active Users", value: "50k+", icon: Users },
  { label: "Efficiency Boost", value: "45%", icon: Target },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Empowering teams to reach their <span className="text-primary italic">full potential.</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Lumina was born out of a simple frustration: tools should work for you, not the other way around. 
                We built a platform that harmonizes your workflows using intelligent AI, 
                allowing brilliant minds to focus on what they do best—creating.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {aboutMetrics.map((metric, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-foreground/5 shadow-sm">
                    <metric.icon className="w-6 h-6 text-primary mb-3" />
                    <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                    <div className="text-sm text-foreground/50 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <div className="aspect-square bg-linear-to-br from-primary to-secondary flex items-center justify-center p-12 text-white">
                <div className="text-center">
                   <div className="text-6xl font-bold mb-4 italic">&quot;Focus.&quot;</div>
                   <div className="text-xl font-medium opacity-80">— The Lumina Philosophy</div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
