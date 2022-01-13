import { NavLink } from "react-router-dom";

const SortSearch = ({ allCategories }) => {
  let categories = [...new Set(allCategories)];
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

export default SortSearch;
