import About from "./About";
import HeroBanner from "./HeroBanner";
import Divider from "@/components/Divider";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import SliderText from "@/components/SliderText";
import ProjectShowcase from "./ProjectShowcase";
import ContactSection from "./Contact";

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

