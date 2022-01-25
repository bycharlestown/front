import "./App.css";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CardDescription from "./components/СardDescription";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [cards, setCards] = useState([]);

  const [categories, setCategories] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(50);

  /// ************ FETCHING CATEGORIES ************

  useEffect(() => {
    const newCategories = [];

    cards.forEach((card) => {
      if (card.category !== null) newCategories.push(card.category);
    });

    setCategories([...new Set(newCategories)]);
  }, [cards]);

  // ************ FETCHING DATA ************

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setCards(cardsFromServer);
    };

    getCards();
  }, []);

  const fetchCards = async () => {
    console.log("Start fetching");
    try {
      const res = await fetch("https://localhost:5000/api/parsing_info");

      const data = await res.json();

      return data;
    } catch (error) {
      console.log("Fetching error: ", error);
    } finally {
      console.log("Fetching has been finished");
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
        {/* All cards */}

        <Route
          path="/:category"
          element={
            <>
              <FilterButtons categories={categories} />

              {cards.length > 0 ? (
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
              ) : (
                <h3>Loading...</h3>
              )}
            </>
          }
        />

        {/* Cards id description */}
        <Route
          path="/:category/:id"
          element={<CardDescription cards={cards} />}
        />
      </Routes>
    </>
  );
}

export default App;
