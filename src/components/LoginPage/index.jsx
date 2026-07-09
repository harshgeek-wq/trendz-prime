import React, { useState } from "react";
import "./index.css";
import Home from "../Home";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginPage = () => {
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const [showError, setShowError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const [error, setError] = useState({ status: false, msg: "" });

  const toggleUsername = (event) => {
    setUserName(event.target.value);
  };

  const togglePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const url = "https://dummyjson.com/auth/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };

    const response = await fetch(url, options);
    console.log(response); // 200---> true, 400---> false
    const data = await response.json();
    console.log(data); // accessToekn , message of error

    if (response.ok) {
      //go to homepage
      Cookies.set("jwtToken", data.accessToken, { expires: 30 });
      navigate("/", { replace: true });
    } else {
      //show error

      // setShowError(true);
      // setErrorMessage(data.message);

      setError({ status: true, msg: data.message });
    }
  };

  // check if the jwto token is there in cookies or not. if it is there, then he's an authenticated user, so redirect to home
  if (Cookies.get("jwtToken") !== undefined) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-box">
      <form action="" className="login-form" onSubmit={submitForm}>
        <h1 className="logo">
          TRENDZ<span>PRIME</span>
        </h1>

        <p className="login-text">
          Enter credentials to securely connect to inventory pipelines
        </p>

        <label className="login-label" htmlFor="username">
          USERNAME
        </label>

        <input
          className="login-input"
          type="text"
          id="username"
          placeholder="Enter your name..."
          value={username}
          onChange={toggleUsername}
        />

        <label className="login-label" htmlFor="password">
          PASSWORD
        </label>

        <input
          className="login-input"
          type="password"
          id="password"
          placeholder="Enter your Password..."
          value={password}
          onChange={togglePassword}
        />

        <button className="login-btn" title="this is a button" type="submit">
          Sign In
        </button>

        {/* {showError && <p className="form-error">{errorMessage} </p>} */}

        {error.status && <p className="form-error">{error.msg} </p>}
      </form>
    </div>
  );
};

export default LoginPage;
