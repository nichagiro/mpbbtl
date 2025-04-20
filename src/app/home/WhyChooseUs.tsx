import ListText from "@/components/ListText";
import Picture from "@/components/Picture";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose" id="porque-escogernos">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 wow fadeInLeft animated" data-wow-delay="200ms">
            <div className="section-title">
              <SectionTitle tagline="Más que ejecución, somos un aliado estratégico" title="¿Por qué elegirnos?" />
            </div>
            {reasons.map((reason, index) => <ListText {...reason} key={index} />)}
          </div>
          <div className="col-lg-7">
            <div className="why-choose__image">
              <div className="why-choose__image__shape wow fadeIn animated" data-wow-delay="200ms">
                <Picture src="/images/resources/why-choose-1-1.webp" alt="ogency" />
              </div>
              <div className="why-choose__image__author wow fadeInRight animated" data-wow-delay="300ms">
                <Picture src="/images/resources/why-choose-1-2.webp" alt="ogency" />
              </div>
              <div className="video-one__banner__curved-circle-box wow fadeInUp animated" data-wow-delay="400ms" >
                {/* esta etiqueta realmente es un <a/> para linkear a youtube pop-up */}
                <div className="video-popup"> 
                  <span className="fa fa-play"></span>
                </div>
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
    title: "Enfoque estratégico",
    text: "Diseñamos experiencias alineadas con los objetivos de tu marca.",
  },
  {
    title: "Ejecución impecable",
    text: "Contamos con la infraestructura y el equipo adecuado.",
  },
  {
    title: "Innovación constante",
    text: "Usamos tecnología y creatividad para impactar.",
  },
  {
    title: "Resultados medibles",
    text: "Analizamos el impacto para optimizar el retorno de inversión.",
  },
];

export default WhyChooseUs;