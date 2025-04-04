import Counter from "@/components/Counter"
import SectionTitle from "@/components/SectionTitle"

const About = () => {
  return (
    <section className="about-two" style={{ backgroundImage: "url(/images/backgrounds/about-bg-1.png)" }} id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInUp animated" data-wow-delay="200ms">
            <div className="about-two__left">
              <SectionTitle tagline="Publicidad que deja huella" title="Sobre Nosotros" />
              <p className="about-two__left--text w-75">
                Transformamos ideas en estrategias publicitarias efectivas, llevando tu marca a las calles y a la mente de tu público.
              </p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp animated" data-wow-delay="400ms">
            <div className="about-two__right">
              <p className="about-two__right--text">
                Llevamos más de 12 años creando estrategias innovadoras en publicidad exterior y marketing BTL.
                Transformamos espacios urbanos en escenarios publicitarios que generan impacto y conexión con el público.
              </p>
              <blockquote className="about-two__right--quote">
                📢 Desde publicidad móvil con carros LED hasta activaciones de marca y eventos, convertimos cada campaña en una experiencia memorable.
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
  { count: 2, data: "k", title: "Projectos Finalizados" },
  { count: 1, data: "k", title: "Clientes Activos" },
];