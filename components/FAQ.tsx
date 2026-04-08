"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How does the AI automation work?",
    answer: "Lumina uses proprietary LLMs to analyze your team's common workflows. When it detects a repetitive pattern, it suggests an automation script that you can approve and activate with a single click.",
  },
  {
    question: "Is there a limit to how many apps I can connect?",
    answer: "No, our mission is to centralize your entire workspace. Whether you're on the Starter or Enterprise plan, you have access to our full library of 200+ integrations.",
  },
  {
    question: "How secure is my data on Lumina?",
    answer: "We use AES-256 encryption at rest and TLS 1.3 for data in transit. We also offer regional data residency options and SSO/SAML integration for enterprise clients.",
  },
  {
    question: "Can I try Lumina for free?",
    answer: "Absolutely. Our Starter plan is free forever for individuals. We also offer a 14-day free trial of the Professional plan for teams wanting to test advanced features.",
  },
  {
    question: "Does Lumina work offline?",
    answer: "Yes, our desktop and mobile apps support offline mode. Your changes will automatically sync once you're back online without any conflict issues.",
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Information</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Frequently Asked <span className="text-primary italic">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border transition-all duration-300 ${
                openIdx === idx ? "border-primary bg-primary/5 shadow-lg" : "border-foreground/5 bg-background"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-8 text-left cursor-pointer"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-xl font-bold text-foreground pr-8">{faq.question}</span>
                <div className={`p-2 rounded-full transition-colors ${openIdx === idx ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                  {openIdx === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-foreground/70 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-foreground/50 font-medium mb-4">Still have questions?</p>
           <button className="text-primary font-black hover:underline underline-offset-8 transition-all">
              Chat with our support team →
           </button>
        </div>
      </div>
    </section>
  )
}
