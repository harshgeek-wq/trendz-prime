import React from "react";
import LoginPage from "./components/LoginPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  // ./login ---> <Login />
  // ./ --------> <Home />
  // ./products -> <Products />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
