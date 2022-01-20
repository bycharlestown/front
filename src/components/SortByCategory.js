import { NavLink } from "react-router-dom";

const SortByCategory = ({ allCategories }) => {
  const categories = [...new Set(allCategories)];

  return (
    <div className="sorting">
      {categories.map((category, index) => (
        <NavLink className="franchise__link" key={category} to={`/${category}`}>
          {category}---{index}
        </NavLink>
      ))}
    </div>
  );
};

export default SortByCategory;
