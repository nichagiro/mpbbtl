import ListText from "@/components/ListText";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose" id="why-choose">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 wow fadeInLeft animated" data-wow-delay="200ms">
            <div className="section-title">
              <SectionTitle tagline="Brindamos el mejor servicio" title="¿Por qué elegirnos?" />
            </div>
            {reasons.map((reason, index) => <ListText {...reason} key={index} />)}
          </div>
          <div className="col-lg-7">
            <div className="why-choose__image">
              <div
                className="why-choose__image__shape wow fadeIn animated"
                data-wow-delay="200ms"
              >
                <picture>
                  <source srcSet="/images/resources/why-choose-1-1.png" type="image/png" />
                  <img src="assets/images/resources/why-choose-1-1.png" alt="ogency" />
                </picture>

              </div>
              <div className="why-choose__image__author wow fadeInRight animated" data-wow-delay="300ms">
                <picture>
                  <source srcSet="/images/resources//why-choose-1-2.jpg"/>
                  <img src="assets/images/resources/why-choose-1-2.jpg" alt="ogency" />
                </picture>
              </div>
              <div className="video-one__banner__curved-circle-box wow fadeInUp animated" data-wow-delay="400ms" >
                <a href="https://www.youtube.com/watch?v=9KIcoMCBUzM" className="video-popup">
                  <span className="fa fa-play"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

const reasons = [
  {
    title: "Estrategias innovadoras",
    text: "No hacemos publicidad tradicional, diseñamos campañas que cautivan y conectan con el público.",
  },
  {
    title: "Proyectos de alta calidad",
    text: "Cada campaña está pensada para maximizar visibilidad y engagement con estándares de calidad superiores.",
  },
  {
    title: "Equipo experto",
    text: "Nuestro equipo de creativos, estrategas y logísticos trabaja para hacer que cada campaña sea un éxito.",
  },
];

export default WhyChooseUs;