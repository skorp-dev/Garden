import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "../../pages/CategoriesPage";
import MainPage from "../../pages/MainPage";
import ProductsPage from "../../pages/ProductsPage";
import SalesPage from "../../pages/SalesPage";
import Footer from "../Footer";
import Nav from "../Nav";
import "./index.css";

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
