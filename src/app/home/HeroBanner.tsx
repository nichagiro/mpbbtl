import Picture from "@/components/Picture"
import WriterText from "@/components/WriterText"

const HeroBanner = () => {
  return (
    <section className="hero-banner" style={{ backgroundImage: "url(/images/backgrounds/hero-2-1.webp)" }} id="inicio">
      <div className="container">
        <div className="hero-banner__content">
          <h2 className="hero-banner__content__title wow fadeInUp animated" data-wow-delay="200ms">
            Experiencias con<span>*</span>
          </h2>
          <div className="hero-banner__bottom wow fadeInUp animated" data-wow-delay="400ms">
            <h2 className="hero-banner__bottom__title">
              <WriterText staticText="" words={WORDS} period={3000} />
            </h2>
          </div>
          <div className="hero-banner__image wow fadeInUp animated" data-wow-delay="600ms">
            <Picture src="/images/backgrounds/hero-2-2.webp" alt="ogency" width={1472} height={832} style={{ maxHeight: "584px", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner

const WORDS = [
  "Estrategias innovadoras",
  "Ejecución impecable",
  "Alto impacto",
]                 