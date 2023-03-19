import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "../../pages/CategoriesPage";
import MainPage from "../../pages/MainPage";
import ProductsPage from "../../pages/ProductsPage";
import { loadCategories } from "../../store/asyncActions/loadCategories";
import { loadProducts } from "../../store/asyncActions/loadProducts";
import Footer from "../Footer";
import Nav from "../Nav";
import "./index.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories);
    dispatch(loadProducts);
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/:sales" element={<ProductsPage />} />
        <Route path="/categories/all" element={<CategoriesPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
