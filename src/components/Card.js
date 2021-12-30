import React from "react";

const Card = ({ card }) => {
  return (
    <>
      <div className="card">
        <div className="card__image-wrapper">
          <img className="card__image" src={card.image} alt={card.title} />
        </div>
        <div className="card__text-container">
          <h2 className="card__title">{card.title}</h2>
          <p className="card__price">{card.price}</p>
          <p className="card__description">{card.description}</p>
          <a className="card__link" href={card.card_id}>
            Перейти к описанию
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
