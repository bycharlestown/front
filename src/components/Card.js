import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
  console.log(card.price_min);
  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={card.image} alt={card.title} />
      </div>
      <div className="card__text-container">
        <h2 className="card__title">{card.title}</h2>
        <p className="card__price">
          {Number(card.price_min).toLocaleString()}
          {card.price_min === card.price_max
            ? ""
            : ` — ${Number(card.price_max).toLocaleString()}`}{" "}
          ₽
        </p>
        <p className="card__description">{card.description}</p>
      </div>
      <NavLink className="card__link" to={`/cards/${card.id}`}>
        Подробнее
      </NavLink>
    </li>
  );
};

export default Card;
