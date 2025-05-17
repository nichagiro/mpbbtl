import CardList from "@/components/CardList"
import SectionTitle from "@/components/SectionTitle"

const OurBenefits = () => {
  return (
    <div className="services-details__benefit">
      <div className="services-details__benefit__content">
        <div className="section-title text-center">
          <SectionTitle tagline="Servicios" />
        </div>
        <div className="mb-5 row">
          {
            (Object.keys(data) as Array<keyof typeof data>).map(item => (
              <div key={Math.random()} className="col-lg-4 col-md-6 col-sm-12">
                <CardList title={item} price="" features={data[item]} />
              </div>
            ))
          }
        </div>
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
