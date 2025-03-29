const About = () => {
  return (
    <section className="about-two" style={{ backgroundImage: "url(/assets/images/backgrounds/about-bg-1.png)" }} id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInUp animated" data-wow-delay="200ms">
            <div className="about-two__left">
              <div className="section-title">
                <h5 className="section-title__tagline section-title__tagline--has-dots">about the agency</h5>
                <h2 className="section-title__title">We’re top notch award winning web design agency</h2>
              </div>
              {/* <img src="/assets/images/resources/about-sign.png" alt="ogency" width="223" /> */}
              <p className="about-two__left--text">Michales - Co Founder</p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp animated" data-wow-delay="400ms">
            <div className="about-two__right">
              <p className="about-two__right--text">There are many variations of simply free text passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</p>
              <blockquote className="about-two__right--quote">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam reme aperiam.</blockquote>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="fact-two__item">
                  <div className="fact-one__item__count">
                    <span className="count-box">
                      <span className="count-text" data-stop="8" data-speed="1500"></span>
                    </span>K
                  </div>
                  <h3 className="fact-one__item__title">Projects completed</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="fact-two__item">
                  <div className="fact-one__item__count">
                    <span className="count-box">
                      <span className="count-text" data-stop="5" data-speed="1500"></span>
                    </span>K
                  </div>
                  <h3 className="fact-one__item__title">Satisfied customers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About