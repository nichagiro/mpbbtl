const OurBenefits = () => {
  return (
    <div className="services-details__benefit">
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-6">
          <div className="services-details__benefit__img">
            <picture>
              <source srcSet="/images/service/services-details-benefit-img.jpg" />
              <img src="/images/service/services-details-benefit-img.jpg" alt="ogency" />
            </picture>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-6">
          <div className="services-details__benefit__content">
            <h3 className="services-details__benefit__title">Nuestros Beneficios</h3>
            <p className="services-details__benefit__text">Consigue el mejor marketing digital de la agencia.</p>
            <ul className="services-details__benefit__lists list-unstyled">
              <li><span className="fa fa-check-circle"></span>Experiencia comprobada en campañas de alto impacto.</li>
              <li><span className="fa fa-check-circle"></span>Cobertura móvil, visual y sonora en múltiples canales.</li>
              <li><span className="fa fa-check-circle"></span>Personal capacitado y estructuras listas para cualquier desafí</li>
              <li><span className="fa fa-check-circle"></span>Producción, logística y creatividad en un solo lugar.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>)
}

export default OurBenefits