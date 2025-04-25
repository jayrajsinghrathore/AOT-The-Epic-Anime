"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CharacterScroll } from "@/components/character-scroll"
import { HiddenPlotTwist } from "@/components/hidden-plot-twist"
import { VideoHero } from "@/components/video-hero"
import { Sword } from "@/components/sword"
import { TitanTransform } from "@/components/titan-transform"
import { DetailModal } from "@/components/detail-modal"
import { Github, Linkedin } from "lucide-react"
import { EpicMomentsSlider } from "@/components/epic-moments-slider"

// About section data
const aboutData = [
  {
    title: "A World of Walls",
    subtitle: "The last remnants of humanity",
    image:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/01/Attack-on-Titan-Wall-Rose-Maria-Sina-F.jpg?q=50&fit=crop&w=825&dpr=1.5",
    description:
      "For over a century, humanity has lived behind three concentric walls - Wall Maria, Wall Rose, and Wall Sina - to protect themselves from the Titans that roam outside.\n\nThese walls, each approximately 50 meters tall, were believed to be humanity's last defense against extinction. Wall Maria is the outermost wall, enclosing the most land but also the most dangerous territory. Wall Rose is the middle wall, and Wall Sina is the innermost wall, protecting the royal capital and the wealthiest citizens.\n\nWhat most people don't know is the true nature of these walls. They were actually created by Eldian King Karl Fritz using countless Colossal Titans who hardened their bodies to form the walls' structure. This shocking truth is one of the many revelations that redefine the entire world of Attack on Titan.\n\nThe society within these walls developed a strict class system, with the wealthy and privileged living in the innermost territories, while the poor and disadvantaged were relegated to the outer regions, closer to danger.",
    detailImages: [
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/12/the-colossal-titans-form-a-wall-in-attack-on-titan.jpg",
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/12/a-colossal-titan-peeks-through-the-wall-in-attack-on-titan.jpg",
    ],
  },
  {
    title: "The Titans",
    subtitle: "Humanity's greatest threat",
    image: "https://wallpapers.com/images/high/attack-on-titan-pictures-7s74ygkgjt8equul.web",
    description:
      "Titans are giant humanoid creatures that appear to eat humans for no apparent reason. They vary in size and abilities, with some possessing intelligence far beyond others.\n\nStandard Titans range from 3 to 15 meters in height and are driven by an instinctual desire to consume humans. They don't need to eat to survive and appear to devour humans purely out of compulsion. These Titans have superhuman strength, regenerative abilities, and can only be killed by cutting out a small section at the nape of their necks.\n\nThere are also nine special Titans known as the Nine Titans, each with unique abilities: the Founding Titan, the Attack Titan, the Colossal Titan, the Female Titan, the Armored Titan, the Beast Titan, the Jaw Titan, the Cart Titan, and the War Hammer Titan. These Titans can be controlled by human shifters who inherit their power.\n\nThe true origin of Titans is one of the series' most shocking revelations. They are actually transformed Eldians (Subjects of Ymir), humans who can be turned into Titans through injection of Titan spinal fluid. This transformation process is irreversible for most, except for those who consume a Titan shifter.",
    detailImages: [
      "https://static.beebom.com/wp-content/uploads/2023/11/Founding-Titan.jpg",
      "https://static.beebom.com/wp-content/uploads/2023/11/Nine-Titans.jpg",
    ],
  },
  {
    title: "The Survey Corps",
    subtitle: "Wings of freedom",
    image: "https://wallpapers.com/images/high/survey-corps-1680-x-1050-wallpaper-0yazsomns4uor9g9.webp",
    description:
      "The Survey Corps is the branch of the military most actively involved in direct Titan combat and human expansion. They venture beyond the walls into Titan territory to try to reclaim the land once lost.\n\nOften considered the most dangerous and prestigious branch of the military, the Survey Corps is responsible for exploring the world beyond the walls, gathering intelligence about Titans, and developing new technologies and strategies to combat them. Their missions have the highest casualty rates, but they represent humanity's best hope for freedom.\n\nEquipped with Vertical Maneuvering Equipment (VME), Survey Corps soldiers can move through three-dimensional space with incredible agility, allowing them to target the vulnerable nape of Titans' necks. Their uniform features the iconic 'Wings of Freedom' emblem, symbolizing humanity's desire to break free from their confinement.\n\nNotable members include Commander Erwin Smith, Captain Levi Ackerman, Hange Zoë, and the 104th Training Corps recruits like Eren, Mikasa, and Armin. Their sacrifices and discoveries drive the narrative forward, gradually unveiling the truth about the world and the Titans.",
    detailImages: [
      "https://wallpapers.com/images/high/survey-corps-1735-x-900-wallpaper-34itoddgsfl739ql.webp",
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/04/Survey-Corps-Member-Graduation.jpg",
    ],
  },
]

