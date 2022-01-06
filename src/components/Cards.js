import Card from "./Card";

const Cards = ({ cards }) => (
  <>
    <div className="cards">
      {cards.map((card, index) => (
        <>
          <Card key={index} card={card} />
        </>
      ))}
    </div>
  </>
);

export default Cards;
