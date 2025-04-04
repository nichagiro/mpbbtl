"use client";
import Link from "next/link";
import React, { useEffect } from "react";

type CardInfo = {
  image: string;
  title: string;
  tags: string[];
  url: string;
};

type SliderInfoCardProps = {
  items: CardInfo[];
};

const SliderInfoCard: React.FC<SliderInfoCardProps> = ({ items }) => {

  useEffect(() => {
    window.jQuery(".project-two__carousel").owlCarousel({
      items: items.length,
      margin: 30,
      smartSpeed: 700,
      loop: true,
      autoplay: true,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    })
  }, [items.length])

  return (
    <div className="project-two__carousel ogency-owl__carousel owl-theme owl-carousel">
      {items.map((item, index) => (
        <div className="project-two__item" key={index}>
          <div className="project-two__item__image">
            <picture>
              <source srcSet={item.image} />
              <img src={item.image} alt={item.title} title={item.title} />
            </picture>
          </div>
          <div className="project-two__item__content">
            <p className="project-two__item__content__cats">
              {item.tags.map((tag, i) => (
                <span key={i}>
                  <Link href={item.url} title={item.title}>{tag}</Link>
                  {i < item.tags.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <h3 className="project-two__item__content__title">
              <Link href={item.url} title={item.title}>{item.title}</Link>
            </h3>
          </div>
        </div>
      ))}

    </div >
  );
};

export default SliderInfoCard;

