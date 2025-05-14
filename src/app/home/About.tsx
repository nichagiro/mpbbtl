import Counter from "@/components/Counter"
import SectionTitle from "@/components/SectionTitle"

const About = () => {
  return (
    <section className="about-two" style={{ backgroundImage: "url(/images/backgrounds/about-bg-1.webp)" }} id="sobre-nosotros">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInUp animated" data-wow-delay="200ms">
            <div className="about-two__left">
              <SectionTitle tagline="" title="Sobre Nosotros" />
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
                <div className="col-md-6 d-flex justify-content-center" key={index}>
                  <Counter {...item} reverse/>
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
  { count: 860, data: "+", title: "Proyectos Completados" },
  { count: 146, data: "+", title: "Clientes Satisfechos" },
];