import Card from "./Card";

const Cards = ({ cards }) => (
  <>
    <ul className="cards">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </ul>
  </>
);

export default Cards;
