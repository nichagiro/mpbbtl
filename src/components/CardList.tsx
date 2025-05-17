import React from "react";

type CardListProps = {
  title: string;
  price: string;
  features: string[];
  buttonUrl?: string;
  buttonLabel?: string;
};

const CardList: React.FC<CardListProps> = ({ title, price, features, buttonUrl, buttonLabel }) => (
  <div className="pricing-one__item text-center">
    <h2 className="pricing-one__item__list-title" style={{ fontSize: "1.5rem" }}>{title}</h2>
    <h3 className="pricing-one__item__price">{price}</h3>
    <div className="pricing-one__item__border"></div>
    <ul className="pricing-one__item__list">
      {features.map((feature, idx) => (
        <li key={idx}>
          <span className="fa fa-check"></span>
          {feature}
        </li>
      ))}
    </ul>
    {
      buttonLabel && buttonUrl &&
      <a href={buttonUrl} className="ogency-btn">
        {buttonLabel}
      </a>
    }
  </div>
);

export default CardList;
