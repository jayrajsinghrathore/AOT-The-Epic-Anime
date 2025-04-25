"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Play } from "lucide-react"

// Video data
const videos = [
  {
    id: 1,
    title: "Eren Tells His Plan to Floch and Historia",
    description: "Eren reveals his true intentions to Floch and Historia, setting the stage for the Rumbling.",
    thumbnail:
      "https://gdm-assets.b-cdn.net/images/ncavvykf/epicstream/5bafb97da49091c99d5f1f9dabc5028c7b84f378-1149x648.png",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745053578/Eren_tells_his_plan_to_Floch_and_Historia_bm8ygr.mp4",
  },
  {
    id: 2,
    title: "Eren Finally Found Out The TRUTH Behind The Wall",
    description: "The shocking revelation about the true nature of the walls and the world beyond.",
    thumbnail: "https://wallpapers.com/images/high/aot-the-walls-bnluhbt1havoyn8q.webp",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745054624/Eren_Finally_Found_Out_The_TRUTH_Behind_The_Wall_Attack_On_Titan_cnorzq.mp4",
  },
  {
    id: 3,
    title: "Levi vs Beast Titan",
    description: "One of the most epic battles in the series as Levi faces off against the Beast Titan.",
    thumbnail: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/Levi-bs-Beast-Titan.jpg",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745061101/Levi_vs._Zeke_Beast_Titan_4K_60FPS___Attack_on_titan_wfvedj.mp4",
  },
  {
    id: 4,
    title: "Eren confronts Reiner in Marley",
    description: "Eren confronts Reiner in the Marleyan basement, revealing his identity before transforming into the Attack Titan and launching a brutal assault.",
    thumbnail: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/09/Reiner-Faces-Eren-In-Attack-On-Titan-The-Final-Season.jpg",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745060992/Eren_meets_riener_in_marley_bb2r1w.mp4",
  },
  {
    id: 5,
    title: "The Rumbling Begins",
    description: "The apocalyptic moment when Eren initiates the Rumbling, unleashing thousands of Colossal Titans.",
    thumbnail: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Zeke-and-Eren-head-in-Attack-on-Titan.jpg",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745062005/Eren_Founding_Titan_Transformation_hcrrxe.mp4",
  },
  {
    id: 6,
    title: "Reiner and Bertholdt's Revelation",
    description: "The shocking moment when Reiner and Bertholdt reveal themselves as the Armored and Colossal Titans.",
    thumbnail: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/08/Reiner-and-Bertholdt-transform-in-front-of-Eren.jpg",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745061330/ENG_SUB_HD_Reiner_and_Bertholdt_s_betrayal_and_reveal___Attack_on_Titan_season_2_omb1w9.mp4",
  },
  {
    id: 7,
    title: "Erwin's Final Charge",
    description: "Commander Erwin leads the Survey Corps on a suicide mission in one of the most emotional scenes.",
    thumbnail: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/Erwin-Smith.jpg",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745062223/Erwin_s_last_speech_and_charge_against_the_Beast_Titan___Attack_on_Titan_Season_3_a2sl3r.mp4",
  },
  {
    id: 8,
    title: "Eren's Speech",
    description:
      "Eren talks with all the subjects of yimr and tell them about rumbling .",
    thumbnail: "https://fictionhorizon.com/wp-content/uploads/2022/01/Erens-Attack-titan.jpg",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745062778/EREN_S_SPEECH___Attack_on_Titan_The_Final_Season_Part_2_qojstp.mp4",
  },
  {
    id: 9,
    title: "Eren's Final moment and last kiss",
    description: "Mikasa ends Eren's life with a tearful kiss—an act of love, loss, and liberation, all in one heartbreaking moment.",
    thumbnail: "https://poggers.com/cdn/shop/articles/5ebc9ce9c75dbc17b39fb897454727f0_1365x767_crop_center.webp",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745063034/Mikasa_killed_Eren_AOT_FINAL_SCENE_gulr4t.mp4",
  },
  {
    id: 10,
    title: "The Basement Reveal",
    description: "The long-awaited moment when Eren and his friends finally discover what's in Grisha's basement.",
    thumbnail: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/06/attack-on-titan-season-3-episode-57-preview-grisha-flashback-1174496-1280x0.jpeg",
    videoUrl:
      "https://res.cloudinary.com/dzrs9u5fg/video/upload/v1745059887/English_Attack_On_Titan_The_Basement_Reveal_Season_3_Part_2_Episode_7_tb1i4q.mp4",
  },
]

export default function EpicMomentsPage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

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

      <main className="pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Epic Moments & Plot Twists</h1>
            <p className="text-xl">
              Relive the most shocking, emotional, and game-changing moments from Attack on Titan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-primary/20 hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      {playingVideo === video.id ? (
                        <video
                          src={video.videoUrl}
                          controls
                          autoPlay
                          className="w-full h-full"
                          onEnded={() => setPlayingVideo(null)}
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Button
                              onClick={() => setPlayingVideo(video.id)}
                              size="lg"
                              className="rounded-full w-14 h-14 flex items-center justify-center"
                            >
                              <Play className="h-6 w-6" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                      <p className="text-muted-foreground text-sm">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
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
