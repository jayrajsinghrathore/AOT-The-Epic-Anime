"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface HiddenPlotTwistProps {
  position: string
  title: string
  content: string
}

export function HiddenPlotTwist({ position, title, content }: HiddenPlotTwistProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isFound, setIsFound] = useState(false)

  return (
    <div className={`absolute ${position} z-30`}>
      {!isFound ? (
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer opacity-30 hover:opacity-100 transition-opacity"
          onClick={() => {
            setIsFound(true)
            setIsVisible(true)
          }}
        >
          <Eye className="h-6 w-6 text-primary" />
        </motion.div>
      ) : (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="w-64"
            >
              <Card className="border-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs">{content}</p>
                  <Button variant="ghost" size="sm" className="mt-2 w-full text-xs" onClick={() => setIsVisible(false)}>
                    Close
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