// Plot twists data
const plotTwistsData = [
  {
    title: "Master of Time's Will",
    subtitle: "A chilling twist where Eren transcends time",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Eren-and-Grisha-Attack-Titan-Article.png",
    description:
      "The revelation that Eren was not only a key player in past events but the instigator of them shattered everything we thought we knew about time, fate, and freedom in Attack on Titan.\n\nThis mind-bending truth is revealed when Eren uses the power of the Attack Titan, which allows its inheritor to see the memories of past and future users, to reach across time and influence his father, Grisha Yeager. In a moment that changes everything, Eren stands behind Grisha in a memory, urging—commanding—him to slaughter the Reiss family and steal the Founding Titan.\n\nThis revelation raises countless questions: Is Eren the villain or the victim of fate? Did Grisha ever have a choice? Has Eren already seen the future and is just following the path? The answers challenge our understanding of cause and effect, painting a terrifying picture where the future influences the past.\n\nEren's manipulation shows that the timeline isn't linear—it's a loop of memories and intent. He doesn't just inherit the will of the Attack Titan—he becomes its culmination. He is the freedom-seeking devil who pushes his own father over the edge and triggers the tragic spiral of events that follow.",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745062934/Eren_MANIPULATES_Grisha_n12fjz.mp4",
    videoThumbnail: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Eren-and-Grisha-Attack-Titan-Article.png",
  },
  {
    title: "The Outside World",
    subtitle: "Beyond the walls",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/08/Marley.png?q=50&fit=crop&w=825&dpr=1.5",
    description:
      "The discovery that humanity exists beyond the walls and that the people of Paradis Island are not the last remnants of humanity completely recontextualized the entire conflict.\n\nWhen Eren and his companions finally reach the basement of his childhood home, they discover journals and photographs left by his father, Grisha Yeager. These materials reveal that human civilization thrives beyond the walls, with technology far more advanced than that within Paradis Island.\n\nThe truth is that the people within the walls are Eldians, a race that can transform into Titans, who were isolated on Paradis Island by their king. The outside world, particularly the nation of Marley, views Eldians as dangerous and keeps them in internment zones, using some as weapons of war by transforming them into Titans.\n\nThis revelation transforms the narrative from a simple story of humanity fighting monsters to a complex geopolitical conflict with centuries of history, prejudice, and violence. The true enemies are not just Titans, but other humans with their own motivations and justifications.",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745054624/Eren_Finally_Found_Out_The_TRUTH_Behind_The_Wall_Attack_On_Titan_cnorzq.mp4",
    videoThumbnail:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/08/Marley.png?q=50&fit=crop&w=825&dpr=1.5",
  },
  {
    title: "Eren's True Plan",
    subtitle: "The most controversial twist",
    image:
      "",
    description:
      "Perhaps the most shocking revelation in the entire series was Eren's true plan. What initially appeared to be a story about humanity fighting for survival against monsters evolved into something far more complex and morally ambiguous.\n\nEren's transformation from a vengeful but idealistic protagonist to the architect of global genocide represents one of the most dramatic character arcs in anime history. His ability to see the future through the Attack Titan's powers meant he was always moving toward this inevitable conclusion.\n\nThe revelation that Eren orchestrated many of the pivotal events in the series, including his own mother's death, recontextualizes the entire narrative and forces viewers to reconsider everything they thought they knew about his character.\n\nEren's ultimate goal was to eliminate all threats to his friends on Paradis Island by destroying the outside world with the Rumbling, a cataclysmic event where millions of Colossal Titans march across the earth, crushing everything in their path. This plan was designed to both protect his homeland and, paradoxically, unite the remaining humanity against a common enemy - himself.",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745053578/Eren_tells_his_plan_to_Floch_and_Historia_bm8ygr.mp4",
    videoThumbnail:
      "https://gdm-assets.b-cdn.net/images/ncavvykf/epicstream/5bafb97da49091c99d5f1f9dabc5028c7b84f378-1149x648.png",
  },
]

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  const [showVideo, setShowVideo] = useState(true)
  const [selectedAboutItem, setSelectedAboutItem] = useState<null | (typeof aboutData)[0]>(null)
  const [selectedPlotItem, setSelectedPlotItem] = useState<null | (typeof plotTwistsData)[0]>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowVideo(false)
      } else {
        setShowVideo(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={ref} className="relative min-h-screen bg-background">
      {/* Animated background with titan silhouettes */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <TitanTransform />
      </div>

      {/* Video hero section */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-10 flex items-center justify-center"
            style={{ opacity, scale, y }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            key="video-hero"
          >
            <VideoHero />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-background/80">
        <motion.div
          className="flex items-center gap-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sword className="h-8 w-8 text-primary " />
          <h1 className="text-xl font-bold">ATTACK ON TITAN</h1>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <nav>
            <ul className="flex gap-6">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#about">About</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#characters">Characters</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#plot">Plot</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#creator">Creator</Link>
                </Button>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </motion.div>
      </header>

      {/* Main content */}
      <main className="relative z-20 pt-[85vh] -mt-10 rounded-t-3xl shadow-2xl">
        {/* About section */}
        <section id="about" className="min-h-screen px-4 py-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            ></motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aboutData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedAboutItem(item)}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden border-primary/20 hover:border-primary transition-all duration-300 h-full hover:shadow-lg transform hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <p className="line-clamp-3">{item.description.split("\n\n")[0]}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Characters section with scrolling animation */}
        <section id="characters" className="min-h-screen px-4 py-20 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Key Characters</h2>
              <p className="text-xl">
                The complex characters of Attack on Titan drive the narrative forward, each with their own motivations,
                secrets, and development arcs.
              </p>
            </motion.div>

            <CharacterScroll />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20 max-w-3xl mx-auto text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Eren & Mikasa</h3>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>A Complex Relationship</CardTitle>
                  <CardDescription>Love, protection, and destiny</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="https://media.distractify.com/brand-img/1eXDhHO81/1440x753/do-mikasa-and-eren-end-up-together-attack-on-titan-1641584839292.jpg"
                      alt="Eren and Mikasa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-left">
                    The relationship between Eren Yeager and Mikasa Ackerman is one of the most complex and emotionally
                    charged dynamics in Attack on Titan. From childhood friends to comrades in arms, their bond
                    transcends simple categorization. Mikasa's unwavering devotion to Eren stems from a life-changing
                    moment when he saved her as a child, while Eren's feelings toward her evolve dramatically throughout
                    the series.
                  </p>
                  <p className="text-left mt-4">
                    As the story progresses, their relationship becomes increasingly complicated by Eren's changing
                    worldview and the burden of his powers and knowledge. The final conversation between them reveals
                    the depth of their connection and the tragedy of what could have been.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/eren-mikasa">Watch Their Story ▶️</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Plot twists section */}
        <section id="plot" className="min-h-screen px-4 py-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Epic Plot Twists</h2>
              <p className="text-xl">
                Attack on Titan is renowned for its shocking revelations and unexpected turns. Explore the major plot
                points that redefined the series.
              </p>
              <p className="text-sm mt-4 text-muted-foreground">
                (Hint: There are hidden plot twists throughout this section. Can you find them all?)
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {plotTwistsData.slice(0, 2).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedPlotItem(item)}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden border-primary/20 hover:border-primary transition-all duration-300 h-full hover:shadow-lg transform hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <p className="line-clamp-3">{item.description.split("\n\n")[0]}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Watch Video
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
              onClick={() => setSelectedPlotItem(plotTwistsData[2])}
            >
              <Card className="border-primary/20 overflow-hidden cursor-pointer hover:border-primary transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Eren's True Plan</CardTitle>
                  <CardDescription>The most controversial twist</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="https://gdm-assets.b-cdn.net/images/ncavvykf/epicstream/5bafb97da49091c99d5f1f9dabc5028c7b84f378-1149x648.png"
                      alt="Eren Yeager"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Perhaps the most shocking revelation in the entire series was Eren's true plan. What initially
                    appeared to be a story about humanity fighting for survival against monsters evolved into something
                    far more complex and morally ambiguous.
                  </p>
                  <p className="mt-4">
                    Eren's transformation from a vengeful but idealistic protagonist to the architect of global genocide
                    represents one of the most dramatic character arcs in anime history. His ability to see the future
                    through the Attack Titan's powers meant he was always moving toward this inevitable conclusion.
                  </p>
                  <p className="mt-4 line-clamp-2">
                    The revelation that Eren orchestrated many of the pivotal events in the series, including his own
                    mother's death, recontextualizes the entire narrative and forces viewers to reconsider everything
                    they thought they knew about his character.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Video Analysis
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Hidden plot twists scattered throughout the page */}
            <HiddenPlotTwist
              position="bottom-20 right-10"
              title="The Curse of Ymir"
              content="All Titan shifters are doomed to die 13 years after acquiring their power, mirroring the lifespan of the original Titan, Ymir Fritz."
            />

            <HiddenPlotTwist
              position="top-1/3 left-10"
              title="The Ackerman Clan"
              content="The Ackermans were genetically engineered to protect the Eldian royal family, explaining Mikasa's superhuman strength and combat abilities."
            />

            <HiddenPlotTwist
              position="bottom-1/4 left-1/4"
              title="The Founding Titan"
              content="The power of the Founding Titan can alter the memories of all Subjects of Ymir, which is how King Fritz created a false history within the walls."
            />

            <EpicMomentsSlider />
          </div>
        </section>

        {/* Creator appreciation section */}
        <section id="creator" className="min-h-screen px-4 py-20 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">The Genius of Hajime Isayama</h2>
              <div className="relative h-64 w-64 mx-auto mb-8 rounded-full overflow-hidden">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/FIBD2023HajimeIsayama_01.jpg/250px-FIBD2023HajimeIsayama_01.jpg"
                  alt="Hajime Isayama"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xl">
                Hajime Isayama, the creator of Attack on Titan, crafted one of the most intricate and thought-provoking
                stories in modern fiction. His ability to blend action, horror, political intrigue, and philosophical
                questions created a series that transcends the typical boundaries of manga and anime.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20">
                  <CardHeader>
                    <CardTitle>Masterful Storytelling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Isayama's storytelling is characterized by meticulous planning and foreshadowing. Plot points
                      established in the earliest chapters pay off years later, revealing a narrative that was carefully
                      constructed from the beginning.
                    </p>
                    <p className="mt-4">
                      His ability to subvert expectations while maintaining internal consistency created a story that
                      kept fans theorizing and discussing for over a decade. Few creators have managed to maintain such
                      quality and intrigue over such a long serialization.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20">
                  <CardHeader>
                    <CardTitle>Themes and Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Attack on Titan explores profound themes including freedom, determinism, the cycle of hatred, war,
                      nationalism, and the complexity of human nature. Isayama refuses to provide simple answers,
                      instead presenting multiple perspectives and allowing readers to form their own conclusions.
                    </p>
                    <p className="mt-4">
                      The series serves as an allegory for real-world conflicts and historical events, encouraging
                      viewers to consider the root causes of violence and prejudice in our own world.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>The Legacy of Attack on Titan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Isayama's work has redefined what's possible in the medium, influencing countless creators and
                      setting a new standard for complex, mature storytelling in manga and anime. Attack on Titan's
                      global success has brought new audiences to Japanese media and demonstrated the power of visual
                      storytelling to address profound philosophical questions.
                    </p>
                    <p className="mt-4">
                      While the ending remains controversial among fans, the journey Isayama took readers on is
                      undeniably one of the most ambitious and impactful in modern fiction. His willingness to tackle
                      difficult themes and challenge readers' expectations has cemented Attack on Titan as a landmark
                      work that will be studied and discussed for generations.
                    </p>
                    <div className="flex justify-center mt-8">
                      <Button asChild size="lg">
                        <Link href="/isayama">Learn More About Isayama</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Message of the anime section */}
        <section className="min-h-screen px-4 py-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">The Message of Attack on Titan</h2>
              <p className="text-xl">
                Beyond its thrilling action and shocking twists, Attack on Titan delivers profound messages about
                humanity, freedom, and the cycles of violence that define our history.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20">
                  <CardHeader>
                    <CardTitle>The Price of Freedom</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      "If you win, you live. If you lose, you die. If you don't fight, you can't win." This mantra
                      encapsulates one of the central themes of Attack on Titan: freedom comes at a cost. The series
                      constantly questions what true freedom means and what sacrifices are justified in its pursuit.
                    </p>
                    <p className="mt-4">
                      Through Eren's journey, we see how the single-minded pursuit of freedom can lead to its opposite -
                      becoming enslaved to one's own ideals and predetermined path.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20">
                  <CardHeader>
                    <CardTitle>Breaking the Cycle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Attack on Titan portrays the devastating cycle of hatred and violence that perpetuates across
                      generations. The Eldians and Marleyans remain locked in a conflict fueled by historical grievances
                      and propaganda, mirroring real-world ethnic and national conflicts.
                    </p>
                    <p className="mt-4">
                      The series asks whether this cycle can ever truly be broken, and what sacrifices might be
                      necessary to achieve lasting peace. It offers no easy answers, reflecting the complexity of
                      real-world conflicts.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20">
                  <CardHeader>
                    <CardTitle>The Nature of Humanity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      At its core, Attack on Titan is an exploration of human nature. The series blurs the line between
                      monster and human, revealing that the true monsters often lie within ourselves - in our capacity
                      for cruelty, prejudice, and violence.
                    </p>
                    <p className="mt-4">
                      Yet it also showcases humanity's capacity for courage, sacrifice, and compassion. Through
                      characters like Armin, Mikasa, and even Eren, we see both the worst and best of what humans are
                      capable of.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 max-w-3xl mx-auto text-center"
            >
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>A Reflection of Our World</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    While set in a fictional world of Titans and ODM gear, Attack on Titan serves as a mirror to our own
                    society. The propaganda, nationalism, and historical revisionism depicted in the series reflect
                    real-world tactics used to justify violence and oppression.
                  </p>
                  <p className="mt-4">
                    By forcing viewers to consider multiple perspectives and question their initial assumptions, Isayama
                    challenges us to apply the same critical thinking to our understanding of history and current
                    events. The series doesn't offer simple solutions to complex problems, but instead encourages
                    empathy and understanding across divides.
                  </p>
                  <p className="mt-4">
                    In the end, Attack on Titan's most powerful message may be that understanding our shared humanity is
                    the first step toward breaking cycles of violence - even if the path forward remains difficult and
                    uncertain.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-20 px-4 py-10 bg-muted/50 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sword className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-bold">ATTACK ON TITAN</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Attack on Titan Fan Site. Made By jayraj.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Terms of Use
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://github.com/jayrajsinghrathore" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-9 w-9" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/jayraj-singh-rathore-786b13217/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-9 w-9" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <DetailModal
        isOpen={!!selectedAboutItem}
        onClose={() => setSelectedAboutItem(null)}
        title={selectedAboutItem?.title || ""}
        description={selectedAboutItem?.description || ""}
        images={selectedAboutItem?.detailImages || []}
      />

      <DetailModal
        isOpen={!!selectedPlotItem}
        onClose={() => setSelectedPlotItem(null)}
        title={selectedPlotItem?.title || ""}
        description={selectedPlotItem?.description || ""}
        videoUrl={selectedPlotItem?.videoUrl}
        videoThumbnail={selectedPlotItem?.videoThumbnail}
      />
    </div>
  )
}
