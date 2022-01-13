import { NavLink } from "react-router-dom";

const SortSearch = ({ allCategories }) => {
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

export default SortSearch;
