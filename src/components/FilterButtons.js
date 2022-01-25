import { NavLink } from "react-router-dom";

const FilterButtons = ({ categories }) => {
  return (
    <div className="sorting">
      {categories.map((category, index) => (
        <NavLink className="sorting__link" key={index} to={`/${category}`}>
          {category}
        </NavLink>
      ))}
    </div>
  );
};

export default FilterButtons;
