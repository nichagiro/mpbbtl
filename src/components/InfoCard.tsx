import Link from "next/link";
import Picture from "./Picture";

type InfoCardProps = {
  icon?: string;
  title: string;
  description: string;
  link: string;
  index: number;
  image: string; // imagen de fondo en card
  imageIcon?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, link, index, image, imageIcon }) => {
  return (
    <div className="service-two__item wow fadeInUp animated h-100" data-wow-delay={`${200 + index * 100}ms`}>
      <div
        className="service-two__item__shape" style={{ backgroundImage: `url(/images/backgrounds/service-shape-2.webp)` }} />
      <div className="service-two__item__inner">
        <div className="service-two__item__hover" style={{ backgroundImage: `url(${image})` }} />
        <div className="service-two__item__icon">
          {
            imageIcon
              ? <Picture src={imageIcon} alt="icon mpm marketing digital" width={40} height={40} />
              : <span className={icon}></span>
          }
        </div>
        <h3 className="service-two__item__title">
          <Link href={link} title={title}>{title}</Link>
        </h3>
        <p className="service-two__item__text">{description}</p>
        <Link className="service-two__item__btn" href={link} title={title}>
          <span className="icon-right-arrow"></span>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
