import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={card.image} alt={card.title} />
      </div>
      <div className="card__text-container">
        <h2 className="card__title">{card.title}</h2>
        <p className="card__price">{card.price}</p>
        <p className="card__description">{card.description}</p>
      </div>
      <NavLink className="card__link" to={`/cards/${card.id}`}>
        Read more
      </NavLink>
    </li>
  );
};

export default Card;
