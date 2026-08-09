import React from "react";
import { Link, replace, useNavigate } from "react-router-dom";
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>

      <button className="logout-btn" onClick={toggleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
