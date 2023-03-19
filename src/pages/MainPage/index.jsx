import React from "react";
import CatalogMain from "../../components/CatalogMain";
import Discount from "../../components/Discount";
import SaleBanner from "../../components/SaleBanner";

export default function MainPage() {
  return (
    <div>
      <SaleBanner />
      <CatalogMain />
      <Discount />
    </div>
  );
}
