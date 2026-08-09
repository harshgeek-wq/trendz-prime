import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import Cookies from "js-cookie";
import "./index.css";

const PrimeDeals = () => {
  const [primeData, setPrimeData] = useState([]);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const getPrimeData = async () => {
      const url = "https://dummyjson.com/auth/me";
      const options = {
        method: "GET",

        headers: {
          Authorization: `Bearer ${Cookies.get("jwtToken")}`,
        },
      };
      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        if (data.id % 2 !== 0) {
          const url_2 =
            "https://dummyjson.com/auth/products/category/smartphones";
          const response_2 = await fetch(url_2, options);
          console.log(response_2);
          const data_2 = await response_2.json();
          console.log(data_2);
          setPrimeData(data_2.products);
        } else {
          setShowBanner(true);
        }
      }
    };
    getPrimeData();
  }, []);

  console.log("Prime Data: ", primeData);

  return (
    <div className="prime-deals-container">
      {showBanner ? (
        <img
          src="https://res.cloudinary.com/di6ouxigr/image/upload/v1786286607/cea252f7-eda0-4104-976c-e55c8c9b5319_f8nhjn.jpg"
          alt=""
          className="prime-deals-banner"
        />
      ) : (
        <>
          <h1 className="prime-deals-heading">Prime Deals</h1>

          <ul className="prime-deals-list">
            {primeData.slice(0, 3).map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PrimeDeals;
