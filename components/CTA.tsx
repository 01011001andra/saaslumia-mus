"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative rounded-[3rem] overflow-hidden bg-primary p-12 md:p-24 text-center text-white shadow-2xl"
        >
          {/* Decorative background effects */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2" />
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Ready to redefine your <span className="italic">productivity?</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-80 mb-12 leading-relaxed font-medium">
              Join thousands of forward-thinking teams already using Lumina to build the future of their workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-accent/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                  Get Started Free <ArrowRight className="w-6 h-6" />
               </button>
               <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 active:scale-95 transition-all">
                  Contact Sales
               </button>
            </div>
            
            <p className="mt-8 text-sm opacity-50 font-bold uppercase tracking-widest">
               No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
