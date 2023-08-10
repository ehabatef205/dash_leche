import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DashpageCategory from "./pages/CatDash";
import DashpageOrders from "./pages/dash";
import EditCategory from "./pages/Editcat";
import CreateCategory from "./pages/Create cat";
import DashpageProduct from "./pages/ProductsDash";
import EditProduct from "./pages/EditProduct";
import ViewOrder from "./pages/Vieworder";
import Createproduct from "./pages/Create product";
import CreateSliderImage from "./pages/CreateImageSlider";
import EditSliderImage from "./pages/EditSliderImage";
import DashpageSlider from "./pages/SliderDash";
import DashpageImage from "./pages/ImagesDash";
import EditImage from "./pages/EditImage";
import DashpageUsers from "./pages/UserDash";
import DashFeaturedBrands from "./pages/FeaturedBrandsDash";
import CreateFeaturedBrands from "./pages/CreateFeaturedBrands";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#e7e7e7" }}>

      <Routes>
        <Route path="/" element={<DashpageCategory />} />
        <Route path="/dash/orders" element={<DashpageOrders />} />
        <Route path="/dash/category/edit/:id" element={<EditCategory />} />
        <Route path="/dash/category/create" element={<CreateCategory />} />
        <Route path="/dash/product/cat/:id" element={<DashpageProduct />} />
        <Route path="/dash/product/edit/:id" element={<EditProduct />} />
        <Route path="/dash/slider" element={<DashpageSlider />} />
        <Route path="/dash/slider/create" element={<CreateSliderImage />} />
        <Route path="/dash/slider/edit/:id" element={<EditSliderImage />} />
        <Route path="/dash/image" element={<DashpageImage />} />
        <Route path="/dash/image/edit/:id" element={<EditImage />} />
        <Route path="/vieworder/" element={<ViewOrder />} />
        <Route path="/dash/create/product" element={<Createproduct />} />
        <Route path="/dash/users" element={<DashpageUsers />} />
        <Route path="/dash/featured_brands" element={<DashFeaturedBrands />} />
        <Route path="/dash/featured_brands/create" element={<CreateFeaturedBrands />} />
      </Routes>
    </div>
  );
}

export default App;

