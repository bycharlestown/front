import "./App.css";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FullDescription from "./components/FullDescription";

function App() {
  const [cards, setCards] = useState([]);

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

  return (
    <>
      <Routes>
        <Route
          path="/cards"
          element={
            <>
              <Cards cards={cards} />;
            </>
          }
        />
        <Route
          path="/cards/:id"
          element={
            <>
              <FullDescription cards={cards} />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
