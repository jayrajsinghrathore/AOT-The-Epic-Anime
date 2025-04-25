"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  images?: string[]
  videoUrl?: string
  videoThumbnail?: string
}

export function DetailModal({
  isOpen,
  onClose,
  title,
  description,
  images = [],
  videoUrl,
  videoThumbnail,
}: DetailModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Reset isPlaying when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false)
    }
  }, [isOpen])

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-xl scrollbar-hide-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10" onClick={onClose}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>

              {videoUrl && (
                <div className="relative pb-[56.25%] h-0 mb-6 rounded-lg overflow-hidden">
                  {isPlaying ? (
                    <video
                      src={videoUrl}
                      controls
                      className="absolute top-0 left-0 w-full h-full"
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <div className="absolute top-0 left-0 w-full h-full bg-black">
                      <Image
                        src={videoThumbnail || "/placeholder.svg?height=720&width=1280"}
                        alt={title}
                        fill
                        className="object-cover opacity-80"
                      />
                      <Button
                        onClick={() => setIsPlaying(true)}
                        size="lg"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16 flex items-center justify-center"
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {images && images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {images.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${title} image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                {description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
