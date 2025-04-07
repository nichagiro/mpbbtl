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
              <SectionTitle tagline="Lo que ofrecemos" title="Servicios diseñados para impactar" />
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <InfoCard
                index={index}
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                link={service.link}
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
