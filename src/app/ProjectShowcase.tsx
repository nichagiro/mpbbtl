"use client"
import SectionTitle from "@/components/SectionTitle";
import SliderInfoCard from "@/components/SliderInfoCard";

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

const ProjectShowcase = () => {

  return (
    <section className="project-two" id="portfolio">
      <div className="container">
        <div className="section-title text-center">
          <SectionTitle
            tagline="Explora nuestros proyectos más recientes"
            title="Cada campaña es una oportunidad para transformar espacios y conectar marcas con su público." />
        </div>
        <SliderInfoCard items={projects} />
      </div>
    </section>
  );
};

export default ProjectShowcase;
