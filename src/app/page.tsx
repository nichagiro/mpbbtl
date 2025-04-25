import About from "./home/About";
import HeroBanner from "./home/HeroBanner";
import Divider from "@/components/Divider";
import Services from "./home/Services";
import WhyChooseUs from "./home/WhyChooseUs";
import SliderText from "@/components/SliderText";
import ProjectShowcase from "./home/ProjectShowcase";
import ContactSection from "./home/Contact";
import Head from "next/head";
import { Metadata } from "next";

const images = {
  url: "https://mpmbtl.com/images/backgrounds/hero-2-2.webp",
  width: 1472,
  height: 832,
  alt: "MPM Marketing Experiencial - Estrategias de marketing BTL y conexión emocional entre marcas y consumidores",
};

export const metadata: Metadata = {
  title: "MPM Marketing Experiencial | Estrategias que conectan marcas y personas",
  description: "Creamos campañas experienciales que combinan creatividad, tecnología y ejecución impecable. Conecta emocionalmente con tus consumidores.",
  openGraph: {
    title: "Conecta tu marca con experiencias inolvidables | MPM Marketing Experiencial",
    description: "Publicidad en movimiento, activaciones de marca y consultoría estratégica que generan alto impacto y recordación. Descubre cómo llevamos tu marca al siguiente nivel.",
    url: "https://mpmbtl.com",
    siteName: "MPM Marketing Experiencial",
    locale: "es_CO",
    type: "website",
    countryName: "Colombia",
    emails: "info@mpmbtl.com",
    phoneNumbers: "573001102276",
    images,
  },
  twitter: {
    site: "@Nicolas63783814",
    creator: "@Nicolas63783814",
    title: "MPM: Estrategias que emocionan y conectan | Marketing Experiencial",
    description: "Transformamos ideas en experiencias memorables. Activaciones, publicidad BTL y consultoría que acercan tu marca a las personas.",
    images,
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://mpmbtl.com",
  },
};

const jsonLdHome = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://mpmbtl.com",
  "name": "MPM Marketing Experiencial",
  "url": "https://mpmbtl.com",
  "logo": "https://mpmbtl.com/logo.png",
  "description": "MPM Marketing Experiencial crea estrategias únicas que generan conexión real entre marcas y consumidores.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cra. 18 #10-31",
    "addressLocality": "Cali",
    "addressRegion": "Valle del Cauca",
    "postalCode": "760010",
    "addressCountry": "CO",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+57 300 1102276",
    "contactType": "customer service",
    "email": "info@mpmbtl.com",
    "areaServed": "CO",
    "availableLanguage": ["Spanish"],
  },
  "sameAs": [
    "https://www.facebook.com/mpmbtlsas/",
    "https://www.instagram.com/mpmbtl",
    "https://es.pinterest.com/mpmbtl/",
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }} />
      </Head>

      <HeroBanner />
      <About />
      <Divider />
      <Services />
      <SliderText data={SLIDER_TEXT} />
      <WhyChooseUs />
      <ProjectShowcase />
      <ContactSection />
    </>
  );
}

const SLIDER_TEXT = ["Publicidad", "Activaciones", "BTL"];
