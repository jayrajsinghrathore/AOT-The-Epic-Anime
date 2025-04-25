"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"


const charactersData = {
  "eren-yeager": {
    name: "Eren Yeager",
    title: "The Attack Titan",
    image: "https://wallpapercave.com/wp/wp13572216.jpg",
    description:
      "Eren Yeager is the main protagonist of Attack on Titan. After witnessing his mother's death at the hands of a Titan, Eren vows to rid the world of all Titans. His fierce determination drives much of the plot, though his character undergoes dramatic changes throughout the series.",
    background:
      "Born in Shiganshina District, Eren lived a relatively peaceful childhood with his parents and adoptive sister Mikasa until the fall of Wall Maria. The trauma of witnessing his mother being devoured by a Titan shaped his worldview and instilled in him an intense hatred for Titans.",
    abilities: [
      "Attack Titan - Grants the power to see memories of both past and future inheritors",
      "Founding Titan - The ability to control other Titans and alter the memories of Subjects of Ymir",
      "Hardening - Can create and manipulate hardened Titan flesh",
      "War Hammer Titan - The power to create structures from hardened Titan flesh",
    ],
    keyMoments: [
      "Witnessing his mother's death during the fall of Wall Maria",
      "Discovering his Titan powers during the Battle of Trost",
      "The basement revelation about the outside world",
      "Attacking Marley and declaring war on the world",
      "Initiating the Rumbling",
    ],
    quotes: [
      "I'll kill them all. Every last one of those animals that's on this earth.",
      "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
      "I just keep moving forward, until my enemies are destroyed.",
    ],
  },
  "mikasa-ackerman": {
    name: "Mikasa Ackerman",
    title: "The Last Asian",
    image:
      "https://wallpapercave.com/wp/wp1975644.jpg",
    description:
      "Mikasa Ackerman is one of the main protagonists of Attack on Titan. After her parents were murdered, she was taken in by Eren's family. Extremely skilled in combat, she is considered to be worth a hundred ordinary soldiers.",
    background:
      "Born to an Asian mother and an Ackerman father, Mikasa's peaceful life was shattered when her parents were murdered by human traffickers. After being rescued by Eren, she was adopted into the Yeager family and developed an unwavering loyalty to Eren.",
    abilities: [
      "Ackerman power - Superhuman strength and combat abilities",
      "Master of vertical maneuvering equipment",
      "Exceptional combat skills, particularly with blades",
      "Peak physical condition and reflexes",
    ],
    keyMoments: [
      "Being rescued by Eren as a child",
      "Graduating as the top of the 104th Training Corps",
      "Saving Eren multiple times throughout the series",
      "Learning about her Ackerman heritage",
      "Her final moments with Eren",
    ],
    quotes: [
      "This world is cruel, but it's also very beautiful.",
      "I can do anything as long as I have this scarf.",
      "If I can't, then I'll just die. But if I win, I live. Unless I fight, I cannot win.",
    ],
  },
  "armin-arlert": {
    name: "Armin Arlert",
    title: "The Colossal Titan",
    image: "https://wallpapercave.com/wp/wp6675045.jpg",
    description:
      "Armin Arlert is one of the main protagonists of Attack on Titan. Despite his physical weakness, his exceptional intelligence and strategic mind make him an invaluable asset to the Survey Corps.",
    background:
      "Armin grew up in Shiganshina District alongside Eren and Mikasa. Often bullied for his physical weakness and interest in the outside world, he was frequently defended by his friends. His grandfather gave him a book about the outside world, which sparked his curiosity and dreams.",
    abilities: [
      "Colossal Titan - Enormous size and the ability to release massive amounts of steam",
      "Exceptional intelligence and strategic thinking",
      "Strong analytical skills",
      "Skilled in negotiation and persuasion",
    ],
    keyMoments: [
      "Saving Eren and Mikasa during the fall of Wall Maria",
      "Devising the plan to retake Trost District",
      "Being chosen to receive the Colossal Titan serum over Commander Erwin",
      "Defeating Bertholdt and inheriting the Colossal Titan",
      "His confrontation with Eren during the Rumbling",
    ],
    quotes: [
      "Someone who can't sacrifice anything, can't ever change anything.",
      "When people are faced with a situation they don't understand, it's easy for fear to take hold.",
      "People who can't throw something important away can never hope to change anything.",
    ],
  },
  "levi-ackerman": {
    name: "Levi Ackerman",
    title: "Humanity's Strongest Soldier",
    image: "https://wallpapercave.com/wp/wp12639721.jpg",
    description:
      "Captain Levi is widely acknowledged as humanity's strongest soldier. His combat prowess is unmatched, and he serves as a Special Operations Squad Captain in the Survey Corps.",
    background:
      "Born in the Underground City to a prostitute named Kuchel Ackerman, Levi was raised in poverty and squalor. After his mother's death, he was taken in by Kenny Ackerman, who taught him how to fight and survive. He later joined the Survey Corps after an encounter with Erwin Smith.",
    abilities: [
      "Ackerman power - Superhuman strength and combat abilities",
      "Unparalleled skill with vertical maneuvering equipment",
      "Exceptional combat abilities, particularly with dual blades",
      "Incredible speed and agility",
    ],
    keyMoments: [
      "Joining the Survey Corps after confronting Erwin",
      "The deaths of his original Special Operations Squad",
      "His promise to kill the Beast Titan",
      "Severely injuring himself while killing Zeke",
      "His final battle alongside Mikasa against Eren",
    ],
    quotes: [
      "The only thing we're allowed to do is to believe that we won't regret the choice we made.",
      "Everyone had to be drunk on somethin' to keep pushing on.",
      "You're not wrong. I'm sure there are times people have to die... but this isn't one of them.",
    ],
  },
  "sasha-blouse": {
    name: "Sasha Blouse",
    title: "Potato Girl",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/Sasha-Meat.jpg",
    description:
      "Sasha Blouse is a member of the Survey Corps and a graduate of the 104th Training Corps. She is known for her love of food, incredible instincts, and exceptional hunting skills.",
    background:
      "Sasha comes from Dauper Village, a small hunting village in the mountains of Wall Rose. Her upbringing as a hunter gave her exceptional skills with a bow and arrow, as well as keen instincts. Initially speaking in a regional dialect, she changed her speech patterns to fit in better with her comrades.",
    abilities: [
      "Expert marksmanship with bow and arrow",
      "Exceptional hearing and instincts",
      "Skilled hunter and tracker",
      "Proficient with vertical maneuvering equipment",
    ],
    keyMoments: [
      "Eating a potato during the initiation ceremony, earning her the nickname 'Potato Girl'",
      "Saving a young girl during the breach of Wall Rose",
      "Her role in the recapture of Wall Maria",
      "Her heroic actions during the raid on Liberio",
      "Her tragic death at the hands of Gabi Braun",
    ],
    quotes: [
      "I'll give you half... No, I'll give you a third.",
      "Meat is a luxury we can't afford... That's why it's so special.",
      "I'm just a normal girl who happened to love food.",
    ],
  },
  "grisha-yeager": {
    name: "Grisha Yeager",
    title: "The Attack Titan",
    image:
      "https://i.pinimg.com/736x/e1/aa/bb/e1aabb5a90bd6ae30261bc3af3632724.jpg",
    description:
      "Grisha Yeager is Eren's father and a doctor who lived within Wall Maria. His mysterious past and actions set much of the plot of Attack on Titan in motion.",
    background:
      "Originally from Marley, Grisha was an Eldian who joined the Restorationists, a group seeking to restore Eldia to power. After being sent to Paradis Island, he obtained the Attack Titan, married Carla Yeager, and had a son, Eren. He also had a previous wife, Dina Fritz, and a son, Zeke, in Marley.",
    abilities: [
      "Medical expertise",
      "Attack Titan - The power to see future memories",
      "Founding Titan - Briefly possessed before passing it to Eren",
      "Scientific knowledge about Titans",
    ],
    keyMoments: [
      "Losing his sister Faye to Marleyan persecution",
      "Joining the Eldian Restorationists",
      "Being betrayed by his son Zeke",
      "Obtaining the Attack Titan from Kruger",
      "Stealing the Founding Titan from the Reiss family",
      "Injecting Eren with Titan serum and being devoured by him",
    ],
    quotes: [
      "Their memories will teach you how to use the power. But their ideology need not be your guide.",
      "You must learn to control this power.",
      "Avenge your mother. You must.",
    ],
  },
  "zeke-yeager": {
    name: "Zeke Yeager",
    title: "The Beast Titan",
    image:
      "https://i.pinimg.com/736x/06/61/28/0661281ef12756439f893cb359a982c1.jpg",
    description:
      "Zeke Yeager is Eren's half-brother and the son of Grisha Yeager and Dina Fritz. As the Beast Titan, he serves as a major antagonist before revealing his complex motivations.",
    background:
      "Born in Marley to Grisha Yeager and Dina Fritz, Zeke was raised to be a Warrior candidate. Feeling pressured by his parents' expectations, he betrayed them to the Marleyan authorities. He later inherited the Beast Titan and became War Chief of the Warriors, while secretly working with Eren Yeager on a controversial plan.",
    abilities: [
      "Beast Titan - Ape-like form with exceptional throwing ability",
      "Royal blood - Grants special abilities when combined with Titan powers",
      "Ability to transform Subjects of Ymir into Titans through his spinal fluid",
      "Tactical and strategic intelligence",
    ],
    keyMoments: [
      "Betraying his parents to the Marleyan authorities",
      "Inheriting the Beast Titan",
      "The battle at Shiganshina District",
      "Meeting with Eren in Marley",
      "Revealing his euthanasia plan",
      "His final moments with Levi",
    ],
    quotes: [
      "What a strange thing to say... We were just playing catch.",
      "You've been brainwashed by your father.",
      "That's exactly right! As expected of Pieck!",
    ],
  },
  "ymir": {
  name: "Ymir Fritz",
  title: "The First Founding Titan",
  image:
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/Attack-On-Titan-10-Interesting-Facts-About-Ymir-Fritz-You-Need-To-Know-featured-image.jpg",
  description:
    "Ymir Fritz is the progenitor of all Titans. She was the first human to ever gain the power of the Titans and served as a slave to the Eldian King, using her power to expand his empire.",
  background:
    "Over 2,000 years ago, Ymir Fritz was a young Eldian girl who became enslaved after her village was conquered. After being falsely accused and hunted, she stumbled upon a mysterious spine-like creature in a tree and gained the power of the Titans. She served King Fritz, bearing his children and building Eldia's power. Even in death, her spirit remained in the Paths, endlessly shaping Titans from the sand. Her will and suffering were passed down through generations until Eren Yeager set her free.",
  abilities: [
    "Founding Titan - Grants full control over all Titans and Subjects of Ymir",
    "Titan creation and manipulation via the Paths",
    "Immense regenerative ability",
    "Power to alter Eldian physiology",
    "Undying existence in the Paths dimension",
  ],
  keyMoments: [
    "Receiving the power of the Titans from the mysterious entity",
    "Serving the Eldian King and waging war on Marley",
    "Dying protecting the King and having her body fed to her daughters",
    "Creating all Titans in the Paths for 2,000 years",
    "Connecting with Eren Yeager and being freed from her chains",
  ],
  quotes: [
    "I was never free... until now.",
    "Even in death, I continue to serve...",
    "My name is Ymir... the founder of all Titans.",
  ],
  },
  "annie-leonhart": {
    name: "Annie Leonhart",
    title: "Female Titan",
    image:
      "https://i.pinimg.com/736x/c8/90/8f/c8908f2f5218deac26fd82877b3687e7.jpg",
    description:
      "Annie Leonhart is a graduate of the 104th Training Corps and former member of the Military Police Brigade. She is later revealed to be the Female Titan, sent from Marley as part of the Warrior unit.",
    background:
      "Annie was raised by her father in Marley and trained from a young age to become a Warrior. She was eventually chosen to inherit the Female Titan and sent to Paradis Island along with Reiner, Bertholdt, and Marcel to retrieve the Founding Titan.",
    abilities: [
      "Female Titan - Versatile Titan with hardening abilities and exceptional combat skills",
      "Expert in hand-to-hand combat",
      "Crystallization ability",
      "Skilled in various martial arts techniques",
    ],
    keyMoments: [
      "Destroying the right flank of the Survey Corps during the 57th expedition",
      "Her fight with Eren in Stohess District",
      "Crystallizing herself to avoid capture",
      "Spending years in crystal stasis",
      "Awakening after the Rumbling begins",
      "Joining the alliance against Eren",
    ],
    quotes: [
      "I just want the weak who get swept along with the flow to be considered human too.",
      "The only thing I'm good at is kicking.",
      "I'm a warrior. I have no choice but to face the consequences of my actions.",
    ],
  },
}

export default function CharacterPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [character, setCharacter] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    setLoading(true)
    setTimeout(() => {
      setCharacter(charactersData[slug] || null)
      setLoading(false)
    }, 500)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (!character) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Character Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find information about this character.</p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

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
          <Image src={character.image || "/placeholder.svg"} alt={character.name} fill className="object-cover" />
          <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {character.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl"
            >
              {character.title}
            </motion.p>
          </div>
        </section>

        {/* Character info */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg mb-6">{character.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <p className="text-lg">{character.background}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Abilities</h3>
                <ul className="space-y-2">
                  {character.abilities.map((ability, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>{ability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-4">Key Moments</h3>
              <div className="space-y-4">
                {character.keyMoments.map((moment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-muted/30 p-4 rounded-lg"
                  >
                    <p>{moment}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Notable Quotes</h3>
              <div className="space-y-6">
                {character.quotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-l-4 border-primary pl-4 py-2"
                  >
                    <p className="text-lg italic">"{quote}"</p>
                  </motion.div>
                ))}
              </div>
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
