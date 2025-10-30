"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductGalleryProps {
  images: {
    id: number
    src: string
    alt?: string
  }[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [current, setCurrent] = React.useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)
  const selectImage = (index: number) => setCurrent(index)

  return (
    <Card className="w-full py-0 rounded-md border-0 shadow-none">
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          src={images[current].src}
          alt={images[current].alt ?? "Product image"}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => selectImage(index)}
            className={cn(
              "relative aspect-square rounded-md overflow-hidden border-2 transition",
              current === index
                ? "border-primary ring-1 ring-primary"
                : "border-transparent hover:border-muted"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt ?? `Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </Card>
  )
}
