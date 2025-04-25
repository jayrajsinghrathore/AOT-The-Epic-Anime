"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Play, X } from "lucide-react"

export default function ErenMikasaPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const moments = [
    {
      title: "The Red Scarf",
      description:
        "The moment that defined their relationship. After Eren saves Mikasa from kidnappers, he wraps his scarf around her, telling her, 'Come on. Let's go home.' This gesture becomes a symbol of their bond throughout the series.",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/mikasa-eren-as-kids.jpg",
    },
    {
      title: "Mikasa's Confession",
      description:
        "In their final moments together, Mikasa finally expresses her true feelings for Eren. This emotional scene reveals the depth of her love and the tragedy of what could have been between them.",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/eren-mikasa-feature.jpg",
    },
    {
      title: "The Alternative Reality",
      description:
        "In a vision or alternate timeline, we see what might have been if Eren and Mikasa had chosen to run away together and live out their remaining days in peace, showing a glimpse of the happiness they could have shared.",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/eren-mikasa-attack-on-titan.jpg",
    },
    {
      title: "Protecting Each Other",
      description:
        "Throughout the series, Eren and Mikasa repeatedly risk their lives to save each other. From Mikasa's constant protection to Eren's fierce determination to keep her safe, their mutual desire to protect one another forms the core of their relationship.",
      image: "https://i.pinimg.com/736x/ad/a8/cc/ada8ccd6366d45c5712556c576a28a8c.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-background/80">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </header>

      <main className="pt-16 pb-20">
        {/* Hero section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="https://res.cloudinary.com/dzrs9u5fg/video/upload/v1744965388/Die_With_A_Smile_-_Lady_Gaga_Bruno_Mars_-_AMV_ATTACK_ON_TITAN_Eren_x_Mikasa_bz7sf0.mp4"
          />

          {/* Text content */}
          <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Eren & Mikasa</h1>
            <p className="text-xl max-w-2xl">
              A complex relationship defined by protection, devotion, and unspoken feelings
            </p>
            <div className="mt-8">
              <Button size="lg" onClick={() => setIsVideoPlaying(true)} className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Their Story
              </Button>
            </div>
          </div>
        </section>

        {/* Video modal */}
        <AnimatePresence>
          {isVideoPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-12 right-0 text-white"
                  onClick={() => setIsVideoPlaying(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>

                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                  <video
                    src="https://res.cloudinary.com/dzrs9u5fg/video/upload/v1744965388/Die_With_A_Smile_-_Lady_Gaga_Bruno_Mars_-_AMV_ATTACK_ON_TITAN_Eren_x_Mikasa_bz7sf0.mp4"
                    autoPlay
                    controls
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Moments section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Defining Moments
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {moments.map((moment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full border-primary/20 hover:border-primary transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={moment.image || "/placeholder.svg"}
                          alt={moment.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{moment.title}</h3>
                        <p className="text-muted-foreground">{moment.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
            >
              The Complexity of Their Bond
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg"
            >
              <p>
                The relationship between Eren and Mikasa is one of the most nuanced and emotionally resonant aspects of
                Attack on Titan. What begins as a childhood bond forged in trauma evolves into something far more
                complex as the series progresses.
              </p>

              <p>
                Mikasa's devotion to Eren is unwavering throughout the series. From the moment he saved her life and
                wrapped his scarf around her, she dedicated herself to protecting him. This protection becomes her
                primary motivation, sometimes to the detriment of her own identity and growth.
              </p>

              <p>
                Eren's feelings toward Mikasa are more complicated. He often pushes her away, frustrated by what he
                perceives as her overprotectiveness. Yet in moments of crisis, he demonstrates a fierce desire to keep
                her safe. The question of whether his feelings for her are romantic remains ambiguous until the series'
                final chapters.
              </p>

              <p>
                Their final conversation reveals the tragedy of their relationship - the unspoken feelings and the life
                they could have shared if circumstances had been different. Eren's confession that he wants Mikasa to
                move on after his death, coupled with her inability to let go of her feelings for him even years later,
                creates one of the most bittersweet conclusions in anime history.
              </p>

              <p>
                The scarf that Eren gave Mikasa becomes the physical symbol of their connection - something she clings
                to throughout her life, representing both the comfort he provided her and the inability to fully move
                beyond her feelings for him.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="px-4 py-10 bg-muted/50 border-t">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Attack on Titan Fan Site. Not affiliated with Hajime Isayama or Kodansha.
          </p>
        </div>
      </footer>
    </div>
  )
}
