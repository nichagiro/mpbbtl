// ui
import BackgroundSection from "@/components/BackgroundSection";
import MenuList from "../../../components/MenuList";
import ServiceConact from "./ServiceConact";
import OurBenefits from "./OurBenefits";
import WhyChoose from "./WhyChoose";
import Skills from "./Skills";

// db, helper
import { services } from "@/db/services";
import getDataHelper from "@/helper/getDataHelper";
import Picture from "@/components/Picture";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Servicios({ params }: { params: { slug: string } }) {
  const data = await params;
  const { title, description } = getDataHelper(services, "slug", data.slug);

  const menuList = services.map((service) => ({
    name: service.title,
    url: service.link,
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
                <OurBenefits />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

