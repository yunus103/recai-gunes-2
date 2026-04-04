'use client'

import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/counter.css'

interface LightboxImage {
  src: string
  alt?: string
  srcSet?: { src: string; width: number; height: number }[]
  thumbnail?: string
}

interface PortfolioLightboxProps {
  images: LightboxImage[]
  startingSlideIndex?: number
  open: boolean
  onClose: () => void
}

export default function PortfolioLightbox({
  images,
  startingSlideIndex = 0,
  open,
  onClose,
}: PortfolioLightboxProps) {
  if (images.length === 0) return null

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt ?? '',
    srcSet: img.srcSet,
    thumbnail: img.thumbnail,
  }))

  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={slides}
      index={startingSlideIndex}
      plugins={[Thumbnails, Counter]}
      // No infinite loop
      carousel={{ finite: true }}
      // Fade animation between slides
      animation={{ fade: 300, swipe: 300 }}
      thumbnails={{
        position: 'bottom',
        width: 80,
        height: 60,
        border: 2,
        borderRadius: 2,
        padding: 4,
        gap: 8,
        vignette: true,
      }}
      counter={{ container: { style: { top: 0, bottom: 'unset' } } }}
      styles={{
        root: { '--yarl__color_backdrop': 'rgba(5, 5, 5, 0.96)' },
      }}
    />
  )
}
