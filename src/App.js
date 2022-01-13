import "./App.css";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FullDescription from "./components/FullDescription";

function App() {
  const [cards, setCards] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(40);

  // ************ FETCHING DATA ************

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setCards(cardsFromServer);
    };

    getCards();
  }, []);

  const fetchCards = async () => {
    console.log("start fetching");
    try {
      const res = await fetch("https://localhost:5000/api/parsing_info");

      const data = await res.json();

      return data;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  // ************ PAGINATION ************

  // GET CURRENT CARDS
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = cards.slice(indexOfFirstCard, indexOfLastCard);

  // SET CURRENT PAGE
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage === Math.ceil(cards.length / cardsPerPage)) {
      return;
    } else setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Routes>
        <Route
          path="/cards"
          element={
            <Cards
              allCategories={cards}
              cards={currentCard}
              cardsPerPage={cardsPerPage}
              totalCards={cards.length}
              handlePaginate={handlePaginate}
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={currentPage}
            />
          }
        />
        <Route path="/cards/:id" element={<FullDescription cards={cards} />} />
      </Routes>
    </>
  );
}

export default App;
