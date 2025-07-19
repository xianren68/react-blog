import { IKImage } from 'imagekitio-react'
import React from 'react'

const Image: React.FC<{
  src: string
  alt: string
  className?: string
  w?: number
  h?: number
}> = ({
  src,
  alt,
  className,
  w,
  h,
}) => {
  return (
    <IKImage
      path={src}
      alt={alt}
      className={className}
      width={w}
      height={h}
      urlEndpoint={import.meta.env.VITE_IK_ENDPOINT}
      loading='lazy'
      lqip={{active: true, quality: 20}}
    ></IKImage>
  )
}

export default Image
