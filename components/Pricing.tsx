"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals and side projects.",
    features: ["5 Automations", "Basic Dashboards", "2-Day Task History", "Community Support"],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Professional",
    price: "$29",
    description: "Ideal for growing teams needing more power.",
    features: ["Unlimited Automations", "Advanced Charts", "30-Day Task History", "Priority Support", "AI Suggestions", "Team Collaboration"],
    cta: "Get Pro Now",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for large organizations.",
    features: ["Uncapped Usage", "Real-time Auditing", "Unlimited History", "Dedicated Manager", "On-prem Options", "Custom Integrations"],
    cta: "Contact Sales",
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Simple, honest <span className="text-primary italic">pricing.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
            Choose the plan that fits your growth. No hidden fees, no complex contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`
                relative p-10 rounded-[2.5rem] flex flex-col 
                ${plan.featured 
                  ? "bg-white shadow-2xl border-4 border-primary z-10 scale-105" 
                  : "bg-white/50 backdrop-blur-sm border border-foreground/5 shadow-xl hover:shadow-2xl transition-shadow"}
              `}
            >
              {plan.featured && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-foreground/50">/mo</span>}
              </div>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                {plan.description}
              </p>

              <hr className="border-foreground/5 mb-8" />

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full ${plan.featured ? "bg-primary/20" : "bg-primary/10"} flex items-center justify-center mt-0.5`}>
                      <Check className={`w-3 h-3 ${plan.featured ? "text-primary" : "text-primary"} stroke-3`} />
                    </div>
                    <span className="text-foreground/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`
                w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300
                ${plan.featured 
                  ? "bg-primary text-white shadow-xl shadow-primary/20 hover:opacity-90" 
                  : "bg-white text-foreground border-2 border-foreground/5 hover:bg-foreground/5"}
              `}>
                {plan.cta} <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
