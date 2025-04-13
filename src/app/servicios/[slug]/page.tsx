// ui
import BackgroundSection from "@/components/BackgroundSection";
import MenuList from "../../../components/MenuList";
import ServiceConact from "./Conact";
import OurBenefits from "./OurBenefits";
import WhyChoose from "./WhyChoose";
import Skills from "./Skills";
import Picture from "@/components/Picture";

// db, helper, types
import { services } from "@/db/services";
import getDataHelper from "@/helper/getDataHelper";

import type { Metadata } from "next";
interface PageProps {
  params: Promise<{ slug: string }>
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { title, description } = getDataHelper(services, "slug", slug);

  const fullTitle = `${title} | Servicios - MPM Marketing Experiencial`;
  const url = `https://mpmbtl.com/servicios/${slug}`;
  const image = `https://mpmbtl.com/images/service/service-detail.jpg`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      title: fullTitle,
      description,
      images: [image],
      card: "summary_large_image"
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Servicios({ params }: PageProps) {
  const { slug } = await params;
  const { title, description } = getDataHelper(services, "slug", slug);

  const menuList = services.map((service) => ({
    name: service.title,
    url: "/servicios/" + service.slug,
  }));

  return (
    <>
      <BackgroundSection title={title} />
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 wow fadeInUp animated" data-wow-delay="300ms">
              <div className="services-details__sidebar">
                <MenuList data={menuList} />
                <ServiceConact nameService={title} />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 wow fadeInUp animated" data-wow-delay="400ms">
              <div className="services-details__content">
                <div className="services-details__thumb">
                  <Picture src="/images/service/service-detail.jpg" />
                </div>
                <h3 className="services-details__content__title">{title}</h3>
                <p className="services-details__content__text">{description}</p>
                <WhyChoose />
                <Skills />             
              </div>
            </div>
          </div>
          <OurBenefits />
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
