import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import BasketPage from "../../pages/BasketPage";
import CategoriesPage from "../../pages/CategoriesPage";
import DescriptionProductPage from "../../pages/DescriptionProductPage";
import MainPage from "../../pages/MainPage";
import NotFoundPage from "../../pages/NotFoundPage";
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
    <div className="wrapper">
      <Nav />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/product/:id" element={<DescriptionProductPage />} />
        <Route path="/categories/:catTitle/:catId" element={<ProductsPage />} />
        <Route path="/:sales" element={<ProductsPage />} />
        <Route path="/categories/all" element={<CategoriesPage />} />
        <Route path="/basket/" element={<BasketPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
