import InfoCard from "@/components/InfoCard";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/db/services";
import React from "react";

const Services = () => {
  return (
    <section className="service-two" id="servicios">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <SectionTitle tagline="Soluciones" title="Experiencias únicas que fortalecen la conexión con tu audiencia" />
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <InfoCard
                index={index}
                imageIcon={service.imageIcon}
                title={service.title}
                description={service.shortDescription}
                link={"/soluciones"}
                image={service.smallImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
