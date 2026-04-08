"use client"

import { motion } from "framer-motion"
import NextImage from "next/image"

const galleryItems = [
  {
    title: "Desktop Workspace",
    description: "The primary hub for your daily operations.",
    image: "/images/hero-mockup.png",
    gridSpan: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Mobile Tracking",
    description: "Stay productive on the move with our companion app.",
    image: "/images/mobile-mockup.png",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Advanced Analytics",
    description: "Deep dive into your team's performance data.",
    image: "/images/analytics-mockup.png",
    gridSpan: "md:col-span-3 md:row-span-2",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Visual Tour</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experience the <span className="text-primary italic">Lumina interface.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${item.gridSpan} group relative rounded-4xl overflow-hidden border border-foreground/5 shadow-xl bg-background`}
            >
              <NextImage
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                 <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                 <p className="opacity-90 font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
