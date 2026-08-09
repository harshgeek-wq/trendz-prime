import React, { useState } from "react";
import "./index.css";

const ProductHeader = (props) => {
  const { sortByOptions, activeOptionId, updateActiveOptions } = props;

  const onSelectClick = (event) => {
    updateActiveOptions(event.target.value);
  };

  return (
    <div className="top">
      <h1>All Products</h1>

      <select onChange={onSelectClick} value={activeOptionId}>
        {sortByOptions.map((eachItem) => (
          <option key={eachItem.id} value={eachItem.id}>
            {eachItem.displayText}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductHeader;
