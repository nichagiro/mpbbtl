import InfoCard from "@/components/InfoCard";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const Services = () => {
  return (
    <section className="service-two" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <SectionTitle tagline="Lo que ofrecemos" title="Servicios diseñados para impactar" />
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <InfoCard {...service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Publicidad Móvil",
    link: "#",
    image: "/images/service/services-2-1.jpg",
    icon: "icon-color-sample",
    description: "Lleva tu mensaje a donde está tu audiencia con carros valla, pantallas LED y más.",
  },
  {
    title: "Showroom y tarimas móviles",
    link: "#",
    image: "/images/service/services-2-3.jpg",
    icon: "icon-job-promotion",
    description: "Exhibe productos y realiza eventos en cualquier lugar con impacto.",
  },
  {
    title: "Perifoneo y cuñas radiales",
    link: "#",
    image: "/images/service/services-2-2.jpg",
    icon: "icon-badge",
    description: "Haz que te escuchen con anuncios dinámicos y estratégicos en las calles.",
  },
  {
    title: "Impresión y publicidad exterior",
    link: "#",
    image: "/images/service/services-2-6.jpg",
    icon: "icon-pen-tool",
    description: "Desde vallas hasta material promocional, aseguramos visibilidad con calidad.",
  },
  {
    title: "Activaciones de marca",
    link: "#",
    image: "/images/service/services-2-5.jpg",
    icon: "icon-award",
    description: "Llevamos tu marca más allá de la publicidad tradicional. Creamos experiencias memorables que generan emociones.",
  },
  {
    title: "Promotores y PubliHuman",
    link: "#",
    image: "/images/service/services-2-4.jpg",
    icon: "icon-marketing",
    description: "Conecta con tu público de manera directa y personalizada en cada campaña.",
  },
];

export default Services;
