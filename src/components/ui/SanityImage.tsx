import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

interface SanityImageProps {
  image: any
  alt?: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  sizes?: string
  fill?: boolean
  width?: number
  height?: number
}

/**
 * SanityImage — properly handles:
 * - hotspot & crop via @sanity/image-url (centers the crop in the URL, CDN-side)
 * - objectPosition override from Sanity's custom `objectPosition` field
 * - LQIP blur placeholder
 */
export default function SanityImage({
  image,
  alt,
  className,
  style,
  priority,
  sizes,
  fill,
  width,
  height,
}: SanityImageProps) {
  if (!image?.asset) return null

  const lqip = image.asset?.metadata?.lqip
  const dimensions = image.asset?.metadata?.dimensions

  // Build URL — pass the full image object so @sanity/image-url can apply hotspot/crop
  const src = urlForImage(image)
    ?.auto('format')
    .fit('crop')
    .url() || image.asset?.url || ''

  const finalAlt = alt || image.alt || ''

  // If a manual objectPosition is set in Sanity, use it; otherwise let the hotspot URL handle it
  const objectPositionStyle: React.CSSProperties = image.objectPosition
    ? { objectPosition: image.objectPosition }
    : {}

  const combinedStyle = { ...objectPositionStyle, ...style }

  if (fill) {
    return (
      <Image
        src={src}
        alt={finalAlt}
        fill
        className={className}
        style={combinedStyle}
        placeholder={lqip ? 'blur' : 'empty'}
        blurDataURL={lqip}
        priority={priority}
        sizes={sizes || '100vw'}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={finalAlt}
      width={width || dimensions?.width || 1200}
      height={height || dimensions?.height || 800}
      className={className}
      style={combinedStyle}
      placeholder={lqip ? 'blur' : 'empty'}
      blurDataURL={lqip}
      priority={priority}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
    />
  )
}
