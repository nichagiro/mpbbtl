"use client"
import SectionTitle from "@/components/SectionTitle";
import SliderBrands from "@/components/SliderBrands";
import SliderInfoCard from "@/components/SliderInfoCard";

const ProjectShowcase = () => {

  return (
    <>
      <section className="project-two" id="portafolio">
        <div className="container">
          <div className="section-title text-center">
            <SectionTitle
              tagline="Experiencias que dejaron huella"
              title="Casos de éxito." />
          </div>
          <SliderInfoCard items={projects} />
        </div>
      </section>
      <div className="client-carousel client-carousel--without-title">
        <div className="container">
          <h5 className="client-carousel__tilte"><span>1K+ Brands Trust Us</span></h5>
          <SliderBrands items={clients} />
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;


const projects = [
  {
    tags: ["BTL", "Marketing"],
    title: "Coca-Cola",
    image: "/images/project/project-2-1.jpg",
    url: "/"
  },
  {
    tags: ["Publicidad Movil", "Marketing"],
    title: "Movistar",
    image: "/images/project/project-2-2.jpg",
    url: "/"
  },
  {
    tags: ["Imrepsion", "3D"],
    title: "Facebook",
    image: "/images/project/project-2-3.jpg",
    url: "/"
  },
  {
    tags: ["Activacion de marca", "Animación"],
    title: "Postobon",
    image: "/images/project/project-2-4.jpg",
    url: "/"
  },
  {
    tags: ["BTL", "Marketing"],
    title: "Pepsi",
    image: "/images/project/project-2-1.jpg",
    url: "/"
  },
];


const clients = [
  "/images/clients/andina.png",
  "/images/clients/bimbo2.png",
  "/images/clients/brilla2.png",
  "/images/clients/coca-cola-logo-1-1.png",
  "/images/clients/deprisa2.png",
  "/images/clients/energiteca.png",
  "/images/clients/exito2.png",
  "/images/clients/finsocial.jpg",
  "/images/clients/gaseosas-postobon-cambian-de-logo.png",
  "/images/clients/taskus.png",
]