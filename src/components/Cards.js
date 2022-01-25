import { useParams } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";

const Cards = ({
  cards,
  cardsPerPage,
  totalCards,
  handlePaginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const { category } = useParams();

  return (
    <div className="franchise">
      <div>
        <ul className="franchise__cards">
          {cards
            .filter((card) => card.category === category)
            .map((card, index) => (
              <Card key={index} card={card} />
            ))}
        </ul>

        <div className="btn">
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={totalCards}
            handlePaginate={handlePaginate}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
