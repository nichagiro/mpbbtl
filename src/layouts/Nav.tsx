import Picture from "@/components/Picture"
import Socials from "@/components/Socials"
import { CONTACT_NUMBER, EMAIL } from "@/db/general"
import Link from "next/link"

const Nav = () => {
  return (
    <>
      <header className="main-header main-header-two">
        <nav className="main-menu">
          <div className="container-fluid">
            <div className="main-menu__logo">
              <Link href="/">
                <Picture src="/images/logo-light.webp" width="266" height="100" alt="logo mpm marketing digital" />
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
                <Picture src="/images/logo-light.webp" width="266" height="100" alt="logo mpm btl" />
              </Link>
            </div>
            <div className="mobile-nav__container"></div>
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <i className="icon-phone-call"></i>
                <a href={`tel:${CONTACT_NUMBER.replace(" ", "")}`}>{CONTACT_NUMBER}</a>
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