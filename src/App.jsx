import React from "react";
import LoginPage from "./components/LoginPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Products from "./components/Products";
import ProtectedRoute from "./components/ProtectedRoute";
import Notfound from "./components/Notfound";
import { Navigate } from "react-router-dom";
const App = () => {
  // ./login ---> <Login />
  // ./ --------> <Home />
  // ./products -> <Products />

  // amazon.com/login
  // amazon.com/cart
  // amazon.com/login

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/notfound" element={<Notfound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
//when an event happens and you want to navigate then we use usenavigate function
//navigate component we use on the case when you want to redirect to other component based on conditions and not event

// SCENARIO-1
// When an authenticated user tries to access the Login page ---->   trendzprime.com/login ---> Redirect to Home page

// SCENARIO-2
// When an un-authenticated user tries to access the Home page ---> trendzprime.com/ --------> Redirect him to the Login page
