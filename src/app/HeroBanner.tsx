import WriterText from "@/components/WriterText"

const HeroBanner = () => {
  return (
    <>
      <div className="stricky-header stricked-menu main-menu main-header-two">
        <div className="sticky-header__content"></div>
      </div>

      <section className="hero-banner" style={{ backgroundImage: "url(/images/backgrounds/hero-2-1.png)" }} id="home">
        <div className="container">
          <div className="hero-banner__content">
            <h2 className="hero-banner__content__title wow fadeInUp animated" data-wow-delay="200ms">
              Publicidad que<span>*</span>
            </h2>
            <div className="hero-banner__bottom wow fadeInUp animated" data-wow-delay="400ms">
              <h2 className="hero-banner__bottom__title">
                <WriterText staticText="" words={WORDS} period={3000} />
              </h2>
            </div>
            <div className="hero-banner__image wow fadeInUp animated" data-wow-delay="600ms">
              <picture>
                <source srcSet="/images/backgrounds/hero-2-2.jpg" />
                <img src="/images/backgrounds/hero-2-2.jpg" alt="ogency" width={1472} height={832} style={{ maxHeight: "584px", objectFit: "cover" }} />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner

const WORDS = [
  "Genera movimiento",
  "Conecta e impacta",
  "Despierta emociones",
  "Cautiva y sorprende",
]                 