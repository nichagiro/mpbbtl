import Picture from '@/components/Picture'
import Link from 'next/link'

const ServiceConact = ({ nameService }: { nameService: string }) => {
  return (
    <div className="services-details__banner">
      <div className="services-details__banner__shape"></div>
      <div className="services-details__banner__image">
        <Picture src="/images/resources/banner-author.png" alt="ogency" />
      </div>
      <div className="services-details__banner__icon"><span className="icon-marketing"></span></div>
      <h3 className="services-details__banner__title">
        ¿Estas buscando servicio de {nameService}?
      </h3>
      <Link className="ogency-btn" href="/#contacto">Contacto</Link>
    </div>
  )
}

export default ServiceConact