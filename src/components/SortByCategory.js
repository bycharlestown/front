import { NavLink, useParams } from "react-router-dom";

const SortByCategory = ({ allCategories }) => {
  const { category } = useParams();
  let categories = [];

  for (let card of allCategories) {
    categories.push(card.category);
  }

  categories = [...new Set(categories)];
  return (
    <div className="sorting">
      {categories.map((category) => (
        <NavLink className="sorting__link" key={category} to="/:category">
          {category}
        </NavLink>
      ))}
    </div>
  );
};

export default SortByCategory;
