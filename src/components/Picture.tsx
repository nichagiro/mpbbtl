interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

const Picture = ({ alt = "mpm marketing", src, loading = "lazy", ...props }: PictureProps) => {
  return (
    <picture>
      <source srcSet={src} />
      <img {...props} src={src} alt={alt} loading={loading} />
    </picture>
  )
}

export default Picture