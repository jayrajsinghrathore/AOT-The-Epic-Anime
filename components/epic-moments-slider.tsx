"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function EpicMomentsSlider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 max-w-4xl mx-auto"
    >
      <Link href="/epic-moments">
        <div className="relative overflow-hidden rounded-lg cursor-pointer group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/80 z-10" />

          <div className="relative h-48 overflow-hidden">
            <video
              src="https://res.cloudinary.com/dzrs9u5fg/video/upload/v1744961873/lbxvfd6pxc9wmc84i92u.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">Watch All Epic Moments & Plot Twists</h3>
            <p className="text-lg mb-4 text-center max-w-xl">
              Explore the most shocking revelations and unforgettable scenes from the series
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20 group-hover:translate-x-2 transition-transform"
            >
              View All Videos <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-black/20 z-0"
            animate={{
              x: ["0%", "100%", "0%"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "linear",
            }}
          />
        </div>
      </Link>
    </motion.div>
  )
}
