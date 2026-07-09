import "./index.css";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../Navbar";

const Home = () => {
  if (Cookies.get("jwtToken") == undefined) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="home-container">
      <Navbar />

      <section className="hero-section">
        <div className="hero-left">
          <h1 className="hero-heading">
            Elevate Your Daily
            <br />
            Aesthetic.
          </h1>

          <p className="hero-description">
            Discover a curated line of clothing and cutting-edge essential gear
            engineered to keep you running smoothly all season long.
          </p>

          <button className="browse-btn">Browse Collection</button>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
            alt="Fashion Store"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
