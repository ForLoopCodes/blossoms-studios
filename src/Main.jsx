import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Elements/Header";
import About from "./LinkPages/About";
import HomePage from "./LinkPages/HomePage";
import ProductPage from "./LinkPages/ProductPage";
import Particles from "./Elements/Particles";

export default function Main() {
  return (
    <div className="mainBody">
      <Router>
        <Header />
        <Particles />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}
