import { NavLink } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";
import SortSearch from "./SortSearch";

const Cards = ({
  cards,
  cardsPerPage,
  totalCards,
  handlePaginate,
  prevPage,
  nextPage,
  currentPage,
  allCategories,
}) => {
  return (
    <div className="franchise">
      <div className="franchise__sorting">
        <SortSearch allCategories={allCategories} />
      </div>
      <div>
        <ul className="franchise__cards">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </ul>

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
  );
};

export default Cards;
