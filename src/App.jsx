import { Route, Routes } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Lines from "./pages/Lines";
import Brands from "./pages/Brands";
import Colors from "./pages/Colors";
import Orders from "./pages/Orders";
import Admins from "./pages/Admins";
import Users from "./pages/Users";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <NavbarComponent />
        <div className="w-75 p-5 mx-auto">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/products" element={<Products />} />
            <Route path="/lines" element={<Lines />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
