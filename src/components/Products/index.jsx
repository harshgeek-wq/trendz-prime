import React, { useEffect, useState } from "react";
import "./index.css";
import Navbar from "../Navbar";
import Cookies from "js-cookie";
import ProductCard from "../ProductCard";
import { ThreeDots } from "react-loader-spinner";
import PrimeDeals from "../PrimeDeals";
import FilterSidebar from "../FilterSidebar";
import ProductHeader from "../ProductHeader";

const sortByOptions = [
  {
    id: "PRICE-HIGH",
    displayText: "Price (High-Low)",
  },
  {
    id: "PRICE-LOW",
    displayText: "Price (Low-High)",
  },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("Loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [activeOptionId, setActiveOptionId] = useState(sortByOptions[1].id);

  const updateActiveOptions = (optionId) => {
    setActiveOptionId(optionId);
  };

  // API CALL INSIDE USE-EFFECT TO GET ALL THE LIST OF PRODUCTS.
  // inside the api call, you must include the JWT token and make the request. Or else server won't alllow.
  useEffect(() => {
    console.log("API CALLING........");

    const getProducts = async () => {
      const orderval = activeOptionId == sortByOptions[1].id ? "asc" : "desc";

      const api_url = `https://dummyjson.com/auth/products?order=${orderval}&sortBy=price`;

      const jwt = Cookies.get("jwtToken");

      console.log(jwt);

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(api_url, options);
      console.log(response);

      if (response.ok) {
        setStatus("Success");
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } else {
        setStatus("Failure");
        const data = await response.json();
        console.log(data);
        setErrorMessage(data.message);
      }
    };

    getProducts();
  }, [activeOptionId]);

  const renderSuccessView = () => (
    <div className="products">
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );

  const renderLoadingView = () => (
    <div className="loader-container">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );

  const renderFailureView = () => (
    <div className="failure-container">
      <h2>{errorMessage}</h2>
    </div>
  );

  const renderSwitch = () => {
    switch (status) {
      case "Success":
        return renderSuccessView();

      case "Failure":
        return renderFailureView();

      case "Loading":
        return renderLoadingView();

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <PrimeDeals />

      <div className="container">
        <FilterSidebar />

        <div className="productsSection">
          <ProductHeader
            sortByOptions={sortByOptions}
            activeOptionId={activeOptionId}
            updateActiveOptions={updateActiveOptions}
          />
          {renderSwitch()}
        </div>
      </div>
    </>
  );
};

export default Products;
