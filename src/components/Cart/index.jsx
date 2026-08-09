import React from "react";
import Navbar from "../Navbar";
import "./index.css";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Cart = () => {
  if (Cookies.get("jwtToken") === undefined) {
    return <Navigate to="/login" replace />;
  }

  //  If not signed in, then navigate to login page

  return (
    <>
      <Navbar />
      <div className="cart-box">
        <div className="cart-container">
          <h1 className="cart-heading">Your Card is Empty</h1>
          <p className="cart-p">
            Items you select will be shown inside this dashboard pipeline
            manifest
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
