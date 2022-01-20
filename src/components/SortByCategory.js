import { NavLink } from "react-router-dom";

<<<<<<< HEAD:src/components/SortByCategory.js
const SortByCategory = ({ allCategories }) => {
  const categories = [...new Set(allCategories)];

=======
const SortSearch = ({ allCategories }) => {
  let categories = [];

  for (let card of allCategories) {
    categories.push(card.category);
  }

  categories = [...new Set(categories)];
>>>>>>> c4a786584e8c19e6e95e7ac2822a38e385216949:src/components/SortSearch.js
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
