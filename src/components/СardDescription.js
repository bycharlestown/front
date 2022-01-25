// https://medium.com/geekculture/how-to-use-react-router-useparams-436851fd5ef6

import { useParams, NavLink } from "react-router-dom";

const FullDescription = ({ cards }) => {
  const { id } = useParams();

  return (
    <div>
      {cards
        .filter((card) => card.id === id)
        .map((card) => (
          <div className="description" key={card.id}>
            <NavLink className="description__link" to={`/${card.category}`}>
              Вернуться к списку франшиз
            </NavLink>
            <h3>Название франшизы:</h3>
            <p className="description__block">{card.title}</p>

            <h3>Цена франшизы:</h3>
            <p className="description__block">{card.price_franchise}</p>

            <h3>Информация:</h3>
            <p className="description__block">{card.main_info}</p>

            <h3>Описание компании:</h3>
            <p className="description__block">{card.company_descr}</p>

            <h3>Описание франшизы:</h3>
            <p className="description__block">{card.franch_descr}</p>

            <h3>Поддержка:</h3>
            <p className="description__block">{card.support_descr}</p>

            <h3>Требования к покупателям:</h3>
            <p className="description__block">{card.buyers_requirements}</p>

            <h3>Требования к франшизе:</h3>
            <p className="description__block">{card.quarters_requirements}</p>
          </div>
        ))}
    </div>
  );
};

export default FullDescription;
