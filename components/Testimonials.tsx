"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import NextImage from "next/image"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at DesignFlow",
    content: "Lumina has completely transformed how our team manages projects. The AI insights alone have saved us at least 10 hours a week.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Mark Thompson",
    role: "Product Lead at CloudScale",
    content: "The most intuitive interface I've ever encountered in a SaaS tool. Our onboarding time dropped from 3 days to just 4 hours.",
    avatar: "https://i.pravatar.cc/150?u=mark",
  },
  {
    name: "Elena Rodriguez",
    role: "Ops Director at GlobalLink",
    content: "Security was our main concern, and Lumina exceeded our expectations. The control we have over our data is unparalleled.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-16 h-16 text-primary/10 -z-10" />
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Trusted by the world&apos;s <span className="text-primary italic">best teams.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-4xl border border-foreground/5 shadow-xl flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed italic mb-8 flex-1">
                &quot;{t.content}&quot;
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/10 mb-4 relative">
                  <NextImage src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <h4 className="text-xl font-bold">{t.name}</h4>
                <p className="text-sm font-bold text-primary/70 uppercase tracking-wider mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Brand logos row */}
        <div className="mt-24 flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {["Microsoft", "Stripe", "Airbnb", "Discord", "Zoom"].map((logo) => (
              <span key={logo} className="text-3xl font-black text-foreground">{logo}</span>
           ))}
        </div>
      </div>
    </section>
  )
}
