import About from "./home/About";
import HeroBanner from "./home/HeroBanner";
import Divider from "@/components/Divider";
import Services from "./home/Services";
import WhyChooseUs from "./home/WhyChooseUs";
import SliderText from "@/components/SliderText";
import ProjectShowcase from "./home/ProjectShowcase";
import ContactSection from "./home/Contact";

import { Metadata } from "next";

const title = "MPM Marketing Experiencial | Estrategias que conectan marcas y personas"
const description = "MPM Marketing Experiencial crea estrategias únicas que generan conexión real entre marcas y consumidores. Combinamos creatividad, tecnología y ejecución impecable para campañas memorables y de alto impacto."
const url = "https://mpmbtl.com/"
const images = "https://mpmbtl.com/"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    images,
    type: "website"
  },
  twitter: {
    title,
    description,
    images,
    card: "summary_large_image"
  },
  alternates: {
    canonical: url,
  },
};

export default function Home() {
  return (
    <>
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


const SLIDER_TEXT = ["Publicidad", "Marketing", "BTL"]

