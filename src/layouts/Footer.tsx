import Socials from '@/components/Socials';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="main-footer" style={{ backgroundImage: 'url(/images/backgrounds/footer-bg-1.png)' }}>
      <div className="container">
        <div className="main-footer__top wow fadeInUp animated" data-wow-delay="100ms">
          <Link href="/" className="main-footer__logo">
            <picture>
              <source srcSet="/images/logo-light.png" />
              <img src="/images/logo-light.png" alt="ogency" />
            </picture>
          </Link>
          <div className="main-footer__social">
            <Socials />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
            <div className="main-footer__about">
              <p className="footer-widget__text">Comencemos a trabajar juntos</p>
              <a href="mailto:help@company.com">paola.burbano@mpmbtl.com</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="300ms">
            <div className="main-footer__navmenu">
              <ul>
                <li>
                  <a
                    href='https://www.google.com/maps?ll=3.440398,-76.531337&z=16&t=m&hl=es&gl=US&mapclient=embed&q=Cra.+18+%23+10-31+Bretana+Cali,+Valle+del+Cauca'
                    target="_blank"
                    rel="noopener noreferrer"
                    title='Ubicación'
                  >
                    Cra. 18 #10-31, COMUNA 3, Cali, Valle del Cauca
                  </a>
                </li>
                <li>3503442703 - 3188602676 </li>
                <li>Lunes a viernes - 8am - 6pm</li>
                <li>Sábados : 8am - 12pm</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="main-footer__copyright wow fadeInUp animated" data-wow-delay="500ms">
          © Copyright <span className="dynamic-year"></span> by <Link href="https://overweb.com.co">Overweb</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
