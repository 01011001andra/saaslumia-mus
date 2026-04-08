"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center justify-between w-full max-w-7xl px-6 py-3 
          pointer-events-auto rounded-full transition-all duration-500 shadow-2xl
          ${scrolled ? "glass-dark py-2" : "glass"}
        `}
      >
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${scrolled ? "text-white" : "text-foreground"}`}>Lumina</span>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-300 cursor-pointer ${scrolled ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-primary"}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className={`text-sm font-bold transition-colors cursor-pointer ${scrolled ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-primary"}`}>Sign In</button>
          <button className="btn-flat bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          className={`lg:hidden p-2 transition-colors cursor-pointer ${scrolled ? "text-white" : "text-foreground"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden fixed inset-4 top-24 glass rounded-3xl p-8 z-40 flex flex-col items-center gap-4 shadow-2xl pointer-events-auto overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="w-full border-foreground/10 my-2" />
            <button className="text-lg font-bold">Sign In</button>
            <button className="btn-flat bg-primary text-white w-full py-4 rounded-xl font-bold">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
