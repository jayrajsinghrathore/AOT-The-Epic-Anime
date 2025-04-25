"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const characters = [
  {
    name: "Eren Yeager",
    description: "The protagonist who vows to eliminate all Titans after they destroy his hometown.",
    image: "https://wallpapers-clan.com/wp-content/uploads/2025/01/eren-jaeger-art-style-desktop-wallpaper-preview.jpg",
  },
  {
    name: "Mikasa Ackerman",
    description: "Eren's adoptive sister and one of the most skilled soldiers in the Survey Corps.",
    image: "https://wallpapers.com/images/featured/mikasa-6pw02oexyq04hmaz.webp",
  },
  {
    name: "Armin Arlert",
    description: "Eren and Mikasa's best friend, known for his intelligence and strategic thinking.",
    image: "https://wallpapercave.com/wp/wp6675045.jpg",
  },
  {
    name: "Levi Ackerman",
    description: "Humanity's strongest soldier and captain of the Survey Corps' Special Operations Squad.",
    image: "https://wallpapercave.com/wp/wp12639721.jpg",
  },
  {
    name: "Erwin Smith",
    description: "The 13th commander of the Survey Corps, known for his leadership and willingness to sacrifice.",
    image: "https://wallpapercave.com/wp/wp9496170.jpg",
  },
  {
    name: "Historia Reiss",
    description: "Initially known as Krista Lenz, she is revealed to be the true heir to the throne.",
    image: "https://wallpapers.com/images/high/historia-reiss-1920-x-1080-wallpaper-owvh4344yu42lve7.web",
  },
  {
    name: "Reiner Braun",
    description:
      "A complex character with a dual identity as both a Warrior from Marley and a soldier in the Survey Corps.",
    image: "https://wallpapercave.com/wp/wp4524629.png",
  },
  {
    name: "Sasha Blouse",
    description: "Known as 'Potato Girl', she's a skilled hunter with an insatiable appetite for food.",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/Sasha-Meat.jpg",
  },
  {
    name: "Grisha Yeager",
    description: "Eren's father, a doctor who holds many secrets about the Titans and the outside world.",
    image: "https://i.pinimg.com/736x/e1/aa/bb/e1aabb5a90bd6ae30261bc3af3632724.jpg",
  },
  {
    name: "Zeke Yeager",
    description: "Eren's half-brother and the Beast Titan, with his own complex agenda.",
    image: "https://i.pinimg.com/736x/06/61/28/0661281ef12756439f893cb359a982c1.jpg",
  },
  {
    name: "Ymir",
    description: "The first Titan, burdened with immense power and eternal servitude across time.",
    image: "https://i.pinimg.com/736x/bb/b9/1a/bbb91abd37569f727118b5a62a524db5.jpg",
  },
  {
    name: "Annie Leonhart",
    description: "The Female Titan, known for her exceptional hand-to-hand combat skills.",
    image: "https://i.pinimg.com/736x/c8/90/8f/c8908f2f5218deac26fd82877b3687e7.jpg",
  },
]

export function CharacterScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: -2000 })

  // Set drag constraints after component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const totalWidth = characters.length * 304 // card width + gap
      const viewportWidth = window.innerWidth
      setDragConstraints({
        right: 0,
        left: -Math.max(0, totalWidth - viewportWidth + 40),
      })
    }
  }, [])

  // Function to scroll to next character
  const scrollToNext = () => {
    if (!scrollContainerRef.current) return

    const newIndex = Math.min(currentIndex + 1, characters.length - 1)
    setCurrentIndex(newIndex)

    const cardWidth = 280 + 24 // card width + gap
    scrollContainerRef.current.scrollTo({
      left: cardWidth * newIndex,
      behavior: "smooth",
    })
  }

  // Function to scroll to previous character
  const scrollToPrev = () => {
    if (!scrollContainerRef.current) return

    const newIndex = Math.max(currentIndex - 1, 0)
    setCurrentIndex(newIndex)

    const cardWidth = 280 + 24 // card width + gap
    scrollContainerRef.current.scrollTo({
      left: cardWidth * newIndex,
      behavior: "smooth",
    })
  }

  return (
    <div ref={containerRef} className="relative py-10">
      <div className="relative overflow-hidden">
       <motion.div
  ref={scrollContainerRef}
  className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide-auto"
  drag="x"
  dragConstraints={dragConstraints}
>

          {characters.map((character, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[280px] snap-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="border-primary/20 hover:border-primary transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <Link href={`/characters/${character.name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-2 border-primary">
                        <Image
                          src={character.image || "/placeholder.svg"}
                          alt={character.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{character.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{character.description}</p>
                      <span className="text-sm text-primary hover:underline">Learn more</span>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation arrows */}
        <AnimatePresence>
          {currentIndex > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20"
            >
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-background/80 backdrop-blur-sm h-10 w-10"
                onClick={scrollToPrev}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous character</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {currentIndex < characters.length - 1 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20"
            >
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-background/80 backdrop-blur-sm h-10 w-10"
                onClick={scrollToNext}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next character</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  )
}
