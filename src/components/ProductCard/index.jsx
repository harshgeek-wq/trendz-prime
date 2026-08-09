import React from "react";
import "./index.css";

const ProductCard = (props) => {
  const { item } = props;

  return (
    <div className="card">
      <img src={item.images[0]} alt={item.title} />
      <div>
        <h2>{item.title}</h2>

        <p className="brand">by {item.brand ? item.brand : item.category}</p>

        <div className="bottom">
          <h3>${item.price}</h3>

          <span>{item.rating} ★</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
