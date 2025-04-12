"use client";
import React, { useEffect } from "react";
import Picture from "./Picture";

interface SliderBrandsProps {
  items: string[];
}

const SliderBrands: React.FC<SliderBrandsProps> = ({ items }) => {

  useEffect(() => {
    window.jQuery(".client-carousel__one").owlCarousel({
      items: items.length,
      margin: 30,
      smartSpeed: 700,
      loop: true,
      autoplay: true,
      nav: false,
      dots: false,
      responsive: {
        "0": {
          "items": 1,
          "margin": 0
        },
        "360": {
          "items": 2,
          "margin": 0
        },
        "575": {
          "items": 3,
          "margin": 0
        },
        "768": {
          "items": 4,
          "margin": 0
        },
        "992": {
          "items": 5,
          "margin": 0
        },
      }
    })
  }, [items.length])

  return (
    <div className="client-carousel__one ogency-owl__carousel owl-theme owl-carousel">
      {items.map((item, index) => (
        <div className="client-carousel__one__item" key={index} style={{ width: 100, height: 100 }}>
          <Picture src={item} className="rounded-circle" height={100} />
        </div>
      ))}

    </div >
  );
};

export default SliderBrands;

