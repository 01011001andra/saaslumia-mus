"use client"

import { motion } from "framer-motion"
import { Send, MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Let&apos;s talk about your <span className="text-primary italic">next big thing.</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
                Have questions about Lumina? Our team is ready to help you optimize your team&apos;s performance.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email Us", value: "hello@lumina.io", href: "mailto:hello@lumina.io" },
                  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                  { icon: MapPin, label: "Visit Us", value: "123 Innovation Way, San Francisco, CA", href: "#" },
                ].map((item, idx) => (
                  <a key={idx} href={item.href} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground/50 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-[3rem] p-8 md:p-12 border border-foreground/5 shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/60 ml-2 uppercase tracking-widest">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-foreground/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/60 ml-2 uppercase tracking-widest">Email Address</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 rounded-2xl border border-foreground/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/60 ml-2 uppercase tracking-widest">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl border border-foreground/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium appearance-none bg-white">
                    <option>General Inquiry</option>
                    <option>Product Support</option>
                    <option>Sales & Partnerships</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/60 ml-2 uppercase tracking-widest">Message</label>
                  <textarea rows={5} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl border border-foreground/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium resize-none"></textarea>
                </div>

                <button className="w-full bg-primary text-white py-5 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  Send Message <Send className="w-6 h-6" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
