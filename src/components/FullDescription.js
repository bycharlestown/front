// https://medium.com/geekculture/how-to-use-react-router-useparams-436851fd5ef6

import { useParams, NavLink } from "react-router-dom";

const FullDescription = ({ cards }) => {
  const { id } = useParams();

  return (
    <>
      {cards
        .filter((card) => card.id === id)
        .map((card, index) => (
          <div key={index}>
            <NavLink className="nav__link" to="/cards">
              Вернуться к списку франшиз
            </NavLink>
            <h3>Название франшизы:</h3>
            <p className="card__description">{card.title}</p>
            <h3>Цена франшизы:</h3>
            <p className="card__description">{card.price_franchise}</p>
            <h3>Информация:</h3>
            <p className="card__description">{card.main_info}</p>
            <h3>Описание компании:</h3>
            <p className="card__description">{card.company_descr}</p>
            <h3>Описание франшизы:</h3>
            <p className="card__description">{card.franch_descr}</p>
            <h3>Поддержка:</h3>
            <p className="card__description">{card.support_descr}</p>
            <h3>Требования к покупателям:</h3>
            <p className="card__description">{card.buyers_requirements}</p>
            <h3>Требования к франшизе:</h3>
            <p className="card__description">{card.quarters_requirements}</p>
          </div>
        ))}
    </>
  );
};

export default FullDescription;
