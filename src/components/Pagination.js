const Pagination = ({
  cardsPerPage,
  totalCards,
  handlePaginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <button className="btn" onClick={prevPage}>
        Prev
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          className={`btn ${currentPage === pageNumber ? "btn__active" : ""}`}
          key={pageNumber}
          onClick={() => {
            handlePaginate(pageNumber);
          }}
        >
          {pageNumber}
        </button>
      ))}

      <button className="btn" onClick={nextPage}>
        Next
      </button>
    </>
  );
};

export default Pagination;
