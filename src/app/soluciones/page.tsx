// ui
import BackgroundSection from "@/components/BackgroundSection";
import ServiceConact from "./Conact";
import OurBenefits from "./OurBenefits";
import WhyChoose from "./WhyChoose";
import Skills from "./Skills";
import Picture from "@/components/Picture";
import Head from "next/head";

// db, helper, types
import { services } from "@/db/services";
import Content from "./Content";
import type { Metadata } from "next";

const images = {
  url: "https://mpmbtl.com/images/service/service-detail.webp",
  width: 770,
  height: 437,
  alt: "Servicios de Marketing Experiencial",
};

export const metadata: Metadata = {
  title: "Servicios de Marketing Experiencial | Publicidad, Activaciones y Consultoría | MPM",
  description: "Descubre nuestros servicios de marketing experiencial: publicidad móvil, activaciones de marca en vivo y consultoría en estrategias experienciales. Generamos conexión real entre marcas y consumidores.",
  openGraph: {
    title: "Servicios de Marketing Experiencial | MPM Marketing",
    description: "Publicidad en movimiento, activaciones en vivo y consultoría de estrategias para fortalecer tu marca. Conecta emocionalmente con tu audiencia.",
    url: "https://mpmbtl.com/soluciones",
    images: images,
    locale: "es_CO",
    type: "website",
    siteName: "MPM Marketing Experiencial",
  },
  twitter: {
    title: "Servicios de Marketing Experiencial | MPM Marketing",
    description: "Publicidad móvil, activaciones de marca, experiencias inmersivas y consultoría estratégica. Estrategias de alto impacto para marcas líderes.",
    card: "summary_large_image",
    images: images
  },
  alternates: {
    canonical: "https://mpmbtl.com/soluciones"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mpmbtl.com/soluciones",
  "serviceType": "Marketing Experiencial",
  "provider": {
    "@type": "Organization",
    "name": "MPM Marketing Experiencial",
    "url": "https://mpmbtl.com",
    "logo": "https://mpmbtl.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57 300 1102276",
      "contactType": "customer service",
      "email": "info@mpmbtl.com",
      "areaServed": "CO"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Colombia"
  },
  "description": "Publicidad móvil, activaciones de marca en vivo y consultoría en estrategias experienciales para fortalecer la conexión entre marcas y consumidores."
}


export default async function Servicios() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <BackgroundSection title={"Soluciones"} links={links} />
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 wow fadeInUp animated" data-wow-delay="300ms">
              <div className="services-details__sidebar">
                <ServiceConact />
              </div>
              <WhyChoose />
              <Skills />
            </div>
            <div className="col-xl-8 col-lg-7 wow fadeInUp animated" data-wow-delay="400ms">
              <div className="services-details__content">
                <div className="services-details__thumb">
                  <Picture src="/images/service/service-detail.webp?v=1" />
                </div>
                <div className="pt-4">
                  {
                    services.map((item, index) => (
                      <div
                        key={item.id}
                        className={`${index + 1 === services.length ? "pb-0" : "pb-4"}`}
                      >
                        <Content
                          body={item.description}
                          title={item.title}
                          list={item.listContent}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <OurBenefits />
        </div>
      </section>
    </>
  );
}


const links = [{
  title: "Soluciones",
  url: "/soluciones"
}]