import Counter from "@/components/Counter"
import SectionTitle from "@/components/SectionTitle"

const About = () => {
  return (
    <section className="about-two" style={{ backgroundImage: "url(/images/backgrounds/about-bg-1.webp)" }} id="sobre-nosotros">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInUp animated" data-wow-delay="200ms">
            <div className="about-two__left">
              <SectionTitle tagline="Publicidad que deja huella" title="Sobre Nosotros" />
              <p className="about-two__left--text w-75">
                “La clave del marketing no es solo vender, sino crear momentos inolvidables que conecten emocionalmente con las personas.”
              </p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp animated" data-wow-delay="400ms">
            <div className="about-two__right">
              <p className="about-two__right--text">
                Nos especializamos en estrategias experienciales diseñadas para generar conexión auténtica entre marcas y consumidores,
                combinando creatividad, tecnología y ejecución impecable. MPM Marketing Experiencial es el aliado estratégico de marcas que
                buscan experiencias memorables y campañas de alto impacto.
              </p>
              <blockquote className="about-two__right--quote">
                📢 Resultados que hablan por sí solos:
              </blockquote>
            </div>
            <div className="row">
              {counterData.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <Counter {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


const counterData = [
  { count: 2, data: "k", title: "Projectos Completados" },
  { count: 1, data: "k", title: "Clientes Satisfechos" },
];