import About from "./home/About";
import HeroBanner from "./home/HeroBanner";
import Divider from "@/components/Divider";
import Services from "./home/Services";
import WhyChooseUs from "./home/WhyChooseUs";
import SliderText from "@/components/SliderText";
import ProjectShowcase from "./home/ProjectShowcase";
import ContactSection from "./home/Contact";

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

