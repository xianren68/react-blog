import { IKImage } from 'imagekitio-react'

const Image = ({
  src,
  alt,
  className,
  w,
  h,
}: {
  src: string
  alt: string
  className?: string
  w: number
  h: number
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
