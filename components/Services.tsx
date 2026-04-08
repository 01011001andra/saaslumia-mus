"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Cpu, BarChart3, Globe, Layers } from "lucide-react"

const services = [
  {
    title: "Workflow Automation",
    description: "Streamline repetitive tasks with our drag-and-drop automation builder.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Data Security",
    description: "Military-grade encryption for all your sensitive project documents.",
    icon: Shield,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "AI Optimization",
    description: "Intelligent suggestions to improve your team's output frequency.",
    icon: Cpu,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Connected Ecosystem",
    description: "Integrate with over 200+ popular SaaS tools without effort.",
    icon: Layers,
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    title: "Deep Analytics",
    description: "Real-time performance tracking and bottleneck identification.",
    icon: BarChart3,
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    title: "Global Collaboration",
    description: "Synchronized workspace for distributed teams across all timezones.",
    icon: Globe,
    color: "bg-purple-500/10 text-purple-600",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Powerful solutions for <span className="text-primary italic">complex problems.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
            We&apos;ve engineered Lumina to be the ultimate Swiss Army knife for digital productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] border border-foreground/5 bg-background hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                 Learn More <span className="text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
