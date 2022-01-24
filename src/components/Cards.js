import Card from "./Card";
import Pagination from "./Pagination";
import SortByCategory from "./SortByCategory";

const Cards = ({
  cards,
  cardsPerPage,
  totalCards,
  handlePaginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  return (
    <div className="franchise">
      <SortByCategory allCategories={cards} />
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
