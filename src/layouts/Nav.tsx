import Link from "next/link"

const Nav = () => {
  return (
    <header className="main-header main-header-two">
      <nav className="main-menu">
        <div className="container-fluid">
          <div className="main-menu__logo">
            <Link href="/">
              <picture>
                <source srcSet="/images/logo-light.png" type="image/png" />
                <img src="/images/logo-light.png" width="34" height="34" alt="Ogency" />
              </picture>
            </Link>
          </div>
          <div className="main-menu__nav">
            <ul className="main-menu__list one-page-scroll-menu">
              <li className="dropdown megamenu scrollToLink current">
                <Link href="#home">Home</Link>
                <ul>
                  <li>
                    <section className="home-showcase">
                      <div className="container">
                        <div className="home-showcase__inner">
                          <div className="row">
                            {[1, 2, 3, 4].map((num) => (
                              <div key={num} className="col-lg-3">
                                <div className="home-showcase__item">
                                  <div className="home-showcase__image">
                                    <picture>
                                      <source srcSet={`/images/home-showcase-1-${num}.jpg`} type="image/jpg" />
                                      <img src={`/images/home-showcase-1-${num}.jpg`} width="300" height="200" alt={`Homepage 0${num}`} />
                                    </picture>
                                    <div className="home-showcase__buttons">
                                      <Link href={`/index${num === 1 ? '' : `-${num}`}.html`} className="ogency-btn home-showcase__buttons__item">
                                        Multi Page
                                      </Link>
                                      {num !== 4 && (
                                        <Link href={`/index${num === 1 ? '' : `-${num}`}-one-page.html`} className="ogency-btn home-showcase__buttons__item">
                                          One Page
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                  <h3 className="home-showcase__title">Homepage 0{num}</h3>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                </ul>
              </li>
              {['about', 'services', 'portfolio', 'testimonial', 'blog'].map((section) => (
                <li key={section} className="scrollToLink">
                  <Link href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="main-menu__right">
            <button className="main-menu__toggler mobile-nav__toggler">
              <i className="fa fa-bars"></i>
            </button>
            <button className="main-menu__search search-toggler">
              <i className="icon-magnifying-glass"></i>
            </button>
            <Link href="/cart" className="main-menu__cart cart-toggler">
              <i className="icon-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav