import React from "react";
import "./index.css";

const FilterSidebar = () => {
  return (
    <div className="sidebar">
      <input type="text" placeholder="Search product..." className="search" />

      <h3>CATEGORY</h3>

      <p>Beauty</p>
      <p>Fragrances</p>
      <p>Furniture</p>
      <p>Groceries</p>

      <h3>RATING</h3>

      <p>4 ★ & above</p>
      <p>3 ★ & above</p>
      <p>2 ★ & above</p>
      <p>1 ★ & above</p>

      <button className="clearBtn">Clear Filters</button>
    </div>
  );
};

export default FilterSidebar;
