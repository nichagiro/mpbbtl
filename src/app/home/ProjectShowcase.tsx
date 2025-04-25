"use client"
import SectionTitle from "@/components/SectionTitle";
import SliderBrands from "@/components/SliderBrands";
// import SliderInfoCard from "@/components/SliderInfoCard";

const ProjectShowcase = () => {

  return (
    <>
    {/* !! oculto los proyectos */}
      {/* <section className="project-two" id="portafolio"> 
        <div className="container">
          <div className="section-title text-center">
            <SectionTitle tagline="Experiencias que dejaron huella" title="Casos de éxito." />
          </div>
          <SliderInfoCard items={projects} />
        </div>
      </section> */}
      <div className="client-carousel client-carousel--without-title pt-5">
        <div className="container">
          <div className="section-title text-center">
            <SectionTitle tagline="Marcas que confían en nosotros" title="" />
          </div>
          <SliderBrands items={clients} />
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;


// const projects = [
//   {
//     tags: ["BTL", "Marketing"],
//     title: "Coca-Cola",
//     image: "/images/project/project-2-1.webp",
//     url: "/"
//   },
//   {
//     tags: ["Publicidad Movil", "Marketing"],
//     title: "Movistar",
//     image: "/images/project/project-2-2.webp",
//     url: "/"
//   },
//   {
//     tags: ["Imrepsion", "3D"],
//     title: "Facebook",
//     image: "/images/project/project-2-3.webp",
//     url: "/"
//   },
//   {
//     tags: ["Activacion de marca", "Animación"],
//     title: "Postobon",
//     image: "/images/project/project-2-4.webp",
//     url: "/"
//   },
//   {
//     tags: ["BTL", "Marketing"],
//     title: "Pepsi",
//     image: "/images/project/project-2-1.webp",
//     url: "/"
//   },
// ];


const clients = [
  "/images/clients/andina.webp",
  "/images/clients/bimbo2.webp",
  "/images/clients/brilla2.webp",
  "/images/clients/coca-cola-logo-1-1.webp",
  "/images/clients/deprisa2.webp",
  "/images/clients/energiteca.webp",
  "/images/clients/exito2.webp",
  "/images/clients/finsocial.webp",
  "/images/clients/gaseosas-postobon-cambian-de-logo.webp",
  "/images/clients/taskus.webp",
]