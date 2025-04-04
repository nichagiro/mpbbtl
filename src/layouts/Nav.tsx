import Socials from "@/components/Socials"
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
                <img src="/images/logo-light.png" width="266" height="100" alt="Ogency" />
              </picture>
            </Link>
          </div>
          <div className="main-menu__nav">
            <ul className="main-menu__list one-page-scroll-menu">
              <li key="home" className="scrollToLink">
                <Link href="#home">Inicio</Link>
              </li>
              <li key="about" className="scrollToLink">
                <Link href="#about">Nosotros</Link>
              </li>
              <li key="services" className="scrollToLink">
                <Link href="#services">Servicios</Link>
              </li>
              <li key="portfolio" className="scrollToLink">
                <Link href="#portfolio">Portafolio</Link>
              </li>
              <li key="why-choose" className="scrollToLink">
                <Link href="#why-choose">Marketing</Link>
              </li>
              <li key="contact" className="scrollToLink">
                <Link href="#contact">Contacto</Link>
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
              <a href="mailto:needhelp@packageName__.com">needhelp@finlon.com</a>
            </li>
            <li>
              <i className="icon-phone-call"></i>
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          <div className="mobile-nav__social">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav