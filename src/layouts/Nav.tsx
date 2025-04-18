import Socials from "@/components/Socials"
import Link from "next/link"

const Nav = () => {
  return (
    <>
      <header className="main-header main-header-two">
        <nav className="main-menu">
          <div className="container-fluid">
            <div className="main-menu__logo">
              <Link href="/">
                <picture>
                  <source srcSet="/images/logo-light.png" type="image/png" />
                  <img src="/images/logo-light.png" width="266" height="100" alt="Ogency" />
                </picture>
              </Link>
            </div>
            <div className="main-menu__nav">
              <ul className="main-menu__list one-page-scroll-menu">
                <li key="home" className="scrollToLink">
                  <Link href="/#inicio">Home</Link>
                </li>
                <li key="about" className="scrollToLink">
                  <Link href="/#sobre-nosotros">Nosotros</Link>
                </li>
                <li key="services" className="scrollToLink">
                  <Link href="/#servicios">Soluciones</Link>
                </li>
                {/* ocluto mientras */}
                <li key="portfolio" className="scrollToLink d-none">
                  <Link href="/#portafolio">Proyectos</Link>
                </li>
                <li key="contact" className="scrollToLink">
                  <Link href="/#contacto">Contacto</Link>
                </li>
              </ul>
            </div>

            <div className="main-menu__right">
              <Link href="#" className="main-menu__toggler mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </Link>
            </div>

          </div>
        </nav>

        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler"></div>
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>
            <div className="logo-box">
              <Link href="/" title="mpm logo">
                <picture>
                  <source srcSet="/images/logo-light.png" type="image/png" />
                  <img src="/images/logo-light.png" width="266" height="100" alt="Ogency" />
                </picture>
              </Link>
            </div>
            <div className="mobile-nav__container"></div>
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                  {process.env.NEXT_PUBLIC_EMAIL}
                </a>
              </li>
              <li>
                <i className="icon-phone-call"></i>
                <a href="tel:3503442703">{process.env.NEXT_PUBLIC_CONTACT_NUMBER}</a>
              </li>
            </ul>
            <div className="mobile-nav__social">
              <Socials />
            </div>
          </div>
        </div>
      </header>

      {/* menu sticky on scroll */}
      <div className="stricky-header stricked-menu main-menu main-header-two">
        <div className="sticky-header__content"></div>
      </div>
    </>
  )
}

export default Nav