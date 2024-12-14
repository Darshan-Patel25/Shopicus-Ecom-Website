import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./pages/shop";
import ShopCategory from "./pages/Shopcategory";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Login from "./pages/loginsignup";
import Footer from "./components/footer/footer"
import men_benner from "./components/Accets/banner_men.png"
import women_benner from "./components/Accets/banner_women1.png"
import kids_benner from "./components/Accets/banner.jpeg"
import Blog from "./components/blog/blog"

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
         <hr  id="apphr"/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_benner} category="mens" />} />
            <Route path="/womens" element={<ShopCategory banner={women_benner} category="womens" />} />
            <Route path="/kids" element={<ShopCategory banner={kids_benner} category="kids" />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product" element={<Product />}>
              {/* <Route index element={<Product />} /> */}
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
       
      </div>
    </>
  );
}

export default App;


