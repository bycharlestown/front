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
  return (
    <div>
      <ul className="cards">
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
  );
};

export default Cards;
