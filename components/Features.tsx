"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Cpu, MessageSquare, BarChart3, Globe } from "lucide-react"

const features = [
  {
    title: "Instant Automation",
    description: "Connect your favorite tools and let Lumina handle the busy work with intelligent task execution.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade encryption and privacy controls ensure your data stays yours, always.",
    icon: Shield,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "AI Analysis",
    description: "Our proprietary AI models analyze your workflow to suggest peak performance optimizations.",
    icon: Cpu,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Team Collaboration",
    description: "Real-time communication and document editing built directly into your productivity dashboard.",
    icon: MessageSquare,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Deep Analytics",
    description: "Visualize bottlenecks and performance tracking with stunning, customizable charts.",
    icon: BarChart3,
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    title: "Global Reach",
    description: "Lumina scales with you, offering ultra-low latency and multi-region support for global teams.",
    icon: Globe,
    color: "bg-indigo-500/10 text-indigo-600",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Everything you need to <span className="text-primary italic">thrive.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
            Stop juggling dozens of tabs. Lumina brings your entire digital ecosystem into one powerful interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-3xl border border-foreground/5 bg-background hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
