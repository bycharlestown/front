import React from "react";
import Card from "./Card";

const Cards = ({ cards }) => (
  <>
    {cards.map((card) => (
      <Card key={card.id} card={card} />
    ))}
  </>
);

export default Cards;
