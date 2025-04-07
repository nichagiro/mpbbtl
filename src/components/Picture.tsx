interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

const Picture = ({ alt = "mpm marketing", src, ...props }: PictureProps) => {
  return (
    <picture>
      <source srcSet={src} />
      <img {...props} src={src} alt={alt} />
    </picture>
  )
}

export default Picture