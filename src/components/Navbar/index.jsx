import React from "react";
import { replace, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Navbar = () => {
  const navigate = useNavigate();
  const toggleLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/login", { replace: true });
  };
  return (
    <nav className="navbar">
      <div className="logo">
        TRENDZ<span>PRIME</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>

      <button className="logout-btn" onClick={toggleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
