import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage";
import Food from "./pages/food";
import SignUp from "./pages/signUp";
import Food2 from "./pages/food2";
import Cart from "./pages/cart";

export default function App() {

  return (
    <BrowserRouter basename="/redonion">
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/food/:id" element={<Food />} />
        <Route path="/food2/:id" element={<Food2/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
};