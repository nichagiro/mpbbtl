import Picture from "@/components/Picture"

const OurBenefits = () => {
  return (
    <div className="services-details__benefit">
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="services-details__benefit__img">
            <Picture src="/images/service/services-details-benefit-img.webp" alt="ogency" />
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="services-details__benefit__content">
            <h3 className="services-details__benefit__title">Nuestras Herramientas</h3>
            <p className="services-details__benefit__text">Consigue el mejor marketing digital de la agencia.</p>
            <ul className="services-details__benefit__lists list-unstyled d-md-flex flex-wrap gap-2">
              {
                data.map(item => (
                  <li key={item}>
                    <span className="fa fa-check-circle" />
                    {item}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>)
}

export default OurBenefits

const data = [
  "Carro valla",
  "Carro pantalla LED",
  "Carro sampling",
  "Camión oficina",
  "Oficina móvil",
  "Camión vitrina",
  "Camión tarima",
  "Bicivallas",
  "Motovallas",
  "Publihuman",
  "Pativallas",
  "Perifoneo",
  "Promotores",
  "Modelos de protocolo",
  "Impulsadores",
  "Volanteros",
  "Animadores",
  "Coordinadores",
  "Catering",
  "Dummies",
  "Material POP",
  "Estación de bebidas y café",
  "Refrigerios",
  "Alquiler de maquinaria para eventos: Crispetera, algodonera, etc",
  "Alquiler de televisores, video beams, sonido",
  "Vallas de contención",
  "Decoración"
]
