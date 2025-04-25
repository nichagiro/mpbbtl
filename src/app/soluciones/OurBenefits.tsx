import SectionTitle from "@/components/SectionTitle"

const OurBenefits = () => {
  return (
    <div className="services-details__benefit">
      <div className="services-details__benefit__content">
        <div className="section-title text-center">
          <SectionTitle tagline="Servicios" />
        </div>
        {
          (Object.keys(data) as Array<keyof typeof data>).map(item => (
            <div key={item} className="mb-5">
              <p className="services-details__benefit__text">{item}</p>
              <ul className="services-details__benefit__lists list-unstyled d-md-flex flex-wrap gap-2">
                {
                  data[item].map(subItem => (
                    <li key={subItem}>
                      <span className="fa fa-check-circle" />
                      {subItem}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))}
      </div>
    </div>
  )
}

export default OurBenefits

const data = {
  "Publicidad móvil y exterior": [
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
  ],
  "Logística y activaciones": [
    "Promotores",
    "Modelos de protocolo",
    "Impulsadores",
    "Volanteros",
    "Animadores",
    "Coordinadores",
  ],
  "Equipamiento para eventos": [
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
}
