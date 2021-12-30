import React from "react";

const Card = ({ card }) => {
  return (
    <>
      <p>{card.image}</p>
      <p>{card.title}</p>
      <p>{card.price}</p>
      <p>{card.description}</p>
      ____________________________
    </>
  );
};

export default Card;
