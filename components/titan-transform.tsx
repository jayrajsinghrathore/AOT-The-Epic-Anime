"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function TitanTransform() {
  const [titans, setTitans] = useState<
    Array<{ id: number; x: number; y: number; scale: number; rotation: number; color: string }>
  >([])

  useEffect(() => {
    const newTitans = []
    const colors = [
      
      "rgba(192,192,192)", // siver
      "rgba(0, 0, 0)", // black
      "rgba(25, 114, 146)",
      
    ]

    for (let i = 0; i < 15; i++) {
      newTitans.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 0.5 + Math.random() * 1.5,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    setTitans(newTitans)
  }, [])

  return (
    <div className="w-full h-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>

      {titans.map((titan) => (
        <motion.div
          key={titan.id}
          className="absolute"
          style={{
            left: `${titan.x}%`,
            top: `${titan.y}%`,
            originX: 0.5,
            originY: 0.5,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, titan.rotation, 0],
            filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
          }}
          transition={{
            duration: 20 + Math.random() * 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        >
          <svg
            width={100 * titan.scale}
            height={200 * titan.scale}
            viewBox="0 0 100 200"
            fill={titan.color}
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: `drop-shadow(0 0 10px ${titan.color})` }}
          >
            <path d="M50 0C60 0 70 10 70 30C70 50 60 70 50 70C40 70 30 50 30 30C30 10 40 0 50 0Z" />
            <path d="M30 70C30 70 20 90 20 120C20 150 30 180 50 180C70 180 80 150 80 120C80 90 70 70 70 70C70 70 60 80 50 80C40 80 30 70 30 70Z" />
            <path
              d="M20 120C20 120 10 130 10 140C10 150 20 160 20 160M80 120C80 120 90 130 90 140C90 150 80 160 80 160"
              strokeWidth="5"
              stroke={titan.color}
              fill="none"
            />

            {/* Add glowing eyes for more dramatic effect */}
            <circle cx="35" cy="40" r="5" fill="white" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="65" cy="40" r="5" fill="white" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>
      ))}

      {/* Add some particle effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: 2 + Math.random() * 5,
            height: 2 + Math.random() * 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 20,
          }}
        />
      ))}
    </div>
  )
}
