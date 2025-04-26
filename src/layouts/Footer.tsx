import Picture from '@/components/Picture';
import Socials from '@/components/Socials';
import { CONTACT_NUMBER, EMAIL } from '@/db/general';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="main-footer" style={{ backgroundImage: 'url(/images/backgrounds/footer-bg-1.webp)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
            <div className="main-footer__about">
              <p className="footer-widget__text">Comencemos a trabajar juntos</p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a> <br />
              <a href={`tel:${CONTACT_NUMBER.replace(" ", "")}`}>{CONTACT_NUMBER}</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="300ms">
            <div className="main-footer__navmenu d-flex">
              <ul>
                <li>Cali, Colombia</li>
                <li>Horario de atención</li>
                <li>Lunes a viernes de 8:00 a.m. - 6:00 p.m.</li>
                <li>Sábados de 8:00 a.m - 12:00 m.</li>
              </ul>
            </div>
          </div>
          <div className="main-footer__top line mt-5 pt-5 pb-5 wow fadeInUp animated" data-wow-delay="100ms">
            <Link href="/" className="main-footer__logo">
              <Picture src="/images/logo-light.webp" alt="logo mpm marketing digital" />
            </Link>
            <div className="main-footer__social">
              <Socials />
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
