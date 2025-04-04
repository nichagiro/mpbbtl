interface SectionTitleProps {
  tagline?: string;
  title?: string;
  className?: string;
}

const SectionTitle = ({ tagline, title }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <h5 className="section-title__tagline section-title__tagline--has-dots">
        {title}
      </h5>
      <h2 className="section-title__title">
        {tagline}
      </h2>
    </div>
  )
}

export default SectionTitle
