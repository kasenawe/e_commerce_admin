import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Series from "./pages/Series";
import Brands from "./pages/Brands";
import Colors from "./pages/Colors";
import Orders from "./pages/Orders";
import Admins from "./pages/Admins";
import Users from "./pages/Users";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/series" element={<Series />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
