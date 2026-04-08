"use client"

import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp, Lock, Sparkles } from "lucide-react"

const reasons = [
  {
    title: "Unmatched Speed",
    description: "Our core engine is built for low-latency interactions, ensuring zero lag in your creative flow.",
    icon: TrendingUp,
  },
  {
    title: "Privacy First",
    description: "We don't just protect your data; we architect our systems so we can't even see it.",
    icon: Lock,
  },
  {
    title: "AI Integration",
    description: "Lumina's AI doesn't replace you—it augments your existing skills and instincts.",
    icon: Sparkles,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
          
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-white uppercase bg-white/10 rounded-full">
                Value Proposition
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Why teams are switching to <span className="italic">Lumina.</span>
              </h2>
              <div className="space-y-8">
                {reasons.map((reason, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <reason.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                      <p className="opacity-70 leading-relaxed font-medium">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-accent" />
                    <div>
                      <div className="h-4 w-32 bg-white/20 rounded-full mb-2" />
                      <div className="h-3 w-20 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent w-5 h-5 shrink-0" />
                      <div className="h-4 w-full bg-white/10 rounded-full" />
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent w-5 h-5 shrink-0" />
                      <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent w-5 h-5 shrink-0" />
                      <div className="h-4 w-5/6 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-white/10 text-center">
                     <span className="text-3xl font-bold italic">99.9%</span>
                     <p className="text-xs opacity-50 font-bold uppercase tracking-widest mt-2">Uptime Reliability</p>
                  </div>
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 md:-right-12 glass rounded-2xl p-6 text-foreground shadow-2xl max-w-50">
                   <p className="text-sm font-bold italic mb-2">&quot;The best workflow tool we&apos;ve used in a decade.&quot;</p>
                   <span className="text-xs font-bold text-primary opacity-70">— CTO, TechCorp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
