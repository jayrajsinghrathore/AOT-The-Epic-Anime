"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function VideoHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative w-full h-full">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Video background  */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dzrs9u5fg/video/upload/v1744961873/lbxvfd6pxc9wmc84i92u.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Hero content with animation */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">ATTACK ON TITAN</h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          The epic story of freedom, sacrifice, and the true nature of humanity. Set in a world where humanity lives
          within cities surrounded by enormous walls that protect them from Titans, Attack on Titan follows Eren Yeager,
          who vows to retake the world after a Titan brings about the destruction of his hometown and the death of his
          mother.
        </p>
      </motion.div>
    </div>
  );
}
