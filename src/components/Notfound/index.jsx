import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => (
  <div className="not-found-viewport">
    <div className="not-found-card">
      <h1>404 - Page Not Found</h1>
      <p>The layout coordinates you entered are out of scope.</p>
      <Link to="/login" className="btn-home-fallback">
        Return to Login Page
      </Link>
    </div>
  </div>
);
export default NotFound;
