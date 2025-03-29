const HeroBanner = () => {
  return (
    <>
      <div className="stricky-header stricked-menu main-menu main-header-two">
        <div className="sticky-header__content"></div>
      </div>

      {/* Hero Banner Start */}
      <section className="hero-banner" style={{ backgroundImage: "url(/images/hero-2-1.png)" }} id="home">
        <div className="container">
          <div className="hero-banner__content">
            <h2 className="hero-banner__content__title wow fadeInUp animated" data-wow-delay="200ms">
              Transform your<span>*</span>
            </h2>
            <div className="hero-banner__bottom wow fadeInUp animated" data-wow-delay="400ms">
              <p className="hero-banner__bottom__text">
                Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.
              </p>
              <h2 className="hero-banner__bottom__title">
                creative <span className="typewrite" data-period="3000" data-type='[ "pressence", "solution", "thinking" ]'>pressence</span>
              </h2>
            </div> {/* banner-content */}
            <div className="hero-banner__image wow fadeInUp animated" data-wow-delay="600ms">
              <picture>
                <source srcSet="/images/hero-2-2.webp" type="image/webp" />
                <img src="/images/hero-2-2.png" alt="ogency" />
              </picture>
            </div> {/* banner-image */}
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner